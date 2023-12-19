import{a as Ue,b as Ve,c as De,d as Pe}from"./chunk-GWXMNOIW.js";import{b as Ce,c as Ie}from"./chunk-OCBWGGCR.js";import{b as S,h as c,k as I,l as L}from"./chunk-TKTKGUCU.js";import{b as Fe}from"./chunk-J43N2ESR.js";import{a as Le}from"./chunk-Y4SWPZQY.js";import{a as Z}from"./chunk-QJR6XTTM.js";import{a as Q,b as U}from"./chunk-6B6VO6EC.js";import{D as ve,b as X,c as Y,d as W,m as xe,n as be,o as _e,p as Se,q as Ae,r as Ee,s as Re,t as Ne,u as Oe,v as Me,z as Be}from"./chunk-PV5D5XIZ.js";import{a as ee}from"./chunk-HTB4QCFJ.js";import{e as he,f as Te,g as ye,h as we,k as ge}from"./chunk-IXIJFOEL.js";import{c as pe}from"./chunk-HB7BVTLV.js";import{$ as me,p as ce,v as H,w as z,y as de}from"./chunk-XF4NUYV7.js";import{u as le}from"./chunk-IAMDMFZ7.js";import{i as ue,k as fe,t as J}from"./chunk-PT7S6WNL.js";import{p as C,r as f}from"./chunk-465DRXTW.js";import{D as ne,H as se,I as ae,J as ie,v as oe}from"./chunk-AC62Z3FX.js";import{a as y,b as re,g as p}from"./chunk-ESDYQQXO.js";function Qe(o,e,r){if(o.count!==e.count)return void Z.error("source and destination buffers need to have the same number of elements");let t=o.count,s=r[0],n=r[1],a=r[2],u=r[3],i=r[4],l=r[5],m=r[6],h=r[7],d=r[8],w=r[9],T=r[10],g=r[11],x=r[12],b=r[13],A=r[14],E=r[15],_=o.typedBuffer,M=o.typedBufferStride,R=e.typedBuffer,P=e.typedBufferStride;for(let N=0;N<t;N++){let B=N*M,v=N*P,O=R[v],G=R[v+1],j=R[v+2],k=R[v+3];_[B]=s*O+i*G+d*j+x*k,_[B+1]=n*O+l*G+w*j+b*k,_[B+2]=a*O+m*G+T*j+A*k,_[B+3]=u*O+h*G+g*j+E*k}}function Ze(o,e,r){Ge(o.typedBuffer,e.typedBuffer,r,o.typedBufferStride,e.typedBufferStride)}function Ge(o,e,r,t=4,s=t){if(o.length/t!=e.length/s)return void Z.error("source and destination buffers need to have the same number of elements");let n=o.length/t,a=r[0],u=r[1],i=r[2],l=r[3],m=r[4],h=r[5],d=r[6],w=r[7],T=r[8],g=0,x=0;for(let b=0;b<n;b++){let A=e[g],E=e[g+1],_=e[g+2],M=e[g+3];o[x]=a*A+l*E+d*_,o[x+1]=u*A+m*E+w*_,o[x+2]=i*A+h*E+T*_,o[x+3]=M,g+=s,x+=t}}function et(o,e){let r=Math.min(o.count,e.count),t=o.typedBuffer,s=o.typedBufferStride,n=e.typedBuffer,a=e.typedBufferStride;for(let u=0;u<r;u++){let i=u*s,l=u*a,m=n[l],h=n[l+1],d=n[l+2],w=m*m+h*h+d*d;if(w>0){let T=1/Math.sqrt(w);t[i]=T*m,t[i+1]=T*h,t[i+2]=T*d}}}function tt(o,e,r){je(o.typedBuffer,e,r,o.typedBufferStride)}function je(o,e,r,t=4){let s=Math.min(o.length/t,e.count),n=e.typedBuffer,a=e.typedBufferStride,u=0,i=0;for(let l=0;l<s;l++)o[i]=r*n[u],o[i+1]=r*n[u+1],o[i+2]=r*n[u+2],o[i+3]=r*n[u+3],u+=a,i+=t}var Bt=Object.freeze(Object.defineProperty({__proto__:null,normalize:et,scale:je,scaleView:tt,transformMat3:Ge,transformMat3View:Ze,transformMat4:Qe},Symbol.toStringTag,{value:"Module"}));function rt(o,e){ke(o.typedBuffer,e.typedBuffer,o.typedBufferStride,e.typedBufferStride)}function ke(o,e,r=2,t=r){let s=e.length/2,n=0,a=0;if(ne(e)||ae(e)){for(let i=0;i<s;++i)o[n]=e[a],o[n+1]=e[a+1],n+=r,a+=t;return}let u=ie(e);if(se(e))for(let i=0;i<s;++i)o[n]=Math.max(e[a]/u,-1),o[n+1]=Math.max(e[a+1]/u,-1),n+=r,a+=t;else for(let i=0;i<s;++i)o[n]=e[a]/u,o[n+1]=e[a+1]/u,n+=r,a+=t}function ot(o,e,r,t){let s=o.typedBuffer,n=o.typedBufferStride,a=t?.count??o.count,u=(t?.dstIndex??0)*n;for(let i=0;i<a;++i)s[u]=e,s[u+1]=r,u+=n}var It=Object.freeze(Object.defineProperty({__proto__:null,fill:ot,normalizeIntegerBuffer:ke,normalizeIntegerBufferView:rt},Symbol.toStringTag,{value:"Module"}));function nt(o,e){He(o.typedBuffer,e.typedBuffer,o.typedBufferStride,e.typedBufferStride)}function He(o,e,r=3,t=r){let s=e.length/t,n=0,a=0;for(let u=0;u<s;++u)o[n]=e[a],o[n+1]=e[a+1],o[n+2]=e[a+2],n+=r,a+=t}function st(o,e,r,t,s){let n=o.typedBuffer,a=o.typedBufferStride,u=s?.count??o.count,i=(s?.dstIndex??0)*a;for(let l=0;l<u;++l)n[i]=e,n[i+1]=r,n[i+2]=t,i+=a}var Ft=Object.freeze(Object.defineProperty({__proto__:null,copy:He,copyView:nt,fill:st},Symbol.toStringTag,{value:"Module"}));function at(o,e){ze(o.typedBuffer,e,o.typedBufferStride)}function ze(o,e,r=4){let t=e.typedBuffer,s=e.typedBufferStride,n=e.count,a=0,u=0;for(let i=0;i<n;++i)o[a]=t[u],o[a+1]=t[u+1],o[a+2]=t[u+2],o[a+3]=t[u+3],a+=r,u+=s}function it(o,e,r,t,s,n){let a=o.typedBuffer,u=o.typedBufferStride,i=n?.count??o.count,l=(n?.dstIndex??0)*u;for(let m=0;m<i;++m)a[l]=e,a[l+1]=r,a[l+2]=t,a[l+3]=s,l+=u}var Vt=Object.freeze(Object.defineProperty({__proto__:null,copy:ze,copyView:at,fill:it},Symbol.toStringTag,{value:"Module"}));var Ye=class{constructor(e){this._streamDataRequester=e}loadJSON(e,r){return p(this,null,function*(){return this._load("json",e,r)})}loadBinary(e,r){return p(this,null,function*(){return H(e)?(ue(r),z(e)):this._load("binary",e,r)})}loadImage(e,r){return p(this,null,function*(){return this._load("image",e,r)})}_load(e,r,t){return p(this,null,function*(){if(this._streamDataRequester==null)return(yield me(r,{responseType:ut[e]})).data;let s=yield pe(this._streamDataRequester.request(r,e,t));if(s.ok===!0)return s.value;throw fe(s.error),new f("",`Request for resource failed: ${s.error}`)})}},ut={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function Ke(o={}){return y({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},o)}function qe(o,e={}){return{data:o,parameters:y({wrap:y({s:L.REPEAT,t:L.REPEAT},e.wrap),noUnpackFlip:!0,mipmap:!1},e)}}function V(o,e){let r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}var Jt=Object.freeze(Object.defineProperty({__proto__:null,makeDense:V},Symbol.toStringTag,{value:"Module"}));var D=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){let e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){let r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var F,$e;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(F||(F={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}($e||($e={}));var Je={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},ft={pbrMetallicRoughness:Je,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},lt={ESRI_externalColorMixMode:"tint"},te=(o={})=>{let e=y(y({},Je),o.pbrMetallicRoughness),r=ct(y(y({},lt),o.extras));return re(y(y({},ft),o),{pbrMetallicRoughness:e,extras:r})};function ct(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:o.ESRI_externalColorMixMode,o.ESRI_externalColorMixMode="tint"}return o}var dt={magFilter:I.LINEAR,minFilter:I.LINEAR_MIPMAP_LINEAR,wrapS:L.REPEAT,wrapT:L.REPEAT},Xe=o=>y(y({},dt),o);function We(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,s,n)=>(e=s||"",r=n||"","")),{dirPart:e,filePart:r}}var K={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20},$=class o{constructor(e,r,t,s){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=s,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=We(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new f("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new f("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new f("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static load(e,r,t){return p(this,null,function*(){if(H(r)){let a=de(r);if(a&&a.mediaType!=="model/gltf-binary")try{let i=JSON.parse(a.isBase64?atob(a.data):a.data);return new o(e,r,i)}catch{}let u=z(r);if(o._isGLBData(u))return this._fromGLBData(e,r,u)}if(wt.test(r)||t?.expectedType==="gltf"){let a=yield e.loadJSON(r,t);return new o(e,r,a)}let s=yield e.loadBinary(r,t);if(o._isGLBData(s))return this._fromGLBData(e,r,s);if(gt.test(r)||t?.expectedType==="glb")throw new f("gltf-loader-invalid-glb","This is not a valid glb file.");let n=yield e.loadJSON(r,t);return new o(e,r,n)})}static _isGLBData(e){if(e==null)return!1;let r=new D(e);return r.remainingBytes()>=4&&r.readUint32()===K.MAGIC}static _fromGLBData(e,r,t){return p(this,null,function*(){let s=yield o._parseGLBData(t);return new o(e,r,s.json,s.binaryData)})}static _parseGLBData(e){return p(this,null,function*(){let r=new D(e);if(r.remainingBytes()<12)throw new f("gltf-loader-error","glb binary data is insufficiently large.");let t=r.readUint32(),s=r.readUint32(),n=r.readUint32();if(t!==K.MAGIC)throw new f("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<n)throw new f("gltf-loader-error","glb binary data is smaller than header specifies.");if(s!==2)throw new f("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,u,i=0;for(;r.remainingBytes()>=8;){let l=r.readUint32(),m=r.readUint32();if(i===0){if(m!==K.CHUNK_TYPE_JSON)throw new f("gltf-loader-error","First glb chunk must be JSON.");if(l<0)throw new f("gltf-loader-error","No JSON data found.");a=yield De(r.readUint8Array(l))}else if(i===1){if(m!==K.CHUNK_TYPE_BIN)throw new f("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");u=r.readUint8Array(l)}else C.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");i+=1}if(!a)throw new f("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:u}})}getBuffer(e,r){return p(this,null,function*(){let t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new f("gltf-loader-error","glb buffer not present");return this._glbBuffer}let s=yield this._getBufferLoader(e,r);if(s.byteLength!==t.byteLength)throw new f("gltf-loader-error","Buffer byte lengths should match.");return s})}_getBufferLoader(e,r){return p(this,null,function*(){let t=this._bufferLoaders.get(e);if(t)return t;let s=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(s),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,n),n})}getAccessor(e,r){return p(this,null,function*(){if(!this.json.accessors)throw new f("gltf-loader-unsupported-feature","Accessors missing.");let t=this.json.accessors[e];if(t?.bufferView==null)throw new f("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[F.MAT2,F.MAT3,F.MAT4])throw new f("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);let s=this.json.bufferViews[t.bufferView],n=yield this.getBuffer(s.buffer,r),a=ht[t.type],u=Tt[t.componentType],i=a*u,l=s.byteStride||i;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(s.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:l===i,componentCount:a,componentByteSize:u,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}})}getIndexData(e,r){return p(this,null,function*(){if(e.indices==null)return;let t=yield this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case c.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case c.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case c.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case c.UNSIGNED_BYTE:return V(this._wrapAccessor(xe,t));case c.UNSIGNED_SHORT:return V(this._wrapAccessor(Ae,t));case c.UNSIGNED_INT:return V(this._wrapAccessor(Oe,t))}})}getPositionData(e,r){return p(this,null,function*(){if(e.attributes.POSITION==null)throw new f("gltf-loader-unsupported-feature","No POSITION vertex data found.");let t=yield this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(Y,t)})}getNormalData(e,r){return p(this,null,function*(){if(e.attributes.NORMAL==null)throw new f("gltf-loader-error","No NORMAL vertex data found.");let t=yield this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(Y,t)})}getTangentData(e,r){return p(this,null,function*(){if(e.attributes.TANGENT==null)throw new f("gltf-loader-error","No TANGENT vertex data found.");let t=yield this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==4)throw new f("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return new W(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)})}getTextureCoordinates(e,r){return p(this,null,function*(){if(e.attributes.TEXCOORD_0==null)throw new f("gltf-loader-error","No TEXCOORD_0 vertex data found.");let t=yield this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new f("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===c.FLOAT)return this._wrapAccessor(X,t);if(!t.normalized)throw new f("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return yt(t)})}getVertexColors(e,r){return p(this,null,function*(){if(e.attributes.COLOR_0==null)throw new f("gltf-loader-error","No COLOR_0 vertex data found.");let t=yield this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===c.FLOAT)return this._wrapAccessor(W,t);if(t.componentType===c.UNSIGNED_BYTE)return this._wrapAccessor(Se,t);if(t.componentType===c.UNSIGNED_SHORT)return this._wrapAccessor(Ne,t)}else if(t.componentCount===3){if(t.componentType===c.FLOAT)return this._wrapAccessor(Y,t);if(t.componentType===c.UNSIGNED_BYTE)return this._wrapAccessor(_e,t);if(t.componentType===c.UNSIGNED_SHORT)return this._wrapAccessor(Re,t)}throw new f("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+c[t.componentType])})}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}getMaterial(e,r,t){return p(this,null,function*(){let s=e.material?this._materialCache.get(e.material):void 0;if(!s){let n=e.material!=null?te(this.json.materials[e.material]):te(),a=n.pbrMetallicRoughness,u=this.hasVertexColors(e),i=this.getTexture(a.baseColorTexture,r),l=this.getTexture(n.normalTexture,r),m=t?this.getTexture(n.occlusionTexture,r):void 0,h=t?this.getTexture(n.emissiveTexture,r):void 0,d=t?this.getTexture(a.metallicRoughnessTexture,r):void 0,w=e.material!=null?e.material:-1;s={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:a.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:yield i,normalTexture:yield l,name:n.name,id:w,occlusionTexture:yield m,emissiveTexture:yield h,emissiveFactor:n.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:yield d,hasVertexColors:u,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:a?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return s})}getTexture(e,r){return p(this,null,function*(){if(!e)return;if((e.texCoord||0)!==0)throw new f("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");let t=e.index,s=this.json.textures[t],n=Xe(s.sampler!=null?this.json.samplers[s.sampler]:{}),a=this._getTextureSourceId(s),u=this.json.images[a],i=yield this._loadTextureImageData(t,s,r);return le(this._textureCache,t,()=>{let l=h=>h===33071||h===33648||h===10497,m=h=>{throw new f("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${h}`)};return{data:i,wrapS:l(n.wrapS)?n.wrapS:m(n.wrapS),wrapT:l(n.wrapT)?n.wrapT:m(n.wrapT),minFilter:n.minFilter,name:u.name,id:t}})})}getNodeTransform(e){if(e===void 0)return pt;let r=this._nodeTransformCache.get(e);if(!r){let t=this.getNodeTransform(this._getNodeParent(e)),s=this.json.nodes[e];s.matrix?r=he(Q(),t,s.matrix):s.translation||s.rotation||s.scale?(r=U(t),s.translation&&Te(r,r,s.translation),s.rotation&&(q[3]=Fe(q,s.rotation),we(r,r,q[3],q)),s.scale&&ye(r,r,s.scale)):r=U(t),this._nodeTransformCache.set(e,r)}return r}_wrapAccessor(e,r){return new e(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*(r.entryCount-1)+r.componentByteSize*r.componentCount)}_resolveUri(e){return ce(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){let e=ee.parse(this.json.asset.version,"glTF");mt.validate(e)}_checkRequiredExtensionsSupported(){let e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new f("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}_loadTextureImageData(e,r,t){return p(this,null,function*(){let s=this._textureLoaders.get(e);if(s)return s;let n=this._createTextureLoader(r,t);return this._textureLoaders.set(e,n),n})}_getTextureSourceId(e){if(e.extensions!==void 0&&e.extensions.KHR_texture_basisu!==null)return e.extensions.KHR_texture_basisu.source;if(e.source!==null)return e.source;throw new f("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}_createTextureLoader(e,r){return p(this,null,function*(){let t=this._getTextureSourceId(e),s=this.json.images[t];if(s.uri){if(s.uri.endsWith(".ktx2")){let i=yield this._context.loadBinary(this._resolveUri(s.uri),r);return new Ue(new Uint8Array(i))}return this._context.loadImage(this._resolveUri(s.uri),r)}if(s.bufferView==null)throw new f("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(s.mimeType==null)throw new f("gltf-loader-unsupported-feature","Image mimeType must be defined.");let n=this.json.bufferViews[s.bufferView],a=yield this.getBuffer(n.buffer,r);if(n.byteStride!=null)throw new f("gltf-loader-unsupported-feature","byteStride not supported for image buffer");let u=a.byteOffset+(n.byteOffset||0);return Pe(new Uint8Array(a.buffer,u,n.byteLength),s.mimeType)})}getLoadedBuffersSize(){return p(this,null,function*(){if(this._glbBuffer)return this._glbBuffer.byteLength;let e=yield J(Array.from(this._bufferLoaders.values())),r=yield J(Array.from(this._textureLoaders.values()));return e.reduce((t,s)=>t+(s?.byteLength??0),0)+r.reduce((t,s)=>t+(s?Ve(s)?s.data.byteLength:s.width*s.height*4:0),0)})}},pt=ge(Q(),Math.PI/2),mt=new ee(2,0,"glTF"),q=Le(),ht={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tt={[c.BYTE]:1,[c.UNSIGNED_BYTE]:1,[c.SHORT]:2,[c.UNSIGNED_SHORT]:2,[c.FLOAT]:4,[c.INT]:4,[c.UNSIGNED_INT]:4};function yt(o){switch(o.componentType){case c.BYTE:return new Be(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_BYTE:return new be(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.SHORT:return new ve(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_SHORT:return new Ee(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_INT:return new Me(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.FLOAT:return new X(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}var wt=/\.gltf$/i,gt=/\.glb$/i;var xt=0;function vr(s,n){return p(this,arguments,function*(o,e,r={},t=!0){let a=yield $.load(o,e,r),u="gltf_"+xt++,i={lods:[],materials:new Map,textures:new Map,meta:bt(a)},l=!(!a.json.asset.extras||a.json.asset.extras.ESRI_type!=="symbolResource"),m=new Map;yield _t(a,(d,w,T,g)=>p(this,null,function*(){let x=m.get(T)??0;m.set(T,x+1);let b=d.mode!==void 0?d.mode:S.TRIANGLES,A=b===S.TRIANGLES||b===S.TRIANGLE_STRIP||b===S.TRIANGLE_FAN?b:null;if(A==null)return void C.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+S[b]+"). Skipping primitive.");if(!a.hasPositions(d))return void C.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");let E=a.getPositionData(d,r),_=a.getMaterial(d,r,t),M=a.hasNormals(d)?a.getNormalData(d,r):null,R=a.hasTangents(d)?a.getTangentData(d,r):null,P=a.hasTextureCoordinates(d)?a.getTextureCoordinates(d,r):null,N=a.hasVertexColors(d)?a.getVertexColors(d,r):null,B=a.getIndexData(d,r),v={name:g,transform:U(w),attributes:{position:yield E,normal:M?yield M:null,texCoord0:P?yield P:null,color:N?yield N:null,tangent:R?yield R:null},indices:yield B,primitiveType:A,material:At(i,yield _,u)},O=null;i.meta?.ESRI_lod!=null&&i.meta.ESRI_lod.metric==="screenSpaceRadius"&&(O=i.meta.ESRI_lod.thresholds[T]),i.lods[T]=i.lods[T]||{parts:[],name:g,lodThreshold:O},i.lods[T].parts[x]=v}));for(let d of i.lods)d.parts=d.parts.filter(w=>!!w);let h=yield a.getLoadedBuffersSize();return{model:i,meta:{isEsriSymbolResource:l,uri:a.uri},customMeta:{},size:h}})}function bt(o){let e=o.json,r=null;return e.nodes.forEach(t=>{let s=t.extras;s!=null&&(s.ESRI_proxyEllipsoid||s.ESRI_lod)&&(r=s)}),r}function _t(o,e){return p(this,null,function*(){let r=o.json,t=r.scenes[r.scene||0].nodes,s=t.length>1,n=[];for(let u of t){let i=r.nodes[u];n.push(a(u,0)),St(i)&&!s&&i.extensions.MSFT_lod.ids.forEach((l,m)=>a(l,m+1))}function a(u,i){return p(this,null,function*(){let l=r.nodes[u],m=o.getNodeTransform(u);if(l.weights!=null&&C.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),l.mesh!=null){let h=r.meshes[l.mesh];for(let d of h.primitives)n.push(e(d,m,i,h.name))}for(let h of l.children||[])n.push(a(h,i))})}yield Promise.all(n)})}function St(o){return o.extensions?.MSFT_lod&&Array.isArray(o.extensions.MSFT_lod.ids)}function At(o,e,r){let t=n=>{let a=`${r}_tex_${n&&n.id}${n?.name?"_"+n.name:""}`;if(n&&!o.textures.has(a)){let u=qe(n.data,{wrap:{s:n.wrapS,t:n.wrapT},mipmap:Et.has(n.minFilter),noUnpackFlip:!0});o.textures.set(a,u)}return a},s=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(s)){let n=Ke({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});o.materials.set(s,n)}return s}var Et=new Set([I.LINEAR_MIPMAP_LINEAR,I.LINEAR_MIPMAP_NEAREST]);function Vr(o,e){switch(e){case S.TRIANGLES:return Rt(o);case S.TRIANGLE_STRIP:return Nt(o);case S.TRIANGLE_FAN:return Ot(o)}}function Rt(o){return typeof o=="number"?Ie(o):oe(o)?new Uint16Array(o):o}function Nt(o){let e=typeof o=="number"?o:o.length;if(e<3)return[];let r=e-2,t=Ce(3*r);if(typeof o=="number"){let s=0;for(let n=0;n<r;n+=1)n%2==0?(t[s++]=n,t[s++]=n+1,t[s++]=n+2):(t[s++]=n+1,t[s++]=n,t[s++]=n+2)}else{let s=0;for(let n=0;n<r;n+=1)n%2==0?(t[s++]=o[n],t[s++]=o[n+1],t[s++]=o[n+2]):(t[s++]=o[n+1],t[s++]=o[n],t[s++]=o[n+2])}return t}function Ot(o){let e=typeof o=="number"?o:o.length;if(e<3)return new Uint16Array(0);let r=e-2,t=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if(typeof o=="number"){let u=0;for(let i=0;i<r;++i)t[u++]=0,t[u++]=i+1,t[u++]=i+2;return t}let s=o[0],n=o[1],a=0;for(let u=0;u<r;++u){let i=o[u+2];t[a++]=s,t[a++]=n,t[a++]=i,n=i}return t}export{Ze as a,Ge as b,et as c,tt as d,je as e,rt as f,ke as g,ot as h,nt as i,He as j,st as k,at as l,ze as m,it as n,Ye as o,vr as p,Vr as q};