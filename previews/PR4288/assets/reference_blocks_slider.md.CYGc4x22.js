import{_ as i,c as s,o as a,a7 as e}from"./chunks/framework.B4Pj5K88.js";const t="/previews/PR4288/assets/c9e7cc3.daZLyZKF.png",u=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/slider.md","filePath":"reference/blocks/slider.md","lastUpdated":null}'),l={name:"reference/blocks/slider.md"},h=e(`<h1 id="slider" tabindex="-1">Slider <a class="header-anchor" href="#slider" aria-label="Permalink to &quot;Slider&quot;">​</a></h1><p>A simple slider without a label. You can create a label using a <code>Label</code> object, for example. You need to specify a range that constrains the slider&#39;s possible values.</p><p>The currently selected value is in the attribute <code>value</code>. Don&#39;t change this value manually, but use the function <code>set_close_to!(slider, value)</code>. This is necessary to ensure the value is actually present in the <code>range</code> attribute.</p><p>You can double-click the slider to reset it (approximately) to the value present in <code>startvalue</code>.</p><p>If you set the attribute <code>snap = false</code>, the slider will move continously while dragging and only jump to the closest available value when releasing the mouse. <a id="example-c9e7cc3"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sl_x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Slider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], range </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, startvalue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sl_y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Slider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], range </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, horizontal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, startvalue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">point </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sl_x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value, sl_y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x, y</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Point2f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(point, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">limits!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+t+'" width="600px" height="450px"><h2 id="Labelled-sliders-and-grids" tabindex="-1">Labelled sliders and grids <a class="header-anchor" href="#Labelled-sliders-and-grids" aria-label="Permalink to &quot;Labelled sliders and grids {#Labelled-sliders-and-grids}&quot;">​</a></h2><p>The functions <a href="/previews/PR4288/api#Makie.labelslider!-Tuple{Any, Any, Any}"><code>labelslider!</code></a> and <a href="/previews/PR4288/api#Makie.labelslidergrid!-Tuple{Any, Any, Any}"><code>labelslidergrid!</code></a> are deprecated, use <a href="/previews/PR4288/reference/blocks/slidergrid#SliderGrid"><code>SliderGrid</code></a> instead.</p><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alignmode" tabindex="-1">alignmode <a class="header-anchor" href="#alignmode" aria-label="Permalink to &quot;alignmode&quot;">​</a></h3><p>Defaults to <code>Inside()</code></p><p>The align mode of the slider in its parent GridLayout.</p><h3 id="color-active" tabindex="-1">color_active <a class="header-anchor" href="#color-active" aria-label="Permalink to &quot;color_active&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT[]</code></p><p>The color of the slider when the mouse clicks and drags the slider.</p><h3 id="color-active-dimmed" tabindex="-1">color_active_dimmed <a class="header-anchor" href="#color-active-dimmed" aria-label="Permalink to &quot;color_active_dimmed&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT_DIMMED[]</code></p><p>The color of the slider when the mouse hovers over it.</p><h3 id="color-inactive" tabindex="-1">color_inactive <a class="header-anchor" href="#color-inactive" aria-label="Permalink to &quot;color_inactive&quot;">​</a></h3><p>Defaults to <code>RGBf(0.94, 0.94, 0.94)</code></p><p>The color of the slider when it is not interacted with.</p><h3 id="halign" tabindex="-1">halign <a class="header-anchor" href="#halign" aria-label="Permalink to &quot;halign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The horizontal alignment of the element in its suggested bounding box.</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The height setting of the element.</p><h3 id="horizontal" tabindex="-1">horizontal <a class="header-anchor" href="#horizontal" aria-label="Permalink to &quot;horizontal&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the slider has a horizontal orientation or not.</p><h3 id="linewidth" tabindex="-1">linewidth <a class="header-anchor" href="#linewidth" aria-label="Permalink to &quot;linewidth&quot;">​</a></h3><p>Defaults to <code>10</code></p><p>The width of the slider line</p><h3 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h3><p>Defaults to <code>0:0.01:10</code></p><p>The range of values that the slider can pick from.</p><h3 id="snap" tabindex="-1">snap <a class="header-anchor" href="#snap" aria-label="Permalink to &quot;snap&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the button snaps to valid positions or moves freely</p><h3 id="startvalue" tabindex="-1">startvalue <a class="header-anchor" href="#startvalue" aria-label="Permalink to &quot;startvalue&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>The start value of the slider or the value that is closest in the slider range.</p><h3 id="tellheight" tabindex="-1">tellheight <a class="header-anchor" href="#tellheight" aria-label="Permalink to &quot;tellheight&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s height</p><h3 id="tellwidth" tabindex="-1">tellwidth <a class="header-anchor" href="#tellwidth" aria-label="Permalink to &quot;tellwidth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s width</p><h3 id="valign" tabindex="-1">valign <a class="header-anchor" href="#valign" aria-label="Permalink to &quot;valign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The vertical alignment of the element in its suggested bounding box.</p><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>The current value of the slider. Don&#39;t set this manually, use the function <code>set_close_to!</code>.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The width setting of the element.</p>',58),n=[h];function r(p,d,o,k,c,g){return a(),s("div",null,n)}const y=i(l,[["render",r]]);export{u as __pageData,y as default};
