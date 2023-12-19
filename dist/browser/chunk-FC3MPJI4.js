import{a as N}from"./chunk-5ETRXDS4.js";import{a as P}from"./chunk-QDNKD3H5.js";import{H as y,q as E,t as S}from"./chunk-WMYPRHRR.js";import{G as q,R as O,j as I,m as r,z as T}from"./chunk-IAMDMFZ7.js";import{a as C}from"./chunk-53MWZ23O.js";import{a as B}from"./chunk-PT7S6WNL.js";import{b as L}from"./chunk-465DRXTW.js";import{j as w}from"./chunk-ESDYQQXO.js";var n;(function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"})(n||(n={}));function z(e){return(t,s)=>{t[s]=e}}var d,V=class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(t){this.defaultPrevented=!1,this.item=t}},R=class{constructor(t,s,i,o,c){this.target=t,this.added=s,this.removed=i,this.start=o,this.deleteCount=c}},u=new I(V,void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1});function M(e){return e?e instanceof A?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function D(e){if(e?.length)return e[0]}function j(e,t,s,i){let o=Math.min(e.length-s,t.length-i),c=0;for(;c<o&&e[s+c]===t[i+c];)c++;return c}function k(e,t,s,i){t&&t.forEach((o,c,m)=>{e.push(o),k(e,s.call(i,o,c,m),s,i)})}var b=new Set,p=new Set,v=new Set,x=new Map,$=0,A=d=class extends N.EventedAccessor{static isCollection(e){return e!=null&&e instanceof d}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new P,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:$++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof d?{items:e}:e:{}}destroy(){this._removeAllRaw()}*[Symbol.iterator](){yield*w(this.items)}get items(){return r(this._observable),this._items}set items(e){this._emitBeforeChanges(n.ADD)||(this._splice(0,this.length,M(e)),this._emitAfterChanges(n.ADD))}hasEventListener(e){return e==="change"?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if(e==="change"){let s=this._chgListeners,i={removed:!1,callback:t};return s.push(i),this._notifications&&this._notifications.push({listeners:s.slice(),items:this._items.slice(),changes:[]}),B(()=>{i.removed=!0,s.splice(s.indexOf(i),1)})}return this._emitter.on(e,t)}once(e,t){let s="deref"in t?()=>t.deref():()=>t,i=this.on(e,o=>{s()?.call(null,o),i.remove()});return i}add(e,t){if(r(this._observable),this._emitBeforeChanges(n.ADD))return this;let s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(n.ADD),this}addMany(e,t=this._items.length){if(r(this._observable),!e?.length)return this;if(this._emitBeforeChanges(n.ADD))return this;let s=this.getNextIndex(t);return this._splice(s,0,M(e)),this._emitAfterChanges(n.ADD),this}at(e){if(r(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(r(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return[];let e=this._removeAllRaw();return this._emitAfterChanges(n.REMOVE),e}_removeAllRaw(){return this.length===0?[]:this._splice(0,this.length)||[]}clone(){return r(this._observable),this._createNewInstance({items:this._items.map(L)})}concat(...e){r(this._observable);let t=e.map(M);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(r(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;let s=this._splice(0,this.length),i=s.length;for(let o=0;o<i;o++)e.call(t,s[o],o,s);this._emitAfterChanges(n.REMOVE)}every(e,t){return r(this._observable),this._items.every(e,t)}filter(e,t){let s;return r(this._observable),s=arguments.length===2?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return r(this._observable),this._items.find(e,t)}findIndex(e,t){return r(this._observable),this._items.findIndex(e,t)}flatten(e,t){r(this._observable);let s=[];return k(s,this,e,t),new d(s)}forEach(e,t){return r(this._observable),this._items.forEach(e,t)}getItemAt(e){return r(this._observable),this._items[e]}getNextIndex(e){r(this._observable);let t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return r(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return r(this._observable),this._items.indexOf(e,t)}join(e=","){return r(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return r(this._observable),this._items.lastIndexOf(e,t)}map(e,t){r(this._observable);let s=this._items.map(e,t);return new d({items:s})}reorder(e,t=this.length-1){r(this._observable);let s=this.indexOf(e);if(s!==-1){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(n.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(n.MOVE)}return e}}pop(){if(r(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;let e=D(this._splice(this.length-1,1));return this._emitAfterChanges(n.REMOVE),e}push(...e){return r(this._observable),this._emitBeforeChanges(n.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(n.ADD)),this.length}reduce(e,t){r(this._observable);let s=this._items;return arguments.length===2?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){r(this._observable);let s=this._items;return arguments.length===2?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return r(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(r(this._observable),e<0||e>=this.length||this._emitBeforeChanges(n.REMOVE))return;let t=D(this._splice(e,1));return this._emitAfterChanges(n.REMOVE),t}removeMany(e){if(r(this._observable),!e?.length||this._emitBeforeChanges(n.REMOVE))return[];let t=e instanceof d?e.toArray():e,s=this._items,i=[],o=t.length;for(let c=0;c<o;c++){let m=t[c],l=s.indexOf(m);if(l>-1){let a=1+j(t,s,c+1,l+1),f=this._splice(l,a);f&&f.length>0&&i.push.apply(i,f),c+=a-1}}return this._emitAfterChanges(n.REMOVE),i}reverse(){if(r(this._observable),this._emitBeforeChanges(n.MOVE))return this;let e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(n.MOVE),this}shift(){if(r(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;let e=D(this._splice(0,1));return this._emitAfterChanges(n.REMOVE),e}slice(e=0,t=this.length){return r(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return r(this._observable),this._items.some(e,t)}sort(e){if(r(this._observable),!this.length||this._emitBeforeChanges(n.MOVE))return this;let t=this._splice(0,this.length);return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(n.MOVE),this}splice(e,t,...s){r(this._observable);let i=(t?n.REMOVE:0)|(s.length?n.ADD:0);if(this._emitBeforeChanges(i))return[];let o=this._splice(e,t,s)||[];return this._emitAfterChanges(i),o}toArray(){return r(this._observable),this._items.slice()}toJSON(){return r(this._observable),this.toArray()}toLocaleString(){return r(this._observable),this._items.toLocaleString()}toString(){return r(this._observable),this._items.toString()}unshift(...e){return r(this._observable),!e.length||this._emitBeforeChanges(n.ADD)||(this._splice(0,0,e),this._emitAfterChanges(n.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){let i=this._items,o=this.itemType,c,m;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=S(()=>this._dispatchChange())),e<0&&(e+=this.length),t){if(m=i.splice(e,t),this.hasEventListener("before-remove")){let l=u.acquire();l.target=this,l.cancellable=!0;for(let a=0,f=m.length;a<f;a++)c=m[a],l.reset(c),this.emit("before-remove",l),l.defaultPrevented&&(m.splice(a,1),i.splice(e,0,c),e+=1,a-=1,f-=1);u.release(l)}if(this.length=this._items.length,this.hasEventListener("after-remove")){let l=u.acquire();l.target=this,l.cancellable=!1;let a=m.length;for(let f=0;f<a;f++)l.reset(m[f]),this.emit("after-remove",l);u.release(l)}}if(s?.length){if(o){let h=[];for(let _ of s){let g=o.ensureType(_);g==null&&_!=null||h.push(g)}s=h}let l=this.hasEventListener("before-add"),a=this.hasEventListener("after-add"),f=e===this.length;if(l||a){let h=u.acquire();h.target=this,h.cancellable=!0;let _=u.acquire();_.target=this,_.cancellable=!1;for(let g of s)l?(h.reset(g),this.emit("before-add",h),h.defaultPrevented||(f?i.push(g):i.splice(e++,0,g),this._set("length",i.length),a&&(_.reset(g),this.emit("after-add",_)))):(f?i.push(g):i.splice(e++,0,g),this._set("length",i.length),_.reset(g),this.emit("after-add",_));u.release(_),u.release(h)}else{if(f)for(let h of s)i.push(h);else i.splice(e,0,...s);this._set("length",i.length)}}if((s?.length||m?.length)&&this._notifyChangeEvent(s,m),this.hasEventListener("after-splice")){let l=new R(this,s,m,e,t);this.emit("after-splice",l)}return m}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){let s=u.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,u.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){let t=u.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),u.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;let e=this._notifications;this._notifications=null;for(let t of e){let s=t.changes;b.clear(),p.clear(),v.clear();for(let{added:a,removed:f}of s){if(a)if(v.size===0&&p.size===0)for(let h of a)b.add(h);else for(let h of a)p.has(h)?(v.add(h),p.delete(h)):v.has(h)||b.add(h);if(f)if(v.size===0&&b.size===0)for(let h of f)p.add(h);else for(let h of f)b.has(h)?b.delete(h):(v.delete(h),p.add(h))}let i=E.acquire();b.forEach(a=>{i.push(a)});let o=E.acquire();p.forEach(a=>{o.push(a)});let c=this._items,m=t.items,l=E.acquire();if(v.forEach(a=>{m.indexOf(a)!==c.indexOf(a)&&l.push(a)}),t.listeners&&(i.length||o.length||l.length)){let a={target:this,added:i,removed:o,moved:l},f=t.listeners.length;for(let h=0;h<f;h++){let _=t.listeners[h];_.removed||_.callback.call(this,a)}}E.release(i),E.release(o),E.release(l)}b.clear(),p.clear(),v.clear()}};A.ofType=e=>{if(!e)return d;if(x.has(e))return x.get(e);let t=null;if(typeof e=="function")t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(let i in e.typeMap){let o=e.typeMap[i].prototype.declaredClass;t?t+=` | ${o}`:t=o}let s=class extends d{};return C([z({Type:e,ensureType:typeof e=="function"?T(e):q(e)})],s.prototype,"itemType",void 0),s=C([O(`esri.core.Collection<${t}>`)],s),x.set(e,s),s},C([y()],A.prototype,"length",void 0),C([y()],A.prototype,"items",null),A=d=C([O("esri.core.Collection")],A);var ne=A;export{z as a,ne as b};
