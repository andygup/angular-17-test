import{d as O}from"./chunk-XUKLUIRQ.js";import{a as q}from"./chunk-OKLB3DLR.js";import{a as T}from"./chunk-EEZEB3RB.js";import{b as A}from"./chunk-HUZLTBDZ.js";import{a as H,e as b}from"./chunk-55ESOXMJ.js";import{o as N}from"./chunk-CZPMRK53.js";import{H as h,K as I}from"./chunk-WMYPRHRR.js";import{R as B}from"./chunk-IAMDMFZ7.js";import{a as m}from"./chunk-53MWZ23O.js";import{i as S,k as E,r as W,y as z}from"./chunk-PT7S6WNL.js";import{g as y}from"./chunk-ESDYQQXO.js";var j=Math.PI/180;function k(e){return e*j}function C(e,i){let a=k(i.rotation),t=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a)),[o,n]=i.size;return e[0]=Math.round(n*s+o*t),e[1]=Math.round(n*t+o*s),e}function U(e,i,a,t){let[s,o]=i,[n,r]=t,l=.5*a;return e[0]=s-l*n,e[1]=o-l*r,e[2]=s+l*n,e[3]=o+l*r,e}var u=H(),c=[0,0],v=new T(0,0,0,0),M={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1},p=class extends I{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=M.hidpi,this.imageMaxWidth=M.imageMaxWidth,this.imageMaxHeight=M.imageMaxHeight,this.imageRotationSupported=M.imageRotationSupported,this.imageNormalizationSupported=M.imageNormalizationSupported,this.update=z((i,a)=>y(this,null,function*(){if(S(a),!i.stationary||this.destroyed)return;let t=i.state,s=N(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0],r=this.imageMaxWidth??0,l=this.imageMaxHeight??0;n?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):C(c,t);let w=Math.floor(c[0]*o)>r||Math.floor(c[1]*o)>l,_=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),f=!this.imageNormalizationSupported&&_,P=!w&&!f,x=this.imageRotationSupported?t.rotation:0,V=this.container.children.slice();if(P){let d=n?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,c,d,t.resolution,x,o,a)}else{let d=Math.min(r,l);f&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,o,a)}try{let d=(yield this._imagePromise)??[];S(a);let R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=d;for(let g of V)d.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(let g of d)R.push(g.fadeIn());yield Promise.all(R)}catch(d){this._imagePromise=null,E(d)}}),5e3),this.updateExports=z(i=>y(this,null,function*(){let a=[];for(let t of this.container.children){if(!t.visible||!t.stage)return;a.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=W(a).then(()=>this._imagePromise=null),yield this._imagePromise}))}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}_export(e,i,a,t,s,o){return y(this,null,function*(){let n=yield this.fetchSource(e,Math.floor(i*s),Math.floor(a*s),{rotation:t,pixelRatio:s,signal:o});S(o);let r=new O(null,!0);return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/i,r.rotation=t,r.pixelRatio=s,r.opacity=0,this.container.addChild(r),yield r.setSourceAsync(n,o),S(o),r})}_singleExport(e,i,a,t,s,o,n){return y(this,null,function*(){U(u,a,t,i);let r=b(u,e.spatialReference);return[yield this._export(r,i[0],i[1],s,o,n)]})}_tiledExport(e,i,a,t){let s=A.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new q(s),n=o.getTileCoverage(e);if(!n)return null;let r=[];return n.forEach((l,w,_,f)=>{v.set(l,w,_,0),o.getTileBounds(u,v);let P=b(u,e.spatialReference);r.push(this._export(P,i,i,0,a,t).then(x=>(f!==0&&(v.set(l,w,_,f),o.getTileBounds(u,v),x.x=u[0],x.y=u[3]),x)))}),Promise.all(r)}};m([h()],p.prototype,"_imagePromise",void 0),m([h()],p.prototype,"bitmaps",void 0),m([h()],p.prototype,"container",void 0),m([h()],p.prototype,"fetchSource",void 0),m([h()],p.prototype,"hidpi",void 0),m([h()],p.prototype,"imageMaxWidth",void 0),m([h()],p.prototype,"imageMaxHeight",void 0),m([h()],p.prototype,"imageRotationSupported",void 0),m([h()],p.prototype,"imageNormalizationSupported",void 0),m([h()],p.prototype,"requestUpdate",void 0),m([h()],p.prototype,"updating",null),p=m([B("esri.views.2d.layers.support.ExportStrategy")],p);var at=p;export{at as a};