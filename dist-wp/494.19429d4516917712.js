"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[494],{57487:(A,R,e)=>{e.d(R,{T:()=>x});var E=e(15861),y=e(79412),g=e(65430),D=e(78857),h=e(75747),f=e(55768),M=e(49602),P=e(44526),d=e(32196),m=e(56035),p=e(86171),I=e(19903);function C(O,t){const i=t.length;if(O<t[0].value||1===i)return t[0].size;for(let r=1;r<i;r++)if(O<t[r].value)return t[r-1].size+(O-t[r-1].value)/(t[r].value-t[r-1].value)*(t[r].size-t[r-1].size);return t[i-1].size}class V{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=m.v}getSizeVVFieldStops(t){const i=this._vvSizeFieldStops;if(i)switch(i.type){case"static":return i;case"level-dependent":return i.levels[t]??(()=>{let r=1/0,s=0;for(const a in i.levels){const o=parseFloat(a),l=Math.abs(t-o);l<r&&(r=l,s=o)}if(r===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const n=2**((t-s)/2),c=i.levels[s],v=new Float32Array(c.values);return v[2]*=n,v[3]*=n,{sizes:c.sizes,values:v}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,i,r){this._updateEffects(r),this._vvInfo=i,this._technique=(0,p.EJ)(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,I.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){this.outsideLabelsVisible=null!=t&&t.excludedLabelsVisible}_updateVisualVariables(t,i){const r=this._vvMaterialParameters;if(r.vvOpacityEnabled=!1,r.vvSizeEnabled=!1,r.vvColorEnabled=!1,r.vvRotationEnabled=!1,!t)return;const s=t.size;if(s){if(r.vvSizeEnabled=!0,s.minMaxValue){const a=s.minMaxValue;let o,l;if((0,d.$K)(a.minSize)&&(0,d.$K)(a.maxSize))if((0,d.hj)(a.minSize)&&(0,d.hj)(a.maxSize))o=(0,f.F2)(a.minSize),l=(0,f.F2)(a.maxSize);else{const u=i.scale;o=(0,f.F2)(C(u,a.minSize.stops)),l=(0,f.F2)(C(u,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,o,l])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,f.F2)(C(i.scale,s.scaleStops.stops))),s.unitValue){const a=(0,M.c9)(i.spatialReference)/P.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=a/i.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const n=t.color;n&&(r.vvColorEnabled=!0,this.vvColorValues.set(n.values),this.vvColors.set(n.colors));const c=t.opacity;c&&(r.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),this.vvOpacities.set(c.opacities));const v=t.rotation;v&&(r.vvRotationEnabled=!0,r.vvRotationType=v.type)}}class x extends h.Z{constructor(t){super(t),this._rendererInfo=new V,this._materialItemsRequestQueue=new g.Z,this.attributeView=new D.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,i,r){this._rendererInfo.setInfo(t,i,r),this.requestRender()}getMaterialItems(t,i){var r=this;return(0,E.Z)(function*(){if(!t||0===t.length)return[];const s=(0,y.hh)();return r._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:s}),r.requestRender(),s.promise})()}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let i=this._materialItemsRequestQueue.pop();for(;i;)this._processMaterialItemRequest(t,i),i=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const i of this.children)i.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){const i=super.createRenderParams(t);return i.rendererInfo=this._rendererInfo,i.attributeView=this.attributeView,i}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:i,abortOptions:r,resolver:s}){const{painter:n,pixelRatio:c}=t,v=i.map(a=>n.textureManager.rasterizeItem(a.symbol,c,a.glyphIds,r));Promise.all(v).then(a=>{if(!this.stage)return void s.reject();const o=a.map((l,u)=>({id:i[u].id,mosaicItem:l}));s.resolve(o)},s.reject)}}},75747:(A,R,e)=>{e.d(R,{Z:()=>M});var E=e(14007),y=e(43101),g=e(92311),D=e(58960),h=e(46356);const f=(P,d)=>P.key.level-d.key.level!=0?P.key.level-d.key.level:P.key.row-d.key.row!=0?P.key.row-d.key.row:P.key.col-d.key.col;class M extends g.Z{constructor(d){super(),this._tileInfoView=d}renderChildren(d){this.sortChildren(f),this.setStencilReference(d),super.renderChildren(d)}createRenderParams(d){const{state:m}=d,p=super.createRenderParams(d);return p.requiredLevel=this._tileInfoView.getClosestInfoForScale(m.scale).level,p.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(m.scale),p}prepareRenderPasses(d){const m=super.prepareRenderPasses(d);return m.push(d.registerRenderPass({name:"stencil",brushes:[h.Z],drawPhase:y.jx.DEBUG|y.jx.MAP|y.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,E.Z)("esri-tiles-debug")&&m.push(d.registerRenderPass({name:"tileInfo",brushes:[D.Z],drawPhase:y.jx.DEBUG,target:()=>this.children})),m}getStencilTarget(){return this.children}setStencilReference(d){let m=1;for(const p of this.children)p.stencilRef=m++}}},20494:(A,R,e)=>{e.r(R),e.d(R,{default:()=>s});var E=e(15861),y=e(50484),g=e(62691),D=e(83944),h=e(77675),p=(e(4703),e(1535),e(57678),e(14007),e(57964),e(10141)),I=e(50923),C=e(91963),V=e(93792),x=e(93509),O=e(50800),t=e(68994),i=e(50145);let r=class extends((0,x.y)(i.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(n,c){var v=this;return(0,E.Z)(function*(){if(!v.graphicsViews.length)return null;const a=v.layer;return v.graphicsViews.reverse().flatMap(o=>{const l=v._popupTemplates.get(o),u=o.hitTest(n);for(const _ of u)_.layer=a,_.sourceLayer=a,_.popupTemplate=l;return u}).map(o=>({type:"graphic",graphic:o,layer:a,mapPoint:n}))})()}update(n){if(this.graphicsViews)for(const c of this.graphicsViews)c.processUpdate(n)}attach(){this.addAttachHandles([(0,h.YP)(()=>this.layer?.featureCollections,n=>{this._clear();for(const{popupInfo:c,featureSet:v,layerDefinition:a}of n){const o=V.Z.fromJSON(v),l=new D.Z(o.features),u=a.drawingInfo,_=c?g.Z.fromJSON(c):null,b=(0,C.i)(u.renderer),T=new t.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:b,container:new O.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[o.geometryType]=T,this._popupTemplates.set(T,_),"polygon"!==o.geometryType||this.layer.polygonSymbol?"polyline"!==o.geometryType||this.layer.lineSymbol?"point"!==o.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=b.symbol):this.layer.lineSymbol=b.symbol:this.layer.polygonSymbol=b.symbol,this.graphicsViews.push(T),this.container.addChild(T.container)}},h.nn),(0,h.YP)(()=>this.layer?.polygonSymbol,n=>{this._graphicsViewMap.polygon.renderer=new I.Z({symbol:n})},h.nn),(0,h.YP)(()=>this.layer?.lineSymbol,n=>{this._graphicsViewMap.polyline.renderer=new I.Z({symbol:n})},h.nn),(0,h.YP)(()=>this.layer?.pointSymbol,n=>{this._graphicsViewMap.point.renderer=new I.Z({symbol:n})},h.nn)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const n of this.graphicsViews)n.viewChange()}_clear(){this.container.removeAllChildren();for(const n of this.graphicsViews)n.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};r=(0,y._)([(0,p.j)("esri.views.2d.layers.GeoRSSLayerView2D")],r);const s=r},26055:(A,R,e)=>{e.d(R,{Z:()=>t});var E=e(51172),y=e(57487),g=e(51006),D=e(71602),h=e(7077),f=e(33520),M=e(93566),P=e(64456),d=e(32196),m=e(39853),p=e(39237),I=e(46682);const C=Math.PI/180;class x extends P.s{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,D.c)(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,E.M2)(this._program)}doRender(r){const{context:s}=r,n=this._getBounds();if(n.length<1)return;this._createShaderProgram(s),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(s,n),s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setBlendFunction(p.zi.ONE,p.zi.ONE_MINUS_SRC_ALPHA),s.setColorMask(!0,!0,!0,!0);const c=this._program;s.bindVAO(this._vao),s.useProgram(c),c.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),s.gl.lineWidth(1),s.drawElements(p.MX.LINES,8*n.length,p.g.UNSIGNED_INT,0),s.bindVAO()}_createTransforms(){return{dvs:(0,D.c)()}}_createShaderProgram(r){this._program||(this._program=r.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",O().attributes))}_updateMatricesAndLocalOrigin(r){const{state:s}=r,{displayMat3:n,size:c,resolution:v,pixelRatio:a,rotation:o,viewpoint:l}=s,u=C*o,{x:_,y:b}=l.targetGeometry,T=(0,M.or)(_,s.spatialReference);this._localOrigin.x=T,this._localOrigin.y=b;const B=a*c[0],L=a*c[1],U=v*B,j=v*L,S=(0,g.g)(this._dvsMat3);(0,g.m)(S,S,n),(0,g.h)(S,S,(0,h.f)(B/2,L/2)),(0,g.c)(S,S,(0,f.f)(c[0]/U,-L/j,1)),(0,g.r)(S,S,-u)}_updateBufferData(r,s){const{x:n,y:c}=this._localOrigin,a=new Float32Array(8*s.length),o=new Uint32Array(8*s.length);let l=0,u=0;for(const _ of s)_&&(a[2*l]=_[0]-n,a[2*l+1]=_[1]-c,a[2*l+2]=_[0]-n,a[2*l+3]=_[3]-c,a[2*l+4]=_[2]-n,a[2*l+5]=_[3]-c,a[2*l+6]=_[2]-n,a[2*l+7]=_[1]-c,o[u]=l+0,o[u+1]=l+3,o[u+2]=l+3,o[u+3]=l+2,o[u+4]=l+2,o[u+5]=l+1,o[u+6]=l+1,o[u+7]=l+0,l+=4,u+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=m.f.createVertex(r,p.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=m.f.createIndex(r,p.l1.DYNAMIC_DRAW,o),!this._vao){const _=O();this._vao=new I.U(r,_.attributes,_.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const O=()=>(0,d.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.g.FLOAT}]});let t=class extends y.T{constructor(i){super(i),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,E.SC)(this._boundsRenderer)}enableRenderingBounds(i){this._boundsRenderer=new x(i),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(i,r){i.patch(r),this.contains(i)||this.addChild(i),this.requestRender()}onTileError(i){i.clear(),this.contains(i)||this.addChild(i)}_renderChildren(i,r){for(const s of this.children)s.isReady&&s.hasData&&(s.commit(i),i.context.setStencilFunction(p.wb.EQUAL,s.stencilRef,255),s.getDisplayList().replay(i,s,r))}}},50800:(A,R,e)=>{e.d(R,{Z:()=>g});var E=e(43101),y=e(26055);class g extends y.Z{renderChildren(h){this.attributeView.update(),this.children.some(f=>f.hasData)&&(this.attributeView.bindTextures(h.context,!1),super.renderChildren(h),h.drawPhase===E.jx.MAP&&this._renderChildren(h),this.hasHighlight&&h.drawPhase===E.jx.HIGHLIGHT&&this._renderHighlight(h),this._boundsRenderer&&this._boundsRenderer.doRender(h))}_renderHighlight(h){const{painter:f}=h,M=f.effects.highlight;M.bind(h),this._renderChildren(h,M.defines),M.draw(h),M.unbind()}}}}]);