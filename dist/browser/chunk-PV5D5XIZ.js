import{b as T}from"./chunk-OHIIU6WS.js";import{m as B}from"./chunk-4LHUJTP5.js";import{f as b}from"./chunk-NBRBW7H5.js";var o=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.elementCount=9;let u=this.TypedArrayConstructor;f===void 0&&(f=9*u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}getMat(e,t){let s=e*this.typedBufferStride;for(let f=0;f<9;f++)t[f]=this.typedBuffer[s++];return t}setMat(e,t){let s=e*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[s++]=t[f]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}copyFrom(e,t,s){let f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,n=s*t.typedBufferStride;for(let d=0;d<9;++d)f[u++]=i[n++]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=9,r})();var a=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.elementCount=16;let u=this.TypedArrayConstructor;f===void 0&&(f=16*u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}getMat(e,t){let s=e*this.typedBufferStride;for(let f=0;f<16;f++)t[f]=this.typedBuffer[s++];return t}setMat(e,t){let s=e*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[s++]=t[f]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}copyFrom(e,t,s){let f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,n=s*t.typedBufferStride;for(let d=0;d<16;++d)f[u++]=i[n++]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=16,r})();var y=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.elementCount=1;let u=this.TypedArrayConstructor;f===void 0&&(f=u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.stride=f,this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=1,r})();var c=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.elementCount=2;let u=this.TypedArrayConstructor;f===void 0&&(f=2*u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,T(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=s}copyFrom(e,t,s){let f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,n=s*t.typedBufferStride;f[u++]=i[n++],f[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=2,r})();var p=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.elementCount=3;let u=this.TypedArrayConstructor;f===void 0&&(f=3*u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,B(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=s,this.typedBuffer[e]=f}copyFrom(e,t,s){let f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,n=s*t.typedBufferStride;f[u++]=i[n++],f[u++]=i[n++],f[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=3,r})();var l=(()=>{class r{constructor(e,t,s=0,f,i){this.TypedArrayConstructor=e,this.start=s,this.elementCount=4;let u=this.TypedArrayConstructor;f===void 0&&(f=4*u.BYTES_PER_ELEMENT);let n=t.byteLength===0?0:s;this.typedBuffer=i==null?new u(t,n):new u(t,n,(i-s)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,b(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s,f,i){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=s,this.typedBuffer[e++]=f,this.typedBuffer[e]=i}copyFrom(e,t,s){let f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,n=s*t.typedBufferStride;f[u++]=i[n++],f[u++]=i[n++],f[u++]=i[n++],f[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=4,r})();var R=(()=>{class r extends y{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),Y=(()=>{class r extends c{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),F=(()=>{class r extends p{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),U=(()=>{class r extends l{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),v=(()=>{class r extends o{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),j=(()=>{class r extends o{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),k=(()=>{class r extends a{constructor(e,t=0,s,f){super(Float32Array,e,t,s,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),q=(()=>{class r extends a{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),z=(()=>{class r extends y{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),D=(()=>{class r extends c{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),G=(()=>{class r extends p{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),H=(()=>{class r extends l{constructor(e,t=0,s,f){super(Float64Array,e,t,s,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),J=(()=>{class r extends y{constructor(e,t=0,s,f){super(Uint8Array,e,t,s,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),K=(()=>{class r extends c{constructor(e,t=0,s,f){super(Uint8Array,e,t,s,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),Q=(()=>{class r extends p{constructor(e,t=0,s,f){super(Uint8Array,e,t,s,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),W=(()=>{class r extends l{constructor(e,t=0,s,f){super(Uint8Array,e,t,s,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),X=(()=>{class r extends y{constructor(e,t=0,s,f){super(Uint16Array,e,t,s,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),Z=(()=>{class r extends c{constructor(e,t=0,s,f){super(Uint16Array,e,t,s,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),$=(()=>{class r extends p{constructor(e,t=0,s,f){super(Uint16Array,e,t,s,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),_=(()=>{class r extends l{constructor(e,t=0,s,f){super(Uint16Array,e,t,s,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),ee=(()=>{class r extends y{constructor(e,t=0,s,f){super(Uint32Array,e,t,s,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),te=(()=>{class r extends c{constructor(e,t=0,s,f){super(Uint32Array,e,t,s,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),re=(()=>{class r extends p{constructor(e,t=0,s,f){super(Uint32Array,e,t,s,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),fe=(()=>{class r extends l{constructor(e,t=0,s,f){super(Uint32Array,e,t,s,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),se=(()=>{class r extends y{constructor(e,t=0,s,f){super(Int8Array,e,t,s,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),ue=(()=>{class r extends c{constructor(e,t=0,s,f){super(Int8Array,e,t,s,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),ie=(()=>{class r extends p{constructor(e,t=0,s,f){super(Int8Array,e,t,s,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),ne=(()=>{class r extends l{constructor(e,t=0,s,f){super(Int8Array,e,t,s,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),ye=(()=>{class r extends y{constructor(e,t=0,s,f){super(Int16Array,e,t,s,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),ce=(()=>{class r extends c{constructor(e,t=0,s,f){super(Int16Array,e,t,s,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),pe=(()=>{class r extends p{constructor(e,t=0,s,f){super(Int16Array,e,t,s,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),le=(()=>{class r extends l{constructor(e,t=0,s,f){super(Int16Array,e,t,s,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),he=(()=>{class r extends y{constructor(e,t=0,s,f){super(Int32Array,e,t,s,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),de=(()=>{class r extends c{constructor(e,t=0,s,f){super(Int32Array,e,t,s,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),oe=(()=>{class r extends p{constructor(e,t=0,s,f){super(Int32Array,e,t,s,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),ae=(()=>{class r extends l{constructor(e,t=0,s,f){super(Int32Array,e,t,s,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})();export{R as a,Y as b,F as c,U as d,v as e,j as f,k as g,q as h,z as i,D as j,G as k,H as l,J as m,K as n,Q as o,W as p,X as q,Z as r,$ as s,_ as t,ee as u,te as v,re as w,fe as x,se as y,ue as z,ie as A,ne as B,ye as C,ce as D,pe as E,le as F,he as G,de as H,oe as I,ae as J};
