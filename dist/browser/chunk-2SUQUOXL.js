import{A as M,B as v,C as A,F as E,G as L,H as S,I as T,J as F,K as f,L as D,M as V,N as B,O as _,P as R,Q as j,R as z,S as k,T as u,U,V as G,W as x,a as s,b as g,e as C,g as c,i,j as b,q as w,x as O,y as P,z as p}from"./chunk-YDRXZKZM.js";import{a as y}from"./chunk-FN72K46S.js";import{a as $}from"./chunk-3OR7RZFV.js";import{c as m,e as d,i as N}from"./chunk-6I2HBXXD.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as h}from"./chunk-IL3PPCCF.js";function q(o){let e=new N,{vertex:l,fragment:t,varyings:n}=e;return A(l,o),e.include(w),n.add("vpos","vec3"),e.include(F,o),e.include(E,o),e.include(T,o),o.output!==s.Color&&o.output!==s.Alpha||(v(e.vertex,o),e.include(g,o),e.include(M,o),o.offsetBackfaces&&e.include(P),o.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),o.multipassEnabled&&n.add("depth","float"),e.include(C,o),e.include(O,o),e.include(L,o),e.include(S,o),l.uniforms.add(new $("externalColor",r=>r.externalColor)),n.add("vcolorExt","vec4"),l.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${o.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${o.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${o.multipassEnabled?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),o.output===s.Alpha&&(e.include(p,o),e.include(f,o),e.include(u,o),t.uniforms.add(new d("opacity",r=>r.opacity),new d("layerOpacity",r=>r.layerOpacity)),o.hasColorTexture&&t.uniforms.add(new m("tex",r=>r.texture)),t.include(x),t.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${o.multipassEnabled?a`terrainDepthTest(depth);`:""}
        ${o.hasColorTexture?a`
                vec4 texColor = texture(tex, ${o.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${o.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),o.output===s.Color&&(e.include(p,o),e.include(k,o),e.include(V,o),e.include(f,o),e.include(o.instancedDoublePrecision?U:G,o),e.include(u,o),v(e.fragment,o),B(t),j(t),z(t),t.uniforms.add(l.uniforms.get("localOrigin"),l.uniforms.get("view"),new c("ambient",r=>r.ambient),new c("diffuse",r=>r.diffuse),new d("opacity",r=>r.opacity),new d("layerOpacity",r=>r.layerOpacity)),o.hasColorTexture&&t.uniforms.add(new m("tex",r=>r.texture)),e.include(b,o),e.include(R,o),t.include(x),_(t),t.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${o.multipassEnabled?a`terrainDepthTest(depth);`:""}
        ${o.hasColorTexture?a`
                vec4 texColor = texture(tex, ${o.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${o.pbrMode===i.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${o.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":o.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${o.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${o.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${o.pbrMode===i.Normal||o.pbrMode===i.Schematic?o.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${o.pbrMode===i.Normal||o.pbrMode===i.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${o.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${o.transparencyPassType===y.Color?a`fragColor = premultiplyAlpha(fragColor);`:a``}
      }
    `)),e.include(D,o),e}var Ao=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:"Module"}));export{q as a,Ao as b};
