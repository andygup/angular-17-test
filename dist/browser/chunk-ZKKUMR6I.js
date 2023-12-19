import{a as Z}from"./chunk-V2JYXY4D.js";import"./chunk-QSGARGRB.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import{e as M,p as C}from"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import{a as D,t as oe}from"./chunk-U62SHMHB.js";import{a as I,d as le,e as j,k as ae,n as G}from"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import{c as ne}from"./chunk-HB7BVTLV.js";import"./chunk-QDNKD3H5.js";import"./chunk-6QIKBCPR.js";import{d as se,i as _}from"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import{R as w}from"./chunk-CZPMRK53.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import{a as ie,k as P,o as q}from"./chunk-PT7S6WNL.js";import{a as O}from"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as te,r as y}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as v,b as $,g as p}from"./chunk-ESDYQQXO.js";var N=te.getLogger("esri.layers.support.ElevationSampler"),S=class{queryElevation(e){return pe(e.clone(),this)}on(){return ie()}projectIfRequired(e,t){return re(e,t)}},U=class extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,i){super(),this.tile=e,this.noDataValue=i;let n=e.tile.extent;this.extent=j(n,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=n;let s=w(t.spatialReference),l=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:l,max:l}}contains(e){let t=this.projectIfRequired(e,this.spatialReference);return t!=null&&this.containsAt(t.x,t.y)}containsAt(e,t){return ae(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){let i=this.extent,n=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return N.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${n})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}},R=class extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,i){let n;super(),typeof t=="number"?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map(l=>new U(l,n,this.noDataValue)):e;let s=this.samplers[0];if(s){this.extent=s.extent.clone();let{min:l,max:o}=s.demResolution;this.demResolution={min:l,max:o};for(let a=1;a<this.samplers.length;a++){let c=this.samplers[a];this.extent.union(c.extent),this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}}else this.extent=j(I(),n.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){for(let i of this.samplers)if(i.containsAt(e,t))return i.elevationAt(e,t);return N.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}};function pe(r,e){let t=re(r,e.spatialReference);if(!t)return null;switch(r.type){case"point":me(r,t,e);break;case"polyline":fe(r,t,e);break;case"multipoint":de(r,t,e)}return r}function re(r,e){if(r==null)return null;let t=r.spatialReference;if(t.equals(e))return r;let i=se(r,e);return i||N.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),i}function me(r,e,t){r.z=t.elevationAt(e.x,e.y)}function fe(r,e,t){x.spatialReference=e.spatialReference;let i=r.hasM&&!r.hasZ;for(let n=0;n<r.paths.length;n++){let s=r.paths[n],l=e.paths[n];for(let o=0;o<s.length;o++){let a=s[o],c=l[o];x.x=c[0],x.y=c[1],i&&(a[3]=a[2]),a[2]=t.elevationAt(x.x,x.y)}}r.hasZ=!0}function de(r,e,t){x.spatialReference=e.spatialReference;let i=r.hasM&&!r.hasZ;for(let n=0;n<r.points.length;n++){let s=r.points[n],l=e.points[n];x.x=l[0],x.y=l[1],i&&(s[3]=s[2]),s[2]=t.elevationAt(x.x,x.y)}r.hasZ=!0}var x=new _;var F=class{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}};var E=class{constructor(e,t=null){if(this.tile=e,t!=null&&e!=null){let i=e.extent;this._samplerData=new F(t,i)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}sample(e,t){if(this._samplerData==null)return;let{safeWidth:i,data:n,dx:s,dy:l,y1:o,x0:a}=this._samplerData,{width:c,values:u,noDataValue:f}=n,m=ce(l*(o-t),0,i),h=ce(s*(e-a),0,i),T=Math.floor(m),H=Math.floor(h),V=T*c+H,K=V+c,k=u[V],L=u[K],X=u[V+1],Y=u[K+1];if(k!==f&&L!==f&&X!==f&&Y!==f){let J=h-H,ee=k+(X-k)*J;return ee+(L+(Y-L)*J-ee)*(m-T)}}};function ce(r,e,t){return r<e?e:r>t?t:r}var ue=class{queryAll(e,t,i){return p(this,null,function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new y("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");let n=g.fromGeometry(t),s=!1;i&&i.returnSampleInfo||(s=!0);let l=$(v(v({},z),i),{returnSampleInfo:!0}),o=yield this.query(e[e.length-1],n,l),a=yield this._queryAllContinue(e,o,l);return a.geometry=a.geometry.export(),s&&delete a.sampleInfo,a})}query(e,t,i){return p(this,null,function*(){if(!e)throw new y("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof g)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new y("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");let n=v(v({},z),i),s=new W(e,t.spatialReference,n),l=n.signal;return yield e.load({signal:l}),yield this._createGeometryDescriptor(s,t,l),yield this._selectTiles(s,l),yield this._populateElevationTiles(s,l),this._sampleGeometryWithElevation(s),this._createQueryResult(s,l)})}createSampler(e,t,i){return p(this,null,function*(){if(!e)throw new y("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new y("elevation-query:invalid-extent","Invalid or undefined extent");let n=v(v({},z),i);return this._createSampler(e,t,n)})}createSamplerAll(e,t,i){return p(this,null,function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(l=>l.visible):e.slice()).length)throw new y("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new y("elevation-query:invalid-extent","Invalid or undefined extent");let n=$(v(v({},z),i),{returnSampleInfo:!0}),s=yield this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,s,n)})}_createSampler(e,t,i,n){return p(this,null,function*(){let s=i.signal;yield e.load({signal:s});let l=t.spatialReference,o=e.tileInfo.spatialReference;l.equals(o)||(yield C([{source:l,dest:o}],{signal:s}),t=M(t,o));let a=new Q(e,t,i,n);return yield this._selectTiles(a,s),yield this._populateElevationTiles(a,s),new R(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)})}_createSamplerAllContinue(e,t,i,n){return p(this,null,function*(){if(e.pop(),!e.length)return i;let s=i.samplers.map(c=>le(c.extent)),l=yield this._createSampler(e[e.length-1],t,n,s);if(l.samplers.length===0)return i;let o=i.samplers.concat(l.samplers),a=new R(o,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)})}_queryAllContinue(e,t,i){return p(this,null,function*(){let n=e.pop(),s=t.geometry.coordinates,l=t.sampleInfo;O(l);let o=[],a=[];for(let m=0;m<s.length;m++){let h=l[m];h.demResolution>=0?h.source||(h.source=n):e.length&&(o.push(s[m]),a.push(m))}if(!e.length||o.length===0)return t;let c=t.geometry.clone(o),u=yield this.query(e[e.length-1],c,i),f=u.sampleInfo;if(!f)throw new Error("no sampleInfo");return a.forEach((m,h)=>{s[m].z=u.geometry.coordinates[h].z,l[m].demResolution=f[h].demResolution}),this._queryAllContinue(e,t,i)})}_createQueryResult(e,t){return p(this,null,function*(){let i=yield e.geometry.project(e.outSpatialReference,t);O(i);let n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),n})}_createGeometryDescriptor(e,t,i){return p(this,null,function*(){let n,s=e.layer.tileInfo.spatialReference;if(t instanceof g?n=yield t.project(s,i):(yield C([{source:t.spatialReference,dest:s}],{signal:i}),n=M(t,s)),!n)throw new y("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=g.fromGeometry(n)})}_selectTiles(e,t){return p(this,null,function*(){e.type==="geometry"&&this._preselectOutsideLayerExtent(e);let i=e.options.demResolution;if(typeof i=="number")this._selectTilesClosestResolution(e,i);else if(i==="finest-contiguous")yield this._selectTilesFinestContiguous(e,t);else{if(i!=="auto")throw new y("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);yield this._selectTilesAuto(e,t)}})}_preselectOutsideLayerExtent(e){if(e.layer.fullExtent==null)return;let t=new E(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;let i=e.layer.fullExtent;e.geometry.coordinates.forEach(n=>{let s=n.x,l=n.y;(s<i.xmin||s>i.xmax||l<i.ymin||l>i.ymax)&&(n.elevationTile=t)})}_selectTilesClosestResolution(e,t){let i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){let{tileInfo:i,tilemapCache:n}=e.layer,s=t/w(i.spatialReference),l=A(i,n),o=l[0],a=0;for(let c=1;c<l.length;c++){let u=l[c];Math.abs(u.resolution-s)<Math.abs(o.resolution-s)&&(o=u,a=c)}return a}_selectTilesFinestContiguous(e,t){return p(this,null,function*(){let{tileInfo:i,tilemapCache:n}=e.layer,s=he(i,n,e.options.minDemResolution);yield this._selectTilesFinestContiguousAt(e,s,t)})}_selectTilesFinestContiguousAt(e,t,i){return p(this,null,function*(){let n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;let s=n.tilemapCache,l=e.getTilesToFetch();try{if(s&&!B(s))yield q(Promise.all(l.map(o=>s.fetchAvailability(o.level,o.row,o.col,{signal:i}))),i);else if(yield this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new y("elevation-query:has-unavailable-tiles")}catch(o){P(o),yield this._selectTilesFinestContiguousAt(e,t-1,i)}})}_populateElevationTiles(e,t){return p(this,null,function*(){let i=e.getTilesToFetch(),n={},s=e.options.cache,l=e.options.noDataValue,o=i.map(a=>p(this,null,function*(){if(a.id==null)return;let c=`${e.layer.uid}:${a.id}:${l}`,u=s!=null?s.get(c):null,f=u??(yield e.layer.fetchTile(a.level,a.row,a.col,{noDataValue:l,signal:t}));s?.put(c,f),n[a.id]=new E(a,f)}));yield q(Promise.allSettled(o),t),e.populateElevationTiles(n)})}_selectTilesAuto(e,t){return p(this,null,function*(){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);let i=e.layer.tilemapCache;if(!i||B(i))return this._selectTilesAutoPrefetchUpsample(e,t);let n=e.getTilesToFetch(),s={},l=n.map(o=>p(this,null,function*(){let a=new Z(null,0,0,0,I()),c=yield ne(i.fetchAvailabilityUpsample(o.level,o.row,o.col,a,{signal:t}));c.ok!==!1?o.id!=null&&(s[o.id]=a):P(c.error)}));yield q(Promise.all(l),t),e.remapTiles(s)})}_reduceTilesForMaximumRequests(e){let t=e.layer.tileInfo,i=0,n={},s=a=>{a.id!=null&&(a.id in n?n[a.id]++:(n[a.id]=1,i++))},l=a=>{if(a.id==null)return;let c=n[a.id];c===1?(delete n[a.id],i--):n[a.id]=c-1};e.forEachTileToFetch(s,l);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch(a=>{i<=e.options.maximumAutoTileRequests||(l(a),t.upsampleTile(a)&&(o=!0),s(a))},l),o););}_selectTilesAutoFinest(e){let{tileInfo:t,tilemapCache:i}=e.layer,n=he(t,i,e.options.minDemResolution);e.selectTilesAtLOD(n,e.options.maximumAutoTileRequests)}_selectTilesAutoPrefetchUpsample(e,t){return p(this,null,function*(){let i=e.layer.tileInfo;yield this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch((s,l)=>{i.upsampleTile(s)?n=!0:l()}),n&&(yield this._selectTilesAutoPrefetchUpsample(e,t))})}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{let i=t.elevationTile,n=e.options.noDataValue;if(i){let s=i.sample(t.x,t.y);s!=null?n=s:t.elevationTile=null}t.z=n})}_extractSampleInfo(e){let t=e.layer.tileInfo,i=w(t.spatialReference);return e.geometry.coordinates.map(n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}})}},g=class r{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){let t=new r;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(i=>i.clone()),t._exporter=this._exporter,t}project(e,t){return p(this,null,function*(){if(this.spatialReference.equals(e))return this.clone();yield C([{source:this.spatialReference,dest:e}],{signal:t});let i=new D({spatialReference:this.spatialReference,points:this.coordinates.map(o=>[o.x,o.y])}),n=M(i,e);if(!n)return null;let s=this.coordinates.map((o,a)=>{let c=o.clone(),u=n.points[a];return c.x=u[0],c.y=u[1],c}),l=this.clone(s);return l.spatialReference=e,l})}static fromGeometry(e){let t=new r;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof r)t.coordinates=e.coordinates.map(i=>i.clone()),t._exporter=(i,n)=>{let s=e.clone(i);return s.spatialReference=n,s};else switch(e.type){case"point":{let i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[new d(i.x,i.y,i.z,i.m)]:n?[new d(i.x,i.y,i.z)]:s?[new d(i.x,i.y,null,i.m)]:[new d(i.x,i.y)],t._exporter=(l,o)=>e.hasM?new _(l[0].x,l[0].y,l[0].z,l[0].m,o):new _(l[0].x,l[0].y,l[0].z,o);break}case"multipoint":{let i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map(l=>new d(l[0],l[1],l[2],l[3])):n?i.points.map(l=>new d(l[0],l[1],l[2])):s?i.points.map(l=>new d(l[0],l[1],null,l[2])):i.points.map(l=>new d(l[0],l[1])),t._exporter=(l,o)=>e.hasM?new D({points:l.map(a=>[a.x,a.y,a.z,a.m]),hasZ:!0,hasM:!0,spatiaReference:o}):new D(l.map(a=>[a.x,a.y,a.z]),o);break}case"polyline":{let i=e,n=[],s=[],{hasZ:l,hasM:o}=e,a=0;for(let c of i.paths)if(s.push([a,a+c.length]),a+=c.length,l&&o)for(let u of c)n.push(new d(u[0],u[1],u[2],u[3]));else if(l)for(let u of c)n.push(new d(u[0],u[1],u[2]));else if(o)for(let u of c)n.push(new d(u[0],u[1],null,u[2]));else for(let u of c)n.push(new d(u[0],u[1]));t.coordinates=n,t._exporter=(c,u)=>{let f=e.hasM?c.map(h=>[h.x,h.y,h.z,h.m]):c.map(h=>[h.x,h.y,h.z]),m=s.map(h=>f.slice(h[0],h[1]));return new oe({paths:m,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}},d=class r{constructor(e,t,i=null,n=null,s=null,l=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=s,this.elevationTile=l}clone(){return new r(this.x,this.y,this.z,this.m)}},b=class{constructor(e,t){this.layer=e,this.options=t}},W=class extends b{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{let{tileInfo:t,tilemapCache:i}=this.layer,n=A(t,i)[e].level;this.geometry.coordinates.forEach(s=>s.tile=t.tileAt(n,s.x,s.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(let e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(let t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(let t of this.geometry.coordinates){let i=t.tile?.id;t.tile=i?e[i]:null}}getTilesToFetch(){let e={},t=[];for(let i of this.geometry.coordinates){let n=i.tile;if(!n)continue;let s=i.tile?.id;i.elevationTile||!s||e[s]||(e[s]=n,t.push(n))}return t}forEachTileToFetch(e){for(let t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}},Q=class extends b{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){let i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){let{tileInfo:t,tilemapCache:i}=this.layer,n=A(t,i);if(!e)return n.length-1;let s=this.extent;if(s==null)return-1;for(let l=n.length-1;l>=0;l--){let o=n[l],a=o.resolution*t.size[0],c=o.resolution*t.size[1];if(Math.ceil(s.width/a)*Math.ceil(s.height/c)<=e)return l}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(let t of this._candidateTiles){let i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){let i=this._candidateTiles;this._candidateTiles=[],i.forEach(n=>{if(this._fetchedCandidates.has(n))return void(t&&t(n));let s=!1;e(n,()=>s=!0),s?t&&t(n):this._candidateTiles.push(n)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){let i={},n=[];for(let l of e){let o=l.id;o&&!i[o]?(i[o]=l,n.push(l)):t&&t(l)}let s=n.sort((l,o)=>l.level-o.level);return s.filter((l,o)=>{for(let a=0;a<o;a++){let c=s[a].extent;if(c&&l.extent&&G(c,l.extent))return t&&t(l),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;let t=this.extent;if(t==null)return;let{tileInfo:i,tilemapCache:n}=this.layer,s=A(i,n)[e],l=i.tileAt(s.level,t.xmin,t.ymin),o=l.extent;if(o==null)return;let a=s.resolution*i.size[0],c=s.resolution*i.size[1],u=Math.ceil((t.xmax-o[0])/a),f=Math.ceil((t.ymax-o[1])/c);for(let m=0;m<f;m++)for(let h=0;h<u;h++){let T=new Z(null,l.level,l.row-m,l.col+h);i.updateTileInfo(T),this._tileIsMasked(T)||this._candidateTiles.push(T)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&G(t,e.extent))}};function he(r,e,t=0){let i=A(r,e),n=i.length-1;if(t>0){let s=t/w(r.spatialReference),l=i.findIndex(o=>o.resolution<s);l===0?n=0:l>0&&(n=l-1)}return n}var z={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function A(r,e){let t=r.lods;if(B(e)){let{effectiveMinLOD:i,effectiveMaxLOD:n}=e;return t.filter(s=>s.level>=i&&s.level<=n)}return t}function B(r){return r?.tileInfo!=null}export{ue as ElevationQuery,g as GeometryDescriptor,he as getFinestLodIndex};
