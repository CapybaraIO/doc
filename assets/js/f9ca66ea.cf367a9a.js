"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[1480],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,u=p["".concat(l,".").concat(m)]||p[m]||k[m]||o;return n?a.createElement(u,r(r({ref:e},d),{},{components:n})):a.createElement(u,r({ref:e},d))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68568:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={},r="Non fungible tokens metadata for contract ID",s={type:"api",id:"non-fungible-tokens-metadata-for-contract-id",unversionedId:"non-fungible-tokens-metadata-for-contract-id",title:"Non fungible tokens metadata for contract ID",description:"",slug:"/non-fungible-tokens-metadata-for-contract-id",frontMatter:{},api:{operationId:"get_contract_nft_metadata",deprecated:!0,description:"**NOTE:** This endpoint is deprecated in favor of the [Token Metadata Service](https://github.com/hirosystems/token-metadata-service).\n\nRetrieves metadata for non fungible tokens for a given contract id. More information on Non-Fungible Tokens on the Stacks blockchain can be found [here](https://docs.stacks.co/write-smart-contracts/tokens#non-fungible-tokens-nfts).\n",tags:["Non-Fungible Tokens"],parameters:[{name:"contractId",in:"path",description:"token's contract id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Non fungible tokens metadata for contract id",content:{"application/json":{schema:{title:"NonFungibleTokenMetadata",type:"object",additionalProperties:!1,required:["token_uri","name","description","image_uri","image_canonical_uri","tx_id","sender_address"],properties:{token_uri:{type:"string",description:"An optional string that is a valid URI which resolves to this token's metadata. Can be empty."},name:{type:"string",description:"Identifies the asset to which this token represents"},description:{type:"string",description:"Describes the asset to which this token represents"},image_uri:{type:"string",description:"A URI pointing to a resource with mime type image/* representing the asset to which this token represents. The API may provide a URI to a cached resource, dependending on configuration. Otherwise, this can be the same value as the canonical image URI."},image_canonical_uri:{type:"string",description:"The original image URI specified by the contract. A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."},tx_id:{type:"string",description:"Tx id that deployed the contract"},sender_address:{type:"string",description:"principle that deployed the contract"}}},example:{token_uri:"https://pool.friedger.de/nft.json",name:"Friedger Pool",description:"Enjoying the stacking pool.",image_uri:"https://pool.friedger.de/nft.webp",image_canonical_uri:"https://pool.friedger.de/nft.webp",tx_id:"0xef2ac1126e16f46843228b1dk4830e19eb7599129e4jf392cab9e65ae83a45c0",sender_address:"ST399W7Z9WS0GMSNQGJGME5JAENKN56D65VGMGKGA"}}}}},method:"get",path:"/extended/v1/tokens/{contractId}/nft/metadata",servers:[{url:"https://api.mainnet.hiro.so/",description:"Mainnet"},{url:"https://api.testnet.hiro.so/",description:"Testnet"},{url:"http://localhost:3999/",description:"Local"}],info:{title:"Stacks Blockchain API",version:"v7.3.0",description:'Welcome to the API reference overview for the <a href="https://docs.hiro.so/get-started/stacks-blockchain-api">Stacks Blockchain API</a>.\n\n<a href="https://hirosystems.github.io/stacks-blockchain-api/collection.json" download="stacks-api-collection.json">Download Postman collection</a>\n'},postman:{name:"Non fungible tokens metadata for contract ID",description:{content:"**NOTE:** This endpoint is deprecated in favor of the [Token Metadata Service](https://github.com/hirosystems/token-metadata-service).\n\nRetrieves metadata for non fungible tokens for a given contract id. More information on Non-Fungible Tokens on the Stacks blockchain can be found [here](https://docs.stacks.co/write-smart-contracts/tokens#non-fungible-tokens-nfts).\n",type:"text/plain"},url:{path:["extended","v1","tokens",":contractId","nft","metadata"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) token's contract id",type:"text/plain"},type:"any",value:"<string>",key:"contractId"}]},method:"GET"}},source:"@site/openapi/stacks-blockchain-api.json",sourceDirName:".",permalink:"/doc/api/non-fungible-tokens-metadata-for-contract-id",previous:{title:"Non fungible tokens metadata list",permalink:"/doc/api/non-fungible-tokens-metadata-list"},next:{title:"Fungible tokens metadata for contract id",permalink:"/doc/api/fungible-tokens-metadata-for-contract-id"}},l=[],c={toc:l},d="wrapper";function p(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-fungible-tokens-metadata-for-contract-id"},"Non fungible tokens metadata for contract ID"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"deprecated")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint has been deprecated and may be removed in future versions of the API."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," This endpoint is deprecated in favor of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-service"},"Token Metadata Service"),"."),(0,i.kt)("p",null,"Retrieves metadata for non fungible tokens for a given contract id. More information on Non-Fungible Tokens on the Stacks blockchain can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/write-smart-contracts/tokens#non-fungible-tokens-nfts"},"here"),"."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contractId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"token's contract id")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Non fungible tokens metadata for contract id"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"token_uri"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"An optional string that is a valid URI which resolves to this token's metadata. Can be empty.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Identifies the asset to which this token represents")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Describes the asset to which this token represents")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"image_uri"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"A URI pointing to a resource with mime type image/* representing the asset to which this token represents. The API may provide a URI to a cached resource, dependending on configuration. Otherwise, this can be the same value as the canonical image URI.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"image_canonical_uri"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The original image URI specified by the contract. A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tx_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Tx id that deployed the contract")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sender_address"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"principle that deployed the contract"))))))))))))}p.isMDXComponent=!0}}]);