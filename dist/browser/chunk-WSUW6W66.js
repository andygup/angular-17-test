import{b as z}from"./chunk-RZU6EEB3.js";import{a as R,c as d,d as S}from"./chunk-B3I4XIHJ.js";import{b as E}from"./chunk-JBJTQF7V.js";import{a as D}from"./chunk-D6LLE2YP.js";import{a as j}from"./chunk-A52LT7YB.js";import{h as b}from"./chunk-FNDPIYNC.js";import{H as u}from"./chunk-WMYPRHRR.js";import{R as c}from"./chunk-IAMDMFZ7.js";import{a as l}from"./chunk-53MWZ23O.js";import{b as y,p as T,r as $}from"./chunk-465DRXTW.js";import{a as w}from"./chunk-AC62Z3FX.js";import{a as F,b as C}from"./chunk-ESDYQQXO.js";var f=class extends D(b){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};l([u({type:String,json:{write:!0}})],f.prototype,"expression",void 0),l([u({type:String,json:{write:!0}})],f.prototype,"title",void 0),l([u({type:String,json:{write:!0}})],f.prototype,"returnType",void 0),f=l([c("esri.layers.support.ExpressionInfo")],f);var x=f;var V,p=V=class extends b{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new V({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:y(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};l([u({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),l([u({type:String,json:{write:!0}})],p.prototype,"name",void 0),l([u({type:String,json:{write:!0}})],p.prototype,"alias",void 0),l([u({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),l([u({type:x,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),l([u({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=V=l([c("esri.layers.support.AggregateField")],p);var g=p;var _,v=_=class extends S{writeLevels(e,i,s){for(let a in e){let o=this.levels[a];return void(i.stops=o)}}clone(){return new _({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:E(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:E(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone(),levels:y(this.levels)})}};l([u()],v.prototype,"levels",void 0),l([j("levels")],v.prototype,"writeLevels",null),v=_=l([c("esri.views.2d.engine.LevelDependentSizeVariable")],v);var G=T.getLogger("esri.views.2d.layers.support.clusterUtils");w.add("esri-cluster-arcade-enabled",!0);var M=w("esri-cluster-arcade-enabled"),Fe=(e,i,s,a,o)=>{let t=i.clone();if(!O(t))return t;if(t.authoringInfo||(t.authoringInfo=new R),t.authoringInfo.isAutoGenerated=!0,"visualVariables"in t){let n=(t.visualVariables||[]).filter(r=>r.valueExpression!=="$view.scale"),L=k(n);n.forEach(r=>{r.type==="rotation"?r.field?r.field=m(e,r.field,"avg_angle","number"):r.valueExpression&&(r.field=h(e,r.valueExpression,"avg_angle","number"),r.valueExpression=null):r.normalizationField?(r.field=m(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=m(e,r.field,"avg","number"):r.valueExpression&&(r.field=h(e,r.valueExpression,"avg","number"),r.valueExpression=null)}),L==null&&!I(n)&&o&&(n.push(A(s,a)),t.dynamicClusterSize=!0),t.visualVariables=n}switch(t.type){case"simple":break;case"pie-chart":for(let n of t.attributes)n.field?n.field=m(e,n.field,"sum","number"):n.valueExpression&&(n.field=h(e,n.valueExpression,"sum","number"),n.valueExpression=null);break;case"unique-value":t.field?t.field=m(e,t.field,"mode","string"):t.valueExpression&&(t.field=h(e,t.valueExpression,"mode","string"),t.valueExpression=null);break;case"class-breaks":t.normalizationField?(t.field=m(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=m(e,t.field,"avg","number"):t.valueExpression&&(t.field=h(e,t.valueExpression,"avg","number"),t.valueExpression=null)}return t},k=e=>{for(let i of e)if(i.type==="size")return i;return null};function Ce(e,i,s){let a=e.clone(),o=!1;if("visualVariables"in a){let t=(a.visualVariables||[]).filter(n=>n.valueExpression!=="$view.scale");k(t)==null&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.push(A(i,s)),a.dynamicClusterSize=!0,o=!0)}return{renderer:a,didInject:o}}var I=e=>{for(let i of e)if(i.field==="cluster_count")return!0;return!1},A=(e,i)=>{let s=[new d({value:0,size:0}),new d({value:1})];if(i==null)return new S({field:"cluster_count",stops:[...s,new d({value:2,size:0})]});let a=Object.keys(i).reduce((o,t)=>C(F({},o),{[t]:[...s,new d({value:Math.max(2,i[t].minValue),size:e.clusterMinSize}),new d({value:Math.max(3,i[t].maxValue),size:e.clusterMaxSize})]}),{});return new v({field:"cluster_count",levels:a})},O=e=>{let i=s=>G.error(new $("Unsupported-renderer",s,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){let s=e.normalizationType;if(s!=="field")return i(`FeatureReductionCluster does not support a normalizationType of ${s}`),!1}break;case"simple":case"pie-chart":break;default:return i(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!M){if("valueExpression"in e&&e.valueExpression)return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(s=>!(!("valueExpression"in s)||!s.valueExpression)))return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function U(e,i,s){switch(e){case"sum":return`cluster_sum_${i}`;case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"avg_norm":{let a=s,o="field",t=i.toLowerCase()+",norm:"+o+","+a.toLowerCase();return"cluster_avg_"+z(t)}}}function h(e,i,s,a){let o=z(i),t=s==="mode"?`cluster_type_${o}`:s==="sum"?`cluster_sum_${o}`:`cluster_avg_${o}`;return e.some(n=>n.name===t)||e.push(new g({name:t,isAutoGenerated:!0,onStatisticExpression:new x({expression:i,returnType:a}),statisticType:s})),t}function m(e,i,s,a,o){if(i==="cluster_count"||e.some(n=>n.name===i))return i;let t=U(s,i,o);return e.some(n=>n.name===t)||(s==="avg_norm"?e.push(new g({name:t,isAutoGenerated:!0,onStatisticExpression:new x({expression:`$feature.${i} / $feature.${o}`,returnType:a}),statisticType:"avg"})):e.push(new g({name:t,isAutoGenerated:!0,onStatisticField:i,statisticType:s}))),t}export{g as a,Fe as b,k as c,Ce as d,A as e,O as f};