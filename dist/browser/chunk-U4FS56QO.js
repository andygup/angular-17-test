import{a as M,b as p}from"./chunk-AJBUCX6Q.js";import"./chunk-HBDWL3B4.js";import{a as R}from"./chunk-2ZJ3WQRV.js";import"./chunk-XUKLUIRQ.js";import{a as q,b}from"./chunk-6WWQ4Y2G.js";import"./chunk-YFMEPRZQ.js";import"./chunk-HTQH2YLG.js";import"./chunk-IOMUCP7J.js";import"./chunk-UEH4FZMX.js";import"./chunk-5ZJSZISC.js";import"./chunk-XKOINRUM.js";import"./chunk-EVB25YXG.js";import"./chunk-Z7J4BCLI.js";import"./chunk-BYXBJQAS.js";import"./chunk-BSIXRBVK.js";import"./chunk-Y5K4QJZR.js";import"./chunk-EKY6QR7N.js";import"./chunk-VK2CQJOC.js";import"./chunk-AUIMNX4Y.js";import"./chunk-N7PHAMWX.js";import"./chunk-NKBP5F7I.js";import"./chunk-EEYJPINK.js";import"./chunk-BZEC7TCW.js";import"./chunk-GIHBFCPM.js";import"./chunk-W5OI4BJ2.js";import"./chunk-TKTKGUCU.js";import"./chunk-M3GEY4SR.js";import"./chunk-7QY3BMVN.js";import"./chunk-4HXOVZYF.js";import"./chunk-U2QVIRVP.js";import"./chunk-IRJFYPO2.js";import"./chunk-WKOJXXCZ.js";import"./chunk-MNLP6AEE.js";import"./chunk-LGUXUFJ7.js";import"./chunk-HSB35X5B.js";import{a as x}from"./chunk-Z77VHNI3.js";import{a as v}from"./chunk-LMIKL5PS.js";import{a as V}from"./chunk-OKLB3DLR.js";import"./chunk-DWZPFSNU.js";import"./chunk-MCIUWLYC.js";import{a as f}from"./chunk-EEZEB3RB.js";import"./chunk-45GFWXQC.js";import"./chunk-YEFC7M4L.js";import"./chunk-HPJ6EQFO.js";import"./chunk-ZOTIMGGE.js";import"./chunk-7UQPY7PH.js";import"./chunk-OHIIU6WS.js";import"./chunk-RCWJNG4Z.js";import"./chunk-TQYOVOJO.js";import"./chunk-CJJRHJ2S.js";import"./chunk-574KRDZU.js";import"./chunk-ZWFVPWKA.js";import"./chunk-JOYABHZZ.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-QSGARGRB.js";import"./chunk-SREKDU6P.js";import"./chunk-IXIJFOEL.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-CBOFHDSC.js";import"./chunk-HB7BVTLV.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-RXHILZH7.js";import"./chunk-VU5W7W6Y.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import{n as u}from"./chunk-CZPMRK53.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import{H as S}from"./chunk-WMYPRHRR.js";import{R as T}from"./chunk-IAMDMFZ7.js";import{a as n}from"./chunk-53MWZ23O.js";import{p as c}from"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as I}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as w,b as g,g as r}from"./chunk-ESDYQQXO.js";var Q=new Set([102113,102100,3857,3785,900913]),U=[0,0],a=class extends R(M(q(b))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){let e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){let e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new V(e),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>u(t.tileInfo?.spatialReference,e))??!1}doRefresh(){return r(this,null,function*(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}})}acquireTile(e){let t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(U,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(i){return r(this,arguments,function*(e,t={}){let s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:l,resamplingLevel:m=0}=t;if(!s)return this._fetchImage(e,l);let h=new f(0,0,0,0),d;try{yield s.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:l}),d=yield this._fetchImage(h,l)}catch(o){if(c(o))throw o;if(m<3){let y=this._tileInfoView.getTileParentId(e.id);if(y){let _=new f(y),L=yield this.fetchTile(_,g(w({},t),{resamplingLevel:m+1}));return p(this._tileInfoView,L,_,e)}}throw o}return p(this._tileInfoView,d,h,e)})}canResume(){let e=super.canResume();return e&&this.tileMatrixSet!==null}_enqueueTileFetch(e){return r(this,null,function*(){if(!this._fetchQueue.has(e.key.id)){try{let t=yield this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){c(t)||I.getLogger(this).error(t)}this.requestUpdate()}})}_fetchImage(e,t){return r(this,null,function*(){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})})}_getTileMatrixSetBySpatialReference(e){let t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>u(s.tileInfo?.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>Q.has(s.tileInfo?.spatialReference.wkid??-1))),i}};n([S({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=n([T("esri.views.2d.layers.WMTSLayerView2D")],a);var Y=a;export{Y as default};