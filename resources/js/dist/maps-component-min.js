!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);Vue.component("google-maps-widget",{template:'<div :class="aspectRatio" class="maps-component" ref="googleMapsContainer"></div>',props:{googleApiKey:{type:String,required:!0},address:{type:String,required:!1},lat:{type:Number},lng:{type:Number},zoom:{type:Number,default:16},aspectRatio:{type:String,default:"map-3-1",validator:function(t){return-1!==["map-3-1","map-2-1","map-1-1",""].indexOf(t)}}},computed:{coordinates:function(){var t=!isNaN(this.lat)&&this.lat>-90&&this.lat<90,e=!isNaN(this.lng)&&this.lng>-180&&this.lng<180;return t&&e?{lat:this.lat,lng:this.lng}:null}},mounted:function(){var t=this;this.$nextTick(function(){document.querySelector("#google-maps-api")?t.listenToExistingScript():t.createScript().then(function(){return t.initializeMap()})})},methods:{createScript:function(){var t=this;return new Promise(function(e,n){var r=document.createElement("script"),o="https://maps.googleapis.com/maps/api/js?key=".concat(t.googleApiKey);r.type="text/javascript",r.id="google-maps-api",r.src=o,r.addEventListener("load",function(){return e(r)},!1),r.addEventListener("error",function(){return n(r)},!1),document.body.appendChild(r)})},listenToExistingScript:function(){var t=this,e=document.querySelector("script#google-maps-api");"undefined"==typeof google?e.addEventListener("load",function(){return t.initializeMap()},!1):this.initializeMap()},initializeMap:function(){var t=this;this.coordinates?this.renderMap(this.coordinates):this.geocodeAddress().then(function(e){t.renderMap(e)})},geocodeAddress:function(){var t=this;return new Promise(function(e,n){(new google.maps.Geocoder).geocode({address:t.address},function(t,r){r===google.maps.GeocoderStatus.OK?e({lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()}):n()})})},renderMap:function(t){var e=new google.maps.Map(this.$refs.googleMapsContainer,{center:t,zoom:this.zoom});new google.maps.Marker({map:e,position:t})}}})},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".maps-component.map-3-1{padding-bottom:33%}.maps-component.map-2-1{padding-bottom:50%}.maps-component.map-1-1{padding-bottom:100%}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(h(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,p=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(t,e){var n,r,o;if(e.singleton){var i=g++;n=m||(m=u(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=s(t,e);return c(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}t&&c(s(t,e),e);for(var l=0;l<r.length;l++){var p=r[l];if(0===p.refs){for(var d=0;d<p.parts.length;d++)p.parts[d]();delete o[p.id]}}}}}]);
//# sourceMappingURL=maps-component-min.js.map