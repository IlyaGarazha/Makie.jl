import{_ as a,c as i,o as s,a7 as e}from"./chunks/framework.CmE4kLQ9.js";const t="/dev/assets/ebada61.DVSyjUef.png",l="/dev/assets/f4f0bc6.D6sXJM8N.png",h="/dev/assets/461cf7b.xa1Q4qrm.png",b=JSON.parse('{"title":"volume","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/volume.md","filePath":"reference/plots/volume.md","lastUpdated":null}'),n={name:"reference/plots/volume.md"},o=e(`<h1 id="volume" tabindex="-1">volume <a class="header-anchor" href="#volume" aria-label="Permalink to &quot;volume&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="MakieCore.volume-reference-plots-volume" href="#MakieCore.volume-reference-plots-volume">#</a> <b><u>MakieCore.volume</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(volume_data)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, z, volume_data)</span></span></code></pre></div><p>Plots a volume, with optional physical dimensions <code>x, y, z</code>. Available algorithms are:</p><ul><li><p><code>:iso</code> =&gt; IsoValue</p></li><li><p><code>:absorption</code> =&gt; Absorption</p></li><li><p><code>:mip</code> =&gt; MaximumIntensityProjection</p></li><li><p><code>:absorptionrgba</code> =&gt; AbsorptionRGBA</p></li><li><p><code>:additive</code> =&gt; AdditiveRGBA</p></li><li><p><code>:indexedabsorption</code> =&gt; IndexedAbsorptionRGBA</p></li></ul><p><strong>Plot type</strong></p><p>The plot type alias for the <code>volume</code> function is <code>Volume</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/02ccec36a2083c10d3b3ada510b587ec2b934ded/MakieCore/src/recipes.jl#L453-L545" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><a id="example-ebada61"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LinRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cube </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r, y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r, z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cube, alpha</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><a id="example-f4f0bc6"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cube_with_holes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cube </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cube </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cube_with_holes, algorithm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :iso</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, isorange </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.05</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, isovalue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><a id="example-461cf7b"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NIfTI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">brain </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> niread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">assetpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;brain.nii.gz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">raw</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mini, maxi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> extrema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(brain)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">normed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Float32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.((brain </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mini) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">./</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (maxi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mini))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">450</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Make a colormap, with the first value being transparent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colormap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> to_colormap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:plasma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colormap[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RGBAf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], normed, algorithm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :absorption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, absorption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4f0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, colormap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colormap, axis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Axis3, title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Absorption&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], normed, algorithm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :mip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, colormap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colormap, axis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Axis3, title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Maximum Intensity Projection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+h+'" width="1000px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="absorption" tabindex="-1">absorption <a class="header-anchor" href="#absorption" aria-label="Permalink to &quot;absorption&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>Absorption multiplier for algorithm=:absorption. This changes how much light each voxel absorbs.</p><h3 id="algorithm" tabindex="-1">algorithm <a class="header-anchor" href="#algorithm" aria-label="Permalink to &quot;algorithm&quot;">​</a></h3><p>Defaults to <code>:mip</code></p><p>Sets the volume algorithm that is used.</p><h3 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-label="Permalink to &quot;alpha&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>The alpha value of the colormap or color attribute. Multiple alphas like in <code>plot(alpha=0.2, color=(:red, 0.5)</code>, will get multiplied.</p><h3 id="backlight" tabindex="-1">backlight <a class="header-anchor" href="#backlight" aria-label="Permalink to &quot;backlight&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>Sets a weight for secondary light calculation with inverted normals.</p><h3 id="clip-planes" tabindex="-1">clip_planes <a class="header-anchor" href="#clip-planes" aria-label="Permalink to &quot;clip_planes&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Clip planes offer a way to do clipping in 3D space. You can set a Vector of up to 8 <code>Plane3f</code> planes here, behind which plots will be clipped (i.e. become invisible). By default clip planes are inherited from the parent plot or scene. You can remove parent <code>clip_planes</code> by passing <code>Plane3f[]</code>.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap :viridis</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s. <code>PlotUtils.cgrad(...)</code>, <code>Makie.Reverse(any_colormap)</code> can be used as well, or any symbol from ColorBrewer or PlotUtils. To see all available color gradients, you can call <code>Makie.available_gradients()</code>.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The values representing the start and end points of <code>colormap</code>.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>The color transform function. Can be any function, but only works well together with <code>Colorbar</code> for <code>identity</code>, <code>log</code>, <code>log2</code>, <code>log10</code>, <code>sqrt</code>, <code>logit</code>, <code>Makie.pseudolog10</code> and <code>Makie.Symlog10</code>.</p><h3 id="depth-shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth-shift" aria-label="Permalink to &quot;depth_shift&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="diffuse" tabindex="-1">diffuse <a class="header-anchor" href="#diffuse" aria-label="Permalink to &quot;diffuse&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>Sets how strongly the red, green and blue channel react to diffuse (scattered) light.</p><h3 id="enable-depth" tabindex="-1">enable_depth <a class="header-anchor" href="#enable-depth" aria-label="Permalink to &quot;enable_depth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Enables depth write for Volume, so that volume correctly occludes other objects.</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="highclip" tabindex="-1">highclip <a class="header-anchor" href="#highclip" aria-label="Permalink to &quot;highclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value above the colorrange.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector-clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector-clear" aria-label="Permalink to &quot;inspector_clear&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector-hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector-hover" aria-label="Permalink to &quot;inspector_hover&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector-label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector-label" aria-label="Permalink to &quot;inspector_label&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="interpolate" tabindex="-1">interpolate <a class="header-anchor" href="#interpolate" aria-label="Permalink to &quot;interpolate&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Sets whether the volume data should be sampled with interpolation.</p><h3 id="isorange" tabindex="-1">isorange <a class="header-anchor" href="#isorange" aria-label="Permalink to &quot;isorange&quot;">​</a></h3><p>Defaults to <code>0.05</code></p><p>Sets the range of values picked up by the IsoValue algorithm.</p><h3 id="isovalue" tabindex="-1">isovalue <a class="header-anchor" href="#isovalue" aria-label="Permalink to &quot;isovalue&quot;">​</a></h3><p>Defaults to <code>0.5</code></p><p>Sets the target value for the IsoValue algorithm.</p><h3 id="lowclip" tabindex="-1">lowclip <a class="header-anchor" href="#lowclip" aria-label="Permalink to &quot;lowclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value below the colorrange.</p><h3 id="material" tabindex="-1">material <a class="header-anchor" href="#material" aria-label="Permalink to &quot;material&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>RPRMakie only attribute to set complex RadeonProRender materials. <em>Warning</em>, how to set an RPR material may change and other backends will ignore this attribute</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="nan-color" tabindex="-1">nan_color <a class="header-anchor" href="#nan-color" aria-label="Permalink to &quot;nan_color&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color for NaN values.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="shading" tabindex="-1">shading <a class="header-anchor" href="#shading" aria-label="Permalink to &quot;shading&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets the lighting algorithm used. Options are <code>NoShading</code> (no lighting), <code>FastShading</code> (AmbientLight + PointLight) or <code>MultiLightShading</code> (Multiple lights, GLMakie only). Note that this does not affect RPRMakie.</p><h3 id="shininess" tabindex="-1">shininess <a class="header-anchor" href="#shininess" aria-label="Permalink to &quot;shininess&quot;">​</a></h3><p>Defaults to <code>32.0</code></p><p>Sets how sharp the reflection is.</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="specular" tabindex="-1">specular <a class="header-anchor" href="#specular" aria-label="Permalink to &quot;specular&quot;">​</a></h3><p>Defaults to <code>0.2</code></p><p>Sets how strongly the object reflects light in the red, green and blue channels.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p>',113),p=[o];function r(d,k,c,g,E,u){return s(),i("div",null,p)}const m=a(n,[["render",r]]);export{b as __pageData,m as default};
