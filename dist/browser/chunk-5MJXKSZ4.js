import{a}from"./chunk-VVAIF23J.js";import{i as v}from"./chunk-VDN3XKL2.js";import{a as E}from"./chunk-HBTOKQC5.js";import{a as y}from"./chunk-A52LT7YB.js";import{a as c,b as h}from"./chunk-WQAXQD4X.js";import{h as p}from"./chunk-FNDPIYNC.js";import{H as s}from"./chunk-WMYPRHRR.js";import{R as n}from"./chunk-IAMDMFZ7.js";import{a as t}from"./chunk-53MWZ23O.js";import{g as x}from"./chunk-XDTDVCGP.js";import{g as d}from"./chunk-ESDYQQXO.js";var f,i=f=class extends p{constructor(e){super(e)}collectRequiredFields(e,r){return d(this,null,function*(){return v(e,r,this.expression)})}clone(){return new f({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};t([s({type:String,json:{write:!0}})],i.prototype,"expression",void 0),t([s({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=f=t([n("esri.layers.support.FeatureExpressionInfo")],i);var l=i;function R(e){return 1/(a[e]||1)}function b(){let e=Object.keys(a);return e.sort(),e}var I=b();var m,u=h()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),w=new c({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),o=m=class extends p{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return e??(r.featureExpression&&r.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,r,g,S){r[g]=e.write({},S),e.expression==="0"&&(r.featureExpression={value:0})}get mode(){let{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):e!=null||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&x(this.featureExpressionInfo,e.featureExpressionInfo)}};t([s({type:l,json:{write:!0}})],o.prototype,"featureExpressionInfo",void 0),t([E("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],o.prototype,"readFeatureExpressionInfo",null),t([y("featureExpressionInfo",{featureExpressionInfo:{type:l},"featureExpression.value":{type:[0]}})],o.prototype,"writeFeatureExpressionInfo",null),t([s({type:u.apiValues,nonNullable:!0,json:{type:u.jsonValues,read:u.read,write:{writer:u.write,isRequired:!0}}})],o.prototype,"mode",null),t([s({type:Number,json:{write:!0}})],o.prototype,"offset",void 0),t([s({type:I,json:{type:String,read:w.read,write:w.write}})],o.prototype,"unit",null),o=m=t([n("esri.layers.support.ElevationInfo")],o);var Z=o;export{R as a,Z as b};