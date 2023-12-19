var t,n;function r(e){switch(e){case"left":return t.Left;case"right":return t.Right;case"center":return t.Center}}function a(e){switch(e){case"top":return n.Top;case"middle":return n.Center;case"baseline":return n.Baseline;case"bottom":return n.Bottom}}function c(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[t.Right,n.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[t.Center,n.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[t.Left,n.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[t.Right,n.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[t.Center,n.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[t.Left,n.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[t.Right,n.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[t.Center,n.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[t.Left,n.Top];default:return console.debug(`Found invalid placement type ${e}`),[t.Center,n.Center]}}function o(e){switch(e){case t.Right:return-1;case t.Center:return 0;case t.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function i(e){switch(e){case n.Top:return 1;case n.Center:return 0;case n.Bottom:case n.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s(e){switch(e){case"left":return t.Left;case"right":return t.Right;case"center":return t.Center}}function l(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}(function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"})(t||(t={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(n||(n={}));export{t as a,n as b,r as c,a as d,c as e,o as f,i as g,s as h,l as i};