function f(){let t=new Float32Array(6);return t[0]=1,t[3]=1,t}function l(t){let n=new Float32Array(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function i(t,n,o,e,c,r){let a=new Float32Array(6);return a[0]=t,a[1]=n,a[2]=o,a[3]=e,a[4]=c,a[5]=r,a}function y(t,n){return new Float32Array(t,n,6)}function u(t,n,o,e){let c=n[e],r=n[e+1];t[e]=o[0]*c+o[2]*r+o[4],t[e+1]=o[1]*c+o[3]*r+o[5]}function m(t,n,o,e=0,c=0,r=2){let a=c||n.length/r;for(let s=e;s<a;s++)u(t,n,o,s*r)}var w=Object.freeze(Object.defineProperty({__proto__:null,clone:l,create:f,createView:y,fromValues:i,transform:u,transformMany:m},Symbol.toStringTag,{value:"Module"}));export{f as a,m as b};