function a(){return new Float32Array(3)}function l(t){let n=new Float32Array(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function r(t,n,f){let e=new Float32Array(3);return e[0]=t,e[1]=n,e[2]=f,e}function _(t,n){return new Float32Array(t,n,3)}function o(){return a()}function u(){return r(1,1,1)}function s(){return r(1,0,0)}function c(){return r(0,1,0)}function i(){return r(0,0,1)}var y=o(),w=u(),O=s(),b=c(),A=i(),F=Object.freeze(Object.defineProperty({__proto__:null,ONES:w,UNIT_X:O,UNIT_Y:b,UNIT_Z:A,ZEROS:y,clone:l,create:a,createView:_,fromValues:r,ones:u,unitX:s,unitY:c,unitZ:i,zeros:o},Symbol.toStringTag,{value:"Module"}));export{a,r as b};
