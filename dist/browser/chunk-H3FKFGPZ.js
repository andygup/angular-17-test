import{a as h,b as d}from"./chunk-6WWQ4Y2G.js";import"./chunk-UEH4FZMX.js";import"./chunk-XKOINRUM.js";import"./chunk-Z7J4BCLI.js";import"./chunk-GIHBFCPM.js";import"./chunk-TKTKGUCU.js";import"./chunk-IRJFYPO2.js";import"./chunk-WKOJXXCZ.js";import"./chunk-MNLP6AEE.js";import"./chunk-LGUXUFJ7.js";import"./chunk-HSB35X5B.js";import"./chunk-HPJ6EQFO.js";import"./chunk-RCWJNG4Z.js";import"./chunk-574KRDZU.js";import{a as n,b as l}from"./chunk-JOYABHZZ.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-QSGARGRB.js";import"./chunk-IXIJFOEL.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-CBOFHDSC.js";import"./chunk-HB7BVTLV.js";import{b as o}from"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-RXHILZH7.js";import"./chunk-VU5W7W6Y.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import{H as i}from"./chunk-WMYPRHRR.js";import{R as a}from"./chunk-IAMDMFZ7.js";import{a as r}from"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import"./chunk-ESDYQQXO.js";var t=class extends h(d){constructor(e){super(e),this.layerViews=new o}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,s)=>e+s.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,s)=>this.container.addChildAt(e.container,s))}};r([i({cast:l})],t.prototype,"layerViews",null),r([i({readOnly:!0})],t.prototype,"updatingProgress",null),t=r([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);var v=t;export{v as default};
