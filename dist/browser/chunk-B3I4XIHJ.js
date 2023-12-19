import{a as Q}from"./chunk-DZ3DW7ED.js";import{b as P,c as W}from"./chunk-3XRT3SNQ.js";import{a as N,b as g,c as K,d as X,e as Y}from"./chunk-JBJTQF7V.js";import{c as x}from"./chunk-AQ74ANSJ.js";import{a as v}from"./chunk-HBTOKQC5.js";import{a as G}from"./chunk-A52LT7YB.js";import{a as c}from"./chunk-2BBIRZVO.js";import{a as u}from"./chunk-WQAXQD4X.js";import{h as p}from"./chunk-FNDPIYNC.js";import{H as i}from"./chunk-WMYPRHRR.js";import{H,R as a,v as q}from"./chunk-IAMDMFZ7.js";import{a as t}from"./chunk-53MWZ23O.js";import{b as f,p as h,r as J}from"./chunk-465DRXTW.js";import{a as U}from"./chunk-ESDYQQXO.js";var O,S=O=class extends p{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new O({minValue:this.minValue,maxValue:this.maxValue})}};t([i({type:Number,json:{write:!0}})],S.prototype,"minValue",void 0),t([i({type:Number,json:{write:!0}})],S.prototype,"maxValue",void 0),S=O=t([a("esri.renderer.support.AuthoringInfoClassBreakInfo")],S);var k,y=k=class extends p{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new k({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:f(this.classBreakInfos)})}};t([i({type:String,json:{write:!0}})],y.prototype,"field",void 0),t([i({type:String,json:{write:!0}})],y.prototype,"normalizationField",void 0),t([i({type:String,json:{write:!0}})],y.prototype,"label",void 0),t([i({type:[S],json:{write:!0}})],y.prototype,"classBreakInfos",void 0),y=k=t([a("esri.renderers.support.AuthoringInfoFieldInfo")],y);var C,V=new u({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),z=new u({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),Z={key:e=>typeof e=="number"?"number":"string",typeMap:{number:Number,string:String},base:null},ee=["high-to-low","above-and-below","centered-on","extremes"],te=[...new Set(["high-to-low","above-and-below","centered-on","extremes","90-10","above","below","high-to-low","above-and-below","90-10","above","below"])],ie=["seconds","minutes","hours","days","months","years"],n=C=class extends p{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return typeof e=="string"||typeof e=="number"?e:null}castStartTime(e){return typeof e=="string"||typeof e=="number"?e:null}get style(){return this.type==="color"?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return this.type==="color"||this.type==="size"?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new C({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};t([i({types:Z,json:{write:!0}})],n.prototype,"endTime",void 0),t([c("endTime")],n.prototype,"castEndTime",null),t([i({type:String,json:{write:!0}})],n.prototype,"field",void 0),t([i({type:Number,json:{write:!0}})],n.prototype,"maxSliderValue",void 0),t([i({type:Number,json:{write:!0}})],n.prototype,"minSliderValue",void 0),t([i({types:Z,json:{write:!0}})],n.prototype,"startTime",void 0),t([c("startTime")],n.prototype,"castStartTime",null),t([i({type:V.apiValues,value:null,json:{type:V.jsonValues,read:V.read,write:V.write}})],n.prototype,"style",null),t([i({type:te,value:null,json:{type:te,origins:{"web-scene":{type:ee,write:{writer:(e,r)=>{ee.includes(e)&&(r.theme=e)}}}},write:!0}})],n.prototype,"theme",null),t([i({type:z.apiValues,json:{type:z.jsonValues,read:z.read,write:z.write}})],n.prototype,"type",void 0),t([i({type:ie,json:{type:ie,write:!0}})],n.prototype,"units",void 0),n=C=t([a("esri.renderers.support.AuthoringInfoVisualVariable")],n);var se=n;var M,w=new u({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),j=new u({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),re=new u({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),oe=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],de=["high-to-low","above-and-below","above","below","90-10"],he=["flow-line","wave-front"],ye=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],o=M=class extends p{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){let e=this._get("classificationMethod"),r=this.type;return r&&r!=="relationship"?r==="class-breaks-size"||r==="class-breaks-color"?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?W(e):void 0}get fields(){return this.type&&this.type!=="predominance"?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&this.type!=="relationship"?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&this.type!=="relationship"?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return this.type==="flow"?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&this.type!=="relationship"?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&this.type!=="relationship"?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){let e=this.type;return e&&e!=="relationship"&&e!=="class-breaks-size"&&e!=="class-breaks-color"||this.classificationMethod&&this.classificationMethod!=="standard-deviation"?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let r=e;e==="classed-size"?r="class-breaks-size":e==="classed-color"&&(r="class-breaks-color"),this._set("type",r)}get univariateSymbolStyle(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return this.type==="univariate-color-size"?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new M({classificationMethod:this.classificationMethod,colorRamp:f(this.colorRamp),fadeRatio:f(this.fadeRatio),fields:this.fields?.slice(0),field1:f(this.field1),field2:f(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};t([i({type:w.apiValues,value:null,json:{type:w.jsonValues,read:w.read,write:w.write,origins:{"web-document":{default:"manual",type:w.jsonValues,read:w.read,write:w.write}}}})],o.prototype,"classificationMethod",null),t([i({types:P,json:{write:!0}})],o.prototype,"colorRamp",void 0),t([v("colorRamp")],o.prototype,"readColorRamp",null),t([i({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"fadeRatio",void 0),t([i({type:[String],value:null,json:{write:!0}})],o.prototype,"fields",null),t([i({type:y,value:null,json:{write:!0}})],o.prototype,"field1",null),t([i({type:y,value:null,json:{write:!0}})],o.prototype,"field2",null),t([i({type:he,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"flowTheme",null),t([i({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],o.prototype,"focus",null),t([i({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],o.prototype,"isAutoGenerated",void 0),t([i({type:Number,value:null,json:{type:H,write:!0}})],o.prototype,"numClasses",null),t([i({type:oe,json:{type:oe,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"lengthUnit",void 0),t([i({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"maxSliderValue",void 0),t([i({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"minSliderValue",void 0),t([i({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"statistics",null),t([i({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],o.prototype,"standardDeviationInterval",null),t([i({type:j.apiValues,value:null,json:{type:j.jsonValues,read:j.read,write:j.write,origins:{"web-scene":{type:re.jsonValues,write:{writer:re.write,overridePolicy:e=>({enabled:e!=="flow"})}}}}})],o.prototype,"type",null),t([i({type:[se],json:{write:!0}})],o.prototype,"visualVariables",void 0),t([i({type:ye,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"univariateSymbolStyle",null),t([i({type:de,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"univariateTheme",null),o=M=t([a("esri.renderers.support.AuthoringInfo")],o);var Ye=o;var R,b=R=class extends p{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new R({label:this.label,size:this.size,value:this.value})}};t([i({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([i({type:Number,cast:x,json:{write:!0}})],b.prototype,"size",void 0),t([i({type:Number,json:{write:!0}})],b.prototype,"value",void 0),b=R=t([a("esri.renderers.visualVariables.support.SizeStop")],b);var ae=b;var L,T=L=class extends Q{constructor(){super(...arguments),this.showLegend=null}clone(){return new L({title:this.title,showLegend:this.showLegend})}};t([i({type:Boolean,json:{write:!0}})],T.prototype,"showLegend",void 0),T=L=t([a("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],T);var _=T;var A=new u({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),d=class extends p{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return e==null?e:typeof e=="function"?(h.getLogger(this).error(".field: field must be a string value"),null):q(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};t([i()],d.prototype,"index",void 0),t([i({type:A.apiValues,readOnly:!0,json:{read:A.read,write:A.write}})],d.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],d.prototype,"field",void 0),t([c("field")],d.prototype,"castField",null),t([i({type:String,json:{write:!0}})],d.prototype,"valueExpression",void 0),t([i({type:String,json:{write:!0}})],d.prototype,"valueExpressionTitle",void 0),t([i({readOnly:!0})],d.prototype,"arcadeRequired",null),t([i({type:_,json:{write:!0}})],d.prototype,"legendOptions",void 0),d=t([a("esri.renderers.visualVariables.VisualVariable")],d);var ne=d;var F,I=F=class extends _{constructor(){super(...arguments),this.customValues=null}clone(){return new F({title:this.title,showLegend:this.showLegend,customValues:this.customValues?.slice(0)})}};t([i({type:[Number],json:{write:!0}})],I.prototype,"customValues",void 0),I=F=t([a("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],I);var le=I;var B,D=new u({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),$=new u({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function pe(e){if(e!=null)return typeof e=="string"||typeof e=="number"?x(e):e.type==="size"?g(e)?e:(delete(e=U({},e)).type,new s(e)):void 0}function ue(e,r,m){if(typeof e!="object")return e;let l=new s;return l.read(e,m),l}var s=B=class extends ne{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:this.valueExpression!=null&&Y.test(this.valueExpression)}}set expression(e){h.getLogger(this).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),e==="view.scale"?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){g(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),g(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return K(this)}set maxDataValue(e){e&&this.stops&&(h.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(h.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return pe(e)}readMaxSize(e,r,m){return ue(e,r,m)}set minDataValue(e){e&&this.stops&&(h.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(h.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return pe(e)}readMinSize(e,r,m){return ue(e,r,m)}get arcadeRequired(){return!!this.valueExpression||this.minSize!=null&&typeof this.minSize=="object"&&this.minSize.arcadeRequired||this.maxSize!=null&&typeof this.maxSize=="object"&&this.maxSize.arcadeRequired}set stops(e){this.minDataValue==null&&this.maxDataValue==null&&this.minSize==null&&this.maxSize==null?e&&Array.isArray(e)&&(e=e.filter(r=>!!r)).sort((r,m)=>r.value-m.value):e&&(h.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return X(this,this.inputValueType)}readValueExpression(e,r){return e||r.expression&&"$view.scale"}writeValueExpressionWebScene(e,r,m,l){if(e==="$view.scale"){if(l?.messages){let E=this.index,me=typeof E=="string"?E:`visualVariables[${E}]`;l.messages.push(new J("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:me+".valueExpression",context:l}))}}else r[m]=e}readValueUnit(e){return e?$.read(e):null}clone(){return new B({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:g(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:g(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===N.ClampedLinear){let{minSize:e,maxSize:r}=this;return this.minSize=r,this.maxSize=e,this}if(this.transformationType===N.Stops){let e=this.stops;if(!e)return this;let r=e.map(l=>l.size).reverse(),m=e.length;for(let l=0;l<m;l++)e[l].size=r[l];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map(e=>e.value||0)}};t([i({readOnly:!0})],s.prototype,"cache",null),t([i({type:D.apiValues,json:{type:D.jsonValues,origins:{"web-map":{read:!1}},read:D.read,write:D.write}})],s.prototype,"axis",void 0),t([i({type:String,value:null,json:{read:!1}})],s.prototype,"expression",null),t([i()],s.prototype,"index",null),t([i({type:String,readOnly:!0})],s.prototype,"inputValueType",null),t([i({type:le,json:{write:!0}})],s.prototype,"legendOptions",void 0),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"maxDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"maxSize",null),t([c("maxSize")],s.prototype,"castMaxSize",null),t([v("maxSize")],s.prototype,"readMaxSize",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"minDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"minSize",null),t([c("minSize")],s.prototype,"castMinSize",null),t([v("minSize")],s.prototype,"readMinSize",null),t([i({type:String,json:{write:!0}})],s.prototype,"normalizationField",void 0),t([i({readOnly:!0})],s.prototype,"arcadeRequired",null),t([i({type:String})],s.prototype,"scaleBy",void 0),t([i({type:[ae],value:null,json:{write:!0}})],s.prototype,"stops",null),t([i({type:["outline"],json:{write:!0}})],s.prototype,"target",void 0),t([i({type:String,readOnly:!0})],s.prototype,"transformationType",null),t([i({type:["size"],json:{type:["sizeInfo"]}})],s.prototype,"type",void 0),t([i({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],s.prototype,"useSymbolValue",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"valueExpression",void 0),t([v("valueExpression",["valueExpression","expression"])],s.prototype,"readValueExpression",null),t([G("web-scene","valueExpression")],s.prototype,"writeValueExpressionWebScene",null),t([i({type:["radius","diameter","area","width","distance"],json:{write:!0}})],s.prototype,"valueRepresentation",void 0),t([i({type:$.apiValues,json:{write:$.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],s.prototype,"valueUnit",void 0),t([v("valueUnit")],s.prototype,"readValueUnit",null),s=B=t([a("esri.renderers.visualVariables.SizeVariable")],s);var ti=s;export{Ye as a,ne as b,ae as c,ti as d};
