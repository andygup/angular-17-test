"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[9740],{93530:(q,W,d)=>{function O(){return[1,0,0,0,1,0,0,0,1]}function R(b,M,x,D,I,K,g,E,p){return[b,M,x,D,I,K,g,E,p]}function F(b,M){return new Float64Array(b,M,9)}d.d(W,{a:()=>O,c:()=>F,f:()=>R}),Object.freeze(Object.defineProperty({__proto__:null,clone:function L(b){return[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8]]},create:O,createView:F,fromValues:R},Symbol.toStringTag,{value:"Module"}))},89568:(q,W,d)=>{function O(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function L(M){return[M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12],M[13],M[14],M[15]]}function F(M,x){return new Float64Array(M,x,16)}d.d(W,{I:()=>y,a:()=>O,b:()=>L,c:()=>F});const y=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:y,clone:L,create:O,createView:F,fromValues:function R(M,x,D,I,K,g,E,p,A,j,P,m,S,U,V,Y){return[M,x,D,I,K,g,E,p,A,j,P,m,S,U,V,Y]}},Symbol.toStringTag,{value:"Module"}))},7577:(q,W,d)=>{function O(){return[0,0,0,1]}function L(M){return[M[0],M[1],M[2],M[3]]}function F(M,x){return new Float64Array(M,x,4)}d.d(W,{I:()=>y,a:()=>O,b:()=>L,c:()=>F});const y=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:y,clone:L,create:O,createView:F,fromValues:function R(M,x,D,I){return[M,x,D,I]}},Symbol.toStringTag,{value:"Module"}))},6671:(q,W,d)=>{d.d(W,{a:()=>z,c:()=>A,g:()=>$,h:()=>m,j:()=>nt,n:()=>it}),d(14007);var L=d(4703),R=d(55117),F=d(60838),y=d(43589),b=d(8554),M=d(70993),x=d(79516),D=d(52593),I=d(48621),K=d(69349),g=d(4267),E=d(65119);const p=A();function A(){return(0,x.c)()}const j=M.e,P=M.e;function m(u,f=A()){return(0,M.c)(f,u)}function z(u){return u[3]}function $(u){return u}function H(u,f,l){if(null==f||!G(u,f,Z))return!1;let{t0:h,t1:_}=Z;if((h<0||_<h&&_>0)&&(h=_),h<0)return!1;if(l){const{origin:v,direction:B}=f;l[0]=v[0]+B[0]*h,l[1]=v[1]+B[1]*h,l[2]=v[2]+B[2]*h}return!0}const Z={t0:0,t1:0};function G(u,f,l){const{origin:h,direction:_}=f,v=et;v[0]=h[0]-u[0],v[1]=h[1]-u[1],v[2]=h[2]-u[2];const B=_[0]*_[0]+_[1]*_[1]+_[2]*_[2];if(0===B)return!1;const w=2*(_[0]*v[0]+_[1]*v[1]+_[2]*v[2]),N=w*w-4*B*(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]-u[3]*u[3]);if(N<0)return!1;const Q=Math.sqrt(N);return l.t0=(-w-Q)/(2*B),l.t1=(-w+Q)/(2*B),!0}const et=(0,b.c)();function nt(u,f){return H(u,f,null)}function rt(u,f,l){const h=E.WM.get(),_=E.MP.get();(0,y.b)(h,f.origin,f.direction);const v=z(u);(0,y.b)(l,h,f.origin),(0,y.i)(l,l,1/(0,y.l)(l)*v);const B=Mt(u,f.origin),w=(0,g.EU)(f.origin,l);return(0,F.c)(_,w+B,h),(0,y.e)(l,l,_),l}function ut(u,f,l){const h=(0,y.f)(E.WM.get(),f,u),_=(0,y.i)(E.WM.get(),h,u[3]/(0,y.l)(h));return(0,y.g)(l,_,u)}function Mt(u,f){const l=(0,y.f)(E.WM.get(),f,u),h=(0,y.l)(l),_=z(u),v=_+Math.abs(_-h);return(0,R.ZF)(_/v)}const gt=(0,b.c)();function pt(u,f,l,h){const _=(0,y.f)(gt,f,u);switch(l){case I.R.X:{const v=(0,R.jE)(_,gt)[2];return(0,y.s)(h,-Math.sin(v),Math.cos(v),0)}case I.R.Y:{const v=(0,R.jE)(_,gt),B=v[1],w=v[2],N=Math.sin(B);return(0,y.s)(h,-N*Math.cos(w),-N*Math.sin(w),Math.cos(B))}case I.R.Z:return(0,y.n)(h,_);default:return}}function Et(u,f){const l=(0,y.f)(ht,f,u);return(0,y.l)(l)-u[3]}function it(u,f){const l=(0,y.a)(u,f),h=z(u);return l<=h*h}const ht=(0,b.c)(),ft=A();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:Et,angleToSilhouette:Mt,axisAt:pt,clear:function V(u){u[0]=u[1]=u[2]=u[3]=0},closestPoint:function vt(u,f,l){return H(u,f,l)?l:((0,K.JI)(f,u,l),ut(u,l,l))},closestPointOnSilhouette:rt,containsPoint:it,copy:m,create:A,distanceToSilhouette:function T(u,f){const l=(0,y.f)(E.WM.get(),f,u),h=(0,y.m)(l);return Math.sqrt(Math.abs(h-u[3]*u[3]))},elevate:function lt(u,f,l){return u!==l&&(0,y.c)(l,u),l[3]=u[3]+f,l},equals:P,exactEquals:j,fromCenterAndRadius:function S(u,f){return(0,x.f)(u[0],u[1],u[2],f)},fromRadius:function Y(u,f){return u[0]=u[1]=u[2]=0,u[3]=f,u},fromValues:function ot(u,f,l,h){return(0,x.f)(u,f,l,h)},getCenter:$,getRadius:z,intersectLine:function tt(u,f,l){const h=(0,K.zk)(f,l);if(!G(u,h,Z))return[];const{origin:_,direction:v}=h,{t0:B,t1:w}=Z,N=Q=>{const st=(0,b.c)();return(0,y.q)(st,_,v,Q),ut(u,st,st)};return Math.abs(B-w)<(0,D.g)()?[N(B)]:[N(B),N(w)]},intersectRay:H,intersectRayClosestSilhouette:function dt(u,f,l){if(H(u,f,l))return l;const h=rt(u,f,E.WM.get());return(0,y.g)(l,f.origin,(0,y.i)(E.WM.get(),f.direction,(0,y.o)(f.origin,h)/(0,y.l)(f.direction))),l},intersectsRay:nt,projectPoint:ut,setAltitudeAt:function Pt(u,f,l,h){const _=Et(u,f),v=pt(u,f,I.R.Z,ht),B=(0,y.i)(ht,v,l-_);return(0,y.g)(h,f,B)},setExtent:function k(u,f,l){return L.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),u===l?l:m(u,l)},tmpSphere:ft,union:function St(u,f,l=A()){const h=(0,y.o)(u,f),_=u[3],v=f[3];return h+v<_?((0,M.c)(l,u),l):h+_<v?((0,M.c)(l,f),l):((0,y.p)(l,u,f,(h+v-_)/(2*h)),l[3]=(h+_+v)/2,l)},wrap:function U(u){return u}},Symbol.toStringTag,{value:"Module"}))},43548:(q,W,d)=>{d.d(W,{a:()=>y,b:()=>F,c:()=>L,d:()=>x,e:()=>b,n:()=>D,s:()=>M,t:()=>R});var O=d(58466);function L(g,E,p){R(g.typedBuffer,E.typedBuffer,p,g.typedBufferStride,E.typedBufferStride)}function R(g,E,p,A=3,j=A){if(g.length/A!==Math.ceil(E.length/j))return O.c.error("source and destination buffers need to have the same number of elements"),g;const P=g.length/A,m=p[0],S=p[1],U=p[2],V=p[4],Y=p[5],z=p[6],$=p[8],ot=p[9],lt=p[10],k=p[12],H=p[13],tt=p[14];let Z=0,G=0;for(let et=0;et<P;et++){const nt=E[Z],dt=E[Z+1],rt=E[Z+2];g[G]=m*nt+V*dt+$*rt+k,g[G+1]=S*nt+Y*dt+ot*rt+H,g[G+2]=U*nt+z*dt+lt*rt+tt,Z+=j,G+=A}return g}function F(g,E,p){y(g.typedBuffer,E.typedBuffer,p,g.typedBufferStride,E.typedBufferStride)}function y(g,E,p,A=3,j=A){if(g.length/A!==Math.ceil(E.length/j))return void O.c.error("source and destination buffers need to have the same number of elements");const P=g.length/A,m=p[0],S=p[1],U=p[2],V=p[3],Y=p[4],z=p[5],$=p[6],ot=p[7],lt=p[8];let k=0,H=0;for(let tt=0;tt<P;tt++){const Z=E[k],G=E[k+1],et=E[k+2];g[H]=m*Z+V*G+$*et,g[H+1]=S*Z+Y*G+ot*et,g[H+2]=U*Z+z*G+lt*et,k+=j,H+=A}}function b(g,E,p){M(g.typedBuffer,E,p,g.typedBufferStride)}function M(g,E,p,A=3){const j=Math.min(g.length/A,E.count),P=E.typedBuffer,m=E.typedBufferStride;let S=0,U=0;for(let V=0;V<j;V++)g[U]=p*P[S],g[U+1]=p*P[S+1],g[U+2]=p*P[S+2],S+=m,U+=A}function x(g,E){D(g.typedBuffer,E.typedBuffer,g.typedBufferStride,E.typedBufferStride)}function D(g,E,p=3,A=p){const j=Math.min(g.length/p,E.length/A);let P=0,m=0;for(let S=0;S<j;S++){const U=E[P],V=E[P+1],Y=E[P+2],z=U*U+V*V+Y*Y;if(z>0){const $=1/Math.sqrt(z);g[m]=$*U,g[m+1]=$*V,g[m+2]=$*Y}P+=A,m+=p}}Object.freeze(Object.defineProperty({__proto__:null,normalize:D,normalizeView:x,scale:M,scaleView:b,shiftRight:function I(g,E,p){const A=Math.min(g.count,E.count),j=g.typedBuffer,P=g.typedBufferStride,m=E.typedBuffer,S=E.typedBufferStride;let U=0,V=0;for(let Y=0;Y<A;Y++)j[V]=m[U]>>p,j[V+1]=m[U+1]>>p,j[V+2]=m[U+2]>>p,U+=S,V+=P},transformMat3:y,transformMat3View:F,transformMat4:R,transformMat4View:L},Symbol.toStringTag,{value:"Module"}))},38737:(q,W,d)=>{var O,L;d.d(W,{Y:()=>O}),(L=O||(O={}))[L.KILOBYTES=1024]="KILOBYTES",L[L.MEGABYTES=1048576]="MEGABYTES",L[L.GIGABYTES=1073741824]="GIGABYTES"},16573:(q,W,d)=>{d.d(W,{x:()=>L});var O=d(38119);class L{constructor(y){this._allocator=y,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,O.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const y=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(y,this._items.length),this._itemsPtr=0}_grow(){for(let y=0;y<Math.max(8,Math.min(this._items.length,R));y++)this._items.push(this._allocator())}}const R=1024},58466:(q,W,d)=>{d.d(W,{c:()=>L});const L=d(4703).Z.getLogger("esri.views.3d.support.buffer.math")},69349:(q,W,d)=>{d.d(W,{JI:()=>A,Ue:()=>b,re:()=>D,zk:()=>K}),d(57678);var L=d(16573),R=d(43589),F=d(8554);function b(P){return P?M((0,F.g)(P.origin),(0,F.g)(P.direction)):M((0,F.c)(),(0,F.c)())}function M(P,m){return{origin:P,direction:m}}function D(P,m){const S=j.get();return S.origin=P,S.direction=m,S}function K(P,m,S=b()){return(0,R.c)(S.origin,P),(0,R.f)(S.direction,m,P),S}function A(P,m,S){const U=(0,R.j)(P.direction,(0,R.f)(S,m,P.origin));return(0,R.g)(S,P.origin,(0,R.i)(S,P.direction,U)),S}d(65119);const j=new L.x(()=>b())},4267:(q,W,d)=>{d.d(W,{EU:()=>b});var O=d(55117),L=d(43589),R=d(8554);function b(I,K){const g=(0,L.j)(I,K)/((0,L.l)(I)*(0,L.l)(K));return-(0,O.ZF)(g)}(0,R.c)(),(0,R.c)()},65119:(q,W,d)=>{d.d(W,{MP:()=>A,WM:()=>g});var O=d(38737),L=d(38119),R=d(93530),F=d(89568),y=d(7577),b=d(51675),M=d(8554),x=d(79516);class D{constructor(m,S,U){this._itemByteSize=m,this._itemCreate=S,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(U/this._itemByteSize)}get(){0===this._itemsPtr&&(0,L.Y)(()=>this._reset());const m=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=m;){const S=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let U=0;U<this._itemsPerBuffer;++U)this._items.push(this._itemCreate(S,U*this._itemByteSize));this._buffers.push(S)}return this._items[this._itemsPtr++]}_reset(){const m=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>m;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(m=I){return new D(16,b.c,m)}static createVec3f64(m=I){return new D(24,M.a,m)}static createVec4f64(m=I){return new D(32,x.a,m)}static createMat3f64(m=I){return new D(72,R.c,m)}static createMat4f64(m=I){return new D(128,F.c,m)}static createQuatf64(m=I){return new D(32,y.c,m)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const I=4*O.Y.KILOBYTES,g=(D.createVec2f64(),D.createVec3f64()),A=(D.createVec4f64(),D.createMat3f64(),D.createMat4f64());D.createQuatf64()},19740:(q,W,d)=>{d.r(W),d.d(W,{destroyContext:()=>vt,dracoDecompressPointCloudData:()=>$,filterObbsForModifications:()=>lt,filterObbsForModificationsSync:()=>Et,initialize:()=>St,interpretObbModificationResults:()=>pt,process:()=>Y,project:()=>et,setLegacySchema:()=>Z,setModifications:()=>H,setModificationsSync:()=>Mt,test:()=>Lt,transformNormals:()=>dt});var M,x,u,O=d(15861),L=d(43814),R=d(93404),F=d(99279),y=d(81255),b=d(43548);(u=M||(M={}))[u.None=0]="None",u[u.Int16=1]="Int16",u[u.Int32=2]="Int32",function(u){u[u.Replace=0]="Replace",u[u.Outside=1]="Outside",u[u.Inside=2]="Inside",u[u.Finished=3]="Finished"}(x||(x={}));var D=d(98930);function K(u){return(0,D.V)(`esri/libs/i3s/${u}`)}let g;var A,j,P,m,S;function Y(u){return z.apply(this,arguments)}function z(){return z=(0,O.Z)(function*(u){T=yield ft();const f=[u.geometryBuffer];return{result:gt(T,u,f),transferList:f}}),z.apply(this,arguments)}function $(u){return ot.apply(this,arguments)}function ot(){return ot=(0,O.Z)(function*(u){T=yield ft();const f=[u.geometryBuffer],{geometryBuffer:l}=u,h=l.byteLength,_=T._malloc(h),v=new Uint8Array(T.HEAPU8.buffer,_,h);v.set(new Uint8Array(l));const B=T.dracoDecompressPointCloudData(_,v.byteLength);if(T._free(_),B.error.length>0)throw new Error(`i3s.wasm: ${B.error}`);const w=B.featureIds?.length>0?B.featureIds.slice():null,N=B.positions.slice();return w&&f.push(w.buffer),f.push(N.buffer),{result:{positions:N,featureIds:w},transferList:f}}),ot.apply(this,arguments)}function lt(u){return k.apply(this,arguments)}function k(){return k=(0,O.Z)(function*(u){yield ft(),Et(u);const f={buffer:u.buffer};return{result:f,transferList:[f.buffer]}}),k.apply(this,arguments)}function H(u){return tt.apply(this,arguments)}function tt(){return tt=(0,O.Z)(function*(u){yield ft(),Mt(u)}),tt.apply(this,arguments)}function Z(u){return G.apply(this,arguments)}function G(){return G=(0,O.Z)(function*(u){T=yield ft(),T.setLegacySchema(u.context,u.jsonSchema)}),G.apply(this,arguments)}function et(u){return nt.apply(this,arguments)}function nt(){return nt=(0,O.Z)(function*(u){const{localMatrix:f,origin:l,positions:h,vertexSpace:_,localMode:v}=u,B=L.Z.fromJSON(u.inSpatialReference),w=L.Z.fromJSON(u.outSpatialReference);let N;if("georeferenced"===_.type){const[{projectBuffer:J},{initializeProjection:yt}]=yield Promise.all([Promise.resolve().then(d.bind(d,83639)),Promise.resolve().then(d.bind(d,83821))]);yield yt(B,w),N=new Float64Array(h.length),J(h,B,0,N,w,0,N.length/3)}else{const J="georeferencedRelative"===_.type?F.Z.fromJSON(_):y.Z.fromJSON(_),{project:yt}=yield Promise.all([d.e(1716),d.e(2859)]).then(d.bind(d,92859));N=(0,R.mB)(yt({positions:h,transform:f?{localMatrix:f}:void 0,vertexSpace:J,inSpatialReference:B,outSpatialReference:w,localMode:v}))}const Q=N.length,[st,Ot,bt]=l;for(let J=0;J<Q;J+=3)N[J]-=st,N[J+1]-=Ot,N[J+2]-=bt;return{result:{projected:N,original:h},transferList:[N.buffer,h.buffer]}}),nt.apply(this,arguments)}function dt(u){return rt.apply(this,arguments)}function rt(){return rt=(0,O.Z)(function*({normalMatrix:u,normals:f}){const l=new Float32Array(f.length);return(0,b.a)(l,f,u),(0,b.n)(l,l),{result:{transformed:l,original:f},transferList:[l.buffer,f.buffer]}}),rt.apply(this,arguments)}function vt(u){Pt(u)}let ut,T;function Mt(u){if(!T)return;const f=u.modifications,l=T._malloc(8*f.length),h=new Float64Array(T.HEAPU8.buffer,l,f.length);for(let _=0;_<f.length;++_)h[_]=f[_];T.setModifications(u.context,l,f.length,u.isGeodetic),T._free(l)}function gt(u,f,l){const{context:h,localOrigin:_,globalTrafo:v,mbs:B,obb:w,elevationOffset:N,geometryBuffer:Q,geometryDescriptor:st,indexToVertexProjector:Ot,vertexToRenderProjector:bt}=f,J=u._malloc(Q.byteLength),Bt=u._malloc(33*Float64Array.BYTES_PER_ELEMENT),Dt=new Uint8Array(u.HEAPU8.buffer,J,Q.byteLength);Dt.set(new Uint8Array(Q));const X=new Float64Array(u.HEAPU8.buffer,Bt,33);it(X,_);let ct=X.byteOffset+3*X.BYTES_PER_ELEMENT,at=new Float64Array(X.buffer,ct);it(at,v),ct+=16*X.BYTES_PER_ELEMENT,at=new Float64Array(X.buffer,ct),it(at,B),ct+=4*X.BYTES_PER_ELEMENT,null!=w&&(at=new Float64Array(X.buffer,ct),it(at,w.center),ct+=3*X.BYTES_PER_ELEMENT,at=new Float64Array(X.buffer,ct),it(at,w.halfSize),ct+=3*X.BYTES_PER_ELEMENT,at=new Float64Array(X.buffer,ct),it(at,w.quaternion));const Rt=st,xt={isDraco:!1,isLegacy:!1,color:f.layouts.some(mt=>mt.some(_t=>"color"===_t.name)),normal:f.needNormals&&f.layouts.some(mt=>mt.some(_t=>"normalCompressed"===_t.name)),uv0:f.layouts.some(mt=>mt.some(_t=>"uv0"===_t.name)),uvRegion:f.layouts.some(mt=>mt.some(_t=>"uvRegion"===_t.name)),featureIndex:Rt.featureIndex},C=u.process(h,!!f.obb,J,Dt.byteLength,Rt,xt,Bt,N,Ot,bt,f.normalReferenceFrame);if(u._free(Bt),u._free(J),C.error.length>0)throw new Error(`i3s.wasm: ${C.error}`);if(C.discarded)return null;const It=C.componentOffsets.length>0?C.componentOffsets.slice():null,At=C.featureIds.length>0?C.featureIds.slice():null,wt=C.anchorIds.length>0?Array.from(C.anchorIds):null,Nt=C.anchors.length>0?Array.from(C.anchors):null,Tt=C.interleavedVertedData.slice().buffer,Ut=C.indicesType===M.Int16?new Uint16Array(C.indices.buffer,C.indices.byteOffset,C.indices.byteLength/2).slice():new Uint32Array(C.indices.buffer,C.indices.byteOffset,C.indices.byteLength/4).slice(),Ct=C.positions.slice(),jt=C.positionIndicesType===M.Int16?new Uint16Array(C.positionIndices.buffer,C.positionIndices.byteOffset,C.positionIndices.byteLength/2).slice():new Uint32Array(C.positionIndices.buffer,C.positionIndices.byteOffset,C.positionIndices.byteLength/4).slice(),Wt={layout:f.layouts[0],interleavedVertexData:Tt,indices:Ut,hasColors:C.hasColors,hasModifications:C.hasModifications,positionData:{data:Ct,indices:jt}};return At&&l.push(At.buffer),It&&l.push(It.buffer),l.push(Tt),l.push(Ut.buffer),l.push(Ct.buffer),l.push(jt.buffer),{componentOffsets:It,featureIds:At,anchorIds:wt,anchors:Nt,transformedGeometry:Wt,obb:C.obb}}function pt(u){return 0===u?j.Unmodified:1===u?j.PotentiallyModified:2===u?j.Culled:j.Unknown}function Et(u){if(!T)return;const{context:f,buffer:l}=u,h=T._malloc(l.byteLength),_=l.byteLength/Float64Array.BYTES_PER_ELEMENT,v=new Float64Array(T.HEAPU8.buffer,h,_),B=new Float64Array(l);v.set(B),T.filterOBBs(f,h,_),B.set(v),T._free(h)}function Pt(u){T&&0===T.destroy(u)&&(T=null)}function it(u,f){for(let l=0;l<f.length;++l)u[l]=f[l]}function St(){return ht.apply(this,arguments)}function ht(){return(ht=(0,O.Z)(function*(){T||(yield ft())})).apply(this,arguments)}function ft(){return T?Promise.resolve(T):(ut||(ut=function I(){return g||(g=new Promise(u=>d.e(8249).then(d.bind(d,8249)).then(f=>f.i).then(({default:f})=>{const l=f({locateFile:K,onRuntimeInitialized:()=>u(l)});delete l.then})).catch(u=>{throw u})),g}().then(u=>(T=u,ut=null,T))),ut)}d(6671),function(u){u[u.Unmodified=0]="Unmodified",u[u.Culled=1]="Culled",u[u.NotChecked=2]="NotChecked"}(A||(A={})),function(u){u[u.Unmodified=0]="Unmodified",u[u.PotentiallyModified=1]="PotentiallyModified",u[u.Culled=2]="Culled",u[u.Unknown=3]="Unknown",u[u.NotChecked=4]="NotChecked"}(j||(j={})),function(u){u[u.Unknown=0]="Unknown",u[u.Uncached=1]="Uncached",u[u.Cached=2]="Cached"}(P||(P={})),function(u){u[u.None=0]="None",u[u.MaxScreenThreshold=1]="MaxScreenThreshold",u[u.ScreenSpaceRelative=2]="ScreenSpaceRelative",u[u.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",u[u.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(m||(m={})),function(u){u[u.Hole=0]="Hole",u[u.Leaf=1]="Leaf"}(S||(S={}));const Lt={transform:(u,f)=>T&&gt(T,u,f),destroy:Pt}}}]);