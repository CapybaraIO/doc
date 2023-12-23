"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[3270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={Title:"Stacks Blockchain API"},o="Stacks Blockchain API",c={unversionedId:"stacks-blockchain-api/feature-guides/use-stacks-blockchain-api",id:"stacks-blockchain-api/feature-guides/use-stacks-blockchain-api",title:"Stacks Blockchain API",description:"The RESTful JSON API can be used without any authorization. The base path for the API is:",source:"@site/docs/stacks-blockchain-api/feature-guides/use-stacks-blockchain-api.md",sourceDirName:"stacks-blockchain-api/feature-guides",slug:"/stacks-blockchain-api/feature-guides/use-stacks-blockchain-api",permalink:"/doc/stacks-blockchain-api/feature-guides/use-stacks-blockchain-api",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks-blockchain-api/feature-guides/use-stacks-blockchain-api.md",tags:[],version:"current",frontMatter:{Title:"Stacks Blockchain API"},sidebar:"stacks-api",previous:{title:"Getting Started",permalink:"/doc/stacks-blockchain-api/getting-started"},next:{title:"Using Clarity Values",permalink:"/doc/stacks-blockchain-api/feature-guides/use-clarity-values"}},s={},l=[{value:"Stacks node RPC API",id:"stacks-node-rpc-api",level:2},{value:"Stacks blockchain API",id:"stacks-blockchain-api-1",level:2},{value:"Running an API server",id:"running-an-api-server",level:2}],p={toc:l},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stacks-blockchain-api"},"Stacks Blockchain API"),(0,r.kt)("p",null,"The RESTful JSON API can be used without any authorization. The base path for the API is:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for mainnet, replace `testnet` with `mainnet\nhttps://api.testnet.hiro.so/")),(0,r.kt)("p",null,"For more information about the Stacks Blockchain API, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api?_gl=1*1nvx6u*_ga*NTQ3NDA3NTIuMTY2MDA3MTQ1MA..*_ga_NB2VBT0KY2*MTY2MzkxNTIzNS4yMi4xLjE2NjM5MTY1OTMuMC4wLjA."},"Stacks API reference")," page."),(0,r.kt)("p",null,"The API is comprised of two parts: the Stacks Blockchain API and the Stacks Node RPC API. The Node RPC API is exposed by every running node. Stacks Blockchain API, however, introduces additional capabilities (for example, retrieving all transactions), while also running proxies calls directly to Stacks Node RPC API."),(0,r.kt)("h2",{id:"stacks-node-rpc-api"},"Stacks node RPC API"),(0,r.kt)("p",null,"The stacks-node implementation exposes JSON RPC endpoints."),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"/v2/")," routes are routed through a proxy to a Hiro-hosted Stacks Node. For a trustless architecture, you should make these requests to a self-hosted node."),(0,r.kt)("h2",{id:"stacks-blockchain-api-1"},"Stacks blockchain API"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"/extended/")," routes are provided by the Stacks 2.0 Blockchain API directly, and extend the Stacks Node API capabilities to make integration much easier."),(0,r.kt)("h2",{id:"running-an-api-server"},"Running an API server"),(0,r.kt)("p",null,"While Hiro provides a hosted API server of the Stacks Blockchain API, anyone can spin up their own version. Please ",(0,r.kt)("a",{parentName:"p",href:"/get-started/running-api-node"},"follow the instructions in this guide")," to start a Docker container with the API service running."),(0,r.kt)("p",null,"Once started, the API is available on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3999")))}k.isMDXComponent=!0}}]);