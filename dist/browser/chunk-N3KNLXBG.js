import{b as l}from"./chunk-EJ3VIBAJ.js";function s(t,a,n=0){let o=l(t,0,i);for(let r=0;r<4;r++)a[n+r]=Math.floor(256*p(o*f[r]))}function e(t,a=0){let n=0;for(let o=0;o<4;o++)n+=t[a+o]*c[o];return n}var f=[1,256,65536,16777216],c=[1/256,1/65536,1/16777216,1/4294967296],i=e(new Uint8ClampedArray([255,255,255,255]));function p(t){return t-Math.floor(t)}export{s as a,e as b};