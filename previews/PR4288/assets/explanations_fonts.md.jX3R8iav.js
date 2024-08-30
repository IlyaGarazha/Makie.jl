import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.B4Pj5K88.js";const t="/previews/PR4288/assets/3e87617.Cq7fIpY-.png",u=JSON.parse('{"title":"Fonts","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/fonts.md","filePath":"explanations/fonts.md","lastUpdated":null}'),n={name:"explanations/fonts.md"},l=e(`<h1 id="fonts" tabindex="-1">Fonts <a class="header-anchor" href="#fonts" aria-label="Permalink to &quot;Fonts&quot;">​</a></h1><p>Makie uses the <code>FreeType.jl</code> package for font support, therefore, most fonts that this package can load should be supported by Makie as well. Fonts can be selected in multiple different ways:</p><h2 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h2><p>If you pass a <code>String</code> as a font, this can either be resolved as a file name for a font file, or as the (partial) name of the font itself (font family plus style). Font name matching is case insensitive and accepts partial matches.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">font_by_path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/some/path/to/a/font_file.ttf&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">font_by_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;TeX Gyre Heros Makie&quot;</span></span></code></pre></div><p>If you want to find out what exact font your string was resolved as, you can execute <code>Makie.to_font(the_string)</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">to_font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Blackchancery&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FTFont (family = BlackChancery, style = Regular)</span></span></code></pre></div><h2 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;Symbol&quot;">​</a></h2><p>A <code>Symbol</code> will be resolved by looking it up in the <code>text</code>&#39;s <code>fonts</code> attribute. The default theme has the following fonts set:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:fonts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Attributes with 4 entries:</span></span>
<span class="line"><span>  bold =&gt; TeX Gyre Heros Makie Bold</span></span>
<span class="line"><span>  bold_italic =&gt; TeX Gyre Heros Makie Bold Italic</span></span>
<span class="line"><span>  italic =&gt; TeX Gyre Heros Makie Italic</span></span>
<span class="line"><span>  regular =&gt; TeX Gyre Heros Makie</span></span></code></pre></div><p>Therefore, you can pick a font from this set by setting, for example, <code>font = :bold_italic</code>. The advantage of this is that you can set your fonts not by hardcoding specific ones at every place where you use <code>text</code>, but by setting the fonts at the top level.</p><p>You can modify or add keys in the font set using <code>set_theme!</code>, <code>with_theme</code>, <code>update_theme!</code>, or by passing them to the <code>Figure</code> constructor. Here&#39;s an example: <a id="example-3e87617"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fonts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; regular </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Dejavu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, weird </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blackchancery&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;A title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;An x label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xlabelfont </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :weird</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+t+'" width="600px" height="450px"><h2 id="Emoji-and-color-fonts" tabindex="-1">Emoji and color fonts <a class="header-anchor" href="#Emoji-and-color-fonts" aria-label="Permalink to &quot;Emoji and color fonts {#Emoji-and-color-fonts}&quot;">​</a></h2><p>Currently, Makie does not have the ability to draw emoji. This is due to the implementation of text drawing in GLMakie and WGLMakie, which relies on signed distance fields that can only be used to render monochrome glyphs, but not arbitrary bitmaps.</p><p>Multicolored <em>fonts</em>, like those in the <a href="https://www.colorfonts.wtf/" target="_blank" rel="noreferrer">color fonts</a> project, are currently not supported. Colored text is supported with the <a href="https://docs.makie.org/stable/reference/plots/text/index.html#rich_text" target="_blank" rel="noreferrer">rich text</a> functionality. If you want to use emoji as scatter markers, consider using images (you will need to find suitable images separately, you cannot easily extract emoji from fonts with Makie).</p>',19),h=[l];function o(p,r,k,d,c,g){return a(),i("div",null,h)}const E=s(n,[["render",o]]);export{u as __pageData,E as default};
