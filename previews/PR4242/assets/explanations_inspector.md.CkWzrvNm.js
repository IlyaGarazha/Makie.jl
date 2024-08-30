import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.2hzrL8qW.js";const g=JSON.parse('{"title":"Inspecting data","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/inspector.md","filePath":"explanations/inspector.md","lastUpdated":null}'),t={name:"explanations/inspector.md"},e=n(`<h1 id="Inspecting-data" tabindex="-1">Inspecting data <a class="header-anchor" href="#Inspecting-data" aria-label="Permalink to &quot;Inspecting data {#Inspecting-data}&quot;">​</a></h1><p>Makie provides a data inspection tool via <code>DataInspector(x)</code> where x can be a figure, axis or scene. With it you get a floating tooltip with relevant information for various plots by hovering over one of its elements.</p><p>By default the inspector will be able to pick any plot other than <code>text</code> and <code>volume</code> based plots. If you wish to ignore a plot, you can set its attribute <code>plot.inspectable[] = false</code>. With that the next closest plot (in range) will be picked.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.DataInspector" href="#Makie.DataInspector">#</a> <b><u>Makie.DataInspector</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(figure_axis_or_scene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> current_figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Creates a data inspector which will show relevant information in a tooltip when you hover over a plot.</p><p>This functionality can be disabled on a per-plot basis by setting <code>plot.inspectable[] = false</code>. The displayed text can be adjusted by setting <code>plot.inspector_label</code> to a function <code>(plot, index, position) -&gt; &quot;my_label&quot;</code> returning a label. See Makie documentation for more detail.</p><p><strong>Keyword Arguments:</strong></p><ul><li><p><code>range = 10</code>: Controls the snapping range for selecting an element of a plot.</p></li><li><p><code>priority = 100</code>: The priority of creating a tooltip on a mouse movement or scrolling event.</p></li><li><p><code>enabled = true</code>: Disables inspection of plots when set to false. Can also be adjusted with <code>enable!(inspector)</code> and <code>disable!(inspector)</code>.</p></li><li><p><code>indicator_color = :red</code>: Color of the selection indicator.</p></li><li><p><code>indicator_linewidth = 2</code>: Linewidth of the selection indicator.</p></li><li><p><code>indicator_linestyle = nothing</code>: Linestyle of the selection indicator</p></li><li><p><code>enable_indicators = true)</code>: Enables or disables indicators</p></li><li><p><code>depth = 9e3</code>: Depth value of the tooltip. This should be high so that the tooltip is always in front.</p></li><li><p><code>apply_tooltip_offset = true</code>: Enables or disables offsetting tooltips based on, for example, markersize.</p></li><li><p>and all attributes from <code>Tooltip</code></p></li></ul><p><a href="https://github.com/MakieOrg/Makie.jl/blob/a7c852a5297ce25e450d44cbecceb70917b2d913/src/interaction/inspector.jl#L217-L243" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Custom-text" tabindex="-1">Custom text <a class="header-anchor" href="#Custom-text" aria-label="Permalink to &quot;Custom text {#Custom-text}&quot;">​</a></h2><p>The text that <code>DataInspector</code> displays can be adjusted on a per-plot basis through the <code>inspector_label</code> attribute. It should hold a function <code>(plot, index, position) -&gt; &quot;my_string&quot;</code>, where <code>plot</code> is the plot whose label is getting adjusted, <code>index</code> is the index returned by <code>pick</code> (see events documentation) and <code>position</code> is the position of the inspected object.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lbls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Type A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Type B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig, ax, p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), colormap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    inspector_label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (self, i, p) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lbls[self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">color[][i]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><h2 id="Extending-DataInspector" tabindex="-1">Extending <code>DataInspector</code> <a class="header-anchor" href="#Extending-DataInspector" aria-label="Permalink to &quot;Extending \`DataInspector\` {#Extending-DataInspector}&quot;">​</a></h2><p>The inspector implements tooltips for primitive plots and a few non-primitive plots (i.e. recipes). All other plots fall back to tooltips of one of their child plots.</p><p>For example a <code>poly</code> consists of a <code>mesh</code> and a <code>wireframe</code> plot, where <code>wireframe</code> is implemented as <code>lines</code>. Since neither <code>poly</code> nor <code>wireframe</code> has a specialized <code>show_data</code> method, DataInspector uses either <code>mesh</code> or <code>lines</code> to generate the tooltip.</p><p>While this means that most plots have a tooltip it also means many may not have a fitting one. If you wish to implement a more fitting tooltip for a new plot type you can do so by extending</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, my_plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyPlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, idx, primitive_child</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SomePrimitive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>Here <code>my_plot</code> is the plot you want to create a custom tooltip for, <code>primitive_child</code> is one of the primitives your plot is made from (scatter, text, lines, linesegments, mesh, surface, volume, image or heatmap) and <code>idx</code> is the index into that primitive plot. The latter two are the result from <code>pick_sorted</code> at the current mouseposition. In general you will need to adjust <code>idx</code> to be useful for <code>MyPlot</code>.</p><p>Let&#39;s take a look at the <code>BarPlot</code> method, which also powers <code>hist</code>. It contains two primitive plots - <code>Mesh</code> and <code>Lines</code>. The <code>idx</code> from picking a <code>Mesh</code> is based on vertices, of which there are four per rectangle. From <code>Lines</code> we get an index based on the end point of a line. To draw the outline of a rectangle as is done in barplot, we need 5 points and a separator totaling 6. We thus implement</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> show_data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BarPlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, idx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Lines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> show_barplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector, plot, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(idx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BarPlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, idx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Mesh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> show_barplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector, plot, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(idx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>to map the primitive <code>idx</code> to one identifying the bars in <code>BarPlot</code>. With this we can now get the position of the hovered bar with <code>plot[1][][idx]</code>. To align the tooltip to the selection we need to compute the relevant position in screen space and update the tooltip position.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parent_scene, shift_project, update_tooltip_alignment!, position2string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show_barplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BarPlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, idx)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Get the tooltip plot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Get the scene BarPlot lives in</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parent_scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Get the hovered data-space position</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][][idx]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # project to screen space and shift it to be correct on the root scene</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proj_pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> shift_project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">to_ndim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Point3f, pos, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # anchor the tooltip at the projected position</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    update_tooltip_alignment!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector, proj_pos)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Update the final text of the tooltip.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> haskey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:inspector_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:inspector_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][](plot, idx, pos)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> position2string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pos)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Show the tooltip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">visible[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # return true to indicate that we have updated the tooltip</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>Next we want to mark the rectangle we are hovering. In this case we can use the rectangles which <code>BarPlot</code> passes to <code>Poly</code>, i.e. <code>plot.plots[1][1][][idx]</code>. The <code>DataInspector</code> contains some functionality for keeping track of temporary plots, so we can plot the indicator to the same <code>scene</code> that <code>BarPlot</code> uses. Doing so results in</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    parent_scene, shift_project, update_tooltip_alignment!, position2string,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clear_temporary_plots!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DataInspector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BarPlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, idx)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # inspector.attributes holds some attributes relevant to indicators and is</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # used as a cache for indicator observables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attributes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parent_scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][][idx]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proj_pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> shift_project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, plot, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">to_ndim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Point3f, pos, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    update_tooltip_alignment!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector, proj_pos)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # We only want to mark the rectangle if that setting is enabled</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enable_indicators[]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Get the relevant rectangle</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bbox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plots[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][][idx]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # If we haven&#39;t yet created an indicator create it</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">selection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # clear old indicators</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            clear_temporary_plots!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector, plot)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # Create the new indicator using some settings from \`DataInspector\`.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wireframe!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                scene, bbox, model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model[], color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">indicator_color,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                strokewidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">indicator_linewidth, linestyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">indicator_linestyle,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                visible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">indicator_visible, inspectable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # tooltips are pushed forward a certain amount to make sure they&#39;re</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # drown on top of other things. This indicator should also be pushed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # forward that much</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            translate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vec3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">depth[]))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # Keep track of the indicator plot</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            push!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">temp_plots, p)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # If we have already created an indicator plot we just need to update </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # it. In this case we only need to update the rectangle.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        elseif</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isempty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">temp_plots)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inspector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">temp_plots[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            p[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bbox</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Moving away from a plot will automatically set this to false, so we </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # always need to set it to true.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">indicator_visible[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> haskey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:inspector_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:inspector_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][](plot, idx, pos)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> position2string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pos)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">visible[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>which finishes the implementation of a custom tooltip for <code>BarPlot</code>.</p><h2 id="Per-plot-show_data" tabindex="-1">Per-plot <code>show_data</code> <a class="header-anchor" href="#Per-plot-show_data" aria-label="Permalink to &quot;Per-plot \`show_data\` {#Per-plot-show_data}&quot;">​</a></h2><p>It is also possible to replace a call to <code>show_data</code> on a per-plot basis via the <code>inspector_hover</code> attribute. DataInspector assumes this to be a function <code>(inspector, this_plot, index, hovered_child) -&gt; Bool</code>. You can also set up custom clean up with <code>plot.inspector_clear = (inspector, plot) -&gt; ...</code> which is called whenever the plot is deselected.</p>`,23),l=[e];function p(h,k,o,d,r,E){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
