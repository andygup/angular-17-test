"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[6215],{43548:(Mt,et,U)=>{U.d(et,{a:()=>Q,b:()=>N,c:()=>v,d:()=>S,e:()=>j,n:()=>T,s:()=>H,t:()=>X});var z=U(58466);function v(l,y,s){X(l.typedBuffer,y.typedBuffer,s,l.typedBufferStride,y.typedBufferStride)}function X(l,y,s,I=3,R=I){if(l.length/I!==Math.ceil(y.length/R))return z.c.error("source and destination buffers need to have the same number of elements"),l;const k=l.length/I,D=s[0],G=s[1],C=s[2],Y=s[4],A=s[5],x=s[6],P=s[8],st=s[9],ot=s[10],Z=s[12],it=s[13],tt=s[14];let ut=0,nt=0;for(let V=0;V<k;V++){const B=y[ut],ct=y[ut+1],dt=y[ut+2];l[nt]=D*B+Y*ct+P*dt+Z,l[nt+1]=G*B+A*ct+st*dt+it,l[nt+2]=C*B+x*ct+ot*dt+tt,ut+=R,nt+=I}return l}function N(l,y,s){Q(l.typedBuffer,y.typedBuffer,s,l.typedBufferStride,y.typedBufferStride)}function Q(l,y,s,I=3,R=I){if(l.length/I!==Math.ceil(y.length/R))return void z.c.error("source and destination buffers need to have the same number of elements");const k=l.length/I,D=s[0],G=s[1],C=s[2],Y=s[3],A=s[4],x=s[5],P=s[6],st=s[7],ot=s[8];let Z=0,it=0;for(let tt=0;tt<k;tt++){const ut=y[Z],nt=y[Z+1],V=y[Z+2];l[it]=D*ut+Y*nt+P*V,l[it+1]=G*ut+A*nt+st*V,l[it+2]=C*ut+x*nt+ot*V,Z+=R,it+=I}}function j(l,y,s){H(l.typedBuffer,y,s,l.typedBufferStride)}function H(l,y,s,I=3){const R=Math.min(l.length/I,y.count),k=y.typedBuffer,D=y.typedBufferStride;let G=0,C=0;for(let Y=0;Y<R;Y++)l[C]=s*k[G],l[C+1]=s*k[G+1],l[C+2]=s*k[G+2],G+=D,C+=I}function S(l,y){T(l.typedBuffer,y.typedBuffer,l.typedBufferStride,y.typedBufferStride)}function T(l,y,s=3,I=s){const R=Math.min(l.length/s,y.length/I);let k=0,D=0;for(let G=0;G<R;G++){const C=y[k],Y=y[k+1],A=y[k+2],x=C*C+Y*Y+A*A;if(x>0){const P=1/Math.sqrt(x);l[D]=P*C,l[D+1]=P*Y,l[D+2]=P*A}k+=I,D+=s}}Object.freeze(Object.defineProperty({__proto__:null,normalize:T,normalizeView:S,scale:H,scaleView:j,shiftRight:function d(l,y,s){const I=Math.min(l.count,y.count),R=l.typedBuffer,k=l.typedBufferStride,D=y.typedBuffer,G=y.typedBufferStride;let C=0,Y=0;for(let A=0;A<I;A++)R[Y]=D[C]>>s,R[Y+1]=D[C+1]>>s,R[Y+2]=D[C+2]>>s,C+=G,Y+=k},transformMat3:Q,transformMat3View:N,transformMat4:X,transformMat4View:v},Symbol.toStringTag,{value:"Module"}))},58248:(Mt,et,U)=>{U.d(et,{$z:()=>N,KF:()=>T,mi:()=>v});var z=U(40271);function v(l){if((0,z.kJ)(l)){if(l.length<z.c8)return l}else if(l.length<z.c8)return Array.from(l);let y=!0,s=!0;return l.some((I,R)=>(y=y&&0===I,s=s&&I===R,!y&&!s)),y?function ft(l){if(1===l)return H;if(l<z.c8)return new Array(l).fill(0);if(l>d.length){const y=Math.max(2*d.length,l);d=new Uint8Array(y)}return new Uint8Array(d.buffer,0,l)}(l.length):s?T(l.length):(0,z.kJ)(l)||l.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function X(l){let y=!0;for(const s of l){if(s>=65536)return(0,z.kJ)(l)?new Uint32Array(l):l;s>=256&&(y=!1)}return y?new Uint8Array(l):new Uint16Array(l)}(l):l}function N(l){return l<=z.c8?new Array(l):l<=65536?new Uint16Array(l):new Uint32Array(l)}let j=(()=>{const l=new Uint32Array(131072);for(let y=0;y<l.length;++y)l[y]=y;return l})();const H=[0],S=(()=>{const l=new Uint16Array(65536);for(let y=0;y<l.length;++y)l[y]=y;return l})();function T(l){if(1===l)return H;if(l<z.c8)return Array.from(new Uint16Array(S.buffer,0,l));if(l<S.length)return new Uint16Array(S.buffer,0,l);if(l>j.length){const y=Math.max(2*j.length,l);j=new Uint32Array(y);for(let s=0;s<j.length;s++)j[s]=s}return new Uint32Array(j.buffer,0,l)}let d=new Uint8Array(65536)},58466:(Mt,et,U)=>{U.d(et,{c:()=>v});const v=U(4703).Z.getLogger("esri.views.3d.support.buffer.math")},28955:(Mt,et,U)=>{U.d(et,{Ue:()=>j,nF:()=>y,zk:()=>d});var z=U(55117),v=U(16573),X=U(43589),N=U(8554),Q=U(65119);function j(A){return A?{origin:(0,N.g)(A.origin),vector:(0,N.g)(A.vector)}:{origin:(0,N.c)(),vector:(0,N.c)()}}function d(A,x,P=j()){return(0,X.c)(P.origin,A),(0,X.f)(P.vector,x,A),P}function y(A,x,P){return function I(A,x,P,st,ot){const{vector:Z,origin:it}=A,tt=(0,X.f)(Q.WM.get(),x,it),ut=(0,X.j)(Z,tt)/(0,X.m)(Z);return(0,X.i)(ot,Z,(0,z.uZ)(ut,P,st)),(0,X.g)(ot,ot,A.origin)}(A,x,0,1,P)}(0,N.c)(),(0,N.c)(),new v.x(()=>j())},36981:(Mt,et,U)=>{U.d(et,{c:()=>v});var z=U(68160);class v{constructor(){this.id=(0,z.D)()}}},80914:(Mt,et,U)=>{var z,v;U.d(et,{U:()=>z}),(v=z||(z={}))[v.Layer=0]="Layer",v[v.Object=1]="Object",v[v.Mesh=2]="Mesh",v[v.Line=3]="Line",v[v.Point=4]="Point",v[v.Material=5]="Material",v[v.Texture=6]="Texture",v[v.COUNT=7]="COUNT"},28433:(Mt,et,U)=>{U.d(et,{Z:()=>Pt});var z=U(89568),v=U(43589),X=U(58248),N=U(40271);function Q(M){if(M.length<N.c8)return Array.from(M);if((0,N.kJ)(M))return Float64Array.from(M);if(!("BYTES_PER_ELEMENT"in M))return Array.from(M);switch(M.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(M);case 2:return(0,N.Uc)(M)?Uint16Array.from(M):Int16Array.from(M);case 4:return Float32Array.from(M);default:return Float64Array.from(M)}}var j=U(15182),H=U(43029),S=U(8554),T=U(98694);class d{constructor(h,_,O){this.primitiveIndices=h,this._numIndexPerPrimitive=_,this.position=O,this._children=void 0,(0,T.hu)(h.length>=1),(0,T.hu)(3===O.size||4===O.size);const{data:E,size:K,indices:w}=O;(0,T.hu)(w.length%this._numIndexPerPrimitive==0),(0,T.hu)(w.length>=h.length*this._numIndexPerPrimitive);const W=h.length;let L=K*w[this._numIndexPerPrimitive*h[0]];ft.clear(),ft.push(L);const J=(0,S.f)(E[L],E[L+1],E[L+2]),b=(0,S.g)(J);for(let $=0;$<W;++$){const rt=this._numIndexPerPrimitive*h[$];for(let at=0;at<this._numIndexPerPrimitive;++at){L=K*w[rt+at],ft.push(L);let q=E[L];J[0]=Math.min(q,J[0]),b[0]=Math.max(q,b[0]),q=E[L+1],J[1]=Math.min(q,J[1]),b[1]=Math.max(q,b[1]),q=E[L+2],J[2]=Math.min(q,J[2]),b[2]=Math.max(q,b[2])}}this.bbMin=J,this.bbMax=b;const F=(0,v.p)((0,S.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(b[0]-J[0],b[1]-J[1]),b[2]-J[2]);let ht=this.radius*this.radius;for(let $=0;$<ft.length;++$){L=ft.at($);const rt=E[L]-F[0],at=E[L+1]-F[1],q=E[L+2]-F[2],mt=rt*rt+at*at+q*q;if(mt<=ht)continue;const _t=Math.sqrt(mt),vt=.5*(_t-this.radius);this.radius=this.radius+vt,ht=this.radius*this.radius;const pt=vt/_t;F[0]+=rt*pt,F[1]+=at*pt,F[2]+=q*pt}this.center=F,ft.clear()}getChildren(){if(this._children||(0,v.a)(this.bbMin,this.bbMax)<=1)return this._children;const h=(0,v.p)((0,S.c)(),this.bbMin,this.bbMax,.5),_=this.primitiveIndices.length,O=new Uint8Array(_),E=new Array(8);for(let b=0;b<8;++b)E[b]=0;const{data:K,size:w,indices:W}=this.position;for(let b=0;b<_;++b){let F=0;const ht=this._numIndexPerPrimitive*this.primitiveIndices[b];let $=w*W[ht],rt=K[$],at=K[$+1],q=K[$+2];for(let mt=1;mt<this._numIndexPerPrimitive;++mt){$=w*W[ht+mt];const _t=K[$],vt=K[$+1],pt=K[$+2];_t<rt&&(rt=_t),vt<at&&(at=vt),pt<q&&(q=pt)}rt<h[0]&&(F|=1),at<h[1]&&(F|=2),q<h[2]&&(F|=4),O[b]=F,++E[F]}let L=0;for(let b=0;b<8;++b)E[b]>0&&++L;if(L<2)return;const J=new Array(8);for(let b=0;b<8;++b)J[b]=E[b]>0?new Uint32Array(E[b]):void 0;for(let b=0;b<8;++b)E[b]=0;for(let b=0;b<_;++b){const F=O[b];J[F][E[F]++]=this.primitiveIndices[b]}this._children=new Array;for(let b=0;b<8;++b)void 0!==J[b]&&this._children.push(new d(J[b],this._numIndexPerPrimitive,this.position));return this._children}static prune(){ft.prune()}}const ft=new H.Z({deallocator:null});var l=U(36981),y=U(80914),s=U(16573),I=U(28955);function st(M,h,_){return(0,v.f)(it,h,M),(0,v.f)(tt,_,M),(0,v.l)((0,v.b)(it,it,tt))/2}U(65119),new s.x(I.Ue),new s.x(()=>function k(M){return M?{p0:(0,S.g)(M.p0),p1:(0,S.g)(M.p1),p2:(0,S.g)(M.p2)}:{p0:(0,S.c)(),p1:(0,S.c)(),p2:(0,S.c)()}}());const it=(0,S.c)(),tt=(0,S.c)(),B=(0,S.c)(),ct=(0,S.c)(),dt=(0,S.c)(),lt=(0,S.c)();var Et=U(68160);class It{constructor(h){this.channel=h,this.id=(0,Et.D)()}}var gt=U(55362);U(8648),(0,S.c)(),new Float32Array(6);class Pt extends l.c{constructor(h,_,O=null,E=y.U.Mesh,K=null,w=-1){super(),this.material=h,this.mapPositions=O,this.type=E,this.objectAndLayerIdColor=K,this.edgeIndicesLength=w,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[W,L]of _)this._attributes.set(W,{...L,indices:(0,X.mi)(L.indices)}),W===gt.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(W).indices.length:this.edgeIndicesLength)}instantiate(h={}){const _=new Pt(h.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((O,E)=>{O.exclusive=!1,_._attributes.set(E,O)}),_._boundingInfo=this._boundingInfo,_.transformation=h.transformation||this.transformation,_}get attributes(){return this._attributes}getMutableAttribute(h){let _=this._attributes.get(h);return _&&!_.exclusive&&(_={..._,exclusive:!0,data:Q(_.data)},this._attributes.set(h,_)),_}setAttributeData(h,_){const O=this._attributes.get(h);O&&this._attributes.set(h,{...O,exclusive:!0,data:_})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(h){return!!(this.type===y.U.Mesh?this._computeAttachmentOriginTriangles(h):this.type===y.U.Line?this._computeAttachmentOriginLines(h):this._computeAttachmentOriginPoints(h))&&(null!=this._transformation&&(0,v.e)(h,h,this._transformation),!0)}_computeAttachmentOriginTriangles(h){return function ut(M,h){if(!M)return!1;const{size:_,data:O,indices:E}=M;(0,v.s)(h,0,0,0),(0,v.s)(lt,0,0,0);let K=0,w=0;for(let W=0;W<E.length-2;W+=3){const L=E[W]*_,J=E[W+1]*_,b=E[W+2]*_;(0,v.s)(B,O[L],O[L+1],O[L+2]),(0,v.s)(ct,O[J],O[J+1],O[J+2]),(0,v.s)(dt,O[b],O[b+1],O[b+2]);const F=st(B,ct,dt);F?((0,v.g)(B,B,ct),(0,v.g)(B,B,dt),(0,v.i)(B,B,1/3*F),(0,v.g)(h,h,B),K+=F):((0,v.g)(lt,lt,B),(0,v.g)(lt,lt,ct),(0,v.g)(lt,lt,dt),w+=3)}return!(0===w&&0===K||(0!==K?((0,v.i)(h,h,1/K),0):0===w||((0,v.i)(h,lt,1/w),0)))}(this.attributes.get(gt.T.POSITION),h)}_computeAttachmentOriginLines(h){const _=this.attributes.get(gt.T.POSITION);return function V(M,h,_){if(!M)return!1;(0,v.s)(_,0,0,0),(0,v.s)(lt,0,0,0);let O=0,E=0;const{size:K,data:w,indices:W}=M,L=W.length-1,J=L+(h?2:0);for(let b=0;b<J;b+=2){const ht=W[b<L?b:L]*K,$=W[b<L?b+1:0]*K;B[0]=w[ht],B[1]=w[ht+1],B[2]=w[ht+2],ct[0]=w[$],ct[1]=w[$+1],ct[2]=w[$+2],(0,v.i)(B,(0,v.g)(B,B,ct),.5);const rt=(0,v.r)(B,ct);rt>0?((0,v.g)(_,_,(0,v.i)(B,B,rt)),O+=rt):0===O&&((0,v.g)(lt,lt,B),E++)}return 0!==O?((0,v.i)(_,_,1/O),!0):0!==E&&((0,v.i)(_,lt,1/E),!0)}(_,function St(M,h){return!(!("isClosed"in M)||!M.isClosed)&&h.indices.length>2}(this.material.parameters,_),h)}_computeAttachmentOriginPoints(h){return function nt(M,h){if(!M)return!1;const{size:_,data:O,indices:E}=M;(0,v.s)(h,0,0,0);let K=-1,w=0;for(let W=0;W<E.length;W++){const L=E[W]*_;K!==L&&(h[0]+=O[L],h[1]+=O[L+1],h[2]+=O[L+2],w++),K=L}return w>1&&(0,v.i)(h,h,1/w),w>0}(this.attributes.get(gt.T.POSITION),h)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const h=this.attributes.get(gt.T.POSITION);if(!h||0===h.indices.length)return null;const _=this.type===y.U.Mesh?3:1;(0,T.hu)(h.indices.length%_==0,"Indexing error: "+h.indices.length+" not divisible by "+_);const O=(0,X.KF)(h.indices.length/_);return new d(O,_,h)}get transformation(){return this._transformation??z.I}set transformation(h){this._transformation=h&&h!==z.I?(0,z.b)(h):null}addHighlight(){const h=new It(j.V_.Highlight);return this.highlights=function At(M,h){return null==M&&(M=[]),M.push(h),M}(this.highlights,h),h}removeHighlight(h){this.highlights=function Ot(M,h){if(null==M)return null;const _=M.filter(O=>O!==h);return 0===_.length?null:_}(this.highlights,h)}}},98694:(Mt,et,U)=>{U.d(et,{hu:()=>j,yK:()=>S}),U(51675),U(70993),(0,U(79516).c)();class Q{constructor(I){this.message=I}toString(){return`AssertException: ${this.message}`}}function j(s,I){if(!s){I=I||"Assertion";const R=new Error(I).stack;throw new Q(`${I} at ${R}`)}}function S(s,I,R,k){let D,G=(R[0]-s[0])/I[0],C=(k[0]-s[0])/I[0];G>C&&(D=G,G=C,C=D);let Y=(R[1]-s[1])/I[1],A=(k[1]-s[1])/I[1];if(Y>A&&(D=Y,Y=A,A=D),G>A||Y>C)return!1;Y>G&&(G=Y),A<C&&(C=A);let x=(R[2]-s[2])/I[2],P=(k[2]-s[2])/I[2];return x>P&&(D=x,x=P,P=D),!(G>P||x>C||(P<C&&(C=P),C<0))}},15182:(Mt,et,U)=>{var z,v,X,N,Q,j,H,S,T,d;U.d(et,{Gv:()=>v,Iq:()=>S,JJ:()=>H,Rw:()=>N,Ti:()=>T,V_:()=>j,Vr:()=>z,hU:()=>Q}),(d=z||(z={}))[d.None=0]="None",d[d.Front=1]="Front",d[d.Back=2]="Back",d[d.COUNT=3]="COUNT",function(d){d[d.Less=0]="Less",d[d.Lequal=1]="Lequal",d[d.COUNT=2]="COUNT"}(v||(v={})),function(d){d[d.BACKGROUND=0]="BACKGROUND",d[d.UPDATE=1]="UPDATE"}(X||(X={})),function(d){d[d.NOT_LOADED=0]="NOT_LOADED",d[d.LOADING=1]="LOADING",d[d.LOADED=2]="LOADED"}(N||(N={})),function(d){d[d.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",d[d.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(Q||(Q={})),function(d){d[d.Highlight=0]="Highlight",d[d.MaskOccludee=1]="MaskOccludee",d[d.COUNT=2]="COUNT"}(j||(j={})),function(d){d[d.Blend=0]="Blend",d[d.Opaque=1]="Opaque",d[d.Mask=2]="Mask",d[d.MaskBlend=3]="MaskBlend",d[d.COUNT=4]="COUNT"}(H||(H={})),function(d){d[d.OFF=0]="OFF",d[d.ON=1]="ON"}(S||(S={})),function(d){d.DDS_ENCODING="image/vnd-ms.dds",d.KTX2_ENCODING="image/ktx2",d.BASIS_ENCODING="image/x.basis"}(T||(T={}))},8648:(Mt,et,U)=>{function z(j,H,S){for(let T=0;T<S;++T)H[2*T]=j[T],H[2*T+1]=j[T]-H[2*T]}function X(j,H){const S=j.length;for(let T=0;T<S;++T)Q[0]=j[T],H[T]=Q[0];return H}function N(j,H){const S=j.length;for(let T=0;T<S;++T)Q[0]=j[T],Q[1]=j[T]-Q[0],H[T]=Q[1];return H}U.d(et,{GB:()=>N,LF:()=>z,U8:()=>X});const Q=new Float32Array(2)}}]);