import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.BrMZ4bj8.js";const t="/previews/PR4138/assets/b1a74e3.Fg2xOglf.png",l="/previews/PR4138/assets/284c3ab.C6MfPYeP.png",h="/previews/PR4138/assets/862eddb.BT3P-Vq5.png",b=JSON.parse('{"title":"series","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/series.md","filePath":"reference/plots/series.md","lastUpdated":null}'),n={name:"reference/plots/series.md"},r=e(`<h1 id="series" tabindex="-1">series <a class="header-anchor" href="#series" aria-label="Permalink to &quot;series&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.series-reference-plots-series" href="#Makie.series-reference-plots-series">#</a> <b><u>Makie.series</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">series</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(curves)</span></span></code></pre></div><p>Curves can be:</p><ul><li><p><code>AbstractVector{&lt;: AbstractVector{&lt;: Point2}}</code>: the native representation of a series as a vector of lines</p></li><li><p><code>AbstractMatrix</code>: each row represents y coordinates of the line, while <code>x</code> goes from <code>1:size(curves, 1)</code></p></li><li><p><code>AbstractVector, AbstractMatrix</code>: the same as the above, but the first argument sets the x values for all lines</p></li><li><p><code>AbstractVector{&lt;: Tuple{X&lt;: AbstractVector, Y&lt;: AbstractVector}}</code>: A vector of tuples, where each tuple contains a vector for the x and y coordinates</p></li></ul><p>If any of <code>marker</code>, <code>markersize</code>, <code>markercolor</code>, <code>strokecolor</code> or <code>strokewidth</code> is set != nothing, a scatterplot is added.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>series</code> function is <code>Series</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/67c25a2c2da9ec2815b3137a1489183d3469a4a4/MakieCore/src/recipes.jl#L453-L498" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="matrix" tabindex="-1">Matrix <a class="header-anchor" href="#matrix" aria-label="Permalink to &quot;Matrix&quot;">​</a></h3><a id="example-b1a74e3"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cumsum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), dims </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig, ax, sp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> series</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, labels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;label </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">axislegend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><h3 id="Vector-of-vectors" tabindex="-1">Vector of vectors <a class="header-anchor" href="#Vector-of-vectors" aria-label="Permalink to &quot;Vector of vectors {#Vector-of-vectors}&quot;">​</a></h3><a id="example-284c3ab"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pointvectors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point2f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cumsum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">series</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pointvectors, markersize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:Set1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><h3 id="Vector-and-matrix" tabindex="-1">Vector and matrix <a class="header-anchor" href="#Vector-and-matrix" aria-label="Permalink to &quot;Vector and matrix {#Vector-and-matrix}&quot;">​</a></h3><a id="example-862eddb"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cumsum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), dims </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">series</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data, solid_color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+h+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>:lighttest</code></p><p>No docs available.</p><h3 id="joinstyle" tabindex="-1">joinstyle <a class="header-anchor" href="#joinstyle" aria-label="Permalink to &quot;joinstyle&quot;">​</a></h3><p>Defaults to <code>@inherit joinstyle</code></p><p>No docs available.</p><h3 id="labels" tabindex="-1">labels <a class="header-anchor" href="#labels" aria-label="Permalink to &quot;labels&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="linecap" tabindex="-1">linecap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;linecap&quot;">​</a></h3><p>Defaults to <code>@inherit linecap</code></p><p>No docs available.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle&quot;">​</a></h3><p>Defaults to <code>:solid</code></p><p>No docs available.</p><h3 id="linewidth" tabindex="-1">linewidth <a class="header-anchor" href="#linewidth" aria-label="Permalink to &quot;linewidth&quot;">​</a></h3><p>Defaults to <code>2</code></p><p>No docs available.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="markercolor" tabindex="-1">markercolor <a class="header-anchor" href="#markercolor" aria-label="Permalink to &quot;markercolor&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="miter-limit" tabindex="-1">miter_limit <a class="header-anchor" href="#miter-limit" aria-label="Permalink to &quot;miter_limit&quot;">​</a></h3><p>Defaults to <code>@inherit miter_limit</code></p><p>No docs available.</p><h3 id="solid-color" tabindex="-1">solid_color <a class="header-anchor" href="#solid-color" aria-label="Permalink to &quot;solid_color&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>No docs available.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p>',59),p=[r];function o(k,d,c,E,g,u){return a(),i("div",null,p)}const m=s(n,[["render",o]]);export{b as __pageData,m as default};
