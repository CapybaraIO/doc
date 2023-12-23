"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[765],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),s=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),d=s(n),k=a,y=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?l.createElement(y,i(i({ref:e},c),{},{components:n})):l.createElement(y,i({ref:e},c))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=k;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[d]="string"==typeof t?t:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},78114:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const o={},i="Fungible Token Metadata",r={type:"api",id:"fungible-token-metadata",unversionedId:"fungible-token-metadata",title:"Fungible Token Metadata",description:"",slug:"/fungible-token-metadata",frontMatter:{},api:{operationId:"getFtMetadata",tags:["Tokens"],description:"Retrieves metadata for a SIP-010 Fungible Token",parameters:[{schema:{title:"Localization",type:"string"},examples:{"es-MX":{value:"es-MX"},jp:{value:"jp"}},in:"query",name:"locale",required:!1,description:"Metadata localization to retrieve"},{schema:{title:"Fungible Token Contract Principal",type:"string",pattern:"^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{28,41}\\.[a-zA-Z]([a-zA-Z0-9]|[-_]){0,39}$",example:"SP32XCD69XPS3GKDEXAQ29PJRDSD5AR643GNEEBXZ.fari-token"},example:"SP32XCD69XPS3GKDEXAQ29PJRDSD5AR643GNEEBXZ.fari-token",in:"path",name:"principal",required:!0,description:"Principal for the contract which owns the SIP-010 token"}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{title:"Ft Metadata Response",type:"object",properties:{name:{type:"string",example:"Wrapped USD"},symbol:{type:"string",example:"xUSD"},decimals:{type:"integer",example:8},total_supply:{type:"string",example:"9999980000000"},token_uri:{format:"uri",type:"string",example:"ipfs://ipfs/Qmf9yDYuPTrp8NRUFf8xxDd5Ud24Dx9uYMwMn8o8G2cWPW/12200.json"},description:{type:"string",example:"Heavy hitters, all-stars and legends of the game join forces to create a collection of unique varsity jackets"},image_uri:{format:"uri",type:"string",example:"https://ipfs.io/ipfs/QmZMqhh2ztwuZ3Y8PyEp2z5auyH3TCm3nnr5ZfjjgDjd5q/12199.png"},image_canonical_uri:{format:"uri",type:"string",example:"ipfs://ipfs/QmZMqhh2ztwuZ3Y8PyEp2z5auyH3TCm3nnr5ZfjjgDjd5q/12199.png"},tx_id:{type:"string",example:"0xef2ac1126e16f46843228b1dk4830e19eb7599129e4jf392cab9e65ae83a45c0"},sender_address:{type:"string",example:"ST399W7Z9WS0GMSNQGJGME5JAENKN56D65VGMGKGA"},metadata:{title:"Metadata",type:"object",properties:{sip:{type:"integer",example:16},name:{type:"string",example:"Satoshi's Team #12200"},description:{type:"string",example:"Heavy hitters, all-stars and legends of the game join forces to create a collection of unique varsity jackets"},image:{format:"uri",type:"string",example:"ipfs://ipfs/QmZMqhh2ztwuZ3Y8PyEp2z5auyH3TCm3nnr5ZfjjgDjd5q/12199.png"},cached_image:{format:"uri",type:"string",example:"https://ipfs.io/ipfs/QmZMqhh2ztwuZ3Y8PyEp2z5auyH3TCm3nnr5ZfjjgDjd5q/12199.png"},attributes:{type:"array",items:{title:"Metadata Attribute",type:"object",properties:{trait_type:{type:"string",example:"Background"},display_type:{type:"string",example:"string"},value:{title:"Metadata Value",example:"value"}},required:["trait_type","value"]}},properties:{title:"Metadata Properties",type:"object",additionalProperties:{title:"Metadata Value",example:"value"},example:{collection:"Foo Collection",total_supply:"10000"}},localization:{title:"Metadata Localization",type:"object",properties:{uri:{format:"uri",type:"string",example:"http://token.com/metadata?hl={locale}"},default:{type:"string",example:"en"},locales:{type:"array",items:{type:"string"},example:["en","jp"]}},required:["uri","default","locales"]}},required:["sip"]}},required:["tx_id","sender_address"]}}}},404:{description:"Default Response",content:{"application/json":{schema:{title:"Not Found Error Response",anyOf:[{title:"Token Not Found Response",type:"object",properties:{error:{type:"string",enum:["Token not found"]}},required:["error"]},{title:"Contract Not Found Response",type:"object",properties:{error:{type:"string",enum:["Contract not found"]}},required:["error"]}]}}}},422:{description:"Default Response",content:{"application/json":{schema:{title:"Error Response",anyOf:[{title:"Token Metadata Fetch In Progress Response",type:"object",properties:{error:{type:"string",enum:["Token metadata fetch in progress"]}},required:["error"]},{title:"Locale Not Found Response",type:"object",properties:{error:{type:"string",enum:["Locale not found"]}},required:["error"]},{title:"Invalid Token Contract Response",type:"object",properties:{error:{type:"string",enum:["Token contract is invalid or does not conform to its token standard"]}},required:["error"]},{title:"Invalid Token Metadata Response",type:"object",properties:{error:{type:"string",enum:["Token metadata is unreachable or does not conform to SIP-016"]}},required:["error"]}]}}}}},method:"get",path:"/metadata/v1/ft/{principal}",servers:[{url:"https://api.hiro.so/",description:"mainnet"},{url:"https://api.testnet.hiro.so/",description:"testnet"}],info:{title:"Token Metadata API",description:"Service that indexes metadata for every SIP-009, SIP-010, and SIP-013 Token in the Stacks blockchain and exposes it via REST API endpoints.",version:"v0.4.0"},postman:{name:"Fungible Token Metadata",description:{content:"Retrieves metadata for a SIP-010 Fungible Token",type:"text/plain"},url:{path:["metadata","v1","ft",":principal"],host:["{{baseUrl}}"],query:[{description:{content:"Metadata localization to retrieve",type:"text/plain"},key:"locale",value:"<string>"}],variable:[{description:{content:"(Required) Principal for the contract which owns the SIP-010 token",type:"text/plain"},type:"any",value:"<string>",key:"principal"}]},method:"GET"}},source:"@site/openapi/token-metadata-api.json",sourceDirName:".",permalink:"/doc/metadata/fungible-token-metadata",previous:{title:"Fungible Tokens",permalink:"/doc/metadata/fungible-tokens"},next:{title:"Non-Fungible Token Metadata",permalink:"/doc/metadata/non-fungible-token-metadata"}},p=[],s={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fungible-token-metadata"},"Fungible Token Metadata"),(0,a.kt)("p",null,"Retrieves metadata for a SIP-010 Fungible Token"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"principal"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Fungible Token Contract Principal"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," Value must match regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{28,41}\\.[a-zA-Z]([a-zA-Z0-9]|[-_]){0,39}$"))),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Principal for the contract which owns the SIP-010 token")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: SP32XCD69XPS3GKDEXAQ29PJRDSD5AR643GNEEBXZ.fari-token"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"locale"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Localization"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Metadata localization to retrieve")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("div",null,"Example (es-MX): es-MX"),(0,a.kt)("div",null,"Example (jp): jp")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Default Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"symbol"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"decimals"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"total_supply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"token_uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"image_uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"image_canonical_uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tx_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sender_address"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sip"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"image"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"cached_image"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"attributes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"trait_type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"display_type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"value"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Metadata Value"))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"localization"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uri"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"default"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"locales"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]")))))))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"404")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Default Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Default Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))))))}d.isMDXComponent=!0}}]);