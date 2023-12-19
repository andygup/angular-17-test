import{a as ii}from"./chunk-IPNDO5RF.js";import{a as Ze}from"./chunk-AC55GQHL.js";import{a as ei,c as y}from"./chunk-IOMUCP7J.js";import{b as Ke,d as ti}from"./chunk-5ZJSZISC.js";import{a as Ye}from"./chunk-6XFWNJFJ.js";import{i as q,j as W}from"./chunk-Z7J4BCLI.js";import{a as qe}from"./chunk-N77PCW3L.js";import{a as He}from"./chunk-G3LBVS5W.js";import{c as We}from"./chunk-HOBRG36Z.js";import{c as $e}from"./chunk-ICBFZ75C.js";import{b as Wt}from"./chunk-Y5K4QJZR.js";import{d as Ge,e as Ue}from"./chunk-5WNLDCIP.js";import{a as Ne}from"./chunk-N3KNLXBG.js";import{A as Ve,q as $t,r as Re,s as Ht,t as Fe,u as Ae,v as Ee,w as ke,x as st,y as qt,z as Be}from"./chunk-EKY6QR7N.js";import{a as ze}from"./chunk-N57AFEUK.js";import{d as Oe}from"./chunk-JV7BL2Y3.js";import{a as b}from"./chunk-ZOOQQO74.js";import{b as Ie,f as at}from"./chunk-NKBP5F7I.js";import{h as R}from"./chunk-BZEC7TCW.js";import{H as De,I as Se,O as x,P as vt,ga as Ce,m as Gt,n as Ut}from"./chunk-GIHBFCPM.js";import{c as N,k as Ot,l as H,n as gt}from"./chunk-TKTKGUCU.js";import{a as Nt}from"./chunk-DTWRSK4M.js";import{d as Zt}from"./chunk-XFKEXQXK.js";import{a as B,f as Xe,i as Qe,p as je,t as ot,w as Je,x as Yt,y as Z}from"./chunk-6XBO2ULB.js";import{a as Pe}from"./chunk-DWZPFSNU.js";import{a as Le}from"./chunk-YEFC7M4L.js";import{a as O}from"./chunk-ZOTIMGGE.js";import{a as Me,b as k,c as Te}from"./chunk-OHIIU6WS.js";import{a as ye,d as xe,e as be}from"./chunk-AQ74ANSJ.js";import{b as I,d as Lt}from"./chunk-EJ3VIBAJ.js";import{a as _t,c as ge,k as ve,m as we,v as ft}from"./chunk-4LHUJTP5.js";import{b as pt}from"./chunk-CBOFHDSC.js";import{a as fe}from"./chunk-5ETRXDS4.js";import{i as E}from"./chunk-AHKJJNRE.js";import{$ as nt,L as _e}from"./chunk-XF4NUYV7.js";import{H as f,K as D}from"./chunk-WMYPRHRR.js";import{R as T}from"./chunk-IAMDMFZ7.js";import{a as p}from"./chunk-53MWZ23O.js";import{a as me,h as de,i as ue,l as ce,m as pe,p as Vt}from"./chunk-PT7S6WNL.js";import{b as it,c as Bt}from"./chunk-XDTDVCGP.js";import{j as he,p as ct,r as z}from"./chunk-465DRXTW.js";import{a as C}from"./chunk-AC62Z3FX.js";import{a as ut,g as v}from"./chunk-ESDYQQXO.js";var ni={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Si(s){let t=ni;return s.split("/").forEach(e=>{t&&(t=t[e])}),t}var Ci=new Ke(Si);function Zi(s){return Ci.resolveIncludes(s)}var Qi={shaders:{vertexShader:y("bitBlit/bitBlit.vert"),fragmentShader:y("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};var V=class{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new b(0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new b;let i=null,n=-1;for(let a=0;a<this._free.length;++a){let o=this._free[a];t<=o.width&&e<=o.height&&(i===null||o.y<=i.y&&o.x<=i.x)&&(i=o,n=a)}return i===null?new b:(this._free.splice(n,1),i.width<i.height?(i.width>t&&this._free.push(new b(i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new b(i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new b(i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new b(i.x,i.y+e,t,i.height-e))),new b(i.x,i.y,t,e))}release(t){for(let e=0;e<this._free.length;++e){let i=this._free[e];if(i.y===t.y&&i.height===t.height&&i.x+i.width===t.x)i.width+=t.width;else if(i.x===t.x&&i.width===t.width&&i.y+i.height===t.y)i.height+=t.height;else if(t.y===i.y&&t.height===i.height&&t.x+t.width===i.x)i.x=t.x,i.width+=t.width;else{if(t.x!==i.x||t.width!==i.width||t.y+t.height!==i.y)continue;i.y=t.y,i.height+=t.height}this._free.splice(e,1),this.release(t)}this._free.push(t)}};var zi=256,Ii=s=>Math.floor(s/256);function Pi(s){let t=new Set;for(let e of s)t.add(Ii(e));return t}function Ri(s,t,e){return s.has(t)||s.set(t,e().then(()=>{s.delete(t)}).catch(i=>{s.delete(t),ce(i)})),s.get(t)}var Fi=s=>({rect:new b(0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:s,sdf:!0}),wt=class{constructor(t,e,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this._preloadCache={},this.width=t,this.height=e,this._glyphSource=i,this._binPack=new V(t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyphs()}dispose(){this._binPack=null;for(let t of this._textures)t&&t.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyphs(){let t=[117,149,181,207,207,181,149,117],e=[],i=[];for(let o=0;o<t.length;o++){let r=t[o];for(let l=0;l<11;l++){let h=o>=3&&o<5&&l>=3&&l<8?255:0;e.push(r),i.push(h)}}let n={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)},a={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(i)};this._recordGlyph(n),this._recordGlyph(a)}getGlyphItems(t,e,i){return v(this,null,function*(){let n=this._getGlyphCache(t);return yield this._fetchRanges(t,e,i),e.map(a=>this._getMosaicItem(n,t,a))})}bind(t,e,i,n){let a=this._getTexture(t,i);a.setSamplingMode(e),this._dirties[i]&&(a.setData(this._glyphData[i]),this._dirties[i]=!1),t.bindTexture(a,n)}preloadASCIIGlyphCache(t){let e=this._preloadCache[t];if(e!=null)return e;let i=this._glyphSource.preloadASCIIRange(t).then(()=>{let n=this._getGlyphCache(t);for(let a=0;a<256;a++)this._getMosaicItem(n,t,a)});return this._preloadCache[t]=i,i}_getGlyphCache(t){return this._glyphCache[t]||(this._glyphCache[t]={}),this._glyphCache[t]}_getTexture(t,e){if(!this._textures[e]){let i=new q;i.pixelFormat=gt.ALPHA,i.wrapMode=H.CLAMP_TO_EDGE,i.width=this.width,i.height=this.height,this._textures[e]=new W(t,i,new Uint8Array(this.width*this.height))}return this._textures[e]}_invalidate(){this._dirties[this._currentPage]=!0}_fetchRanges(t,e,i){return v(this,null,function*(){let n=Pi(e),a=[];n.forEach(o=>{a.push(this._fetchRange(t,o,i))}),yield Promise.all(a)})}_fetchRange(t,e,i){return v(this,null,function*(){if(e>zi)return;let n=t+e;return Ri(this._rangePromises,n,()=>this._glyphSource.getRange(t,e,i))})}_getMosaicItem(t,e,i){if(!t[i]){let n=this._glyphSource.getGlyph(e,i);if(!n?.metrics)return Fi(i);let a=this._recordGlyph(n),o=this._currentPage,r=n.metrics;t[i]={rect:a,page:o,metrics:r,code:i,sdf:!0},this._invalidate()}return t[i]}_recordGlyph(t){let e=t.metrics,i;if(e.width===0)i=new b(0,0,0,0);else{let a=e.width+6,o=e.height+2*3;i=this._binPack.allocate(a,o),i.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyphs(),this._binPack=new V(this.width-4,this.height-4),i=this._binPack.allocate(a,o));let r=this._glyphData[this._currentPage],l=t.bitmap,h,m;if(l)for(let c=0;c<o;c++){h=a*c,m=this.width*(i.y+c)+i.x;for(let d=0;d<a;d++)r[m+d]=l[h+d]}C("esri-glyph-debug")&&this._showDebugPage(r)}return i}_showDebugPage(t){let e=document.createElement("canvas"),i=e.getContext("2d"),n=new ImageData(this.width,this.height),a=n.data;e.width=this.width,e.height=this.height,e.style.border="1px solid black";for(let o=0;o<t.length;++o)a[4*o]=t[o],a[4*o+1]=0,a[4*o+2]=0,a[4*o+3]=255;i.putImageData(n,0,0),document.body.appendChild(e)}};var yt=class{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{let e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{let i=e.getMessage(),n,a,o,r,l,h,m;for(;i.next();)switch(i.tag()){case 1:n=i.getUInt32();break;case 2:a=i.getBytes();break;case 3:o=i.getUInt32();break;case 4:r=i.getUInt32();break;case 5:l=i.getSInt32();break;case 6:h=i.getSInt32();break;case 7:m=i.getUInt32();break;default:i.skip()}i.release(),n&&(this._metrics[n]={width:o,height:r,left:l,top:h,advance:m},this._bitmaps[n]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}},Xt=class{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}},xt=class{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(t,e,i){let n=this._getFontStack(t);if(n.getRange(e))return Promise.resolve();let a=256*e,o=a+255,r=this._baseURL.replace("{fontstack}",t).replace("{range}",a+"-"+o);return nt(r,ut({responseType:"array-buffer"},i)).then(l=>{n.addRange(e,new yt(new Nt(new Uint8Array(l.data),new DataView(l.data))))})}preloadASCIIRange(t){return v(this,null,function*(){let e=this._getFontStack(t),i=0,n=255,a=this._baseURL.replace("{fontstack}",t).replace("{range}",i+"-"+n),o=yield nt(a,{responseType:"array-buffer"}),r=new yt(new Nt(new Uint8Array(o.data),new DataView(o.data)));for(let l=i;l<=n;l++)e.getRange(l)||e.addRange(l,r)})}getGlyph(t,e){let i=this._getFontStack(t);if(!i)return;let n=Math.floor(e/256),a=i.getRange(n);return a?{metrics:a.getMetrics(e),bitmap:a.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new Xt),e}};var rt=1e20,bt=class{constructor(t){this._svg=null,this.size=t;let e=document.createElement("canvas");e.width=e.height=t,this._context=e.getContext("2d",{willReadFrequently:!1}),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(t,e,i,n=31){this._initSVG();let a=this.createSVGString(t,e);return new Promise((o,r)=>{let l=new Image;l.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(a),l.onload=()=>{l.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(l,0,0,this.size,this.size);let m=this._context.getImageData(0,0,this.size,this.size),c=new Uint8Array(this.size*this.size*4);for(let d=0;d<this.size*this.size;d++){let u=m.data[4*d+3]/255;this._gridOuter[d]=u===1?0:u===0?rt:Math.max(0,.5-u)**2,this._gridInner[d]=u===1?rt:u===0?0:Math.max(0,u-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let d=0;d<this.size*this.size;d++){let u=this._gridOuter[d]-this._gridInner[d];Ne(.5-u/(2*n),c,4*d)}o(c)};let h=i?.signal;h&&pe(h,()=>r(de()))})}_initSVG(){if(!this._svg){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}return this._svg}createSVGString(t,e){let i=this._initSVG(),n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",t),i.appendChild(n);let a=n.getBBox(),o=a.width/a.height,r=this.size/2,l,h,m;if(o>1){l=r/a.width;let _=r*(1/o);h=this.size/4,m=r-_/2}else l=r/a.height,h=r-r*o/2,m=this.size/4;let c=-a.x*l+h,d=-a.y*l+m;n.setAttribute("style",`transform: matrix(${l}, 0, 0, ${l}, ${c}, ${d})`),n.setAttribute("stroke-width",""+.5/l);let u=`<svg style="fill:${e?"red":"none"}; stroke:${e?"none":"red"}" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${i.innerHTML}</svg>`;return i.removeChild(n),u}_edt(t,e,i){let n=this._f,a=this._d,o=this._v,r=this._z;for(let l=0;l<e;l++){for(let h=0;h<i;h++)n[h]=t[h*e+l];this._edt1d(n,a,o,r,i);for(let h=0;h<i;h++)t[h*e+l]=a[h]}for(let l=0;l<i;l++){for(let h=0;h<e;h++)n[h]=t[l*e+h];this._edt1d(n,a,o,r,e);for(let h=0;h<e;h++)t[l*e+h]=Math.sqrt(a[h])}}_edt1d(t,e,i,n,a){i[0]=0,n[0]=-rt,n[1]=+rt;for(let o=1,r=0;o<a;o++){let l=(t[o]+o*o-(t[i[r]]+i[r]*i[r]))/(2*o-2*i[r]);for(;l<=n[r];)r--,l=(t[o]+o*o-(t[i[r]]+i[r]*i[r]))/(2*o-2*i[r]);r++,i[r]=o,n[r]=l,n[r+1]=+rt}for(let o=0,r=0;o<a;o++){for(;n[r+1]<o;)r++;e[o]=(o-i[r])*(o-i[r])+t[i[r]]}}};function G(s){return s&&s.type==="static"}var Mt=class s{constructor(t,e,i=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(t<=0||e<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=e,i>0&&(this._maxItemSize=i),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new V(this._pageWidth,this._pageHeight);let n=Math.floor(this._pageWidth),a=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(n*a)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,n,a,o,r=1){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let l,h,m;if(G(i))[l,h,m]=this._allocateImage(e[0],e[1]);else{l=new b(0,0,e[0],e[1]),h=this._mosaicPages.length;let d=void 0;this._mosaicPages.push({mosaicsData:i,size:[e[0]+2*x,e[1]+2*x],dirty:!0,texture:d})}if(l.width<=0||l.height<=0)return null;let c={rect:l,width:e[0],height:e[1],sdf:a,simplePattern:o,pixelRatio:r,page:h};return this._mosaicRects.set(t,c),G(i)&&(C("esri-mosaic-debug")&&this._showDebugSprite(e,i.data),this._copy({rect:l,spriteSize:e,spriteData:i.data,page:h,pageSize:m,repeat:n,sdf:a})),c}hasItemsToProcess(){return this._spriteCopyQueue.length!==0}processNextItem(){let t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){let e={};for(let i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){let e=this.getSpriteItem(t),i=e?.rect;if(!i)return null;i.width=e.width,i.height=e.height;let n=e.width,a=e.height,o=x,r=this._mosaicPages[e.page].size;return{size:[e.width,e.height],tl:[(i.x+o)/r[0],(i.y+o)/r[1]],br:[(i.x+o+n)/r[0],(i.y+o+a)/r[1]],page:e.page}}bind(t,e,i=0,n=0){let a=this._mosaicPages[i],o=a.mosaicsData,r=a.texture;r||(r=Ei(t,a.size),a.texture=r),r.setSamplingMode(e),G(o)?(t.bindTexture(r,n),a.dirty&&(r.setData(new Uint8Array(o.data.buffer)),r.generateMipmap(),C("esri-mosaic-debug")&&this._showDebugPage(i))):(o.data.bindFrame(t,r,n),r.generateMipmap()),a.dirty=!1}dispose(){this._binPack=null;for(let t of this._mosaicPages){let e=t.texture;e&&e.dispose();let i=t.mosaicsData;G(i)||i.data.destroy()}this._mosaicPages=null,this._mosaicRects.clear()}static _copyBits(t,e,i,n,a,o,r,l,h,m,c){let d=n*e+i,u=l*o+r;if(c){u-=o;for(let _=-1;_<=m;_++,d=((_+m)%m+n)*e+i,u+=o)for(let g=-1;g<=h;g++)a[u+g]=t[d+(g+h)%h]}else for(let _=0;_<m;_++){for(let g=0;g<h;g++)a[u+g]=t[d+g];d+=e,u+=o}}_copy(t){if(t.page>=this._mosaicPages.length)return;let e=this._mosaicPages[t.page],i=e.mosaicsData;if(!G(e.mosaicsData))throw new z("mapview-invalid-resource","unsuitable data type!");let n=t.spriteData,a=i.data;a&&n||console.error("Source or target images are uninitialized!"),s._copyBits(n,t.spriteSize[0],0,0,a,t.pageSize[0],t.rect.x+x,t.rect.y+x,t.spriteSize[0],t.spriteSize[1],t.repeat),e.dirty=!0}_allocateImage(t,e){t+=2*x,e+=2*x;let i=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<i){let a=2**Math.ceil(Wt(t)),o=2**Math.ceil(Wt(e)),r=new b(0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*o)},size:[a,o],dirty:!0,texture:void 0}),[r,this._mosaicPages.length-1,[a,o]]}let n=this._binPack.allocate(t,e);if(n.width<=0){let a=this._mosaicPages[this._currentPage];return!a.dirty&&G(a.mosaicsData)&&(a.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new V(this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[n,this._currentPage,[this._pageWidth,this._pageHeight]]}_showDebugSprite([t,e],i){let n=document.createElement("canvas");n.width=t,n.height=e,n.setAttribute("style",`position: absolute; top: ${4+204*Ai++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);let a=n.getContext("2d"),o=new ImageData(t,e);o.data.set(new Uint8Array(i.buffer)),a.putImageData(o,0,0),document.body.appendChild(n)}_showDebugPage(t){let e=this._mosaicPages[t],{size:[i,n],mosaicsData:a}=e;if(!G(a))return void console.error("Could not show sprite mosaic debug for non-static resource");let o=`mosaicDebugPage${t}`,r=document.getElementById(o)??document.createElement("canvas");r.id=o,r.width=i,r.height=n,r.setAttribute("style",`position: absolute; top: ${4+204*t}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);let l=r.getContext("2d"),h=new ImageData(i,n);h.data.set(new Uint8Array(a.data.buffer)),l.putImageData(h,0,0),document.body.appendChild(r)}},Ai=0;function Ei(s,t){let e=new q;return e.width=t[0],e.height=t[1],e.wrapMode=H.CLAMP_TO_EDGE,new W(s,e,null)}function ki(s){return s.frameDurations.reduce((t,e)=>t+e,0)}function Bi(s){let{width:t,height:e}=s,i=s.frameDurations.reverse(),n=a=>{let o=s.frameDurations.length-1-a;return s.getFrame(o)};return{frameCount:s.frameCount,duration:s.duration,frameDurations:i,getFrame:n,width:t,height:e}}function Vi(s,t){let{width:e,height:i,getFrame:n}=s,a=t/s.duration,o=s.frameDurations.map(r=>r*a);return{frameCount:s.frameCount,duration:s.duration,frameDurations:o,getFrame:n,width:e,height:i}}function Li(s,t){let{width:e,height:i,getFrame:n}=s,a=s.frameDurations.slice(),o=a.shift();return a.unshift(o+t),{frameCount:s.frameCount,duration:s.duration+t,frameDurations:a,getFrame:n,width:e,height:i}}function ai(s,t){let{width:e,height:i,getFrame:n}=s,a=s.frameDurations.slice(),o=a.pop();return a.push(o+t),{frameCount:s.frameCount,duration:s.duration+t,frameDurations:a,getFrame:n,width:e,height:i}}var jt=class{constructor(t,e,i,n){this._animation=t,this._repeatType=i,this._onFrameData=n,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let a=0;for(;e>a;)a+=this.timeToFrame,this.nextFrame();let o=this._animation.getFrame(this._currentFrame);this._onFrameData(o)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case R.None:this._currentFrame-=this._direction;break;case R.Loop:this._currentFrame=0;break;case R.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(this._currentFrame===-1)switch(this._repeatType){case R.None:this._currentFrame-=this._direction;break;case R.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case R.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];let t=this._animation.getFrame(this._currentFrame);this._onFrameData(t)}};function Oi(s,t,e,i){let n,{repeatType:a}=t;if(a==null&&(a=R.Loop),t.reverseAnimation===!0&&(s=Bi(s)),t.duration!=null&&(s=Vi(s,1e3*t.duration)),t.repeatDelay!=null){let o=1e3*t.repeatDelay;a===R.Loop?s=ai(s,o):a===R.Oscillate&&(s=Li(ai(s,o/2),o/2))}if(t.startTimeOffset!=null)n=1e3*t.startTimeOffset;else if(t.randomizeStartTime!=null){let o=Ue(e),r=82749913,l=t.randomizeStartSeed!=null?t.randomizeStartSeed:r,h=Ge(o,l);n=h*ki(s)}else n=0;return new jt(s,n,a,i)}function oi(s,t,e,i){let n=t.playAnimation==null||t.playAnimation,a=Oi(s,t,e,i),o,r=a.timeToFrame;function l(){o=n?setTimeout(()=>{a.nextFrame(),r=a.timeToFrame,l()},r):void 0}return l(),me(()=>n&&clearTimeout(o))}var Qt,si;function Ni(){return Qt??=document.createElement("canvas"),si??=Qt.getContext("2d"),{canvas:Qt,ctx:si}}function ri(s,t,e){let{canvas:i,ctx:n}=Ni();i.width=t,i.height=e;let a=[],o=s.frameDurations.length;for(let r=0;r<o;r++){let l=s.getFrame(r);n.clearRect(0,0,t,e),l instanceof ImageData?n.drawImage(We(l),0,0,t,e):n.drawImage(l,0,0,t,e),a.push(n.getImageData(0,0,t,e))}return{width:t,height:e,frameDurations:s.frameDurations,getFrame:r=>a[r],frameCount:s.frameCount,duration:s.duration}}var Tt=class{constructor(t,e,i,n){this._animation=t,this._frameData=null;let a=o=>{this._frameData=o,e.requestRender()};this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=oi(this._animation,i,n,a)}destroy(){this._playHandle.remove()}bindFrame(t,e,i){t.bindTexture(e,i);let n=this._frameData;if(n==null)return;let a="width"in n?n.width:n.codedWidth,o="height"in n?n.height:n.codedHeight;e.updateData(0,x,x,a,o,n),this._frameData=null}};function li(s){switch(s.type){case"esriSMS":return`${s.style}.${s.path}`;case"esriSLS":return`${s.style}.${s.cap}`;case"esriSFS":return`${s.style}`;case"esriPFS":case"esriPMS":return s.imageData?`${s.imageData}${s.width}${s.height}`:`${s.url}${s.width}${s.height}`;default:return"mosaicHash"in s?s.mosaicHash:JSON.stringify(s)}}var hi=Le(),mi="arial-unicode-ms-regular",pi=ct.getLogger("esri.views.2d.engine.webgl.TextureManager");function Kt(s){let t=Math.round(ye(s)*window.devicePixelRatio);return t*(t>=128?2:4)}function di(s,t){return Math.min(s,Kt(t))}function ui(s,t){if(!s||!t)return{width:0,height:0};let e=s/t;if(e>1){let n=Kt(s);return{width:n,height:n/e}}let i=Kt(t);return{width:i*e,height:i}}var Jt=(s,t,e)=>pi.error(new z(s,t,e)),te=class s{static fromMosaic(t,e){return new s(t,e.page,e.sdf)}constructor(t,e,i){this.mosaicType=t,this.page=e,this.sdf=i}},ci=class{constructor(t,e,i){this._requestRender=t,this.resourceManager=e,this._allowNonPowerOfTwo=i,this._invalidFontsMap=new Map,this._sdfConverter=new bt(vt),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new Pe({concurrency:10,process:(n,a)=>v(this,null,function*(){ue(a);try{return yield nt(n,{responseType:"image",signal:a})}catch(o){throw Vt(o)?o:new z("mapview-invalid-resource",`Could not fetch requested resource at ${n}`,o)}})}),this._spriteMosaic=new Mt(2048,2048,500),this._glyphSource=new xt(`${he.fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new wt(1024,1024,this._glyphSource),this._rasterizer=new Ye(e)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}rasterizeItem(t,e,i,n){return v(this,null,function*(){if(t==null)return Jt("mapview-null-resource","Unable to rasterize null resource"),null;switch(t.type){case"text":case"esriTS":{let a=yield this._rasterizeText(t,i,n);return a.forEach(o=>this._setTextureBinding(at.GLYPH,o)),{glyphMosaicItems:a}}default:{if(Ee(t))return Jt("mapview-invalid-type",`MapView does not support symbol type: ${t.type}`,t),null;let a=yield this._rasterizeSpriteSymbol(t,e,n);return $e(a)&&a&&this._setTextureBinding(at.SPRITE,a),{spriteMosaicItem:a}}}})}bindTextures(t,e,i,n=!1){if(i.textureBinding===0)return;let a=this._bindingInfos[i.textureBinding-1],o=a.page,r=n?Ot.LINEAR_MIPMAP_LINEAR:Ot.LINEAR;switch(a.mosaicType){case at.SPRITE:{let l=this.sprites.getWidth(o),h=this.sprites.getHeight(o),m=k(hi,l,h);return this._spriteMosaic.bind(t,r,o,Gt),e.setUniform1i("u_texture",Gt),void e.setUniform2fv("u_mosaicSize",m)}case at.GLYPH:{let l=this.glyphs.width,h=this.glyphs.height,m=k(hi,l,h);return this._glyphMosaic.bind(t,r,o,Ut),e.setUniform1i("u_texture",Ut),void e.setUniform2fv("u_mosaicSize",m)}default:pi.error("mapview-texture-manager",`Cannot handle unknown type ${a.mosaicType}`)}}_hashMosaic(t,e){return 1|t<<1|(e.sdf?1:0)<<2|e.page<<3}_setTextureBinding(t,e){let i=this._hashMosaic(t,e);if(!this._hashToBindingIndex.has(i)){let n=te.fromMosaic(t,e),a=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,a),this._bindingInfos.push(n)}e.textureBinding=this._hashToBindingIndex.get(i)}_rasterizeText(t,e,i){return v(this,null,function*(){let n,a;if("cim"in t){let l=t;n=l.fontName,a=l.text}else{let l=t;n=Oe(l.font),a=l.text}let o=this._invalidFontsMap.has(n),r=e||Be(ze(a)[0]);try{let l=o?mi:n;return C("esri-2d-stabilize-glyphs")&&(yield this._glyphMosaic.preloadASCIIGlyphCache(l)),yield this._glyphMosaic.getGlyphItems(l,r,i)}catch{return Jt("mapview-invalid-resource",`Couldn't find font ${n}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(n,!0),this._glyphMosaic.getGlyphItems(mi,r,i)}})}_rasterizeSpriteSymbol(t,e,i){return v(this,null,function*(){if(ke(t))return;let n=li(t);if(this._spriteMosaic.has(n))return this._spriteMosaic.getSpriteItem(n);if($t(t)||Re(t)&&!Ve(t))return this._handleAsyncResource(n,t,i);let a=Ce,o=this._rasterizer.rasterizeJSONResource(t,a);if(o){let{size:r,image:l,sdf:h,simplePattern:m,rasterizationScale:c}=o;return this._addItemToMosaic(n,r,{type:"static",data:l},st(t),h,m,c)}return new z("TextureManager","unrecognized or null rasterized image")})}_handleAsyncResource(t,e,i){return v(this,null,function*(){if(this._ongoingRasterizations.has(t))return this._ongoingRasterizations.get(t);let n;n=$t(e)?this._handleSVG(e,t,i):this._handleImage(e,t,i),this._ongoingRasterizations.set(t,n);try{yield n,this._ongoingRasterizations.delete(t)}catch{this._ongoingRasterizations.delete(t)}return n})}_handleSVG(t,e,i){return v(this,null,function*(){let n=[vt,vt],a=!("cim"in t)||t.cim.asFill,o=yield this._sdfConverter.draw(t.path,a,i);return this._addItemToMosaic(e,n,{type:"static",data:new Uint32Array(o.buffer)},!1,!0,!0)})}_handleGIFOrPNG(t,e,i){return v(this,null,function*(){let n=Ht(t);yield this.resourceManager.fetchResource(n,i);let a=this.resourceManager.getResource(n);if(a==null)return new z("mapview-invalid-resource",`Could not fetch requested resource at ${n}.`);let o=a.width,r=a.height;if(a instanceof HTMLImageElement){t.type==="esriPMS"&&(o=Math.round(di(a.width,qt(t))),r=Math.round(a.height*(o/a.width)));let c="cim"in t?t.cim.colorSubstitutions:void 0,{size:d,sdf:u,image:_}=this._rasterizer.rasterizeImageResource(o,r,a,c);return this._addItemToMosaic(e,d,{type:"static",data:_},st(t),u,!1)}this._allowNonPowerOfTwo||(o=Lt(a.width+2*x)-2*x,r=Lt(a.height+2*x)-2*x),o===a.width&&r===a.height||(a=ri(a,o,r));let l=t.animatedSymbolProperties||{},h=t.objectId,m=new Tt(a,this._requestRender,l,h);return this._addItemToMosaic(e,[m.width,m.height],{type:"animated",data:m},st(t),!1,!1)})}_handleImage(t,e,i){return v(this,null,function*(){if(Fe(t)||Ae(t))return this._handleGIFOrPNG(t,e,i);let n=Ht(t);try{let a,o=this.resourceManager.getResource(n);if(o!=null&&o instanceof HTMLImageElement)a=o;else{let{data:u}=yield this._imageRequestQueue.push(n,ut({},i));a=u}if(_e(n)){if("width"in t&&"height"in t){let{width:u,height:_}=ui(t.width,t.height);a.width=u,a.height=_}else if("cim"in t){let u=t.cim,{width:_,height:g}=ui(u.width??u.scaleX*u.size,u.size);a.width=_,a.height=g}}if(!a.width||!a.height)return null;let r=a.width,l=a.height;t.type==="esriPMS"&&(r=Math.round(di(a.width,qt(t))),l=Math.round(a.height*(r/a.width)));let h="cim"in t?t.cim.colorSubstitutions:void 0,{size:m,sdf:c,image:d}=this._rasterizer.rasterizeImageResource(r,l,a,h);return this._addItemToMosaic(e,m,{type:"static",data:d},st(t),c,!1)}catch(a){if(!Vt(a))return new z("mapview-invalid-resource",`Could not fetch requested resource at ${n}. ${a.message}`)}})}_addItemToMosaic(t,e,i,n,a,o,r){return this._spriteMosaic.addSpriteItem(t,e,i,n,a,o,r)}};var pa={shaders:{vertexShader:y("stencil/stencil.vert"),fragmentShader:y("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};var Gi=s=>s.replace("-","_").toUpperCase(),_i=s=>`#define ${Gi(s)}
`;function ee(s){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:_i(s)+y("blend/blend.vert"),fragmentShader:_i(s)+y("blend/blend.frag")}}}var fi=ct.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect"),gi=class{constructor(){this._size=[0,0]}dispose(t){this._backBufferTexture=Bt(this._backBufferTexture),this._quad=Bt(this._quad)}draw(t,e,i,n,a){let{context:o,drawPhase:r}=t;if(this._setupShader(o),n&&n!=="normal"&&r!==Ie.LABEL)return void this._drawBlended(t,e,i,n,a);let l=ee("normal"),h=o.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!h)return void fi.error(new z("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));o.useProgram(h),e.setSamplingMode(i),o.bindTexture(e,0),h.setUniform1i("u_layerTexture",0),h.setUniform1f("u_opacity",a),o.setBlendingEnabled(!0),o.setBlendFunction(N.ONE,N.ONE_MINUS_SRC_ALPHA);let m=this._quad;m.draw(),m.unbind(),h.dispose()}_drawBlended(t,e,i,n,a){let{context:o,state:r,pixelRatio:l,inFadeTransition:h}=t,{size:m}=r,c=o.getBoundFramebufferObject(),d,u;c!=null?(d=c.width,u=c.height):(d=Math.round(l*m[0]),u=Math.round(l*m[1])),this._createOrResizeTexture(t,d,u);let _=this._backBufferTexture;c.copyToTexture(0,0,d,u,0,0,_),o.setStencilTestEnabled(!1),o.setStencilWriteMask(0),o.setBlendingEnabled(!0),o.setDepthTestEnabled(!1),o.setDepthWriteEnabled(!1);let g=ee(n),M=o.programCache.acquire(g.shaders.vertexShader,g.shaders.fragmentShader,g.attributes);if(!M)return void fi.error(new z("mapview-BlendEffect",`Error creating shader program for blend mode ${n}`));o.useProgram(M),_.setSamplingMode(i),o.bindTexture(_,0),M.setUniform1i("u_backbufferTexture",0),e.setSamplingMode(i),o.bindTexture(e,1),M.setUniform1i("u_layerTexture",1),M.setUniform1f("u_opacity",a),M.setUniform1f("u_inFadeOpacity",h?1:0),o.setBlendFunction(N.ONE,N.ZERO);let w=this._quad;w.draw(),w.unbind(),M.dispose(),o.setBlendFunction(N.ONE,N.ONE_MINUS_SRC_ALPHA)}_setupShader(t){this._quad||(this._quad=new ei(t,[-1,-1,1,-1,-1,1,1,1]))}_createOrResizeTexture(t,e,i){let{context:n}=t;if(this._backBufferTexture===null||e!==this._size[0]||i!==this._size[1]){if(this._backBufferTexture)this._backBufferTexture.resize(e,i);else{let a=new q;a.internalFormat=gt.RGBA,a.wrapMode=H.CLAMP_TO_EDGE,a.width=e,a.height=i,this._backBufferTexture=new W(n,a)}this._size[0]=e,this._size[1]=i}}};var Ia={shaders:{vertexShader:y("highlight/textured.vert"),fragmentShader:y("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Pa={shaders:{vertexShader:y("highlight/textured.vert"),fragmentShader:y("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};var P=C("esri-2d-profiler"),vi=class{constructor(t,e){if(this._events=new fe,this._entries=new Map,this._timings=new He(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!P)return;this._ext=ii(t.gl,{}),this._debugOutput=e;let i=t.gl;if(!this.enableCommandLogging)return;let n;for(n in i)if(typeof i[n]=="function"){let a=i[n],o=n.includes("draw");i[n]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:n,args:r,isDrawCommand:o}),this._currentSummary&&(this._currentSummary.commands++,o&&this._currentSummary.drawCommands++),a.apply(i,r))}}get enableCommandLogging(){return!(typeof P=="object"&&P.disableCommands)}recordContainerStart(t){P&&(this._currentContainer=t)}recordContainerEnd(){P&&(this._currentContainer=null)}recordPassStart(t){P&&(this._currentPass=t,this._initSummary())}recordPassEnd(){P&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){P&&(this._currentBrush=t)}recordBrushEnd(){P&&(this._currentBrush=null)}recordStart(t){if(P&&this._ext!=null){if(this._entries.has(t)){let i=this._entries.get(t),n=this._ext.resultAvailable(i.query),a=this._ext.disjoint();if(n&&!a){let o=this._ext.getResult(i.query)/1e6,r=0;if(this._timings.enqueue(o)!=null){let m=this._timings.entries,c=m.length,d=0;for(let u of m)d+=u;r=d/c}let l=o.toFixed(2),h=r?r.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${l} ms (${h} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${l} ms (${h} last 10 avg)`),this._debugOutput.innerHTML=`${l} (${h})`}for(let o of i.handles)o.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}let e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){P&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};var Dt=2,F=1,Y=0,X=1,Q=2,St=class{constructor(t,e,i){this._debugMap=new Map,this._width=t*i,this._height=e*i,this._pixelRatio=i;let n=Math.ceil(this._width/F),a=Math.ceil(this._height/F);this._cols=n,this._rows=a,this._cells=qe.create(n*a)}insertMetrics(t){let e=this._hasCollision(t);return e===Y&&this._markMetrics(t),e}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,n){let a=t-i/2,o=e-n/2,r=a+i,l=o+n;if(r<0||l<0||a>this._width||o>this._height)return X;let h=I(Math.floor(a/F),0,this._cols),m=I(Math.floor(o/F),0,this._rows),c=I(Math.ceil(r/F),0,this._cols),d=I(Math.ceil(l/F),0,this._rows);for(let u=m;u<=d;u++)for(let _=h;_<=c;_++){let g=this.getCellId(_,u);if(this.has(g))return Q}return Y}_mark(t,e,i,n,a){let o=t-i/2,r=e-n/2,l=o+i,h=r+n,m=I(Math.floor(o/F),0,this._cols),c=I(Math.floor(r/F),0,this._rows),d=I(Math.ceil(l/F),0,this._cols),u=I(Math.ceil(h/F),0,this._rows);for(let _=c;_<=u;_++)for(let g=m;g<=d;g++){let M=this.getCellId(g,_);this._debugMap.set(M,a),this.set(M)}return!1}_hasCollision(t){let e=t.id,i=0,n=0;t.save();do{let a=t.boundsCount;i+=a;for(let o=0;o<a;o++){let r=t.boundsComputedAnchorX(o),l=t.boundsComputedAnchorY(o),h=(t.boundsWidth(o)+Dt)*this._pixelRatio,m=(t.boundsHeight(o)+Dt)*this._pixelRatio;switch(this._collide(r,l,h,m)){case Q:return Q;case X:n++}}}while(t.peekId()===e&&t.next());return t.restore(),i===n?X:Y}_markMetrics(t){let e=t.id;t.save();do{let i=t.boundsCount;for(let n=0;n<i;n++){let a=t.boundsComputedAnchorX(n),o=t.boundsComputedAnchorY(n),r=(t.boundsWidth(n)+Dt)*this._pixelRatio,l=(t.boundsHeight(n)+Dt)*this._pixelRatio;this._mark(a,o,r,l,t.id)}}while(t.peekId()===e&&t.next());t.restore()}};var ie=254,Ct=255,lt=0;function j(s,t){let e=[];s.forEachTile(i=>e.push(i)),e.sort((i,n)=>i.instanceId-n.instanceId),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics.getCursor())})}var zt=class{run(t,e,i){let n=[];for(let a=t.length-1;a>=0;a--){let o=t[a];o.labelingCollisionInfos&&n.push(...o.labelingCollisionInfos)}this._transformMetrics(n),this._runCollision(n,e,i)}_runCollision(t,e,i){let[n,a]=e.state.size,o=new St(n,a,e.pixelRatio);for(let{tileRenderer:r,deconflictionEnabled:l,visible:h}of t){let m=r.featuresView.attributeView;l?h?(this._prepare(r),this._collideVisible(o,r,i),this._collideInvisible(o,r)):j(r,(c,d)=>{for(;d.nextId();)m.setLabelMinZoom(d.id,Ct)}):j(r,(c,d)=>{for(;d.nextId();)m.setLabelMinZoom(d.id,lt),h&&o.insertMetrics(d)})}}_isFiltered(t,e,i){let n=e.getFilterFlags(t),a=!i.hasFilter||!!(n&De),o=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(n&Se);return!(a&&o)}_prepare(t){let e=t.featuresView.attributeView,i=new Set;j(t,(n,a)=>{for(;a.nextId();)if(!i.has(a.id)){if(i.add(a.id),this._isFiltered(a.id,e,t.layerView)){e.setLabelMinZoom(a.id,ie);continue}e.getLabelMinZoom(a.id)!==lt?e.setLabelMinZoom(a.id,Ct):e.setLabelMinZoom(a.id,lt)}})}_collideVisible(t,e,i){let n=e.featuresView.attributeView,a=new Set;j(e,(o,r)=>{for(;r.nextId();)if(!a.has(r.id))if(o.key.level===i){if(n.getLabelMinZoom(r.id)===0)switch(t.insertMetrics(r)){case X:break;case Q:n.setLabelMinZoom(r.id,ie),a.add(r.id);break;case Y:n.setLabelMinZoom(r.id,lt),a.add(r.id)}}else n.setLabelMinZoom(r.id,ie)})}_collideInvisible(t,e){let i=e.featuresView.attributeView,n=new Set;j(e,(a,o)=>{for(;o.nextId();)if(!n.has(o.id)&&i.getLabelMinZoom(o.id)===Ct)switch(t.insertMetrics(o)){case X:break;case Q:i.setLabelMinZoom(o.id,Ct),n.add(o.id);break;case Y:i.setLabelMinZoom(o.id,lt),n.add(o.id)}})}_transformMetrics(t){for(let{tileRenderer:e,geometryType:i,vvEvaluators:n}of t)j(e,(a,o)=>{let r=e.featuresView.attributeView,l=a.transforms.labelMat2d;l[4]=Math.round(l[4]),l[5]=Math.round(l[5]);let h=i==="polyline";for(;o.next();){let m=o.boundsCount,c=o.anchorX,d=o.anchorY,u=o.size,_=n[0];if(_!=null){let w=_(r.getVVSize(o.id));u=isNaN(w)||w==null||w===1/0?u:w}let g=o.directionX*(u/2),M=o.directionY*(u/2);for(let w=0;w<m;w++){let Et=c,kt=o.anchorY;if(h){let U=Et+o.boundsX(w)+g,$=kt+o.boundsY(w)+M;U=l[0]*U+l[2]*$+l[4],$=l[1]*U+l[3]*$+l[5],o.setBoundsComputedAnchorX(w,Math.floor(U)),o.setBoundsComputedAnchorY(w,Math.floor($))}else{Et=l[0]*c+l[2]*d+l[4],kt=l[1]*c+l[3]*d+l[5];let U=Et+o.boundsX(w)+g,$=kt+o.boundsY(w)+M;o.setBoundsComputedAnchorX(w,U),o.setBoundsComputedAnchorY(w,$)}}}})}};var Ui=32,ht=class extends D{constructor(s){super(s),this.collisionEngine=new zt,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null,this._applyVisibilityPass=Ze(t=>{let e=this.view;if(e)try{let i=e.featuresTilingScheme.getClosestInfoForScale(t.state.scale).level;this.collisionEngine.run(e.allLayerViews.items,t,i)}catch{}},Ui,this),this.addHandles(this._applyVisibilityPass)}get updating(){return C("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(s){this._applyVisibilityPass(s)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate())}processUpdate(s){this.updateRequested&&(this.updateRequested=!1,this.update(s))}};p([f()],ht.prototype,"updateRequested",void 0),p([f()],ht.prototype,"updating",null),p([f()],ht.prototype,"view",void 0),ht=p([T("esri.views.2d.LabelManager")],ht);var It="esri-zoom-box",Pt={container:`${It}__container`,overlay:`${It}__overlay`,background:`${It}__overlay-background`,box:`${It}__outline`},ne={zoom:"Shift",counter:"Ctrl"},mt=class extends D{constructor(s){super(s),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(s){this.removeAllHandles(),this._destroyOverlay(),this._set("view",s),s&&this.addHandles([s.on("drag",[ne.zoom],t=>this._handleDrag(t,1),Zt.INTERNAL),s.on("drag",[ne.zoom,ne.counter],t=>this._handleDrag(t,-1),Zt.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(s,t,e,i){this._box.x=s,this._box.y=t,this._box.width=e,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(s,t,e,i,n){let a=this.view,o=a.toMap(xe(s+.5*e,t+.5*i)),r=Math.max(e/a.width,i/a.height);n===-1&&(r=1/r),this._destroyOverlay(),this.navigation.end(),a.goTo({center:o,scale:a.scale*r})}_updateBox(s,t,e,i){let n=this._boxShape;n.setAttributeNS(null,"x",""+s),n.setAttributeNS(null,"y",""+t),n.setAttributeNS(null,"width",""+e),n.setAttributeNS(null,"height",""+i),n.setAttributeNS(null,"class",Pt.box)}_updateBackground(s,t,e,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(s,t,e,i,this.view.width,this.view.height))}_createContainer(){let s=document.createElement("div");s.className=Pt.container,this.view.root.appendChild(s),this._container=s}_createOverlay(){let s=this.view.width,t=this.view.height,e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttributeNS(null,"d","M 0 0 L "+s+" 0 L "+s+" "+t+" L 0 "+t+" Z"),e.setAttributeNS(null,"class",Pt.background);let i=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttributeNS(null,"class",Pt.overlay),n.appendChild(e),n.appendChild(i),this._container.appendChild(n),this._backgroundShape=e,this._boxShape=i,this._overlay=n}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(s,t,e,i,n,a){let o=s+e,r=t+i;return"M 0 0 L "+n+" 0 L "+n+" "+a+" L 0 "+a+" ZM "+s+" "+t+" L "+s+" "+r+" L "+o+" "+r+" L "+o+" "+t+" Z"}_handleDrag(s,t){let e=s.x,i=s.y,n=s.origin.x,a=s.origin.y,o,r,l,h;switch(e>n?(o=n,l=e-n):(o=e,l=n-e),i>a?(r=a,h=i-a):(r=i,h=a-i),s.action){case"start":this._start();break;case"update":this._update(o,r,l,h);break;case"end":this._end(o,r,l,h,t)}s.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;let{x:s,y:t,width:e,height:i}=this._box;this._updateBox(s,t,e,i),this._updateBackground(s,t,e,i),this._rafId=requestAnimationFrame(this._redraw)}};p([f()],mt.prototype,"navigation",void 0),p([f()],mt.prototype,"view",null),mt=p([T("esri.views.2d.navigation.ZoomBox")],mt);var wi=mt;var S=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){let e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};var L=class{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){let i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);let i=1-this.friction;return t*(i**e-1)/Math.log(i)}};var ae=class extends L{constructor(t,e,i,n,a){super(t,e,i),this._sceneVelocity=n,this.direction=a}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}},Rt=class{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new S(.6),this._screen=[new S(.4),new S(.4)],this._scene=[new S(.6),new S(.6),new S(.6)],this._tmpDirection=_t()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;let t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),n=this._time.filteredDelta,a=n==null||i==null?0:i/n;return Math.abs(a)<this._minimumInitialVelocity?null:this.createMomentum(a,this._stopVelocity,this._friction)}createMomentum(t,e,i){we(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);let n=ve(this._tmpDirection);n>0&&ft(this._tmpDirection,this._tmpDirection,1/n);let a=this._time.filteredDelta;return new ae(t,e,i,a==null?0:n/a,this._tmpDirection)}};var J=class extends D{constructor(s){super(s),this.animationTime=0,this.momentumEstimator=new Rt(500,6,.92),this.momentum=null,this.tmpMomentum=_t(),this.momentumFinished=!1,this.viewpoint=new B({targetGeometry:new E,scale:0,rotation:0}),this._previousDrag=null,pt(()=>this.momentumFinished,()=>this.navigation.stop())}begin(s,t){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(t),this._previousDrag=t}update(s,t){this.addToEstimator(t);let e=t.center.x,i=t.center.y,n=this._previousDrag;e=n?n.center.x-e:-e,i=n?i-n.center.y:i,s.viewpoint=Z(this.viewpoint,s.viewpoint,[e||0,i||0]),this._previousDrag=t}end(s,t){this.addToEstimator(t);let e=s.navigation.momentumEnabled;this.momentum=e?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(s),this._previousDrag=null,this.navigation.end()}addToEstimator(s){let t=s.center.x,e=s.center.y,i=be(-t,e),n=ge(-t,e,0);this.momentumEstimator.add(i,n,.001*s.timestamp)}onAnimationUpdate(s){this.navigation.animationManager?.animateContinous(s.viewpoint,(t,e)=>{let{momentum:i,animationTime:n,tmpMomentum:a}=this,o=.001*e;if(!(this.momentumFinished=!i||i.isFinished(n))){let r=i.valueDelta(n,o);ft(a,i.direction,r),Z(t,t,a),s.constraints.constrainByGeometry(t)}this.animationTime+=o})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};p([f()],J.prototype,"momentumFinished",void 0),p([f()],J.prototype,"viewpoint",void 0),p([f()],J.prototype,"navigation",void 0),J=p([T("esri.views.2d.navigation.actions.Pan")],J);var yi=J;var K=class{constructor(t=2.5,e=.01,i=.95,n=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=n,this.enabled=!0,this.value=new S(.8),this.time=new S(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){let i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=I(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new L(t,e,i)}};var Ft=class extends K{constructor(t=3,e=.01,i=.95,n=12){super(t,e,i,n)}add(t,e){let i=this.value.lastValue;if(i!=null){let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;t=i+n}super.add(t,e)}};var se=class extends L{constructor(t,e,i){super(t,e,i)}value(t){let e=super.value(t);return Math.exp(e)}valueDelta(t,e){let i=super.value(t),n=super.value(t+e)-i;return Math.exp(n)}},At=class extends K{constructor(t=2.5,e=.01,i=.95,n=12){super(t,e,i,n)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new se(t,e,i)}};var tt=class extends D{constructor(s){super(s),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new Ft(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new At,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new B({targetGeometry:new E,scale:0,rotation:0}),this.addHandles(pt(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(s,t){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=t.angle,this._previousRadius=this._startRadius=t.radius,this._previousCenter=t.center,this._updateTimestamp=null,s.constraints.rotationEnabled&&this.addToRotateEstimator(0,t.timestamp),this.addToZoomEstimator(t,1)}update(s,t){this._updateTimestamp===null&&(this._updateTimestamp=t.timestamp);let e=t.angle,i=t.radius,n=t.center,a=Math.abs(180*(e-this._startAngle)/Math.PI),o=Math.abs(i-this._startRadius),r=this._startRadius/i;if(this._previousRadius&&this._previousCenter){let l=i/this._previousRadius,h=180*(e-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=l>=1?1:-1,s.constraints.rotationEnabled?(this._zoomOnly===null&&t.timestamp-this._updateTimestamp>200&&(this._zoomOnly=o-a>0),this._zoomOnly===null||this._zoomOnly?h=0:this.addToRotateEstimator(e-this._startAngle,t.timestamp)):h=0,this.addToZoomEstimator(t,r),this.navigation.setViewpoint([n.x,n.y],1/l,h,[this._previousCenter.x-n.x,n.y-this._previousCenter.y])}this._previousAngle=e,this._previousRadius=i,this._previousCenter=n}end(s){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(s),this.navigation.end()}addToRotateEstimator(s,t){this._rotationMomentumEstimator.add(s,.001*t)}addToZoomEstimator(s,t){this._zoomMomentumEstimator.add(t,.001*s.timestamp)}canZoomIn(s){let t=s.scale,e=s.constraints.effectiveMaxScale;return e===0||t>e}canZoomOut(s){let t=s.scale,e=s.constraints.effectiveMinScale;return e===0||t<e}onAnimationUpdate(s){this.navigation.animationManager?.animateContinous(s.viewpoint,(t,e)=>{let i=!this.canZoomIn(s)&&this._zoomDirection>1||!this.canZoomOut(s)&&this._zoomDirection<1,n=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),a=i||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),o=.001*e;if(this._momentumFinished=n&&a,!this._momentumFinished){let r=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,o))*this._rotationDirection*180/Math.PI:0,l=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,o)):1,h=O(),m=O();if(this._previousCenter){k(h,this._previousCenter.x,this._previousCenter.y),Qe(m,s.size,s.padding),Te(h,h,m);let{constraints:c,scale:d}=s,u=d*l;l<1&&!c.canZoomInTo(u)?(l=d/c.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):l>1&&!c.canZoomOutTo(u)&&(l=d/c.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Je(t,s.viewpoint,l,r,h,s.size),s.constraints.constrainByGeometry(t)}}this._animationTime+=o})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};p([f()],tt.prototype,"_momentumFinished",void 0),p([f()],tt.prototype,"viewpoint",void 0),p([f()],tt.prototype,"navigation",void 0),tt=p([T("esri.views.2d.navigation.actions.Pinch")],tt);var xi=tt;var oe=O(),bi=O(),dt=class extends D{constructor(s){super(s),this._previousCenter=O(),this.viewpoint=new B({targetGeometry:new E,scale:0,rotation:0})}begin(s,t){this.navigation.begin(),k(this._previousCenter,t.center.x,t.center.y)}update(s,t){let{state:{size:e,padding:i}}=s;k(oe,t.center.x,t.center.y),Xe(bi,e,i),s.viewpoint=ot(this.viewpoint,s.state.paddedViewState.viewpoint,je(bi,this._previousCenter,oe)),Me(this._previousCenter,oe)}end(){this.navigation.end()}};p([f()],dt.prototype,"viewpoint",void 0),p([f()],dt.prototype,"navigation",void 0),dt=p([T("esri.views.2d.actions.Rotate")],dt);var Mi=dt;var et=10,Ti=1,re=new B({targetGeometry:new E}),le=[0,0],Di=250,A=class extends D{constructor(s){super(s),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new yi({navigation:this}),this.rotate=new Mi({navigation:this}),this.pinch=new xi({navigation:this}),this.zoomBox=new wi({view:this.view,navigation:this})}destroy(){this.pan=it(this.pan),this.rotate=it(this.rotate),this.pinch=it(this.pinch),this.zoomBox=it(this.zoomBox),this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(Di)}zoom(e){return v(this,arguments,function*(s,t=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return s<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,s,0,[0,0])})}zoomIn(s){return v(this,null,function*(){let t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,s)})}zoomOut(s){return v(this,null,function*(){let t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,s)})}setViewpoint(s,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,s,t,e,i),this.end()}setViewpointImmediate(s,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,s,t,e)}continousRotateClockwise(){let s=this.view.viewpoint;this.animationManager?.animateContinous(s,t=>{ot(t,t,-Ti)})}continousRotateCounterclockwise(){let s=this.view.viewpoint;this.animationManager?.animateContinous(s,t=>{ot(t,t,Ti)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continousPanLeft(){this._continuousPan([-et,0])}continousPanRight(){this._continuousPan([et,0])}continousPanUp(){this._continuousPan([0,et])}continousPanDown(){this._continuousPan([0,-et])}continuousPanVector({x:s,y:t}){this._continuousPan([s*et,t*et])}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(s){let t=this.view.viewpoint;this.animationManager?.animateContinous(t,e=>{Z(e,e,s),this.view.constraints.constrainByGeometry(e)})}_startTimer(s){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;let t=performance.now()-(this._lastEventTimestamp??0);t<Di?this._endTimer=this._startTimer(t):this._set("interacting",!1)},s)),this._endTimer}_getDefaultAnchor(){let{size:s,padding:{left:t,right:e,top:i,bottom:n}}=this.view;return le[0]=.5*(s[0]-e+t),le[1]=.5*(s[1]-n+i),le}_zoomToScale(e){return v(this,arguments,function*(s,t=this._getDefaultAnchor()){let{view:i}=this,{constraints:n,scale:a,viewpoint:o,size:r,padding:l}=i,h=n.canZoomInTo(s),m=n.canZoomOutTo(s);if(!(s<a&&!h||s>a&&!m))return Yt(re,o,s/a,0,t,r,l),n.constrainByGeometry(re),i.goTo(re,{animate:!0,pickClosestTarget:!1})})}_scaleRotateTranslateViewpoint(s,t,e,i,n){let{view:a}=this,{size:o,padding:r,constraints:l,scale:h,viewpoint:m}=a,c=h*e,d=l.canZoomInTo(c),u=l.canZoomOutTo(c);return(e<1&&!d||e>1&&!u)&&(e=1),Z(m,m,n),Yt(s,m,e,i,t,o,r),l.constrainByGeometry(s)}};p([f()],A.prototype,"animationManager",void 0),p([f({type:Boolean,readOnly:!0})],A.prototype,"interacting",void 0),p([f()],A.prototype,"pan",void 0),p([f()],A.prototype,"pinch",void 0),p([f()],A.prototype,"rotate",void 0),p([f()],A.prototype,"view",void 0),p([f()],A.prototype,"zoomBox",void 0),A=p([T("esri.views.2d.navigation.MapViewNavigation")],A);var Uo=A;var $i={shaders:{vertexShader:y("magnifier/magnifier.vert"),fragmentShader:y("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function Yo(s){return ti(s,$i)}export{Zi as a,Qi as b,oi as c,ci as d,pa as e,gi as f,Ia as g,Pa as h,vi as i,ht as j,Uo as k,$i as l,Yo as m};
