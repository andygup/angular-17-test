import{j as m}from"./chunk-6QIKBCPR.js";function o(a=n){return[a[0],a[1],a[2],a[3],a[4],a[5]]}function g(a,i,e,t,s,h,u=o()){return u[0]=a,u[1]=i,u[2]=e,u[3]=t,u[4]=s,u[5]=h,u}function d(a,i){let e=isFinite(a[2])||isFinite(a[5]);return new m(e?{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:i}:{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:i})}function y(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[3]),a[4]=Math.max(a[4],i[4]),a[5]=Math.max(a[5],i[5])}function E(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[0]),a[4]=Math.max(a[4],i[1]),a[5]=Math.max(a[5],i[2])}function c(a){return a[0]>=a[3]?0:a[3]-a[0]}function M(a){return a[1]>=a[4]?0:a[4]-a[1]}function x(a){return a[2]>=a[5]?0:a[5]-a[2]}function F(a,i=[0,0,0]){return i[0]=c(a),i[1]=M(a),i[2]=x(a),i}function T(a,i,e=a){return e[0]=i[0],e[1]=i[1],e[2]=i[2],e!==a&&(e[3]=a[3],e[4]=a[4],e[5]=a[5]),e}function V(a,i,e=a){return e[3]=i[0],e[4]=i[1],e[5]=i[2],e!==a&&(e[0]=a[0],e[1]=a[1],e[2]=a[2]),a}function l(a,i){return a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=i[3],a[4]=i[4],a[5]=i[5],a}function z(a){return a?l(a,r):o(r)}function A(a,i){return a[0]=i[0],a[1]=i[1],a[2]=Number.NEGATIVE_INFINITY,a[3]=i[2],a[4]=i[3],a[5]=Number.POSITIVE_INFINITY,a}function R(a,i,e,t,s){return a[0]=i,a[1]=e,a[2]=Number.NEGATIVE_INFINITY,a[3]=t,a[4]=s,a[5]=Number.POSITIVE_INFINITY,a}function f(a){return a.length===6}function W(a,i,e){if(a==null||i==null)return a===i;if(!f(a)||!f(i))return!1;if(e){for(let t=0;t<a.length;t++)if(!e(a[t],i[t]))return!1}else for(let t=0;t<a.length;t++)if(a[t]!==i[t])return!1;return!0}var P=[-1/0,-1/0,-1/0,1/0,1/0,1/0],r=[1/0,1/0,1/0,-1/0,-1/0,-1/0],n=[0,0,0,0,0,0],b=o();export{o as a,g as b,d as c,y as d,E as e,F as f,T as g,V as h,l as i,z as j,A as k,R as l,f as m,W as n,r as o};
