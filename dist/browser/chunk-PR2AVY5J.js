import{d as M,f as v}from"./chunk-J43N2ESR.js";import{a as l,b as E}from"./chunk-Y4SWPZQY.js";import{a as T}from"./chunk-DUAAYE7V.js";import{a as B}from"./chunk-XHOTVM3O.js";import{a as F}from"./chunk-SREKDU6P.js";import{G as u,J as g,a as s,b as z,k as b,l as d,m as S,n as P,p as y,r as j,s as w,t as A,v as x,w as f}from"./chunk-4LHUJTP5.js";var c0=l(),f0=s(),h0=s(),u0=F(),l0=T();function m0(a=[0,0,0],n=[-1,-1,-1],t=l()){return{center:z(a),halfSize:z(n),quaternion:E(t)}}var z0=(()=>{let a=new Int8Array(162),n=0,t=h=>{for(let e=0;e<h.length;e++)a[n+e]=h[e];n+=6};return t([6,2,3,1,5,4]),t([0,2,3,1,5,4]),t([0,2,3,7,5,4]),t([0,1,3,2,6,4]),t([0,1,3,2,0,0]),t([0,1,5,7,3,2]),t([0,1,3,7,6,4]),t([0,1,3,7,6,2]),t([0,1,5,7,6,2]),t([0,1,5,4,6,2]),t([0,1,5,4,0,0]),t([0,1,3,7,5,4]),t([0,2,6,4,0,0]),t([0,0,0,0,0,0]),t([1,3,7,5,0,0]),t([2,3,7,6,4,0]),t([2,3,7,6,0,0]),t([2,3,1,5,7,6]),t([0,1,5,7,6,2]),t([0,1,5,7,6,4]),t([0,1,3,7,6,4]),t([4,5,7,6,2,0]),t([4,5,7,6,0,0]),t([4,5,1,3,7,6]),t([0,2,3,7,5,4]),t([6,2,3,7,5,4]),t([6,2,3,1,5,4]),a})();function b0(a,n,t,h,e){if(v(e.quaternion,a.quaternion),h===B.Global){M(m,a.quaternion),u(r,a.center,m),j(o,r),A(c,o,a.halfSize),g(c,o,c);let i=b(c);P(c,o,a.halfSize);let q=b(c);if(i<t)d(e.center,a.center),S(r,t,t,t),P(e.halfSize,a.halfSize,r);else{let I=q>0?1+n/q:1,p=i>0?1+t/i:1,V=(p+I)/2,N=(p-I)/2;x(e.halfSize,o,N),f(e.halfSize,e.halfSize,a.halfSize,V),x(e.center,o,V),f(e.center,e.center,a.halfSize,N),w(r,r),y(e.center,e.center,r),u(e.center,e.center,e.quaternion)}}else{let i=S(r,0,0,1);f(e.center,a.center,i,(t+n)/2),M(m,a.quaternion),u(i,i,m),j(i,i),f(e.halfSize,a.halfSize,i,(t-n)/2)}return e}var r=s(),o=s(),c=s(),m=l();export{m0 as a,b0 as b};
