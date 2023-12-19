import{a as R}from"./chunk-MCIUWLYC.js";import{a as V}from"./chunk-EEZEB3RB.js";import{g as C}from"./chunk-OHIIU6WS.js";import{a as w,n as z}from"./chunk-55ESOXMJ.js";var T=class{constructor(e,i,s){this.maxSize=e,this._tileInfoView=i,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){let i=this._tilePerId.get(e);if(!i)return;let s=i.key.level,t=this._tileKeysPerLevel[s];K(this._tilePerId,e);for(let l=0;l<t.length;l++)if(t[l].id===e){t.splice(l,1);break}return i.visible=!0,i}add(e){e.visible=!1;let i=e.key,s=i.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);let t=i.level;this._tileKeysPerLevel[t]||(this._tileKeysPerLevel[t]=[]),this._tileKeysPerLevel[t].push(i)}prune(e,i,s){let t=this._tilePerId.size;if(t<=this.maxSize)return;let l=this._tileKeysPerLevel.length-1;for(;t>this.maxSize&&l>=0;)l!==e&&(t=this._pruneAroundCenterTile(t,i,s,l)),l--;t>this.maxSize&&(t=this._pruneAroundCenterTile(t,i,s,e))}_pruneAroundCenterTile(e,i,s,t){let l=this._tileKeysPerLevel[t];if(!l||l.length===0)return e;let{size:g,origin:y}=this._tileInfoView.tileInfo,P=s*g[0],I=s*g[1],a=[0,0],v=[0,0];for(l.sort((c,d)=>(a[0]=y.x+P*(c.col+.5),a[1]=y.y-I*(c.row+.5),v[0]=y.x+P*(d.col+.5),v[1]=y.y-I*(d.row+.5),C(a,i)-C(v,i)));l.length>0;){let c=l.pop();if(this._removeTile(c.id),--e===this.maxSize)break}return e}_removeTile(e){let i=this._tilePerId.get(e);this._removedFunc&&i&&this._removedFunc(i),K(this._tilePerId,e)}};function K(x,e){x.delete(e)}var _=new V(0,0,0,0),n=new Map,p=[],S=[],L=class{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new T(e.cacheSize,this.tileInfoView,i=>{this.releaseTile(i)}))}destroy(){this.tileIndex.clear()}update(e){let{resampling:i,tileIndex:s}=this,{scale:t,center:l,resolution:g}=e.state,{minScale:y,maxScale:P}=this.tileInfoView,I=!e.stationary&&t>this._previousScale;if(this._previousScale=t,!i&&(t>y||t<P))return this.tiles.length=0,void this.clear();let a=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!a)return this.tiles.length=0,void this.clear();let{spans:v,lodInfo:c}=a,{level:d}=c;this.tiles.length=0,s.forEach(r=>r.visible=!0);let b=0,k=0;if(v.length>0)for(let{row:r,colFrom:u,colTo:m}of v)for(let f=u;f<=m;f++){b++;let o=_.set(d,r,c.normalizeCol(f),c.getWorldForColumn(f)).id,h=s.get(o);if(h)h.isReady?(n.set(o,h),k++):I||this._addParentTile(o,n);else{if(this._tileCache?.has(o)){if(h=this._tileCache.pop(o),this.tileIndex.set(o,h),h.isReady){n.set(o,h),k++;continue}}else h=this.acquireTile(_),this.tileIndex.set(o,h);I||this._addParentTile(o,n)}}let F=k===b;for(let[r,u]of s){if(n.has(r))continue;_.set(r);let m=this.tileInfoView.intersects(a,_),f=this.cachePolicy==="purge"?_.level!==d:_.level>d;!m||!I&&F?!f&&m||p.push(u):u.isReady?f&&this.cachePolicy==="purge"&&this._hasReadyAncestor(_,d)?p.push(u):S.push(u):f&&p.push(u)}for(let r of S)r.isReady&&n.set(r.key.id,r);for(let r of p)this._tileCache?this._tileCache.add(r):this.releaseTile(r),s.delete(r.key.id);for(let r of n.values())this.tiles.push(r);for(let r of s.values())n.has(r.key.id)||(r.visible=!1);this._tileCache?.prune(d,l,g),R.pool.release(a),S.length=0,p.length=0,n.clear()}clear(){let{tileIndex:e}=this;for(let i of e.values())this.releaseTile(i);e.clear()}refresh(e){for(let i of this.tileIndex.values())this.tiles.includes(i)?e(i):p.push(i);for(let i of p)this.releaseTile(i),this.tileIndex.delete(i.key.id);this._tileCache?.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,i){let s=e,t=null;for(;s=this.tileInfoView.getTileParentId(s),s;)if(this.tileIndex.has(s)){if(t=this.tileIndex.get(s),t?.isReady){i.has(t.key.id)||i.set(t.key.id,t);break}}else if(this._tileCache?.has(s)&&(t=this._tileCache.pop(s),this.tileIndex.set(s,t),t?.isReady)){i.has(t.key.id)||i.set(t.key.id,t);break}}_hasReadyAncestor(e,i){let s=w();this.tileInfoView.getTileBounds(s,e,!0);for(let t of this.tileIndex.values())if(t.isReady&&t.key.level>=i&&t.key.level<e.level){let l=w();if(this.tileInfoView.getTileBounds(l,t.key,!0),z(l,s))return!0}return!1}};export{L as a};
