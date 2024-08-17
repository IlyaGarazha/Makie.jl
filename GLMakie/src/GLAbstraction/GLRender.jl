function render(list::Tuple)
    for elem in list
        render(elem)
    end
    return
end

function setup_clip_planes(robj)
    N = to_value(get(robj.uniforms, :num_clip_planes, 0))
    for i in 0:min(7, N-1)
        glEnable(GL_CLIP_DISTANCE0 + UInt32(i))
    end
    # TODO: This crashes?
    # for i in N:7
    #     glDisable(GL_CLIP_DISTANCE0 + UInt32(i))
    # end
end


"""
When rendering a specialised list of Renderables, we can do some optimizations
"""
function render(list::Vector{RenderObject{Pre}}) where Pre
    isempty(list) && return nothing
    first(list).prerenderfunction()
    setup_clip_planes(first(list))
    vertexarray = first(list).vertexarray
    program = vertexarray.program
    glUseProgram(program.id)
    bind(vertexarray)
    for renderobject in list
        renderobject.visible || continue # skip invisible
        # make sure we only bind new programs and vertexarray when it is actually
        # different from the previous one
        if renderobject.vertexarray != vertexarray
            vertexarray = renderobject.vertexarray
            if vertexarray.program != program
                program = renderobject.vertexarray.program
                glUseProgram(program.id)
            end
            bind(vertexarray)
        end
        for (key, value) in program.uniformloc
            if haskey(renderobject.uniforms, key)
                if length(value) == 1
                    gluniform(value[1], renderobject.uniforms[key])
                elseif length(value) == 2
                    gluniform(value[1], value[2], renderobject.uniforms[key])
                else
                    error("Uniform tuple too long: $(length(value))")
                end
            end
        end
        renderobject.postrenderfunction()
    end
    # we need to assume, that we're done here, which is why
    # we need to bind VertexArray to 0.
    # Otherwise, every glBind(::GLBuffer) operation will be recorded into the state
    # of the currently bound vertexarray
    glBindVertexArray(0)
    return
end

"""
Renders a RenderObject
Note, that this function is not optimized at all!
It uses dictionaries and doesn't care about OpenGL call optimizations.
So rewriting this function could get us a lot of performance for scenes with
a lot of objects.
"""
function render(renderobject::RenderObject, vertexarray=renderobject.vertexarray)
    if renderobject.visible
        renderobject.prerenderfunction()
        setup_clip_planes(renderobject)
        program = vertexarray.program
        glUseProgram(program.id)
        for (key, value) in program.uniformloc
            if haskey(renderobject.uniforms, key)
                # uniform_name_type(program, value[1])
                try
                    if length(value) == 1
                        gluniform(value[1], renderobject.uniforms[key])
                    elseif length(value) == 2
                        gluniform(value[1], value[2], renderobject.uniforms[key])
                    else
                        error("Uniform tuple too long: $(length(value))")
                    end
                catch e
                    @warn error("uniform $key doesn't work with value $(renderobject.uniforms[key])") exception=(e, Base.catch_backtrace())
                end
            end
        end
        bind(vertexarray)
        renderobject.postrenderfunction()
        glBindVertexArray(0)
    end
    return
end


"""
Renders a vertexarray, which consists of the usual buffers plus a vector of
unitranges which defines the segments of the buffers to be rendered
"""
function render(vao::GLVertexArray{T}, mode::GLenum=GL_TRIANGLES) where T <: VecOrSignal{UnitRange{Int}}
    for elem in to_value(vao.indices)
        glDrawArrays(mode, max(first(elem) - 1, 0), length(elem) + 1)
    end
    return nothing
end

function render(vao::GLVertexArray{T}, mode::GLenum=GL_TRIANGLES) where T <: TOrSignal{UnitRange{Int}}
    r = to_value(vao.indices)
    offset = first(r) - 1 # 1 based -> 0 based
    ndraw = length(r)
    nverts = length(vao)
    if (offset < 0 || offset + ndraw > nverts)
        error("Bounds error for drawrange. Offset $(offset) and length $(ndraw) aren't a valid range for vertexarray with length $(nverts)")
    end
    glDrawArrays(mode, offset, ndraw)
    return nothing
end

function render(vao::GLVertexArray{T}, mode::GLenum=GL_TRIANGLES) where T <: TOrSignal{Int}
    r = to_value(vao.indices)
    glDrawArrays(mode, 0, r)
    return nothing
end

"""
Renders a vertex array which supplies an indexbuffer
"""
function render(vao::GLVertexArray{GLBuffer{T}}, mode::GLenum=GL_TRIANGLES) where T <: Union{Integer,AbstractFace}
    glDrawElements(
        mode,
        length(vao.indices) * cardinality(vao.indices),
        julia2glenum(T), C_NULL
    )
    return
end

"""
Renders a normal vertex array only containing the usual buffers buffers.
"""
function render(vao::GLVertexArray, mode::GLenum=GL_TRIANGLES)
    glDrawArrays(mode, 0, length(vao))
    return
end

"""
Render instanced geometry
"""
renderinstanced(vao::GLVertexArray, a, primitive=GL_TRIANGLES) = renderinstanced(vao, length(a), primitive)

"""
Renders `amount` instances of an indexed geometry
"""
function renderinstanced(vao::GLVertexArray{GLBuffer{T}}, amount::Integer, primitive=GL_TRIANGLES) where T <: Union{Integer,AbstractFace}
    glDrawElementsInstanced(primitive, length(vao.indices) * cardinality(vao.indices), julia2glenum(T), C_NULL, amount)
    return
end

"""
Renders `amount` instances of an not indexed geoemtry geometry
"""
function renderinstanced(vao::GLVertexArray, amount::Integer, primitive=GL_TRIANGLES)
    glDrawElementsInstanced(primitive, length(vao), GL_UNSIGNED_INT, C_NULL, amount)
    return
end
# handle all uniform objects

##############################################################################################
#  Generic render functions
#####
function enabletransparency()
    glEnablei(GL_BLEND, 0)
    glDisablei(GL_BLEND, 1)
    # We render to a potentially transparent scene here. The final blending 
    # may look like this:
    # (s)creen <- (b)ackground <- (r)ender
    # with the screen being opaque. This should blend as:
    #   r.a * r.rgb + (1-r.a) * (b.a * b.rgb + (1-b.a) * s.rgb), 1
    # = r.a * r.rgb + (1-r.a) * b.a * b.rgb + (1-r.a) * (1-b.a) * s.rgb, 1
    # If we want to run the screen blend at a later stage we can:
    # - precalculate p = b.a * b.rgb, 1 - b.a in the background buffer
    # - track (1 - r.a) * p.a as alpha in the buffer
    # which gives us the following blending rule:
    # r.a * r.rgb + (1-r.a) * p.rgb, 0 * r.a + (1-r.a) * p.a 
    glBlendFuncSeparate(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, GL_ZERO, GL_ONE_MINUS_SRC_ALPHA)

    # This does:
    # target.rgb = source.a * source.rgb + (1 - source.a) * target.rgb
    # target.a = 0 * source.a + 1 * target.a
    # the latter is required to keep target.a = 1 for the OIT pass
    # glBlendFuncSeparate(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, GL_ZERO, GL_ONE)
    # glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    return
end
