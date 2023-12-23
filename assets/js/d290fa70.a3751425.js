"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[3199],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var l=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=l.createContext({}),s=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),p=s(n),k=o,h=p["".concat(c,".").concat(k)]||p[k]||u[k]||a;return n?l.createElement(h,i(i({ref:e},d),{},{components:n})):l.createElement(h,i({ref:e},d))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=k;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r[p]="string"==typeof t?t:o,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48668:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=n(87462),o=(n(67294),n(3905));const a={},i="Get account balances",r={type:"api",id:"get-account-balances",unversionedId:"get-account-balances",title:"Get account balances",description:"",slug:"/get-account-balances",frontMatter:{},api:{description:"Retrieves total account balance information for a given Address or Contract Identifier. This includes the balances of  STX Tokens, Fungible Tokens and Non-Fungible Tokens for the account.",tags:["Accounts"],operationId:"get_account_balance",parameters:[{name:"principal",in:"path",description:"Stacks address or a Contract identifier",required:!0,schema:{type:"string"},example:"SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0"},{name:"unanchored",in:"query",description:"Include transaction data from unanchored (i.e. unconfirmed) microblocks",required:!1,schema:{type:"boolean",default:!1},example:!0},{name:"until_block",in:"query",description:"returned data representing the state up until that point in time, rather than the current block.",required:!1,schema:{type:"string"},example:6e4}],responses:{200:{description:"Success",content:{"application/json":{schema:{description:"GET request that returns address balances",title:"AddressBalanceResponse",additionalProperties:!1,type:"object",required:["stx","fungible_tokens","non_fungible_tokens"],properties:{stx:{title:"StxBalance",type:"object",additionalProperties:!1,required:["balance","total_sent","total_received","total_fees_sent","total_miner_rewards_received","lock_tx_id","locked","lock_height","burnchain_lock_height","burnchain_unlock_height"],properties:{balance:{type:"string"},total_sent:{type:"string"},total_received:{type:"string"},total_fees_sent:{type:"string"},total_miner_rewards_received:{type:"string"},lock_tx_id:{type:"string",description:"The transaction where the lock event occurred. Empty if no tokens are locked."},locked:{type:"string",description:"The amount of locked STX, as string quoted micro-STX. Zero if no tokens are locked."},lock_height:{type:"integer",description:"The STX chain block height of when the lock event occurred. Zero if no tokens are locked."},burnchain_lock_height:{type:"integer",description:"The burnchain block height of when the lock event occurred. Zero if no tokens are locked."},burnchain_unlock_height:{type:"integer",description:"The burnchain block height of when the tokens unlock. Zero if no tokens are locked."}}},fungible_tokens:{type:"object",additionalProperties:{anyOf:[{title:"FtBalance",type:"object",additionalProperties:!1,required:["balance","total_sent","total_received"],properties:{balance:{type:"string"},total_sent:{type:"string"},total_received:{type:"string"}}}]}},non_fungible_tokens:{type:"object",additionalProperties:{anyOf:[{title:"NftBalance",type:"object",additionalProperties:!1,required:["count","total_sent","total_received"],properties:{count:{type:"string"},total_sent:{type:"string"},total_received:{type:"string"}}}]}},token_offering_locked:{description:"Token Offering Locked",title:"AddressTokenOfferingLocked",type:"object",additionalProperties:!1,required:["total_locked","total_unlocked","unlock_schedule"],properties:{total_locked:{type:"string",description:"Micro-STX amount still locked at current block height."},total_unlocked:{type:"string",description:"Micro-STX amount unlocked at current block height."},unlock_schedule:{type:"array",items:{description:"Unlock schedule amount and block height",title:"AddressUnlockSchedule",type:"object",additionalProperties:!1,required:["amount","block_height"],properties:{amount:{type:"string",description:"Micro-STX amount locked at this block height."},block_height:{type:"number"}}}}}}}},example:{stx:{balance:"1000000",total_sent:"0",total_received:"1000000",lock_tx_id:"0xec94e7d20af8979b44d17a0520c126bf742b999a0fc7ddbcbe0ab21b228ecc8c",locked:"50000",lock_height:100,burnchain_lock_height:100,burnchain_unlock_height:200},fungible_tokens:{},non_fungible_tokens:{}}}}}},method:"get",path:"/extended/v1/address/{principal}/balances",servers:[{url:"https://api.mainnet.hiro.so/",description:"Mainnet"},{url:"https://api.testnet.hiro.so/",description:"Testnet"},{url:"http://localhost:3999/",description:"Local"}],info:{title:"Stacks Blockchain API",version:"v7.3.0",description:'Welcome to the API reference overview for the <a href="https://docs.hiro.so/get-started/stacks-blockchain-api">Stacks Blockchain API</a>.\n\n<a href="https://hirosystems.github.io/stacks-blockchain-api/collection.json" download="stacks-api-collection.json">Download Postman collection</a>\n'},postman:{name:"Get account balances",description:{content:"Retrieves total account balance information for a given Address or Contract Identifier. This includes the balances of  STX Tokens, Fungible Tokens and Non-Fungible Tokens for the account.",type:"text/plain"},url:{path:["extended","v1","address",":principal","balances"],host:["{{baseUrl}}"],query:[{description:{content:"Include transaction data from unanchored (i.e. unconfirmed) microblocks",type:"text/plain"},key:"unanchored",value:"false"},{description:{content:"returned data representing the state up until that point in time, rather than the current block.",type:"text/plain"},key:"until_block",value:"<string>"}],variable:[{description:{content:"(Required) Stacks address or a Contract identifier",type:"text/plain"},type:"any",value:"<string>",key:"principal"}]},method:"GET"}},source:"@site/openapi/stacks-blockchain-api.json",sourceDirName:".",permalink:"/doc/api/get-account-balances",previous:{title:"Call read-only function",permalink:"/doc/api/call-read-only-function"},next:{title:"Get account STX balance",permalink:"/doc/api/get-account-stx-balance"}},c=[],s={toc:c},d="wrapper";function p(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-account-balances"},"Get account balances"),(0,o.kt)("p",null,"Retrieves total account balance information for a given Address or Contract Identifier. This includes the balances of  STX Tokens, Fungible Tokens and Non-Fungible Tokens for the account."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"principal"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Stacks address or a Contract identifier")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"unanchored"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Include transaction data from unanchored (i.e. unconfirmed) microblocks")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: true"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"until_block"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"returned data representing the state up until that point in time, rather than the current block.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 60000"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Success"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"stx"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"balance"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_sent"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_received"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_fees_sent"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_miner_rewards_received"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"lock_tx_id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The transaction where the lock event occurred. Empty if no tokens are locked.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"locked"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The amount of locked STX, as string quoted micro-STX. Zero if no tokens are locked.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"lock_height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The STX chain block height of when the lock event occurred. Zero if no tokens are locked.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"burnchain_lock_height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The burnchain block height of when the lock event occurred. Zero if no tokens are locked.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"burnchain_unlock_height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The burnchain block height of when the tokens unlock. Zero if no tokens are locked.")))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fungible_tokens"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"non_fungible_tokens"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"token_offering_locked"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Token Offering Locked")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_locked"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Micro-STX amount still locked at current block height.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"total_unlocked"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Micro-STX amount unlocked at current block height.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"unlock_schedule"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"amount"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Micro-STX amount locked at this block height.")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"block_height"),(0,o.kt)("span",{style:{opacity:"0.6"}}," number")))))))))))))))))))}p.isMDXComponent=!0}}]);