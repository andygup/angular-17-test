import{b as F}from"./chunk-UULYHJV4.js";import{a as L}from"./chunk-KZREEH45.js";import{a as c,c as j,h as H}from"./chunk-BGARZEEH.js";import{a as ne}from"./chunk-B3I4XIHJ.js";import{c as E,p as _,q as R}from"./chunk-MYELF7MV.js";import{a as M}from"./chunk-BQABCLW6.js";import{a as p}from"./chunk-HPJ6EQFO.js";import{a as b}from"./chunk-D6LLE2YP.js";import{a as ie,b as oe,c as se}from"./chunk-ZWFVPWKA.js";import{g as le,i as w}from"./chunk-VDN3XKL2.js";import{c as N}from"./chunk-AQ74ANSJ.js";import{a as S}from"./chunk-WUM4JBII.js";import{a as A}from"./chunk-A52LT7YB.js";import{a as re}from"./chunk-2BBIRZVO.js";import{h as y}from"./chunk-FNDPIYNC.js";import{H as r,b as Q,t as X}from"./chunk-WMYPRHRR.js";import{H as Z,L as ee,M as te,R as s,b as W,v as Y}from"./chunk-IAMDMFZ7.js";import{a as t}from"./chunk-53MWZ23O.js";import{b as n,p as g}from"./chunk-465DRXTW.js";import{p as U}from"./chunk-AC62Z3FX.js";import{d as K,g as d}from"./chunk-ESDYQQXO.js";var q,h=q=class extends j(c){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new M(this.url,this.config,this.fieldMap)}writeData(e,i){e&&(i.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,i,o,a){a?.origin||super.writeVisualVariables(e,i,o,a)}clone(){return new q({config:n(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:n(this.fieldMap),url:n(this.url),visualVariables:n(this.visualVariables)})}getSymbolAsync(e,i){return d(this,null,function*(){return this._loader.getSymbolAsync(e,i)})}collectRequiredFields(e,i){return d(this,null,function*(){yield this.collectVVRequiredFields(e,i),this.scaleExpression&&(yield w(e,i,this.scaleExpression));for(let o in this.fieldMap){let a=this.fieldMap[o];i.has(a)&&e.add(a)}})}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,i)=>e+i.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};t([r({type:M})],h.prototype,"_loader",null),t([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],h.prototype,"config",void 0),t([r({type:Object,json:{write:!0}})],h.prototype,"fieldMap",void 0),t([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],h.prototype,"scaleExpression",void 0),t([A("scaleExpression")],h.prototype,"writeData",null),t([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],h.prototype,"scaleExpressionTitle",void 0),t([r({type:String,json:{write:!0}})],h.prototype,"url",void 0),t([A("visualVariables")],h.prototype,"writeVisualVariables",null),h=q=t([s("esri.renderers.DictionaryRenderer")],h);var ae=h;var k,f=k=class extends y{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(g.getLogger(this).error(".field: field must be a string value"),null):Y(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new k({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([r({type:p,json:{type:[Number],write:!0}})],f.prototype,"color",void 0),t([r({type:String,json:{write:!0}})],f.prototype,"field",void 0),t([re("field")],f.prototype,"castField",null),t([r({type:String,json:{write:!0}})],f.prototype,"label",void 0),t([r({type:String,json:{write:!0}})],f.prototype,"valueExpression",void 0),t([r({type:String,json:{write:!0}})],f.prototype,"valueExpressionTitle",void 0),f=k=t([s("esri.renderers.support.AttributeColorInfo")],f);var T=f;var $,C=$=class extends y{constructor(){super(...arguments),this.unit=null}clone(){return new $({unit:this.unit})}};t([r({type:String,json:{write:!0}})],C.prototype,"unit",void 0),C=$=t([s("esri.renderers.support.DotDensityLegendOptions")],C);var pe=C;var B,u=B=class extends j(c){constructor(e){super(e),this.attributes=null,this.backgroundColor=new p([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new E,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;let i=e/this.referenceScale*this.dotValue;return i<1?1:i}getSymbol(){return new _({outline:this.outline})}getSymbolAsync(){return d(this,null,function*(){return this.getSymbol()})}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce((e,i)=>e+i.getAttributeHash(),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new B({attributes:n(this.attributes),backgroundColor:n(this.backgroundColor),dotBlendingEnabled:n(this.dotBlendingEnabled),dotShape:n(this.dotShape),dotSize:n(this.dotSize),dotValue:n(this.dotValue),legendOptions:n(this.legendOptions),outline:n(this.outline),referenceScale:n(this.referenceScale),visualVariables:n(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes?.map(i=>i.field||i.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}collectRequiredFields(e,i){return d(this,null,function*(){yield this.collectVVRequiredFields(e,i);for(let o of this.attributes??[])o.valueExpression&&(yield w(e,i,o.valueExpression)),o.field&&e.add(o.field)})}};t([r({type:[T],json:{write:!0}})],u.prototype,"attributes",void 0),t([r({type:p,json:{write:!0}})],u.prototype,"backgroundColor",void 0),t([r({type:Boolean,json:{write:!0}})],u.prototype,"dotBlendingEnabled",void 0),t([r({type:String,json:{write:!1}})],u.prototype,"dotShape",void 0),t([r({type:Number,json:{write:!0}})],u.prototype,"dotSize",void 0),t([r({type:pe,json:{write:!0}})],u.prototype,"legendOptions",void 0),t([r({type:E,json:{default:null,write:!0}})],u.prototype,"outline",void 0),t([r({type:Number,json:{write:!0}})],u.prototype,"dotValue",void 0),t([r({type:Number,json:{write:!0}})],u.prototype,"referenceScale",void 0),t([r({type:Number,json:{write:!0}})],u.prototype,"seed",void 0),t([S({dotDensity:"dot-density"})],u.prototype,"type",void 0),u=B=t([s("esri.renderers.DotDensityRenderer")],u);var ue=u;var J,I=J=class extends y{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new J({color:this.color,ratio:this.ratio})}};t([r({type:p,json:{type:[Z],default:null,write:!0}})],I.prototype,"color",void 0),t([r({type:Number,json:{write:!0}})],I.prototype,"ratio",void 0),I=J=t([s("esri.renderers.support.HeatmapColorStop")],I);var O=I;var v=class extends b(y){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};t([r({type:String,json:{write:!0}})],v.prototype,"minLabel",void 0),t([r({type:String,json:{write:!0}})],v.prototype,"maxLabel",void 0),t([r({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=t([s("esri.renderers.support.HeatmapLegendOptions")],v);var z,de="esri.renderers.HeatmapRenderer",he=g.getLogger(de);function me(e){if(e!=null){let{maxDensity:o,minDensity:a,radius:D}=e;if(o!=null||a!=null||D!=null){let i=e,{blurRadius:V,maxPixelIntensity:Se,minPixelIntensity:je}=i;return K(i,["blurRadius","maxPixelIntensity","minPixelIntensity"])}}return e}var l=z=class extends c{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new O({ratio:0,color:new p("rgba(255, 140, 0, 0)")}),new O({ratio:.75,color:new p("rgba(255, 140, 0, 1)")}),new O({ratio:.9,color:new p("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return me(e)}get blurRadius(){return se(this.radius)}set blurRadius(e){let i=this.maxPixelIntensity,o=this.minPixelIntensity;this._set("radius",oe(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",i*this._pixelIntensityToDensity),this._set("minDensity",o*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(ie**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,i){this._warnedProps[e]||W(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,X(()=>{Q(he,e,{replacement:`${String(i)} (suggested value: ${this._get(i)})`,version:"4.24"})}))}read(e,i){e=me(e),super.read(e,i)}getSymbol(){return new R}getSymbolAsync(){return d(this,null,function*(){return this.getSymbol()})}getSymbols(){return[this.getSymbol()]}collectRequiredFields(e,i){return d(this,null,function*(){let o=this.field,a=this.valueExpression;o&&typeof o=="string"&&le(e,i,o),a&&typeof a=="string"&&(yield w(e,i,a))})}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new z({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:n(this.colorStops),field:this.field,legendOptions:n(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([r({type:ne,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l.prototype,"authoringInfo",void 0),t([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],l.prototype,"blurRadius",null),t([r({type:[O],json:{write:!0}})],l.prototype,"colorStops",void 0),t([r({type:String,json:{write:!0}})],l.prototype,"field",void 0),t([r({type:Number,json:{write:{overridePolicy:(e,i,o)=>({enabled:o==null})},origins:{"web-scene":{write:!1}}}})],l.prototype,"fieldOffset",void 0),t([r({type:v,json:{write:!0}})],l.prototype,"legendOptions",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxDensity",void 0),t([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],l.prototype,"maxPixelIntensity",null),t([r({type:Number,json:{write:!0}})],l.prototype,"minDensity",void 0),t([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],l.prototype,"minPixelIntensity",null),t([r({type:Number,cast:N,json:{write:!0}})],l.prototype,"radius",void 0),t([r({type:Number,range:{min:0},json:{default:0,write:!0}})],l.prototype,"referenceScale",void 0),t([S({heatmap:"heatmap"})],l.prototype,"type",void 0),t([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"valueExpression",void 0),t([r({type:String})],l.prototype,"valueExpressionTitle",void 0),t([r({readOnly:!0})],l.prototype,"_pixelIntensityToDensity",null),l=z=t([s(de)],l);var G=l;var x=class extends b(y){constructor(){super(...arguments),this.color=new p([0,0,0,0]),this.label=null,this.threshold=0}};t([r({type:p,json:{write:!0}})],x.prototype,"color",void 0),t([r({type:String,json:{write:!0}})],x.prototype,"label",void 0),t([r({type:Number,range:{min:0,max:1},json:{write:!0}})],x.prototype,"threshold",void 0),x=t([s("esri.renderers.support.OthersCategory")],x);var P=class extends b(y){constructor(){super(...arguments),this.title=null}};t([r({type:String,json:{write:!0}})],P.prototype,"title",void 0),P=t([s("esri.renderers.support.PieChartLegendOptions")],P);var m=class extends j(b(c)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new p([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new x,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){return new R({size:this.size?this.size/2+(this.outline?.width||0):0})}getSymbolAsync(){return d(this,null,function*(){return this.getSymbol()})}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(U)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,i)=>e+i.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,i)=>e+JSON.stringify(i),"")}collectRequiredFields(e,i){return d(this,null,function*(){yield this.collectVVRequiredFields(e,i);for(let o of this.attributes)o.valueExpression&&(yield w(e,i,o.valueExpression)),o.field&&e.add(o.field)})}};t([r({type:[T],json:{write:!0}})],m.prototype,"attributes",void 0),t([r({type:_,json:{default:null,write:!0}})],m.prototype,"backgroundFillSymbol",void 0),t([r({type:p,json:{write:!0}})],m.prototype,"defaultColor",void 0),t([r({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),t([r({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),t([r({type:x,json:{write:!0}})],m.prototype,"othersCategory",void 0),t([r({type:P,json:{write:!0}})],m.prototype,"legendOptions",void 0),t([r({type:E,json:{default:null,write:!0}})],m.prototype,"outline",void 0),t([r({type:Number,cast:N,json:{write:!0}})],m.prototype,"size",void 0),t([S({pieChart:"pie-chart"})],m.prototype,"type",void 0),m=t([s("esri.renderers.PieChartRenderer")],m);var ye=m;var ce={key:"type",base:c,typeMap:{heatmap:G,simple:L,"unique-value":H,"class-breaks":F,"dot-density":ue,dictionary:ae,"pie-chart":ye},errorContext:"renderer"},ui={key:"type",base:c,typeMap:{simple:L,"unique-value":H,"class-breaks":F,heatmap:G},errorContext:"renderer",validate:fe};function fe(e){switch(e.type){case"simple":return ge(e);case"unique-value":return be(e);case"class-breaks":return we(e);case"heatmap":return e}}function ge(e){if(e.symbol)return e;g.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function be(e){let i=e.uniqueValueInfos,o=i?.filter(({symbol:a,label:D},V)=>(a||g.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${V}] ${D}) without a symbol from web scene.`),!!a));return o?.length!==i?.length&&(e.uniqueValueInfos=o),e}function we(e){let i=e.classBreakInfos,o=i?.filter(({symbol:a,label:D},V)=>(a||g.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${V}] ${D}) without a symbol from web scene.`),!!a));return o?.length!==i?.length&&(e.classBreakInfos=o),e}function hi(e,i){return ve(e,null,i)}var xe=te({types:ce});function ve(e,i,o){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(o?.messages&&o.messages.push(new ee("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:o})),null):xe(e,i,o):null}export{O as a,ce as b,ui as c,hi as d,ve as e};