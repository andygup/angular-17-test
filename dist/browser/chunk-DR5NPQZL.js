import{a as T}from"./chunk-45GFWXQC.js";import{S as C,T as L,W as R}from"./chunk-XF4NUYV7.js";import{a as S,b as w,e as N,h as m,i as I,j as J,m as j,p as A,w as b,z as W}from"./chunk-PT7S6WNL.js";import{d as f}from"./chunk-XDTDVCGP.js";import{p as M,r as v}from"./chunk-465DRXTW.js";import{a as y}from"./chunk-AC62Z3FX.js";var H={statsWorker:()=>import("./chunk-ZYZVH5OD.js"),geometryEngineWorker:()=>import("./chunk-6PA5R3SW.js"),CSVSourceWorker:()=>import("./chunk-MYE426QY.js"),EdgeProcessingWorker:()=>import("./chunk-7XBF3OUY.js"),ElevationSamplerWorker:()=>import("./chunk-ZT3AE62Q.js"),FeatureServiceSnappingSourceWorker:()=>import("./chunk-GC7UH4SY.js"),GeoJSONSourceWorker:()=>import("./chunk-3D6YN2JJ.js"),LercWorker:()=>import("./chunk-CVYAA2Z7.js"),MemorySourceWorker:()=>import("./chunk-CYRECFFX.js"),PBFDecoderWorker:()=>import("./chunk-UHYUGXCC.js"),Pipeline:()=>import("./chunk-MSZPQHIY.js"),PointCloudWorker:()=>import("./chunk-I7MDT5XR.js"),RasterWorker:()=>import("./chunk-5K3X6EOS.js"),SceneLayerSnappingSourceWorker:()=>import("./chunk-DQFF2S63.js"),SceneLayerWorker:()=>import("./chunk-2OP3PZ5M.js"),WFSSourceWorker:()=>import("./chunk-HM6D3SUS.js"),WorkerTileHandler:()=>import("./chunk-DTRXJ7FB.js")};var c;(function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.OPEN=1]="OPEN",t[t.OPENED=2]="OPENED",t[t.RESPONSE=3]="RESPONSE",t[t.INVOKE=4]="INVOKE",t[t.ABORT=5]="ABORT",t[t.CLOSE=6]="CLOSE",t[t.OPEN_PORT=7]="OPEN_PORT",t[t.ON=8]="ON"})(c||(c={}));var U=0;function B(){return U++}function G(t){return t&&typeof t=="object"&&("result"in t||"transferList"in t)}function k(t){return t?typeof t=="string"?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function P(t,e,s,o){if(e.type===c.OPEN_PORT)return void t.postMessage(e,[e.port]);if(e.type!==c.INVOKE&&e.type!==c.RESPONSE)return void t.postMessage(e);let r;if(G(s)?(r=Q(s.transferList),e.data=s.result):(r=Q(o),e.data=s),r){if(y("ff")){for(let n of r)if("byteLength"in n&&n.byteLength>267386880){let i="Worker call with large ArrayBuffer would crash Firefox";switch(e.type){case c.INVOKE:throw i;case c.RESPONSE:return void P(t,{type:c.RESPONSE,jobId:e.jobId,error:k(i)})}}}t.postMessage(e,r)}else t.postMessage(e)}function O(t){if(!t)return null;let e=t.data;return e?typeof e=="string"?JSON.parse(e):e:null}function Q(t){if(!t?.length)return null;if(y("esri-workers-arraybuffer-transfer"))return t;let e=t.filter(s=>!q(s));return e.length?e:null}function q(t){return t instanceof ArrayBuffer||t?.constructor?.name==="ArrayBuffer"}var{CLOSE:V,ABORT:D,INVOKE:K,RESPONSE:g,OPEN_PORT:x,ON:X}=c,Y=2,E=class{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===c.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),this._timer===null&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(let e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}},u=class t{static connect(e){let s=new MessageChannel,o;o=typeof e=="function"?new e:"default"in e&&typeof e.default=="function"?new e.default:e;let r=new t(s.port1,{channel:s,client:o});return typeof o=="object"&&"remoteClient"in o&&(o.remoteClient=r),t.clients.set(r,o),s.port2}static loadWorker(e){let s=H[e];return s?s():Promise.resolve(null)}constructor(e,s,o){this._port=e,this._jobQueue=o,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new E(r=>this._onInvokeMessage(r)),this._client=s.client,this._onMessage=this._onMessage.bind(this),this._channel=s.channel,this._schedule=s.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:V}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,s,o){let r=o?.signal,n=o?.transferList;if(!this._port)return Promise.reject(new v("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:s}));let i=B();return new Promise((a,l)=>{if(J(r))return this._processWork(),void l(m());let p=j(r,()=>{let h=this._outJobs.get(i);h&&(this._outJobs.delete(i),this._processWork(),f(h.abortHandle),this._post({type:D,jobId:i}),l(m()))}),_={resolve:a,reject:l,abortHandle:p,debugInfo:e};this._outJobs.set(i,_),this._post({type:K,jobId:i,methodName:e,abortable:r!=null},s,n)})}on(e,s){let o=new MessageChannel;function r(n){s(n.data)}return this._port.postMessage({type:c.ON,eventType:e,port:o.port2},[o.port2]),o.port1.addEventListener("message",r),o.port1.start(),S(()=>{o.port1.postMessage({type:c.CLOSE}),o.port1.close(),o.port1.removeEventListener("message",r)})}jobAdded(){this._processWork()}openPort(){let e=new MessageChannel;return this._post({type:x,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=Y)return;let e=this._jobQueue?.pop();if(!e)return;let{methodName:s,data:o,invokeOptions:r,resolver:n}=e;this.invoke(s,o,r).then(i=>n.resolve(i)).catch(i=>n.reject(i))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(e=>{f(e.abortHandle),e.reject(m(`Worker closing, aborting job calling '${e.debugInfo}'`))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){this._schedule!=null?this._schedule(()=>this._processMessage(e)):this._processMessage(e)}_processMessage(e){let s=O(e);if(s)switch(s.type){case g:this._onResponseMessage(s);break;case K:this._invokeQueue.push(s);break;case D:this._onAbortMessage(s);break;case V:this._onCloseMessage();break;case x:this._onOpenPortMessage(s);break;case X:this._onOnMessage(s)}}_onAbortMessage(e){let s=this._inJobs,o=e.jobId,r=s.get(o);this._invokeQueue.push(e),r&&(r.controller&&r.controller.abort(),s.delete(o))}_onCloseMessage(){let e=this._client;this._close(),e&&"destroy"in e&&t.clients.get(this)===e&&e.destroy(),t.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){let{methodName:s,jobId:o,data:r,abortable:n}=e,i=n?new AbortController:null,a=this._inJobs,l,p=this._client,_=p[s];try{if(!_&&s&&s.includes(".")){let h=s.split(".");for(let d=0;d<h.length-1;d++)p=p[h[d]],_=p[h[d+1]]}if(typeof _!="function")throw new TypeError(`${s} is not a function`);l=_.call(p,r,{client:this,signal:i?i.signal:null})}catch(h){return void this._post({type:g,jobId:o,error:k(h)})}b(l)?(a.set(o,{controller:i,promise:l}),l.then(h=>{a.has(o)&&(a.delete(o),this._post({type:g,jobId:o},h))},h=>{a.has(o)&&(a.delete(o),A(h)||this._post({type:g,jobId:o,error:k(h||{message:`Error encountered at method ${s}`})}))})):this._post({type:g,jobId:o},l)}_onOpenPortMessage(e){new t(e.port,{client:this._client})}_onOnMessage(e){let{port:s}=e,o=this._client.on(e.eventType,n=>{s.postMessage(n)}),r=N(e.port,"message",n=>{O(n)?.type===c.CLOSE&&(r.remove(),o.remove(),s.close())})}_onResponseMessage(e){let{jobId:s,error:o,data:r}=e,n=this._outJobs;if(!n.has(s))return;let i=n.get(s);n.delete(s),this._processWork(),f(i.abortHandle),o?i.reject(v.fromJSON(JSON.parse(o))):i.resolve(r)}_post(e,s,o){return P(this._port,e,s,o)}};u.kernelInfo={buildDate:C,fullVersion:R,revision:L},u.clients=new Map;var F=new FinalizationRegistry(t=>{t.close()});function ue(t,e){F.register(t,e,e)}function $(t){F.unregister(t)}var z=class{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new T}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,s){return new Promise((o,r)=>{let n=!0,i=a=>{I(s.signal),n&&(n=!1,a())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let a=0;a<e.length;++a){let l=e[a];b(l)?this._clientPromises[a]=l.then(p=>(this._clients[a]=new u(p,s,this._ongoingJobsQueue),i(o),this._clients[a]),()=>(i(r),null)):(this._clients[a]=new u(l,s,this._ongoingJobsQueue),this._clientPromises[a]=Promise.resolve(this._clients[a]),i(o))}})}broadcast(e,s,o){let r=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){let i=this._clientPromises[n];r[n]=i.then(a=>a?.invoke(e,s,o))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject(m(`Worker closing, aborting job calling '${e.methodName}'`));for(let s of this._clientPromises)s.then(o=>o?.close());this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,$(this)}invoke(e,s,o){let r;Array.isArray(o)?(M.getLogger("esri.core.workers.Connection").warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:o}):r=o;let n=W();this._ongoingJobsQueue.push({methodName:e,data:s,invokeOptions:r,resolver:n});for(let i=0;i<this._clientPromises.length;i++){let a=this._clients[i];a?a.jobAdded():this._clientPromises[i].then(l=>l?.jobAdded())}return n.promise}on(e,s){return Promise.all(this._clientPromises).then(()=>w(this._clients.map(o=>o.on(e,s))))}openPorts(){return new Promise(e=>{let s=new Array(this._clientPromises.length),o=s.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then(n=>{n&&(s[r]=n.openPort()),--o==0&&e(s)})})}get test(){return{numClients:this._clients.length}}};export{ue as a,c as b,B as c,k as d,P as e,O as f,u as g,z as h};