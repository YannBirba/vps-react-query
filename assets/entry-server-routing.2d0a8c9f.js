import{_ as n,s as p,d,r as u,q as r,h as c,C as _,t as f,j as v,O as y,P as h,M as x,L as E}from"./chunks/054b500b.js";const i={},C={},F={},m={},L=[],P={},R=!0,b=[],w={onBeforeRoute:null},O=null,S=Object.assign({"/renderer/_error.page.tsx":()=>n(()=>import("./renderer/error.page.4357833c.js"),["assets/renderer/error.page.4357833c.js","assets/chunks/0e184ced.js"]),"/src/pages/index/index.page.tsx":()=>n(()=>import("./src/pages/index/index.page.79e31ecf.js"),["assets/src/pages/index/index.page.79e31ecf.js","assets/chunks/0e184ced.js","assets/chunks/df64c74f.js"]),"/src/pages/users/index.page.tsx":()=>n(()=>import("./src/pages/users/index.page.fa854c67.js"),["assets/src/pages/users/index.page.fa854c67.js","assets/chunks/0e184ced.js","assets/chunks/10dc5d7a.js","assets/static/index.page.f1aef519.css"])}),z={...S};i[".page"]=z;const A=Object.assign({"/renderer/_default.page.client.tsx":()=>n(()=>import("./renderer/default.page.client.8e6202ed.js"),["assets/renderer/default.page.client.8e6202ed.js","assets/chunks/0e184ced.js","assets/chunks/df64c74f.js","assets/chunks/10dc5d7a.js","assets/static/default.page.client.d4835ae9.css"])}),I={...A};i[".page.client"]=I;const H=Object.freeze(Object.defineProperty({__proto__:null,invalidator:O,isGeneratedFile:R,neverLoaded:P,pageConfigGlobal:w,pageConfigs:b,pageFilesEager:C,pageFilesExportNamesEager:m,pageFilesExportNamesLazy:F,pageFilesLazy:i,pageFilesList:L},Symbol.toStringTag,{value:"Module"}));p(H);const g=d({withoutHash:!0});async function j(){const e=u();return r(e,{isHydration:!0,isBackwardNavigation:null}),r(e,await B(e._pageId)),T(),e}function T(){const e=d({withoutHash:!0});c(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function B(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return r(a,{_pageFilesAll:t,_pageConfigs:l}),r(a,await f(t,l,e)),t.filter(s=>s.fileType!==".page.server").forEach(s=>{var o;v(!(!((o=s.fileExports)===null||o===void 0)&&o.onBeforeRender),`\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y();h(!0);U();async function U(){var e,a;const t=await j();await x(t,!1),E(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
