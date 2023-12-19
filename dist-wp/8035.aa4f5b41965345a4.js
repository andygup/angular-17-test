"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[8035],{57487:(x,R,i)=>{i.d(R,{T:()=>S});var M=i(15861),f=i(79412),m=i(65430),O=i(78857),d=i(75747),v=i(55768),I=i(49602),P=i(44526),o=i(32196),g=i(56035),u=i(86171),V=i(19903);function D(E,r){const e=r.length;if(E<r[0].value||1===e)return r[0].size;for(let t=1;t<e;t++)if(E<r[t].value)return r[t-1].size+(E-r[t-1].value)/(r[t].value-r[t-1].value)*(r[t].size-r[t-1].size);return r[e-1].size}class A{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=g.v}getSizeVVFieldStops(r){const e=this._vvSizeFieldStops;if(e)switch(e.type){case"static":return e;case"level-dependent":return e.levels[r]??(()=>{let t=1/0,s=0;for(const a in e.levels){const l=parseFloat(a),n=Math.abs(r-l);n<t&&(t=n,s=l)}if(t===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const h=2**((r-s)/2),c=e.levels[s],y=new Float32Array(c.values);return y[2]*=h,y[3]*=h,{sizes:c.sizes,values:y}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(r){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,r)}setInfo(r,e,t){this._updateEffects(t),this._vvInfo=e,this._technique=(0,u.EJ)(r),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,r)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,V.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(r){this.outsideLabelsVisible=null!=r&&r.excludedLabelsVisible}_updateVisualVariables(r,e){const t=this._vvMaterialParameters;if(t.vvOpacityEnabled=!1,t.vvSizeEnabled=!1,t.vvColorEnabled=!1,t.vvRotationEnabled=!1,!r)return;const s=r.size;if(s){if(t.vvSizeEnabled=!0,s.minMaxValue){const a=s.minMaxValue;let l,n;if((0,o.$K)(a.minSize)&&(0,o.$K)(a.maxSize))if((0,o.hj)(a.minSize)&&(0,o.hj)(a.maxSize))l=(0,v.F2)(a.minSize),n=(0,v.F2)(a.maxSize);else{const _=e.scale;l=(0,v.F2)(D(_,a.minSize.stops)),n=(0,v.F2)(D(_,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,l,n])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,v.F2)(D(e.scale,s.scaleStops.stops))),s.unitValue){const a=(0,I.c9)(e.spatialReference)/P.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=a/e.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const h=r.color;h&&(t.vvColorEnabled=!0,this.vvColorValues.set(h.values),this.vvColors.set(h.colors));const c=r.opacity;c&&(t.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),this.vvOpacities.set(c.opacities));const y=r.rotation;y&&(t.vvRotationEnabled=!0,t.vvRotationType=y.type)}}class S extends d.Z{constructor(r){super(r),this._rendererInfo=new A,this._materialItemsRequestQueue=new m.Z,this.attributeView=new O.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(r=>r.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(r,e,t){this._rendererInfo.setInfo(r,e,t),this.requestRender()}getMaterialItems(r,e){var t=this;return(0,M.Z)(function*(){if(!r||0===r.length)return[];const s=(0,f.hh)();return t._materialItemsRequestQueue.push({items:r,abortOptions:e,resolver:s}),t.requestRender(),s.promise})()}doRender(r){if(r.context.capabilities.enable("textureFloat"),r.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(r,e),e=this._materialItemsRequestQueue.pop()}super.doRender(r)}renderChildren(r){for(const e of this.children)e.commit(r);this._rendererInfo.update(r.state),super.renderChildren(r)}createRenderParams(r){const e=super.createRenderParams(r);return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(r,{items:e,abortOptions:t,resolver:s}){const{painter:h,pixelRatio:c}=r,y=e.map(a=>h.textureManager.rasterizeItem(a.symbol,c,a.glyphIds,t));Promise.all(y).then(a=>{if(!this.stage)return void s.reject();const l=a.map((n,_)=>({id:e[_].id,mosaicItem:n}));s.resolve(l)},s.reject)}}},75747:(x,R,i)=>{i.d(R,{Z:()=>I});var M=i(14007),f=i(43101),m=i(92311),O=i(58960),d=i(46356);const v=(P,o)=>P.key.level-o.key.level!=0?P.key.level-o.key.level:P.key.row-o.key.row!=0?P.key.row-o.key.row:P.key.col-o.key.col;class I extends m.Z{constructor(o){super(),this._tileInfoView=o}renderChildren(o){this.sortChildren(v),this.setStencilReference(o),super.renderChildren(o)}createRenderParams(o){const{state:g}=o,u=super.createRenderParams(o);return u.requiredLevel=this._tileInfoView.getClosestInfoForScale(g.scale).level,u.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(g.scale),u}prepareRenderPasses(o){const g=super.prepareRenderPasses(o);return g.push(o.registerRenderPass({name:"stencil",brushes:[d.Z],drawPhase:f.jx.DEBUG|f.jx.MAP|f.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,M.Z)("esri-tiles-debug")&&g.push(o.registerRenderPass({name:"tileInfo",brushes:[O.Z],drawPhase:f.jx.DEBUG,target:()=>this.children})),g}getStencilTarget(){return this.children}setStencilReference(o){let g=1;for(const u of this.children)u.stencilRef=g++}}},8035:(x,R,i)=>{i.r(R),i.d(R,{default:()=>r});var M=i(15861),f=i(50484),m=i(35458),O=i(57678),d=i(83944),v=i(1258),I=i(51172),P=i(80543),u=(i(1535),i(14007),i(10141)),V=i(93509),D=i(50800),A=i(68994),S=i(50145);let E=class extends((0,V.y)(S.Z)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new A.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new D.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=(0,I.SC)(this.graphicsView)}hitTest(e){var t=this;return(0,M.Z)(function*(){return t.graphicsView?t.graphicsView.hitTest(e).map(s=>({type:"graphic",graphic:s,mapPoint:e,layer:t.layer})):null})()}fetchPopupFeatures(e){var t=this;return(0,M.Z)(function*(){return t.graphicsView?t.graphicsView.hitTest(e).filter(s=>!!s.popupTemplate):[]})()}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let t;"number"==typeof e?t=[e]:e instanceof m.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map(h=>h&&h.uid):d.Z.isCollection(e)&&e.length>0&&(t=e.map(h=>h&&h.uid).toArray());const s=t?.filter(O.pC);return s?.length?(this._addHighlight(s),(0,v.kB)(()=>this._removeHighlight(s))):(0,v.kB)()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const s=this._highlightIds.get(t);this._highlightIds.set(t,s+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const s=this._highlightIds.get(t)-1;0===s?this._highlightIds.delete(t):this._highlightIds.set(t,s)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};(0,f._)([(0,P.Cb)()],E.prototype,"graphicsView",void 0),E=(0,f._)([(0,u.j)("esri.views.2d.layers.GraphicsLayerView2D")],E);const r=E},26055:(x,R,i)=>{i.d(R,{Z:()=>r});var M=i(51172),f=i(57487),m=i(51006),O=i(71602),d=i(7077),v=i(33520),I=i(93566),P=i(64456),o=i(32196),g=i(39853),u=i(39237),V=i(46682);const D=Math.PI/180;class S extends P.s{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,O.c)(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,M.M2)(this._program)}doRender(t){const{context:s}=t,h=this._getBounds();if(h.length<1)return;this._createShaderProgram(s),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(s,h),s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setBlendFunction(u.zi.ONE,u.zi.ONE_MINUS_SRC_ALPHA),s.setColorMask(!0,!0,!0,!0);const c=this._program;s.bindVAO(this._vao),s.useProgram(c),c.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),s.gl.lineWidth(1),s.drawElements(u.MX.LINES,8*h.length,u.g.UNSIGNED_INT,0),s.bindVAO()}_createTransforms(){return{dvs:(0,O.c)()}}_createShaderProgram(t){this._program||(this._program=t.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",E().attributes))}_updateMatricesAndLocalOrigin(t){const{state:s}=t,{displayMat3:h,size:c,resolution:y,pixelRatio:a,rotation:l,viewpoint:n}=s,_=D*l,{x:p,y:B}=n.targetGeometry,L=(0,I.or)(p,s.spatialReference);this._localOrigin.x=L,this._localOrigin.y=B;const T=a*c[0],b=a*c[1],U=y*T,j=y*b,C=(0,m.g)(this._dvsMat3);(0,m.m)(C,C,h),(0,m.h)(C,C,(0,d.f)(T/2,b/2)),(0,m.c)(C,C,(0,v.f)(c[0]/U,-b/j,1)),(0,m.r)(C,C,-_)}_updateBufferData(t,s){const{x:h,y:c}=this._localOrigin,a=new Float32Array(8*s.length),l=new Uint32Array(8*s.length);let n=0,_=0;for(const p of s)p&&(a[2*n]=p[0]-h,a[2*n+1]=p[1]-c,a[2*n+2]=p[0]-h,a[2*n+3]=p[3]-c,a[2*n+4]=p[2]-h,a[2*n+5]=p[3]-c,a[2*n+6]=p[2]-h,a[2*n+7]=p[1]-c,l[_]=n+0,l[_+1]=n+3,l[_+2]=n+3,l[_+3]=n+2,l[_+4]=n+2,l[_+5]=n+1,l[_+6]=n+1,l[_+7]=n+0,n+=4,_+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=g.f.createVertex(t,u.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(l):this._indexBuffer=g.f.createIndex(t,u.l1.DYNAMIC_DRAW,l),!this._vao){const p=E();this._vao=new V.U(t,p.attributes,p.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const E=()=>(0,o.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:u.g.FLOAT}]});let r=class extends f.T{constructor(e){super(e),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,M.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new S(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const s of this.children)s.isReady&&s.hasData&&(s.commit(e),e.context.setStencilFunction(u.wb.EQUAL,s.stencilRef,255),s.getDisplayList().replay(e,s,t))}}},50800:(x,R,i)=>{i.d(R,{Z:()=>m});var M=i(43101),f=i(26055);class m extends f.Z{renderChildren(d){this.attributeView.update(),this.children.some(v=>v.hasData)&&(this.attributeView.bindTextures(d.context,!1),super.renderChildren(d),d.drawPhase===M.jx.MAP&&this._renderChildren(d),this.hasHighlight&&d.drawPhase===M.jx.HIGHLIGHT&&this._renderHighlight(d),this._boundsRenderer&&this._boundsRenderer.doRender(d))}_renderHighlight(d){const{painter:v}=d,I=v.effects.highlight;I.bind(d),this._renderChildren(d,I.defines),I.draw(d),I.unbind()}}}}]);