import{b as $t,e as Jt}from"./chunk-UEH4FZMX.js";import{b as Qt,c as K,d as pe}from"./chunk-5ZJSZISC.js";import{a as Z,b as we,c as Ue,d as Be}from"./chunk-EVB25YXG.js";import{i as le,j as Ee}from"./chunk-Z7J4BCLI.js";import{c as ht,d as $,h as te}from"./chunk-BSIXRBVK.js";import{a as gt}from"./chunk-Y5K4QJZR.js";import{E as re,o as k}from"./chunk-EKY6QR7N.js";import{a as jt}from"./chunk-VK2CQJOC.js";import{f as Fe,g as Gt,h as Ht,i as Yt,j as Wt,k as kt}from"./chunk-AUIMNX4Y.js";import{a as H,b as w,g as B}from"./chunk-NKBP5F7I.js";import{a as ee,b as Y}from"./chunk-EEYJPINK.js";import{L as G,M as pt,N as ze,S as Bt,c as ve,f as Pe,g as Lt,h as vt,o as Oe,p as Rt,q as Nt,r as Mt,s as zt,t as Ft,u as Vt,y as wt,z as Ut}from"./chunk-GIHBFCPM.js";import{a as me}from"./chunk-W5OI4BJ2.js";import{a as _t,b as S,c as R,f as Pt,h as u,i as N,j as ae,k as M,l as fe,n as de,o as mt,p as _e,q as Me,r as W}from"./chunk-TKTKGUCU.js";import{i as It,j as Ct}from"./chunk-M3GEY4SR.js";import{a as ft}from"./chunk-U2QVIRVP.js";import{a as Ve}from"./chunk-WKOJXXCZ.js";import{a as Xt}from"./chunk-MNLP6AEE.js";import{a as Zt,b as qt}from"./chunk-YEFC7M4L.js";import{a as Kt}from"./chunk-HPJ6EQFO.js";import{a as dt}from"./chunk-ZOTIMGGE.js";import{b as Dt}from"./chunk-OHIIU6WS.js";import{d as At}from"./chunk-ZWFVPWKA.js";import{a as Ne}from"./chunk-AQ74ANSJ.js";import{d as ct}from"./chunk-EJ3VIBAJ.js";import{a as Et}from"./chunk-CBOFHDSC.js";import{c as ie}from"./chunk-XDTDVCGP.js";import{p as be,r as X}from"./chunk-465DRXTW.js";import{b as Ot}from"./chunk-AC62Z3FX.js";import{a as Te,b as Re}from"./chunk-ESDYQQXO.js";var Ie=class{constructor(e,t){this._rctx=e,this._vertexBuffer=Z.createVertex(e,W.STATIC_DRAW,new Uint16Array(t)),this._vao=new K(e,new Map([["a_position",0]]),{geometry:[new me("a_position",2,u.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(S.TRIANGLE_STRIP,0,this._count)}};var z=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,n){}drawMany(e,t,n){for(let i of t)i.visible&&this.draw(e,i,n)}};var xt={nearest:{defines:[],samplingMode:M.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:M.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:M.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:M.LINEAR_MIPMAP_LINEAR,mips:!0}},Tn=(f,e,t)=>{if(t.samplingMode==="dynamic"){let{state:n}=f,i=e.resolution/e.pixelRatio/n.resolution,o=Math.round(f.pixelRatio)!==f.pixelRatio,a=i>1.05||i<.95;return n.rotation||a||o||e.isSourceScaled||e.rotation?xt.bilinear:xt.nearest}return xt[t.samplingMode]},Ge=class extends z{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){let{context:n,renderingOptions:i,painter:o,requestRender:a,allowDelayedRender:r}=e;if(!t.source||!t.isReady)return;let s=Tn(e,t,i),l=o.materialManager.getProgram(this._desc,s.defines);if(r&&a!=null&&!l.compiled)return void a();e.timeline.begin(this.name),t.blendFunction==="additive"?n.setBlendFunctionSeparate(R.ONE,R.ONE,R.ONE,R.ONE):n.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),n.setStencilFunction(N.EQUAL,t.stencilRef,255),this._quad||(this._quad=new Ie(n,[0,0,1,0,0,1,1,1]));let{coordScale:c,computedOpacity:v,transforms:d}=t;t.setSamplingProfile(s),t.bind(e.context,Oe),n.useProgram(l),l.setUniformMatrix3fv("u_dvsMat3",d.dvs),l.setUniform1i("u_texture",Oe),l.setUniform2fv("u_coordScale",c),l.setUniform1f("u_opacity",v),this._quad.draw(),e.timeline.end(this.name)}};function en(){return new Float32Array(4)}function bn(f){let e=new Float32Array(4);return e[0]=f[0],e[1]=f[1],e[2]=f[2],e[3]=f[3],e}function q(f,e,t,n){let i=new Float32Array(4);return i[0]=f,i[1]=e,i[2]=t,i[3]=n,i}function On(f,e){return new Float32Array(f,e,4)}function tn(){return en()}function nn(){return q(1,1,1,1)}function on(){return q(1,0,0,0)}function an(){return q(0,1,0,0)}function rn(){return q(0,0,1,0)}function ln(){return q(0,0,0,1)}var En=tn(),In=nn(),Cn=on(),An=an(),Dn=rn(),Pn=ln(),oo=Object.freeze(Object.defineProperty({__proto__:null,ONES:In,UNIT_W:Pn,UNIT_X:Cn,UNIT_Y:An,UNIT_Z:Dn,ZEROS:En,clone:bn,create:en,createView:On,fromValues:q,ones:nn,unitW:ln,unitX:on,unitY:an,unitZ:rn,zeros:tn},Symbol.toStringTag,{value:"Module"}));var sn={background:{"background.frag":`uniform lowp vec4 u_color;
void main() {
gl_FragColor = u_color;
}`,"background.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_coord_range;
uniform mediump float u_depth;
void main() {
vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}`},bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`},blend:{"blend.frag":`precision mediump float;
uniform sampler2D u_layerTexture;
uniform lowp float u_opacity;
uniform lowp float u_inFadeOpacity;
#ifndef NORMAL
uniform sampler2D u_backbufferTexture;
#endif
varying mediump vec2 v_uv;
float rgb2v(in vec3 c) {
return max(c.x, max(c.y, c.z));
}
vec3 rgb2hsv(in vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(in vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 tint(in vec3 Cb, in vec3 Cs) {
float vIn = rgb2v(Cb);
vec3 hsvTint = rgb2hsv(Cs);
vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
return hsv2rgb(hsvOut);
}
float overlay(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);
}
float colorDodge(in float Cb, in float Cs) {
return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));
}
float colorBurn(in float Cb, in float Cs) {
return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);
}
float hardLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));
}
float reflectBlend(in float Cb, in float Cs) {
return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);
}
float softLight(in float Cb, in float Cs) {
if (Cs <= 0.5) {
return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);
}
if (Cb <= 0.25) {
return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);
}
return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);
}
float vividLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));
}
float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
float lbase = lumv3(cbase);
float llum = lumv3(clum);
float ldiff = llum - lbase;
vec3 color = cbase + vec3(ldiff);
return clipColor(color);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
vec3 color;
if (sbase > 0.0) {
color = (cbase - minbase) * ssat / sbase;
} else {
color = vec3(0.0);
}
return setLum(color, clum);
}
void main() {
vec4 src = texture2D(u_layerTexture, v_uv);
#ifdef NORMAL
gl_FragColor = src *  u_opacity;
#else
vec4 dst = texture2D(u_backbufferTexture, v_uv);
vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);
vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);
float as = u_opacity * src.a;
float ab = dst.a;
#ifdef DESTINATION_OVER
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);
#endif
#ifdef SOURCE_IN
vec4 color = vec4(as * Cs * ab, as * ab);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef DESTINATION_IN
vec4 color = vec4(ab * Cb * as, ab * as);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef SOURCE_OUT
gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));
#endif
#ifdef DESTINATION_OUT
gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));
#endif
#ifdef SOURCE_ATOP
gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);
#endif
#ifdef DESTINATION_ATOP
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);
#endif
#ifdef XOR
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),
as * (1.0 - ab) + ab * (1.0 - as));
#endif
#ifdef MULTIPLY
gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,
as + ab * (1.0 - as));
#endif
#ifdef SCREEN
gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef OVERLAY
vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DARKEN
gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LIGHTER
gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);
#endif
#ifdef LIGHTEN
gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_DODGE
vec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_BURN
vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HARD_LIGHT
vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SOFT_LIGHT
vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DIFFERENCE
gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef EXCLUSION
vec3 f = Cs + Cb - 2.0 * Cs * Cb;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef INVERT
gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);
#endif
#ifdef VIVID_LIGHT
vec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),
clamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),
clamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HUE
vec3 f = setLumSat(Cs,Cb,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SATURATION
vec3 f = setLumSat(Cb,Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR
vec3 f = setLum(Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LUMINOSITY
vec3 f = setLum(Cb,Cs);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef PLUS
gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);
#endif
#ifdef MINUS
gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);
#endif
#ifdef AVERAGE
vec3 f = (Cb + Cs) / 2.0;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef REFLECT
vec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),
reflectBlend(Cb.g, Cs.g),
reflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#endif
}`,"blend.vert":`attribute vec2 a_position;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_position , 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},fx:{integrate:{"integrate.frag":`precision mediump float;
uniform lowp sampler2D u_sourceTexture;
uniform lowp sampler2D u_maskTexture;
uniform mediump float u_zoomLevel;
uniform highp float u_timeDelta;
uniform highp float u_animationTime;
varying highp vec2 v_texcoord;
#include <materials/utils.glsl>
void main()
{
#ifdef DELTA
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
vec4 data0 = texture2D(u_maskTexture, v_texcoord);
float flags = data0.r * 255.0;
float groupMinZoom = data0.g * 255.0;
float isVisible = getFilterBit(flags, 0);
float wouldClip = step(groupMinZoom, u_zoomLevel);
float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;
float dt = u_timeDelta / max(u_animationTime, 0.0001);
vec4 nextState = vec4(texel + direction * dt);
gl_FragColor =  vec4(nextState);
#elif defined(UPDATE)
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
gl_FragColor = texel;
#endif
}`,"integrate.vert":`precision mediump float;
attribute vec2 a_pos;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
}`}},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},magnifier:{"magnifier.frag":`uniform lowp vec4 u_background;
uniform mediump sampler2D u_readbackTexture;
uniform mediump sampler2D u_maskTexture;
uniform mediump sampler2D u_overlayTexture;
uniform bool u_maskEnabled;
uniform bool u_overlayEnabled;
varying mediump vec2 v_texCoord;
const lowp float barrelFactor = 1.1;
lowp vec2 barrel(lowp vec2 uv) {
lowp vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
lowp float theta = atan(uvn.y, uvn.x);
lowp float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main(void)
{
lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));
color = (color + (1.0 - color.a) * u_background);
lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;
color *= mask;
lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;
}`,"magnifier.vert":`precision mediump float;
attribute mediump vec2 a_pos;
uniform mediump vec4 u_drawPos;
varying mediump vec2 v_texCoord;
void main(void)
{
v_texCoord = a_pos;
gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);
}`},materials:{"attributeData.glsl":`uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform highp sampler2D u_attributeData3;
uniform highp sampler2D u_attributeData4;
uniform highp sampler2D u_attributeData5;
uniform highp int u_attributeTextureSize;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float size = float(u_attributeTextureSize);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));
}
highp vec4 getAttributeData0(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData0, coords);
}
highp vec4 getAttributeData1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData1, coords);
}
highp vec4 getAttributeData2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData2, coords);
}
highp vec4 getAttributeData3(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData3, coords);
}
highp vec4 getAttributeData4(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData4, coords);
}
highp vec4 getAttributeData5(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData5, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float u_hittestDist;
uniform highp vec2 u_hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(u_hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.frag":`precision mediump float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
varying float v_size;
varying vec2 v_offset;
varying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];
varying float v_numOfEntries;
varying float v_maxSectorAngle;
uniform lowp vec4 u_colors[NUMBER_OF_FIELDS];
uniform lowp vec4 u_defaultColor;
uniform lowp vec4 u_othersColor;
uniform lowp vec4 u_outlineColor;
uniform float u_donutRatio;
uniform float u_sectorThreshold;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {
#if __VERSION__ == 300
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return u_colors[colorIndex];
#else
mediump int colorIndex;
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == index) {
colorIndex = int(filteredSectorToColorId[i].y);
}
}
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == colorIndex) {
return u_colors[i];
}
}
return u_colors[NUMBER_OF_FIELDS - 1];
#endif
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor() {
float angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);
if (angle < 0.0) {
angle += 360.0;
} else if (angle > 360.0) {
angle = mod(angle, 360.0);
}
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || u_sectorThreshold > 0.0) ? u_othersColor : u_defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < NUMBER_OF_FIELDS; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = u_sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? u_othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = u_sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? u_othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = u_outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
if (startSectorAngle != 0.0 || endSectorAngle != 360.0) {
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.6;
float beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);
if (endSectorAlpha > 0.0) {
fillColor = mix(nextColor, fillColor, endSectorAlpha);
} else if (beginSectorAlpha > 0.0) {
fillColor = mix(prevColor, fillColor, beginSectorAlpha);
}
}
float donutSize = u_donutRatio * (v_size - v_outlineWidth);
float endOfDonut = donutSize - v_outlineWidth;
float aaThreshold = 0.75;
float innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
float startOfOutline = v_size - v_outlineWidth;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
uniform float u_outlineWidth;
uniform mediump float u_sectorThreshold;
varying float v_size;
varying vec2 v_offset;
varying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];
varying float v_numOfEntries;
varying float v_maxSectorAngle;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};
int filter(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {
if (sectorAngle > u_sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
#if __VERSION__ == 300
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
#else
for (int i = 0; i < NUMBER_OF_FIELDS; i++) {
if (i == filteredInfo.colorId) {
filteredSectorToColorId[i] = vec2(filteredInfo.endSectorAngle, currentIndex);
}
}
#endif
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[NUMBER_OF_FIELDS]) {
for (int index = 0; index < NUMBER_OF_FIELDS; ++index) {
float sectorValue = sectorAngles[index];
filter(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/hittest/common.glsl>
vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {
vec2 outSize = baseSize;
#ifdef VV_SIZE
float r = 0.5 * getSize(referenceSize) / referenceSize;
outSize.xy *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec2  a_offset = a_vertexOffset / 16.0;
float outlineSize = u_outlineWidth;
float a_bitSet = a_bitSetAndDistRatio.x;
vec2 size = getMarkerSize(a_offset, a_size, outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos * POSITION_PRECISION, 1.0);
v_opacity      = getOpacity();
v_id           = norm(a_id);
v_pos          = u_dvsMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = max(size.x, size.y);
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData0 = getAttributeData3(a_id);
attributeData[0] = filterNaNValues(attributeData0.x);
attributeData[1] = filterNaNValues(attributeData0.y);
attributeData[2] = filterNaNValues(attributeData0.z);
attributeData[3] = filterNaNValues(attributeData0.w);
#if (NUMBER_OF_FIELDS > 4)
vec4 attributeData1 = getAttributeData4(a_id);
attributeData[4] = filterNaNValues(attributeData1.x);
attributeData[5] = filterNaNValues(attributeData1.y);
attributeData[6] = filterNaNValues(attributeData1.z);
attributeData[7] = filterNaNValues(attributeData1.w);
#endif
#if (NUMBER_OF_FIELDS > 8)
vec4 attributeData2 = getAttributeData5(a_id);
attributeData[8] = filterNaNValues(attributeData2.x);
attributeData[9] = filterNaNValues(attributeData2.y);
#endif
float sum = 0.0;
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
sum += attributeData[i];
}
float sectorAngles[NUMBER_OF_FIELDS];
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[NUMBER_OF_FIELDS];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
#if __VERSION__ == 300
v_filteredSectorToColorId = filteredSectorToColorId;
#else
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == numOfEntries) {
break;
}
v_filteredSectorToColorId[i] = filteredSectorToColorId[i];
}
#endif
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + 1);
}
float getHighlightBit(in float bitset) {
return getBit(bitset, 0);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform highp mat3 u_tileMat3;
uniform highp mat3 u_viewMat3;
uniform highp float u_pixelRatio;
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;
uniform mediump float u_currentZoom;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
#ifdef SUPPORTS_TEXTURE_FLOAT
target.rgba = getAttributeData2(a_id);
#else
vec4 data0 = getAttributeData2(a_id);
vec4 data1 = getAttributeData3(a_id);
target.r = u88VVToFloat(data0.rg * 255.0);
target.g = u88VVToFloat(data0.ba * 255.0);
target.b = u88VVToFloat(data1.rg * 255.0);
target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getAttributeData0(a_id).x * 255.0);
#else
return getAttributeData0(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAttributeData1(a_id);
}
float getMinZoom() {
vec4 data0 = getAttributeData0(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * u_viewMat3 * u_tileMat3 + (1.0 - isMapAligned) * u_tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef INSIDE
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(OUTSIDE)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(HIGHLIGHT)
#if !defined(HIGHLIGHT_ALL)
pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));
#endif
#endif
pos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 u_vvSizeMinMaxValue;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float u_vvSizeScaleStopsValue;
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float u_vvSizeFieldStopsValues[6];
uniform float u_vvSizeFieldStopsSizes[6];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float u_vvSizeUnitValueWorldToPixelsRatio;
#endif
#ifdef VV_OPACITY
uniform highp float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float u_vvRotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 6;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= u_vvSizeFieldStopsValues[0]) {
return u_vvSizeFieldStopsSizes[0];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (u_vvSizeFieldStopsValues[i] >= sizeValue) {
float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);
return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);
}
}
return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= u_vvOpacityValues[0]) {
return u_vvOpacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (u_vvOpacityValues[i] >= opacityValue) {
float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);
return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);
}
}
return u_vvOpacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= u_vvColorValues[0]) {
return u_vvColors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (u_vvColorValues[i] >= colorValue) {
float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);
return mix(u_vvColors[i-1], u_vvColors[i], f);
}
}
return u_vvColors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
return u_vvSizeScaleStopsValue;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},overlay:{overlay:{"overlay.frag":`precision lowp float;
uniform lowp sampler2D u_texture;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
vec4 color = texture2D(u_texture, v_uv);
gl_FragColor = color *  u_opacity;
}`,"overlay.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_uv;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_perspective;
varying mediump vec2 v_uv;
void main(void) {
v_uv = a_uv;
float w = 1.0 + dot(a_uv, u_perspective);
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0);
gl_Position = vec4(w * pos.xy, 0.0, w);
}`}},"post-processing":{blit:{"blit.frag":`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
gl_FragColor = texture2D(u_texture, v_uv);
}`},bloom:{composite:{"composite.frag":`precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform sampler2D u_blurTexture5;
uniform float u_bloomStrength;
uniform float u_bloomRadius;
uniform float u_bloomFactors[NUMMIPS];
uniform vec3 u_bloomTintColors[NUMMIPS];
float lerpBloomFactor(const in float factor) {
float mirrorFactor = 1.2 - factor;
return mix(factor, mirrorFactor, u_bloomRadius);
}
void main() {
vec4 color = u_bloomStrength * (
lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +
lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +
lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +
lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +
lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)
);
gl_FragColor = clamp(color, 0.0, 1.0);
}`},gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
#define SIGMA RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = float(SIGMA);
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},luminosityHighPass:{"luminosityHighPass.frag":`precision mediump float;
uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;
varying vec2 v_uv;
void main() {
vec4 texel = texture2D(u_texture, v_uv);
vec3 luma = vec3(0.299, 0.587, 0.114);
float v = dot(texel.xyz, luma);
vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);
gl_FragColor = mix(outputColor, texel, alpha);
}`}},blur:{gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = u_sigma;
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},"radial-blur":{"radial-blur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
const float sampleDist = 1.0;
const float sampleStrength = 2.2;
void main(void) {
float samples[10];
samples[0] = -0.08;
samples[1] = -0.05;
samples[2] = -0.03;
samples[3] = -0.02;
samples[4] = -0.01;
samples[5] =  0.01;
samples[6] =  0.02;
samples[7] =  0.03;
samples[8] =  0.05;
samples[9] =  0.08;
vec2 dir = 0.5 - v_uv;
float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
dir = dir / dist;
vec4 color = texture2D(u_colorTexture,v_uv);
vec4 sum = color;
for (int i = 0; i < 10; i++) {
sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);
}
sum *= 1.0 / 11.0;
float t = dist * sampleStrength;
t = clamp(t, 0.0, 1.0);
gl_FragColor = mix(color, sum, t);
}`}},dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"drop-shadow":{composite:{"composite.frag":`precision mediump float;
uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;
uniform vec2 u_shadowOffset;
uniform highp mat3 u_displayViewMat3;
varying vec2 v_uv;
void main() {
vec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);
vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
vec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);
gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{bitmap:{"bitmap.frag":`precision mediump float;
varying highp vec2 v_texcoord;
uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;
uniform lowp float u_opacity;
#include <filtering/bicubic.glsl>
void main() {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
vec4 color = texture2D(u_texture, v_texcoord);
#endif
gl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);
}`,"bitmap.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"common.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`,"contrastBrightness.glsl":`uniform float u_contrastOffset;
uniform float u_brightnessOffset;
vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
float maxI = 255.0;
float mid = 128.0;
float c = u_contrastOffset;
float b = u_brightnessOffset;
vec4 v;
if (c > 0.0 && c < 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
} else if (c <= 0.0 && c > -100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
} else if (c == 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
v = (sign(v) + 1.0) / 2.0;
} else if (c == -100.0) {
v = vec4(mid, mid, mid, currentPixel.a);
}
vec3 rgb = clamp(v.rgb / 255.0, 0.0, 1.0);
return vec4(rgb, currentPixel.a);
}`,"getSurfaceValues.glsl":`#include <raster/common/mirror.glsl>
void getSurfaceValues(sampler2D imageTexture, vec2 texCoord, vec2 srcImageSize, inout float values[10]) {
vec2 onePixel = 1.0 / srcImageSize;
vec4 va = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, -1.0)));
vec4 vb = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, -1.0)));
vec4 vc = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, -1.0)));
vec4 vd = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 0.0)));
vec4 ve = texture2D(imageTexture, mirror(texCoord));
vec4 vf = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 0.0)));
vec4 vg = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 1.0)));
vec4 vh = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, 1.0)));
vec4 vi = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 1.0)));
float alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;
values[0] = va.r;
values[1] = vb.r;
values[2] = vc.r;
values[3] = vd.r;
values[4] = ve.r;
values[5] = vf.r;
values[6] = vg.r;
values[7] = vh.r;
values[8] = vi.r;
values[9] = alpha;
}`,"inverse.glsl":`float invertValue(float value) {
float s = sign(value);
return (s * s) / (value + abs(s) - 1.0);
}`,"mirror.glsl":`vec2 mirror(vec2 pos) {
vec2 pos1 = abs(pos);
return step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdDurationSeed;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z;
float speed1 = a_xyts1.w;
float type = a_typeIdDurationSeed.x;
float id = a_typeIdDurationSeed.y;
float duration = a_typeIdDurationSeed.z;
float seed = a_typeIdDurationSeed.w;
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float randomizedTime = scaledTime + seed * animationPeriod;
float t = mod(randomizedTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
float t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;
vec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);
color *= mix(1.0, 1.0 - exp(-v_time), u_introFade);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_totalTime = a_timeInfo.y;
v_timeSeed = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},hillshade:{"hillshade.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform int u_hillshadeType;
uniform float u_sinZcosAs[6];
uniform float u_sinZsinAs[6];
uniform float u_cosZs[6];
uniform float u_weights[6];
uniform vec2 u_factor;
uniform float u_minValue;
uniform float u_maxValue;
#include <raster/lut/colorize.glsl>
#include <raster/common/getSurfaceValues.glsl>
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
vec3 hsv = rgb2hsv(rgb.xyz);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * rgb.a;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
if (currentPixel.a == 0.0) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
float pv[10];
getSurfaceValues(u_image, pixelLocation, u_srcImageSize, pv);
float alpha = pv[9];
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * u_factor.s;
float dzy = (pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * u_factor.t;
float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
float hillshade = 0.0;
if (u_hillshadeType == 0){
float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
float z = (u_cosZs[0] + cosDelta) / dzd;
if (z < 0.0)  z = 0.0;
hillshade = z;
} else {
for (int k = 0; k < 6; k++) {
float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
float z = (u_cosZs[k] + cosDelta) / dzd;
if (z < 0.0) z = 0.0;
hillshade = hillshade + z * u_weights[k];
if (k == 5) break;
}
}
#ifdef APPLY_COLORMAP
gl_FragColor = overlay(pv[4], u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
}`},lut:{"colorize.glsl":`uniform sampler2D u_colormap;
uniform float u_colormapOffset;
uniform float u_colormapMaxIndex;
vec4 colorize(vec4 currentPixel, float scaleFactor) {
float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
vec4 result = vec4(color.rgb, color.a * currentPixel.a);
return result;
}`,"lut.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
#include <raster/lut/colorize.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
vec4 result = colorize(currentPixel, 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;
}`},magdir:{"magdir.frag":`precision mediump float;
varying vec4 v_color;
uniform lowp float u_opacity;
void main() {
gl_FragColor = v_color * u_opacity;
}`,"magdir.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
uniform float u_rotation;
uniform vec4 u_colors[12];
varying vec4 v_color;
void main()
{
float angle = a_offset.y + u_rotation;
#ifndef ROTATION_GEOGRAPHIC
angle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;
#endif
vec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 pos = a_pos + offset * sizePercentage * u_symbolSize;
v_color = u_colors[int(a_vv.x)];
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`},rfx:{aspect:{"aspect.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_cellSize;
uniform vec2 u_srcImageSize;
#include <raster/common/getSurfaceValues.glsl>
const float pi = 3.14159265359;
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) / (8.0 * u_cellSize[0]);
float dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) / (8.0 * u_cellSize[1]);
alpha *= sign(abs(dzx) + abs(dzy));
float aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);
float aspect = aspect_rad * 180.0 / pi;
gl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;
}`},bandarithmetic:{"bandarithmetic.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
uniform float u_adjustments[3];
#include <raster/common/inverse.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
float nir = pv2.r;
float red = pv2.g;
float index;
#ifdef NDXI
index = (nir - red) * invertValue(nir + red);
#elif defined(SR)
index = nir * invertValue(red);
#elif defined(CI)
index = nir * invertValue(red) - 1.0;
#elif defined(SAVI)
index = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);
#elif defined(TSAVI)
float s = u_adjustments[0];
float a = u_adjustments[1];
float x = u_adjustments[2];
float y = -a * s + x * (1.0 + s * s);
index = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);
#elif defined(MAVI)
index = 0.5 * (2.0 * (nir + 1.0) - sqrt(pow((2.0 * nir + 1.0), 2.0) - 8.0 * (nir - red)));
#elif defined(GEMI)
float eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);
index = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);
#elif defined(PVI)
float a = u_adjustments[0];
float b = u_adjustments[1];
float y = sqrt(1.0 + a * a);
index = (nir - a * red - b) * invertValue(y);
#elif defined(VARI)
index = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);
#elif defined(MTVI2)
float green = pv2.b;
float v = pow(sqrt((2.0 * nir + 1.0), 2.0) - 6.0 * nir - 5.0 * sqrt(red) - 0.5);
index = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * v;
#elif defined(RTVICORE)
float green = pv2.b;
index = 100.0 * (nir - red) - 10.0 * (nir - green);
#elif defined(EVI)
float blue = pv2.b;
float denom = nir + 6.0 * red - 7.5 * blue + 1.0;
index =  (2.5 * (nir - red)) * invertValue(denom);
#elif defined(WNDWI)
float g = pv2.r;
float n = pv2.g;
float s = pv2.s;
float a = u_adjustments[0];
float denom = g + a * n + (1.0 - a) * s;
index = (g - a * n - (1 - a) * s) * invertValue(denom);
#elif defined(BAI)
index = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));
#else
gl_FragColor = pv;
return;
#endif
gl_FragColor = vec4(index, index, index, pv.a);
}`},compositeband:{"compositeband.frag":`precision mediump float;
uniform sampler2D u_image;
uniform sampler2D u_image1;
uniform sampler2D u_image2;
varying vec2 v_texcoord;
void main() {
vec4 p0 = texture2D(u_image, v_texcoord);
vec4 p1 = texture2D(u_image1, v_texcoord);
vec4 p2 = texture2D(u_image2, v_texcoord);
gl_FragColor = vec4(p0.r, p1.r, p2.r, p0.a * p1.a * p2.a);
}`},contrast:{"contrast.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#include <raster/common/contrastBrightness.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec4 result = adjustContrastBrightness(pv, false) ;
gl_FragColor = vec4(result.rgb * 255.0, result.a);
}`},convolution:{"convolution.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_srcImageSize;
#define KERNEL_SIZE_ROWS ROWS
#define KERNEL_SIZE_COLS COLS
uniform vec2 u_clampRange;
uniform float u_kernel[25];
#include <raster/common/mirror.glsl>
void main() {
vec3 rgb = vec3(0.0, 0.0, 0.0);
vec2 resolution = 1.0 / u_srcImageSize;
float rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));
float colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));
float alpha = 1.0;
for (int row = 0; row < KERNEL_SIZE_ROWS; row++) {
float pos_row = rowOffset + float(row);
for (int col = 0; col < KERNEL_SIZE_COLS; col++) {
vec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;
vec4 pv = texture2D(u_image, mirror(pos));
rgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];
alpha *= pv.a;
}
}
rgb = clamp(rgb, u_clampRange.s, u_clampRange.t);
gl_FragColor = vec4(rgb * alpha, alpha);
}`},curvature:{"curvature.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform float u_zlFactor;
uniform vec2 u_srcImageSize;
#include <raster/common/getSurfaceValues.glsl>
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float d = ((pv[3] + pv[5]) * 0.5 - pv[4]);
float e = ((pv[1] + pv[7]) * 0.5 - pv[4]);
float curvature = 0.0;
#ifdef STANDARD
curvature = -u_zlFactor * (d + e);
gl_FragColor = vec4(curvature, curvature, curvature, alpha);
#else
float f = (-pv[0] + pv[2] + pv[6] - pv[8]) / 4.0;
float g = (-pv[3] + pv[5]) / 2.0;
float h = (pv[1] - pv[7]) / 2.0;
float g2 = g * g;
float h2 = h * h;
#ifdef PROFILE
curvature = (u_zlFactor * (d * g2 + e * h2 + f * g * h)) / (g2 + h2);
#else
curvature = (-u_zlFactor * (d * h2 + e * g2 - f * g * h)) / (g2 + h2);
#endif
#endif
gl_FragColor = vec4(curvature, curvature, curvature, alpha);
}`},extractband:{"extractband.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
gl_FragColor = vec4(pv2, pv.a);
}`},focalstatistics:{"focalstatistics.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_srcImageSize;
#define KERNEL_SIZE_ROWS ROWS
#define KERNEL_SIZE_COLS COLS
uniform vec2 u_clampRange;
#include <raster/common/mirror.glsl>
#include <raster/common/inverse.glsl>
void main() {
vec2 resolution = 1.0 / u_srcImageSize;
float rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));
float colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));
float count = 0.0;
#ifdef STDDEV
vec3 sum = vec3(0.0, 0.0, 0.0);
vec3 sum2 = vec3(0.0, 0.0, 0.0);
#endif
vec4 currentPixel = texture2D(u_image, v_texcoord);
vec3 rgb = currentPixel.rgb;
for (int row = 0; row < KERNEL_SIZE_ROWS; row++) {
float pos_row = rowOffset + float(row);
for (int col = 0; col < KERNEL_SIZE_COLS; col++) {
vec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;
vec4 pv = texture2D(u_image, mirror(pos));
count += pv.a;
#ifdef MIN
rgb = min(rgb, pv.rgb);
#elif defined(MAX)
rgb = max(rgb, pv.rgb);
#elif defined(MEAN)
rgb += pv.rgb;
#elif defined(STDDEV)
sum += pv.rgb;
sum2 += (pv.rgb * pv.rgb);
#endif
}
}
#ifdef MEAN
rgb *= invertValue(count);
#elif defined(STDDEV)
rgb = sqrt((sum2 - sum * sum * invertValue(count)) * invertValue(count));
#endif
float alpha = step(0.9999, count);
rgb = clamp(rgb, u_clampRange.s, u_clampRange.t);
#ifdef FILL
rgb = (1.0 - currentPixel.a) * rgb + currentPixel.a * currentPixel.rgb;
#endif
gl_FragColor = vec4(rgb * alpha, alpha);
}`},local:{"local.frag":`precision mediump float;
uniform sampler2D u_image;
uniform sampler2D u_image1;
#ifdef ONE_CONSTANT
uniform float u_image1Const;
#ifdef TWO_CONSTANT
uniform float u_image2Const;
#endif
uniform mat3 u_imageSwap;
#endif
varying vec2 v_texcoord;
uniform vec2 u_domainRange;
#include <raster/common/inverse.glsl>
void main() {
vec4 pv0 = texture2D(u_image, v_texcoord);
float a = pv0.r;
#ifdef TWO_IMAGES
#ifdef ONE_CONSTANT
float b = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, 0);
a = abc.s;
b = abc.t;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
#endif
#elif defined(CONDITIONAL)
#ifdef TWO_CONSTANT
float b = u_image1Const;
float c = u_image2Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
#elif defined(ONE_CONSTANT)
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
float c = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
vec4 pv2 = texture2D(u_image2, v_texcoord);
float b = pv1.r;
float c = pv2.r;
#endif
#endif
float result = a;
float alpha = pv0.a;
#ifdef PLUS
result = a + b;
#elif defined(MINUS)
result = a - b;
#elif defined(TIMES)
result = a * b;
#elif defined(DIVIDE)
result = a * invertValue(b);
alpha *= float(abs(sign(b)));
#elif defined(FLOATDIVIDE)
result = a * invertValue(b);
alpha *= float(abs(sign(b)));
#elif defined(FLOORDIVIDE)
result = floor(a * invertValue(b));
alpha *= float(abs(sign(b)));
#elif defined(SQUARE)
result = a * a;
#elif defined(SQRT)
result = sqrt(a);
#elif defined(POWER)
result = pow(a, b);
#elif defined(LN)
result = a <= 0.0 ? 0.0: log(a);
alpha *= float(a > 0.0);
#elif defined(LOG_1_0)
result = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));
alpha *= float(a > 0.0);
#elif defined(LOG_2)
result = a <= 0.0 ? 0.0: log2(a);
alpha *= float(a > 0.0);
#elif defined(EXP)
result = exp(a);
#elif defined(EXP_1_0)
result = pow(10.0, a);
#elif defined(EXP_2)
result = pow(2.0, a);
#elif defined(ROUNDDOWN)
result = floor(a);
#elif defined(ROUNDUP)
result = ceil(a);
#elif defined(INT)
result = float(sign(a)) * floor(abs(a));
#elif defined(MOD)
result = mod(a, b);
#elif defined(NEGATE)
result = -a;
#elif defined(ABS)
result = abs(a);
#elif defined(ACOS)
result = abs(a) > 1.0 ? 0.0: acos(a);
alpha *= step(abs(a), 1.00001);
#elif defined(ACOSH)
result = acosh(a);
#elif defined(POLYFILLACOSH)
result = log(a + sqrt(a * a - 1.0));
#elif defined(ASIN)
result = abs(a) > 1.0 ? 0.0: asin(a);
alpha *= step(abs(a), 1.00001);
#elif defined(ASINH)
result = asinh(a);
#elif defined(POLYFILLASINH)
result = log(a + sqrt(a * a + 1.0));
#elif defined(ATAN)
result = atan(a);
#elif defined(ATANH)
result = abs(a) > 1.0 ? 0.0: atanh(a);
alpha *= step(abs(a), 1.0);
#elif defined(POLYFILLATANH)
result = a == 1.0 ? 0.0 : 0.5 * log((1.0 + a)/(1.0 -a));
#elif defined(ATAN_2)
result = atan(a, b);
#elif defined(COS)
result = cos(a);
#elif defined(COSH)
result = cosh(a);
#elif defined(POLYFILLCOSH)
float halfexp = exp(a) / 2.0;
result = halfexp + 1.0 / halfexp;
#elif defined(SIN)
result = sin(a);
#elif defined(SINH)
result = sinh(a);
#elif defined(POLYFILLSINH)
float halfexp = exp(a) / 2.0;
result = halfexp - 1.0 / halfexp;
#elif defined(TAN)
result = tan(a);
#elif defined(TANH)
result = tanh(a);
#elif defined(POLYFILLTANH)
float expx = exp(a);
result = (expx - 1.0 / expx) / (expx + 1.0 / expx);
#elif defined(BITWISEAND)
result = a & b;
#elif defined(BITWISEOR)
result = a | b;
#elif defined(BITWISELEFTSHIFT)
result = a << b;
#elif defined(BITWISERIGHTSHIFT)
result = a >> b;
#elif defined(BITWISENOT)
result = ~a;
#elif defined(BITWISEXOR)
result = a ^ b;
#elif defined(BOOLEANAND)
result = float((a != 0.0) && (b != 0.0));
#elif defined(BOOLEANNOT)
result = float(a == 0.0);
#elif defined(BOOLEANOR)
result = float((a != 0.0) || (b != 0.0));
#elif defined(BOOLEANXOR)
result = float((a != 0.0) ^^ (b != 0.0));
#elif defined(GREATERTHAN)
result = float(a > b);
#elif defined(GREATERTHANEQUAL)
result = float(a >= b);
#elif defined(LESSTHAN)
result = float(a < b);
#elif defined(LESSTHANEQUAL)
result = float(a <= b);
#elif defined(EQUALTO)
result = float(a == b);
#elif defined(NOTEQUAL)
result = float(a != b);
#elif defined(ISNULL)
result = float(alpha == 0.0);
alpha = 1.0;
#elif defined(SETNULL)
float maskValue = float(a == 0.0);
result = maskValue * b;
alpha *= maskValue;
#elif defined(CONDITIONAL)
float weight = float(abs(sign(a)));
result = weight * b + (1.0 - weight) * c;
#endif
bool isInvalid = result < u_domainRange.s || result > u_domainRange.t;
result = isInvalid ? 0.0 : result;
alpha *= float(!isInvalid);
#ifdef ROUND_OUTPUT
result = floor(result + 0.5);
#endif
gl_FragColor = vec4(result, result, result, alpha);
}`},mask:{"mask.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#define LEN_INCLUDED_RANGES 6
#define LEN_NODATA_VALUES 6
uniform highp float u_includedRanges[6];
uniform highp float u_noDataValues[6];
float maskFactor(float bandValue, float fromValue, float to) {
float factor = 1.0;
for (int i = 0; i < LEN_NODATA_VALUES; i++) {
factor *= float(u_noDataValues[i] != bandValue);
}
factor *= step(fromValue, bandValue) * step(bandValue, to);
return factor;
}
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
float redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);
#ifdef MULTI_BAND
float greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);
float blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);
float maskFactor = redFactor * greenFactor * blueFactor;
gl_FragColor = pv * maskFactor;
#else
gl_FragColor = pv * redFactor;
#endif
}`},ndvi:{"ndvi.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
#include <raster/common/inverse.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
float nir = pv2.r;
float red = pv2.g;
float index = (nir - red) * invertValue(nir + red);
#ifdef SCALED
index = floor((index + 1.0) * 100.0 + 0.5);
#endif
gl_FragColor = vec4(index, index, index, pv.a);
}`},remap:{"remap.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#define LEN_REMAP_RANGES 18
#define LEN_NODATA_RANGES 12
uniform highp float u_rangeMaps[18];
uniform highp float u_noDataRanges[12];
uniform highp float u_unmatchMask;
uniform vec2 u_clampRange;
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
float factor = 1.0;
float bandValue = pv.r;
for (int i = 0; i < LEN_NODATA_RANGES; i+=2) {
float inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);
factor *= inside;
}
float mapValue = 0.0;
float includeMask = 0.0;
for (int i = 0; i < LEN_REMAP_RANGES; i+=3) {
float stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);
includeMask = (1.0 - stepMask) * includeMask + stepMask;
mapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];
}
bandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);
float bandMask = factor * max(u_unmatchMask, includeMask);
bandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);
gl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);
}`},slope:{"slope.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_cellSize;
uniform float u_zFactor;
uniform vec2 u_srcImageSize;
uniform float u_pixelSizePower;
uniform float u_pixelSizeFactor;
#include <raster/common/getSurfaceValues.glsl>
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);
float yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * xf;
float dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * yf;
float rise2run = sqrt(dzx * dzx + dzy * dzy);
#ifdef PERCENT_RISE
float percentRise = rise2run * 100.0;
gl_FragColor = vec4(percentRise, percentRise, percentRise, alpha);
#else
float degree = atan(rise2run) * 57.2957795;
gl_FragColor = vec4(degree, degree, degree, alpha);
#endif
}`},stretch:{"stretch.frag":`precision mediump float;
uniform sampler2D u_image;
varying highp vec2 v_texcoord;
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {
val = clamp(val, minCutOff, maxCutOff);
float stretchedVal;
#ifdef USE_GAMMA
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
tempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);
stretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;
stretchedVal = clamp(stretchedVal, minOutput, maxOutput);
#else
stretchedVal = minOutput + (val - minCutOff) * factor;
#endif
#ifdef ROUND_OUTPUT
stretchedVal = floor(stretchedVal + 0.5);
#endif
return stretchedVal;
}
void main() {
vec4 currentPixel = texture2D(u_image, v_texcoord);
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);
#ifdef MULTI_BAND
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);
#else
gl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);
#endif
}`},vs:{"vs.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`}},scalar:{"scalar.frag":`precision mediump float;
uniform lowp float u_opacity;
varying vec2 v_pos;
const vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);
const float outlineSize = 0.02;
const float innerRadius = 0.25;
const float outerRadius = 0.42;
const float innerSquareLength = 0.15;
void main() {
mediump float dist = length(v_pos);
mediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);
fillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));
#ifdef INNER_CIRCLE
mediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);
fillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));
#else
mediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);
#endif
gl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;
}`,"scalar.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
varying vec2 v_pos;
void main()
{
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 size = u_symbolSize * sizePercentage;
vec2 pos = a_pos + a_offset * size;
v_pos = a_offset;
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},stretch:{"stretch.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform bool u_useGamma;
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
#include <raster/lut/colorize.glsl>
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
#ifdef NOOP
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
return;
#endif
if (u_bandCount == 1) {
float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;
#else
gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
} else {
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
}
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},tileInfo:{"tileInfo.frag":`uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;
void main(void) {
lowp vec4 color = texture2D(u_texture, v_tex);
gl_FragColor = 0.75 * color;
}`,"tileInfo.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_coord_ratio;
uniform mediump vec2 u_delta;
uniform mediump vec2 u_dimensions;
varying mediump vec2 v_tex;
void main() {
mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
v_tex = a_pos;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function Ln(f){let e=sn;return f.split("/").forEach(t=>{e&&(e=e[t])}),e}var Rn=new Qt(Ln);function Ce(f){return Rn.resolveIncludes(f)}var se={shaders:{vertexShader:Ce("background/background.vert"),fragmentShader:Ce("background/background.frag")},attributes:new Map([["a_pos",0]])};var j=class{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return e!=null&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}};j.type="default",j.programSpec=null;var ge=class extends j{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){let{attributes:n,dotValue:i,referenceScale:o,dotSize:a,dotBlendingEnabled:r,seed:s,backgroundColor:l}=t,c=e!=null&&e.type==="dot-density"?e:this._createRendererSchema();c.dotValue=i,c.dotSize=a,c.dotScale=o,c.dotBlending=r,c.seed=s;let{colors:v,activeDots:d,backgroundColor:_}=c;for(let p=0;p<Lt;p++){let g=p>=n.length?null:n[p].color;re(v,g,4*p)}for(let p=0;p<8;p++)d[p]=p<t.attributes.length?1:0;return re(_,l),c}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}};ge.type="dot-density",ge.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:3,type:u.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:u.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:u.FLOAT}]}};var he=class extends j{static getStorageSpec({field:e,valueExpression:t}){return{visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){let{radius:n,minDensity:i,maxDensity:o,referenceScale:a,field:r,valueExpression:s,colorStops:l}=t,c=o-i,v=r||s?1:0,d=l.map(({color:g,ratio:m})=>`${m}:${g.toString()}`).join(),_,p=!0;return e!=null&&e.type==="heatmap"?(_=e,p=d!==e.gradientHash):_=this._createRendererSchema(),_.radius=Ne(n),_.minDensity=i,_.densityRange=c,_.referenceScale=a,_.isFieldActive=v,p&&(_.gradient=At(l),_.gradientHash=d),_}};he.type="heatmap",he.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_vertexOffset",count:2,type:u.SHORT},{location:4,name:"a_id",count:4,type:u.UNSIGNED_BYTE}]}};var xe=class extends j{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*vt),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){let{attributes:n,defaultColor:i,holePercentage:o,othersCategory:a,outline:r}=t,s=e!=null&&e.type==="pie-chart"?e:this._createRendererSchema();for(let l=0;l<vt;l++){let c=l>=n.length?new Kt([0,0,0,0]):n[l].color;re(s.colors,c,4*l)}return re(s.defaultColor,i),re(s.othersColor,a?.color),re(s.outlineColor,r?.color),s.outlineWidth=Ne(r?.width||0),s.holePercentage=o,s.sectorThreshold=a?.threshold||0,s.numberOfFields=n.length,s}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}};xe.type="pie-chart",xe.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_vertexOffset",count:2,type:u.SHORT},{location:2,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:u.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:u.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};var Q=class extends z{constructor(){super(...arguments),this._computeDesc=new Map}prepareState({context:e},t){t&&t.includes("hittest")?e.setBlendFunctionSeparate(R.ONE,R.ONE,R.ONE,R.ONE):e.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t,n){let i=this.getGeometryType();t.commit(e);let o=t.getGeometry(i);o!=null&&(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),e.context.setStencilFunction(N.EQUAL,t.stencilRef,255),o.forEachCommand(a=>{let r=Fe.load(a.materialKey).symbologyType;this.supportsSymbology(r)&&this.drawGeometry(e,t,a,n)}))}_setSharedUniforms(e,t,n){let{displayLevel:i,pixelRatio:o,state:a,passOptions:r}=t;r!=null&&r.type==="hittest"&&(e.setUniform2fv("u_hittestPos",r.position),e.setUniform1f("u_hittestDist",r.distance)),e.setUniform1f("u_pixelRatio",o),e.setUniformMatrix3fv("u_tileMat3",n.transforms.tileMat3),e.setUniformMatrix3fv("u_viewMat3",a.viewMat3),e.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),e.setUniform1f("u_currentZoom",Math.floor(i*Bt)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",Rt),e.setUniform1i("u_attributeData1",Nt),e.setUniform1i("u_attributeData2",Mt),e.setUniform1i("u_attributeData3",zt),e.setUniform1i("u_attributeData4",Ft),e.setUniform1i("u_attributeData5",Vt)}_setSizeVVUniforms(e,t,n,i){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),e.vvSizeFieldStops){let o=n.getSizeVVFieldStops(i.key.level);o!=null&&(t.setUniform1fv("u_vvSizeFieldStopsValues",o.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",o.sizes))}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,n){e.vvColor&&(t.setUniform1fv("u_vvColorValues",n.vvColorValues),t.setUniform4fv("u_vvColors",n.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),t.setUniform1fv("u_vvOpacities",n.vvOpacities))}_setRotationVVUniforms(e,t,n){e.vvRotation&&t.setUniform1f("u_vvRotationType",n.vvMaterialParameters.vvRotationType==="geographic"?0:1)}_getTriangleDesc(e,t,n=["a_pos"]){let i=t.bufferLayouts.geometry,o=n.map(s=>i.findIndex(l=>l.name===s)),a=`${e}-${o.join("-")}`,r=this._computeDesc.get(a);if(!r){let s=t.strides,l=t.strides.geometry,c=new Map(t.attributes),v=i.map(g=>Te({},g)),d=Math.max(...t.attributes.values()),_={geometry:v},p=0;for(let g of o){let m=i[g];_.geometry.push({count:m.count,name:m.name+"1",divisor:m.divisor,normalized:m.normalized,offset:l+m.offset,stride:l,type:m.type}),_.geometry.push({count:m.count,name:m.name+"2",divisor:m.divisor,normalized:m.normalized,offset:2*l+m.offset,stride:l,type:m.type}),c.set(m.name+"1",d+ ++p),c.set(m.name+"2",d+ ++p)}r={bufferLayouts:_,attributes:c,strides:s},this._computeDesc.set(a,r)}return r}};function oe(f,e){if(f.type!==e)throw new X("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${f.type}"`)}function Yo(f){switch(f?.type){case"dot-density":return ge;case"heatmap":return he;case"pie-chart":return xe;default:return j}}function He(f){let{geometryType:e,symbologyType:t}=Fe.load(f);switch(e){case H.FILL:if(t===B.DOT_DENSITY)return ge;break;case H.MARKER:switch(t){case B.HEATMAP:return he;case B.PIE_CHART:return xe}}return j}var Nn={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_vertexOffset",count:2,type:u.SHORT},{location:2,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:u.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:u.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]},ue=class extends Q{dispose(){}getGeometryType(){return H.MARKER}supportsSymbology(e){return e!==B.HEATMAP&&e!==B.PIE_CHART}drawGeometry(e,t,n,i){let{context:o,painter:a,rendererInfo:r,state:s,passOptions:l,requestRender:c,allowDelayedRender:v}=e,d=Ht.load(n.materialKey),_=He(d.data),p=l!=null&&l.type==="hittest",{shader:g,vertexLayout:m,hittestAttributes:C}=_.programSpec??Nn,h=S.TRIANGLES,A=k(d.data,m);p&&(A=this._getTriangleDesc(n.materialKey,A,C),h=S.POINTS);let{attributes:D,bufferLayouts:E}=A,y=a.materialManager.getMaterialProgram(e,d,g,D,i);if(v&&c!=null&&!y.compiled)return void c();o.useProgram(y),d.textureBinding&&a.textureManager.bindTextures(o,y,d,!0),this._setSharedUniforms(y,e,t);let x=d.vvRotation?s.displayViewMat3:s.displayMat3;y.setUniformMatrix3fv("u_displayMat3",x),this._setSizeVVUniforms(d,y,r,t),this._setColorAndOpacityVVUniforms(d,y,r),this._setRotationVVUniforms(d,y,r);let O=n.target.getVAO(o,E,D,p),b=n.indexCount,I=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;p&&(b/=3,I/=3),o.bindVAO(O),this._drawMarkers(e,t,y,h,b,I,p),o.bindVAO(null)}_drawMarkers(e,t,n,i,o,a,r){e.context.drawElements(i,o,u.UNSIGNED_INT,a)}};var Ye=class{constructor(){this.name=this.constructor.name}createOptions(e,t){return null}};var We=class{constructor(e,t,n,i){this.dataType=e,this.samplingMode=t,this.pixelFormat=n,this.internalFormat=i}};function un(f,e){let{textureFloat:t,colorBufferFloat:n}=f.capabilities,i=t?.textureFloat,o=t?.textureFloatLinear,a=t?.textureHalfFloat,r=t?.textureHalfFloatLinear,s=n?.textureFloat,l=n?.textureHalfFloat,c=n?.floatBlend,v=f.driverTest.floatBufferBlend.result;if(!i&&!a)throw new X("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!s&&!l)throw new X("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(c&&v||l))throw new X("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(v?"":" This device claims support for EXT_float_blend, but does not actually support it."));let d=i&&s&&c&&v,_=a&&l,p=o,g=r,m=!!n?.R32F,C=!!n?.R16F;if(d&&(p||!g))return p||e.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new We(_e.FLOAT,p?M.LINEAR:M.NEAREST,m?de.RED:de.RGBA,m?mt.R32F:de.RGBA);if(_)return g||e.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),new We(_e.HALF_FLOAT,g?M.LINEAR:M.NEAREST,C?de.RED:de.RGBA,C?mt.R16F:de.RGBA);throw new X("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}var cn=be.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap");function fn(f){return f.type==="heatmap"}function dn(f,e){let{referenceScale:t,radius:n}=f;return n*(t!==0?t/e.scale:1)}var ke=class extends ue{constructor(){super(...arguments),this.brushEffect=new St}supportsSymbology(e){return e===B.HEATMAP}dispose(){super.dispose(),this.brushEffect.dispose(),this.brushEffect=null}prepareState(){}drawGeometry(e,t,n,i){let{defines:o}=this.brushEffect.loadQualityProfile(e.context);super.drawGeometry(e,t,n,i?[...i,...o]:o)}_drawMarkers(e,t,n,i,o,a,r){let{context:s,rendererInfo:l,state:c}=e,{rendererSchema:v}=l;oe(v,"heatmap");let{isFieldActive:d}=v;n.setUniform1f("u_radius",dn(v,c)),r||(n.setUniform1f("u_isFieldActive",d),s.setStencilFunction(N.GEQUAL,t.stencilRef,255)),s.drawElements(i,o,u.UNSIGNED_INT,a)}},Mn={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",0]])},yt=.25,zn=1/(2*yt);function Fn(f){return f<zn?1:yt}var St=class extends Ye{constructor(){super(...arguments),this.name=this.constructor.name}createOptions({passOptions:e}){return e}dispose(){this._prevFBO=null,this._accumulateFramebuffer!=null&&this._accumulateFramebuffer.detachDepthStencilBuffer(),this._accumulateOutputStencilBuffer=ie(this._accumulateOutputStencilBuffer),this._accumulateFramebuffer=ie(this._accumulateFramebuffer),this._resolveGradientTexture=ie(this._resolveGradientTexture),this._tileQuad=ie(this._tileQuad)}bind(e){let{context:t,rendererInfo:n,passOptions:i,state:o}=e,{rendererSchema:a}=n;!(i!=null&&i.type==="hittest")&&fn(a)&&(this._prevFBO=t.getBoundFramebufferObject(),this._prevViewport=t.getViewport(),oe(a,"heatmap"),this._loadResources(e),this._updateResources(t,a,o),t.bindFramebuffer(this._accumulateFramebuffer),t.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),t.setBlendFunction(R.ONE,R.ONE),t.setClearColor(0,0,0,0),t.clear(_t.COLOR_BUFFER_BIT))}unbind(){this._prevFBO=null,this._prevViewport=null}draw(e){let{context:t,painter:n,rendererInfo:i,passOptions:o}=e,{rendererSchema:a}=i;if(o!=null&&o.type==="hittest"||!fn(a))return;let{defines:r}=this.loadQualityProfile(t),s=n.materialManager.getProgram(Mn,r);t.useProgram(s),t.bindFramebuffer(this._prevFBO),t.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),t.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),t.setStencilTestEnabled(!1);let{radius:l,minDensity:c,densityRange:v}=a;t.bindTexture(this._accumulateFramebuffer.colorTexture,8),t.bindTexture(this._resolveGradientTexture,9),s.setUniform1i("u_texture",8),s.setUniform1i("u_gradient",9),s.setUniform2f("u_densityMinAndInvRange",c,1/v),s.setUniform1f("u_densityNormalization",3/(l*l*Math.PI)),this._tileQuad.draw()}_loadResources({context:e,painter:t}){let{dataType:n,samplingMode:i,pixelFormat:o,internalFormat:a,requiresSharedStencilBuffer:r}=this.loadQualityProfile(e),{width:s,height:l}=this._prevViewport,c=r?1:yt,v=s*c,d=l*c,_=new le(v,d);_.pixelFormat=o,_.internalFormat=a,_.dataType=n,_.samplingMode=i,_.wrapMode=fe.CLAMP_TO_EDGE,r||(this._accumulateOutputStencilBuffer??=new Ue(e,new we(Me.DEPTH_STENCIL,v,d))),this._accumulateFramebuffer??=new Be(e,_,r?t.getSharedStencilBuffer():this._accumulateOutputStencilBuffer),_=new le,_.wrapMode=fe.CLAMP_TO_EDGE,this._resolveGradientTexture??=new Ee(e,_),this._tileQuad??=new Ie(e,[0,0,1,0,0,1,1,1])}_updateResources(e,t,n){let{gradientHash:i,gradient:o}=t;this._prevGradientHash!==i&&(this._resolveGradientTexture.resize(o.length/4,1),this._resolveGradientTexture.setData(o),this._prevGradientHash=i);let{requiresSharedStencilBuffer:a}=this.loadQualityProfile(e),r=a?1:Fn(dn(t,n)),{width:s,height:l}=this._prevViewport,c=s*r,v=l*r,{width:d,height:_}=this._accumulateFramebuffer;if(d!==c||_!==v){let p=this._accumulateFramebuffer.depthStencil;if(a&&p!=null){let{width:g,height:m}=p.descriptor;g===c&&m===v||(cn.errorOnce("Attempted to resize shared stencil buffer! Detaching instead."),this._accumulateFramebuffer.detachDepthStencilBuffer())}this._accumulateFramebuffer.resize(c,v)}a||e.blitFramebuffer(this._prevFBO,this._accumulateFramebuffer,0,0,this._prevFBO.width,this._prevFBO.height,0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height,_t.STENCIL_BUFFER_BIT,M.NEAREST)}loadQualityProfile(e){if(this._qualityProfile==null){let t=un(e,cn),n=e.type===Xt.WEBGL1;this._qualityProfile=Re(Te({},t),{requiresSharedStencilBuffer:n,defines:t.dataType!==_e.FLOAT?["heatmapPrecisionHalfFloat"]:[]})}return this._qualityProfile}};var Le={geometry:[new me("a_pos",2,u.BYTE,0,2)]},yi={geometry:[new me("a_pos",2,u.BYTE,0,4),new me("a_tex",2,u.BYTE,2,4)]},Ti={geometry:[new me("a_pos",2,u.UNSIGNED_SHORT,0,4)]};var Tt={shaders:{vertexShader:Ce("tileInfo/tileInfo.vert"),fragmentShader:Ce("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])};function _n(f){return window.WebGL2RenderingContext&&f instanceof window.WebGL2RenderingContext}var Vn=()=>k("clip",{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT}]}),Ze=class extends z{constructor(){super(...arguments),this._color=q(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(ae.KEEP,ae.KEEP,ae.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(N.ALWAYS,0,255)}draw(e,t){let{context:n,state:i,requestRender:o,allowDelayedRender:a}=e,r=Vn(),s=t.getVAO(n,i,r.attributes,r.bufferLayouts);s.indexBuffer!=null&&(this._program||(this._program=pe(n,se)),!a||o==null||this._program.compiled?(n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",i.displayMat3),n.bindVAO(s),n.drawElements(S.TRIANGLES,s.indexBuffer.size,u.UNSIGNED_INT,0),n.bindVAO()):o())}};var wn=()=>k("overlay",{geometry:[{location:0,name:"a_pos",count:2,type:u.FLOAT}],tex:[{location:1,name:"a_uv",count:2,type:u.UNSIGNED_SHORT}]}),qe=class extends z{constructor(){super(...arguments),this._desc={vsPath:"overlay/overlay",fsPath:"overlay/overlay",attributes:new Map([["a_pos",0],["a_uv",1]])}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(N.GREATER,255,255)}draw(e,t){let{context:n,painter:i,requestRender:o,allowDelayedRender:a}=e;if(!t.isReady)return;let{computedOpacity:r,dvsMat3:s,isWrapAround:l,perspectiveTransform:c,texture:v}=t;e.timeline.begin(this.name);let d=i.materialManager.getProgram(this._desc);if(a&&o!=null&&!d.compiled)return void o();let _=wn(),p=t.getVAO(n,_.bufferLayouts,_.attributes);if(!p)return;n.bindVAO(p),n.useProgram(d),n.bindTexture(v,Oe),d.setUniformMatrix3fv("u_dvsMat3",s),d.setUniform1i("u_texture",Oe),d.setUniform1f("u_opacity",r),d.setUniform2fv("u_perspective",c);let g=l?10:4;n.drawArrays(S.TRIANGLE_STRIP,0,g),n.bindVAO(),e.timeline.end(this.name)}};function Un(f){let e={geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:3,type:u.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:u.UNSIGNED_BYTE},{location:3,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_aux1",count:4,type:u.UNSIGNED_SHORT},{location:5,name:"a_aux2",count:4,type:u.SHORT},{location:6,name:"a_aux3",count:4,type:u.UNSIGNED_BYTE},{location:7,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]};switch(f.symbologyType){case B.SIMPLE:case B.OUTLINE_FILL_SIMPLE:e.geometry.splice(7,1),e.geometry.splice(4,1)}return{shader:"materials/fill",vertexLayout:e}}var Ae=class extends Q{dispose(){}getGeometryType(){return H.FILL}supportsSymbology(e){return e!==B.DOT_DENSITY}drawGeometry(e,t,n,i){let{context:o,painter:a,rendererInfo:r,requiredLevel:s,passOptions:l,requestRender:c,allowDelayedRender:v}=e,d=Gt.load(n.materialKey),_=He(d.data),p=l!=null&&l.type==="hittest",g=a.materialManager,{shader:m,vertexLayout:C,hittestAttributes:h}=_.programSpec??Un(d),A=S.TRIANGLES,D=k(d.data,C);p&&(D=this._getTriangleDesc(n.materialKey,D,h),A=S.POINTS);let{attributes:E,bufferLayouts:y}=D,x=g.getMaterialProgram(e,d,m,E,i);if(v&&c!=null&&!x.compiled)return void c();o.useProgram(x),this._setSharedUniforms(x,e,t);let{row:O,col:b}=t.key,I=b*ve,T=O*ve;if(x.setUniform2f("u_tileOffset",I%Pe,T%Pe),x.setUniform2f("u_maxIntNumOfCrossing",Math.floor(I/Pe),Math.floor(T/Pe)),d.textureBinding){a.textureManager.bindTextures(o,x,d);let ne=1/2**(s-t.key.level);x.setUniform1f("u_zoomFactor",ne)}let P=1/e.pixelRatio;x.setUniform1f("u_blur",P),x.setUniform1f("u_antialiasing",P),this._setSizeVVUniforms(d,x,r,t),this._setColorAndOpacityVVUniforms(d,x,r);let L=n.target.getVAO(o,y,E,p),U=n.indexCount,F=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;p&&(U/=3,F/=3),o.bindVAO(L),this._drawFills(e,t,x,A,U,F)}_drawFills(e,t,n,i,o,a){e.context.drawElements(i,o,u.UNSIGNED_INT,a)}};var Ke=class extends Ae{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([wt,Ut]),this._dotVAO=null,this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){super.dispose(),this._disposeTextures(),this._dotFBO=ie(this._dotFBO),this._dotVAO=ie(this._dotVAO)}getGeometryType(){return H.FILL}supportsSymbology(e){return e===B.DOT_DENSITY}_drawFills(e,t,n,i,o,a){let{passOptions:r}=e;if(r!=null&&r.type==="hittest")super._drawFills(e,t,n,i,o,a);else{let s=this._drawDotLocations(e,t,n,o,a);this._drawDotDensity(e,t,s)}}_drawDotDensity(e,t,n){let{context:i,painter:o,rendererInfo:a,requestRender:r,allowDelayedRender:s}=e,l=o.materialManager.getProgram(this._dotDesc);if(s&&r!=null&&!l.compiled)return void r();let{rendererSchema:c}=a;oe(c,"dot-density");let v=this._createDotDensityMesh(i,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:u.SHORT,divisor:0,normalized:!1,offset:0,stride:4}]});i.setStencilTestEnabled(!0),i.useProgram(l),l.setUniform1f("u_tileZoomFactor",1),l.setUniform1i("u_texture",this._dotSamplers[0]),l.setUniform1f("u_dotSize",Math.max(c.dotSize,1)),l.setUniform1f("u_pixelRatio",window.devicePixelRatio),this._setSharedUniforms(l,e,t),i.bindTexture(n,this._dotSamplers[0]),i.bindVAO(v),i.drawArrays(S.POINTS,0,262144)}_drawDotLocations(e,t,n,i,o){let{context:a,rendererInfo:r,requiredLevel:s}=e,l=a.getViewport(),{rendererSchema:c}=r;oe(c,"dot-density");let{dotScale:v,colors:d,activeDots:_,backgroundColor:p,dotValue:g}=c;a.setViewport(0,0,512,512);let m=a.getBoundFramebufferObject(),C=this._createFBO(a);a.bindFramebuffer(C),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.STENCIL_BUFFER_BIT),a.setStencilTestEnabled(!1);let h=1/2**(s-t.key.level),A=ve,D=A*window.devicePixelRatio*A*window.devicePixelRatio,E=1/h*(1/h),y=v?e.state.scale/v:1;return n.setUniform1f("u_tileZoomFactor",h),n.setUniform1f("u_tileDotsOverArea",D/(ve*window.devicePixelRatio*ve*window.devicePixelRatio)),n.setUniformMatrix4fv("u_dotColors",d),n.setUniform4fv("u_isActive",_),n.setUniform4fv("u_dotBackgroundColor",p),n.setUniform1f("u_dotValue",Math.max(1,g*y*E)),this._bindDotDensityTextures(a,n,r,A),a.drawElements(S.TRIANGLES,i,u.UNSIGNED_INT,o),a.setViewport(l.x,l.y,l.width,l.height),a.bindFramebuffer(m),C.colorTexture}_createFBO(e){if(this._dotFBO==null){let i=new le(512,512);i.samplingMode=M.NEAREST,i.wrapMode=fe.CLAMP_TO_EDGE;let o=new Ue(e,new we(Me.DEPTH_STENCIL,512,512));this._dotFBO=new Be(e,i,o)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_bindDotDensityTextures(e,t,n,i){let{rendererSchema:o}=n;oe(o,"dot-density");let a=this._createDotDensityTextures(e,i,o.seed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(let r=0;r<a.length;r++)e.bindTexture(a[r],this._dotSamplers[r])}_createDotDensityMesh(e,t,n){if(this._dotVAO==null){let o=new Int16Array(524288);for(let r=0;r<512;r++)for(let s=0;s<512;s++)o[2*(s+512*r)]=s,o[2*(s+512*r)+1]=r;let a=Z.createVertex(e,W.STATIC_DRAW,o);this._dotVAO=new K(e,t,n,{geometry:a},null)}return this._dotVAO}_createDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){let i=new Ot(n);this._dotTextures=[this._allocDotDensityTexture(e,t,i),this._allocDotDensityTexture(e,t,i)]}return this._dotTextures}_allocDotDensityTexture(e,t,n){let i=new Float32Array(t*t*4);for(let a=0;a<i.length;a++)i[a]=n.getFloat();let o=new le;return o.dataType=_e.FLOAT,o.samplingMode=M.NEAREST,o.width=t,o.height=t,new Ee(e,o,i)}};var je=300,Xe=32,Qe=class extends z{constructor(){super(...arguments),this._color=q(1,0,0,1)}dispose(){this._outlineProgram?.dispose(),this._outlineProgram=null,this._tileInfoProgram?.dispose(),this._tileInfoProgram=null,this._outlineVertexArrayObject?.dispose(),this._outlineVertexArrayObject=null,this._tileInfoVertexArrayObject?.dispose(),this._tileInfoVertexArrayObject=null,this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){let{context:n,requestRender:i,allowDelayedRender:o}=e;if(!t.isReady)return;if(this._loadWGLResources(n),o&&i!=null&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void i();n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(S.LINE_STRIP,0,4);let a=this._getTexture(n,t);a&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),n.drawArrays(S.TRIANGLE_STRIP,0,4)),n.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;let t=pe(e,se),n=pe(e,Tt),i=new Int8Array([0,0,1,0,1,1,0,1]),o=Z.createVertex(e,W.STATIC_DRAW,i),a=new K(e,se.attributes,Le,{geometry:o}),r=new Int8Array([0,0,1,0,0,1,1,1]),s=Z.createVertex(e,W.STATIC_DRAW,r),l=new K(e,Tt.attributes,Le,{geometry:s});this._outlineProgram=t,this._tileInfoProgram=n,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=l}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture;t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","tileCanvas2d"),this._canvas.setAttribute("width",`${je}`),this._canvas.setAttribute("height",`${Xe}`),this._canvas.setAttribute("style","display:none"));let n=t.triangleCount,i=t.key.id;t.triangleCount>0&&(i+=`, ${n}`);let o=this._canvas,a=o.getContext("2d");a.font="24px sans-serif",a.textAlign="left",a.textBaseline="top",a.clearRect(0,0,je,Xe),n>1e5?(a.fillStyle="red",a.fillRect(0,0,je,Xe),a.fillStyle="black"):(a.clearRect(0,0,je,Xe),a.fillStyle="blue"),a.fillText(i,0,0);let r=new le;return r.wrapMode=fe.CLAMP_TO_EDGE,r.samplingMode=M.NEAREST,r.isImmutable=_n(e.gl),t.texture=new Ee(e,r,o),t.texture}};var $e=class extends ue{supportsSymbology(e){return e===B.PIE_CHART}_drawMarkers(e,t,n,i,o,a,r){let{context:s}=e,{rendererInfo:l}=e,{rendererSchema:c}=l;oe(c,"pie-chart"),n.setUniform4fv("u_colors",c.colors),n.setUniform4fv("u_defaultColor",c.defaultColor),n.setUniform4fv("u_othersColor",c.othersColor),n.setUniform4fv("u_outlineColor",c.outlineColor),n.setUniform1f("u_donutRatio",c.holePercentage),n.setUniform1f("u_sectorThreshold",c.sectorThreshold),n.setUniform1f("u_outlineWidth",c.outlineWidth),s.drawElements(i,o,u.UNSIGNED_INT,a)}};var Je=class extends z{constructor(){super(...arguments),this._color=q(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(ae.KEEP,ae.KEEP,ae.REPLACE),e.setStencilWriteMask(255)}draw(e,t){let{context:n,requestRender:i,allowDelayedRender:o}=e;this._initialized||this._initialize(n),!o||i==null||this._solidProgram.compiled?(n.setStencilFunctionSeparate(Pt.FRONT_AND_BACK,N.GREATER,t.stencilRef,255),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(S.TRIANGLE_STRIP,0,4),n.bindVAO()):i()}_initialize(e){if(this._initialized)return!0;let t=pe(e,se);if(!t)return!1;let n=new Int8Array([0,0,1,0,0,1,1,1]),i=Z.createVertex(e,W.STATIC_DRAW,n),o=new K(e,se.attributes,Le,{geometry:i});return this._solidProgram=t,this._solidVertexArrayObject=o,this._initialized=!0,!0}};var et=class extends z{constructor(){super(...arguments),this._color=q(1,0,0,1),this._patternMatrix=Ve(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){let{context:n,painter:i,styleLayerUID:o,requestRender:a,allowDelayedRender:r}=e;this._loadWGLResources(e);let s=e.displayLevel,l=e.styleLayer,c=l.backgroundMaterial,v=i.vectorTilesMaterialManager,d=l.getPaintValue("background-color",s),_=l.getPaintValue("background-opacity",s),p=l.getPaintValue("background-pattern",s),g=p!==void 0,m=d[3]*_,C=1|window.devicePixelRatio,h=e.spriteMosaic,A,D,E=C>ze?2:1,y=e.drawPhase===w.HITTEST,x=this._programOptions;x.id=y,x.pattern=g;let O=v.getMaterialProgram(n,c,x);if(!r||a==null||O.compiled){if(n.bindVAO(this._vao),n.useProgram(O),g){let b=h.getMosaicItemPosition(p,!0);if(b!=null){let{tl:I,br:T,page:P}=b;A=T[0]-I[0],D=T[1]-I[1];let L=h.getPageSize(P);L!=null&&(h.bind(n,M.LINEAR,P,G),O.setUniform4f("u_tlbr",I[0],I[1],T[0],T[1]),O.setUniform2fv("u_mosaicSize",L),O.setUniform1i("u_texture",G))}O.setUniform1f("u_opacity",_)}else this._color[0]=m*d[0],this._color[1]=m*d[1],this._color[2]=m*d[2],this._color[3]=m,O.setUniform4fv("u_color",this._color);if(O.setUniform1f("u_depth",l.z||0),y){let b=ee(o+1);O.setUniform4fv("u_id",b)}for(let b of t){if(O.setUniform1f("u_coord_range",b.rangeX),O.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),g){let I=Math.max(2**(Math.round(s)-b.key.level),1),T=E*b.width*I,P=T/ct(A),L=T/ct(D);this._patternMatrix[0]=P,this._patternMatrix[4]=L,O.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(N.EQUAL,0,255),n.drawArrays(S.TRIANGLE_STRIP,0,4)}}else a()}_loadWGLResources(e){if(this._vao)return;let{context:t,styleLayer:n}=e,i=n.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),a=Z.createVertex(t,W.STATIC_DRAW,o),r=new K(t,i.getAttributeLocations(),i.getLayoutInfo(),{geometry:a});this._vao=r}};var tt=class extends z{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){let{context:n,displayLevel:i,requiredLevel:o,state:a,drawPhase:r,painter:s,spriteMosaic:l,styleLayerUID:c,requestRender:v,allowDelayedRender:d}=e;if(!t.some(x=>x.layerData.get(c)?.circleIndexCount??!1))return;let _=e.styleLayer,p=_.circleMaterial,g=s.vectorTilesMaterialManager,m=1.2,C=_.getPaintValue("circle-translate",i),h=_.getPaintValue("circle-translate-anchor",i),A=r===w.HITTEST,D=this._programOptions;D.id=A;let E=g.getMaterialProgram(n,p,D);if(d&&v!=null&&!E.compiled)return void v();n.useProgram(E),E.setUniformMatrix3fv("u_displayMat3",h===te.VIEWPORT?a.displayMat3:a.displayViewMat3),E.setUniform2fv("u_circleTranslation",C),E.setUniform1f("u_depth",_.z),E.setUniform1f("u_antialiasingWidth",m);let y=-1;if(A){let x=ee(c+1);E.setUniform4fv("u_id",x)}for(let x of t){if(!x.layerData.has(c))continue;x.key.level!==y&&(y=x.key.level,p.setDataUniforms(E,i,_,y,l));let O=x.layerData.get(c);if(!O.circleIndexCount)continue;O.prepareForRendering(n);let b=O.vao;b!=null&&(n.bindVAO(b),E.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),o!==x.key.level?n.setStencilFunction(N.EQUAL,x.stencilRef,255):n.setStencilFunction(N.GREATER,255,255),n.drawElements(S.TRIANGLES,O.circleIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*O.circleIndexStart),x.triangleCount+=O.circleIndexCount/3)}}};var mn=1/65536,nt=class extends z{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){let{displayLevel:n,drawPhase:i,renderPass:o,spriteMosaic:a,styleLayerUID:r}=e,s=!1;for(let E of t)if(E.layerData.has(r)){let y=E.layerData.get(r);if(y.fillIndexCount>0||y.outlineIndexCount>0){s=!0;break}}if(!s)return;let l=e.styleLayer,c=l.getPaintProperty("fill-pattern"),v=c!==void 0,d=v&&c.isDataDriven,_;if(v&&!d){let E=c.getValue(n);_=a.getMosaicItemPosition(E,!0)}let p=!v&&l.getPaintValue("fill-antialias",n),g=!0,m=1;if(!v){let E=l.getPaintProperty("fill-color"),y=l.getPaintProperty("fill-opacity");if(!E?.isDataDriven&&!y?.isDataDriven){let x=l.getPaintValue("fill-color",n);m=l.getPaintValue("fill-opacity",n)*x[3],m>=1&&(g=!1)}}if(g&&o==="opaque")return;let C;i===w.HITTEST&&(C=ee(r+1));let h=l.getPaintValue("fill-translate",n),A=l.getPaintValue("fill-translate-anchor",n);(g||o!=="translucent")&&this._drawFill(e,r,l,t,h,A,v,_,d,C);let D=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&m<1;p&&o!=="opaque"&&!D&&this._drawOutline(e,r,l,t,h,A,C)}_drawFill(e,t,n,i,o,a,r,s,l,c){if(r&&!l&&s==null)return;let{context:v,displayLevel:d,state:_,drawPhase:p,painter:g,pixelRatio:m,spriteMosaic:C,requestRender:h,allowDelayedRender:A}=e,D=n.fillMaterial,E=g.vectorTilesMaterialManager,y=m>ze?2:1,x=p===w.HITTEST,O=this._fillProgramOptions;O.id=x,O.pattern=r;let b=E.getMaterialProgram(v,D,O);if(A&&h!=null&&!b.compiled)return void h();if(v.useProgram(b),s!=null){let{page:T}=s,P=C.getPageSize(T);P!=null&&(C.bind(v,M.LINEAR,T,G),b.setUniform2fv("u_mosaicSize",P),b.setUniform1i("u_texture",G))}b.setUniformMatrix3fv("u_displayMat3",a===te.VIEWPORT?_.displayMat3:_.displayViewMat3),b.setUniform2fv("u_fillTranslation",o),b.setUniform1f("u_depth",n.z+mn),x&&b.setUniform4fv("u_id",c);let I=-1;for(let T of i){if(!T.layerData.has(t))continue;T.key.level!==I&&(I=T.key.level,D.setDataUniforms(b,d,n,I,C));let P=T.layerData.get(t);if(!P.fillIndexCount)continue;P.prepareForRendering(v);let L=P.fillVAO;if(L!=null){if(v.bindVAO(L),b.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),v.setStencilFunction(N.EQUAL,T.stencilRef,255),r){let U=Math.max(2**(Math.round(d)-T.key.level),1),F=T.rangeX/(y*T.width*U);b.setUniform1f("u_patternFactor",F)}if(l){let U=P.patternMap;if(!U)continue;for(let[F,ne]of U){let ce=C.getPageSize(F);ce!=null&&(C.bind(v,M.LINEAR,F,G),b.setUniform2fv("u_mosaicSize",ce),b.setUniform1i("u_texture",G),v.drawElements(S.TRIANGLES,ne[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*ne[0]))}}else v.drawElements(S.TRIANGLES,P.fillIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*P.fillIndexStart);T.triangleCount+=P.fillIndexCount/3}}}_drawOutline(e,t,n,i,o,a,r){let{context:s,displayLevel:l,state:c,drawPhase:v,painter:d,pixelRatio:_,spriteMosaic:p,requestRender:g,allowDelayedRender:m}=e,C=n.outlineMaterial,h=d.vectorTilesMaterialManager,A=.75/_,D=v===w.HITTEST,E=this._outlineProgramOptions;E.id=D;let y=h.getMaterialProgram(s,C,E);if(m&&g!=null&&!y.compiled)return void g();s.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",a===te.VIEWPORT?c.displayMat3:c.displayViewMat3),y.setUniform2fv("u_fillTranslation",o),y.setUniform1f("u_depth",n.z+mn),y.setUniform1f("u_outline_width",A),D&&y.setUniform4fv("u_id",r);let x=-1;for(let O of i){if(!O.layerData.has(t))continue;O.key.level!==x&&(x=O.key.level,C.setDataUniforms(y,l,n,x,p));let b=O.layerData.get(t);if(b.prepareForRendering(s),!b.outlineIndexCount)continue;let I=b.outlineVAO;I!=null&&(s.bindVAO(I),y.setUniformMatrix3fv("u_dvsMat3",O.transforms.dvs),s.setStencilFunction(N.EQUAL,O.stencilRef,255),s.drawElements(S.TRIANGLES,b.outlineIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*b.outlineIndexStart),O.triangleCount+=b.outlineIndexCount/3)}}};var ot=class extends z{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){let{context:n,displayLevel:i,state:o,drawPhase:a,painter:r,pixelRatio:s,spriteMosaic:l,styleLayerUID:c,requestRender:v,allowDelayedRender:d}=e;if(!t.some(L=>L.layerData.get(c)?.lineIndexCount??!1))return;let _=e.styleLayer,p=_.lineMaterial,g=r.vectorTilesMaterialManager,m=_.getPaintValue("line-translate",i),C=_.getPaintValue("line-translate-anchor",i),h=_.getPaintProperty("line-pattern"),A=h!==void 0,D=A&&h.isDataDriven,E,y;if(A&&!D){let L=h.getValue(i);E=l.getMosaicItemPosition(L)}let x=!1;if(!A){let L=_.getPaintProperty("line-dasharray");if(y=L!==void 0,x=y&&L.isDataDriven,y&&!x){let U=L.getValue(i),F=_.getDashKey(U,_.getLayoutValue("line-cap",i));E=l.getMosaicItemPosition(F)}}let O=1/s,b=a===w.HITTEST,I=this._programOptions;I.id=b,I.pattern=A,I.sdf=y;let T=g.getMaterialProgram(n,p,I);if(d&&v!=null&&!T.compiled)return void v();if(n.useProgram(T),T.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),T.setUniformMatrix3fv("u_displayMat3",C===te.VIEWPORT?o.displayMat3:o.displayViewMat3),T.setUniform2fv("u_lineTranslation",m),T.setUniform1f("u_depth",_.z),T.setUniform1f("u_antialiasing",O),b){let L=ee(c+1);T.setUniform4fv("u_id",L)}if(E&&E!=null){let{page:L}=E,U=l.getPageSize(L);U!=null&&(l.bind(n,M.LINEAR,L,G),T.setUniform2fv("u_mosaicSize",U),T.setUniform1i("u_texture",G))}let P=-1;for(let L of t){if(!L.layerData.has(c))continue;L.key.level!==P&&(P=L.key.level,p.setDataUniforms(T,i,_,P,l));let U=2**(i-P)/s;T.setUniform1f("u_zoomFactor",U);let F=L.layerData.get(c);if(!F.lineIndexCount)continue;F.prepareForRendering(n);let ne=F.vao;if(ne!=null){if(n.bindVAO(ne),T.setUniformMatrix3fv("u_dvsMat3",L.transforms.dvs),n.setStencilFunction(N.EQUAL,L.stencilRef,255),D||x){let ce=F.patternMap;if(!ce)continue;for(let[De,V]of ce){let ye=l.getPageSize(De);ye!=null&&(l.bind(n,M.LINEAR,De,G),T.setUniform2fv("u_mosaicSize",ye),T.setUniform1i("u_texture",G),n.drawElements(S.TRIANGLES,V[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*V[0]))}}else n.drawElements(S.TRIANGLES,F.lineIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*F.lineIndexStart);L.triangleCount+=F.lineIndexCount/3}}}};var Bn=1/65536,it=class extends z{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Zt()}dispose(){}drawMany(e,t){let{drawPhase:n,styleLayerUID:i}=e,o=e.styleLayer,a;n===w.HITTEST&&(a=ee(i+1)),this._drawIcons(e,o,t,a),this._drawText(e,o,t,a)}_drawIcons(e,t,n,i){let{context:o,displayLevel:a,drawPhase:r,painter:s,spriteMosaic:l,state:c,styleLayerUID:v,requestRender:d,allowDelayedRender:_}=e,p=t.iconMaterial,g=s.vectorTilesMaterialManager,m,C=!1;for(let P of n)if(P.layerData.has(v)&&(m=P.layerData.get(v),m.iconPerPageElementsMap.size>0)){C=!0;break}if(!C)return;let h=t.getPaintValue("icon-translate",a),A=t.getPaintValue("icon-translate-anchor",a),D=t.getLayoutValue("icon-rotation-alignment",a);D===$.AUTO&&(D=t.getLayoutValue("symbol-placement",a)===ht.POINT?$.VIEWPORT:$.MAP);let E=D===$.MAP,y=t.getLayoutValue("icon-keep-upright",a)&&E,x=m.isIconSDF,O=r===w.HITTEST,b=this._iconProgramOptions;b.id=O,b.sdf=x;let I=g.getMaterialProgram(o,p,b);if(_&&d!=null&&!I.compiled)return void d();o.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",D===$.MAP?c.displayViewMat3:c.displayMat3),I.setUniformMatrix3fv("u_displayMat3",A===te.VIEWPORT?c.displayMat3:c.displayViewMat3),I.setUniform2fv("u_iconTranslation",h),I.setUniform1f("u_depth",t.z),I.setUniform1f("u_mapRotation",gt(c.rotation)),I.setUniform1f("u_keepUpright",y?1:0),I.setUniform1f("u_level",10*a),I.setUniform1i("u_texture",G),I.setUniform1f("u_fadeDuration",200/1e3),O&&I.setUniform4fv("u_id",i);let T=-1;for(let P of n){if(!P.layerData.has(v)||(P.key.level!==T&&(T=P.key.level,p.setDataUniforms(I,a,t,T,l)),m=P.layerData.get(v),m.iconPerPageElementsMap.size===0))continue;m.prepareForRendering(o),m.updateOpacityInfo();let L=m.iconVAO;if(L!=null){o.bindVAO(L),I.setUniformMatrix3fv("u_dvsMat3",P.transforms.dvs),I.setUniform1f("u_time",(performance.now()-m.lastOpacityUpdate)/1e3);for(let[U,F]of m.iconPerPageElementsMap)this._renderIconRange(e,I,F,U,P)}}}_renderIconRange(e,t,n,i,o){let{context:a,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(i)/4,this._spritesTextureSize[1]=r.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(a,M.LINEAR,i,G),this._setStencilState(e,o),a.drawElements(S.TRIANGLES,n[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),o.triangleCount+=n[1]/3}_drawText(e,t,n,i){let{context:o,displayLevel:a,drawPhase:r,glyphMosaic:s,painter:l,pixelRatio:c,spriteMosaic:v,state:d,styleLayerUID:_,requestRender:p,allowDelayedRender:g}=e,m=t.textMaterial,C=l.vectorTilesMaterialManager,h,A=!1;for(let J of n)if(J.layerData.has(_)&&(h=J.layerData.get(_),h.glyphPerPageElementsMap.size>0)){A=!0;break}if(!A)return;let D=t.getPaintProperty("text-opacity");if(D&&!D.isDataDriven&&D.getValue(a)===0)return;let E=t.getPaintProperty("text-color"),y=!E||E.isDataDriven||E.getValue(a)[3]>0,x=t.getPaintProperty("text-halo-width"),O=t.getPaintProperty("text-halo-color"),b=(!x||x.isDataDriven||x.getValue(a)>0)&&(!O||O.isDataDriven||O.getValue(a)[3]>0);if(!y&&!b)return;let I=24/8,T=t.getLayoutValue("text-rotation-alignment",a);T===$.AUTO&&(T=t.getLayoutValue("symbol-placement",a)===ht.POINT?$.VIEWPORT:$.MAP);let P=T===$.MAP,L=t.getLayoutValue("text-keep-upright",a)&&P,U=r===w.HITTEST,F=.8*I/c;this._glyphTextureSize||(this._glyphTextureSize=qt(s.width/4,s.height/4));let ne=t.getPaintValue("text-translate",a),ce=t.getPaintValue("text-translate-anchor",a),De=this._sdfProgramOptions;De.id=U;let V=C.getMaterialProgram(o,m,De);if(g&&p!=null&&!V.compiled)return void p();o.useProgram(V),V.setUniformMatrix3fv("u_displayViewMat3",T===$.MAP?d.displayViewMat3:d.displayMat3),V.setUniformMatrix3fv("u_displayMat3",ce===te.VIEWPORT?d.displayMat3:d.displayViewMat3),V.setUniform2fv("u_textTranslation",ne),V.setUniform1f("u_depth",t.z+Bn),V.setUniform2fv("u_mosaicSize",this._glyphTextureSize),V.setUniform1f("u_mapRotation",gt(d.rotation)),V.setUniform1f("u_keepUpright",L?1:0),V.setUniform1f("u_level",10*a),V.setUniform1i("u_texture",pt),V.setUniform1f("u_antialiasingWidth",F),V.setUniform1f("u_fadeDuration",200/1e3),U&&V.setUniform4fv("u_id",i);let ye=-1;for(let J of n){if(!J.layerData.has(_)||(J.key.level!==ye&&(ye=J.key.level,m.setDataUniforms(V,a,t,ye,v)),h=J.layerData.get(_),h.glyphPerPageElementsMap.size===0))continue;h.prepareForRendering(o),h.updateOpacityInfo();let bt=h.textVAO;if(bt==null)continue;o.bindVAO(bt),V.setUniformMatrix3fv("u_dvsMat3",J.transforms.dvs),this._setStencilState(e,J);let xn=(performance.now()-h.lastOpacityUpdate)/1e3;V.setUniform1f("u_time",xn),h.glyphPerPageElementsMap.forEach((Sn,yn)=>{this._renderGlyphRange(o,Sn,yn,s,V,b,y,J)})}}_renderGlyphRange(e,t,n,i,o,a,r,s){i.bind(e,M.LINEAR,n,pt),a&&(o.setUniform1f("u_halo",1),e.drawElements(S.TRIANGLES,t[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3),r&&(o.setUniform1f("u_halo",0),e.drawElements(S.TRIANGLES,t[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3)}_setStencilState(e,t){let{context:n,is3D:i,stencilSymbols:o}=e;if(n.setStencilTestEnabled(!0),o)return n.setStencilWriteMask(255),void n.setStencilFunction(N.ALWAYS,t.stencilRef,255);n.setStencilWriteMask(0),i?n.setStencilFunction(N.EQUAL,t.stencilRef,255):n.setStencilFunction(N.GREATER,255,255)}};var Gn=f=>k(f.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:u.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:u.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:u.SHORT},{location:8,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT}]}),at=class extends Q{dispose(){}getGeometryType(){return H.LABEL}supportsSymbology(e){return!0}drawGeometry(e,t,n,i){let{context:o,painter:a,state:r,rendererInfo:s,requestRender:l,allowDelayedRender:c}=e,v=kt.load(n.materialKey),d=v.mapAligned?1:0;if(!d&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return;let{bufferLayouts:_,attributes:p}=Gn(v),g=a.materialManager.getMaterialProgram(e,v,"materials/label",p,i);if(c&&l!=null&&!g.compiled)return void l();e.context.setStencilFunction(N.EQUAL,0,255),o.useProgram(g),this._setSharedUniforms(g,e,t),a.textureManager.bindTextures(o,g,v);let m=d===1?r.displayViewMat3:r.displayMat3;this._setSizeVVUniforms(v,g,s,t),g.setUniform1f("u_mapRotation",Math.floor(r.rotation/360*254)),g.setUniform1f("u_mapAligned",d),g.setUniformMatrix3fv("u_displayMat3",m),g.setUniform1f("u_opacity",1),g.setUniform2fv("u_screenSize",e.state.size);let C=n.target.getVAO(o,_,p),h=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;o.bindVAO(C),g.setUniform1f("u_isHaloPass",0),g.setUniform1f("u_isBackgroundPass",1),o.drawElements(S.TRIANGLES,n.indexCount,u.UNSIGNED_INT,h),g.setUniform1f("u_isHaloPass",1),g.setUniform1f("u_isBackgroundPass",0),o.drawElements(S.TRIANGLES,n.indexCount,u.UNSIGNED_INT,h),g.setUniform1f("u_isHaloPass",0),g.setUniform1f("u_isBackgroundPass",0),o.drawElements(S.TRIANGLES,n.indexCount,u.UNSIGNED_INT,h),o.setStencilTestEnabled(!0),o.setBlendingEnabled(!0)}};var Hn=f=>k(f.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:u.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:u.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:u.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:u.BYTE},{location:7,name:"a_aux",count:2,type:u.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]}),rt=class extends Q{dispose(){}getGeometryType(){return H.LINE}supportsSymbology(e){return!0}drawGeometry(e,t,n,i){let{context:o,painter:a,rendererInfo:r,displayLevel:s,passOptions:l,requestRender:c,allowDelayedRender:v}=e,d=Yt.load(n.materialKey),_=l!=null&&l.type==="hittest",p=Hn(d),g=S.TRIANGLES;_&&(p=this._getTriangleDesc(n.materialKey,p),g=S.POINTS);let{attributes:m,bufferLayouts:C}=p,h=a.materialManager.getMaterialProgram(e,d,"materials/line",m,i);if(v&&c!=null&&!h.compiled)return void c();let A=1/e.pixelRatio,D=0;o.useProgram(h),this._setSharedUniforms(h,e,t),d.textureBinding&&a.textureManager.bindTextures(o,h,d);let E=2**(s-t.key.level);h.setUniform1f("u_zoomFactor",E),h.setUniform1f("u_blur",D+A),h.setUniform1f("u_antialiasing",A),this._setSizeVVUniforms(d,h,r,t),this._setColorAndOpacityVVUniforms(d,h,r),o.setFaceCullingEnabled(!1);let y=n.target.getVAO(o,C,m,_),x=n.indexCount,O=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;_&&(x/=3,O/=3),o.bindVAO(y),o.drawElements(g,x,u.UNSIGNED_INT,O)}};var Yn=f=>k(f.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:u.BYTE},{location:6,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:u.SHORT},{location:8,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT}]}),lt=class extends Q{dispose(){}getGeometryType(){return H.TEXT}supportsSymbology(e){return!0}drawGeometry(e,t,n,i){let{context:o,painter:a,rendererInfo:r,state:s,passOptions:l,requestRender:c,allowDelayedRender:v}=e,d=Wt.load(n.materialKey),_=l!=null&&l.type==="hittest",{bufferLayouts:p,attributes:g}=Yn(d),m=a.materialManager.getMaterialProgram(e,d,"materials/text",g,i);if(v&&c!=null&&!m.compiled)return void c();o.useProgram(m);let C=S.TRIANGLES;_&&(C=S.POINTS),this._setSharedUniforms(m,e,t),a.textureManager.bindTextures(o,m,d),m.setUniformMatrix3fv("u_displayMat3",s.displayMat3),m.setUniformMatrix3fv("u_displayViewMat3",s.displayViewMat3),this._setSizeVVUniforms(d,m,r,t),this._setColorAndOpacityVVUniforms(d,m,r),this._setRotationVVUniforms(d,m,r);let h=n.target.getVAO(o,p,g),A=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;o.bindVAO(h),m.setUniform1f("u_isHaloPass",0),m.setUniform1f("u_isBackgroundPass",1),o.drawElements(C,n.indexCount,u.UNSIGNED_INT,A),m.setUniform1f("u_isHaloPass",1),m.setUniform1f("u_isBackgroundPass",0),o.drawElements(S.TRIANGLES,n.indexCount,u.UNSIGNED_INT,A),m.setUniform1f("u_isHaloPass",0),m.setUniform1f("u_isBackgroundPass",0),o.drawElements(C,n.indexCount,u.UNSIGNED_INT,A)}};var pn={marker:ue,line:rt,fill:Ae,text:lt,label:at,clip:Ze,stencil:Je,bitmap:Ge,overlay:qe,tileInfo:Qe,vtlBackground:et,vtlFill:nt,vtlLine:ot,vtlCircle:tt,vtlSymbol:it,dotDensity:Ke,heatmap:ke,pieChart:$e};var Wn=f=>{switch(f.BYTES_PER_ELEMENT){case 1:return u.UNSIGNED_BYTE;case 2:return u.UNSIGNED_SHORT;case 4:return u.UNSIGNED_INT;default:throw new X("Cannot get DataType of array")}},kn=(f,e,t,n)=>{let i=0;for(let o=1;o<t;o++){let a=f[2*(e+o-1)],r=f[2*(e+o-1)+1];i+=(f[2*(e+o)]-a)*(f[2*(e+o)+1]+r)}return n?i>0:i<0},gn=({coords:f,lengths:e},t)=>{let n=[];for(let i=0,o=0;i<e.length;o+=e[i],i+=1){let a=o,r=[];for(;i<e.length-1&&kn(f,o+e[i],e[i+1],t);i+=1,o+=e[i])r.push(o+e[i]-a);let s=f.slice(2*a,2*(o+e[i])),l=jt(s,r,2);for(let c of l)n.push(c+a)}return n},Se=class f{constructor(e,t,n,i=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=n,this.isMapSpace=i}static fromRect({x:e,y:t,width:n,height:i}){let o=e,a=t,r=o+n,s=a+i;return f.fromScreenExtent({xmin:o,ymin:a,xmax:r,ymax:s})}static fromPath(e){let t=Ct(new ft,e.path,!1,!1),n=t.coords,i=new Uint32Array(gn(t,!0)),o=new Uint32Array(n.length/2);for(let a=0;a<o.length;a++)o[a]=Y(Math.floor(n[2*a]),Math.floor(n[2*a+1]));return new f({geometry:o},i,S.TRIANGLES)}static fromGeometry(e,t){let n=t.geometry?.type;switch(n){case"polygon":return f.fromPolygon(e,t.geometry);case"extent":return f.fromMapExtent(e,t.geometry);default:return be.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new X("mapview-bad-type",`Unable to create a mesh from type ${n}`,t)),f.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){let n=It(new ft,t,!1,!1),i=n.coords,o=new Uint32Array(gn(n,!1)),a=new Uint32Array(i.length/2),r=dt(),s=dt();for(let l=0;l<a.length;l++)Dt(r,i[2*l],i[2*l+1]),e.toScreen(s,r),a[l]=Y(Math.floor(s[0]),Math.floor(s[1]));return new f({geometry:a},o,S.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:n,ymax:i}){let o={geometry:new Uint32Array([Y(e,n),Y(t,n),Y(e,i),Y(e,i),Y(t,n),Y(t,i)])},a=new Uint32Array([0,1,2,3,4,5]);return new f(o,a,S.TRIANGLES)}static fromMapExtent(e,t){let[n,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[o,a]=e.toScreen([0,0],[t.xmax,t.ymax]),r={geometry:new Uint32Array([Y(n,i),Y(o,i),Y(n,a),Y(n,a),Y(o,i),Y(o,a)])},s=new Uint32Array([0,1,2,3,4,5]);return new f(r,s,S.TRIANGLES)}destroy(){this._cache.indexBuffer!=null&&this._cache.indexBuffer.dispose();for(let e in this._cache.vertexBuffers)this._cache.vertexBuffers[e]!=null&&this._cache.vertexBuffers[e].dispose()}get elementType(){return Wn(this.indices)}getIndexBuffer(e,t=W.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=Z.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=W.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((n,i)=>Re(Te({},n),{[i]:Z.createVertex(e,t,this.vertices[i])}),{})),this._cache.vertexBuffers}};var st=f=>parseFloat(f)/100,ut=class f extends $t{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=Et(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new f(e,t)}_destroyGL(){this._cache.mesh!=null&&(this._cache.mesh.destroy(),this._cache.mesh=null),this._cache.vao!=null&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,n,i){let[o,a]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===o&&this._lastHeight===a||(this._lastWidth=o,this._lastHeight=a,this._destroyGL()),this._cache.vao==null){let r=this._createMesh(t,this._clip),s=r.getIndexBuffer(e),l=r.getVertexBuffers(e);this._cache.mesh=r,this._cache.vao=new K(e,n,i,l,s)}return this._cache.vao}_createTransforms(){return{dvs:Ve()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){let[n,i]=e.size,o=typeof t.left=="string"?st(t.left)*n:t.left,a=typeof t.right=="string"?st(t.right)*n:t.right,r=typeof t.top=="string"?st(t.top)*i:t.top,s=typeof t.bottom=="string"?st(t.bottom)*i:t.bottom,l=o,c=r;return{x:l,y:c,width:Math.max(n-a-l,0),height:Math.max(i-s-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return Se.fromRect(this._createScreenRect(e,t));case"path":return Se.fromPath(t);case"geometry":return Se.fromGeometry(e,t);default:return be.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new X("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),Se.fromRect({x:0,y:0,width:1,height:1})}}};var hn=class extends Jt{set clips(e){super.clips=e,this._updateClippingInfo(e)}renderChildren(e){this._renderPasses==null&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(let t of this._renderPasses)try{t.render(e)}catch{}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[pn.clip],target:()=>this._clippingInfos,drawPhase:w.MAP|w.LABEL|w.LABEL_ALPHA|w.DEBUG|w.HIGHLIGHT})]}_updateClippingInfo(e){this._clippingInfos!=null&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),e!=null&&e.length&&(this._clippingInfos=e.items.map(t=>ut.fromClipArea(this.stage,t))),this.requestRender()}};export{Ie as a,z as b,Ce as c,j as d,Yo as e,Ye as f,yi as g,Ti as h,_n as i,Qe as j,Je as k,pn as l,hn as m};
