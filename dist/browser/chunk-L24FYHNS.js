import{a as w,b as se,c as ot}from"./chunk-FFRWZDQL.js";import"./chunk-X77FZHE2.js";import{a as tt}from"./chunk-W55774HC.js";import{a as q,b as Qe}from"./chunk-DUAAYE7V.js";import{a as $e}from"./chunk-LLDE5IQ6.js";import"./chunk-EHWWHYDE.js";import{a as Fe}from"./chunk-RI77TKRA.js";import"./chunk-UW2TVJUN.js";import"./chunk-LGUXUFJ7.js";import{a as qe}from"./chunk-Z7MKEISX.js";import{a as et}from"./chunk-5L5TH44W.js";import{a as Ve}from"./chunk-URPONBMS.js";import"./chunk-QB3NROF7.js";import{a as rt}from"./chunk-5WCYRI4X.js";import{c as Ze}from"./chunk-TQXEOG45.js";import{b as Ue}from"./chunk-HSB35X5B.js";import"./chunk-KCKP7FIY.js";import{a as P,b as Z}from"./chunk-ZOTIMGGE.js";import{e as Xe}from"./chunk-7UQPY7PH.js";import{b as L,m as fe,o as A}from"./chunk-OHIIU6WS.js";import"./chunk-5MJXKSZ4.js";import"./chunk-LGGJOMLJ.js";import"./chunk-VVAIF23J.js";import{a as Ge,b as ue,e as Je,h as De}from"./chunk-O5K35OSE.js";import{b as Ye}from"./chunk-D6LLE2YP.js";import"./chunk-OM24DGCK.js";import"./chunk-VGGNZXSE.js";import"./chunk-574KRDZU.js";import"./chunk-2APWMENK.js";import{a as Ce}from"./chunk-JOYABHZZ.js";import"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import{d as b}from"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-IXIJFOEL.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import{e as ke,g as M,p as Ke}from"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import{s as F}from"./chunk-U62SHMHB.js";import{d as Ae}from"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import{f as ce,h as Be}from"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import{c as ze}from"./chunk-NBRBW7H5.js";import{a as Ee}from"./chunk-V2KSICSA.js";import{a as Oe}from"./chunk-CBOFHDSC.js";import"./chunk-HB7BVTLV.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import"./chunk-UZQ577CU.js";import{b as J}from"./chunk-FC3MPJI4.js";import{a as Le}from"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import{a as ne}from"./chunk-6J4Y65BV.js";import{a as je}from"./chunk-RXHILZH7.js";import"./chunk-PEPXQ7N3.js";import"./chunk-VU5W7W6Y.js";import{f as Ne,j as Y}from"./chunk-6QIKBCPR.js";import{i as f}from"./chunk-AHKJJNRE.js";import{a as C}from"./chunk-HBTOKQC5.js";import{a as D,b as ie}from"./chunk-A52LT7YB.js";import{n as We}from"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import{a as He}from"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import{$ as Te,B as Me,s as be,t as Se,u as Ie,v as me}from"./chunk-XF4NUYV7.js";import{f as re}from"./chunk-FNDPIYNC.js";import{H as s,K as _e}from"./chunk-WMYPRHRR.js";import{R as u}from"./chunk-IAMDMFZ7.js";import{a as i}from"./chunk-53MWZ23O.js";import{f as we,i as Re}from"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as v,r as I}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as Pe,b as ve,g as X}from"./chunk-ESDYQQXO.js";var de=class extends Ye{projectOrWarn(e,t){if(e==null)return e;let{geometry:o,pending:r}=M(e,t);return r?null:r||o?o:(v.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};de=i([u("esri.layers.support.GeoreferenceBase")],de);var W=de;var he=q(),c=P(),ee=class extends _e{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([s()],ee.prototype,"sourcePoint",void 0),i([s({type:f})],ee.prototype,"mapPoint",void 0),ee=i([u("esri.layers.support.ControlPoint")],ee);var R=class extends re(W){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){let o=ie.fromJSON(t.spatialReference),r=Qe(...t.coefficients,1);return e.map(n=>(L(c,n.x,n.y),w(c,c,r),{sourcePoint:n,mapPoint:new f({x:c[0],y:c[1],spatialReference:o})}))}writeControlPoints(e,t,o,r){if(this.transform!=null)e!=null&&h(e[0])&&(t.controlPoints=e.map(n=>{let a=n.sourcePoint;return{x:a.x,y:a.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{let n=new I("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:r?.layer,georeference:this});r?.messages?r.messages.push(n):v.getLogger(this).error(n.name,n.message)}}get coords(){if(this.controlPoints==null)return null;let e=this._updateTransform(he);if(e==null||!h(this.controlPoints[0]))return null;let t=this.controlPoints[0].mapPoint.spatialReference;return ht(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!h(this.controlPoints[0]))return;let t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;let{width:o,height:r}=this,{rings:[[n,a,l,p]]}=e,m={sourcePoint:b(0,r),mapPoint:new f({x:n[0],y:n[1],spatialReference:t})},d={sourcePoint:b(0,0),mapPoint:new f({x:a[0],y:a[1],spatialReference:t})},y={sourcePoint:b(o,0),mapPoint:new f({x:l[0],y:l[1],spatialReference:t})},x={sourcePoint:b(o,r),mapPoint:new f({x:p[0],y:p[1],spatialReference:t})};h(m)&&h(d)&&h(y)&&h(x)&&(nt(he,m,d,y,x),this.controlPoints=this.controlPoints.map(({sourcePoint:S})=>(L(c,S.x,S.y),w(c,c,he),{sourcePoint:S,mapPoint:new f({x:c[0],y:c[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Xe(q(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!h(this.controlPoints[0]))return null;L(c,e.x,e.y);let t=this.controlPoints[0].mapPoint.spatialReference;return w(c,c,this.transform),new f({x:c[0],y:c[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!h(this.controlPoints[0]))return null;let t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=M(e,t).geometry)==null?null:(L(c,e.x,e.y),w(c,c,this.inverseTransform),b(c[0],c[1]))}toSourceNormalized(e){let t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){let{controlPoints:t,width:o,height:r}=this;if(!(t!=null&&o>0&&r>0))return null;let[n,a,l,p]=t;if(!h(n))return null;let m=n.mapPoint.spatialReference,d=this._projectControlPoint(a,m),y=this._projectControlPoint(l,m),x=this._projectControlPoint(p,m);if(!d.valid||!y.valid||!x.valid||!h(d.controlPoint))return null;e==null&&(e=q());let S=null;return S=h(y.controlPoint)&&h(x.controlPoint)?nt(e,n,d.controlPoint,y.controlPoint,x.controlPoint):h(y.controlPoint)?ut(e,n,d.controlPoint,y.controlPoint):ct(e,n,d.controlPoint),S.every(mt=>mt===0)?null:S}_projectControlPoint(e,t){if(!h(e))return{valid:!0,controlPoint:e};let{sourcePoint:o,mapPoint:r}=e,{geometry:n,pending:a}=M(r,t);return a?{valid:!1,controlPoint:null}:a||n?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:n}}:(v.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:r.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function h(e){return e?.sourcePoint!=null&&e.mapPoint!=null}i([s({type:[ee],json:{write:{allowNull:!1,isRequired:!0}}})],R.prototype,"controlPoints",void 0),i([C("controlPoints")],R.prototype,"readControlPoints",null),i([D("controlPoints")],R.prototype,"writeControlPoints",null),i([s()],R.prototype,"coords",null),i([s({json:{write:!0}})],R.prototype,"height",void 0),i([s({readOnly:!0})],R.prototype,"inverseTransform",null),i([s({readOnly:!0})],R.prototype,"transform",null),i([s({json:{write:!0}})],R.prototype,"width",void 0),R=i([u("esri.layers.support.ControlPointsGeoreference")],R);var O=P(),j=P(),U=P(),N=P(),E=P(),H=P(),G=P(),V=P(),ae=Math.PI/2;function T(e,t,o){L(e,o.sourcePoint.x,o.sourcePoint.y),L(t,o.mapPoint.x,o.mapPoint.y)}function ct(e,t,o){return T(O,E,t),T(j,H,o),A(U,j,O,ae),A(N,O,j,ae),A(G,H,E,-ae),A(V,E,H,-ae),ye(e,O,j,U,N,E,H,G,V)}function ut(e,t,o,r){return T(O,E,t),T(j,H,o),T(U,G,r),fe(N,O,j,.5),A(N,U,N,Math.PI),fe(V,E,H,.5),A(V,G,V,Math.PI),ye(e,O,j,U,N,E,H,G,V)}function nt(e,t,o,r,n){return T(O,E,t),T(j,H,o),T(U,G,r),T(N,V,n),ye(e,O,j,U,N,E,H,G,V)}var ft=new Array(8).fill(0),dt=new Array(8).fill(0);function it(e,t,o,r,n){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=r[0],e[5]=r[1],e[6]=n[0],e[7]=n[1],e}function ye(e,t,o,r,n,a,l,p,m){return se(e,it(ft,t,o,r,n),it(dt,a,l,p,m))}function ht(e,t,o,r){let n=Z(0,o),a=Z(0,0),l=Z(t,0),p=Z(t,o);return w(n,n,e),w(a,a,e),w(l,l,e),w(p,p,e),new F({rings:[[n,a,l,p,n]],spatialReference:r})}var ge=R;var te=P(),z=class extends W{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:r}=this;if(e==null||t==null||o==null||r==null)return null;let n=e.spatialReference;return t=this.projectOrWarn(t,n),o=this.projectOrWarn(o,n),r=this.projectOrWarn(r,n),t==null||o==null||r==null?null:new F({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[r.x,r.y],[o.x,o.y]]],spatialReference:n})}set coords(e){let{topLeft:t}=this;if(t==null)return;let o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;let{rings:[[r,n,a,l]]}=e;this.bottomLeft=new f({x:r[0],y:r[1],spatialReference:o}),this.topLeft=new f({x:n[0],y:n[1],spatialReference:o}),this.topRight=new f({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new f({x:l[0],y:l[1],spatialReference:o})}toSourceNormalized(e){let{topLeft:t,topRight:o,bottomRight:r,bottomLeft:n}=this;if(e==null||t==null||o==null||r==null||n==null)return null;let a=t.spatialReference;e=e.normalize();let l=M(e,a).geometry;if(l==null)return null;L(te,l.x,l.y);let p=se(q(),[t.x,t.y,n.x,n.y,o.x,o.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return w(te,te,p),b(te[0],te[1])}};i([s()],z.prototype,"coords",null),i([s({type:f})],z.prototype,"bottomLeft",void 0),i([s({type:f})],z.prototype,"bottomRight",void 0),i([s({type:f})],z.prototype,"topLeft",void 0),i([s({type:f})],z.prototype,"topRight",void 0),z=i([u("esri.layers.support.CornersGeoreference")],z);var st=z;var k=class extends W{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;let{xmin:e,ymin:t,xmax:o,ymax:r,spatialReference:n}=this.extent,a;if(this.rotation){let{x:l,y:p}=this.extent.center,m=xe(l,p,this.rotation);a=[m(e,t),m(e,r),m(o,r),m(o,t)],a.push(a[0])}else a=[[e,t],[e,r],[o,r],[o,t],[e,t]];return new F({rings:[a],spatialReference:n})}set coords(e){if(e==null||this.extent==null)return;let t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;let{rings:[[o,r,n]],extent:{center:{x:a,y:l}}}=e,p=Be(Math.PI/2-Math.atan2(r[1]-o[1],r[0]-o[0])),m=xe(a,l,-p),[d,y]=m(o[0],o[1]),[x,S]=m(n[0],n[1]);this.extent=new Y({xmin:d,ymin:y,xmax:x,ymax:S,spatialReference:t}),this.rotation=p}toSourceNormalized(e){let{extent:t,rotation:o}=this;if(e==null||t==null)return null;let{xmin:r,ymin:n,xmax:a,ymax:l,center:p,spatialReference:m}=t;e=e.normalize();let d=M(e,m).geometry;if(d==null)return null;let y=d.x,x=d.y;return o&&([y,x]=xe(p.x,p.y,-o)(y,x)),b(ce(y,r,a,0,1),ce(x,l,n,0,1))}};function xe(e,t,o){let r=ze(o),n=Math.cos(r),a=Math.sin(r);return(l,p)=>[n*(l-e)+a*(p-t)+e,n*(p-t)-a*(l-e)+t]}i([s()],k.prototype,"coords",null),i([s({type:Y})],k.prototype,"extent",void 0),i([s({type:Number})],k.prototype,"rotation",void 0),k=i([u("esri.layers.support.ExtentAndRotationGeoreference")],k);var at=k;var yt={key:"type",base:W,typeMap:{"control-points":ge,corners:st,"extent-and-rotation":at}},K=class extends Ue(re(ne)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return ge.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){let{georeference:t,contentWidth:o,contentHeight:r}=this;if(e==null||t==null||o===0||r===0)return null;let n=t.toSourceNormalized(e);return n==null?null:(n.x*=o,n.y*=r,n)}};i([s({types:yt,json:{write:!0}})],K.prototype,"georeference",void 0),i([C("georeference")],K.prototype,"readGeoreference",null),i([s()],K.prototype,"opacity",void 0),K=i([u("esri.layers.support.MediaElementBase")],K);var $=K;var _=class extends ${constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){let e=this.image;if(typeof e=="string"){let t=Ze(e).then(o=>{this._set("content",o)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){let t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new I("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,o){return Ge(t.url,o)}writeImage(e,t,o,r){if(e==null)return;let n=r?.portalItem,a=r?.resources;if(!n||!a)return void(typeof e=="string"&&(t[o]=ue(e,r)));let l=typeof e!="string"||me(e)||Ie(e)?null:e;if(l){if(Je(l)==null)return void(t[o]=l);let p=ue(l,ve(Pe({},r),{verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),De.NO);if(n&&p&&!Se(p))return a.toKeep.push({resource:n.resourceFromPath(p),compress:!1}),void(t[o]=p)}t[o]="<pending>",a.pendingOperations.push(gt(e).then(p=>{let m=Pt(p,n);t[o]=m.itemRelativeUrl,a.toAdd.push({resource:m,content:{type:"blob",blob:p},compress:!1,finish:d=>{this.image=d.url}})}))}};i([s()],_.prototype,"animationOptions",void 0),i([s({readOnly:!0})],_.prototype,"content",void 0),i([s({readOnly:!0})],_.prototype,"contentWidth",null),i([s({readOnly:!0})],_.prototype,"contentHeight",null),i([s({json:{name:"url",type:String}})],_.prototype,"image",void 0),i([C("image",["url"])],_.prototype,"readImage",null),i([D("image")],_.prototype,"writeImage",null),i([s({readOnly:!0,json:{name:"mediaType"}})],_.prototype,"type",void 0),_=i([u("esri.layers.support.ImageElement")],_);var le=_;function gt(e){return X(this,null,function*(){return typeof e=="string"?me(e)?Me(e):(yield Te(e,{responseType:"blob"})).data:new Promise(t=>xt(e).toBlob(t))})}function xt(e){if(e instanceof HTMLCanvasElement)return e;let t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,r=document.createElement("canvas"),n=r.getContext("2d");return r.width=t,r.height=o,e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),r}function Pt(e,t){let o=Ee(),r=`${be("media",o)}.${tt({type:"blob",blob:e})}`;return t.resourceFromPath(r)}var B=class extends ${constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){let e=this.video;if(typeof e=="string"){let t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new I("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):v.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{let r=we(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(r,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))})}};i([s()],B.prototype,"autoplay",void 0),i([s({readOnly:!0})],B.prototype,"content",void 0),i([s({readOnly:!0})],B.prototype,"contentWidth",null),i([s({readOnly:!0})],B.prototype,"contentHeight",null),i([s()],B.prototype,"video",null),B=i([u("esri.layers.support.VideoElement")],B);var pe=B;var vt={key:"type",defaultKeyValue:"image",base:$,typeMap:{image:le,video:pe}},lt=J.ofType(vt),Q=class extends ne.LoadableMixin(je(Le.EventedAccessor)){constructor(e){super(e),this._index=new $e,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(let r of t.removed){let n=this._elementViewsMap.get(r);this._elementViewsMap.delete(r),this._index.delete(n),this.removeHandles(n),n.destroy(),this.notifyChange("fullExtent")}let{spatialReference:o}=this;for(let r of t.added){if(this._elementViewsMap.get(r))continue;let n=new ot({spatialReference:o,element:r});this._elementViewsMap.set(r,n);let a=Oe(()=>n.coords,()=>this._updateIndexForElement(n,!1));this._updateIndexForElement(n,!0),this.addHandles(a,n)}this._elementsIndexes.clear(),this.elements.forEach((r,n)=>this._elementsIndexes.set(r,n)),this.emit("refresh")},this.elements=new lt}load(e){return X(this,null,function*(){if(Re(e),!this.spatialReference){let t=this.elements.find(o=>o.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ie.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this})}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ce(e,this._get("elements"),lt))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;let e=this._index.fullBounds;return e==null?null:new Y({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):v.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}queryElements(e,t){return X(this,null,function*(){yield this.load(),yield Ke(e.spatialReference,this.spatialReference,null,t);let o=We(e.spatialReference,this.spatialReference)?e:ke(e,this.spatialReference);if(!o)return[];let r=o.normalize(),n=[];for(let a of r)this._index.forEachInBounds(Ae(a),({normalizedCoords:l,element:p})=>{l!=null&&Ne(a,l)&&n.push(p)});return n.sort((a,l)=>this._elementsIndexes.get(a)-this._elementsIndexes.get(l)),n})}_updateIndexForElement(e,t){let o=e.normalizedBounds,r=this._index.has(e),n=o!=null;this._index.delete(e),n&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(r!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([s()],Q.prototype,"elements",null),i([s({readOnly:!0})],Q.prototype,"fullExtent",null),i([s()],Q.prototype,"spatialReference",null),Q=i([u("esri.layers.support.LocalMediaElementSource")],Q);var oe=Q;function pt(e){return typeof e=="object"&&e!=null&&"type"in e}var g=class extends Fe(qe(et(Ve(rt)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new oe}load(e){let t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new I("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);let o=pt(t)?new oe({elements:new J([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference);let r=o.load(e).then(()=>{this.spatialReference=o.spatialReference});return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):v.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new oe({elements:new J(e)}):e instanceof J?new oe({elements:e}):e:null}readSource(e,t,o){let r=t.mediaType==="image"?new le:t.mediaType==="video"?new pe:null;return r?.read(t,o),r}writeSource(e,t,o,r){e&&pt(e)&&e.type==="image"?e.write(t,r):r?.messages&&r?.messages?.push(new I("media-layer:unsupported-source","source must be an 'ImageElement'"))}};i([s({readOnly:!0})],g.prototype,"effectiveSource",void 0),i([s({type:String})],g.prototype,"copyright",void 0),i([s({readOnly:!0})],g.prototype,"fullExtent",null),i([s({type:["MediaLayer"]})],g.prototype,"operationalLayerType",void 0),i([s({type:["show","hide"]})],g.prototype,"listMode",void 0),i([s({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],g.prototype,"source",null),i([He("source")],g.prototype,"castSource",null),i([C("source",["url"])],g.prototype,"readSource",null),i([D("source")],g.prototype,"writeSource",null),i([s()],g.prototype,"spatialReference",void 0),i([s({readOnly:!0})],g.prototype,"type",void 0),g=i([u("esri.layers.MediaLayer")],g);var Sn=g;export{Sn as default};
