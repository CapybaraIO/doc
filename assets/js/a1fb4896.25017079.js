"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24323:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const a={},l="Get inbound STX transfers",s={type:"api",id:"get-inbound-stx-transfers",unversionedId:"get-inbound-stx-transfers",title:"Get inbound STX transfers",description:"",slug:"/get-inbound-stx-transfers",frontMatter:{},api:{description:"Retrieves a list of STX transfers with memos to the given principal. This includes regular transfers from a stx-transfer transaction type,\nand transfers from contract-call transactions a the `send-many-memo` bulk sending contract.\n",tags:["Accounts"],operationId:"get_account_inbound",parameters:[{name:"principal",in:"path",description:"Stacks address or a Contract identifier",required:!0,schema:{type:"string"},example:"SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0"},{name:"limit",in:"query",description:"number of items to return",required:!1,schema:{type:"integer"}},{name:"offset",in:"query",description:"number of items to skip",required:!1,schema:{type:"integer"},example:42e3},{name:"height",in:"query",description:"Filter for transfers only at this given block height",required:!1,schema:{type:"number"}},{name:"unanchored",in:"query",description:"Include transaction data from unanchored (i.e. unconfirmed) microblocks",required:!1,schema:{type:"boolean",default:!1},example:!0},{name:"until_block",in:"query",description:"returned data representing the state up until that point in time, rather than the current block. Note - Use either of the query parameters but not both at a time.",required:!1,schema:{type:"string"},example:6e4}],responses:{200:{description:"Success",content:{"application/json":{schema:{description:"GET request that returns a list of inbound STX transfers with a memo",title:"AddressStxInboundListResponse",additionalProperties:!1,type:"object",required:["results","limit","offset","total"],properties:{limit:{type:"integer",maximum:30},offset:{type:"integer"},total:{type:"integer"},results:{type:"array",items:{title:"InboundStxTransfer",description:"A inbound STX transfer with a memo",type:"object",additionalProperties:!1,required:["sender","amount","memo","block_height","tx_id","transfer_type","tx_index"],properties:{sender:{type:"string",description:"Principal that sent this transfer"},amount:{type:"string",description:"Transfer amount in micro-STX as integer string"},memo:{type:"string",description:"Hex encoded memo bytes associated with the transfer"},block_height:{type:"number",description:"Block height at which this transfer occurred"},tx_id:{type:"string",description:"The transaction ID in which this transfer occurred"},transfer_type:{type:"string",enum:["bulk-send","stx-transfer","stx-transfer-memo"],description:"Indicates if the transfer is from a stx-transfer transaction or a contract-call transaction"},tx_index:{type:"number",description:"Index of the transaction within a block"}}}}}},example:{limit:20,offset:0,total:0,results:[{sender:"ST1RZG804V6Y0N4XHQD3ZE2GE3XSCV3VHRKMA3GB0",amount:"123456789",memo:"0x00000000000000000000000000000000000000000000000000000000000000000000",block_height:12345,tx_id:"0x29e25515652dad41ef675bd0670964e3d537b80ec19cf6ca6f1dd65d5bc642c5",transfer_type:"bulk-send",tx_index:3}]}}}}},method:"get",path:"/extended/v1/address/{principal}/stx_inbound",servers:[{url:"https://api.mainnet.hiro.so/",description:"Mainnet"},{url:"https://api.testnet.hiro.so/",description:"Testnet"},{url:"http://localhost:3999/",description:"Local"}],info:{title:"Stacks Blockchain API",version:"v7.3.0",description:'Welcome to the API reference overview for the <a href="https://docs.hiro.so/get-started/stacks-blockchain-api">Stacks Blockchain API</a>.\n\n<a href="https://hirosystems.github.io/stacks-blockchain-api/collection.json" download="stacks-api-collection.json">Download Postman collection</a>\n'},postman:{name:"Get inbound STX transfers",description:{content:"Retrieves a list of STX transfers with memos to the given principal. This includes regular transfers from a stx-transfer transaction type,\nand transfers from contract-call transactions a the `send-many-memo` bulk sending contract.\n",type:"text/plain"},url:{path:["extended","v1","address",":principal","stx_inbound"],host:["{{baseUrl}}"],query:[{description:{content:"number of items to return",type:"text/plain"},key:"limit",value:"<integer>"},{description:{content:"number of items to skip",type:"text/plain"},key:"offset",value:"<integer>"},{description:{content:"Filter for transfers only at this given block height",type:"text/plain"},key:"height",value:"<number>"},{description:{content:"Include transaction data from unanchored (i.e. unconfirmed) microblocks",type:"text/plain"},key:"unanchored",value:"false"},{description:{content:"returned data representing the state up until that point in time, rather than the current block. Note - Use either of the query parameters but not both at a time.",type:"text/plain"},key:"until_block",value:"<string>"}],variable:[{description:{content:"(Required) Stacks address or a Contract identifier",type:"text/plain"},type:"any",value:"<string>",key:"principal"}]},method:"GET"}},source:"@site/openapi/stacks-blockchain-api.json",sourceDirName:".",permalink:"/doc/api/get-inbound-stx-transfers",previous:{title:"Get account assets",permalink:"/doc/api/get-account-assets"},next:{title:"Get nft events",permalink:"/doc/api/get-nft-events"}},o=[],c={toc:o},p="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-inbound-stx-transfers"},"Get inbound STX transfers"),(0,i.kt)("p",null,"Retrieves a list of STX transfers with memos to the given principal. This includes regular transfers from a stx-transfer transaction type,\nand transfers from contract-call transactions a the ",(0,i.kt)("inlineCode",{parentName:"p"},"send-many-memo")," bulk sending contract."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"principal"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Stacks address or a Contract identifier")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"limit"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"number of items to return")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"offset"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"number of items to skip")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 42000"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"height"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Filter for transfers only at this given block height")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"unanchored"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Include transaction data from unanchored (i.e. unconfirmed) microblocks")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: true"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"until_block"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"returned data representing the state up until that point in time, rather than the current block. Note - Use either of the query parameters but not both at a time.")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 60000"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Success"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"limit"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," value \u2264 30")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"offset"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"total"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"results"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sender"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Principal that sent this transfer")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"amount"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Transfer amount in micro-STX as integer string")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"memo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Hex encoded memo bytes associated with the transfer")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"block_height"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Block height at which this transfer occurred")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tx_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The transaction ID in which this transfer occurred")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"transfer_type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"bulk-send"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stx-transfer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stx-transfer-memo"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Indicates if the transfer is from a stx-transfer transaction or a contract-call transaction")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tx_index"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Index of the transaction within a block"))))))))))))))))}d.isMDXComponent=!0}}]);