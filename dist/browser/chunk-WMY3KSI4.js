import{a as xe,c as Ce}from"./chunk-HURWQVHY.js";import{c as Ne}from"./chunk-O5IGEGOS.js";import{a as B,f as Se,s as j,t as q}from"./chunk-U62SHMHB.js";import{a as I,b as Fe,c as Y,h as H}from"./chunk-URPCXPAW.js";import{d as G}from"./chunk-PEPXQ7N3.js";import{j as E}from"./chunk-6QIKBCPR.js";import{a as A,i as N}from"./chunk-AHKJJNRE.js";import{b as Te}from"./chunk-A52LT7YB.js";import{a as se}from"./chunk-IDSF2RZ6.js";import{U as be}from"./chunk-XF4NUYV7.js";import{w as ge}from"./chunk-PT7S6WNL.js";import{j as he,k as z}from"./chunk-465DRXTW.js";import{g as ae}from"./chunk-ESDYQQXO.js";var P=class{constructor(n){this.source=n}};var s;(function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"})(s||(s={}));var De={[s.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[s.LogicError]:"Logic error - {reason}",[s.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[s.NeverReach]:"Encountered unreachable logic",[s.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[s.ModuleAccessorMustBeString]:"Module accessor must be a string",[s.ModuleExportNotFound]:"Module has no export with provided identifier",[s.ModulesNotSupported]:"Current profile does not support modules",[s.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[s.FunctionNotFound]:"Function not found",[s.FieldNotFound]:"Key not found - {key}",[s.CircularModules]:"Circular module dependencies are not allowed",[s.Cancelled]:"Execution cancelled",[s.UnsupportedHashType]:"Type not supported in hash function",[s.IllegalResult]:"Value is not a supported return type",[s.PortalRequired]:"Portal is required",[s.InvalidParameter]:"Invalid parameter",[s.WrongNumberOfParameters]:"Call with wrong number of parameters",[s.Unrecognized]:"Unrecognized code structure",[s.UnrecognizedType]:"Unrecognized type",[s.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[s.BooleanConditionRequired]:"Conditions must use booleans",[s.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[s.NoFunctionInArray]:"Arrays cannot contain functions.",[s.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[s.KeyAccessorMustBeString]:"Accessor must be a string",[s.KeyMustBeString]:"Object keys must be a string",[s.Immutable]:"Object is immutable",[s.UnexpectedToken]:"Unexpected token",[s.MemberOfNull]:"Cannot access property of null object",[s.MaximumCallDepth]:"Exceeded maximum function depth",[s.OutOfBounds]:"Out of bounds",[s.InvalidIdentifier]:"Identifier not recognized",[s.CallNonFunction]:"Expression is not a function",[s.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[s.AssignModuleFunction]:"Cannot assign function to module variable",[s.UnsupportedUnaryOperator]:"Unsupported unary operator",[s.UnsupportedOperator]:"Unsupported operator",[s.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[s.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[s.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[s.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly"},le=class extends Error{constructor(...n){super(...n)}},V=class e extends le{constructor(n,r){super(ue(r)+n.message,{cause:n}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,e),r?.loc&&(this.loc=r.loc)}},x=class e extends Error{constructor(n,r,t,o){super("Execution error - "+ue(t)+z(De[r],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,e),t?.loc&&(this.loc=t.loc)}};function ue(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}var Me=class e extends Error{constructor(n,r,t,o){super("Compilation error - "+ue(t)+z(De[r],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,e),t?.loc&&(this.loc=t.loc)}},Ae=class e extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,e)}};function kn(e,n,r){return r.declaredRootClass==="esri.arcade.arcadeexecutionerror"||r.declaredRootClass==="esri.arcade.arcadecompilationerror"?r.loc===null&&n?.loc?new V(r,{cause:r}):r:(r.declaredRootClass==="esri.arcade.featureset.support.featureseterror"||r.declaredRootClass==="esri.arcade.featureset.support.sqlerror"||r.declaredRootClass,n?.loc?new V(r,{cause:r}):r)}var K;(function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"})(K||(K={}));var He={[K.UnrecognizedUri]:"Unrecognized uri - {uri}",[K.UnsupportedUriProtocol]:"Unrecognized uri protocol"},Ie=class e extends Error{constructor(n,r){super(z(He[n],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,e)}};var D=class{constructor(){}};function Oe(e,n,r){if(e instanceof D&&!(e instanceof _)){let t=new _;return t.fn=e,t.parameterEvaluator=r,t.context=n,t}return e}var ve=class extends D{constructor(n){super(),this.fn=n}createFunction(n){return(...r)=>this.fn(n,{preparsed:!0,arguments:r})}call(n,r){return this.fn(n,r)}marshalledCall(n,r,t,o){return o(n,r,(a,c,i)=>{i=i.map(d=>d instanceof D&&!(d instanceof _)?Oe(d,n,o):d);let u=this.call(t,{args:i});return ge(u)?u.then(d=>Oe(d,t,o)):u})}},_=class extends D{constructor(){super(...arguments),this.fn=null,this.context=null}createFunction(n){return this.fn.createFunction(this.context)}call(n,r){return this.fn.marshalledCall(n,r,this.context,this.parameterEvaluator)}marshalledCall(n,r,t){return this.fn.marshalledCall(n,r,this.context,this.parameterEvaluator)}};var S=class{constructor(n=[]){this._elements=n}length(){return this._elements.length}get(n){return this._elements[n]}toArray(){let n=[];for(let r=0;r<this.length();r++)n.push(this.get(r));return n}};var Ee,ke;function Bn(e){return Ne.fromJSON(e.toJSON())}function we(e){return e.toJSON?e.toJSON():e}function jn(e){return typeof e=="string"||e instanceof String}function qn(e){return typeof e=="number"}function Ze(e){return e instanceof Date}function Yn(e){return e instanceof G}function Re(e){return e instanceof I}function Hn(e){return e instanceof Y}function Vn(e){return e instanceof H}function Kn(e,n){return e===n||!(!Ze(e)&&!Re(e)||!Ze(n)&&!Re(n))&&e.getTime()===n.getTime()}function Wn(e){if(e==null)return null;if(typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function $n(e){if(e==null)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new E({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function Xn(e){if(e==null)return null;if(typeof e=="number"||typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(Ee||(Ee={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(ke||(ke={}));var Qn=1e3;var er={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},ce={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},nr={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function rr(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function tr(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});let r=typeof n.cycles=="boolean"&&n.cycles,t=n.cmp&&(o=n.cmp,function(c){return function(i,u){let d={key:i,value:c[i]},v={key:u,value:c[u]};return o(d,v)}});var o;let a=[];return function c(i){if(i?.toJSON&&typeof i.toJSON=="function"&&(i=i.toJSON()),i===void 0)return;if(typeof i=="number")return isFinite(i)?""+i:"null";if(typeof i!="object")return JSON.stringify(i);let u,d;if(Array.isArray(i)){for(d="[",u=0;u<i.length;u++)u&&(d+=","),d+=c(i[u])||"null";return d+"]"}if(i===null)return"null";if(a.includes(i)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}let v=a.push(i)-1,Z=Object.keys(i).sort(t?.(i));for(d="",u=0;u<Z.length;u++){let R=Z[u],w=c(i[R]);w&&(d&&(d+=","),d+=JSON.stringify(R)+":"+w)}return a.splice(v,1),"{"+d+"}"}(e)}var C=class e extends S{constructor(n,r,t,o,a,c){super(n),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=r,this._hasZ=t,this._hasM=o,this._cacheId=a,this._partId=c}get(n){if(this._lazyPt[n]===void 0){let r=this._elements[n];if(r===void 0)return;let t=this._hasZ,o=this._hasM,a=null;a=t&&!o?new N(r[0],r[1],r[2],void 0,this._spRef):o&&!t?new N(r[0],r[1],void 0,r[2],this._spRef):t&&o?new N(r[0],r[1],r[2],r[3],this._spRef):new N(r[0],r[1],this._spRef),a.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+n.toString(),this._lazyPt[n]=a}return this._lazyPt[n]}equalityTest(n){return n===this||n!==null&&n instanceof e&&n.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}};var W=class e extends S{constructor(n,r,t,o,a){super(n),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=t,this._hasM=o,this._spRef=r,this._cacheId=a}get(n){if(this._lazyPath[n]===void 0){let r=this._elements[n];if(r===void 0)return;this._lazyPath[n]=new C(r,this._spRef,this._hasZ,this._hasM,this._cacheId,n)}return this._lazyPath[n]}equalityTest(n){return n===this||n!==null&&n instanceof e&&n.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()}};var X=class{constructor(n){this.value=n}},Q=class{constructor(n){this.value=n}},Ve=Q,Ke=X,g={type:"VOID"},We={type:"BREAK"},$e={type:"CONTINUE"};function U(e,n,r){return n===""||n==null||n===r||n===r?e:e=e.split(n).join(r)}function te(e){return e instanceof D}function me(e){return e instanceof P}function ee(e){return!!m(e)||!!T(e)||!!p(e)||!!y(e)||!!h(e)||!!b(e)||e===null||e===g||typeof e=="number"}function Xe(e,n){return e===void 0?n:e}function Qe(e){return e==null?"":F(e)||O(e)?"Array":p(e)?"Date":h(e)?"Time":y(e)?"DateOnly":m(e)?"String":b(e)?"Boolean":T(e)?"Number":e?.declaredClass==="esri.arcade.Attachment"?"Attachment":e?.declaredClass==="esri.arcade.Portal"?"Portal":e?.declaredClass==="esri.arcade.Dictionary"?"Dictionary":e instanceof P?"Module":Pe(e)?"Feature":e instanceof N?"Point":e instanceof j?"Polygon":e instanceof q?"Polyline":e instanceof B?"Multipoint":e instanceof E?"Extent":te(e)?"Function":_e(e)?"FeatureSet":Ue(e)?"FeatureSetCollection":e===g?"":typeof e=="number"&&isNaN(e)?"Number":"Unrecognized Type"}function m(e){return typeof e=="string"||e instanceof String}function b(e){return typeof e=="boolean"}function T(e){return typeof e=="number"}function en(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}function nn(e){return e instanceof A}function F(e){return e instanceof Array}function Pe(e){return e?.arcadeDeclaredClass==="esri.arcade.Feature"}function _e(e){return e?.declaredRootClass==="esri.arcade.featureset.support.FeatureSet"}function rn(e){return e?.declaredClass==="esri.arcade.Dictionary"}function Ue(e){return e?.declaredRootClass==="esri.arcade.featureSetCollection"}function O(e){return e instanceof S}function p(e){return e instanceof I}function y(e){return e instanceof Y}function h(e){return e instanceof H}function de(e){return e!=null&&typeof e=="object"}function ne(e){return e instanceof Date}function tn(e,n,r,t,o){if(e.length<n||e.length>r)throw new x(t,s.WrongNumberOfParameters,o)}function on(e){return e<0?-Math.round(-e):Math.round(e)}function an(){let e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g,n=>{let r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),(n==="x"?r:3&r|8).toString(16)})}function ye(e,n){return isNaN(e)||n==null||n===""?e.toString():(n=U(n,"\u2030",""),n=U(n,"\xA4",""),xe(e,{pattern:n}))}function oe(e,n){return n==null||n===""?e.toISOString(!0):e.toFormat(Le(n),{locale:se(),numberingSystem:"latn"})}function Le(e,n=!1){e=e.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let r="",t=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;for(let o of e.match(t)||[])switch(o){case"D":r+="d";break;case"DD":r+="dd";break;case"DDD":r+="o";break;case"d":r+="c";break;case"ddd":r+="ccc";break;case"dddd":r+="cccc";break;case"M":r+="L";break;case"MM":r+="LL";break;case"MMM":r+="LLL";break;case"MMMM":r+="LLLL";break;case"YY":r+="yy";break;case"Y":case"YYYY":r+="yyyy";break;case"Q":r+="q";break;case"Z":r+="Z";break;case"ZZ":r+="ZZ";break;case"ZZZ":r+="ZZZ";break;case"ZZZZ":r+=n?"[ZZZZ]":"ZZZZ";break;case"ZZZZZ":r+=n?"[ZZZZZ]":"ZZZZZ";break;case"S":r+="'S'";break;case"SS":r+="'SS'";break;case"SSS":r+="u";break;case"A":case"a":r+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":r+=o;break;default:o.length>=2&&o.slice(0,1)==="["&&o.slice(-1)==="]"?r+=`'${o.slice(1,-1)}'`:r+=`'${o}'`}return r}function l(e,n,r){switch(r){case">":return e>n;case"<":return e<n;case">=":return e>=n;case"<=":return e<=n}return!1}function sn(e,n,r){if(e===null){if(n===null||n===g)return l(null,null,r);if(T(n))return l(0,n,r);if(m(n)||b(n))return l(0,f(n),r);if(p(n))return l(0,n.toNumber(),r);if(h(n)||y(n))return l(e,n.toNumber(),r)}if(e===g){if(n===null||n===g)return l(null,null,r);if(T(n))return l(0,n,r);if(m(n)||b(n))return l(0,f(n),r);if(p(n))return l(0,n.toNumber(),r);if(h(n)||y(n))return l(e,n.toNumber(),r)}else if(T(e)){if(T(n))return l(e,n,r);if(b(n))return l(e,f(n),r);if(n===null||n===g)return l(e,0,r);if(m(n))return l(e,f(n),r);if(p(n)||h(n)||y(n))return l(e,n.toNumber(),r)}else if(m(e)){if(m(n))return l(M(e),M(n),r);if(p(n)||h(n)||y(n))return l(f(e),n.toNumber(),r);if(T(n))return l(f(e),n,r);if(n===null||n===g)return l(f(e),0,r);if(b(n))return l(f(e),f(n),r)}else if(p(e)){if(p(n))return e.timeZone!==n.timeZone&&(e.isUnknownTimeZone?e=I.arcadeDateAndZoneToArcadeDate(e,n.timeZone):n.isUnknownTimeZone&&(n=I.arcadeDateAndZoneToArcadeDate(n,e.timeZone))),l(e.toNumber(),n.toNumber(),r);if(n===null||n===g)return l(e.toNumber(),0,r);if(T(n))return l(e.toNumber(),n,r);if(b(n)||m(n))return l(e.toNumber(),f(n),r);if(h(n))throw new x(null,s.CannotCompareDateAndTime,null);if(y(n))return l(e.toNumber(),n.toNumber(),r)}else if(b(e)){if(b(n))return l(e,n,r);if(T(n))return l(f(e),f(n),r);if(p(n)||h(n)||y(n))return l(f(e),n.toNumber(),r);if(n===null||n===g)return l(f(e),0,r);if(m(n))return l(f(e),f(n),r)}else if(y(e)){if(p(n))return l(e.toNumber(),n.toNumber(),r);if(n===null||n===g)return l(e.toNumber(),0,r);if(T(n))return l(e.toNumber(),n,r);if(b(n)||m(n))return l(e.toNumber(),f(n),r);if(h(n))throw new x(null,s.CannotCompareDateAndTime,null);if(y(n))return l(e.toNumber(),n.toNumber(),r)}else if(h(e)){if(p(n))throw new x(null,s.CannotCompareDateAndTime,null);if(n===null||n===g)return l(e.toNumber(),0,r);if(T(n))return l(e.toNumber(),n,r);if(b(n)||m(n))return l(e.toNumber(),f(n),r);if(h(n))return l(e.toNumber(),n.toNumber(),r);if(y(n))throw new x(null,s.CannotCompareDateAndTime,null)}return!!Je(e,n)&&(r==="<="||r===">=")}function Je(e,n){if(e===n||e===null&&n===g||n===null&&e===g)return!0;if(p(e)&&p(n)||h(e)&&h(n)||y(e)&&y(n))return e.equals(n);if(e instanceof W||e instanceof C)return e.equalityTest(n);if(e instanceof N&&n instanceof N){let r=e.cache._arcadeCacheId,t=n.cache._arcadeCacheId;if(r!=null)return r===t}return!!(de(e)&&de(n)&&(e._arcadeCacheId===n._arcadeCacheId&&e._arcadeCacheId!==void 0&&e._arcadeCacheId!==null||e._underlyingGraphic===n._underlyingGraphic&&e._underlyingGraphic!==void 0&&e._underlyingGraphic!==null))}function M(e,n){if(m(e))return e;if(e===null)return"";if(T(e))return ye(e,n);if(b(e))return e.toString();if(p(e))return oe(e,n);if(h(e)||y(e))return e.toFormat(n);if(e instanceof A)return JSON.stringify(e.toJSON());if(F(e)){let r=[];for(let t=0;t<e.length;t++)r[t]=re(e[t]);return"["+r.join(",")+"]"}if(e instanceof S){let r=[];for(let t=0;t<e.length();t++)r[t]=re(e.get(t));return"["+r.join(",")+"]"}return e!==null&&typeof e=="object"&&e.castToText!==void 0?e.castToText():te(e)?"object, Function":e===g?"":me(e)?"object, Module":""}function ln(e){let n=[];if(!F(e))return null;if(e instanceof S){for(let r=0;r<e.length();r++)n[r]=f(e.get(r));return n}for(let r=0;r<e.length;r++)n[r]=f(e[r]);return n}function $(e,n,r=!1){if(m(e))return e;if(e===null)return"";if(T(e))return ye(e,n);if(b(e))return e.toString();if(p(e))return oe(e,n);if(h(e)||y(e))return e.toFormat(n);if(e instanceof A)return e instanceof E?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+pe(e.spatialReference)+"}":pe(e.toJSON(),(t,o)=>t.key===o.key?0:t.key==="spatialReference"?1:o.key==="spatialReference"||t.key<o.key?-1:t.key>o.key?1:0);if(F(e)){let t=[];for(let o=0;o<e.length;o++)t[o]=re(e[o],r);return"["+t.join(",")+"]"}if(e instanceof S){let t=[];for(let o=0;o<e.length();o++)t[o]=re(e.get(o),r);return"["+t.join(",")+"]"}return e!==null&&typeof e=="object"&&e.castToText!==void 0?e.castToText(r):te(e)?"object, Function":e===g?"":me(e)?"object, Module":""}function re(e,n=!1){if(e===null)return"null";if(b(e)||T(e)||m(e))return JSON.stringify(e);if(e instanceof A||e instanceof S||e instanceof Array)return $(e,null,n);if(p(e))return JSON.stringify(n?e.getTime():oe(e,""));if(h(e)||y(e))return JSON.stringify(e.toString());if(e!==null&&typeof e=="object"){if(e.castToText!==void 0)return e.castToText(n)}else if(e===g)return"null";return"null"}function f(e,n){return T(e)?e:e===null||e===""?0:p(e)||y(e)||h(e)?NaN:b(e)?e?1:0:F(e)||e===""||e===void 0?NaN:n!==void 0&&m(e)?(n=U(n,"\u2030",""),n=U(n,"\xA4",""),Ce(e,{pattern:n})):e===g?0:Number(e)}function un(e,n){if(p(e))return e;if(m(e)){let r=cn(e,n);if(r)return I.dateTimeToArcadeDate(r)}return null}function cn(e,n){let r=/ (\d\d)/,t=Fe(n),o=G.fromISO(e,{zone:t});return o.isValid||r.test(e)&&(e=e.replace(r,"T$1"),o=G.fromISO(e,{zone:n}),o.isValid)?o:null}function fn(e){return b(e)?e:m(e)?(e=e.toLowerCase())==="true":!!T(e)&&e!==0&&!isNaN(e)}function dn(e,n){return e==null?null:(e.spatialReference!==null&&e.spatialReference!==void 0||(e.spatialReference=n),e)}function pn(e){if(e===null)return null;if(e instanceof N)return e.x==="NaN"||e.x===null||isNaN(e.x)?null:e;if(e instanceof j){if(e.rings.length===0)return null;for(let n of e.rings)if(n.length>0)return e;return null}if(e instanceof q){if(e.paths.length===0)return null;for(let n of e.paths)if(n.length>0)return e;return null}return e instanceof B?e.points.length===0?null:e:e instanceof E?e.xmin==="NaN"||e.xmin===null||isNaN(e.xmin)?null:e:null}function ze(e,n){if(!e||!e.domain)return n;let r=null,t=null;if(e.field.type==="string"||e.field.type==="esriFieldTypeString")r=M(n);else{if(n==null)return null;if(n==="")return n;r=f(n)}for(let o=0;o<e.domain.codedValues.length;o++){let a=e.domain.codedValues[o];a.code===r&&(t=a)}return t===null?M(n):t.name}function Be(e,n){if(!e||!e.domain)return n;let r=null,t=M(n);for(let o=0;o<e.domain.codedValues.length;o++){let a=e.domain.codedValues[o];a.name===t&&(r=a)}return r===null?n:r.code}function ie(e,n,r=null,t=null){if(!n||!n.fields)return null;let o,a,c=null;for(let i=0;i<n.fields.length;i++){let u=n.fields[i];u.name.toLowerCase()===e.toString().toLowerCase()&&(c=u)}if(c===null)throw new x(null,s.FieldNotFound,null,{key:e});if(t===null&&r&&n.typeIdField)t=r.hasField(n.typeIdField)?r.field(n.typeIdField):null;else if(n.typeIdField&&t!==null){let i=!1;for(let u of n.types||[])if(t===u.id){i=!0;break}if(!i){for(let u of n.types||[])if(t===u.name){t=u.id,i=!0;break}}i||(t=null,r&&n.typeIdField&&(t=r.hasField(n.typeIdField)?r.field(n.typeIdField):null))}return t!=null&&n.types.some(i=>i.id===t&&(o=i.domains?.[c.name],o&&o.type==="inherited"&&(o=Ge(c.name,n),a=!0),!0)),a||o||(o=Ge(e,n)),{field:c,domain:o}}function Ge(e,n){let r;return n.fields.some(t=>(t.name.toLowerCase()===e.toLowerCase()&&(r=t.domain),!!r)),r}function pe(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});let r=typeof n.cycles=="boolean"&&n.cycles,t=n.cmp&&(o=n.cmp,function(c){return function(i,u){let d={key:i,value:c[i]},v={key:u,value:c[u]};return o(d,v)}});var o;let a=[];return function c(i){if(i?.toJSON&&typeof i.toJSON=="function"&&(i=i.toJSON()),i===void 0)return;if(typeof i=="number")return isFinite(i)?""+i:"null";if(typeof i!="object")return JSON.stringify(i);let u,d;if(Array.isArray(i)){for(d="[",u=0;u<i.length;u++)u&&(d+=","),d+=c(i[u])||"null";return d+"]"}if(i===null)return"null";if(a.includes(i)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}let v=a.push(i)-1,Z=Object.keys(i).sort(t?.(i));for(d="",u=0;u<Z.length;u++){let R=Z[u],w=c(i[R]);w&&(d&&(d+=","),d+=JSON.stringify(R)+":"+w)}return a.splice(v,1),"{"+d+"}"}(e)}function mn(e){if(e===null)return null;let n=[];for(let r of e)r?.arcadeDeclaredClass&&r.arcadeDeclaredClass==="esri.arcade.Feature"?n.push(r.geometry()):n.push(r);return n}function k(e,n){if(!(n instanceof N))throw new x(null,s.InvalidParameter,null);e.push(n.hasZ?n.hasM?[n.x,n.y,n.z,n.m]:[n.x,n.y,n.z]:[n.x,n.y])}function yn(e,n){if(F(e)||O(e)){let r=!1,t=!1,o=[],a=n;if(F(e)){for(let c of e)k(o,c);o.length>0&&(a=e[0].spatialReference,r=e[0].hasZ,t=e[0].hasM)}else if(e instanceof C)o=e._elements,o.length>0&&(r=e._hasZ,t=e._hasM,a=e.get(0).spatialReference);else{if(!O(e))throw new x(null,s.InvalidParameter,null);for(let c of e.toArray())k(o,c);o.length>0&&(a=e.get(0).spatialReference,r=e.get(0).hasZ===!0,t=e.get(0).hasM===!0)}return o.length===0?null:(Se(o)||(o=o.slice(0).reverse()),new j({rings:[o],spatialReference:a,hasZ:r,hasM:t}))}return e}function hn(e,n){if(F(e)||O(e)){let r=!1,t=!1,o=[],a=n;if(F(e)){for(let c of e)k(o,c);o.length>0&&(a=e[0].spatialReference,r=e[0].hasZ===!0,t=e[0].hasM===!0)}else if(e instanceof C)o=e._elements,o.length>0&&(r=e._hasZ,t=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(let c of e.toArray())k(o,c);o.length>0&&(a=e.get(0).spatialReference,r=e.get(0).hasZ===!0,t=e.get(0).hasM===!0)}return o.length===0?null:new q({paths:[o],spatialReference:a,hasZ:r,hasM:t})}return e}function gn(e,n){if(F(e)||O(e)){let r=!1,t=!1,o=[],a=n;if(F(e)){for(let c of e)k(o,c);o.length>0&&(a=e[0].spatialReference,r=e[0].hasZ===!0,t=e[0].hasM===!0)}else if(e instanceof C)o=e._elements,o.length>0&&(r=e._hasZ,t=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(let c of e.toArray())k(o,c);o.length>0&&(a=e.get(0).spatialReference,r=e.get(0).hasZ===!0,t=e.get(0).hasM===!0)}return o.length===0?null:new B({points:o,spatialReference:a,hasZ:r,hasM:t})}return e}function bn(e,n=!1){let r=[];if(e===null)return r;if(F(e)===!0){for(let t=0;t<e.length;t++){let o=M(e[t]);o===""&&n!==!0||r.push(o)}return r}if(e instanceof S){for(let t=0;t<e.length();t++){let o=M(e.get(t));o===""&&n!==!0||r.push(o)}return r}if(ee(e)){let t=M(e);return t===""&&n!==!0||r.push(t),r}return[]}var fe=0;function Tn(e){return fe++,fe%100==0?(fe=0,new Promise(n=>{setTimeout(()=>{n(e)},0)})):e}function Sn(e,n,r){switch(r){case"&":return e&n;case"|":return e|n;case"^":return e^n;case"<<":return e<<n;case">>":return e>>n;case">>>":return e>>>n}}function L(e,n=null){return e==null?null:b(e)||T(e)||m(e)?e:e instanceof A?n?.keepGeometryType===!0?e:e.toJSON():e instanceof S?e.toArray().map(r=>L(r,n)):e instanceof Array?e.map(r=>L(r,n)):ne(e)?e:p(e)?e.toJSDate():h(e)?e.toString():y(e)?e.toJSDate():e!==null&&typeof e=="object"&&e.castAsJson!==void 0?e.castAsJson(n):null}function Fn(e,n,r,t,o){return ae(this,null,function*(){let a=yield je(e,n,r);o[t]=a})}function je(e,n=null,r=null){return ae(this,null,function*(){if(e instanceof S&&(e=e.toArray()),e==null)return null;if(ee(e)||e instanceof A||ne(e)||p(e))return L(e,r);if(e instanceof Array){let t=[],o=[];for(let a of e)a===null||ee(a)||a instanceof A||ne(a)||p(a)?o.push(L(a,r)):(o.push(null),t.push(Fn(a,n,r,o.length-1,o)));return t.length>0&&(yield Promise.all(t)),o}return e!==null&&typeof e=="object"&&e.castAsJsonAsync!==void 0?e.castAsJsonAsync(n,r):null})}function J(e){return qe(e)?e.parent:e}function qe(e){return e&&"declaredClass"in e&&e.declaredClass==="esri.layers.support.SubtypeSublayer"}function Nn(e){return e&&"declaredClass"in e&&e.declaredClass==="esri.layers.SubtypeGroupLayer"}function xn(e,n,r){let t=J(e.fullSchema());return t===null||!t.fields?null:ie(n,t,e,r)}function Cn(e){let n=J(e.fullSchema());return n===null?null:n.fields&&n.typeIdField?{subtypeField:n.typeIdField,subtypes:n.types?n.types.map(r=>({name:r.name,code:r.id})):[]}:null}function Mn(e,n,r,t){let o=J(e.fullSchema());if(o===null||!o.fields)return null;let a=ie(n,o,e,t);if(r===void 0)try{r=e.field(n)}catch{return null}return ze(a,r)}function An(e,n,r,t){let o=J(e.fullSchema());if(o===null||!o.fields)return null;if(r===void 0){try{r=e.field(n)}catch{return null}return r}return Be(ie(n,o,e,t),r)}function In(e){return e?.timeZone??"system"}function Dn(e){let n=J(e.fullSchema());if(n===null||!n.fields)return null;let r=[];for(let t of n.fields)r.push(we(t));return{objectIdField:n.objectIdField,globalIdField:n.globalIdField??"",geometryType:ce[n.geometryType]===void 0?"":ce[n.geometryType],fields:r}}function On(e,n){return e==="system"&&(e=I.systemTimeZoneCanonicalName),{version:Ye,engineVersion:be,timeZone:e,spatialReference:n instanceof Te?n.toJSON():n,application:he.applicationName??"",engine:"web",locale:se()}}var Ye="1.24",Rr=Object.freeze(Object.defineProperty({__proto__:null,ImplicitResult:Ve,ImplicitResultE:Q,ReturnResult:Ke,ReturnResultE:X,absRound:on,arcadeVersion:Ye,autoCastArrayOfPointsToMultiPoint:gn,autoCastArrayOfPointsToPolygon:yn,autoCastArrayOfPointsToPolyline:hn,autoCastFeatureToGeometry:mn,binaryOperator:Sn,breakResult:We,castAsJson:L,castAsJsonAsync:je,continueResult:$e,defaultExecutingContext:On,defaultTimeZone:In,defaultUndefined:Xe,equalityTest:Je,featureDomainCodeLookup:An,featureDomainValueLookup:Mn,featureFullDomain:xn,featureSchema:Dn,featureSubtypes:Cn,fixNullGeometry:pn,fixSpatialReference:dn,formatDate:oe,formatNumber:ye,generateUUID:an,getDomain:ie,getDomainCode:Be,getDomainValue:ze,getType:Qe,greaterThanLessThan:sn,isArray:F,isBoolean:b,isDate:p,isDateOnly:y,isDictionary:rn,isFeature:Pe,isFeatureSet:_e,isFeatureSetCollection:Ue,isFunctionParameter:te,isGeometry:nn,isImmutableArray:O,isInteger:en,isJsDate:ne,isModule:me,isNumber:T,isObject:de,isSimpleType:ee,isString:m,isSubtypeGrouplayer:Nn,isSubtypeSublayer:qe,isTime:h,multiReplace:U,pcCheck:tn,stableStringify:pe,standardiseDateFormat:Le,tick:Tn,toBoolean:fn,toDate:un,toNumber:f,toNumberArray:ln,toString:M,toStringArray:bn,toStringExplicit:$,voidOperation:g},Symbol.toStringTag,{value:"Module"}));export{P as a,s as b,x as c,Me as d,Ae as e,kn as f,K as g,Ie as h,D as i,Oe as j,ve as k,_ as l,S as m,C as n,W as o,Ee as p,ke as q,Bn as r,we as s,jn as t,qn as u,Ze as v,Yn as w,Re as x,Hn as y,Vn as z,Kn as A,Wn as B,$n as C,Xn as D,Qn as E,er as F,ce as G,nr as H,rr as I,tr as J,Ve as K,Ke as L,g as M,We as N,$e as O,U as P,te as Q,ee as R,Xe as S,Qe as T,m as U,b as V,T as W,en as X,nn as Y,F as Z,Pe as _,_e as $,rn as aa,Ue as ba,O as ca,p as da,y as ea,h as fa,tn as ga,on as ha,an as ia,Le as ja,sn as ka,Je as la,M as ma,ln as na,$ as oa,f as pa,un as qa,fn as ra,dn as sa,pn as ta,ze as ua,Be as va,ie as wa,mn as xa,yn as ya,hn as za,gn as Aa,bn as Ba,Tn as Ca,Sn as Da,L as Ea,je as Fa,qe as Ga,Nn as Ha,xn as Ia,Cn as Ja,Mn as Ka,An as La,In as Ma,Dn as Na,On as Oa,Rr as Pa};
