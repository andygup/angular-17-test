import{c as r}from"./chunk-IEXZWAIE.js";import{N as a}from"./chunk-IAMDMFZ7.js";import{b as l,h as o,r as s}from"./chunk-465DRXTW.js";var u=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),m=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function p(e){return e.layerContainerType==="basemap"?u:e.layerContainerType==="operational-layers"?m:null}function c(e,i){if(i.restrictedWebMapWriting){let n=p(i);return n==null||n.has(e.type)&&!r(e)}return!0}function f(e,i){if(i)if(r(e)){let n=o("featureCollection.layers",i),t=n?.[0]?.layerDefinition;t&&d(e,t)}else e.type!=="group"&&d(e,i)}function d(e,i){"maxScale"in e&&(i.maxScale=a(e.maxScale)??void 0),"minScale"in e&&(i.minScale=a(e.minScale)??void 0)}function g(e,i){if(f(e,i),i&&(i.id=e.id,"blendMode"in e&&(i.blendMode=e.blendMode,i.blendMode==="normal"&&delete i.blendMode),i.opacity=a(e.opacity)??void 0,i.title=e.title||"Layer",i.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts"))if(r(e)){let n=i.featureCollection;n&&(n.showLegend=e.legendEnabled)}else i.showLegend=e.legendEnabled}function C(e,i,n){if(!e.persistenceEnabled)return null;if(!("write"in e)||!e.write)return n?.messages&&n.messages.push(new s("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(r(e)&&!e.isTable)i=e.resourceInfo;else if(c(e,n)){let t={};return e.write(t,n)?t:null}return i!=null&&g(e,i=l(i)),i}export{C as a};
