"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[9424],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var s=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},r=Object.keys(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=s.createContext({}),o=function(t){var e=s.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=o(t.components);return s.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},h=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),p=o(a),h=n,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return a?s.createElement(u,i(i({ref:e},k),{},{components:a})):s.createElement(u,i({ref:e},k))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:n,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27991:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var s=a(87462),n=a(67294),r=a(3905);const i=t=>{let{title:e="GitHub",href:a}=t;return e?n.createElement("a",{className:"bg-neutral-300 text-sm px-1 rounded-md text-black inline-flex items-center text-bold font-bold hover:text-black hover:bg-neutral-200 hover:no-underline",href:a,target:"_blank"},n.createElement("span",{className:"i-bi-github mr-1"}),e):n.createElement("a",{className:"bg-neutral-300 text-xs p-0.5 rounded-full text-black inline-flex items-center text-bold font-bold hover:text-black hover:bg-neutral-200 hover:no-underline",href:a,target:"_blank"},n.createElement("span",{className:"i-bi-github"}))},c={title:"Installation"},l="Installing Stacks.js Packages",o={unversionedId:"stacks.js/installing",id:"stacks.js/installing",title:"Installation",description:"Stacks.js is separated into many smaller packages, which can be installed individually.",source:"@site/docs/stacks.js/installing.md",sourceDirName:"stacks.js",slug:"/stacks.js/installing",permalink:"/doc/stacks.js/installing",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/installing.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Installation"},sidebar:"stacks-js",previous:{title:"Overview",permalink:"/doc/stacks.js/"},next:{title:"Getting Started",permalink:"/doc/stacks.js/getting-started"}},k={},p=[{value:"Packages",id:"packages",level:2},{value:"Connecting Wallets",id:"connecting-wallets",level:3},{value:"Stacks Primitives",id:"stacks-primitives",level:3},{value:"Native Smart Contract Interaction",id:"native-smart-contract-interaction",level:3},{value:"Others",id:"others",level:3}],m={toc:p},h="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(h,(0,s.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-stacksjs-packages"},"Installing Stacks.js Packages"),(0,r.kt)("p",null,"Stacks.js is separated into many smaller packages, which can be installed individually.\nMost packages are published to npm under the ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks")," scope."),(0,r.kt)("p",null,"Let's install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/network")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @stacks/network\n")),(0,r.kt)("h2",{id:"packages"},"Packages"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Full list of available packages"),(0,r.kt)("h3",{id:"connecting-wallets"},"Connecting Wallets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://connect.stacks.js.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/connect"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/connect/tree/main/packages/connect",title:"",mdxType:"GithubLink"})," Connect web application to Stacks wallet browser extensions.")),(0,r.kt)("h3",{id:"stacks-primitives"},"Stacks Primitives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/transactions"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/transactions",title:"",mdxType:"GithubLink"})," Construct, decode transactions and work with Clarity smart contracts on the Stacks blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_wallet_sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/wallet-sdk"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/wallet-sdk",title:"",mdxType:"GithubLink"})," Library for building wallets, managing accounts, and handling keys for the Stacks blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_storage"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/storage"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/storage",title:"",mdxType:"GithubLink"})," Store and fetch files with Gaia, the decentralized storage system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_encryption"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/encryption"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/encryption",title:"",mdxType:"GithubLink"})," Encryption functions used by stacks.js packages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_auth"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/auth"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/auth",title:"",mdxType:"GithubLink"})," Construct and decode authentication requests for Stacks apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_profile"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/profile"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/profile",title:"",mdxType:"GithubLink"})," Functions for manipulating user profiles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_network"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/network"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/network",title:"",mdxType:"GithubLink"})," Network and API library for working with Stacks blockchain nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_common"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/common"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/common",title:"",mdxType:"GithubLink"})," Common utilities used by stacks.js packages.")),(0,r.kt)("h3",{id:"native-smart-contract-interaction"},"Native Smart Contract Interaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_bns"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/bns"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/bns",title:"",mdxType:"GithubLink"})," Library for interacting with the BNS contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_stacking"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/stacking"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/stacking",title:"",mdxType:"GithubLink"})," Library for PoX stacking.")),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/references/stacks-cli"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/cli"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks.js/tree/main/packages/cli",title:"",mdxType:"GithubLink"})," Command line interface to interact with auth, storage, and Stacks transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hirosystems.github.io/stacks-blockchain-api/client/"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/blockchain-api-client"))," ",(0,r.kt)(i,{href:"https://github.com/hirosystems/stacks-blockchain-api/tree/master/client",title:"",mdxType:"GithubLink"})," Auto-generated REST and websocket API for all endpoints provided by the Stacks Blockchain API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@stacks/keychain")," ",(0,r.kt)("strong",{parentName:"li"},"DEPRECATED"),", replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"@stacks/wallet-sdk")))),(0,r.kt)("p",null,"The most commonly used packages are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://connect.stacks.js.org/modules/_stacks_connect"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/connect"))," \u2014 Stacks Connect, for building Stacks-ready web applications"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_network"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/network"))," \u2014 Network configuration (used together with other packages)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stacks.js.org/modules/_stacks_transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/transactions"))," \u2014 Transaction construction, serialization, Clarity helpers, and more"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hirosystems.github.io/stacks-blockchain-api/client/"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/blockchain-api-client"))," \u2014 Auto-generated API client (with websocket support) for all Stacks Blockchain API endpoints.")),(0,r.kt)("div",{class:"space-x-3 mb-4"},(0,r.kt)("a",{class:"bg-neutral-200 rounded-md text-sm text-neutral-700 px-2 py-1",href:"https://stacks.js.org"},"Stacks.js Reference \u2192"),(0,r.kt)("a",{class:"bg-neutral-200 rounded-md text-sm text-neutral-700 px-2 py-1",href:"https://connst.stacks.js.org"},"Stacks Connect Reference \u2192")),(0,r.kt)("p",null,"The source-code for most packages live in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks.js"},"Stacks.js monorepo")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/connect"},"Stacks Connect monorepo")," on GitHub."))}u.isMDXComponent=!0}}]);