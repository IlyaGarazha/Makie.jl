import{_ as e,c as a,o as i,a7 as s}from"./chunks/framework.BrMZ4bj8.js";const g=JSON.parse('{"title":"Headless","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/headless.md","filePath":"explanations/headless.md","lastUpdated":null}'),t={name:"explanations/headless.md"},r=s(`<h1 id="headless" tabindex="-1">Headless <a class="header-anchor" href="#headless" aria-label="Permalink to &quot;Headless&quot;">​</a></h1><p>Makie can be used on headless systems (such as CI servers). This page describes what is required to get different back ends working in headless systems.</p><h2 id="Using-CairoMakie" tabindex="-1">Using CairoMakie <a class="header-anchor" href="#Using-CairoMakie" aria-label="Permalink to &quot;Using CairoMakie {#Using-CairoMakie}&quot;">​</a></h2><p>For CairoMakie, there shouldn&#39;t be any difference in using it on a remote or locally.</p><h2 id="Using-GLMakie" tabindex="-1">Using GLMakie <a class="header-anchor" href="#Using-GLMakie" aria-label="Permalink to &quot;Using GLMakie {#Using-GLMakie}&quot;">​</a></h2><p>For <a href="https://github.com/MakieOrg/Makie.jl/tree/master/GLMakie" target="_blank" rel="noreferrer">GLMakie</a> you can either use X11 forwarding to render on the local host or use <a href="https://www.virtualgl.org/" target="_blank" rel="noreferrer">VirtualGL</a> to render on the remote server.</p><h3 id="GLMakie-with-X11-forwarding" tabindex="-1">GLMakie with X11 forwarding <a class="header-anchor" href="#GLMakie-with-X11-forwarding" aria-label="Permalink to &quot;GLMakie with X11 forwarding {#GLMakie-with-X11-forwarding}&quot;">​</a></h3><p>In this scenario you need an X server on the remote and you will have to connect to the remote server with</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ssh -X user@host</span></span></code></pre></div><p>See <a href="https://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-to-run-graphics-applications-remotely" target="_blank" rel="noreferrer">here</a> about more details about X11 forwarding.</p><h3 id="GLMakie-with-VirtualGL" tabindex="-1">GLMakie with VirtualGL <a class="header-anchor" href="#GLMakie-with-VirtualGL" aria-label="Permalink to &quot;GLMakie with VirtualGL {#GLMakie-with-VirtualGL}&quot;">​</a></h3><p>The first step is to <a href="https://cdn.rawgit.com/VirtualGL/virtualgl/2.6.3/doc/index.html#hd005" target="_blank" rel="noreferrer">install VirtualGL</a> on the remote server (<a href="https://virtualgl.org/Documentation/OSSupport" target="_blank" rel="noreferrer">Linux only</a>) and on the local client. If you need to establish the connection to the server via a secondary intermediate server, VirtualGL also needs to be installed there. On the remote server you will need to <a href="https://cdn.rawgit.com/VirtualGL/virtualgl/2.6.5/doc/index.html#hd006" target="_blank" rel="noreferrer">configure the VirtualGL server</a>. Be sure to <a href="https://cdn.rawgit.com/VirtualGL/virtualgl/2.6.5/doc/index.html#hd006002001" target="_blank" rel="noreferrer">check that the configuration is ok</a>.</p><p>After everything is set up, you can connect to the remote server via</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/opt/VirtualGL/bin/vglconnect -s user@server</span></span></code></pre></div><p>and then you will have to start julia via VirtualGL</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/opt/VirtualGL/bin/vglrun julia</span></span></code></pre></div><h3 id="GLMakie-in-CI" tabindex="-1">GLMakie in CI <a class="header-anchor" href="#GLMakie-in-CI" aria-label="Permalink to &quot;GLMakie in CI {#GLMakie-in-CI}&quot;">​</a></h3><p>You can also use GLMakie on CI or servers without a GPU by using <code>xvfb</code> for software rendering. This procedure is used in the <a href="https://github.com/MakieOrg/Makie.jl/blob/8504b27c28c45a522467c7c57f6953c3a680fa6a/.github/workflows/glmakie.yaml#L45-L57" target="_blank" rel="noreferrer">GLMakie tests</a>.</p><h2 id="Using-WGLMakie" tabindex="-1">Using WGLMakie <a class="header-anchor" href="#Using-WGLMakie" aria-label="Permalink to &quot;Using WGLMakie {#Using-WGLMakie}&quot;">​</a></h2><p>For WGLMakie, you can setup a server with Bonito and serve the content from a remote server. This also works for creating interactive plots with Documenter. Check out the <a href="/previews/PR4138/explanations/backends/wglmakie#WGLMakie">WGLMakie docs</a> for more details about this.</p><p>If you want to use WGLMakie in VS Code on a remote server, you will have to forward the port used by WGLMakie in order for the plot pane integration to work. If you don&#39;t need to change the port, you will just have to <a href="https://code.visualstudio.com/docs/remote/ssh#_forwarding-a-port-creating-ssh-tunnel" target="_blank" rel="noreferrer">forward</a> the 9384 port.</p><p>If you want to change the port on which WGLMakie runs on the remote, say <code>8081</code>, you will have to use the following</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bonito</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bonito</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">configure_server!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(listen_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8081</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>before any plotting commands with WGLMakie.</p><p>If you also need to use a different port than <code>8081</code> on the <em>local</em> machine, say <code>8080</code>, you will also need to set the <code>forwarded_port</code> like this:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bonito</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bonito</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">configure_server!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(listen_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8081</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, forwarded_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,26),n=[r];function o(l,h,p,d,c,k){return i(),a("div",null,n)}const f=e(t,[["render",o]]);export{g as __pageData,f as default};
