import{a as u,b as d,c,d as s,e as f,g as v,h,i as x}from"./chunk-6I2HBXXD.js";import{b as a}from"./chunk-GMW3QDVG.js";import{a as i}from"./chunk-ZOTIMGGE.js";import{b as n}from"./chunk-OHIIU6WS.js";import{a as p}from"./chunk-SREKDU6P.js";import{f as m}from"./chunk-NBRBW7H5.js";var l=class extends d{constructor(e,t){super(e,"vec4",u.Pass,(o,z,b)=>o.setUniform4fv(e,t(z,b)))}};function S(r){r.fragment.uniforms.add(new l("projInfo",(e,t)=>T(t))),r.fragment.uniforms.add(new s("zScale",(e,t)=>A(t))),r.fragment.code.add(a`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function T(r){let e=r.camera.projectionMatrix;return e[11]===0?m(g,2/(r.camera.fullWidth*e[0]),2/(r.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):m(g,-2/(r.camera.fullWidth*e[0]),-2/(r.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}var g=p();function A(r){return r.camera.projectionMatrix[11]===0?n(P,0,1):n(P,1,0)}var P=i();var y=16;function j(){let r=new x,e=r.fragment;return r.include(v),e.include(h),r.include(S),e.uniforms.add(new f("radius",(t,o)=>w(o.camera))),e.code.add(a`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(a`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new s("nearFar",(t,o)=>o.camera.nearFar),new c("normalMap",t=>t.normalTexture),new c("depthMap",t=>t.depthTexture),new f("projScale",t=>t.projScale),new c("rnm",t=>t.noiseTexture),new s("rnmScale",(t,o)=>n(F,o.camera.fullWidth/t.noiseTexture.descriptor.width,o.camera.fullHeight/t.noiseTexture.descriptor.height)),new f("intensity",t=>t.intensity),new s("screenSize",(t,o)=>n(F,o.camera.fullWidth,o.camera.fullHeight))),r.outputs.add("fragOcclusion","float"),e.code.add(a`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${a.int(y)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${a.int(y)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),r}function w(r){return Math.max(10,20*r.computeScreenPixelSizeAtDist(Math.abs(4*r.relativeElevation)))}var F=i(),J=Object.freeze(Object.defineProperty({__proto__:null,build:j,getRadius:w},Symbol.toStringTag,{value:"Module"}));export{l as a,j as b,w as c,J as d};
