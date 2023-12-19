import{p as _}from"./chunk-465DRXTW.js";var V=_.getLogger("esri.views.3d.support.buffer.math");function O(t,r,e){z(t.typedBuffer,r.typedBuffer,e,t.typedBufferStride,r.typedBufferStride)}function z(t,r,e,n=3,s=n){if(t.length/n!==Math.ceil(r.length/s))return V.error("source and destination buffers need to have the same number of elements"),t;let u=t.length/n,i=e[0],a=e[1],o=e[2],f=e[4],d=e[5],h=e[6],p=e[8],S=e[9],M=e[10],m=e[12],y=e[13],g=e[14],c=0,l=0;for(let B=0;B<u;B++){let b=r[c],v=r[c+1],w=r[c+2];t[l]=i*b+f*v+p*w+m,t[l+1]=a*b+d*v+S*w+y,t[l+2]=o*b+h*v+M*w+g,c+=s,l+=n}return t}function q(t,r,e){L(t.typedBuffer,r.typedBuffer,e,t.typedBufferStride,r.typedBufferStride)}function L(t,r,e,n=3,s=n){if(t.length/n!==Math.ceil(r.length/s))return void V.error("source and destination buffers need to have the same number of elements");let u=t.length/n,i=e[0],a=e[1],o=e[2],f=e[3],d=e[4],h=e[5],p=e[6],S=e[7],M=e[8],m=0,y=0;for(let g=0;g<u;g++){let c=r[m],l=r[m+1],B=r[m+2];t[y]=i*c+f*l+p*B,t[y+1]=a*c+d*l+S*B,t[y+2]=o*c+h*l+M*B,m+=s,y+=n}}function P(t,r,e){j(t.typedBuffer,r,e,t.typedBufferStride)}function j(t,r,e,n=3){let s=Math.min(t.length/n,r.count),u=r.typedBuffer,i=r.typedBufferStride,a=0,o=0;for(let f=0;f<s;f++)t[o]=e*u[a],t[o+1]=e*u[a+1],t[o+2]=e*u[a+2],a+=i,o+=n}function R(t,r){x(t.typedBuffer,r.typedBuffer,t.typedBufferStride,r.typedBufferStride)}function x(t,r,e=3,n=e){let s=Math.min(t.length/e,r.length/n),u=0,i=0;for(let a=0;a<s;a++){let o=r[u],f=r[u+1],d=r[u+2],h=o*o+f*f+d*d;if(h>0){let p=1/Math.sqrt(h);t[i]=p*o,t[i+1]=p*f,t[i+2]=p*d}u+=n,i+=e}}function T(t,r,e){let n=Math.min(t.count,r.count),s=t.typedBuffer,u=t.typedBufferStride,i=r.typedBuffer,a=r.typedBufferStride,o=0,f=0;for(let d=0;d<n;d++)s[f]=i[o]>>e,s[f+1]=i[o+1]>>e,s[f+2]=i[o+2]>>e,o+=a,f+=u}var D=Object.freeze(Object.defineProperty({__proto__:null,normalize:x,normalizeView:R,scale:j,scaleView:P,shiftRight:T,transformMat3:L,transformMat3View:q,transformMat4:z,transformMat4View:O},Symbol.toStringTag,{value:"Module"}));export{V as a,O as b,z as c,q as d,L as e,P as f,j as g,R as h,x as i};
