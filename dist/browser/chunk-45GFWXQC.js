import{a as h}from"./chunk-QDNKD3H5.js";import{m as e}from"./chunk-IAMDMFZ7.js";import{j as r}from"./chunk-ESDYQQXO.js";var o=class{constructor(t=s=>s.values().next().value){this._peeker=t,this._observable=new h,this._items=new Set}get length(){return e(this._observable),this._items.size}clear(){this.length!==0&&(this._items.clear(),this._observable.notify())}last(){if(this.length===0)return;let t;for(t of this._items);return t}peek(){if(this.length!==0)return this._peeker(this._items)}push(t){this.contains(t)||(this._items.add(t),this._observable.notify())}contains(t){return e(this._observable),this._items.has(t)}pop(){if(this.length===0)return;let t=this.peek();return this._items.delete(t),this._observable.notify(),t}popLast(){if(this.length===0)return;let t=this.last();return this._items.delete(t),this._observable.notify(),t}remove(t){this.contains(t)&&(this._items.delete(t),this._observable.notify())}filter(t){let s=this.length;return this._items.forEach(i=>{t(i)||this._items.delete(i)}),s!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){e(this._observable),yield*r(this._items)}};export{o as a};
