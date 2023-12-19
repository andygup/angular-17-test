import{h as p}from"./chunk-EJ3VIBAJ.js";import{h as m}from"./chunk-6QIKBCPR.js";import{i as g}from"./chunk-AHKJJNRE.js";function D(n,e,t){return Math.sqrt((n[0]-e[0])**2+(n[1]-e[1])**2+(n[2]!==void 0&&e[2]!==void 0?(n[2]*t-e[2]*t)**2:0))}var h=[];for(let n of[[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){let e=n[0];for(let t=1;t<n.length;t++)h[n[t]]=e}var u=[];function V(n){return n.vcsWkid&&h[n.vcsWkid]!==void 0?u[h[n.vcsWkid]]:n.latestVcsWkid&&h[n.latestVcsWkid]!==void 0?u[h[n.latestVcsWkid]]:1}function M(n,e,t){let r={x:0,y:0};e&&(r.z=0),t&&(r.m=0);let s=0,a=n[0];for(let i=0;i<n.length;i++){let o=n[i];if(Z(o,a)===!1){let f=d(a,o,e),l=R(a,o,e,t);l.x*=f,l.y*=f,r.x+=l.x,r.y+=l.y,e&&(l.z*=f,r.z+=l.z),t&&(l.m*=f,r.m+=l.m),s+=f,a=o}}return s>0?(r.x/=s,r.y/=s,e&&(r.z/=s),t&&(r.m/=s)):(r.x=n[0][0],r.y=n[0][1],e&&(r.z=n[0][2]),t&&e?r.m=n[0][3]:t&&(r.m=n[0][2])),r}function R(n,e,t,r){let s={x:(n[0]+e[0])/2,y:(n[1]+e[1])/2};return t&&(s.z=(n[2]+e[2])/2),t&&r?s.m=(n[3]+e[3])/2:r&&(s.m=(n[2]+e[2])/2),s}function I(n,e){if(n.length<=1)return 0;let t=0;for(let r=1;r<n.length;r++)t+=d(n[r-1],n[r],e);return t}function d(n,e,t){let r=e[0]-n[0],s=e[1]-n[1];if(t){let a=e[2]-e[2];return Math.sqrt(r*r+s*s+a*a)}return Math.sqrt(r*r+s*s)}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function q(n){let e={x:0,y:0,spatialReference:n.spatialReference.toJSON()},t={x:0,y:0,spatialReference:n.spatialReference.toJSON()},r=0,s=0;for(let a=0;a<n.paths.length;a++){if(n.paths[a].length===0)continue;let i=I(n.paths[a],n.hasZ===!0);if(i===0){let o=M(n.paths[a],n.hasZ===!0,n.hasM===!0);e.x+=o.x,e.y+=o.y,n.hasZ===!0&&(e.z+=o.z),n.hasM===!0&&(e.m+=o.m),++r}else{let o=M(n.paths[a],n.hasZ===!0,n.hasM===!0);t.x+=o.x*i,t.y+=o.y*i,n.hasZ===!0&&(t.z+=o.z*i),n.hasM===!0&&(t.m+=o.m*i),s+=i}}return s>0?(t.x/=s,t.y/=s,n.hasZ===!0&&(t.z/=s),n.hasM===!0&&(t.m/=s),new g(t)):r>0?(e.x/=r,e.y/=r,n.hasZ===!0&&(t.z/=r),n.hasM===!0&&(e.m/=r),new g(e)):null}function B(n){if(n.points.length===0)return null;let e=0,t=0,r=0,s=0;for(let i=0;i<n.points.length;i++){let o=n.getPoint(i);o.hasZ===!0&&(r+=o.z),o.hasM===!0&&(s+=o.m),e+=o.x,t+=o.y,s+=o.m}let a={x:e/n.points.length,y:t/n.points.length,spatialReference:null};return a.spatialReference=n.spatialReference.toJSON(),n.hasZ===!0&&(a.z=r/n.points.length),n.hasM===!0&&(a.m=s/n.points.length),new g(a)}function v(n,e){return n.x*e.x+n.y*e.y}function k(n,e){return n.x*e.y-e.x*n.y}function x(n,e,t=0){for(;n<t;)n+=e;let r=t+e;for(;n>=r;)n-=e;return n}function z(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function J(n,e){return x(z(n,e),2*Math.PI)*(180/Math.PI)}function N(n,e){return x(Math.PI/2-z(n,e),2*Math.PI)*(180/Math.PI)}function P(n,e,t){let r={x:n.x-e.x,y:n.y-e.y},s={x:t.x-e.x,y:t.y-e.y};return Math.atan2(k(r,s),v(r,s))}function O(n,e,t){return p(x(P(n,e,t),2*Math.PI))}function b(n,e,t){return p(x(-1*P(n,e,t),2*Math.PI))}u[9002]=.3048,u[9003]=.3048006096012192,u[9095]=.3048007491;var c=[0,0];function F(n){for(let e=0;e<n.length;e++){let t=n[e];for(let s=0;s<t.length-1;s++){let a=t[s],i=t[s+1];for(let o=e+1;o<n.length;o++)for(let f=0;f<n[o].length-1;f++){let l=n[o][f],y=n[o][f+1];if(m(a,i,l,y,c)&&!(c[0]===a[0]&&c[1]===a[1]||c[0]===l[0]&&c[1]===l[1]||c[0]===i[0]&&c[1]===i[1]||c[0]===y[0]&&c[1]===y[1]))return!0}}let r=t.length;if(!(r<3))for(let s=0;s<=r-2;s++){let a=t[s],i=t[s+1];for(let o=s+2;o<=r-2;o++){let f=t[o],l=t[o+1];if(m(a,i,f,l,c)&&!(c[0]===a[0]&&c[1]===a[1]||c[0]===f[0]&&c[1]===f[1]||c[0]===i[0]&&c[1]===i[1]||c[0]===l[0]&&c[1]===l[1]))return!0}}}return!1}export{D as a,V as b,q as c,B as d,J as e,N as f,O as g,b as h,F as i};