!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=10)}([function(n,t,e){var o=e(1);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(8)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(2)(!1);var o=e(3),r=o(e(4)),i=o(e(5)),s=o(e(6)),c=o(e(7));t.push([n.i,'\n@font-face {\n  font-family: "icons";\n\n  src: url('+r+");\n  src: url("+r+') format("embedded-opentype"),\n  url('+i+') format("woff"),\n  url('+s+') format("truetype"),\n  url('+c+') format("svg");\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.icon {\n  cursor: pointer;\n}\n.icon::before {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  font-family: "icons";\n}\n.icon-search:before {\n  content: "\\e800";\n\n  font-size: 30px;\n}\n.icon-eye:before {\n  content: "\\e801";\n}\n.icon-person:before {\n  content: "\\e802";\n}\n.icon-calendar:before {\n  content: "\\e803";\n}\n.icon-loading:before {\n  content: "\\e804";\n}\n.animate-spin {\n  display: inline-block;\n\n  -webkit-animation: spin 2s infinite linear;\n     -moz-animation: spin 2s infinite linear;\n       -o-animation: spin 2s infinite linear;\n          animation: spin 2s infinite linear;\n}\n\nbody {\n  background-color: #d6e5ff;\n}\n.container {\n  width: 100%;\n  margin-top: 50px;\n  overflow-x: hidden;\n}\n\n.search-input-container {\n  display: flex;\n  align-items: center;\n  width: 90%;\n  margin: 0 auto 50px;\n}\n\n.input {\n  box-sizing: border-box;\n  width: 90%;\n  height: 40px;\n  margin-left: 1%;\n  padding: 2px;\n  padding: 7px 20px;\n\n  font-size: 20px;\n\n  border: 2px dashed #ff3575;\n  border-radius: 20px;\n  outline: none;\n}\n.icon-search:hover {\n  color: #ff3575;\n}\n.clips {\n  --index: 0;\n  --strange: 20px;\n  --first-slide: 0;\n  --tx: 0px;\n  --clip-width: calc(100vw/var(--clips-on-page) - var(--strange));\n\n  display: none;\n  justify-content: space-between;\n  width: calc(var(--clip-width)*var(--all-clips) + var(--strange)*(var(--all-clips) - 1));\n\n  transform: translateX(calc(-1*var(--clip-width)*var(--clips-on-page)*var(--index) - var(--index)*var(--strange)*var(--clips-on-page) + var(--tx)));\n}\n\n.clip {\n  position: relative;\n\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: var(--clip-width);\n  height: calc(var(--clip-width)*1.5);\n  height: 420px;\n  overflow: hidden;\n\n  list-style: none;\n\n  background-color: #ffffff;\n  border: 2px solid #ff3575;\n  border-radius: 7%;\n\n  user-select: none;\n}\n.smooth {\n  transition: transform 0.9s ease-out;\n}\n\n.video-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 33%;\n}\n\n.preview {\n  width: 100%;\n  height: 33%;\n  margin-bottom: 15px;\n\n  border-bottom: 1px solid #ff3575;\n}\n\n.title {\n  position: absolute;\n  top: 9%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n  overflow: hidden;\n\n  font-size: 1.2rem;\n  text-align: center;\n  color: red;\n  text-decoration: none;\n\n  background-color: #d6e5ff;\n}\n.title:hover {\n  text-decoration: underline;\n}\n\n.channel-title,\n.upload-date,\n.view-count {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60%;\n  margin: 0 auto 10px;\n}\n\n.icon {\n  margin-right: 20px;\n}\n.icon-search {\n  margin-right: 0;\n}\n.icon-person {\n  margin: auto 24px auto 6px;\n}\n\n.channel-info {\n  margin-left: 5%;\n}\n.view-count {\n  margin-bottom: 15px;\n}\n\n.descr::before {\n  content: "";\n  position: absolute;\n  left: -6%;\n\n  width: 112%;\n  height: 1px;\n\n  background-color: #ff3575;\n}\n\n.descr {\n  position: relative;\n\n  width: 90%;\n  height: 33%;\n  margin: 0 auto;\n  padding-bottom: 10px;\n\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.navigation-buttons {\n  display: none;\n  justify-content: center;\n  width: 180px;\n  margin: 21px auto;\n\n  text-align: center;\n}\n.button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  margin: 0 8.75px;\n\n  font-weight: bold;\n  font-size: 1.4rem;\n  line-height: 0;\n  color: black;\n\n  background-color: white;\n  border: 2px solid #ff3575;\n  border-radius: 50%;\n  outline: none;\n  cursor: pointer;\n}\n.button:hover {\n  background-color: #ff3575;\n  border-color: #ffffff;\n}\n.prev-button {\n  pointer-events: none;\n}\n\n.current-button {\n  color: #ffffff;\n\n  background-color: #ff3575;\n\n  pointer-events: none;\n}\n\n.tooltip {\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 25px;\n\n  font-weight: bold;\n  line-height: 0;\n  line-height: 0;\n  color: #ffffff;\n\n  background-color: #ff3575;\n  border-radius: 25%;\n  visibility: hidden;\n}\n\n.loading {\n  position: absolute;\n  top: 26%;\n\n  display: none;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.icon-loading {\n  margin: 0;\n\n  color: #ff3575;\n\n  animation: rotate 2.5s linear infinite;\n}\n.icon-loading::before {\n  font-size: 11em;\n}\n\n.no-results {\n  display: none;\n  width: 60%;\n  margin: 0 auto;\n\n  font-size: 4rem;\n  text-align: center;\n  color: #ff3575;\n}\n\n@media screen and (max-width: 680px) {\n  .container {\n    margin-top: 25px;\n  }\n  .search-input-container {\n    margin: 0 auto 25px;\n  }\n}\n',""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){n.exports=e.p+"fonts/fontello.eot"},function(n,t,e){n.exports=e.p+"fonts/fontello.woff"},function(n,t,e){n.exports=e.p+"fonts/fontello.ttf"},function(n,t,e){n.exports=e.p+"fonts/fontello.svg"},function(n,t,e){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),l=null,a=0,u=[],p=e(9);function d(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(v(o.parts[s],t))}else{var c=[];for(s=0;s<o.parts.length;s++)c.push(v(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function f(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(c):e.push(o[s]={id:s,parts:[c]})}return e}function y(n,t){var e=c(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(n.insertAt.before,e);e.insertBefore(t,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return g(t,n.attrs),y(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var s=a++;e=l||(l=m(t)),o=w.bind(null,e,s,!1),r=w.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(t,n.attrs),y(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}.bind(null,e,t),r=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){h(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return d(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var s=e[r];(c=i[s.id]).refs--,o.push(c)}n&&d(f(n,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var b,x=(b=[],function(n,t){return b[n]=t,b.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){"use strict";e.r(t);e(0);function o(n,t){const e=document.createElement(n);return t.forEach(n=>{e.classList.add(n)}),e}function r(n){const t=o("li",["clip"]),e=function(n){const t=o("a",["title"]),e=n.id;return t.setAttribute("href",`https://www.youtube.com/watch?v=${e}`),t.setAttribute("target","_blank"),t.textContent=n.snippet.title,t}(n),r=function(n){const t=o("img",["preview"]),e=n.snippet.thumbnails.medium.url;return t.setAttribute("src",e),t}(n),i=function(n){const t=o("div",["channel-title"]),e=o("span",["icon","icon-person"]),r=o("p",["channel-info"]);return r.textContent=n.snippet.channelTitle,t.append(e,r),t}(n),s=function(n){const t=o("div",["upload-date"]),e=o("span",["icon","icon-calendar"]),r=o("p",["channel-info"]);return r.textContent=n.snippet.publishedAt.slice(0,10),t.append(e,r),t}(n),c=function(n){const t=o("div",["view-count"]),e=o("span",["icon","icon-eye"]),r=o("p",["channel-info"]);return r.textContent=n.statistics.viewCount,t.append(e,r),t}(n),l=function(n){const t=o("div",["descr"]);return t.textContent=n.snippet.description,t}(n),a=o("div",["video-info"]);a.append(i,s,c),t.append(e,r,a,l),document.querySelector(".clips").appendChild(t),function(){const n=document.querySelector(".clips"),t=n.children.length;n.style.setProperty("--all-clips",t)}()}const i="AIzaSyDJzROJRUcNZoELtFWxVMhW2Jsw-cIqX-M";let s;const c=15;function l(n){const t=document.querySelector("input").value,e=`https://www.googleapis.com/youtube/v3/search?key=${i}&type=video&part=snippet&maxResults=${c}&q=${t}`,o=`https://www.googleapis.com/youtube/v3/search?key=${i}&type=video&part=snippet&maxResults=${c}&q=${t}&pageToken=${n.nextPage}`,r=`https://www.googleapis.com/youtube/v3/videos?key=${i}&id=${n.videoIds}&part=snippet,statistics`;return n.nextPage?o:"video"===n.type?r:e}function a(n){!function(n){"additionalClips"!==n&&(document.querySelector(".loading").style.setProperty("display","flex"),document.querySelector(".navigation-buttons").style.setProperty("display","none"),document.querySelector(".current-button").innerHTML=1,document.querySelector(".prev-button").style.setProperty("pointer-events","none"),document.querySelector(".no-results").style.setProperty("display","none"))}(n),fetch(l({type:"search",nextPage:s}),{headers:{"Access-Control-Allow-Origin":"*"}}).then(n=>n.json()).then(t=>{s=t.nextPageToken;const e=function(n){const t=[];return n.items.forEach(n=>{t.push(n.id.videoId)}),t.join(",")}(t);fetch(l({type:"video",videoIds:e})).then(n=>n.json()).then(t=>{t.items.forEach(n=>{r(n)}),function(n,t){"additionalClips"!==n&&(document.querySelector(".loading").style.setProperty("display","none"),t.items.length?(document.querySelector(".clips").style.setProperty("display","flex"),document.querySelector(".navigation-buttons").style.setProperty("display","flex")):document.querySelector(".no-results").style.setProperty("display","flex"))}(n,t)}).catch(n=>{console.error(`Sorry. ${n}`)})}).catch(n=>{console.error(n)})}function u(){const n=document.querySelector(".clips");!function(n){for(;n.lastChild;)n.removeChild(n.lastChild)}(n);const t=function(){const n=document.documentElement.clientWidth;return n<440?1:n<680&&n>440?2:n>680&&n<910?3:4}();n.style.setProperty("--clips-on-page",t),n.style.setProperty("--all-clips",c),n.style.setProperty("--index",0),n.style.setProperty("--count",t)}function p(){const n=document.querySelector(".clips");document.querySelector(".current-button").innerHTML=+getComputedStyle(n).getPropertyValue("--index")+1}function d(n){const{target:t}=n;t.classList.contains("button")&&("mousedown"===n.type&&function(n){const t=document.querySelector(".prev-tooltip"),e=document.querySelector(".current-button"),o=document.querySelector(".next-tooltip");n.classList.contains("next-button")&&(o.classList.add("tooltip-visible"),o.style.visibility="visible",o.innerHTML=+e.innerHTML+1),n.classList.contains("prev-button")&&(t.classList.add("tooltip-visible"),t.style.visibility="visible",t.innerHTML=+e.innerHTML-1)}(t),"mouseup"===n.type&&function(){const n=document.querySelector(".prev-tooltip"),t=document.querySelector(".next-tooltip");t.classList.contains("tooltip-visible")&&(t.style.visibility="hidden"),n.classList.contains("tooltip-visible")&&(n.style.visibility="hidden")}())}let f=null,y=!1;function h(n){return n.changedTouches?n.changedTouches[0]:n}function m(n){const t=document.querySelector(".clips");f=h(n).clientX,t.classList.toggle("smooth",!(y=!0))}function g(n){const t=document.querySelector(".clips");n.preventDefault(),y&&t.style.setProperty("--tx",`${Math.round(h(n).clientX-f)}px`)}function v(n){const t=document.querySelector(".clips"),e=+getComputedStyle(t).getPropertyValue("--clips-on-page");let o=+getComputedStyle(t).getPropertyValue("--count"),r=+getComputedStyle(t).getPropertyValue("--index");const i=t.children.length;let s;if(y){const t=h(n).clientX-f;s=Math.sign(t)}(r>0||s<0)&&(r<i-1||s>0)&&(t.style.setProperty("--index",r-=s),o-=s*e,t.style.setProperty("--count",o),function(n,t){const e=document.querySelector(".prev-button");n<0?e.style.setProperty("pointer-events","auto"):t||e.style.setProperty("pointer-events","none")}(s,r)),t.style.setProperty("--tx","0px"),t.classList.toggle("smooth",!(y=!1)),f=null,p(),o>=i-3&&a("additionalClips")}!function(){const n=o("div",["container"]),t=o("div",["search-input-container"]),e=o("input",["input","js-input"]),r=o("span",["icon","icon-search"]);t.append(r,e);const i=o("ul",["clips","smooth"]),s=o("div",["navigation-buttons"]),c=o("div",["tooltip","prev-tooltip"]),l=o("button",["button","prev-button"]);l.innerHTML="&laquo;";const a=o("button",["button","current-button"]);a.innerHTML="1";const u=o("button",["button","next-button"]);u.innerHTML="&raquo;";const p=o("div",["tooltip","next-tooltip"]);s.append(c,l,a,u,p);const d=o("div",["loading"]),f=o("span",["icon","icon-loading","animate-spin"]);d.appendChild(f);const y=o("div",["no-results"]);y.innerHTML="Ooops! Your request is too unique. Try another one!",n.append(t,i,s,d,y);const h=document.body.getElementsByTagName("script")[0];document.body.insertBefore(n,h)}();const b=document.querySelector(".clips"),x=document.querySelector(".navigation-buttons");document.querySelector(".icon-search").addEventListener("click",()=>{u(),a()}),document.querySelector(".input").addEventListener("keyup",n=>{13===n.keyCode&&(u(),a())}),b.addEventListener("mousedown",m,!1),b.addEventListener("touchstart",m,!1),b.addEventListener("mousemove",g,!1),b.addEventListener("touchmove",g,!1),b.addEventListener("mouseup",v,!1),b.addEventListener("touchend",v,!1),x.addEventListener("mousedown",d),document.addEventListener("mouseup",d),x.addEventListener("click",function(n){const{target:t}=n;if(!t.classList.contains("button"))return;const e=document.querySelector(".clips"),o=document.querySelector(".prev-button"),r=+getComputedStyle(e).getPropertyValue("--clips-on-page");!function(n,t,e,o,r){if(e.classList.contains("next-button")){let e=+getComputedStyle(o).getPropertyValue("--index"),i=+getComputedStyle(o).getPropertyValue("--count");i+=t,e+=1,o.style.setProperty("--count",i),o.style.setProperty("--index",e),r.style.setProperty("pointer-events","auto"),i>=n-3&&a("additionalClips")}}(e.children.length,r,t,e,o),function(n,t,e,o){if(t.classList.contains("prev-button")){let t=+getComputedStyle(e).getPropertyValue("--index"),r=+getComputedStyle(e).getPropertyValue("--count");r-=n,t-=1,e.style.setProperty("--index",t),e.style.setProperty("--count",r),t||o.style.setProperty("pointer-events","none")}}(r,t,e,o),p()}),window.addEventListener("resize",function(){const n=document.querySelector(".clips"),t=+getComputedStyle(n).getPropertyValue("--clips-on-page"),e=+getComputedStyle(n).getPropertyValue("--index")*t;!function(n,t){const e=document.querySelector(".clips"),o=Math.floor(t/n);e.style.setProperty("--clips-on-page",n),e.style.setProperty("--index",o),e.style.setProperty("--count",n*(o+1))}(function(){const n=document.documentElement.clientWidth;return n<440?1:n<680&&n>440?2:n>680&&n<910?3:4}(),e),p()})}]);
//# sourceMappingURL=app.bundle.js.map