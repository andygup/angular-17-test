import{a as l}from"./chunk-QDNKD3H5.js";import{m as i}from"./chunk-IAMDMFZ7.js";import{f as a}from"./chunk-465DRXTW.js";var t=class{constructor(e,r){this._observable=new l,this._value=e,this._equalityFunction=r}get value(){return i(this._observable),this._value}set value(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}mutate(e){e(this._value),this._observable.notify()}};function h(s,e=a){return new t(s,e)}export{h as a};
