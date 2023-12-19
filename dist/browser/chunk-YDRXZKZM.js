import{f as it,g as st}from"./chunk-FN72K46S.js";import{b as lt}from"./chunk-EVB25YXG.js";import{a as Lr,i as j,j as Kt}from"./chunk-Z7J4BCLI.js";import{a as at,c as Dr}from"./chunk-AOBAM4UL.js";import{a as O,c as Fr,d as Nr}from"./chunk-3OR7RZFV.js";import{a as h,b as _,c as P,d as nt,e as be,f as Or,h as Ir}from"./chunk-6I2HBXXD.js";import{a as L,b as a}from"./chunk-GMW3QDVG.js";import{a as W}from"./chunk-6Z54DTZZ.js";import{a as ot,b as Pr}from"./chunk-OUYMSSKU.js";import{b as Ar,c as wr}from"./chunk-PTXLSCMJ.js";import{c as qe,f as se,g as Rr}from"./chunk-ZREXZJBZ.js";import{a as Er}from"./chunk-PYQFEBZL.js";import{a as l}from"./chunk-IL3PPCCF.js";import{a as Mr,b as Cr,k as We,l as J,n as _e,o as Ee,p as je,q as tt}from"./chunk-TKTKGUCU.js";import{a as Se}from"./chunk-DUAAYE7V.js";import{a as ie,d as rt}from"./chunk-6B6VO6EC.js";import{a as Tr}from"./chunk-ZOTIMGGE.js";import{m as yr}from"./chunk-7UQPY7PH.js";import{b as Zt}from"./chunk-OHIIU6WS.js";import{a as _r,g as Sr,h as br}from"./chunk-CJJRHJ2S.js";import{a as Ve,b as Xt}from"./chunk-SREKDU6P.js";import{f as Te}from"./chunk-IXIJFOEL.js";import{b as Ue,e as Jt,g as Be}from"./chunk-EJ3VIBAJ.js";import{A as gr,C as xr,E as et,a as f,c as He,f as Ge,m as T,n as Yt,o as kt}from"./chunk-4LHUJTP5.js";import{f as N}from"./chunk-NBRBW7H5.js";import{a as pr,h as vr}from"./chunk-CBOFHDSC.js";import{H as g,K as Qe}from"./chunk-WMYPRHRR.js";import{R as $e,s as qt}from"./chunk-IAMDMFZ7.js";import{a as u}from"./chunk-53MWZ23O.js";import{w as fr}from"./chunk-PT7S6WNL.js";import{c as ze,f as ae}from"./chunk-XDTDVCGP.js";import{f as hr}from"./chunk-AC62Z3FX.js";import{g as ur}from"./chunk-ESDYQQXO.js";var d;(function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.CompositeColor=9]="CompositeColor",e[e.COUNT=10]="COUNT"})(d||(d={}));function dt(e,t){switch(t.normalType){case E.Compressed:e.attributes.add(l.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case E.Attribute:e.attributes.add(l.NORMAL,"vec3"),e.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case E.ScreenDerivative:e.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:t.normalType;case E.COUNT:case E.Ground:}}var E;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(E||(E={}));var I;function Me(e,t){switch(t.textureCoordinateType){case I.Default:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case I.Compressed:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case I.Atlas:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(l.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case I.None:return void e.vertex.code.add(a`void forwardTextureCoordinates() {}`);case I.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(I||(I={}));var x=class extends _{constructor(t,r){super(t,"vec3",h.Pass,(o,i,s)=>o.setUniform3fv(t,r(i,s)))}};function zr(e){e.fragment.code.add(a`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Hr(e,t){switch(e.include(Me,t),t.textureCoordinateType){case I.Default:case I.Compressed:return void e.fragment.code.add(a`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case I.Atlas:return e.include(zr),void e.fragment.code.add(a`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:t.textureCoordinateType;case I.None:case I.COUNT:return}}var M=class extends _{constructor(t,r){super(t,"vec3",h.Draw,(o,i,s,n)=>o.setUniform3fv(t,r(i,s,n)))}};var mt=class{constructor(t){this._material=t.material,this._techniqueRepository=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(t,r){return this._technique=this._techniqueRepository.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return qe.LOADED}};var Gr=class extends mt{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRepository,this._textureId=t.textureId,this._acquire(t.textureId,r=>this._texture=r),this._acquire(t.normalTextureId,r=>this._textureNormal=r),this._acquire(t.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(t.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(t.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=ae(this._texture),this._textureNormal=ae(this._textureNormal),this._textureEmissive=ae(this._textureEmissive),this._textureOcclusion=ae(this._textureOcclusion),this._textureMetallicRoughness=ae(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?qe.LOADED:qe.LOADING}get textureBindParameters(){return new ut(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=ae(this._texture),this._textureId=t,this._acquire(this._textureId,r=>this._texture=r))}_acquire(t,r){if(t==null)return void r(null);let o=this._textureRepository.acquire(t);if(fr(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return ae(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},ut=class extends L{constructor(t=null,r=null,o=null,i=null,s=null){super(),this.texture=t,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=s}};var p;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(p||(p={}));function ja(e,t){let r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===p.Normal&&o&&e.include(Hr,t),t.pbrMode!==p.Schematic)if(t.pbrMode!==p.Disabled){if(t.pbrMode===p.Normal){r.code.add(a`vec3 mrr;
vec3 emission;
float occlusion;`);let i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===h.Pass?new P("texMetallicRoughness",s=>s.textureMetallicRoughness):new at("texMetallicRoughness",s=>s.textureMetallicRoughness)),r.code.add(a`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===h.Pass?new P("texEmission",s=>s.textureEmissive):new at("texEmission",s=>s.textureEmissive)),r.code.add(a`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===h.Pass?new P("texOcclusion",s=>s.textureOcclusion):new at("texOcclusion",s=>s.textureOcclusion)),r.code.add(a`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(a`float getBakedOcclusion() { return 1.0; }`),i===h.Pass?r.uniforms.add(new x("emissionFactor",s=>s.emissiveFactor),new x("mrrFactors",s=>s.mrrFactors)):r.uniforms.add(new M("emissionFactor",s=>s.emissiveFactor),new M("mrrFactors",s=>s.mrrFactors)),r.code.add(a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?a`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?a`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?a`applyEmission(${t.hasEmissiveTextureTransform?a`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?a`applyOcclusion(${t.hasOcclusionTextureTransform?a`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(a`float getBakedOcclusion() { return 1.0; }`);else r.code.add(a`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Ur(e){e.attributes.add(l.POSITION,"vec3"),e.vertex.code.add(a`vec3 positionModel() { return position; }`)}function ht({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}var Ce=class extends _{constructor(t,r){super(t,"mat3",h.Draw,(o,i,s)=>o.setUniformMatrix3fv(t,r(i,s)))}};var X=class extends _{constructor(t,r){super(t,"mat3",h.Pass,(o,i,s)=>o.setUniformMatrix3fv(t,r(i,s)))}};var q=class extends _{constructor(t,r){super(t,"mat4",h.Pass,(o,i,s)=>o.setUniformMatrix4fv(t,r(i,s)))}};function pt(e,t){e.include(Ur);let r=e.vertex;r.include(ht,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new x("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new x("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new X("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new q("transformProjFromView",o=>o.transformProjFromView),new Ce("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new M("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new M("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(a`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?a`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:a`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new x("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var ft=class extends L{constructor(){super(...arguments),this.transformWorldFromViewTH=f(),this.transformWorldFromViewTL=f(),this.transformViewFromCameraRelativeRS=Se(),this.transformProjFromView=ie()}};function Vr(e,t){switch(t.normalType){case E.Attribute:case E.Compressed:e.include(dt,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ce("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new X("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case E.Ground:e.include(pt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?a`normalize(vPositionWorldCameraRelative);`:a`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case E.ScreenDerivative:e.vertex.code.add(a`void forwardNormal() {}`);break;default:t.normalType;case E.COUNT:}}var Br=class extends ft{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Se()}};function Wr(e){e.varyings.add("linearDepth","float")}function $t(e){e.vertex.uniforms.add(new nt("nearFar",(t,r)=>r.camera.nearFar))}function Qt(e){e.vertex.code.add(a`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Ii(e,t){let{vertex:r}=e;switch(t.output){case d.Color:if(t.receiveShadows)return Wr(e),void r.code.add(a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case d.Depth:case d.Shadow:case d.ShadowHighlight:case d.ShadowExcludeHighlight:return e.include(pt,t),Wr(e),$t(e),Qt(e),void r.code.add(a`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a`void forwardLinearDepth() {}`)}function Ni(e){e.vertex.code.add(a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function gt(e,t){wo(e,t,new M("slicePlaneOrigin",(r,o)=>Lo(t,r,o)),new M("slicePlaneBasis1",(r,o)=>jr(t,r,o,o.slicePlane?.basis1)),new M("slicePlaneBasis2",(r,o)=>jr(t,r,o,o.slicePlane?.basis2)))}function wo(e,t,...r){if(!t.hasSlicePlane){let n=a`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);let o=a`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=a`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,s=t.hasSliceHighlight?a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:a`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(s)}function qr(e,t,r){return e.instancedDoublePrecision?T(Oo,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Yr(e,t){return e!=null?kt(vt,t.origin,e):t.origin}function kr(e,t,r){return e.hasSliceTranslatedView?t!=null?Te(Io,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Lo(e,t,r){if(r.slicePlane==null)return Ge;let o=qr(e,t,r),i=Yr(o,r.slicePlane),s=kr(e,o,r);return s!=null?et(vt,i,s):i}function jr(e,t,r,o){if(o==null||r.slicePlane==null)return Ge;let i=qr(e,t,r),s=Yr(i,r.slicePlane),n=kr(e,i,r);return n!=null?(Yt(Ye,o,s),et(vt,s,n),et(Ye,Ye,n),kt(Ye,Ye,vt)):o}var Oo=f(),vt=f(),Ye=f(),Io=ie();function xt(e){Qt(e),e.vertex.code.add(a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var _t=class extends _{constructor(t,r){super(t,"mat4",h.Draw,(o,i,s)=>o.setUniformMatrix4fv(t,r(i,s)))}};function Xr(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",Ge):e.uniforms.add(new M("cameraPosition",(r,o)=>T(Zr,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function St(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new q("proj",(o,i)=>i.camera.projectionMatrix),new _t("view",(o,i)=>Te(Jr,i.camera.viewMatrix,o.origin)),new M("localOrigin",o=>o.origin));let r=o=>T(Zr,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new q("proj",(o,i)=>i.camera.projectionMatrix),new q("view",(o,i)=>Te(Jr,i.camera.viewMatrix,r(i))),new x("localOrigin",(o,i)=>r(i)))}var Jr=ie(),Zr=f();function Kr(e){e.uniforms.add(new q("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}var bt=class extends L{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){let t=this._parameterNames,r={key:this.key};for(let o of t)r[o]=this[o];return r}};function er(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),e.constValue!=null)Object.defineProperty(t,r,{get:()=>e.constValue});else{let o=t._parameterNames.length-1,i=e.count||2,s=Math.ceil(Math.log2(i)),n=t._parameterBits??[0],c=0;for(;n[c]+s>16;)c++,c>=n.length&&n.push(0);t._parameterBits=n;let b=n[c],m=(1<<s)-1<<b;n[c]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(v){if(this[o]!==v&&(this[o]=v,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~m|+v<<b&m,typeof v!="number"&&typeof v!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof v)}})}}}var Et=class extends bt{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};u([er()],Et.prototype,"instancedDoublePrecision",void 0),u([er()],Et.prototype,"hasModelTransformation",void 0);var $r=Se();function ys(e,t){let r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new q("model",s=>s.modelTransformation??rt)),e.vertex.uniforms.add(new X("normalLocalOriginFromModel",s=>(yr($r,s.modelTransformation??rt),$r)))),t.instanced&&o&&(e.attributes.add(l.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(l.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(l.INSTANCEMODEL,"mat3"),e.attributes.add(l.INSTANCEMODELNORMAL,"mat3"));let i=e.vertex;o&&(i.include(ht,t),i.uniforms.add(new M("viewOriginHi",(s,n)=>Ar(T(Tt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Tt)),new M("viewOriginLo",(s,n)=>wr(T(Tt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Tt)))),i.code.add(a`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?a`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===d.Normal&&(Kr(i),i.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var Tt=f();function Qr(e){e.vertex.code.add(a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.int(W.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.int(W.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.int(W.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.int(W.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var ye=class extends _{constructor(t,r){super(t,"int",h.Pass,(o,i,s)=>o.setUniform1i(t,r(i,s)))}};function Do(e){return Math.abs(e*e*e)}function Fo(e,t,r){let o=r.parameters;return tr.scale=Math.min(o.divisor/(t-o.offset),1),tr.factor=Do(e),tr}function No(e,t){return Jt(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function eo(e,t,r,o){return No(e,Fo(t,r,o))}var zs={curvatureDependent:{min:{curvature:Be(10),tiltAngle:Be(12),scaleFallOffFactor:.5},max:{curvature:Be(70),tiltAngle:Be(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0};var tr={scale:0,factor:0,minScaleFactor:0};var Mt=_r();function Js(e,t,r,o,i,s){if(e.visible)if(e.boundingInfo){Er(e.type===ot.Mesh);let n=t.tolerance;oo(e.boundingInfo,r,o,n,i,s)}else{let n=e.attributes.get(l.POSITION),c=n.indices;io(r,o,0,c.length/3,c,n,void 0,i,s)}}var zo=f();function oo(e,t,r,o,i,s){if(e==null)return;let n=Go(t,r,zo);if(Sr(Mt,e.bbMin),br(Mt,e.bbMax),i?.applyToAabb(Mt),Uo(Mt,t,n,o)){let{primitiveIndices:c,position:b}=e,m=c?c.length:b.indices.length/3;if(m>Wo){let v=e.getChildren();if(v!==void 0){for(let R of v)oo(R,t,r,o,i,s);return}}io(t,r,0,m,b.indices,b,c,i,s)}}var ao=f();function io(e,t,r,o,i,s,n,c,b){if(n)return Ho(e,t,r,o,i,s,n,c,b);let{data:m,stride:v}=s,R=e[0],w=e[1],z=e[2],H=t[0]-R,G=t[1]-w,Y=t[2]-z;for(let C=r,Z=3*r;C<o;++C){let A=v*i[Z++],y=m[A++],U=m[A++],B=m[A];A=v*i[Z++];let K=m[A++],ce=m[A++],de=m[A];A=v*i[Z++];let me=m[A++],ue=m[A++],he=m[A];c!=null&&([y,U,B]=c.applyToVertex(y,U,B,C),[K,ce,de]=c.applyToVertex(K,ce,de,C),[me,ue,he]=c.applyToVertex(me,ue,he,C));let le=K-y,$=ce-U,Q=de-B,ee=me-y,te=ue-U,re=he-B,fe=G*re-te*Y,Ie=Y*ee-re*H,De=H*te-ee*G,V=le*fe+$*Ie+Q*De;if(Math.abs(V)<=Number.EPSILON)continue;let F=R-y,pe=w-U,ve=z-B,k=F*fe+pe*Ie+ve*De;if(V>0){if(k<0||k>V)continue}else if(k>0||k<V)continue;let oe=pe*Q-$*ve,Fe=ve*le-Q*F,Ne=F*$-le*pe,ge=H*oe+G*Fe+Y*Ne;if(V>0){if(ge<0||k+ge>V)continue}else if(ge>0||k+ge<V)continue;let xe=(ee*oe+te*Fe+re*Ne)/V;xe>=0&&b(xe,so(le,$,Q,ee,te,re,ao),C,!1)}}function Ho(e,t,r,o,i,s,n,c,b){let{data:m,stride:v}=s,R=e[0],w=e[1],z=e[2],H=t[0]-R,G=t[1]-w,Y=t[2]-z;for(let C=r;C<o;++C){let Z=n[C],A=3*Z,y=v*i[A++],U=m[y++],B=m[y++],K=m[y];y=v*i[A++];let ce=m[y++],de=m[y++],me=m[y];y=v*i[A];let ue=m[y++],he=m[y++],le=m[y];c!=null&&([U,B,K]=c.applyToVertex(U,B,K,C),[ce,de,me]=c.applyToVertex(ce,de,me,C),[ue,he,le]=c.applyToVertex(ue,he,le,C));let $=ce-U,Q=de-B,ee=me-K,te=ue-U,re=he-B,fe=le-K,Ie=G*fe-re*Y,De=Y*te-fe*H,V=H*re-te*G,F=$*Ie+Q*De+ee*V;if(Math.abs(F)<=Number.EPSILON)continue;let pe=R-U,ve=w-B,k=z-K,oe=pe*Ie+ve*De+k*V;if(F>0){if(oe<0||oe>F)continue}else if(oe>0||oe<F)continue;let Fe=ve*ee-Q*k,Ne=k*$-ee*pe,ge=pe*Q-$*ve,xe=H*Fe+G*Ne+Y*ge;if(F>0){if(xe<0||oe+xe>F)continue}else if(xe>0||oe+xe<F)continue;let mr=(te*Fe+re*Ne+fe*ge)/F;mr>=0&&b(mr,so($,Q,ee,te,re,fe,ao),Z,!1)}}var to=f(),ro=f();function so(e,t,r,o,i,s,n){return T(to,e,t,r),T(ro,o,i,s),xr(n,to,ro),gr(n,n),n}function Go(e,t,r){return T(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function Uo(e,t,r,o){return Bo(e,t,r,o,1/0)}function Bo(e,t,r,o,i){let s=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0],c=Math.min(s,n),b=Math.max(s,n),m=(e[1]-o-t[1])*r[1],v=(e[4]+o-t[1])*r[1];if(b=Math.min(b,Math.max(m,v)),b<0||(c=Math.max(c,Math.min(m,v)),c>b))return!1;let R=(e[2]-o-t[2])*r[2],w=(e[5]+o-t[2])*r[2];return b=Math.min(b,Math.max(R,w)),!(b<0)&&(c=Math.max(c,Math.min(R,w)),!(c>b)&&c<i)}function Xs(e,t,r,o,i){let s=(r.screenLength||0)*e.pixelRatio;i!=null&&(s=eo(s,o,t,i));let n=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Ue(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function rr(e,t){let r=t?rr(t):{};for(let o in e){let i=e[o];i?.forEach&&(i=Vo(i)),i==null&&o in r||(r[o]=i)}return r}function no(e,t){let r=!1;for(let o in t){let i=t[o];i!==void 0&&(Array.isArray(i)?e[o]===null?(e[o]=i.slice(),r=!0):hr(e[o],i)&&(r=!0):e[o]!==i&&(r=!0,e[o]=i))}return r}function Vo(e){let t=[];return e.forEach(r=>t.push(r)),t}var lo={multiply:1,ignore:2,replace:3,tint:4},Wo=1e3;function rn(e,t){t.hasSymbolColors?(e.include(Qr),e.attributes.add(l.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new ye("colorMixMode",r=>lo[r.colorMixMode])),e.vertex.code.add(a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function nn(e,t){t.hasVertexColors?(e.attributes.add(l.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function co(e){e.vertex.code.add(a`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function mo(e){e.uniforms.add(new x("screenSizePerspectiveAlignment",t=>jo(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function jo(e){return T(qo,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}var qo=f();function Sn(e,t){let r=e.vertex;t.hasVerticalOffset?(ko(r),t.hasScreenSizePerspective&&(e.include(co),mo(r),Xr(e.vertex,t)),r.code.add(a`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a`vec3 worldNormal = normalize(worldPos + localOrigin);`:a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var Yo=Ve();function ko(e){e.uniforms.add(new O("verticalOffset",(t,r)=>{let{minWorldLength:o,maxWorldLength:i,screenLength:s}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),c=r.camera.pixelRatio||1;return N(Yo,s*c,n,o,i)}))}var Ct=class extends _{constructor(t,r,o){super(t,"vec4",h.Pass,(i,s,n)=>i.setUniform4fv(t,r(s,n)),o)}};var yt=class extends _{constructor(t,r,o){super(t,"float",h.Pass,(i,s,n)=>i.setUniform1fv(t,r(s,n)),o)}};var S=class extends Qe{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};u([g()],S.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),u([g()],S.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),u([g()],S.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),u([g()],S.prototype,"DECONFLICTOR_SHOW_GRID",void 0),u([g()],S.prototype,"LABELS_SHOW_BORDER",void 0),u([g()],S.prototype,"TEXT_SHOW_BASELINE",void 0),u([g()],S.prototype,"TEXT_SHOW_BORDER",void 0),u([g()],S.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),u([g()],S.prototype,"OVERLAY_SHOW_CENTER",void 0),u([g()],S.prototype,"SHOW_POI",void 0),u([g()],S.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),u([g()],S.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),u([g()],S.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),u([g()],S.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),u([g()],S.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),u([g()],S.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),u([g()],S.prototype,"I3S_TREE_SHOW_TILES",void 0),u([g()],S.prototype,"I3S_SHOW_MODIFICATIONS",void 0),u([g()],S.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),u([g()],S.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),u([g()],S.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),u([g()],S.prototype,"LINE_WIREFRAMES",void 0),S=u([$e("esri.views.3d.support.DebugFlags")],S);var Jo=new S;var uo,ho;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(uo||(uo={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(ho||(ho={}));var al=ie(),il=f(),sl=ie();var Re=new Map([[l.POSITION,0],[l.NORMAL,1],[l.NORMALCOMPRESSED,1],[l.UV0,2],[l.COLOR,3],[l.COLORFEATUREATTRIBUTE,3],[l.SIZE,4],[l.TANGENT,4],[l.AUXPOS1,5],[l.SYMBOLCOLOR,5],[l.AUXPOS2,6],[l.FEATUREATTRIBUTE,6],[l.INSTANCEFEATUREATTRIBUTE,6],[l.INSTANCECOLOR,7],[l.OBJECTANDLAYERIDCOLOR,7],[l.INSTANCEOBJECTANDLAYERIDCOLOR,7],[l.INSTANCEMODEL,8],[l.INSTANCEMODELNORMAL,12],[l.INSTANCEMODELORIGINHI,11],[l.INSTANCEMODELORIGINLO,15]]);var fo=class extends Pr{constructor(t,r){super(),this.type=ot.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=Re,this._pp0=He(0,0,1),this._pp1=He(0,0,0),this._parameters=rr(t,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t,r=!0){no(this._parameters,t)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bindParameters.decorations===Rr.ON)&&(this.parameters.renderOccluded&t.renderOccludedMask)!=0}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}intersectDraped(t,r,o,i,s,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(t,r,o,this._pp0,this._pp1,s)}};var or;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(or||(or={}));var Rt=8;function Pt(e,t){let{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(l.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new x("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new x("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new x("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new x("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new X("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new x("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(a`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(a`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Rt),r.uniforms.add(new yt("vvColorValues",i=>i.vvColor.values,Rt),new Ct("vvColorColors",i=>i.vvColor.colors,Rt)),r.code.add(a`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?a`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(a`vec4 vvColor() { return vec4(1.0); }`)}function po(e){e.fragment.code.add(a`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.float(.001)}) { discard; } }
  `)}function At(e,t){Ko(e,t,new be("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Ko(e,t,r){let o=e.fragment;switch(t.alphaDiscardMode!==se.Mask&&t.alphaDiscardMode!==se.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case se.Blend:return e.include(po);case se.Opaque:o.code.add(a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case se.Mask:o.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case se.MaskBlend:e.fragment.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function vo(e,t){let r=t.output===d.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(l.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(l.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(a`
     void forwardObjectAndLayerIdColor() {
      ${r?o?a`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:a`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:a``} }`),e.fragment.code.add(a`
      void outputObjectAndLayerIdColor() {
        ${r?a`fragColor = objectAndLayerIdColorVarying;`:a``} }`)}function wt(e){e.code.add(a`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function go(e,t){switch(t.output){case d.Shadow:case d.ShadowHighlight:case d.ShadowExcludeHighlight:e.fragment.include(wt),e.fragment.code.add(a`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case d.Depth:e.fragment.include(Or),e.fragment.code.add(a`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var $o=Xt(1,1,0,1),Qo=Xt(1,0,1,1);function xo(e){e.fragment.uniforms.add(new P("depthTexture",(t,r)=>r.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",$o).add("unoccludedHighlightFlag","vec4",Qo),e.fragment.code.add(a`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function Mc(e,t){let{vertex:r,fragment:o}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==se.Opaque;switch(t.output){case d.Depth:case d.Shadow:case d.ShadowHighlight:case d.ShadowExcludeHighlight:case d.ObjectAndLayerIdColor:St(r,t),e.include(xt,t),e.include(Me,t),e.include(Pt,t),e.include(go,t),e.include(gt,t),e.include(vo,t),$t(e),e.varyings.add("depth","float"),i&&o.uniforms.add(new P("tex",s=>s.texture)),r.code.add(a`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(At,t),o.code.add(a`
          void main(void) {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===d.ObjectAndLayerIdColor?a`outputObjectAndLayerIdColor();`:a`outputDepth(depth);`}
          }
        `);break;case d.Normal:{St(r,t),e.include(xt,t),e.include(dt,t),e.include(Vr,t),e.include(Me,t),e.include(Pt,t),i&&o.uniforms.add(new P("tex",n=>n.texture)),t.normalType===E.ScreenDerivative&&e.varyings.add("vPositionView","vec3");let s=t.normalType===E.Attribute||t.normalType===E.Compressed;r.code.add(a`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${s?a`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:a`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(gt,t),e.include(At,t),o.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===E.ScreenDerivative?a`vec3 normal = screenDerivativeNormal(vPositionView);`:a`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case d.Highlight:St(r,t),e.include(xt,t),e.include(Me,t),e.include(Pt,t),i&&o.uniforms.add(new P("tex",s=>s.texture)),r.code.add(a`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(gt,t),e.include(At,t),e.include(xo,t),o.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}var D;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(D||(D={}));var Lt=new j;Lt.pixelFormat=_e.RED,Lt.internalFormat=Ee.R8,Lt.wrapMode=J.CLAMP_TO_EDGE;var Ot=new j;Ot.pixelFormat=_e.RG,Ot.internalFormat=Ee.RG8,Ot.wrapMode=J.CLAMP_TO_EDGE;var It=new j;It.internalFormat=Ee.RGBA4,It.dataType=je.UNSIGNED_SHORT_4_4_4_4,It.wrapMode=J.CLAMP_TO_EDGE;var _o=new j;_o.wrapMode=J.CLAMP_TO_EDGE;var ke=new j;ke.wrapMode=J.CLAMP_TO_EDGE,ke.samplingMode=We.LINEAR_MIPMAP_LINEAR,ke.hasMipmap=!0,ke.maxAnisotropy=8;var Je=new j;Je.pixelFormat=_e.RED,Je.dataType=je.HALF_FLOAT,Je.internalFormat=Ee.R16F,Je.samplingMode=We.NEAREST;var Dt=new j;Dt.dataType=je.HALF_FLOAT,Dt.internalFormat=Ee.RGBA16F,Dt.samplingMode=We.NEAREST;var Jc={[D.RED]:Lt,[D.RG]:Ot,[D.RGBA4]:It,[D.RGBA]:_o,[D.RGBA_MIPMAP]:ke,[D.R16F]:Je,[D.RGBA16F]:Dt},Pe;(function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",e[e.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",e[e.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"})(Pe||(Pe={}));var Xe=new j;Xe.pixelFormat=_e.DEPTH_STENCIL,Xe.dataType=je.UNSIGNED_INT_24_8,Xe.samplingMode=We.NEAREST,Xe.wrapMode=J.CLAMP_TO_EDGE;var Xc={[Pe.DEPTH_STENCIL_TEXTURE]:Xe,[Pe.DEPTH_STENCIL_BUFFER]:new lt(tt.DEPTH24_STENCIL8,4),[Pe.DEPTH24_BUFFER]:new lt(tt.DEPTH_COMPONENT24,4),[Pe.DEPTH16_BUFFER]:new lt(tt.DEPTH_COMPONENT16,4)};var ir={required:[]},ed={required:[d.Depth]},td={required:[d.CompositeColor]},rd={required:[d.Highlight]},So={required:[d.Depth,d.Normal]},ar=class extends Qe{consumes(){return ir}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}},Ft=class extends ar{};var Ae=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}reload(){return ur(this,null,function*(){return this._module=yield this._loadModule(),this._module})}};var we=class{constructor(t,r,o){this.release=o,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities)}destroy(){this._program=ze(this._program),this._pipeline=this._configuration=null}reload(t){ze(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return Cr.TRIANGLES}getPipeline(t,r,o){return this._pipeline}initializeConfiguration(t,r){}};var Le=class{constructor(t,r,o){this._context=t,this._locations=o,this._textures=new Map,this._freeTextureUnits=new qt({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Lr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if(r?.glName==null){let i=this._textures.get(t);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(t)),null}let o=this._textures.get(t);return o==null?(o=this._allocTextureUnit(r),this._textures.set(t,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(t,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((t,r)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(r,t.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(t=>{t.type!=="sampler2D"&&t.type!=="samplerCube"||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};var Ze=class e extends we{initializeProgram(t){return new Le(t.rctx,e.shader.get().build(),Re)}initializePipeline(){return st({colorWrite:it})}};Ze.shader=new Ae(Dr,()=>import("./chunk-H5EB5ETH.js"));var bo="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";var sr=class extends L{constructor(){super(...arguments),this.projScale=1}},Nt=class extends sr{constructor(){super(...arguments),this.intensity=1}},nr=class extends L{},zt=class extends nr{constructor(){super(...arguments),this.blurSize=Tr()}};var Ke=class e extends we{initializeProgram(t){return new Le(t.rctx,e.shader.get().build(),Re)}initializePipeline(){return st({colorWrite:it})}};Ke.shader=new Ae(Nr,()=>import("./chunk-TV5M4PXQ.js"));var Ht;(function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(Ht||(Ht={}));var Gt;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.ANTIALIASING=10]="ANTIALIASING",e[e.COMPOSITE=11]="COMPOSITE",e[e.BLIT=12]="BLIT",e[e.SSAO=13]="SSAO",e[e.HIGHLIGHT=14]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=18]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=20]="HUD_MATERIAL",e[e.LABEL_MATERIAL=21]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=22]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",e[e.DRAPED_WATER=25]="DRAPED_WATER",e[e.VOXEL=26]="VOXEL",e[e.MAX_SLOTS=27]="MAX_SLOTS"})(Gt||(Gt={}));var Oe=2,Ut=class extends Ft{constructor(e){super(e),this._context=null,this._passParameters=new Nt,this._drawParameters=new zt,this.produces=new Map([[Gt.SSAO,()=>this._produces()]])}_produces(){return this._enableTime!=null&&this._context!=null}consumes(){return this._produces()?So:ir}initializeRenderContext(e){this._context=e,this.addHandles([pr(()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(Ht.SSAO),t=>t?this._enable():this._disable(),vr)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=ze(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(this._enableTime!=null||!this._context)return;let e=Uint8Array.from(atob(bo),r=>r.charCodeAt(0)),t=new j;t.wrapMode=J.CLAMP_TO_EDGE,t.pixelFormat=_e.RGB,t.wrapMode=J.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Kt(this._context.renderContext.rctx,t,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ke)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Ze)),this._enableTime=0,this._context?.requestRender()}renderNode(e,t,r){let o=e.bindParameters,i=o.linearDepth?.colorTexture,s=r?.normal?.colorTexture;if(this._enableTime==null||this._context==null||i==null||!s)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);let n=e.rctx,c=o.camera,b=this.view.qualitySettings.fadeDuration,m=b>0?Math.min(b,e.time-this._enableTime)/b:1;this._passParameters.normalTexture=s,this._passParameters.depthTexture=i,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ea/Fr(c)**6*m;let v=c.fullViewport[2],R=c.fullViewport[3],w=Math.round(v/Oe),z=Math.round(R/Oe),H=this._context.fbos,G=H.acquire(D.RED,v,R);n.bindFramebuffer(G.fbo),n.setViewport(0,0,v,R),n.bindTechnique(this._ssaoTechnique,this._passParameters,o).bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw();let Y=n.bindTechnique(this._blurTechnique,this._passParameters,o);n.setViewport(0,0,w,z);let C=H.acquire(D.RED,w,z);n.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=G.colorTexture,Zt(this._drawParameters.blurSize,0,Oe/R),Y.bindDraw(this._drawParameters,o,this._passParameters),n.setViewport(0,0,w,z),n.screen.draw(),G.release();let Z=H.acquire(D.RED,w,z);return n.bindFramebuffer(Z.fbo),n.setViewport(0,0,v,R),n.setClearColor(1,1,1,0),n.clear(Mr.COLOR_BUFFER_BIT),n.setViewport(0,0,w,z),this._drawParameters.colorTexture=C.colorTexture,Zt(this._drawParameters.blurSize,Oe/v,0),Y.bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw(),n.setViewport4fv(c.fullViewport),C.release(),m<1&&this._context.requestRender(),Z}};u([g({constructOnly:!0})],Ut.prototype,"view",void 0),u([g()],Ut.prototype,"_context",void 0),Ut=u([$e("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ut);var ea=.5;function To(e,t){let r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new P("ssaoTex",(o,i)=>i.ssao?.colorTexture)),r.constants.add("blurSizePixelsInverse","float",1/Oe),r.code.add(a`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function lr(e){e.uniforms.add(new x("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function cr(e){e.uniforms.add(new x("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function dr(e){lr(e.fragment),cr(e.fragment),e.fragment.code.add(a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Eo(e){let t=e.fragment.code;t.add(a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(a`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(a`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Bt(e){e.vertex.code.add(a`const float PI = 3.141592653589793;`),e.fragment.code.add(a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Mo(e,t){let r=e.fragment.code;e.include(Bt),t.pbrMode!==p.Normal&&t.pbrMode!==p.Schematic&&t.pbrMode!==p.Terrain&&t.pbrMode!==p.TerrainWithWater||(r.add(a`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(a`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==p.Normal&&t.pbrMode!==p.Schematic||(e.include(Eo),r.add(a`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(a`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(a`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(a`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function yo(e,t){let r=e.fragment,o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new x("lightingAmbientSH0",(i,s)=>T(Co,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0]))),r.code.add(a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new O("lightingAmbientSH_R",(i,s)=>N(ne,s.lighting.sh.r[0],s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3])),new O("lightingAmbientSH_G",(i,s)=>N(ne,s.lighting.sh.g[0],s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3])),new O("lightingAmbientSH_B",(i,s)=>N(ne,s.lighting.sh.b[0],s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3]))),r.code.add(a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add(new x("lightingAmbientSH0",(i,s)=>T(Co,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0])),new O("lightingAmbientSH_R1",(i,s)=>N(ne,s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3],s.lighting.sh.r[4])),new O("lightingAmbientSH_G1",(i,s)=>N(ne,s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3],s.lighting.sh.g[4])),new O("lightingAmbientSH_B1",(i,s)=>N(ne,s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3],s.lighting.sh.b[4])),new O("lightingAmbientSH_R2",(i,s)=>N(ne,s.lighting.sh.r[5],s.lighting.sh.r[6],s.lighting.sh.r[7],s.lighting.sh.r[8])),new O("lightingAmbientSH_G2",(i,s)=>N(ne,s.lighting.sh.g[5],s.lighting.sh.g[6],s.lighting.sh.g[7],s.lighting.sh.g[8])),new O("lightingAmbientSH_B2",(i,s)=>N(ne,s.lighting.sh.b[5],s.lighting.sh.b[6],s.lighting.sh.b[7],s.lighting.sh.b[8]))),r.code.add(a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==p.Normal&&t.pbrMode!==p.Schematic||r.code.add(a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var Co=f(),ne=Ve();var Vt=class extends _{constructor(t,r){super(t,"bool",h.Pass,(o,i,s)=>o.setUniform1b(t,r(i,s)))}};var Zm=f();var Ro=.4;var su=f();function aa(e){e.constants.add("ambientBoostFactor","float",Ro)}function ia(e){e.uniforms.add(new be("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function _u(e,t){let r=e.fragment;switch(e.include(To,t),t.pbrMode!==p.Disabled&&e.include(Mo,t),e.include(yo,t),e.include(Bt),r.code.add(a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===p.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),aa(r),ia(r),lr(r),r.code.add(a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?a`normalize(vPosWorld)`:a`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),cr(r),r.code.add(a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case p.Disabled:case p.WaterOnIntegratedMesh:case p.Water:e.include(dr),r.code.add(a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case p.Normal:case p.Schematic:r.code.add(a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new Vt("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new be("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new be("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==p.Schematic||t.hasColorTexture?a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case p.Terrain:case p.TerrainWithWater:e.include(dr),r.code.add(a`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:t.pbrMode;case p.COUNT:}}function Cu(e,t){if(!t.multipassEnabled)return;e.fragment.include(Ir),e.fragment.uniforms.add(new P("terrainDepthTexture",(o,i)=>i.multipassTerrain.linearDepth?.colorTexture)),e.fragment.uniforms.add(new nt("nearFar",(o,i)=>i.camera.nearFar));let r=t.occlusionPass;e.fragment.code.add(a`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?a`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:a`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}var Wt=class extends _{constructor(t,r,o){super(t,"mat4",h.Draw,(i,s,n,c)=>i.setUniformMatrix4fv(t,r(s,n,c)),o)}};var jt=class extends _{constructor(t,r,o){super(t,"mat4",h.Pass,(i,s,n)=>i.setUniformMatrix4fv(t,r(s,n)),o)}};function Vu(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new jt("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Po(e))}function Wu(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Wt("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Po(e))}function Po(e){let t=e.fragment;t.include(wt),t.uniforms.add(new P("shadowMapTex",(r,o)=>o.shadowMap.depthTexture),new ye("numCascades",(r,o)=>o.shadowMap.numCascades),new O("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),t.code.add(a`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function Ao(e){e.code.add(a`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
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
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Zu(e){e.include(Ao),e.code.add(a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.int(W.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.int(W.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(W.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.int(W.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(W.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{d as a,dt as b,E as c,I as d,Me as e,Hr as f,x as g,Gr as h,p as i,ja as j,Re as k,Js as l,Xs as m,fo as n,or as o,Gt as p,Ur as q,X as r,Vr as s,Br as t,Ae as u,we as v,Le as w,Ii as x,Ni as y,gt as z,xt as A,Xr as B,St as C,er as D,Et as E,ys as F,rn as G,nn as H,Sn as I,Pt as J,At as K,Mc as L,To as M,lr as N,cr as O,Mo as P,aa as Q,ia as R,_u as S,Cu as T,Vu as U,Wu as V,Zu as W};
