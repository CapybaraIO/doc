"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[2341],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=p(n),k=i,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=k;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[u]="string"==typeof t?t:i,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12016:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const r={},o="Inscription Count per Block",a={type:"api",id:"inscription-count-per-block",unversionedId:"inscription-count-per-block",title:"Inscription Count per Block",description:"",slug:"/inscription-count-per-block",frontMatter:{},api:{operationId:"getStatsInscriptionCount",tags:["Statistics"],description:"Retrieves statistics on the number of inscriptions revealed per block",parameters:[{schema:{title:"Block Height",type:"string",pattern:"^[0-9]+$"},example:777678,in:"query",name:"from_block_height",required:!1,description:"Bitcoin block height"},{schema:{title:"Block Height",type:"string",pattern:"^[0-9]+$"},example:777678,in:"query",name:"to_block_height",required:!1,description:"Bitcoin block height"}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",properties:{results:{type:"array",items:{type:"object",properties:{block_height:{examples:["778921"],type:"string"},block_hash:{examples:["0000000000000000000452773967cdd62297137cdaf79950c5e8bb0c62075133"],type:"string"},inscription_count:{examples:["100"],type:"string"},inscription_count_accum:{examples:["3100"],type:"string"},timestamp:{examples:[167773317e4],type:"integer"}},required:["block_height","block_hash","inscription_count","inscription_count_accum","timestamp"]}}},required:["results"]}}}},404:{description:"Default Response",content:{"application/json":{schema:{title:"Not Found Response",type:"object",properties:{error:{type:"string",enum:["Not found"]}},required:["error"]}}}}},method:"get",path:"/ordinals/v1/stats/inscriptions",servers:[{url:"https://api.hiro.so/",description:"mainnet"}],info:{title:"Ordinals API",description:"A service that indexes Bitcoin Ordinals data and exposes it via REST API endpoints.",version:"v1.1.0"},postman:{name:"Inscription Count per Block",description:{content:"Retrieves statistics on the number of inscriptions revealed per block",type:"text/plain"},url:{path:["ordinals","v1","stats","inscriptions"],host:["{{baseUrl}}"],query:[{description:{content:"Bitcoin block height",type:"text/plain"},key:"from_block_height",value:"<string>"},{description:{content:"Bitcoin block height",type:"text/plain"},key:"to_block_height",value:"<string>"}],variable:[]},method:"GET"}},source:"@site/openapi/ordinals-api.json",sourceDirName:".",permalink:"/doc/ordinals/inscription-count-per-block",previous:{title:"Satoshi Inscriptions",permalink:"/doc/ordinals/satoshi-inscriptions"},next:{title:"BRC-20 Tokens",permalink:"/doc/ordinals/brc-20-tokens"}},s=[],p={toc:s},c="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inscription-count-per-block"},"Inscription Count per Block"),(0,i.kt)("p",null,"Retrieves statistics on the number of inscriptions revealed per block"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"from_block_height"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Block Height"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"^[0-9]+$"))),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Bitcoin block height")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 777678"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"to_block_height"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Block Height"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"^[0-9]+$"))),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Bitcoin block height")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 777678"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Default Response"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"results"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"block_height"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"block_hash"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"inscription_count"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"inscription_count_accum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"timestamp"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")))))))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"404")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Default Response"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"Not found"),"]"))))))))))))}u.isMDXComponent=!0}}]);