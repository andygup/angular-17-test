"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[8249],{8249:(pn,ft,et)=>{et.r(ft),et.d(ft,{i:()=>Nt});var nt,Mt=et(90104),N={exports:{}};nt=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,N.exports=function(W={}){var H,P,i=void 0!==W?W:{};i.ready=new Promise((t,e)=>{H=t,P=e});var E=Object.assign({},i),x="object"==typeof window,L="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process;var rt,b="";(x||L)&&(L?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),nt&&(b=nt),b=0!==b.indexOf("blob:")?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",L&&(rt=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var z,q,qt=i.print||console.log.bind(console),O=i.printErr||console.warn.bind(console);Object.assign(i,E),E=null,i.wasmBinary&&(z=i.wasmBinary),"object"!=typeof WebAssembly&&K("no native wasm support detected");var j,v,U,G,R,p,vt,ht,mt,gt=!1;function yt(){var t=q.buffer;i.HEAP8=j=new Int8Array(t),i.HEAP16=U=new Int16Array(t),i.HEAP32=R=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=G=new Uint16Array(t),i.HEAPU32=p=new Uint32Array(t),i.HEAPF32=vt=new Float32Array(t),i.HEAPF64=ht=new Float64Array(t)}var _t=[],wt=[],bt=[],F=0,V=null;function K(t){i.onAbort&&i.onAbort(t),O(t="Aborted("+t+")"),gt=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw P(e),e}var M;function At(t){return t.startsWith("data:application/octet-stream;base64,")}function Tt(t){try{if(t==M&&z)return new Uint8Array(z);if(rt)return rt(t);throw"both async and sync fetching of the wasm failed"}catch(e){K(e)}}function Ct(t,e,n){return function ee(t){return z||!x&&!L||"function"!=typeof fetch?Promise.resolve().then(()=>Tt(t)):fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()}).catch(()=>Tt(t))}(t).then(r=>WebAssembly.instantiate(r,e)).then(r=>r).then(n,r=>{O("failed to asynchronously prepare wasm: "+r),K(r)})}function it(t){for(;t.length>0;)t.shift()(i)}At(M="i3s.wasm")||(M=function Lt(t){return i.locateFile?i.locateFile(t,b):b+t}(M));var X=[];function ot(t){var e=X[t];return e||(t>=X.length&&(X.length=t+1),X[t]=e=mt.get(t)),e}function oe(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(e){p[this.ptr+4>>2]=e},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(e){p[this.ptr+8>>2]=e},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(e){j[this.ptr+12>>0]=e=e?1:0},this.get_caught=function(){return 0!=j[this.ptr+12>>0]},this.set_rethrown=function(e){j[this.ptr+13>>0]=e=e?1:0},this.get_rethrown=function(){return 0!=j[this.ptr+13>>0]},this.init=function(e,n){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(n)},this.set_adjusted_ptr=function(e){p[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(zt(this.get_type()))return p[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var Z={};function Pt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function $(t){return this.fromWireType(R[t>>2])}var I={},S={},J={},ue=48,se=57;function ce(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=ue&&e<=se?"_"+t:t}function at(t,e){var n=function fe(t,e){return{[t=ce(t)]:function(){return e.apply(this,arguments)}}[t]}(e,function(r){this.name=e,this.message=r;var o=new Error(r).stack;void 0!==o&&(this.stack=this.toString()+"\n"+o.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var Et=void 0;function kt(t){throw new Et(t)}function Wt(t,e,n){function r(a){var c=n(a);c.length!==t.length&&kt("Mismatched type converter count");for(var f=0;f<t.length;++f)A(t[f],c[f])}t.forEach(function(a){J[a]=e});var o=new Array(e.length),u=[],s=0;e.forEach((a,c)=>{S.hasOwnProperty(a)?o[c]=S[a]:(u.push(a),I.hasOwnProperty(a)||(I[a]=[]),I[a].push(()=>{o[c]=S[a],++s===u.length&&r(o)}))}),0===u.length&&r(o)}function ut(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var jt=void 0;function h(t){for(var e="",n=t;v[n];)e+=jt[v[n++]];return e}var Rt=void 0;function m(t){throw new Rt(t)}function A(t,e,n={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||m('type "'+r+'" must have a positive integer typeid pointer'),S.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;m("Cannot register type '"+r+"' twice")}if(S[t]=e,delete J[t],I.hasOwnProperty(t)){var o=I[t];delete I[t],o.forEach(u=>u())}}var g=new function he(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){let e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function Ft(t){t>=g.reserved&&0==--g.get(t).refcount&&g.free(t)}function me(){for(var t=0,e=g.reserved;e<g.allocated.length;++e)void 0!==g.allocated[e]&&++t;return t}var Q_toHandle=t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:t})}};function _e(t,e){switch(e){case 2:return function(n){return this.fromWireType(vt[n>>2])};case 3:return function(n){return this.fromWireType(ht[n>>3])};default:throw new TypeError("Unknown float type: "+t)}}function B(t,e){t=h(t);var r=function n(){return t.includes("j")?function We(t,e){var n=[];return function(){return n.length=0,Object.assign(n,arguments),function ke(t,e,n){return t.includes("j")?function Ee(t,e,n){var r=i["dynCall_"+t];return n&&n.length?r.apply(null,[e].concat(n)):r.call(null,e)}(t,e,n):ot(e).apply(null,n)}(t,e,n)}}(t,e):ot(e)}();return"function"!=typeof r&&m("unknown function pointer with signature "+t+": "+e),r}var St=void 0;function xt(t){var e=Ht(t),n=h(e);return T(e),n}function Fe(t,e,n){switch(e){case 0:return n?function(r){return j[r]}:function(r){return v[r]};case 1:return n?function(r){return U[r>>1]}:function(r){return G[r>>1]};case 2:return n?function(r){return R[r>>2]}:function(r){return p[r>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var Ot=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ut(t,e,n){for(var r=e+n,o=e;t[o]&&!(o>=r);)++o;if(o-e>16&&t.buffer&&Ot)return Ot.decode(t.subarray(e,o));for(var u="";e<o;){var s=t[e++];if(128&s){var a=63&t[e++];if(192!=(224&s)){var c=63&t[e++];if((s=224==(240&s)?(15&s)<<12|a<<6|c:(7&s)<<18|a<<12|c<<6|63&t[e++])<65536)u+=String.fromCharCode(s);else{var f=s-65536;u+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else u+=String.fromCharCode((31&s)<<6|a)}else u+=String.fromCharCode(s)}return u}function De(t,e){return t?Ut(v,t,e):""}var It=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function ze(t,e){for(var n=t,r=n>>1,o=r+e/2;!(r>=o)&&G[r];)++r;if((n=r<<1)-t>32&&It)return It.decode(v.subarray(t,n));for(var u="",s=0;!(s>=e/2);++s){var a=U[t+2*s>>1];if(0==a)break;u+=String.fromCharCode(a)}return u}function Ve(t,e,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=e,o=(n-=2)<2*t.length?n/2:t.length,u=0;u<o;++u){var s=t.charCodeAt(u);U[e>>1]=s,e+=2}return U[e>>1]=0,e-r}function Me(t){return 2*t.length}function Be(t,e){for(var n=0,r="";!(n>=e/4);){var o=R[t+4*n>>2];if(0==o)break;if(++n,o>=65536){var u=o-65536;r+=String.fromCharCode(55296|u>>10,56320|1023&u)}else r+=String.fromCharCode(o)}return r}function Ne(t,e,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=e,o=r+n-4,u=0;u<t.length;++u){var s=t.charCodeAt(u);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++u)),R[e>>2]=s,(e+=4)+4>o)break}return R[e>>2]=0,e-r}function Le(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}var $e={};function on(t){var e=q.buffer;try{return q.grow(t-e.byteLength+65535>>>16),yt(),1}catch{}}var cn=[null,[],[]];function fn(t,e){var n=cn[t];0===e||10===e?((1===t?qt:O)(Ut(n,0)),n.length=0):n.push(e)}Et=i.InternalError=at(Error,"InternalError"),function pe(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);jt=t}(),Rt=i.BindingError=at(Error,"BindingError"),function ge(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=me}(),St=i.UnboundTypeError=at(Error,"UnboundTypeError");var Dt={__call_sighandler:function ie(t,e){ot(t)(e)},__cxa_throw:function ae(t,e,n){throw new oe(t).init(e,n),t},_embind_finalize_value_object:function le(t){var e=Z[t];delete Z[t];var n=e.rawConstructor,r=e.rawDestructor,o=e.fields;Wt([t],o.map(u=>u.getterReturnType).concat(o.map(u=>u.setterArgumentType)),u=>{var s={};return o.forEach((a,c)=>{var l=u[c],d=a.getter,C=a.getterContext,y=u[c+o.length],_=a.setter,k=a.setterContext;s[a.fieldName]={read:w=>l.fromWireType(d(C,w)),write:(w,ct)=>{var tt=[];_(k,w,y.toWireType(tt,ct)),Pt(tt)}}}),[{name:e.name,fromWireType:function(a){var c={};for(var f in s)c[f]=s[f].read(a);return r(a),c},toWireType:function(a,c){for(var f in s)if(!(f in c))throw new TypeError('Missing field:  "'+f+'"');var l=n();for(f in s)s[f].write(l,c[f]);return null!==a&&a.push(r,l),l},argPackAdvance:8,readValueFromPointer:$,destructorFunction:r}]})},_embind_register_bigint:function de(t,e,n,r,o){},_embind_register_bool:function ve(t,e,n,r,o){var u=ut(n);A(t,{name:e=h(e),fromWireType:function(s){return!!s},toWireType:function(s,a){return a?r:o},argPackAdvance:8,readValueFromPointer:function(s){var a;if(1===n)a=j;else if(2===n)a=U;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+e);a=R}return this.fromWireType(a[s>>u])},destructorFunction:null})},_embind_register_emval:function ye(t,e){A(t,{name:e=h(e),fromWireType:function(n){var r=(t=>(t||m("Cannot use deleted val. handle = "+t),g.get(t).value))(n);return Ft(n),r},toWireType:function(n,r){return Q_toHandle(r)},argPackAdvance:8,readValueFromPointer:$,destructorFunction:null})},_embind_register_float:function we(t,e,n){var r=ut(n);A(t,{name:e=h(e),fromWireType:function(o){return o},toWireType:function(o,u){return u},argPackAdvance:8,readValueFromPointer:_e(e,r),destructorFunction:null})},_embind_register_function:function Re(t,e,n,r,o,u,s){var a=function Ce(t,e){for(var n=[],r=0;r<t;r++)n.push(p[e+4*r>>2]);return n}(e,n);t=h(t),o=B(r,o),function Te(t,e,n){i.hasOwnProperty(t)?((void 0===n||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[n])&&m("Cannot register public name '"+t+"' twice"),function Ae(t,e,n){if(void 0===t[e].overloadTable){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}(i,t,t),i.hasOwnProperty(n)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[t].overloadTable[n]=e):(i[t]=e,void 0!==n&&(i[t].numArguments=n))}(t,function(){!function je(t,e){var n=[],r={};throw e.forEach(function o(u){r[u]||S[u]||(J[u]?J[u].forEach(o):(n.push(u),r[u]=!0))}),new St(t+": "+n.map(xt).join([", "]))}("Cannot call "+t+" due to unbound types",a)},e-1),Wt([],a,function(c){var f=[c[0],null].concat(c.slice(1));return function Pe(t,e,n){i.hasOwnProperty(t)||kt("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==n?i[t].overloadTable[n]=e:(i[t]=e,i[t].argCount=n)}(t,function be(t,e,n,r,o,u){var s=e.length;s<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==n,c=!1,f=1;f<e.length;++f)if(null!==e[f]&&void 0===e[f].destructorFunction){c=!0;break}var l="void"!==e[0].name,d=s-2,C=new Array(d),y=[],_=[];return function(){var k;arguments.length!==d&&m("function "+t+" called with "+arguments.length+" arguments, expected "+d+" args!"),_.length=0,y.length=a?2:1,y[0]=o,a&&(k=e[1].toWireType(_,this),y[1]=k);for(var w=0;w<d;++w)C[w]=e[w+2].toWireType(_,arguments[w]),y.push(C[w]);return function ct(tt){if(c)Pt(_);else for(var D=a?1:2;D<e.length;D++)null!==e[D].destructorFunction&&e[D].destructorFunction(1===D?k:C[D-2]);if(l)return e[0].fromWireType(tt)}(r.apply(null,y))}}(t,f,null,o,u),e-1),[]})},_embind_register_integer:function Se(t,e,n,r,o){e=h(e);var u=ut(n),s=l=>l;if(0===r){var a=32-8*n;s=l=>l<<a>>>a}var c=e.includes("unsigned");A(t,{name:e,fromWireType:s,toWireType:c?function(l,d){return d>>>0}:function(l,d){return d},argPackAdvance:8,readValueFromPointer:Fe(e,u,0!==r),destructorFunction:null})},_embind_register_memory_view:function xe(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(u){var a=p[u>>=2];return new r(p.buffer,p[u+1],a)}A(t,{name:n=h(n),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function He(t,e){var n="std::string"===(e=h(e));A(t,{name:e,fromWireType:function(r){var o,u=p[r>>2],s=r+4;if(n)for(var a=s,c=0;c<=u;++c){var f=s+c;if(c==u||0==v[f]){var l=De(a,f-a);void 0===o?o=l:(o+=String.fromCharCode(0),o+=l),a=f+1}}else{var d=new Array(u);for(c=0;c<u;++c)d[c]=String.fromCharCode(v[s+c]);o=d.join("")}return T(r),o},toWireType:function(r,o){var u;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var s="string"==typeof o;s||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),u=n&&s?function Ie(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r<=127?e++:r<=2047?e+=2:r>=55296&&r<=57343?(e+=4,++n):e+=3}return e}(o):o.length;var a=st(4+u+1),c=a+4;if(p[a>>2]=u,n&&s)!function Ue(t,e,n){(function Oe(t,e,n,r){if(!(r>0))return 0;for(var o=n,u=n+r-1,s=0;s<t.length;++s){var a=t.charCodeAt(s);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++s)),a<=127){if(n>=u)break;e[n++]=a}else if(a<=2047){if(n+1>=u)break;e[n++]=192|a>>6,e[n++]=128|63&a}else if(a<=65535){if(n+2>=u)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|63&a}else{if(n+3>=u)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|63&a}}e[n]=0})(t,v,e,n)}(o,c,u+1);else if(s)for(var f=0;f<u;++f){var l=o.charCodeAt(f);l>255&&(T(c),m("String has UTF-16 code units that do not fit in 8 bits")),v[c+f]=l}else for(f=0;f<u;++f)v[c+f]=o[f];return null!==r&&r.push(T,a),a},argPackAdvance:8,readValueFromPointer:$,destructorFunction:function(r){T(r)}})},_embind_register_std_wstring:function qe(t,e,n){var r,o,u,s,a;n=h(n),2===e?(r=ze,o=Ve,s=Me,u=()=>G,a=1):4===e&&(r=Be,o=Ne,s=Le,u=()=>p,a=2),A(t,{name:n,fromWireType:function(c){for(var f,l=p[c>>2],d=u(),C=c+4,y=0;y<=l;++y){var _=c+4+y*e;if(y==l||0==d[_>>a]){var k=r(C,_-C);void 0===f?f=k:(f+=String.fromCharCode(0),f+=k),C=_+e}}return T(c),f},toWireType:function(c,f){"string"!=typeof f&&m("Cannot pass non-string to C++ string type "+n);var l=s(f),d=st(4+l+e);return p[d>>2]=l>>a,o(f,d+4,l+e),null!==c&&c.push(T,d),d},argPackAdvance:8,readValueFromPointer:$,destructorFunction:function(c){T(c)}})},_embind_register_value_object:function Ge(t,e,n,r,o,u){Z[t]={name:h(e),rawConstructor:B(n,r),rawDestructor:B(o,u),fields:[]}},_embind_register_value_object_field:function Ke(t,e,n,r,o,u,s,a,c,f){Z[t].fields.push({fieldName:h(e),getterReturnType:n,getter:B(r,o),getterContext:u,setterArgumentType:s,setter:B(a,c),setterContext:f})},_embind_register_void:function Xe(t,e){A(t,{isVoid:!0,name:e=h(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},_emval_decref:Ft,_emval_incref:function Ze(t){t>4&&(g.get(t).refcount+=1)},_emval_new_cstring:function Qe(t){return Q_toHandle(function Je(t){var e=$e[t];return void 0===e?h(t):e}(t))},_emval_take_value:function tn(t,e){var n=(t=function Ye(t,e){var n=S[t];return void 0===n&&m(e+" has unknown type "+xt(t)),n}(t,"_emval_take_value")).readValueFromPointer(e);return Q_toHandle(n)},abort:function en(){K("")},emscripten_memcpy_big:function nn(t,e,n){v.copyWithin(t,e,e+n)},emscripten_resize_heap:function an(t){var s,e=v.length,n=2147483648;if((t>>>=0)>n)return!1;for(var o=1;o<=4;o*=2){var u=e*(1+.2/o);if(u=Math.min(u,t+100663296),on(Math.min(n,(s=Math.max(t,u))+(65536-s%65536)%65536)))return!0}return!1},fd_close:function un(t){return 52},fd_seek:function sn(t,e,n,r,o){return 70},fd_write:function ln(t,e,n,r){for(var o=0,u=0;u<n;u++){var s=p[e>>2],a=p[e+4>>2];e+=8;for(var c=0;c<a;c++)fn(t,v[s+c]);o+=a}return p[r>>2]=o,0}};!function re(){var t={env:Dt,wasi_snapshot_preview1:Dt};function e(r,o){var u=r.exports;return i.asm=u,q=i.asm.memory,yt(),mt=i.asm.__indirect_function_table,function $t(t){wt.unshift(t)}(i.asm.__wasm_call_ctors),function Yt(t){if(F--,i.monitorRunDependencies&&i.monitorRunDependencies(F),0==F&&V){var e=V;V=null,e()}}(),u}if(function Qt(t){F++,i.monitorRunDependencies&&i.monitorRunDependencies(F)}(),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(r){O("Module.instantiateWasm callback failed with error: "+r),P(r)}(function ne(t,e,n,r){return t||"function"!=typeof WebAssembly.instantiateStreaming||At(e)||"function"!=typeof fetch?Ct(e,n,r):fetch(e,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,n).then(r,function(u){return O("wasm streaming compile failed: "+u),O("falling back to ArrayBuffer instantiation"),Ct(e,n,r)}))})(z,M,t,function n(r){e(r.instance)}).catch(P)}();var st=function(){return(st=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},Ht=function(){return(Ht=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Y,zt=function(){return(zt=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Vt(){function t(){Y||(Y=!0,i.calledRun=!0,gt||(function Kt(){it(wt)}(),H(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function Xt(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),bt.unshift(t);var t;it(bt)}()))}F>0||(function Gt(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),_t.unshift(t);var t;it(_t)}(),F>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),t()},1)):t()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},V=function t(){Y||Vt(),Y||(V=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Vt(),W.ready};var pt=N.exports;const Nt=function Bt(W,H){for(var P=0;P<H.length;P++){const i=H[P];if("string"!=typeof i&&!Array.isArray(i))for(const E in i)if("default"!==E&&!(E in W)){const x=Object.getOwnPropertyDescriptor(i,E);x&&Object.defineProperty(W,E,x.get?x:{enumerable:!0,get:()=>i[E]})}}return Object.freeze(Object.defineProperty(W,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,Mt.g)(pt)},[pt])}}]);