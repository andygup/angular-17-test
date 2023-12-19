import{a as L,b as k}from"./chunk-JTTV7YPG.js";import{a as O}from"./chunk-5X3Q4C4J.js";import{a as C}from"./chunk-XHPJ255M.js";import{D as y,E as T,Ma as R,Ta as S,V as B,Wa as v,e as b,m as D,ma as x,oa as M,pa as s,w as P}from"./chunk-WFBU6XG6.js";import"./chunk-53MWZ23O.js";import"./chunk-ESDYQQXO.js";var H=class extends v{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:s.fromHex(0),fill:s.fromHex(2829099),primaryButton:s.lighten(s.fromHex(6788316),-.2),primaryButtonHover:s.lighten(s.fromHex(6779356),-.2),primaryButtonDown:s.lighten(s.fromHex(6872181),-.2),primaryButtonActive:s.lighten(s.fromHex(6872182),-.2),primaryButtonText:s.fromHex(16777215),primaryButtonStroke:s.lighten(s.fromHex(6788316),-.2),secondaryButton:s.fromHex(3881787),secondaryButtonHover:s.lighten(s.fromHex(3881787),.1),secondaryButtonDown:s.lighten(s.fromHex(3881787),.15),secondaryButtonActive:s.lighten(s.fromHex(3881787),.2),secondaryButtonText:s.fromHex(12303291),secondaryButtonStroke:s.lighten(s.fromHex(3881787),-.2),grid:s.fromHex(12303291),background:s.fromHex(0),alternativeBackground:s.fromHex(16777215),text:s.fromHex(16777215),alternativeText:s.fromHex(0),disabled:s.fromHex(11382189),positive:s.fromHex(5288704),negative:s.fromHex(11730944)})}},j=H,m=class e extends v{constructor(){super(...arguments),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]})}static widthXXS(t,i){return t<=e.XXS}static widthXS(t,i){return t<=e.XS}static widthS(t,i){return t<=e.S}static widthM(t,i){return t<=e.M}static widthL(t,i){return t<=e.L}static widthXL(t,i){return t<=e.XL}static widthXXL(t,i){return t<=e.XXL}static heightXXS(t,i){return i<=e.XXS}static heightXS(t,i){return i<=e.XS}static heightS(t,i){return i<=e.S}static heightM(t,i){return i<=e.M}static heightL(t,i){return i<=e.L}static heightXL(t,i){return i<=e.XL}static heightXXL(t,i){return i<=e.XXL}static isXXS(t,i){return t<=e.XXS&&i<=e.XXS}static isXS(t,i){return t<=e.XS&&i<=e.XS}static isS(t,i){return t<=e.S&&i<=e.S}static isM(t,i){return t<=e.M&&i<=e.M}static isL(t,i){return t<=e.L&&i<=e.L}static isXL(t,i){return t<=e.XL&&i<=e.XL}static isXXL(t,i){return t<=e.XXL&&i<=e.XXL}static maybeXXS(t,i){return t<=e.XXS||i<=e.XXS}static maybeXS(t,i){return t<=e.XS||i<=e.XS}static maybeS(t,i){return t<=e.S||i<=e.S}static maybeM(t,i){return t<=e.M||i<=e.M}static maybeL(t,i){return t<=e.L||i<=e.L}static maybeXL(t,i){return t<=e.XL||i<=e.XL}static maybeXXL(t,i){return t<=e.XXL||i<=e.XXL}static newEmpty(t){return new this(t,!0)}addRule(t){return t.name&&!t.template&&(t.template=this.rule(t.name,t.tags)),t._dp=new P([this._root._rootContainer.onPrivate("width",i=>{this._isUsed()&&this._applyRule(t)}),this._root._rootContainer.onPrivate("height",i=>{this._isUsed()&&this._applyRule(t)})]),this.responsiveRules.push(t),this._applyRule(t),t}removeRule(t){D(this.responsiveRules,t),t._dp&&t._dp.dispose()}_isUsed(){return this._root._rootContainer.get("themes").indexOf(this)!==-1}_applyRule(t){let i=this._root._rootContainer.getPrivate("width"),n=this._root._rootContainer.getPrivate("height"),r=t.relevant.call(t,i,n),a=t.applied;r?a||(t.applied=!0,t.template&&t.settings&&t.template.setAll(t.settings),t.applying&&t.applying.call(t)):a&&(t.applied=!1,t.template&&t.template.removeAll(),t.removing&&t.removing.call(t))}setupDefaultRules(){super.setupDefaultRules();let t=i=>this.addRule(i);t({name:"Chart",relevant:e.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),t({name:"Chart",relevant:e.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),t({name:"Bullet",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"Legend",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["vertical"],relevant:e.widthXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["horizontal"],relevant:e.heightXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","start"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","end"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Button",tags:["resize"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisRendererX",relevant:e.heightXS,settings:{inside:!0}}),t({name:"AxisRendererY",relevant:e.widthXS,settings:{inside:!0}}),t({name:"AxisRendererXLabel",relevant:e.heightXS,settings:{minPosition:.1,maxPosition:.9}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXS,settings:{centerY:T,maxPosition:.9}}),t({name:"AxisLabel",tags:["x"],relevant:e.heightXXS,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["x"],relevant:e.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"AxisTick",tags:["y"],relevant:e.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"Grid",relevant:e.maybeXXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["radial"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeS,settings:{inside:!0}}),t({name:"AxisTick",relevant:e.maybeS,settings:{inside:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["circular"],relevant:e.maybeXS,settings:{inside:!0}}),t({name:"PieChart",relevant:e.maybeXS,settings:{radius:y(99)}}),t({name:"PieChart",relevant:e.widthM,settings:{radius:y(99)}}),t({name:"RadialLabel",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"FunnelSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PyramidSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PictorialStackedSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","horizontal"],relevant:e.widthS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","vertical"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Chord",relevant:e.maybeXS,settings:{radius:y(99)}}),t({name:"Label",tags:["hierarchy","node"],relevant:e.maybeXS,settings:{forceHidden:!0}})}};Object.defineProperty(m,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(m,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(m,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(m,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(m,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(m,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(m,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});var _=m;var f=class extends S{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=x(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=L.new(this._root,{themeTags:x(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(k.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:R.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(L.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1}))}_afterNew(){this._addOrientationClass(),super._afterNew();let t=this.startGrip,i=this.endGrip,n=this.thumb,r=this.get("background");r&&this._disposers.push(r.events.on("click",a=>{this.setPrivateRaw("isBusy",!0);let h=this._display.toLocal(a.point),o=this.width(),d=this.height(),u=this.get("orientation"),l,g,p;l=u=="vertical"?(h.y-n.height()/2)/d:(h.x-n.width()/2)/o,u=="vertical"?(g=l*d,p="y"):(g=l*o,p="x");let c=this.get("animationDuration",0);c>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:p,to:g,duration:c,easing:this.get("animationEasing")}))):(this.thumb.set(p,g),this._root.events.once("frameended",()=>{this.setPrivateRaw("isBusy",!1)}))})),this._disposers.push(n.events.on("dblclick",a=>{if(!B(a.originalEvent,this))return;let h=this.get("animationDuration",0),o=this.get("animationEasing");this.animate({key:"start",to:0,duration:h,easing:o}),this.animate({key:"end",to:1,duration:h,easing:o})})),this._disposers.push(t.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"})),this._disposers.push(i.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"})),this._disposers.push(n.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0})),this._disposers.push(t.events.on("globalpointerup",()=>{this._startDown&&this.setPrivateRaw("isBusy",!1),this._startDown=!1})),this._disposers.push(i.events.on("globalpointerup",()=>{this._endDown&&this.setPrivateRaw("isBusy",!1),this._endDown=!1})),this._disposers.push(n.events.on("globalpointerup",()=>{this._thumbDown&&this.setPrivateRaw("isBusy",!1),this._thumbDown=!1})),this._disposers.push(t.on("x",()=>{this._updateThumb()})),this._disposers.push(i.on("x",()=>{this._updateThumb()})),this._disposers.push(t.on("y",()=>{this._updateThumb()})),this._disposers.push(i.on("y",()=>{this._updateThumb()})),this._disposers.push(n.events.on("positionchanged",()=>{this._updateGripsByThumb()})),this.get("orientation")=="vertical"?(t.set("x",0),i.set("x",0),this._disposers.push(n.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()-n.height()),0))),this._disposers.push(n.adapters.add("x",a=>this.width()/2)),this._disposers.push(t.adapters.add("x",a=>this.width()/2)),this._disposers.push(i.adapters.add("x",a=>this.width()/2)),this._disposers.push(t.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0))),this._disposers.push(i.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0)))):(t.set("y",0),i.set("y",0),this._disposers.push(n.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()-n.width()),0))),this._disposers.push(n.adapters.add("y",a=>this.height()/2)),this._disposers.push(t.adapters.add("y",a=>this.height()/2)),this._disposers.push(i.adapters.add("y",a=>this.height()/2)),this._disposers.push(t.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))),this._disposers.push(i.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){let t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}updateGrips(){let t=this.startGrip,i=this.endGrip,n=this.get("orientation"),r=this.height(),a=this.width();n=="vertical"?(t.set("y",r*this.get("start",0)),i.set("y",r*this.get("end",1))):(t.set("x",a*this.get("start",0)),i.set("x",a*this.get("end",1)));let h=this.getPrivate("positionTextFunction"),o=Math.round(100*this.get("start",0)),d=Math.round(100*this.get("end",0)),u,l;h?(u=h.call(this,this.get("start",0)),l=h.call(this,this.get("end",0))):(u=o+"%",l=d+"%"),t.set("ariaLabel",this._t("From %1",void 0,u)),t.set("ariaValueNow",""+o),t.set("ariaValueText",o+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),i.set("ariaLabel",this._t("To %1",void 0,l)),i.set("ariaValueNow",""+d),i.set("ariaValueText",d+"%"),i.set("ariaValueMin","0"),i.set("ariaValueMax","100")}_updateThumb(){let t=this.thumb,i=this.startGrip,n=this.endGrip,r=this.height(),a=this.width(),h=i.x(),o=n.x(),d=i.y(),u=n.y(),l=0,g=1;this.get("orientation")=="vertical"?b(d)&&b(u)&&(this._thumbBusy||t.isDragging()||(t.set("height",u-d),t.set("y",d)),l=d/r,g=u/r):b(h)&&b(o)&&(this._thumbBusy||t.isDragging()||(t.set("width",o-h),t.set("x",h)),l=h/a,g=o/a),!this.getPrivate("isBusy")||this.get("start")==l&&this.get("end")==g||(this.set("start",l),this.set("end",g));let p=this.getPrivate("positionTextFunction"),c=Math.round(100*this.get("start",0)),A=Math.round(100*this.get("end",0)),w,X;p?(w=p.call(this,this.get("start",0)),X=p.call(this,this.get("end",0))):(w=c+"%",X=A+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,w,X)),t.set("ariaValueNow",""+c),t.set("ariaValueText",c+"%")}_updateGripsByThumb(){let t=this.thumb,i=this.startGrip,n=this.endGrip;if(this.get("orientation")=="vertical"){let r=t.height();i.set("y",t.y()),n.set("y",t.y()+r)}else{let r=t.width();i.set("x",t.x()),n.set("x",t.x()+r)}}};Object.defineProperty(f,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(f,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([f.className])});var E=class extends v{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600)}},F=["#2888B8","#EB7028","#48A375","#9370B1","#e55035","#3d9ccc","#DC7B04","#b87bb0","#3fa681","#EE6386"].map(e=>M(e));export{E as AnimatedThemeAm5,O as ColorSetAm5,j as DarkThemeAm5,_ as ResponsiveThemeAm5,f as ScrollbarAm5,v as ThemeAm5,C as TooltipAm5,M as colorAm5,F as esriChartColorSet};
