import{a as h}from"./chunk-HPJ6EQFO.js";function k(t){return"r"in t&&"g"in t&&"b"in t}function g(t){return"h"in t&&"s"in t&&"v"in t}function b(t){return"l"in t&&"a"in t&&"b"in t}function m(t){return"l"in t&&"c"in t&&"h"in t}function w(t){return"x"in t&&"y"in t&&"z"in t}var x=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],A=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function M(t,o){let r=[],n,u;if(t[0].length!==o.length)throw new Error("dimensions do not match");let e=t.length,a=t[0].length,c=0;for(n=0;n<e;n++){for(c=0,u=0;u<a;u++)c+=t[n][u]*o[u];r.push(c)}return r}function d(t){let o=[t.r/255,t.g/255,t.b/255].map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4),r=M(x,o);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function i(t){let o=M(A,[t.x/100,t.y/100,t.z/100]).map(r=>{let n=r<=.0031308?12.92*r:1.055*r**.4166666666666667-.055;return Math.min(1,Math.max(n,0))});return{r:Math.round(255*o[0]),g:Math.round(255*o[1]),b:Math.round(255*o[2])}}function p(t){let o=[t.x/95.047,t.y/100,t.z/108.883].map(r=>r>.008856451679035631?r**.3333333333333333:7.787037037037035*r+.13793103448275862);return{l:116*o[1]-16,a:500*(o[0]-o[1]),b:200*(o[1]-o[2])}}function y(t){let o=t.l,r=[(o+16)/116+t.a/500,(o+16)/116,(o+16)/116-t.b/200].map(n=>n>6/29?n**3:3*(6/29)**2*(n-4/29));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function B(t){let o=t.l,r=t.a,n=t.b,u=Math.sqrt(r*r+n*n),e=Math.atan2(n,r);return e=e>0?e:e+2*Math.PI,{l:o,c:u,h:e}}function C(t){let o=t.l,r=t.c,n=t.h;return{l:o,a:r*Math.cos(n),b:r*Math.sin(n)}}function z(t){return p(d(t))}function G(t){return i(y(t))}function H(t){return B(p(d(t)))}function L(t){return i(y(C(t)))}function R(t){let o=t.r,r=t.g,n=t.b,u=Math.max(o,r,n),e=u-Math.min(o,r,n),a=u,c=e===0?0:u===o?(r-n)/e%6:u===r?(n-o)/e+2:(o-r)/e+4,l=e===0?0:e/a;return c<0&&(c+=6),c*=60,l*=100,a*=100/255,{h:c,s:l,v:a}}function q(t){let o=(t.h+360)%360/60,r=t.s/100,n=t.v/100*255,u=n*r,e=u*(1-Math.abs(o%2-1)),a;switch(Math.floor(o)){case 0:a={r:u,g:e,b:0};break;case 1:a={r:e,g:u,b:0};break;case 2:a={r:0,g:u,b:e};break;case 3:a={r:0,g:e,b:u};break;case 4:a={r:e,g:0,b:u};break;case 5:case 6:a={r:u,g:0,b:e};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+n-u),a.g=Math.round(a.g+n-u),a.b=Math.round(a.b+n-u),a}function s(t){return k(t)?t:m(t)?L(t):b(t)?G(t):w(t)?i(t):g(t)?q(t):t}function F(t){return g(t)?t:R(s(t))}function I(t){return b(t)?t:z(s(t))}function P(t){return m(t)?t:H(s(t))}function v(t){let{r:o,g:r,b:n,a:u}=t;return u<1&&(o=Math.round(u*o+255*(1-u)),r=Math.round(u*r+255*(1-u)),n=Math.round(u*n+255*(1-u))),new h({r:o,g:r,b:n})}function j(t,o){let{r,g:n,b:u}=o?.ignoreAlpha?t:v(t);return .2126*r+.7152*n+.0722*u}var f;(function(t){t[t.Low=160]="Low",t[t.High=225]="High"})(f||(f={}));export{s as a,F as b,I as c,P as d,j as e};
