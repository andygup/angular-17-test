"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4985,7545],{27545:(j,U,l)=>{l.d(U,{N:()=>I});const I={convertToGEGeometry:function P(p,c){return null==c?null:p.convertJSONToGeometry(c)},exportPoint:function o(p,c,A){const S=new u(p.getPointX(c),p.getPointY(c),A),O=p.hasZ(c),C=p.hasM(c);return O&&(S.z=p.getPointZ(c)),C&&(S.m=p.getPointM(c)),S},exportPolygon:function g(p,c,A){return new E(p.exportPaths(c),A,p.hasZ(c),p.hasM(c))},exportPolyline:function s(p,c,A){return new a(p.exportPaths(c),A,p.hasZ(c),p.hasM(c))},exportMultipoint:function y(p,c,A){return new h(p.exportPoints(c),A,p.hasZ(c),p.hasM(c))},exportExtent:function v(p,c,A){const S=p.hasZ(c),O=p.hasM(c),C=new b(p.getXMin(c),p.getYMin(c),p.getXMax(c),p.getYMax(c),A);if(S){const z=p.getZExtent(c);C.zmin=z.vmin,C.zmax=z.vmax}if(O){const z=p.getMExtent(c);C.mmin=z.vmin,C.mmax=z.vmax}return C}};class u{constructor(c,A,S){this.x=c,this.y=A,this.spatialReference=S,this.z=void 0,this.m=void 0}}class E{constructor(c,A,S,O){this.rings=c,this.spatialReference=A,this.hasZ=void 0,this.hasM=void 0,S&&(this.hasZ=S),O&&(this.hasM=O)}}class a{constructor(c,A,S,O){this.paths=c,this.spatialReference=A,this.hasZ=void 0,this.hasM=void 0,S&&(this.hasZ=S),O&&(this.hasM=O)}}class h{constructor(c,A,S,O){this.points=c,this.spatialReference=A,this.hasZ=void 0,this.hasM=void 0,S&&(this.hasZ=S),O&&(this.hasM=O)}}class b{constructor(c,A,S,O,C){this.xmin=c,this.ymin=A,this.xmax=S,this.ymax=O,this.spatialReference=C,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},58829:(j,U,l)=>{l.d(U,{_W:()=>v,iV:()=>S,oj:()=>z});var I=l(15861),P=l(57678),u=l(79412),o=l(83821),E=l(27545),g=l(33721),a=l(48230);const s=[0,0];function h(D,d){if(!d)return null;if("x"in d){const x={x:0,y:0};return[x.x,x.y]=D(d.x,d.y,s),null!=d.z&&(x.z=d.z),null!=d.m&&(x.m=d.m),x}if("xmin"in d){const x={xmin:0,ymin:0,xmax:0,ymax:0};return[x.xmin,x.ymin]=D(d.xmin,d.ymin,s),[x.xmax,x.ymax]=D(d.xmax,d.ymax,s),d.hasZ&&(x.zmin=d.zmin,x.zmax=d.zmax,x.hasZ=!0),d.hasM&&(x.mmin=d.mmin,x.mmax=d.mmax,x.hasM=!0),x}return"rings"in d?{rings:y(d.rings,D),hasM:d.hasM,hasZ:d.hasZ}:"paths"in d?{paths:y(d.paths,D),hasM:d.hasM,hasZ:d.hasZ}:"points"in d?{points:b(d.points,D),hasM:d.hasM,hasZ:d.hasZ}:null}function y(D,d){const x=[];for(const e of D)x.push(b(e,d));return x}function b(D,d){const x=[];for(const e of D){const r=d(e[0],e[1],[0,0]);x.push(r),e.length>2&&r.push(e[2]),e.length>3&&r.push(e[3])}return x}function v(D,d){return p.apply(this,arguments)}function p(){return(p=(0,I.Z)(function*(D,d){if(!D||!d)return;const x=Array.isArray(D)?D.map(e=>null!=e.geometry?e.geometry.spatialReference:null).filter(P.pC):[D];yield(0,o.initializeProjection)(x.map(e=>({source:e,dest:d})))})).apply(this,arguments)}const c=h.bind(null,a.hG),A=h.bind(null,a.R6);function S(D,d,x,e){if(!D||(x||(x=d,d=D.spatialReference),!(0,g.JY)(d)||!(0,g.JY)(x)||(0,g.fS)(d,x)))return D;if((0,a.Q8)(d,x)){const r=(0,g.sS)(x)?c(D):A(D);return r.spatialReference=x,r}return(0,o.projectMany)(E.N,[D],d,x,null,e)[0]}const C=new class O{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(d,x,e,r){var i=this;return(0,I.Z)(function*(){if(!d?.length||!x||!e||(0,g.fS)(x,e))return d;const f={geometries:d,inSpatialReference:x,outSpatialReference:e,geographicTransformation:r,resolve:(0,u.hh)()};return i._jobs.push(f),i._timer??=setTimeout(i._process,10),f.resolve.promise})()}_process(){this._timer=null;const d=this._jobs.shift();if(!d)return;const{geometries:x,inSpatialReference:e,outSpatialReference:r,resolve:i,geographicTransformation:f}=d;(0,a.Q8)(e,r)?(0,g.sS)(r)?i(x.map(c)):i(x.map(A)):i((0,o.projectMany)(E.N,x,e,r,f,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function z(D,d,x,e){return C.push(D,d,x,e)}},75790:(j,U,l)=>{l.d(U,{Z:()=>d});var I=l(15861),P=l(57964),u=l(14007),o=l(4703),E=l(55117),g=l(79412),a=l(657),s=l(90110),h=l(40100),y=l(99657),b=l(35935),v=l(32196),p=l(84829),c=l(94286),A=l(39237);const S=o.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),O=(0,p.g)(p.P,S),C={sharedArrayBuffer:(0,u.Z)("esri-shared-array-buffer"),atomics:(0,u.Z)("esri-atomics")};function z(x,e){return r=>e(x(r))}class D{constructor(e,r,i,f){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:_,layout:t,textureOnly:n}=f;this.textureOnly=n||!1,this.pixelType=_,this._ctype=r,this.layout=t,this._resetRange(),this._shared=e,this.size=i,n||(this.data=this._initData(_,i,e,r))}get buffer(){return this.data?.buffer}unsetComponentAllTexels(e,r){const i=this.data;for(let f=0;f<this.size*this.size;f++)i[f*this.texelSize+e]&=~r;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(e,r){const i=this.data;for(let f=0;f<this.size*this.size;f++)i[f*this.texelSize+e]|=255&r;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(e,r,i){const f=this.data;for(const _ of i)f[_*this.texelSize+e]|=r,this.dirtyStart=Math.min(this.dirtyStart,_),this.dirtyEnd=Math.max(this.dirtyEnd,_)}setComponentTexel(e,r,i){this.data[i*this.texelSize+e]|=r,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}unsetComponentTexel(e,r,i){this.data[i*this.texelSize+e]&=~r,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}getData(e,r){const i=(0,b.jL)(e);return this.data[i*this.texelSize+r]}setData(e,r,i){const f=(0,b.jL)(e);this.layout&1<<r?null!=this.data&&(this.data[f*this.texelSize+r]=i,this.dirtyStart=Math.min(this.dirtyStart,f),this.dirtyEnd=Math.max(this.dirtyEnd,f)):S.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===A.Br.UNSIGNED_BYTE&&this._shared&&C.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===A.Br.UNSIGNED_BYTE&&this._shared&&C.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(e){if(this.size=e,!this.textureOnly){const r=this._initData(this.pixelType,e,this._shared,this._ctype);r.set(this.data),this.data=r}}toMessage(){const e=this.dirtyStart,r=this.dirtyEnd,i=this.texelSize;if(e>r)return null;this._resetRange();const _=this.pixelType,t=this.layout;return{start:e,end:r,data:!(this._shared||"local"===this._ctype)&&this.data.slice(e*i,(r+1)*i)||null,pixelType:_,layout:t}}_initData(e,r,i,f){const _=i&&"local"!==f?SharedArrayBuffer:ArrayBuffer,t=(0,v.UK)(e),n=new t(new _(r*r*4*t.BYTES_PER_ELEMENT));for(let m=0;m<n.length;m+=4)n[m+1]=255;return n}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class d{constructor(e,r){this._client=e,this.config=r,this.updatingHandles=new s.R,this._blocks=new Array,this._filters=new Array(y.NS),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const i=r.supportsTextureFloat?A.Br.FLOAT:A.Br.UNSIGNED_BYTE;O(`Creating AttributeStore ${C.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:A.Br.UNSIGNED_BYTE,layout:1},{pixelType:A.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:A.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const e=this.updatingHandles.updating||!!this._nextUpdate;return(0,u.Z)("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${e}\n  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})\n  -> nextUpdate: ${!!this._nextUpdate}\n`),e}update(e,r){this.config=r;const i=r.schema.processors[0].storage,f=(0,a.Hg)(this._schema,i);if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),f&&((0,u.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",f),e.storage.data=!0,this._schema=i,this._attributeComputeInfo=null,null!=i)){switch(i.target){case"feature":this._targetType=b.mi;break;case"aggregate":this._targetType=b.QC}if("subtype"===i.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:i.subtypeField,map:new Map};for(const _ in i.mapping){const t=i.mapping[_];if(null!=t?.vvMapping)for(const n of t.vvMapping)this._bindAttribute(n,parseInt(_,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},null!=i.vvMapping)for(const _ of i.vvMapping)this._bindAttribute(_);if(null!=i.attributeMapping)for(const _ of i.attributeMapping)this._bindAttribute(_)}}}onTileData(e,r){if(null==r.addOrUpdate)return;const i=r.addOrUpdate.getCursor();for(;i.next();){const f=i.getDisplayId();this.setAttributeData(f,i)}}setHighlight(e,r){var i=this;return(0,I.Z)(function*(){const _=i._getBlock(0),t=r.map(n=>(0,b.jL)(n));_.lock(),_.unsetComponentAllTexels(0,1),_.setComponent(0,1,t),_.unlock(),i._idsToHighlight.clear();for(const n of e)i._idsToHighlight.add(n);yield i.sendUpdates()})()}updateFilters(e,r,i){var f=this;return(0,I.Z)(function*(){(0,u.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:_,spatialReference:t}=i,{filters:n}=r,m=n.map((M,R)=>f._updateFilter(M,R,_,t)),T=(yield Promise.all(m)).some(M=>M);(0,u.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),T&&(e.storage.filters=!0,(0,u.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))})()}setData(e,r,i,f){const _=(0,b.jL)(e);this._ensureSizeForTexel(_),this._getBlock(r).setData(e,i,f)}getData(e,r,i){return this._getBlock(r).getData(e,i)}getHighlightFlag(e){return this._idsToHighlight.has(e)?y.BB:0}unsetAttributeData(e){const r=(0,b.jL)(e);this._getBlock(0).setData(r,0,0)}setAttributeData(e,r){const i=(0,b.jL)(e);if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(r)),this._targetType!==(0,b.vs)(e))return;const f=this._attributeComputeInfo,_=this.config.supportsTextureFloat?1:2;let n=null;f&&(n=f.isSubtype?f.map.get(r.readAttribute(f.subtypeField)):f.map,n?.size&&n.forEach((m,T)=>{const M=T*_%4,R=Math.floor(T*_/4),B=this._getBlock(R+y.mb),Z=m(r);if(this.config.supportsTextureFloat)B.setData(i,M,Z);else if(Z===y.k9)B.setData(i,M,255),B.setData(i,M+1,255);else{const F=(0,E.uZ)(Math.round(Z),-32767,32766)+32768,G=(65280&F)>>8;B.setData(i,M,255&F),B.setData(i,M+1,G)}}))}sendUpdates(){if((0,u.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,g.hh)(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const e={blocks:this._blocks.map(r=>null!=r?r.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const r=()=>{if(this._currUpdate=null,this._nextUpdate){const f=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>f.resolve())}else(0,u.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};(0,u.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const i=this.updatingHandles.addPromise(this._client.update(e,this._signal).then(r).catch(r));return this._client.render(this._signal),i}).catch(r=>{if((0,g.D_)(r))return this._createResourcesPromise=null,this._createResources();S.error(new P.Z("mapview-attribute-store","Encountered an error during client update",r))}),this._currUpdate}_ensureSizeForTexel(e){for(;e>=this._size*this._size;)if(this._expand())return}_bindAttribute(e,r){let _;if(null!=e.fieldIndex)_=function f(){return e.normalizationField&&S.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),T=>T.getComputedNumericAtIndex(e.fieldIndex)}();else{if(!e.field)return;_=function i(){const{normalizationField:T}=e;return T?M=>{const R=M.readAttribute(T);return R?M.readAttribute(e.field)/R:null}:M=>M.readAttribute(e.field)}()}const{valueRepresentation:t}=e;t&&(_=z(_,T=>(0,c.qc)(T,t)));const n=T=>null===T||isNaN(T)||T===1/0||T===-1/0?y.k9:T,m=this._attributeComputeInfo;if(m.isSubtype){const T=m.map.get(r)??new Map;T.set(e.binding,z(_,n)),m.map.set(r,T)}else m.map.set(e.binding,z(_,n))}_createResources(){if(null!=this._createResourcesPromise)return this._createResourcesPromise;this._getBlock(y.S),this._getBlock(y.U8),O("Initializing AttributeStore");const e={shared:C.sharedArrayBuffer&&"local"!==this._client.type,size:this._size,blocks:this._blocks.map(i=>null!=i?{textureOnly:i.textureOnly,buffer:i.buffer,pixelType:i.pixelType}:null)},r=this._client.initialize(e,this._signal).catch(i=>{(0,g.D_)(i)?this._createResourcesPromise=null:S.error(new P.Z("mapview-attribute-store","Encountered an error during client initialization",i))});return this._createResourcesPromise=r,r.then(()=>null==this._createResourcesPromise?this._createResources():void 0),r}_getBlock(e){const r=this._blocks[e];if(null!=r)return r;O(`Initializing AttributeBlock at index ${e}`);const _=new D(C.sharedArrayBuffer,this._client.type,this._size,this._blockDescriptors[e]);return this._blocks[e]=_,this._createResourcesPromise=null,_}_expand(){if(this._size<this.config.maxTextureSize){const e=this._size<<=1;O("Expanding block size to",e,this._blocks);for(const r of this._blocks)r?.expand(e);return this._createResourcesPromise=null,this._size=e,0}return S.error(new P.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}_updateFilter(e,r,i,f){var _=this;return(0,I.Z)(function*(){const t=_._filters[r];if(!t&&!e||(null!=t&&t.hash)===JSON.stringify(e))return!1;if(null==e){if(!t)return!1;const T=1<<r+1,M=_._getBlock(0);return _._filters[r]=null,M.setComponentAllTexels(0,T),_.sendUpdates(),!0}return yield(yield _._getFilter(r,i)).update(e,f),!0})()}_getFilter(e,r){var i=this;return(0,I.Z)(function*(){const f=i._filters[e];if(null!=f)return f;const{default:_}=yield Promise.all([l.e(8592),l.e(2231)]).then(l.bind(l,95251)),t=new _({geometryType:r.geometryType,hasM:!1,hasZ:!1,timeInfo:r.timeInfo,fieldsIndex:h.Z.fromJSON(r.fieldsIndex)});return i._filters[e]=t,t})()}isVisible(e){return!!(2&this._getBlock(0).getData(e,0))}getFilterFlags(e){let r=0;const i=(0,b.KS)(e.getDisplayId());for(let _=0;_<this._filters.length;_++){const n=this._filters[_];r|=(i&1<<_&&null!=n&&!n.check(e)?0:1)<<_}let f=0;if(this._idsToHighlight.size){const _=e.getObjectId();f=this.getHighlightFlag(_)}return r<<1|f}}},9739:(j,U,l)=>{l.d(U,{O:()=>E});var I=l(35935);class P{constructor(){this._freeIds=[],this._idCounter=1}createId(a=!1){return(0,I.QS)(this._getFreeId(),a)}releaseId(a){this._freeIds.push(a)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var u=l(84249);function o(g,a,s){if(!(g.length>a))for(;g.length<=a;)g.push(s)}class E{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new P,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const a=this._bitsets.length;return this._bitsets.push(u.p.create(this._allocatedSize,I.Ht)),a+1}getBitset(a){return this._bitsets[a-1]}_expand(){this._allocatedSize<<=1;for(const a of this._bitsets)a.resize(this._allocatedSize)}_ensureNumeric(a,s){this._numerics[a]||(this._numerics[a]=[]),o(this._numerics[a],s,0)}_ensureInstanceId(a){o(this._instanceIds,a,0)}_ensureString(a,s){this._strings[a]||(this._strings[a]=[]),o(this._strings[a],s,null)}createDisplayId(a=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),(0,I.QS)(s,a)}releaseDisplayId(a){for(const s of this._bitsets)s.unset(a);return this._idGenerator.releaseId(a&I.Ht)}getComputedNumeric(a,s){return this.getComputedNumericAtIndex(a&I.Ht,0)}setComputedNumeric(a,s,h){return this.setComputedNumericAtIndex(a&I.Ht,h,0)}getComputedString(a,s){return this.getComputedStringAtIndex(a&I.Ht,0)}setComputedString(a,s,h){return this.setComputedStringAtIndex(a&I.Ht,0,h)}getComputedNumericAtIndex(a,s){const h=a&I.Ht;return this._ensureNumeric(s,h),this._numerics[s][h]}setComputedNumericAtIndex(a,s,h){const y=a&I.Ht;this._ensureNumeric(s,y),this._numerics[s][y]=h}getInstanceId(a){const s=a&I.Ht;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(a,s){const h=a&I.Ht;this._ensureInstanceId(h),this._instanceIds[h]=s}getComputedStringAtIndex(a,s){const h=a&I.Ht;return this._ensureString(s,h),this._strings[s][h]}setComputedStringAtIndex(a,s,h){const y=a&I.Ht;this._ensureString(s,y),this._strings[s][y]=h}getXMin(a){return this._bounds[4*(a&I.Ht)]}getYMin(a){return this._bounds[4*(a&I.Ht)+1]}getXMax(a){return this._bounds[4*(a&I.Ht)+2]}getYMax(a){return this._bounds[4*(a&I.Ht)+3]}setBounds(a,s){const h=s.readHydratedGeometry();if(!h?.coords.length)return!1;let y=1/0,b=1/0,v=-1/0,p=-1/0;h.forEachVertex((A,S)=>{y=Math.min(y,A),b=Math.min(b,S),v=Math.max(v,A),p=Math.max(p,S)});const c=a&I.Ht;return o(this._bounds,4*c+4,0),this._bounds[4*c]=y,this._bounds[4*c+1]=b,this._bounds[4*c+2]=v,this._bounds[4*c+3]=p,!0}}},14050:(j,U,l)=>{l.d(U,{s:()=>f}),l(2189);var P=l(93630),u=l(14007),o=l(51172),E=l(88781),g=l(81429),a=l(7587),s=l(81321),h=l(10842),y=l(62209),b=l(764),v=l(84249),p=l(40637);let c=0;const A=(0,u.Z)("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],S=A[0],O=A[1],C=A[2],z=A[3],D=(0,u.Z)("featurelayer-simplify-payload-size-factors")??[1,2,4],d=D[0],x=D[1],e=D[2],r=(0,u.Z)("featurelayer-simplify-mobile-factor")??2,i=(0,u.Z)("esri-mobile");class f{constructor(t,n){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._contextTimeZone=null,this._level=0,this.instance=t,this._layerSchema=n}static createInstance(){return c++,c=c>65535?0:c,c}get isEmpty(){return null!=this._deleted&&this._deleted.countSet()===this.getSize()}get contextTimeZone(){return this._contextTimeZone}set contextTimeZone(t){this._contextTimeZone=t}set level(t){this._level=t}getAreaSimplificationThreshold(t,n){let m=1;const T=i?r:1;n>4e6?m=e*T:n>1e6?m=x*T:n>5e5?m=d*T:n>1e5&&(m=T);let M=0;t>4e3?M=z*m:t>2e3?M=C*m:t>100?M=O:t>15&&(M=S);let R=8;return this._level<4?R=1:this._level<5?R=2:this._level<6&&(R=4),M*R}createQuantizedExtrudedGeometry(t,n){return"esriGeometryPolyline"===this.geometryType?this._createQuantizedExtrudedLine(t,n):this._createQuantizedExtrudedQuad(t,n)}_createQuantizedExtrudedQuad(t,n){return new y.Z([5],[t-1,n,1,-1,1,1,-1,1,-1,-1])}_createQuantizedExtrudedLine(t,n){return new y.Z([2],[t-1,n+1,1,-1])}parseTimestampOffset(t){return t}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,n){return this.setComputedNumericAtIndex(n,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,n){return this.setComputedStringAtIndex(0,n)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,n){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,n)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,n){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,n)}transform(t,n,m,T){const M=this.copy();return M._tx+=t,M._ty+=n,M._sx*=m,M._sy*=T,M}readAttributeAsTimestamp(t){const n=this.readAttribute(t);return"string"==typeof n?new Date(n).getTime():"number"==typeof n||null==n?n:null}readAttribute(t,n=!1){const m=this._readAttribute(t,n);if(void 0!==m)return m;for(const T of this._joined){T.setIndex(this.getIndex());const M=T._readAttribute(t,n);if(void 0!==M)return M}}readAttributes(){const t=this._readAttributes();for(const n of this._joined){n.setIndex(this.getIndex());const m=n._readAttributes();for(const T of Object.keys(m))t[T]=m[T]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}hasField(t){return this.fields.has(t)}geometry(){const t=this.readHydratedGeometry(),n=(0,h.di)(t,this.geometryType,this.hasZ,this.hasM),m=(0,p.im)(n);return m&&(m.spatialReference=this._arcadeSpatialReference),m}autocastArcadeDate(t,n){return n&&n instanceof Date?this.isUnknownDateTimeField(t)?P.iG.unknownDateJSToArcadeDate(n):P.iG.dateJSAndZoneToArcadeDate(n,this.contextTimeZone??b.By):n}isUnknownDateTimeField(t){return this._layerSchema.fieldsIndex.getTimeZone(t)===b._4}field(t){let n=this.fields.get(t);if(n)switch(n.type){case"date-only":case"esriFieldTypeDateOnly":return E.u.fromReader(this.readAttribute(t,!1));case"time-only":case"esriFieldTypeTimeOnly":return g.n.fromReader(this.readAttribute(t,!1));case"esriFieldTypeTimestampOffset":case"timestamp-offset":return P.iG.fromReaderAsTimeStampOffset(this.readAttribute(t,!1));case"date":case"esriFieldTypeDate":return this.autocastArcadeDate(t,this.readAttribute(t,!0));default:return this.readAttribute(t,!1)}for(const m of this._joined)if(m.setIndex(this.getIndex()),n=m.fields.get(t),n)switch(n.type){case"date-only":case"esriFieldTypeDateOnly":return E.u.fromReader(m._readAttribute(t,!1));case"time-only":case"esriFieldTypeTimeOnly":return g.n.fromReader(m._readAttribute(t,!1));case"esriFieldTypeTimestampOffset":case"timestamp-offset":return P.iG.fromReaderAsTimeStampOffset(m._readAttribute(t,!1));case"date":case"esriFieldTypeDate":return this.autocastArcadeDate(t,m._readAttribute(t,!0));default:return this.readAttribute(t,!1)}throw new Error(`Field ${t} does not exist`)}setField(t,n){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map(t=>t.name)}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const n=this.readLegacyFeature();if(!n)return JSON.stringify(null);const m={geometry:n.geometry,attributes:{...n.attributes??{}}};for(const T in m.attributes){const M=m.attributes[T];M instanceof Date&&(m.attributes[T]=M.getTime())}return JSON.stringify(m)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:!0===t?.keepGeometryType?this.geometry():this.geometry()?.toJSON()??null}}castAsJsonAsync(t=null,n=null){return Promise.resolve(this.castAsJson(n))}removeIds(t){if(null==this._objectIdToIndex){const m=new Map,T=this.getCursor();for(;T.next();){const M=T.getObjectId();(0,o.O3)(M),m.set(M,T.getIndex())}this._objectIdToIndex=m}const n=this._objectIdToIndex;for(const m of t)n.has(m)&&this.removeAtIndex(n.get(m))}removeAtIndex(t){null==this._deleted&&(this._deleted=v.p.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return null==this._deleted||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const n=a.z.fromOptimized(t,this.geometryType);n.yFactor*=-1;const m=(0,s.r)(n);return m?(m[1]*=-1,new y.Z([],m)):null}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex,t.contextTimeZone=this.contextTimeZone}}},47013:(j,U,l)=>{l.d(U,{i:()=>g});var I=l(10842),P=l(83502),u=l(40100),o=l(14050);class g extends o.s{static fromFeatures(s,h){const{objectIdField:y,geometryType:b}=h,v=(0,I.Yn)([],s,b,!1,!1,y);for(let p=0;p<v.length;p++)v[p].displayId=s[p].displayId;return g.fromOptimizedFeatures(v,h)}static fromFeatureSet(s,h){const y=(0,I.h_)(s,h.objectIdField);return g.fromOptimizedFeatureSet(y,h)}static fromOptimizedFeatureSet(s,h){const{features:y}=s,b=g.fromOptimizedFeatures(y,h);return b._exceededTransferLimit=s.exceededTransferLimit,b._transform=s.transform,b._fieldsIndex=new u.Z(h.fields),b}static fromOptimizedFeatures(s,h,y){const b=o.s.createInstance(),v=new g(b,s,h);return v._fieldsIndex=new u.Z(h.fields),v._transform=y,v}constructor(s,h,y){super(s,y),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=y?.geometryType,this._features=h}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(s){const h=new Set(s);this._features=this._features.filter(y=>!(null!=y.objectId&&h.has(y.objectId)))}append(s){for(const h of s)this._features.push(h)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let s="";for(const h in this._current.attributes)s+=this._current.attributes[h];return s}getIndex(){return this._featureIndex}setIndex(s){this._featureIndex=s}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(s){this._current.displayId=s}getGroupId(){return this._current.groupId}setGroupId(s){this._current.groupId=s}copy(){const s=new g(this.instance,this._features,this.fullSchema());return this.copyInto(s),s}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return(0,I.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const s=this.readUnquantizedGeometry();return(0,I.di)(s,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const s=this.readCentroid();return null==s?null:{x:s.coords[0]*this._sx+this._tx,y:s.coords[1]*this._sy+this._ty}}readGeometryArea(){return(0,P.S6)(this._current)?(0,I.lz)(this._current.geometry,2):0}readUnquantizedGeometry(){const s=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!s)return s;const h=s.clone();return function E({coords:a,lengths:s}){let h=0;for(const y of s){for(let b=1;b<y;b++)a[2*(h+b)]+=a[2*(h+b)-2],a[2*(h+b)+1]+=a[2*(h+b)-1];h+=y}}(h),h}readHydratedGeometry(){const s=this._current.geometry;if(null==s)return null;const h=s.clone();return null!=this._transform&&(0,I.$g)(h,h,this.hasZ,this.hasM,this._transform),h}getXHydrated(){if(!(0,P.S6)(this._current))return 0;const s=this._current.geometry.coords[0],h=this.getQuantizationTransform();return null==h?s:s*h.scale[0]+h.translate[0]}getYHydrated(){if(!(0,P.S6)(this._current))return 0;const s=this._current.geometry.coords[1],h=this.getQuantizationTransform();return null==h?s:h.translate[1]-s*h.scale[1]}getX(){return(0,P.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return(0,P.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,P.S6)(this._current)){if(null!=this._current.centroid){const[y,b]=this._current.centroid.coords;return this.createQuantizedExtrudedGeometry(y,b)}return null}const s=this._current.geometry.clone();if(s.isPoint)return s.coords[0]=s.coords[0]*this._sx+this._tx,s.coords[1]=s.coords[1]*this._sy+this._ty,s;let h=0;for(const y of s.lengths)s.coords[2*h]=s.coords[2*h]*this._sx+this._tx,s.coords[2*h+1]=s.coords[2*h+1]*this._sy+this._ty,h+=y;return s}readCentroid(){return(0,P.S6)(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(s,h){const y=this._fieldsIndex.get(s);if(!y)return;let b=this._current.attributes[y.name];return null==b?b:("esriFieldTypeTimestampOffset"===this.fields.get(s)?.type&&(b=this.parseTimestampOffset(b)),h&&this.fields.isDateField(s)?new Date(b):b)}copyInto(s){super.copyInto(s),s._featureIndex=this._featureIndex,s._transform=this._transform,s._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}},84249:(j,U,l)=>{l.d(U,{p:()=>I});class I{static fromBuffer(u,o){return new I(u,o)}static create(u,o=4294967295){const E=new Uint32Array(Math.ceil(u/32));return new I(E,o)}constructor(u,o){this._mask=0,this._buf=u,this._mask=o}_getIndex(u){return Math.floor(u/32)}has(u){const o=this._mask&u;return!!(this._buf[this._getIndex(o)]&1<<o%32)}hasRange(u,o){let E=u,g=o;for(;E%32&&E!==g;){if(this.has(E))return!0;E++}for(;g%32&&E!==g;){if(this.has(E))return!0;g--}if(E===g)return!1;for(let a=E/32;a!==g/32;a++)if(this._buf[a])return!0;return!1}set(u){const o=this._mask&u,E=this._getIndex(o);this._buf[E]|=1<<o%32}setRange(u,o){let E=u,g=o;for(;E%32&&E!==g;)this.set(E++);for(;g%32&&E!==g;)this.set(g--);if(E!==g)for(let a=E/32;a!==g/32;a++)this._buf[a]=4294967295}unset(u){const o=this._mask&u,E=this._getIndex(o);this._buf[E]&=4294967295^1<<o%32}resize(u){const o=this._buf,E=new Uint32Array(Math.ceil(u/32));E.set(o),this._buf=E}or(u){for(let o=0;o<this._buf.length;o++)this._buf[o]|=u._buf[o];return this}and(u){for(let o=0;o<this._buf.length;o++)this._buf[o]&=u._buf[o];return this}xor(u){for(let o=0;o<this._buf.length;o++)this._buf[o]^=u._buf[o];return this}ior(u){for(let o=0;o<this._buf.length;o++)this._buf[o]|=~u._buf[o];return this}iand(u){for(let o=0;o<this._buf.length;o++)this._buf[o]&=~u._buf[o];return this}ixor(u){for(let o=0;o<this._buf.length;o++)this._buf[o]^=~u._buf[o];return this}any(){for(let u=0;u<this._buf.length;u++)if(this._buf[u])return!0;return!1}copy(u){for(let o=0;o<this._buf.length;o++)this._buf[o]=u._buf[o];return this}clone(){return new I(this._buf.slice(),this._mask)}clear(){for(let u=0;u<this._buf.length;u++)this._buf[u]=0}forEachSet(u){for(let o=0;o<this._buf.length;o++){let E=this._buf[o],g=32*o;if(E)for(;E;)1&E&&u(g),E>>>=1,g++}}countSet(){let u=0;return this.forEachSet(o=>{u++}),u}}}}]);