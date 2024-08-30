import{_ as e,c as a,o as s,a7 as i}from"./chunks/framework.BrMZ4bj8.js";const u=JSON.parse('{"title":"Scenes","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/scenes.md","filePath":"explanations/scenes.md","lastUpdated":null}'),t={name:"explanations/scenes.md"},n=i(`<h1 id="scenes" tabindex="-1">Scenes <a class="header-anchor" href="#scenes" aria-label="Permalink to &quot;Scenes&quot;">​</a></h1><h2 id="What-is-a-Scene?" tabindex="-1">What is a <code>Scene</code>? <a class="header-anchor" href="#What-is-a-Scene?" aria-label="Permalink to &quot;What is a \`Scene\`? {#What-is-a-Scene?}&quot;">​</a></h2><p><code>Scene</code>s are fundamental building blocks of Makie figures. A Scene is like a container for <code>Plot</code>s and other <code>Scene</code>s. <code>Scenes</code> have <code>Plot</code>s and <code>Subscenes</code> associated with them. Every Scene also has a transformation, made up of <em>scale</em>, <em>translation</em>, and <em>rotation</em>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Before the introduction of the <code>Figure</code> workflow, <code>Scene</code>s used to be the main container object which was returned from all plotting functions. Now, scenes are mostly an implementation detail for many users, unless they want to build custom solutions that go beyond what the default system offers.</p></div><p>A Scene&#39;s plots can be accessed via <code>scene.plots</code>.</p><p>A Scene&#39;s subscenes (also called children) can be accessed through <code>scene.children</code>. This will return an Array of the <code>Scene</code>&#39;s child scenes. A child scene can be created by <code>childscene = Scene(parentscene)</code>.</p><p>Any <code>Scene</code> with an axis also has a <code>camera</code> associated with it; this can be accessed through <code>camera(scene)</code>, and its controls through <code>cameracontrols(scene)</code>. More documentation about these is in the <a href="/previews/PR4138/explanations/cameras#Cameras">Cameras</a> section.</p><p><code>Scene</code>s have a configurable size. You can set the size in device-independent pixels by doing <code>Scene(size = (500, 500))</code>. (More about sizes, resolutions and units in <a href="/previews/PR4138/explanations/figure#Figure-size-and-units">Figure size and units</a>)</p><p>Any keyword argument given to the <code>Scene</code> will be propagated to its plots; therefore, you can set the palette or the colormap in the Scene itself.</p><h2 id="subscenes" tabindex="-1">Subscenes <a class="header-anchor" href="#subscenes" aria-label="Permalink to &quot;Subscenes&quot;">​</a></h2><p>A subscene is no different than a normal Scene, except that it is linked to a &quot;parent&quot; Scene. It inherits the transformations of the parent Scene, but can then be transformed independently of it.</p><h2 id="Scene-Attributes" tabindex="-1">Scene Attributes <a class="header-anchor" href="#Scene-Attributes" aria-label="Permalink to &quot;Scene Attributes {#Scene-Attributes}&quot;">​</a></h2><ul><li><p><code>scene.clear = true</code>: Scenes are drawn parent first onto the same image. If <code>clear = true</code> for a (sub)scene it will clear the previously drawn things in its region to its <code>backgroundcolor</code>. Otherwise the plots in <code>scene</code> will be drawn on top and the backgroundcolor will be ignored. Note that this is not technically an attribute but just a field of <code>Scene</code>.</p></li><li><p><code>ssao = SSAO(bias = 0.025, blur=2, radius=0.5)</code>: Controls SSAO settings, see lighting documentation.</p></li><li><p><code>size = (800, 600)</code>: Sets the size of the created window if the scene is the root scene.</p></li></ul><h2 id="Modifying-A-Scene" tabindex="-1">Modifying A Scene <a class="header-anchor" href="#Modifying-A-Scene" aria-label="Permalink to &quot;Modifying A Scene {#Modifying-A-Scene}&quot;">​</a></h2><p>Makie offers mutation functions to scale, translate and rotate your Scenes on the fly.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.translate!-explanations-scenes" href="#Makie.translate!-explanations-scenes">#</a> <b><u>Makie.translate!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xyz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VecTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xyz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Apply an absolute translation to the given <code>Transformable</code> (a Scene or Plot), translating it to <code>x, y, z</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/layouting/transformation.jl#L153-L158" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Accum, t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xyz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Translate the given <code>Transformable</code> (a Scene or Plot), relative to its current position.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/layouting/transformation.jl#L162-L166" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.rotate!-explanations-scenes" href="#Makie.rotate!-explanations-scenes">#</a> <b><u>Makie.rotate!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Accum, t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axis_rot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Apply a relative rotation to the transformable, by multiplying by the current rotation.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/layouting/transformation.jl#L110-L114" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axis_rot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Quaternion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axis_rot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axis_rot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Apply an absolute rotation to the transformable. Rotations are all internally converted to <code>Quaternion</code>s.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/layouting/transformation.jl#L117-L123" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.scale!-explanations-scenes" href="#Makie.scale!-explanations-scenes">#</a> <b><u>Makie.scale!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scale!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scale!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y, z)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scale!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xyz)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scale!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Transformable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xyz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Scale the given <code>Transformable</code> (a Scene or Plot) to the given arguments. Can take <code>x, y</code> or <code>x, y, z</code>. This is an absolute scaling, and there is no option to perform relative scaling.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/layouting/transformation.jl#L84-L93" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Updating-the-Scene" tabindex="-1">Updating the Scene <a class="header-anchor" href="#Updating-the-Scene" aria-label="Permalink to &quot;Updating the Scene {#Updating-the-Scene}&quot;">​</a></h2><p>When the Scene is changed, you may need to update several aspects of it. Makie provides three main updating functions:</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.update_cam!" href="#Makie.update_cam!">#</a> <b><u>Makie.update_cam!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_cam!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SceneLike</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, area)</span></span></code></pre></div><p>Updates the camera for the given <code>scene</code> to cover the given <code>area</code> in 2d.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/camera/camera2d.jl#L54-L58" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_cam!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SceneLike</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Updates the camera for the given <code>scene</code> to cover the limits of the <code>Scene</code>. Useful when using the <code>Observable</code> pipeline.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/camera/camera2d.jl#L67-L72" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_cam!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, cam</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Camera3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ϕ, θ[, radius])</span></span></code></pre></div><p>Set the camera position based on two angles <code>0 ≤ ϕ ≤ 2π</code> and <code>-pi/2 ≤ θ ≤ pi/2</code> and an optional radius around the current <code>cam.lookat[]</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/camera/camera3d.jl#L802-L807" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_cam!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, eyeposition, lookat, up </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vec3d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>Updates the camera&#39;s controls to point to the specified location.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/src/camera/old_camera3d.jl#L358-L362" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>Scenes have several pre-created event &quot;hooks&quot; (through Observables) that you can handle. These can be accessed through <code>scene.events</code>, which returns an <a href="/previews/PR4138/api#Makie.Events"><code>Events</code></a> struct.</p>`,27),l=[n];function h(r,o,p,c,d,k){return s(),a("div",null,l)}const b=e(t,[["render",h]]);export{u as __pageData,b as default};
