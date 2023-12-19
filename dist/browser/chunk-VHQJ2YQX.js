import{a as U}from"./chunk-IL3PPCCF.js";import{b as x,p as T,r as f}from"./chunk-465DRXTW.js";import{a as A,b as I}from"./chunk-ESDYQQXO.js";var d=!0,h={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function B(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+h.identifierOffset,h.identifierLength)),version:e.getUint16(n+h.versionOffset,d),checksum:e.getUint32(n+h.checksumOffset,d)}}var y={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function X(t,e){return{sizeLo:t.getUint32(e+y.sizeLo,d),sizeHi:t.getUint32(e+y.sizeHi,d),minX:t.getFloat64(e+y.minX,d),minY:t.getFloat64(e+y.minY,d),minZ:t.getFloat64(e+y.minZ,d),maxX:t.getFloat64(e+y.maxX,d),maxY:t.getFloat64(e+y.maxY,d),maxZ:t.getFloat64(e+y.maxZ,d),errorX:t.getFloat64(e+y.errorX,d),errorY:t.getFloat64(e+y.errorY,d),errorZ:t.getFloat64(e+y.errorZ,d),count:t.getUint32(e+y.count,d),reserved:t.getUint32(e+y.reserved,d)}}function J(t){let e=new DataView(t,0),n=0,{identifier:c,version:o}=B(t,e,n);if(n+=h.byteCount,c!=="LEPCC     ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");let r=X(e,n);if(n+=y.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");let a=new Float64Array(3*r.count),u=[],i=[],s=[],l=[];if(n=L(t,n,u),n=L(t,n,i),n=L(t,n,s),n=L(t,n,l),n!==t.byteLength)throw new f("lepcc-decode-error","Bad length");let g=0,w=0;for(let b=0;b<u.length;b++){w+=u[b];let v=0;for(let C=0;C<i[b];C++){v+=s[g];let Y=l[g];a[3*g]=Math.min(r.maxX,r.minX+2*r.errorX*v),a[3*g+1]=Math.min(r.maxY,r.minY+2*r.errorY*w),a[3*g+2]=Math.min(r.maxZ,r.minZ+2*r.errorZ*Y),g++}}return{errorX:r.errorX,errorY:r.errorY,errorZ:r.errorZ,result:a}}function L(t,e,n){let c=[];e=z(t,e,c);let o=[];for(let r=0;r<c.length;r++){o.length=0,e=z(t,e,o);for(let a=0;a<o.length;a++)n.push(o[a]+c[r])}return e}function z(t,e,n){let c=new DataView(t,e),o=c.getUint8(0),r=31&o,a=!!(32&o),u=(192&o)>>6,i=0;if(u===0)i=c.getUint32(1,d),e+=5;else if(u===1)i=c.getUint16(1,d),e+=3;else{if(u!==2)throw new f("lepcc-decode-error","Bad count type");i=c.getUint8(1),e+=2}if(a)throw new f("lepcc-decode-error","LUT not implemented");let s=Math.ceil(i*r/8),l=new Uint8Array(t,e,s),g=0,w=0,b=0,v=-1>>>32-r;for(let C=0;C<i;C++){for(;w<r;)g|=l[b]<<w,w+=8,b+=1;n[C]=g&v,g>>>=r,w-=r,w+r>32&&(g|=l[b-1]>>8-w)}return e+b}var p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function Z(t,e){return{sizeLo:t.getUint32(e+p.sizeLo,d),sizeHi:t.getUint32(e+p.sizeHi,d),count:t.getUint32(e+p.count,d),colorMapCount:t.getUint16(e+p.colorMapCount,d),lookupMethod:t.getUint8(e+p.lookupMethod),compressionMethod:t.getUint8(e+p.compressionMethod)}}function D(t){let e=new DataView(t,0),n=0,{identifier:c,version:o}=B(t,e,n);if(n+=h.byteCount,c!=="ClusterRGB")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");let r=Z(e,n);if(n+=p.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");if((r.lookupMethod===2||r.lookupMethod===1)&&r.compressionMethod===0){if(3*r.colorMapCount+r.count+n!==t.byteLength||r.colorMapCount>256)throw new f("lepcc-decode-error","Bad count");let a=new Uint8Array(t,n,3*r.colorMapCount),u=new Uint8Array(t,n+3*r.colorMapCount,r.count),i=new Uint8Array(3*r.count);for(let s=0;s<r.count;s++){let l=u[s];i[3*s]=a[3*l],i[3*s+1]=a[3*l+1],i[3*s+2]=a[3*l+2]}return i}if(r.lookupMethod===0&&r.compressionMethod===0){if(3*r.count+n!==t.byteLength||r.colorMapCount!==0)throw new f("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(r.lookupMethod<=2&&r.compressionMethod===1){if(n+3!==t.byteLength||r.colorMapCount!==1)throw new f("lepcc-decode-error","Bad count");let a=e.getUint8(n),u=e.getUint8(n+1),i=e.getUint8(n+2),s=new Uint8Array(3*r.count);for(let l=0;l<r.count;l++)s[3*l]=a,s[3*l+1]=u,s[3*l+2]=i;return s}throw new f("lepcc-decode-error","Bad method "+r.lookupMethod+","+r.compressionMethod)}var m={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function H(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,d),sizeHi:t.getUint32(e+m.sizeHi,d),count:t.getUint32(e+m.count,d),scaleFactor:t.getUint16(e+m.scaleFactor,d),bitsPerPoint:t.getUint8(e+m.bitsPerPoint),reserved:t.getUint8(e+m.reserved)}}function k(t){let e=new DataView(t,0),n=0,{identifier:c,version:o}=B(t,e,n);if(n+=h.byteCount,c!=="Intensity ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");let r=H(e,n);if(n+=m.byteCount,r.sizeHi*2**32+r.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");let a=new Uint16Array(r.count);if(r.bitsPerPoint===8){if(r.count+n!==t.byteLength)throw new f("lepcc-decode-error","Bad size");let u=new Uint8Array(t,n,r.count);for(let i=0;i<r.count;i++)a[i]=u[i]*r.scaleFactor}else if(r.bitsPerPoint===16){if(2*r.count+n!==t.byteLength)throw new f("lepcc-decode-error","Bad size");let u=new Uint16Array(t,n,r.count);for(let i=0;i<r.count;i++)a[i]=u[i]*r.scaleFactor}else{let u=[];if(z(t,n,u)!==t.byteLength)throw new f("lepcc-decode-error","Bad size");for(let i=0;i<r.count;i++)a[i]=u[i]*r.scaleFactor}return a}var F=T.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function G(t,e,n){let c="",o=0;for(;o<n;){let r=t[e+o];if(r<128)c+=String.fromCharCode(r),o++;else if(r>=192&&r<224){if(o+1>=n)throw new f("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");let a=(31&r)<<6|63&t[e+o+1];c+=String.fromCharCode(a),o+=2}else if(r>=224&&r<240){if(o+2>=n)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");let a=(15&r)<<12|(63&t[e+o+1])<<6|63&t[e+o+2];c+=String.fromCharCode(a),o+=3}else{if(!(r>=240&&r<248))throw new f("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");let a=(7&r)<<18|(63&t[e+o+1])<<12|(63&t[e+o+2])<<6|63&t[e+o+3];if(a>=65536){let u=55296+(a-65536>>10),i=56320+(1023&a);c+=String.fromCharCode(u,i)}else c+=String.fromCharCode(a);o+=4}}}return c}function P(t,e){let n={byteOffset:0,byteCount:0,fields:Object.create(null)},c=0;for(let o=0;o<e.length;o++){let r=e[o],a=r.valueType||r.type,u=W[a];n.fields[r.property]=u(t,c),c+=M[a].BYTES_PER_ELEMENT}return n.byteCount=c,n}function N(t,e,n){return S(t,e,n).map(c=>{let o=c?Date.parse(c):null;return o&&!Number.isNaN(o)?o:null})}function S(t,e,n){let c=[],o,r,a=0;for(r=0;r<t;r+=1){if(o=e[r],o>0){if(c.push(G(n,a,o-1)),n[a+o-1]!==0)throw new f("string-array-error","Invalid string array: missing null termination.")}else c.push(null);a+=o}return c}function E(t,e){return new M[e.valueType](t,e.byteOffset,e.count*e.valuesPerElement)}function j(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function _(t,e,n){let c=e.header!=null?P(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:c,byteOffset:c.byteCount,byteCount:0,entries:Object.create(null)},r=c.byteCount;for(let a=0;a<e.ordering.length;a++){let u=e.ordering[a],i=x(e[u]);if(i.count=c.fields.count??0,i.valueType==="String"){if(i.byteOffset=r,i.byteCount=c.fields[u+"ByteCount"],i.encoding!=="UTF-8")throw new f("unsupported-encoding","Unsupported String encoding.",{encoding:i.encoding});if(i.timeEncoding&&i.timeEncoding!=="ECMA_ISO8601")throw new f("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:i.timeEncoding})}else{if(!R(i.valueType))throw new f("unsupported-value-type","Unsupported binary valueType",{valueType:i.valueType});{let s=O(i.valueType);r+=r%s!=0?s-r%s:0,i.byteOffset=r,i.byteCount=s*i.valuesPerElement*i.count}}r+=i.byteCount??0,o.entries[u]=i}return o.byteCount=r-o.byteOffset,o}function V(t,e,n){if(e!==t&&F.error(`Invalid ${n} buffer size
 expected: ${t}, actual: ${e})`),e<t)throw new f("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function oe(t,e){let n=P(t,e&&e.header),c=n.byteCount,o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},r=n.fields,a=r.vertexCount!=null?r.vertexCount:r.count;for(let s of e.ordering){if(!e.vertexAttributes[s])continue;let l=I(A({},e.vertexAttributes[s]),{byteOffset:c,count:a}),g=$[s]||"_"+s;o.vertexAttributes[g]=l,c+=O(l.valueType)*l.valuesPerElement*a}let u=r.faceCount;if(e.faces&&u){o.faces={};for(let s of e.ordering){if(!e.faces[s])continue;let l=I(A({},e.faces[s]),{byteOffset:c,count:u});o.faces[s]=l,c+=O(l.valueType)*l.valuesPerElement*u}}let i=r.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&i){o.featureAttributes={};for(let s of e.featureAttributeOrder){if(!e.featureAttributes[s])continue;let l=I(A({},e.featureAttributes[s]),{byteOffset:c,count:i});o.featureAttributes[s]=l,c+=(l.valueType==="UInt64"?8:O(l.valueType))*l.valuesPerElement*i}}return V(c,t.byteLength,"geometry"),o.byteCount=c-o.byteOffset,o}var $={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function ie(t,e,n){if(t.encoding==="lepcc-rgb")return D(e);if(t.encoding==="lepcc-intensity")return k(e);if(t.encoding!=null&&t.encoding!=="")throw new f("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(F.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),t.ordering[0]==="ObjectIds"&&t.hasOwnProperty("objectIds")&&(F.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");let c=_(e,t,n);V(c.byteOffset+c.byteCount,e.byteLength,"attribute");let o=c.entries.attributeValues||c.entries.objectIds;if(o){if(o.valueType==="String"){let r=c.entries.attributeByteCounts,a=E(e,r),u=j(e,o);return o.timeEncoding?N(r.count,a,u):S(r.count,a,u)}return E(e,o)}throw new f("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var M={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},W={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function R(t){return M.hasOwnProperty(t)}function O(t){return R(t)?M[t].BYTES_PER_ELEMENT:0}export{J as a,E as b,oe as c,ie as d};
