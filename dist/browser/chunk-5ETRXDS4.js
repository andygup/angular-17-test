import{K as f}from"./chunk-WMYPRHRR.js";import{R as u}from"./chunk-IAMDMFZ7.js";import{a as m}from"./chunk-53MWZ23O.js";import{a as p,b as d}from"./chunk-PT7S6WNL.js";var h=class c{constructor(){this._emitter=new c.EventEmitter(this)}emit(s,i){return this._emitter.emit(s,i)}on(s,i){return this._emitter.on(s,i)}once(s,i){return this._emitter.once(s,i)}hasEventListener(s){return this._emitter.hasEventListener(s)}};(function(c){class s{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap?.clear(),this._listenersMap=null}destroy(){this.clear()}emit(e,t){let r=this._listenersMap?.get(e);if(!r)return!1;let o=this._target||this,l=!1;for(let a of r.slice()){let _="deref"in a?a.deref():a;_?_?.call(o,t):l=!0}return l&&(r=r.filter(a=>!("deref"in a)||a.deref()!=null),this._listenersMap.set(e,r)),r.length>0}on(e,t){if(Array.isArray(e)){let o=e.map(l=>this.on(l,t));return d(o)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap??=new Map;let r=this._listenersMap.get(e)||[];return r.push(t),this._listenersMap.set(e,r),p(()=>{let o=this._listenersMap?.get(e),l=o?.indexOf(t)??-1;l>=0&&o.splice(l,1)})}once(e,t){let r=this.on(e,o=>{r.remove(),("deref"in t?t.deref():t)?.call(null,o)});return r}hasEventListener(e){let t=this._listenersMap?.get(e);return t!=null&&t.length>0}}c.EventEmitter=s,c.EventedMixin=n=>{let e=class extends n{constructor(){super(...arguments),this._emitter=new s}destroy(){this._emitter.clear()}emit(t,r){return this._emitter.emit(t,r)}on(t,r){return this._emitter.on(t,r)}once(t,r){return this._emitter.once(t,r)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return e=m([u("esri.core.Evented")],e),e};let i=class extends f{constructor(){super(...arguments),this._emitter=new h.EventEmitter(this)}destroy(){this._emitter.clear()}emit(n,e){return this._emitter.emit(n,e)}on(n,e){return this._emitter.on(n,e)}once(n,e){return this._emitter.once(n,e)}hasEventListener(n){return this._emitter.hasEventListener(n)}};i=m([u("esri.core.Evented")],i),c.EventedAccessor=i})(h||(h={}));var w=h;export{w as a};
