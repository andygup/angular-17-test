"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4994],{34994:(Z,l,o)=>{o.r(l),o.d(l,{buffer:()=>B,changeDefaultSpatialReferenceTolerance:()=>X,clearDefaultSpatialReferenceTolerance:()=>Y,clip:()=>h,contains:()=>A,convexHull:()=>T,crosses:()=>G,cut:()=>y,densify:()=>b,difference:()=>O,disjoint:()=>_,distance:()=>g,equals:()=>m,extendedSpatialReferenceInfo:()=>p,flipHorizontal:()=>J,flipVertical:()=>M,generalize:()=>N,geodesicArea:()=>F,geodesicBuffer:()=>I,geodesicDensify:()=>K,geodesicLength:()=>q,intersect:()=>C,intersectLinesToPoints:()=>Q,intersects:()=>R,isSimple:()=>E,nearestCoordinate:()=>j,nearestVertex:()=>z,nearestVertices:()=>H,offset:()=>V,overlaps:()=>x,planarArea:()=>U,planarLength:()=>W,relate:()=>S,rotate:()=>k,simplify:()=>L,symmetricDifference:()=>v,touches:()=>w,union:()=>P,within:()=>D});var n=o(89465),r=o(65601);function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function p(e){return n.G.extendedSpatialReferenceInfo(e)}function h(e,t){return n.G.clip(r.hydratedAdapter,a(e),e,t)}function y(e,t){return n.G.cut(r.hydratedAdapter,a(e),e,t)}function A(e,t){return n.G.contains(r.hydratedAdapter,a(e),e,t)}function G(e,t){return n.G.crosses(r.hydratedAdapter,a(e),e,t)}function g(e,t,i){return n.G.distance(r.hydratedAdapter,a(e),e,t,i)}function m(e,t){return n.G.equals(r.hydratedAdapter,a(e),e,t)}function R(e,t){return n.G.intersects(r.hydratedAdapter,a(e),e,t)}function w(e,t){return n.G.touches(r.hydratedAdapter,a(e),e,t)}function D(e,t){return n.G.within(r.hydratedAdapter,a(e),e,t)}function _(e,t){return n.G.disjoint(r.hydratedAdapter,a(e),e,t)}function x(e,t){return n.G.overlaps(r.hydratedAdapter,a(e),e,t)}function S(e,t,i){return n.G.relate(r.hydratedAdapter,a(e),e,t,i)}function E(e){return n.G.isSimple(r.hydratedAdapter,a(e),e)}function L(e){return n.G.simplify(r.hydratedAdapter,a(e),e)}function T(e,t=!1){return n.G.convexHull(r.hydratedAdapter,a(e),e,t)}function O(e,t){return n.G.difference(r.hydratedAdapter,a(e),e,t)}function v(e,t){return n.G.symmetricDifference(r.hydratedAdapter,a(e),e,t)}function C(e,t){return n.G.intersect(r.hydratedAdapter,a(e),e,t)}function P(e,t=null){return n.G.union(r.hydratedAdapter,a(e),e,t)}function V(e,t,i,d,c,s){return n.G.offset(r.hydratedAdapter,a(e),e,t,i,d,c,s)}function B(e,t,i,d=!1){return n.G.buffer(r.hydratedAdapter,a(e),e,t,i,d)}function I(e,t,i,d,c,s){return n.G.geodesicBuffer(r.hydratedAdapter,a(e),e,t,i,d,c,s)}function j(e,t,i=!0){return n.G.nearestCoordinate(r.hydratedAdapter,a(e),e,t,i)}function z(e,t){return n.G.nearestVertex(r.hydratedAdapter,a(e),e,t)}function H(e,t,i,d){return n.G.nearestVertices(r.hydratedAdapter,a(e),e,t,i,d)}function f(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function k(e,t,i){if(null==e)throw new u;const d=e.spatialReference;if(null==(i=i??f(e)))throw new u;const c=e.constructor.fromJSON(n.G.rotate(e,t,i));return c.spatialReference=d,c}function J(e,t){if(null==e)throw new u;const i=e.spatialReference;if(null==(t=t??f(e)))throw new u;const d=e.constructor.fromJSON(n.G.flipHorizontal(e,t));return d.spatialReference=i,d}function M(e,t){if(null==e)throw new u;const i=e.spatialReference;if(null==(t=t??f(e)))throw new u;const d=e.constructor.fromJSON(n.G.flipVertical(e,t));return d.spatialReference=i,d}function N(e,t,i,d){return n.G.generalize(r.hydratedAdapter,a(e),e,t,i,d)}function b(e,t,i){return n.G.densify(r.hydratedAdapter,a(e),e,t,i)}function K(e,t,i,d=0){return n.G.geodesicDensify(r.hydratedAdapter,a(e),e,t,i,d)}function U(e,t){return n.G.planarArea(r.hydratedAdapter,a(e),e,t)}function W(e,t){return n.G.planarLength(r.hydratedAdapter,a(e),e,t)}function F(e,t,i){return n.G.geodesicArea(r.hydratedAdapter,a(e),e,t,i)}function q(e,t,i){return n.G.geodesicLength(r.hydratedAdapter,a(e),e,t,i)}function Q(e,t){return n.G.intersectLinesToPoints(r.hydratedAdapter,a(e),e,t)}function X(e,t){n.G.changeDefaultSpatialReferenceTolerance(e,t)}function Y(e){n.G.clearDefaultSpatialReferenceTolerance(e)}class u extends Error{constructor(){super("Illegal Argument Exception")}}}}]);