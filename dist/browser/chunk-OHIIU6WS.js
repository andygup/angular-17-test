import{a as i,b as f}from"./chunk-NBRBW7H5.js";function p(n,r){return n[0]=r[0],n[1]=r[1],n}function g(n,r,s){return n[0]=r,n[1]=s,n}function x(n,r,s){return n[0]=r[0]+s[0],n[1]=r[1]+s[1],n}function M(n,r,s){return n[0]=r[0]-s[0],n[1]=r[1]-s[1],n}function h(n,r,s){return n[0]=r[0]*s[0],n[1]=r[1]*s[1],n}function l(n,r,s){return n[0]=r[0]/s[0],n[1]=r[1]/s[1],n}function v(n,r){return n[0]=Math.ceil(r[0]),n[1]=Math.ceil(r[1]),n}function y(n,r){return n[0]=Math.floor(r[0]),n[1]=Math.floor(r[1]),n}function j(n,r,s){return n[0]=Math.min(r[0],s[0]),n[1]=Math.min(r[1],s[1]),n}function A(n,r,s){return n[0]=Math.max(r[0],s[0]),n[1]=Math.max(r[1],s[1]),n}function P(n,r){return n[0]=Math.round(r[0]),n[1]=Math.round(r[1]),n}function _(n,r,s){return n[0]=r[0]*s,n[1]=r[1]*s,n}function z(n,r,s,t){return n[0]=r[0]+s[0]*t,n[1]=r[1]+s[1]*t,n}function d(n,r){let s=r[0]-n[0],t=r[1]-n[1];return Math.sqrt(s*s+t*t)}function m(n,r){let s=r[0]-n[0],t=r[1]-n[1];return s*s+t*t}function b(n){let r=n[0],s=n[1];return Math.sqrt(r*r+s*s)}function q(n){let r=n[0],s=n[1];return r*r+s*s}function D(n,r){return n[0]=-r[0],n[1]=-r[1],n}function I(n,r){return n[0]=1/r[0],n[1]=1/r[1],n}function L(n,r){let s=r[0],t=r[1],o=s*s+t*t;return o>0&&(o=1/Math.sqrt(o),n[0]=r[0]*o,n[1]=r[1]*o),n}function O(n,r){return n[0]*r[0]+n[1]*r[1]}function S(n,r,s){let t=r[0]*s[1]-r[1]*s[0];return n[0]=n[1]=0,n[2]=t,n}function E(n,r,s,t){let o=r[0],u=r[1];return n[0]=o+t*(s[0]-o),n[1]=u+t*(s[1]-u),n}function k(n,r){r=r||1;let s=2*f()*Math.PI;return n[0]=Math.cos(s)*r,n[1]=Math.sin(s)*r,n}function w(n,r,s){let t=r[0],o=r[1];return n[0]=s[0]*t+s[2]*o,n[1]=s[1]*t+s[3]*o,n}function B(n,r,s){let t=r[0],o=r[1];return n[0]=s[0]*t+s[2]*o+s[4],n[1]=s[1]*t+s[3]*o+s[5],n}function C(n,r,s){let t=r[0],o=r[1];return n[0]=s[0]*t+s[3]*o+s[6],n[1]=s[1]*t+s[4]*o+s[7],n}function F(n,r,s){let t=r[0],o=r[1];return n[0]=s[0]*t+s[4]*o+s[12],n[1]=s[1]*t+s[5]*o+s[13],n}function G(n,r,s,t){let o=r[0]-s[0],u=r[1]-s[1],a=Math.sin(t),e=Math.cos(t);return n[0]=o*e-u*a+s[0],n[1]=o*a+u*e+s[1],n}function H(n,r){let s=n[0],t=n[1],o=r[0],u=r[1],a=s*s+t*t;a>0&&(a=1/Math.sqrt(a));let e=o*o+u*u;e>0&&(e=1/Math.sqrt(e));let c=(s*o+t*u)*a*e;return c>1?0:c<-1?Math.PI:Math.acos(c)}function J(n){return"vec2("+n[0]+", "+n[1]+")"}function K(n,r){return n[0]===r[0]&&n[1]===r[1]}function N(n,r){let s=n[0],t=n[1],o=r[0],u=r[1],a=i();return Math.abs(s-o)<=a*Math.max(1,Math.abs(s),Math.abs(o))&&Math.abs(t-u)<=a*Math.max(1,Math.abs(t),Math.abs(u))}function R(n,r,s,t,o){let u=r[0]-s[0],a=r[1]-s[1],e=(t[0]*u+t[1]*a)*(o-1);return u=t[0]*e,a=t[1]*e,n[0]=r[0]+u,n[1]=r[1]+a,n}var T=b,Q=M,U=h,V=l,W=d,X=m,Y=q,$=Object.freeze(Object.defineProperty({__proto__:null,add:x,angle:H,ceil:v,copy:p,cross:S,dist:W,distance:d,div:V,divide:l,dot:O,equals:N,exactEquals:K,floor:y,inverse:I,len:T,length:b,lerp:E,max:A,min:j,mul:U,multiply:h,negate:D,normalize:L,projectAndScale:R,random:k,rotate:G,round:P,scale:_,scaleAndAdd:z,set:g,sqrDist:X,sqrLen:Y,squaredDistance:m,squaredLength:q,str:J,sub:Q,subtract:M,transformMat2:w,transformMat2d:B,transformMat3:C,transformMat4:F},Symbol.toStringTag,{value:"Module"}));export{p as a,g as b,x as c,M as d,_ as e,d as f,m as g,b as h,D as i,L as j,O as k,S as l,E as m,B as n,G as o,Q as p};
