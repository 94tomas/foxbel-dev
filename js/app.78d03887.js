(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3b332439","chunk-566447b1":"e4dcf0f4"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-566447b1":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-566447b1":"a9479e47"}[t]+".css",i=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],p.parentNode.removeChild(p),a(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/foxbel-dev/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},i=[],o={name:"App",mounted:function(){window.DZ.init({appId:"475022",channelUrl:"http://localhost:8080/"})}},s=o,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=Object(l["a"])(s,r,i,!1,null,null,null),f=p.exports;u()(p,{VApp:d["a"]});a("d3b7"),a("3ca3"),a("ddb0");var v=a("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pt-5"},[n("v-card",{staticClass:"c-card mb-5",attrs:{elevation:"0"}},[n("div",{staticClass:"d-flex flex-no-wrap"},[n("a",{staticClass:"c-banner",attrs:{href:"javascript:;"}},[n("div",{staticClass:"wrap-img",style:{backgroundImage:"url("+a("dd2b")+")"}},[n("svg",{staticClass:"svg-inline--fa fa-play fa-w-14 fa-5x ",attrs:{width:"60","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"play",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",color:"white"}},[n("path",{attrs:{fill:"currentColor",d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}})])])]),n("div",{staticClass:"c-content d-flex flex-column justify-space-between pa-3",style:{backgroundImage:"url("+a("85c5")+")"}},[n("div",[n("v-card-title",[t._v(" Adele 21 ")]),n("v-card-subtitle",{staticClass:"white--text"},[t._v(" Lo mejor de Adele "),n("span",{staticClass:"ml-4 secondary--text"},[t._v("321, 123 seguidores")])]),n("v-card-text",{staticClass:"pb-0"},[n("v-list",{staticClass:"pa-0",attrs:{"three-line":""}},[n("v-list-item",{staticClass:"pa-0"},[n("v-list-item-content",{staticClass:"pa-0"},[n("v-list-item-subtitle",[t._v("late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’")])],1)],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{staticClass:"text-capitalize",attrs:{height:"31px",rounded:"",width:"115px",color:"primary",elevation:"0"}},[t._v(" Reproducir ")]),n("v-btn",{staticClass:"ml-4",attrs:{height:"31px",outlined:"",rounded:"",width:"115px",color:"primary",elevation:"0"}},[t._v(" Seguir ")]),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"ml-4",attrs:{dark:"",icon:""}},"v-btn",r,!1),a),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}])},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-title",[t._v("Opciòn 1")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-title",[t._v("Opciòn 2")])],1)],1)],1)],1)],1)])]),n("div",{staticClass:"text-h5 primary--text mb-5"},[t._v("Resultados")]),n("div",{staticClass:"c-grid"},t._l(10,(function(e,r){return n("div",{key:r,staticClass:"c-col"},[n("div",[n("a",{staticClass:"c-banner",attrs:{href:"javascript:;"}},[n("div",{staticClass:"wrap-img",style:{backgroundImage:"url("+a("dd2b")+")"}},[n("svg",{staticClass:"svg-inline--fa fa-play fa-w-14 fa-5x ",attrs:{width:"32","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"play",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",color:"white"}},[n("path",{attrs:{fill:"currentColor",d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}})])]),n("v-btn",{attrs:{dark:"",icon:"",absolute:"","z-index":"2"}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1)]),n("div",{staticClass:"c-title"},[t._v("Who You Are")]),n("div",{staticClass:"c-subtitle"},[t._v("Jessie J")])])})),0)],1)},h=[],b={},g=b,y=a("8336"),w=a("b0af"),C=a("99d9"),x=a("a523"),_=a("132d"),k=a("8860"),j=a("da13"),L=a("5d23"),V=a("e449"),O=Object(l["a"])(g,m,h,!1,null,null,null),S=O.exports;u()(O,{VBtn:y["a"],VCard:w["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardText:C["c"],VCardTitle:C["d"],VContainer:x["a"],VIcon:_["a"],VList:k["a"],VListItem:j["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMenu:V["a"]}),n["a"].use(v["a"]);var A=[{path:"/foxbel-dev",name:"Layout",component:function(){return a.e("chunk-566447b1").then(a.bind(null,"0313"))},children:[{path:"/",name:"Home",component:S,meta:{auth:!0}},{path:"/recientes",name:"Recent",component:function(){return a.e("about").then(a.bind(null,"7413"))},meta:{auth:!0}}]},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"5326"))}}],E=new v["a"]({mode:"history",routes:A}),T=E,I=a("2f62");n["a"].use(I["a"]);var P=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=a("f309");n["a"].use(M["a"]);var B=new M["a"]({theme:{themes:{light:{primary:"#E86060",secondary:"#662323",accent:"#8c9eff",error:"#b71c1c"}}}});a("b107");n["a"].config.productionTip=!1,new n["a"]({router:T,store:P,vuetify:B,render:function(t){return t(f)}}).$mount("#app")},"85c5":function(t,e,a){t.exports=a.p+"img/adele_banner.24091cf9.jpg"},b107:function(t,e,a){},dd2b:function(t,e,a){t.exports=a.p+"img/adele_21.1b8861c8.jpg"}});
//# sourceMappingURL=app.78d03887.js.map