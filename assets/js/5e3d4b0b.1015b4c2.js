"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[118],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var l=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?l.createElement(k,r(r({ref:e},p),{},{components:n})):l.createElement(k,r({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:o,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6112:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),o=(n(67294),n(3905));const a={},r="Get total and unlocked STX supply",i={type:"api",id:"get-total-and-unlocked-stx-supply",unversionedId:"get-total-and-unlocked-stx-supply",title:"Get total and unlocked STX supply",description:"",slug:"/get-total-and-unlocked-stx-supply",frontMatter:{},api:{tags:["Info"],operationId:"get_stx_supply",description:"Retrieves the total and unlocked STX supply. More information on Stacking can be found [here] (https://docs.stacks.co/understand-stacks/stacking).\n**Note:** This uses the estimated future total supply for the year 2050.\n",parameters:[{in:"query",name:"height",required:!1,schema:{type:"number"},example:200,description:"Supply details are queried from specified block height. If the block height is not specified, the latest block height is taken as default value. Note that the `block height` is referred to the stacks blockchain."}],responses:{200:{description:"Success",content:{"application/json":{example:{unlocked_percent:"71.99",total_stx:"1352464600.000000",unlocked_stx:"973705260.219817",block_height:3210},schema:{description:"GET request that returns network target block times",title:"GetStxSupplyResponse",type:"object",additionalProperties:!1,required:["unlocked_percent","total_stx","unlocked_stx","block_height"],properties:{unlocked_percent:{type:"string",description:"String quoted decimal number of the percentage of STX that have unlocked"},total_stx:{type:"string",description:"String quoted decimal number of the total possible number of STX"},unlocked_stx:{type:"string",description:"String quoted decimal number of the STX that have been mined or unlocked"},block_height:{type:"integer",description:"The block height at which this information was queried"}}}}}}},method:"get",path:"/extended/v1/stx_supply",servers:[{url:"https://api.mainnet.hiro.so/",description:"Mainnet"},{url:"https://api.testnet.hiro.so/",description:"Testnet"},{url:"http://localhost:3999/",description:"Local"}],info:{title:"Stacks Blockchain API",version:"v7.3.0",description:'Welcome to the API reference overview for the <a href="https://docs.hiro.so/get-started/stacks-blockchain-api">Stacks Blockchain API</a>.\n\n<a href="https://hirosystems.github.io/stacks-blockchain-api/collection.json" download="stacks-api-collection.json">Download Postman collection</a>\n'},postman:{name:"Get total and unlocked STX supply",description:{content:"Retrieves the total and unlocked STX supply. More information on Stacking can be found [here] (https://docs.stacks.co/understand-stacks/stacking).\n**Note:** This uses the estimated future total supply for the year 2050.\n",type:"text/plain"},url:{path:["extended","v1","stx_supply"],host:["{{baseUrl}}"],query:[{description:{content:"Supply details are queried from specified block height. If the block height is not specified, the latest block height is taken as default value. Note that the `block height` is referred to the stacks blockchain.",type:"text/plain"},key:"height",value:"<number>"}],variable:[]},method:"GET"}},source:"@site/openapi/stacks-blockchain-api.json",sourceDirName:".",permalink:"/doc/api/get-total-and-unlocked-stx-supply",previous:{title:"Get a given network's target block time",permalink:"/doc/api/get-a-given-networks-target-block-time"},next:{title:"Get total STX supply in plain text format",permalink:"/doc/api/get-total-stx-supply-in-plain-text-format"}},s=[],c={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-total-and-unlocked-stx-supply"},"Get total and unlocked STX supply"),(0,o.kt)("p",null,"Retrieves the total and unlocked STX supply. More information on Stacking can be found ","[here]"," (",(0,o.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/stacking"},"https://docs.stacks.co/understand-stacks/stacking"),").\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," This uses the estimated future total supply for the year 2050."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," number"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Supply details are queried from specified block height. If the block height is not specified, the latest block height is taken as default value. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"block height")," is referred to the stacks blockchain.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 200"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Success"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"unlocked_percent"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"String quoted decimal number of the percentage of STX that have unlocked")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_stx"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"String quoted decimal number of the total possible number of STX")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"unlocked_stx"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"String quoted decimal number of the STX that have been mined or unlocked")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"block_height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The block height at which this information was queried"))))))))))))}d.isMDXComponent=!0}}]);