import{b}from"./chunk-EJ3VIBAJ.js";import{e as p,q as g}from"./chunk-OOYAVZJN.js";import{H as s}from"./chunk-WMYPRHRR.js";import{R as u}from"./chunk-IAMDMFZ7.js";import{a as o}from"./chunk-53MWZ23O.js";import{a as c}from"./chunk-XDTDVCGP.js";import{a as l,b as _,d as m}from"./chunk-ESDYQQXO.js";var f={anchor:"esri-widget__anchor",anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",disabledElement:"esri-disabled-element",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",noBookmarksIcon:"esri-widget__no-bookmark-icon",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"};function k(w,n){var a=w,{level:r,class:t}=a,i=m(a,["level","class"]);let d=h(r);return g(`h${d}`,_(l({},i),{"aria-level":String(d),class:p(f.heading,t),role:"heading"}),n)}function h(r){return b(Math.ceil(r),1,6)}var e="esri-feature",H={base:e,container:`${e}__size-container`,title:`${e}__title`,main:`${e}__main-container`,btn:`${e}__button`,icon:`${e}__icon`,content:`${e}__content`,contentNode:`${e}__content-node`,contentNodeText:`${e}__content-node--text`,contentElement:`${e}__content-element`,text:`${e}__text`,lastEditedInfo:`${e}__last-edited-info`,fields:`${e}__fields`,fieldHeader:`${e}__field-header`,fieldData:`${e}__field-data`,fieldDataDate:`${e}__field-data--date`,loadingSpinnerContainer:`${e}__loading-container`,spinner:`${e}__loading-spinner`};var M=r=>{let t=class extends r{constructor(...i){super(...i),this.goToOverride=null,this.view=null}callGoTo(i){let{view:n}=this;return c(n),this.goToOverride?this.goToOverride(n,i):n.goTo(i.target,i.options)}};return o([s()],t.prototype,"goToOverride",void 0),o([s()],t.prototype,"view",void 0),t=o([u("esri.widgets.support.GoTo")],t),t};export{f as a,k as b,H as c,M as d};
