import{A as D,B as g,C as F,F as L,G as R,H as B,I as z,J as I,K as h,L as W,M as j,O as G,P as Q,Q as q,R as J,S as K,T as y,U as X,V as Y,W as C,a as m,b as w,c as v,d as b,e as V,f as M,g as f,i as p,j as O,q as S,r as l,s as A,x as $,y as E,z as T}from"./chunk-YDRXZKZM.js";import{a as U}from"./chunk-FN72K46S.js";import{a as P}from"./chunk-AOBAM4UL.js";import{a as _}from"./chunk-3OR7RZFV.js";import{a as N,c as d,e as c,i as k}from"./chunk-6I2HBXXD.js";import{b as r}from"./chunk-GMW3QDVG.js";import{a as x}from"./chunk-IL3PPCCF.js";import{a as s}from"./chunk-WKOJXXCZ.js";function Z(e,o){let t=e.fragment;switch(t.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case n.None:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case n.View:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case n.WindingOrder:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:o.doubleSidedMode;case n.COUNT:}}var n;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(n||(n={}));function H(e,o){let t=e.fragment;o.hasVertexTangents?(e.attributes.add(x.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),o.doubleSidedMode===n.WindingOrder?t.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),o.textureCoordinateType!==b.None&&(e.include(M,o),t.uniforms.add(o.pbrTextureBindType===N.Pass?new d("normalTexture",i=>i.textureNormal):new P("normalTexture",i=>i.textureNormal)),t.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function ee(e){e.vertex.uniforms.add(new l("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix!=null?o.colorTextureTransformMatrix:s())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function oe(e){e.vertex.uniforms.add(new l("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix!=null?o.normalTextureTransformMatrix:s())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function re(e){e.vertex.uniforms.add(new l("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix!=null?o.emissiveTextureTransformMatrix:s())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ae(e){e.vertex.uniforms.add(new l("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix!=null?o.occlusionTextureTransformMatrix:s())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function te(e){e.vertex.uniforms.add(new l("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix!=null?o.metallicRoughnessTextureTransformMatrix:s())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function se(e){let o=new k,{vertex:t,fragment:i,varyings:u}=o;if(F(t,e),o.include(S),u.add("vpos","vec3"),o.include(I,e),o.include(L,e),o.include(z,e),e.hasColorTextureTransform&&o.include(ee),e.output===m.Color||e.output===m.Alpha){e.hasNormalTextureTransform&&o.include(oe),e.hasEmissionTextureTransform&&o.include(re),e.hasOcclusionTextureTransform&&o.include(ae),e.hasMetallicRoughnessTextureTransform&&o.include(te),g(t,e),o.include(w,e),o.include(D,e);let a=e.normalType===v.Attribute||e.normalType===v.Compressed;a&&e.offsetBackfaces&&o.include(E),o.include(H,e),o.include(A,e),e.instancedColor&&o.attributes.add(x.INSTANCECOLOR,"vec4"),u.add("vPositionLocal","vec3"),o.include(V,e),o.include($,e),o.include(R,e),o.include(B,e),t.uniforms.add(new _("externalColor",ie=>ie.externalColor)),u.add("vcolorExt","vec4"),e.multipassEnabled&&u.add("depth","float"),t.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?r`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?r`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?r`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?r`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?r`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case m.Alpha:o.include(T,e),o.include(h,e),o.include(y,e),i.uniforms.add(new c("opacity",a=>a.opacity),new c("layerOpacity",a=>a.layerOpacity)),e.hasColorTexture&&i.uniforms.add(new d("tex",a=>a.texture)),i.include(C),i.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case m.Color:o.include(T,e),o.include(K,e),o.include(j,e),o.include(h,e),o.include(e.instancedDoublePrecision?X:Y,e),o.include(y,e),g(i,e),i.uniforms.add(t.uniforms.get("localOrigin"),new f("ambient",a=>a.ambient),new f("diffuse",a=>a.diffuse),new c("opacity",a=>a.opacity),new c("layerOpacity",a=>a.layerOpacity)),e.hasColorTexture&&i.uniforms.add(new d("tex",a=>a.texture)),o.include(O,e),o.include(Q,e),i.include(C),o.include(Z,e),q(i),J(i),G(i),i.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===v.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===p.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?r`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===p.Normal||e.pbrMode===p.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===U.Color?r`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return o.include(W,e),o}var lo=Object.freeze(Object.defineProperty({__proto__:null,build:se},Symbol.toStringTag,{value:"Module"}));export{n as a,se as b,lo as c};
