import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.hJ-69dKD.js";const e="/previews/PR4244/assets/f28cb94.DBizIyeB.png",l="/previews/PR4244/assets/8145051.BhZqk3d2.png",h="/previews/PR4244/assets/2703608.CQ67Hvw1.png",n="/previews/PR4244/assets/b67b9d0.BT3Bltbj.png",u=JSON.parse('{"title":"hist","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/hist.md","filePath":"reference/plots/hist.md","lastUpdated":null}'),p={name:"reference/plots/hist.md"},k=t(`<h1 id="hist" tabindex="-1">hist <a class="header-anchor" href="#hist" aria-label="Permalink to &quot;hist&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.hist-reference-plots-hist" href="#Makie.hist-reference-plots-hist">#</a> <b><u>Makie.hist</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values)</span></span></code></pre></div><p>Plot a histogram of <code>values</code>.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>hist</code> function is <code>Hist</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/453fc649e6b38dceb31397aa33c847d376e86764/MakieCore/src/recipes.jl#L453-L524" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><a id="example-f28cb94"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data, bins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data, bins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strokewidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strokecolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data, bins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data, normalization </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :pdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+e+`" width="600px" height="450px"><h4 id="Histogram-with-labels" tabindex="-1">Histogram with labels <a class="header-anchor" href="#Histogram-with-labels" aria-label="Permalink to &quot;Histogram with labels {#Histogram-with-labels}&quot;">​</a></h4><p>You can use all the same arguments as <a href="/previews/PR4244/reference/plots/barplot#barplot"><code>barplot</code></a>: <a id="example-8145051"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, normalization </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :pdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bar_labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     label_formatter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, digits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), label_size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     strokewidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strokecolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><h4 id="Moving-histograms" tabindex="-1">Moving histograms <a class="header-anchor" href="#Moving-histograms" aria-label="Permalink to &quot;Moving histograms {#Moving-histograms}&quot;">​</a></h4><p>With <code>scale_to</code>, and <code>offset</code>, one can put multiple histograms into the same plot. Note, that offset automatically sets fillto, to move the whole barplot. Also, one can use a negative <code>scale_to</code> amount to flip the histogram, or <code>scale_to=:flip</code> to flip the direction of the bars without changing their height. <a id="example-2703608"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     hist!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), scale_to</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, offset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i, direction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+h+`" width="600px" height="450px"><h4 id="Using-statistical-weights" tabindex="-1">Using statistical weights <a class="header-anchor" href="#Using-statistical-weights" aria-label="Permalink to &quot;Using statistical weights {#Using-statistical-weights}&quot;">​</a></h4><a id="example-b67b9d0"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Distributions</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100_000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Uniform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), N)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Normal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), x)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], x, weights </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> w)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+n+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="bar-labels" tabindex="-1">bar_labels <a class="header-anchor" href="#bar-labels" aria-label="Permalink to &quot;bar_labels&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="bins" tabindex="-1">bins <a class="header-anchor" href="#bins" aria-label="Permalink to &quot;bins&quot;">​</a></h3><p>Defaults to <code>15</code></p><p>Can be an <code>Int</code> to create that number of equal-width bins over the range of <code>values</code>. Alternatively, it can be a sorted iterable of bin edges.</p><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>Color can either be:</p><ul><li><p>a vector of <code>bins</code> colors</p></li><li><p>a single color</p></li><li><p><code>:values</code>, to color the bars with the values from the histogram</p></li></ul><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="direction" tabindex="-1">direction <a class="header-anchor" href="#direction" aria-label="Permalink to &quot;direction&quot;">​</a></h3><p>Defaults to <code>:y</code></p><p>Set the direction of the bars.</p><h3 id="fillto" tabindex="-1">fillto <a class="header-anchor" href="#fillto" aria-label="Permalink to &quot;fillto&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Defines where the bars start.</p><h3 id="flip-labels-at" tabindex="-1">flip_labels_at <a class="header-anchor" href="#flip-labels-at" aria-label="Permalink to &quot;flip_labels_at&quot;">​</a></h3><p>Defaults to <code>Inf</code></p><p>No docs available.</p><h3 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>Gap between the bars (see barplot).</p><h3 id="label-color" tabindex="-1">label_color <a class="header-anchor" href="#label-color" aria-label="Permalink to &quot;label_color&quot;">​</a></h3><p>Defaults to <code>@inherit textcolor</code></p><p>No docs available.</p><h3 id="label-font" tabindex="-1">label_font <a class="header-anchor" href="#label-font" aria-label="Permalink to &quot;label_font&quot;">​</a></h3><p>Defaults to <code>@inherit font</code></p><p>No docs available.</p><h3 id="label-formatter" tabindex="-1">label_formatter <a class="header-anchor" href="#label-formatter" aria-label="Permalink to &quot;label_formatter&quot;">​</a></h3><p>Defaults to <code>bar_label_formatter</code></p><p>No docs available.</p><h3 id="label-offset" tabindex="-1">label_offset <a class="header-anchor" href="#label-offset" aria-label="Permalink to &quot;label_offset&quot;">​</a></h3><p>Defaults to <code>5</code></p><p>No docs available.</p><h3 id="label-size" tabindex="-1">label_size <a class="header-anchor" href="#label-size" aria-label="Permalink to &quot;label_size&quot;">​</a></h3><p>Defaults to <code>20</code></p><p>No docs available.</p><h3 id="normalization" tabindex="-1">normalization <a class="header-anchor" href="#normalization" aria-label="Permalink to &quot;normalization&quot;">​</a></h3><p>Defaults to <code>:none</code></p><p>Allows to normalize the histogram. Possible values are:</p><ul><li><p><code>:pdf</code>: Normalize by sum of weights and bin sizes. Resulting histogram has norm 1 and represents a PDF.</p></li><li><p><code>:density</code>: Normalize by bin sizes only. Resulting histogram represents count density of input and does not have norm 1. Will not modify the histogram if it already represents a density (<code>h.isdensity == 1</code>).</p></li><li><p><code>:probability</code>: Normalize by sum of weights only. Resulting histogram represents the fraction of probability mass for each bin and does not have norm 1.</p></li><li><p><code>:none</code>: Do not normalize.</p></li></ul><h3 id="offset" tabindex="-1">offset <a class="header-anchor" href="#offset" aria-label="Permalink to &quot;offset&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>Adds an offset to every value.</p><h3 id="over-background-color" tabindex="-1">over_background_color <a class="header-anchor" href="#over-background-color" aria-label="Permalink to &quot;over_background_color&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="over-bar-color" tabindex="-1">over_bar_color <a class="header-anchor" href="#over-bar-color" aria-label="Permalink to &quot;over_bar_color&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="scale-to" tabindex="-1">scale_to <a class="header-anchor" href="#scale-to" aria-label="Permalink to &quot;scale_to&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Allows to scale all values to a certain height. This can also be set to <code>:flip</code> to flip the direction of histogram bars without scaling them to a common height.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokewidth</code></p><p>No docs available.</p><h3 id="weights" tabindex="-1">weights <a class="header-anchor" href="#weights" aria-label="Permalink to &quot;weights&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Allows to statistically weight the observations.</p>',85),r=[k];function o(d,c,E,g,y,b){return a(),i("div",null,r)}const f=s(p,[["render",o]]);export{u as __pageData,f as default};
