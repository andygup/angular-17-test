import{a as k}from"./chunk-55ESOXMJ.js";import{a as j}from"./chunk-BCREO4Q5.js";import{c as st,g as ot,j as F}from"./chunk-6QIKBCPR.js";import{a as b,d as it,i as P}from"./chunk-AHKJJNRE.js";import{a as E,b as q}from"./chunk-A52LT7YB.js";import{H as M}from"./chunk-WMYPRHRR.js";import{R as T}from"./chunk-IAMDMFZ7.js";import{a as d}from"./chunk-53MWZ23O.js";import{b as A}from"./chunk-465DRXTW.js";import{e as Y}from"./chunk-AC62Z3FX.js";function z(t,e,n=!1){let{hasM:r,hasZ:i}=t;Array.isArray(e)?e.length!==4||r||i?e.length===3&&n&&!r?(i=!0,r=!1):e.length===3&&r&&i&&(r=!1,i=!1):(r=!0,i=!0):(i=!i&&e.hasZ&&(!r||e.hasM),r=!r&&e.hasM&&(!i||e.hasZ)),t.hasZ=i,t.hasM=r}var D;function at(t){return(e,n)=>e==null?n:n==null?e:t(e,n)}function Nt(t){return t&&(t.declaredClass==="esri.geometry.SpatialReference"||t.wkid!=null)}var Z=D=class extends b{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,e){if(!t&&!e)return{};let n={};Array.isArray(t)?(n.points=t,n.spatialReference=e):Nt(t)?n.spatialReference=t:(t.points&&(n.points=t.points),t.spatialReference&&(n.spatialReference=t.spatialReference),t.hasZ&&(n.hasZ=t.hasZ),t.hasM&&(n.hasM=t.hasM));let r=n.points?.[0];return r&&(n.hasZ===void 0&&n.hasM===void 0?(n.hasZ=r.length>2,n.hasM=!1):n.hasZ===void 0?n.hasZ=r.length>3:n.hasM===void 0&&(n.hasM=r.length>3)),n}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){let t=this.points;if(!t.length)return null;let e=new F,n=this.hasZ,r=this.hasM,i=n?3:2,s=t[0],o=at(Math.min),a=at(Math.max),c,u,h,l,[p,f]=s,[m,g]=s;for(let y=0,I=t.length;y<I;y++){let x=t[y],[v,_]=x;if(p=o(p,v),f=o(f,_),m=a(m,v),g=a(g,_),n&&x.length>2){let R=x[2];c=o(c,R),h=a(h,R)}if(r&&x.length>i){let R=x[i];u=o(u,R),l=a(l,R)}}return e.xmin=p,e.ymin=f,e.xmax=m,e.ymax=g,e.spatialReference=this.spatialReference,n?(e.zmin=c,e.zmax=h):(e.zmin=void 0,e.zmax=void 0),r?(e.mmin=u,e.mmax=l):(e.mmin=void 0,e.mmax=void 0),e}writePoints(t,e){e.points=A(this.points)}addPoint(t){return z(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){let t={points:A(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new D(t)}getPoint(t){if(!this._validateInputs(t))return null;let e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference},r=2;return this.hasZ&&(n.z=e[2],r=3),this.hasM&&(n.m=e[r]),new P(n)}removePoint(t){if(!this._validateInputs(t))return null;let e=new P(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),e}setPoint(t,e){return this._validateInputs(t)?(z(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return t!=null&&t>=0&&t<this.points.length}};d([M({readOnly:!0})],Z.prototype,"cache",null),d([M()],Z.prototype,"extent",null),d([M({type:[[Number]],json:{write:{isRequired:!0}}})],Z.prototype,"points",void 0),d([E("points")],Z.prototype,"writePoints",null),Z=D=d([T("esri.geometry.Multipoint")],Z),Z.prototype.toJSON.isDefaultToJSON=!0;var ne=Z;function lt(t){return t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0}function ht(t){return t.points!==void 0}function ut(t){return t.x!==void 0&&t.y!==void 0}function ct(t){return t.paths!==void 0}function pt(t){return t.rings!==void 0}function ft(t){function e(n,r){return n==null?r:r==null?n:t(n,r)}return e}var C=ft(Math.min),w=ft(Math.max);function oe(t,e){return ct(e)?O(t,e.paths,!1,!1):pt(e)?O(t,e.rings,!1,!1):ht(e)?V(t,e.points,!1,!1,!1,!1):lt(e)?mt(t,e):(ut(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.x,t[3]=e.y),t)}function ae(t){let e,n,r,i;for(t.reset(),e=r=1/0,n=i=-1/0;t.nextPath();){let s=At(t);e=Math.min(s[0],e),r=Math.min(s[1],r),n=Math.max(s[2],n),i=Math.max(s[3],i)}return k([e,r,n,i])}function At(t){let e,n,r,i;for(e=r=1/0,n=i=-1/0;t.nextPoint();)e=Math.min(t.x,e),r=Math.min(t.y,r),n=Math.max(t.x,n),i=Math.max(t.y,i);return k([e,r,n,i])}function le(t,e){return ct(e)?O(t,e.paths,!0,!1):pt(e)?O(t,e.rings,!0,!1):ht(e)?V(t,e.points,!0,!1,!0,!1):lt(e)?mt(t,e,!0,!1,!0,!1):(ut(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.x,t[4]=e.y,t[5]=e.z),t)}function O(t,e,n,r){let i=n?3:2;if(!e.length||!e[0].length)return null;let s,o,a,c,[u,h]=e[0][0],[l,p]=e[0][0];for(let f=0;f<e.length;f++){let m=e[f];for(let g=0;g<m.length;g++){let y=m[g],[I,x]=y;if(u=C(u,I),h=C(h,x),l=w(l,I),p=w(p,x),n&&y.length>2){let v=y[2];s=C(s,v),o=w(o,v)}if(r&&y.length>i){let v=y[i];a=C(s,v),c=w(o,v)}}}return n?r?(t[0]=u,t[1]=h,t[2]=s,t[3]=a,t[4]=l,t[5]=p,t[6]=o,t[7]=c,t.length=8,t):(t[0]=u,t[1]=h,t[2]=s,t[3]=l,t[4]=p,t[5]=o,t.length=6,t):r?(t[0]=u,t[1]=h,t[2]=a,t[3]=l,t[4]=p,t[5]=c,t.length=6,t):(t[0]=u,t[1]=h,t[2]=l,t[3]=p,t.length=4,t)}function mt(t,e,n,r,i,s){let o=e.xmin,a=e.xmax,c=e.ymin,u=e.ymax,h=e.zmin,l=e.zmax,p=e.mmin,f=e.mmax;return i?(h=h||0,l=l||0,s?(p=p||0,f=f||0,t[0]=o,t[1]=c,t[2]=h,t[3]=p,t[4]=a,t[5]=u,t[6]=l,t[7]=f,t):(t[0]=o,t[1]=c,t[2]=h,t[3]=a,t[4]=u,t[5]=l,t)):s?(p=p||0,f=f||0,t[0]=o,t[1]=c,t[2]=p,t[3]=a,t[4]=u,t[5]=f,t):(t[0]=o,t[1]=c,t[2]=a,t[3]=u,t)}function V(t,e,n,r,i,s){let o=n?3:2,a=r&&s,c=n&&i;if(!e.length||!e[0].length)return null;let u,h,l,p,[f,m]=e[0],[g,y]=e[0];for(let I=0;I<e.length;I++){let x=e[I],[v,_]=x;if(f=C(f,v),m=C(m,_),g=w(g,v),y=w(y,_),c&&x.length>2){let R=x[2];u=C(u,R),h=w(h,R)}if(a&&x.length>o){let R=x[o];l=C(u,R),p=w(h,R)}}return i?(u=u||0,h=h||0,s?(l=l||0,p=p||0,t[0]=f,t[1]=m,t[2]=u,t[3]=l,t[4]=g,t[5]=y,t[6]=h,t[7]=p,t):(t[0]=f,t[1]=m,t[2]=u,t[3]=g,t[4]=y,t[5]=h,t)):s?(l=l||0,p=p||0,t[0]=f,t[1]=m,t[2]=l,t[3]=g,t[4]=y,t[5]=p,t):(t[0]=f,t[1]=m,t[2]=g,t[3]=y,t)}function ue(t){let e=[];for(t.reset();t.nextPath();){let n=[];for(;t.nextPoint();)n.push([t.x,t.y]);e.push(n)}return t.reset(),e}function gt(t){let e=[];for(;t.nextPoint();)e.push([t.x,t.y]);return t.seekPathStart(),e}function L(t,e){let n=e[0]-t[0],r=e[1]-t[1];if(t.length>2&&e.length>2){let i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}return Math.sqrt(n*n+r*r)}function zt(t,e,n){let r=t[0]+n*(e[0]-t[0]),i=t[1]+n*(e[1]-t[1]);return t.length>2&&e.length>2?[r,i,t[2]+n*(e[2]-t[2])]:[r,i]}function ye(t,e,n,r){return Zt(t,e,n[r],n[r+1])}function Zt(t,e,n,r){let[i,s]=e,[o,a]=n,[c,u]=r,h=c-o,l=u-a,p=h*h+l*l,f=(i-o)*h+(s-a)*l,m=Math.min(1,Math.max(0,f/p));return t[0]=o+h*m,t[1]=a+l*m,t}function X(t,e){return zt(t,e,.5)}function W(t,e=j.X,n=j.Y){let r=0,i=t.length,s=t[0];for(let o=0;o<i-1;o++){let a=t[o+1];r+=(a[e]-s[e])*(a[n]+s[n]),s=a}return r>=0}function Ct(t){let e=t.length;return e>2&&Y(t[0],t[e-1])}function xe(t){if("rings"in t&&(wt(t),t.rings.length>0&&!W(t.rings[0])))for(let e of t.rings)e.reverse()}function wt(t){if("rings"in t)for(let e of t.rings)Ct(e)||e.push(e[0].slice())}function ve(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function yt(t){return t?St(t.rings,t.hasZ??!1):null}function St(t,e){if(!t?.length)return null;let n=[],r=[],i=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let s=0,o=t.length;s<o;s++){let a=xt(t[s],e,i);a&&r.push(a)}if(r.sort((s,o)=>{let a=s[2]-o[2];return a===0&&e&&(a=s[4]-o[4]),a}),r.length&&(n[0]=r[0][0],n[1]=r[0][1],e&&(n[2]=r[0][3]),(n[0]<i[0]||n[0]>i[1]||n[1]<i[2]||n[1]>i[3]||e&&(n[2]<i[4]||n[2]>i[5]))&&(n.length=0)),!n.length){let s=t[0]&&t[0].length?_t(t[0],e):null;if(!s)return null;n[0]=s[0],n[1]=s[1],e&&s.length>2&&(n[2]=s[2])}return n}function xt(t,e,n){let r=0,i=0,s=0,o=0,a=0,c=t.length?t[0][0]:0,u=t.length?t[0][1]:0,h=t.length&&e?t[0][2]:0;for(let p=0;p<t.length;p++){let f=t[p],m=t[(p+1)%t.length],[g,y,I]=f,x=g-c,v=y-u,[_,R,Rt]=m,G=_-c,tt=R-u,J=x*tt-G*v;if(o+=J,r+=(x+G)*J,i+=(v+tt)*J,e&&f.length>2&&m.length>2){let et=I-h,nt=Rt-h,rt=x*nt-G*et;s+=(et+nt)*rt,a+=rt}g<n[0]&&(n[0]=g),g>n[1]&&(n[1]=g),y<n[2]&&(n[2]=y),y>n[3]&&(n[3]=y),e&&(I<n[4]&&(n[4]=I),I>n[5]&&(n[5]=I))}if(o>0&&(o*=-1),a>0&&(a*=-1),!o)return null;o*=.5,a*=.5;let l=[r/(6*o)+c,i/(6*o)+u,o];return e&&(n[4]===n[5]||a===0?(l[3]=(n[4]+n[5])/2,l[4]=0):(l[3]=s/(6*a)+h,l[4]=a)),l}function Me(t,e){let n=0,r=0,i=0;t.nextPoint();let s=t.pathSize?t.x:0,o=t.pathSize?t.y:0;for(let a=0;a<t.pathSize;a++){t.seekInPath(a);let c=[t.x,t.y];t.seekInPath((a+1)%t.pathSize);let u=[t.x,t.y],[h,l]=c,p=h-s,f=l-o,[m,g]=u,y=m-s,I=g-o,x=p*I-y*f;i+=x,n+=(p+y)*x,r+=(f+I)*x,h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),l<e[2]&&(e[2]=l),l>e[3]&&(e[3]=l)}return i>0&&(i*=-1),i?(i*=.5,[n/(6*i)+s,r/(6*i)+o,i]):null}function _t(t,e){let n=e?[0,0,0]:[0,0],r=e?[0,0,0]:[0,0],i=0,s=0,o=0,a=0;for(let c=0,u=t.length;c<u-1;c++){let h=t[c],l=t[c+1];if(h&&l){n[0]=h[0],n[1]=h[1],r[0]=l[0],r[1]=l[1],e&&h.length>2&&l.length>2&&(n[2]=h[2],r[2]=l[2]);let p=L(n,r);if(p){i+=p;let f=X(h,l);s+=p*f[0],o+=p*f[1],e&&f.length>2&&(a+=p*f[2])}}}return i>0?e?[s/i,o/i,a/i]:[s/i,o/i]:t.length?t[0]:null}function Ot(t){let{hasZ:e,totalSize:n}=t;if(n===0)return null;let r=[],i=[],s=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(t.reset();t.nextPath();){let o=xt(gt(t),t.hasZ,s);o&&i.push(o)}if(i.sort((o,a)=>{let c=o[2]-a[2];return c===0&&e&&(c=o[4]-a[4]),c}),i.length&&(r[0]=i[0][0],r[1]=i[0][1],e&&(r[2]=i[0][3]),(r[0]<s[0]||r[0]>s[1]||r[1]<s[2]||r[1]>s[3]||e&&(r[2]<s[4]||r[2]>s[5]))&&(r.length=0)),!r.length){t.reset(),t.nextPath();let o=t.pathSize?Tt(t):null;if(!o)return null;r[0]=o[0],r[1]=o[1],e&&o.length>2&&(r[2]=o[2])}return r}function Tt(t){let{hasZ:e}=t,n=e?[0,0,0]:[0,0],r=e?[0,0,0]:[0,0],i=0,s=0,o=0,a=0;if(t.nextPoint()){let c=t.x,u=t.y,h=t.z;for(;t.nextPoint();){let l=t.x,p=t.y,f=t.z;n[0]=c,n[1]=u,r[0]=l,r[1]=p,e&&(n[2]=h,r[2]=f);let m=L(n,r);if(m){i+=m;let g=X(n,r);s+=m*g[0],o+=m*g[1],e&&g.length>2&&(a+=m*g[2])}c=l,u=p,h=f}}return i>0?e?[s/i,o/i,a/i]:[s/i,o/i]:t.pathSize?(t.seekPathStart(),t.nextPoint(),[t.x,t.y]):null}var Et=1e-6;function Re(t){let e=0;for(t.reset();t.nextPath();)e+=t.getCurrentRingArea();if(e<Et){let i=Ot(t);return i?[i[0],i[1]]:null}let n=[0,0];if(t.reset(),!t.nextPath()||!t.nextPoint())return null;let r=[t.x,t.y];for(t.reset();t.nextPath();)Ft(n,r,t);return n[0]*=1/e,n[1]*=1/e,n[0]+=r[0],n[1]+=r[1],n}var bt=1/3;function Ft(t,e,n){if(!t||!n||n.pathSize<3)return null;n.nextPoint();let r=n.x,i=n.y;n.nextPoint();let s,o=n.x-r,a=n.y-i,c=0,u=0;for(;n.nextPoint();)c=n.x-r,u=n.y-i,s=.5*bt*(c*a-u*o),t[0]+=s*(o+c),t[1]+=s*(a+u),o=c,a=u;let h=n.getCurrentRingArea(),l=[r,i];return l[0]-=e[0],l[1]-=e[1],l[0]*=h,l[1]*=h,t[0]+=l[0],t[1]+=l[1],t}function Yt(t){return t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0}function qt(t){return t.points!==void 0}function Vt(t){return t.x!==void 0&&t.y!==void 0}function Bt(t){return t.paths!==void 0}function Gt(t){return t.rings!==void 0}var H=[];function dt(t,e,n,r){return{xmin:t,ymin:e,xmax:n,ymax:r}}function Pt(t,e,n,r,i,s){return{xmin:t,ymin:e,zmin:n,xmax:r,ymax:i,zmax:s}}function It(t,e,n,r,i,s){return{xmin:t,ymin:e,mmin:n,xmax:r,ymax:i,mmax:s}}function vt(t,e,n,r,i,s,o,a){return{xmin:t,ymin:e,zmin:n,mmin:r,xmax:i,ymax:s,zmax:o,mmax:a}}function K(t,e=!1,n=!1){return e?n?vt(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):Pt(t[0],t[1],t[2],t[3],t[4],t[5]):n?It(t[0],t[1],t[2],t[3],t[4],t[5]):dt(t[0],t[1],t[2],t[3])}function ze(t){return t?Yt(t)?t:Vt(t)?jt(t):Gt(t)?Q(t):Bt(t)?U(t):qt(t)?Jt(t):null:null}function Jt(t){let{hasZ:e,hasM:n,points:r}=t;return K(V(H,r,e??!1,n??!1),e,n)}function jt(t){let{x:e,y:n,z:r,m:i}=t,s=i!=null;return r!=null?s?vt(e,n,r,i,e,n,r,i):Pt(e,n,r,e,n,r):s?It(e,n,i,e,n,i):dt(e,n,e,n)}function Q(t){let{hasZ:e,hasM:n,rings:r}=t,i=O(H,r,e??!1,n??!1);return i?K(i,e,n):null}function U(t){let{hasZ:e,hasM:n,paths:r}=t,i=O(H,r,e??!1,n??!1);return i?K(i,e,n):null}var B;function Mt(t){return!Array.isArray(t[0])}var N=B=class extends b{static fromExtent(t){let e=t.clone().normalize(),n=t.spatialReference,r=!1,i=!1;for(let o of e)o.hasZ&&(r=!0),o.hasM&&(i=!0);let s={rings:e.map(o=>{let a=[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]];if(r&&o.hasZ){let c=o.zmin+.5*(o.zmax-o.zmin);for(let u=0;u<a.length;u++)a[u].push(c)}if(i&&o.hasM){let c=o.mmin+.5*(o.mmax-o.mmin);for(let u=0;u<a.length;u++)a[u].push(c)}return a}),spatialReference:n};return r&&(s.hasZ=!0),i&&(s.hasM=!0),new B(s)}constructor(...t){super(...t),this.rings=[],this.type="polygon"}normalizeCtorArgs(t,e){let n,r,i=null,s=null;return t&&!Array.isArray(t)?(i=t.rings??null,e||(t.spatialReference?e=t.spatialReference:t.rings||(e=t)),n=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||q.WGS84,i.length&&i[0]?.[0]!=null&&typeof i[0][0]=="number"&&(i=[i]),s=i[0]?.[0],s&&(n===void 0&&r===void 0?(n=s.length>2,r=s.length>3):n===void 0?n=r?s.length>3:s.length>2:r===void 0&&(r=n?s.length>3:s.length>2)),{rings:i,spatialReference:e,hasZ:n,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){let t=yt(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;let e=new P;return e.x=t[0],e.y=t[1],e.spatialReference=this.spatialReference,this.hasZ&&(e.z=t[2]),e}get extent(){let{spatialReference:t}=this,e=Q(this);if(!e)return null;let n=new F(e);return n.spatialReference=t,n}get isSelfIntersecting(){return ot(this.rings)}writeRings(t,e){e.rings=A(this.rings)}addRing(t){if(!t)return;let e=this.rings,n=e.length;if(Mt(t)){let r=[];for(let i=0,s=t.length;i<s;i++)r[i]=t[i].toArray();e[n]=r}else e[n]=t.concat();return this.notifyChange("rings"),this}clone(){let t=new B;return t.spatialReference=this.spatialReference,t.rings=A(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0;if(t==null)return!1;let e=this.spatialReference,n=t.spatialReference;if(e!=null!=(n!=null)||e!=null&&n!=null&&!e.equals(n)||this.rings.length!==t.rings.length)return!1;let r=([i,s,o,a],[c,u,h,l])=>i===c&&s===u&&(o==null&&h==null||o===h)&&(a==null&&l==null||a===l);for(let i=0;i<this.rings.length;i++){let s=this.rings[i],o=t.rings[i];if(!Y(s,o,r))return!1}return!0}contains(t){if(!t)return!1;let e=it(t,this.spatialReference);return st(this,e??t)}isClockwise(t){let e;return e=Mt(t)?t.map(n=>this.hasZ?this.hasM?[n.x,n.y,n.z,n.m]:[n.x,n.y,n.z]:[n.x,n.y]):t,W(e)}getPoint(t,e){if(!this._validateInputs(t,e))return null;let n=this.rings[t][e],r=this.hasZ,i=this.hasM;return r&&!i?new P(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new P(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new P(n[0],n[1],n[2],n[3],this.spatialReference):new P(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(z(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t].splice(e,0,n),this.notifyChange("rings"),this):this}removePoint(t,e){if(!this._validateInputs(t,e))return null;let n=new P(this.rings[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("rings"),n}removeRing(t){if(!this._validateInputs(t,null))return null;let e=this.rings.splice(t,1)[0],n=this.spatialReference,r=e.map(i=>new P(i,n));return this.notifyChange("rings"),r}setPoint(t,e,n){return this._validateInputs(t,e)?(z(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t][e]=n,this.notifyChange("rings"),this):this}_validateInputs(t,e,n=!1){if(t==null||t<0||t>=this.rings.length)return!1;if(e!=null){let r=this.rings[t];if(n&&(e<0||e>r.length)||!n&&(e<0||e>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}};d([M({readOnly:!0})],N.prototype,"cache",null),d([M({readOnly:!0})],N.prototype,"centroid",null),d([M({readOnly:!0})],N.prototype,"extent",null),d([M({readOnly:!0})],N.prototype,"isSelfIntersecting",null),d([M({type:[[[Number]]],json:{write:{isRequired:!0}}})],N.prototype,"rings",void 0),d([E("rings")],N.prototype,"writeRings",null),N=B=d([T("esri.geometry.Polygon")],N),N.prototype.toJSON.isDefaultToJSON=!0;var Le=N;var $;function kt(t){return!Array.isArray(t[0])}var S=$=class extends b{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,e){let n,r,i=null,s=null;return t&&!Array.isArray(t)?(i=t.paths??null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),n=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||q.WGS84,i.length&&i[0]?.[0]!=null&&typeof i[0][0]=="number"&&(i=[i]),s=i[0]?.[0],s&&(n===void 0&&r===void 0?(n=s.length>2,r=!1):n===void 0?n=!r&&s.length>3:r===void 0&&(r=!n&&s.length>3)),{paths:i,spatialReference:e,hasZ:n,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){let{spatialReference:t}=this,e=U(this);if(!e)return null;let n=new F(e);return n.spatialReference=t,n}writePaths(t,e){e.paths=A(this.paths)}addPath(t){if(!t)return;let e=this.paths,n=e.length;if(kt(t)){let r=[];for(let i=0,s=t.length;i<s;i++)r[i]=t[i].toArray();e[n]=r}else e[n]=t.concat();return this.notifyChange("paths"),this}clone(){let t=new $;return t.spatialReference=this.spatialReference,t.paths=A(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null;let n=this.paths[t][e],r=this.hasZ,i=this.hasM;return r&&!i?new P(n[0],n[1],n[2],void 0,this.spatialReference):i&&!r?new P(n[0],n[1],void 0,n[2],this.spatialReference):r&&i?new P(n[0],n[1],n[2],n[3],this.spatialReference):new P(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(z(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t].splice(e,0,n),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;let e=this.paths.splice(t,1)[0],n=this.spatialReference,r=e.map(i=>new P(i,n));return this.notifyChange("paths"),r}removePoint(t,e){if(!this._validateInputs(t,e))return null;let n=new P(this.paths[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("paths"),n}setPoint(t,e,n){return this._validateInputs(t,e)?(z(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t][e]=n,this.notifyChange("paths"),this):this}_validateInputs(t,e,n=!1){if(t==null||t<0||t>=this.paths.length)return!1;if(e!=null){let r=this.paths[t];if(n&&(e<0||e>r.length)||!n&&(e<0||e>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}};d([M({readOnly:!0})],S.prototype,"cache",null),d([M({readOnly:!0})],S.prototype,"extent",null),d([M({type:[[[Number]]],json:{write:{isRequired:!0}}})],S.prototype,"paths",void 0),d([E("paths")],S.prototype,"writePaths",null),S=$=d([T("esri.geometry.Polyline")],S),S.prototype.toJSON.isDefaultToJSON=!0;var ln=S;export{ne as a,ue as b,gt as c,ye as d,Zt as e,W as f,xe as g,wt as h,ve as i,yt as j,Me as k,Re as l,oe as m,ae as n,At as o,le as p,ze as q,Q as r,Le as s,ln as t};