(()=>{"use strict";var e,r={183:(e,r,s)=>{s.d(r,{Z:()=>d});var t=s(661),n=s(537),o=s(771),i=s.n(o),a=s(997);const l=i()({resolved:{},chunkName:()=>"pages-RedPage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!s.m[r]},importAsync:()=>s.e(645).then(s.bind(s,952)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return s(r)},resolve:()=>952}),u=i()({resolved:{},chunkName:()=>"pages-BluePage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!s.m[r]},importAsync:()=>s.e(29).then(s.bind(s,175)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return s(r)},resolve:()=>175}),c=i()({resolved:{},chunkName:()=>"pages-UsersPage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!s.m[r]},importAsync:()=>s.e(850).then(s.bind(s,712)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return s(r)},resolve:()=>712}),d=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)("hr",{}),(0,a.jsxs)(t.Routes,{children:[(0,a.jsx)(t.Route,{path:"/red",element:(0,a.jsx)(l,{})}),(0,a.jsx)(t.Route,{path:"/blue",element:(0,a.jsx)(u,{})}),(0,a.jsx)(t.Route,{path:"/users/*",element:(0,a.jsx)(c,{})})]})]})},537:(e,r,s)=>{s.d(r,{Z:()=>o});var t=s(661),n=s(997);const o=()=>(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.Link,{to:"/red",children:"Red"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.Link,{to:"/blue",children:"Blue"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.Link,{to:"/users",children:"Users"})})]})},488:(e,r,s)=>{const t=require("react-dom/server");var n=s.n(t);const o=require("express");var i=s.n(o);const a=require("react-router-dom/server");var l=s(183);const u=require("path");var c=s.n(u);const d=require("fs");var p=s.n(d);const h=require("redux");var v=s(22);const y=require("redux-thunk");var g=s(955),m=s(477);function*x(){yield(0,m.all)([(0,g.HD)()])}const S=(0,h.combineReducers)({users:g.ZP});var j=s(701);const f=require("redux-saga");var E=s.n(f);const P=require("@loadable/server");var R=s(997);const b=c().resolve("./build/loadable-stats.json");JSON.parse(p().readFileSync(c().resolve("./build/asset-manifest.json"),"utf8"));const q=i()(),_=i().static(c().resolve("./build"),{index:!1});q.use(_),q.use((async(e,r,s)=>{const t=E()(),o=(0,h.createStore)(S,(0,h.applyMiddleware)(y.thunk,t));t.run(x);const i=t.run(x).toPromise(),u={done:!1,promises:[]},c=new P.ChunkExtractor({statsFile:b}),d=(0,R.jsx)(P.ChunkExtractorManager,{extractor:c,children:(0,R.jsx)(j.ZP.Provider,{value:u,children:(0,R.jsx)(v.Provider,{store:o,children:(0,R.jsx)(a.StaticRouter,{location:e.url,context:{},children:(0,R.jsx)(l.Z,{})})})})});n().renderToStaticMarkup(d),o.dispatch(f.END);try{await i,await Promise.all(u.promises)}catch(e){return r.status(500)}u.done=!0;const p=n().renderToString(d),g=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),m={scripts:"<script>__PRELOADED_STATE__= ".concat(g,"<\/script>")+c.getScriptTags(),links:c.getLinkTags(),styles:c.getStyleTags()};r.send(function(e,r){return'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n  <meta charset="utf-8" />\n  <link rel="shortcut icon" href="/favicon.ico" />\n  <meta \n  name="viewport"\n  content="width=device-width,initial-scale=1, shrink-to-fit=no"\n  />\n  <meta name="theme-color" content="#000000" />\n  <title>React App</title>\n  '.concat(r.styles,"\n  ").concat(r.links,'\n  </head>\n  <body>\n  <noscript>You need to enable JavaScript to run this app.</noscript>\n  <div id="root">').concat(e,"</div>\n  ").concat(r.scripts,"\n  </body>\n  </html>\n  ")}(p,m))})),q.listen(5e3,(()=>{console.log("Running on http://localhost:5000")}))},701:(e,r,s)=>{s.d(r,{ZP:()=>o,lm:()=>a,p9:()=>i});var t=s(689);const n=(0,t.createContext)(null),o=n,i=e=>{let{resolve:r}=e;const s=(0,t.useContext)(n);return s?(s.done||s.promises.push(Promise.resolve(r())),null):null},a=e=>{const r=(0,t.useContext)(n);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},955:(e,r,s)=>{s.d(r,{ZP:()=>j,PR:()=>p,Rf:()=>y,HD:()=>x});const t=require("axios");var n=s.n(t),o=s(477);const i="users/GET_USERS_PENDING",a="users/GET_USERS_SUCCESS",l="users/GET_USERS_FAILURE",u="users/GET_USER",c="users/GET_USER_SUCCESS",d="users/GET_USER_FAILURE",p=e=>({type:u,payload:e}),h=e=>({type:c,payload:e}),v=e=>({type:d,payload:e,error:!0}),y=()=>async e=>{try{e({type:i});const r=await n().get("https://jsonplaceholder.typicode.com/users");e({type:a,payload:r})}catch(r){throw e({type:l,error:!0,payload:r}),r}},g=e=>n().get("https://jsonplaceholder.typicode.com/users/".concat(e));function*m(e){try{const r=yield(0,o.call)(g,e.payload);yield(0,o.put)(h(r.data))}catch(e){yield(0,o.put)(v(e))}}function*x(){yield(0,o.takeEvery)(u,m)}const S={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}},j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i:return{...e,loading:{...e.loading,users:!0}};case a:return{...e,loading:{...e.loading,users:!1},users:r.payload.data};case l:return{...e,loading:{...e.loading,users:!1},error:{...e.error,users:r.payload}};case u:return{...e,loading:{...e.loading,user:!0},error:{...e.error,user:null}};case c:return{...e,loading:{...e.loading,user:!1},user:r.payload};case d:return{...e,loading:{...e.loading,user:!1},error:{...e.error,user:r.payload}};default:return e}}},771:e=>{e.exports=require("@loadable/component")},689:e=>{e.exports=require("react")},22:e=>{e.exports=require("react-redux")},661:e=>{e.exports=require("react-router-dom")},997:e=>{e.exports=require("react/jsx-runtime")},477:e=>{e.exports=require("redux-saga/effects")}},s={};function t(e){var n=s[e];if(void 0!==n)return n.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,t),o.exports}t.m=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,s)=>(t.f[s](e,r),r)),[])),t.u=e=>"js/"+{29:"pages-BluePage",645:"pages-RedPage",850:"pages-UsersPage"}[e]+".chunk.js",t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={179:1},t.f.require=(r,s)=>{e[r]||(r=>{var s=r.modules,n=r.ids,o=r.runtime;for(var i in s)t.o(s,i)&&(t.m[i]=s[i]);o&&o(t);for(var a=0;a<n.length;a++)e[n[a]]=1})(require("./"+t.u(r)))};t(488)})();