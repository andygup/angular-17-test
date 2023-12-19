import{a as q,b as L,d as ie,f as pe,g as ce}from"./chunk-5AOXTKCW.js";import{c as R,d as ae,e as ne}from"./chunk-7EQBH2NW.js";import{f as oe}from"./chunk-HI2T2YSZ.js";import"./chunk-O5K35OSE.js";import{b as re}from"./chunk-V2KSICSA.js";import{$ as m,R as te,s as g}from"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import{u as se}from"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import{a as Y,i as u,k as Z,v as ee}from"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import{a as O}from"./chunk-JPDAKIWT.js";import{p as X,r as h}from"./chunk-465DRXTW.js";import{a as C}from"./chunk-AC62Z3FX.js";import{a as T,b,g as l}from"./chunk-ESDYQQXO.js";var w="upload-assets",y=()=>new Error,S=class extends h{constructor(){super(`${w}:unsupported`,"Layer does not support asset uploads.",y())}},I=class extends h{constructor(){super(`${w}:no-glb-support`,"Layer does not support glb.",y())}},U=class extends h{constructor(){super(`${w}:no-supported-source`,"No supported external source found",y())}},N=class extends h{constructor(){super(`${w}:not-base-64`,"Expected gltf data in base64 format after conversion.",y())}},j=class extends h{constructor(){super(`${w}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",y())}},$=class extends h{constructor(t,e){super(`${w}:bad-response`,`Bad response. Uploaded ${t} items and received ${e} results.`,y())}},D=class extends h{constructor(t,e){super(`${w}-layer:upload-failed`,`Failed to upload mesh file ${t}. Error code: ${e?.code??"-1"}. Error message: ${e?.messages??"unknown"}`,y())}},E=class extends h{constructor(t){super(`${w}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${t}, but it does not list it in its supported formats.`,y())}},B=class extends h{constructor(){super(`${w}:convert3D-failed`,"convert3D failed.")}};var k={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function P(s,t=r=>{},e){return new z(s,t,e)}var z=class{constructor(t,e=o=>{},r){if(this.onProgress=e,this.taskName=r,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof t=="number"){this._weights={};for(let o=0;o<t;o++){let a=o,n=1/t;this._weights[a]=n,this._progressMap.set(a,0)}}else this._weights=t;this.emitProgress()}emitProgress(){let t=0;for(let[e,r]of this._progressMap.entries())t+=r*this._weights[e];if(t===1&&C("enable-feature:esri-3dofl-upload-timings")){let e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(let[r,o]of this._timingsMap){let a=Math.round(o.end-o.start)/1e3,n=Math.round(a/e*100);console.log(this.taskName??"Task",{stepKey:r,stepTime:a,relativeTime:n})}}this.onProgress(t)}setProgress(t,e){if(this._progressMap.set(t,e),C("enable-feature:esri-3dofl-upload-timings")){let r=performance.now();this._startTime??=r;let o=se(this._timingsMap,t,()=>({start:r,end:0}));e===1&&(o.end=r)}this.emitProgress()}simulate(t,e){return H(r=>this.setProgress(t,r),e)}makeOnProgress(t){return e=>this.setProgress(t,e)}};function H(s=e=>{},t=De){let e=performance.now();s(0);let r=setInterval(()=>{let o=performance.now()-e,a=1-Math.exp(-o/t);s(a)},$e);return Y(()=>{clearInterval(r),s(1)})}function le(s,t=Ne){return O(s*me/t)}function ue(s,t=je){return O(s*me/t)}var Ne=10,je=10,me=8e-6,$e=50,De=1e3;var fe=1e6,de=20*fe,Be=2e9,ke=3;function ge(a,n,i){return l(this,arguments,function*({data:s,name:t,description:e},r,o){let p=null;try{let c=g(r,"uploads"),d=g(c,"info"),{data:A}=yield m(d,{query:{f:"json"},responseType:"json"});u(o);let G=oe(r),W=A.maxUploadFileSize*fe,Te=G?Be:W,_=G?Math.min(de,W):de;if(s.size>Te)throw new Error("Data too large");let be=g(c,"register"),{data:J}=yield m(be,{query:{f:"json",itemName:_e(t),description:e},responseType:"json",method:"post"});if(u(o),!J.success)throw new Error("Registration failed");let{itemID:Ee}=J.item;p=g(c,Ee);let Ae=g(p,"uploadPart"),K=Math.ceil(s.size/_),F=new Array;for(let f=0;f<K;++f)F.push(s.slice(f*_,Math.min((f+1)*_,s.size)));let x=F.slice().reverse(),V=new Array,Fe=P(K,o?.onProgress,"uploadItem"),xe=()=>l(this,null,function*(){for(;x.length!==0;){let f=F.length-x.length,v=x.pop(),M=new FormData,Me=Fe.simulate(f,le(v.size));try{let Se=v;M.append("f","json"),M.append("file",Se),M.append("partId",`${f}`);let{data:Ie}=yield m(Ae,{timeout:0,body:M,responseType:"json",method:"post"});if(u(o),!Ie.success)throw new Error("Part upload failed")}finally{Me.remove()}}});for(let f=0;f<ke&&x.length!==0;++f)V.push(xe());yield Promise.all(V);let ve=g(p,"commit"),{data:Q}=yield m(ve,{query:{f:"json",parts:F.map((f,v)=>v).join(",")},responseType:"json",method:"post"});if(u(o),!Q.success)throw new Error("Commit failed");return Q.item}catch(c){if(p!=null){let d=g(p,"delete");yield m(d,{query:{f:"json"},responseType:"json",method:"post"})}throw c}})}function _e(s){return s.replaceAll("/","_").replaceAll("\\","_")}function ks(s,t,e){return l(this,null,function*(){let r=s.length;if(!r)return e?.onProgress?.(1),[];let o=P(r,e?.onProgress,"uploadAssets");return Promise.all(s.map((a,n)=>Ce(a,t,b(T({},e),{onProgress:o.makeOnProgress(n)}))))})}function Ce(o,a,n){return l(this,arguments,function*(s,{layer:t,ongoingUploads:e},r){let i=e.get(s);if(i)return i;if(!ss(t))throw new S;if(Oe(s,t))return r?.onProgress?.(1),s;let p=Re(s,t,r);e.set(s,p);try{yield p}finally{e.delete(s)}return s})}function Oe(s,t){let{parsedUrl:e}=t;return e!=null&&s.metadata.externalSources.some(r=>ie(r,e))}function Re(s,t,e){return l(this,null,function*(){let{metadata:r}=s,{displaySource:o}=r,a=he(o?.source,t),n=!!a,i=r.externalSources.length>0,p=n?qe(a,t,e):i?Le(s,t,e):ze(s,t,e),c=yield p;return u(e),s.addExternalSources([c]),s})}function qe(s,t,e){return l(this,null,function*(){return{source:yield we(s,t,e),original:!0}})}function Le(s,t,e){return l(this,null,function*(){let r=Pe(t),{externalSources:o}=s.metadata,a=Ge(o,t);if(!a)throw new U;let n=P(k.uploadConvertibleSource,e?.onProgress,"uploadConvertibleSource"),i=yield we(a,t,{onProgress:n.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:i,original:!0}]);let p=a.reduce((d,{asset:A})=>A instanceof File?d+A.size:d,0),c=n.simulate("serviceAssetsToGlb",ue(p));try{return{source:yield Ye(i,t,r)}}finally{c.remove()}})}function ze(s,t,e){return l(this,null,function*(){let r=P(k.uploadLocalMesh,e?.onProgress,"uploadLocalMesh"),o=He(s,t,b(T({},e),{onProgress:r.makeOnProgress("meshToAssetBlob")}));return{source:yield ye([o],t,b(T({},e),{onProgress:r.makeOnProgress("uploadAssetBlobs")})),extent:s.extent.clone(),original:!0}})}function He(s,t,e){return l(this,null,function*(){let r=Pe(t),o=yield s.load(e),a=yield o.toBinaryGLTF({ignoreLocalTransform:!0});u(e);let n=yield a.buffer();return u(e),{blob:new Blob([n.data],{type:n.type}),assetName:`${re()}.glb`,assetType:r}})}function Ge(s,t){for(let e of s){let r=he(e.source,t);if(r)return r}return null}function he(s,t){if(!s)return null;let{infoFor3D:{supportedFormats:e,editFormats:r}}=t,o=ce(s),a=new Array,n=!1;for(let i=0;i<o.length;++i){let p=We(o[i],e);if(!p)return null;r.includes(p.assetType)&&(n=!0),a.push(p)}return n?a:null}function We(s,t){let e=pe(s,t);return e?{asset:s,assetType:e}:null}function we(s,t,e){return l(this,null,function*(){return ye(s.map(r=>Je(r,e)),t,e)})}function ye(s,t,e){return l(this,null,function*(){let r=P(k.uploadAssetBlobs,e?.onProgress,"uploadAssetBlobs"),o=yield Ve(s,t,b(T({},e),{onProgress:r.makeOnProgress("prepareAssetItems")}));u(e);let a=o.map(({item:i})=>i),{uploadResults:n}=yield Qe(a,t,b(T({},e),{onProgress:r.makeOnProgress("uploadAssetItems")}));return u(e),s.map((i,p)=>Xe(o[p],n[p],t))})}function Je(s,t){return l(this,null,function*(){let{asset:e,assetType:r}=s;if(e instanceof File)return{blob:e,assetName:e.name,assetType:r};let o=yield e.toBlob(t);return u(t),{blob:o,assetName:e.assetName,assetType:r}})}function Ke(s,t,e){return l(this,null,function*(){let{blob:r,assetType:o,assetName:a}=s,n=null;try{let i=yield ge({data:r,name:a},t.url,e);u(e),n={assetType:o,assetUploadId:i.itemID}}catch(i){Z(i),ts().warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!n){let i=yield te(r);if(u(e),!i.isBase64)throw new N;n={assetType:o,assetData:i.data}}if(!n)throw new j;return{item:n,assetName:a}})}function Ve(s,t,e){let r=P(s.length,e?.onProgress,"prepareAssetItems");return Promise.all(s.map((o,a)=>l(this,null,function*(){let n=Ke(yield o,t,b(T({},e),{onProgress:r.makeOnProgress(a)}));return u(e),n})))}function Qe(s,t,e){return l(this,null,function*(){let r=H(e?.onProgress);try{let o=yield m(g(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if(u(e),o.data.uploadResults.length!==s.length)throw new $(s.length,o.data.uploadResults.length);return o.data}finally{r.remove()}})}function Xe(s,t,e){let{success:r}=t;if(!r){let{error:c}=t;throw new D(s.assetName,c)}let{assetHash:o}=t,{assetName:a,item:{assetType:n}}=s,{infoFor3D:{supportedFormats:i}}=e,p=ne(n,i);if(!p)throw new E(n);return new q(a,p,[new L(`${e.parsedUrl.path}/assets/${o}`,o)])}function Ye(s,t,e){return l(this,null,function*(){let r=s.map(({assetName:c,parts:d})=>({assetName:c,assetHash:d[0].partHash})),o=t.capabilities?.operations.supportsAsyncConvert3D,a={f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:e,async:o},n=g(t.parsedUrl.path,"convert3D"),i;try{i=(yield(o?es:Ze)(n,{query:a,responseType:"json",timeout:0})).data}catch{throw new B}let{supportedFormats:p}=t.infoFor3D;return i.assets.map(c=>{let d=R(c.contentType,p);if(!d)throw new E(d);return new q(c.assetName,c.contentType,[new L(c.assetURL,c.assetHash)])})})}function Ze(s,t){return m(s,t)}function es(s,t){return l(this,null,function*(){let e=(yield m(s,t)).data.statusUrl;for(;;){let r=(yield m(e,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return m(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(r.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}yield ee(rs)}})}function ss(s){return!!s.infoFor3D&&!!s.url}function Pe(s){let{infoFor3D:t}=s,e=R("model/gltf-binary",t.supportedFormats)??ae("glb",t.supportedFormats);if(!e)throw new I;return e}function ts(){return X.getLogger("esri.layers.graphics.sources.support.uploadAssets")}var rs=1e3;export{ks as uploadAssets};