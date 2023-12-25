"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Overview"},i="Clarinet Overview",l={unversionedId:"clarinet/index",id:"clarinet/index",title:"Overview",description:"Announcement: As part of a simplification and improvement process of the Clarinet project, the commands clarinet test and clarinet run are now be deprecated and won't be available in Clarinet 2 that will be released in October 2023.",source:"@site/docs/clarinet/index.md",sourceDirName:"clarinet",slug:"/clarinet/",permalink:"/doc/clarinet/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/index.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Overview"},sidebar:"clarinet",next:{title:"Getting Started",permalink:"/doc/clarinet/getting-started"}},s={},c=[{value:"Network Types",id:"network-types",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clarinet-overview"},"Clarinet Overview"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Announcement: As part of a simplification and improvement process of the Clarinet project, the commands ",(0,a.kt)("inlineCode",{parentName:"p"},"clarinet test")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clarinet run")," are now be deprecated and won't be available in Clarinet 2 that will be released in October 2023.\nThe testing features are available now in the Clarinet SDK.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See our guide to learn how to ",(0,a.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/test-contract-with-clarinet-sdk"},"test smart contract"),". The SDK API reference is also available ",(0,a.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/clarinet-js-sdk"},"here"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.hiro.so/clarinet"},"Clarinet")," provides a CLI package with a ",(0,a.kt)("a",{parentName:"p",href:"https://clarity-lang.org/"},"clarity")," runtime, a REPL, and a testing harness. Clarinet includes a Javascript library, a testing environment, and a browser-based Sandbox. With Clarinet, you can rigorously iterate on your smart contracts locally before moving into production."),(0,a.kt)("p",null,"Clarinet consists of two main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clarity REPL (Read, Evaluate, Print, Loop)"),(0,a.kt)("li",{parentName:"ul"},"Testing harness.")),(0,a.kt)("p",null,"When the above components are used together, you can rapidly develop and test a Clarity smart contract, by deploying the contract to a local ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:n(30891).Z,width:"896",height:"481"})),(0,a.kt)("h2",{id:"network-types"},"Network Types"),(0,a.kt)("p",null,"Clarinet supports different network types to cater to various development and testing needs. Here's a brief overview of each:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Use Case"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Simnet"),(0,a.kt)("td",{parentName:"tr",align:null},"Optimized for fast feedback loops, introspection, and portability. Can be run anywhere and generate reports about contract analysis, execution, costs, etc."),(0,a.kt)("td",{parentName:"tr",align:null},"Ideal for initial development and unit-testing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Devnet"),(0,a.kt)("td",{parentName:"tr",align:null},"Local Stacks and Bitcoin nodes running on Docker for relatively fast feedback loops. Includes optional components like stacks-api, bitcoin-explorer, stacks-explorer, etc."),(0,a.kt)("td",{parentName:"tr",align:null},"Use for integration tests or to develop the front-end of your dApp locally")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},"A pre-production network that offers a realistic environment for testing."),(0,a.kt)("td",{parentName:"tr",align:null},"Ideal for final testing before deploying to Mainnet.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"The production network where real transactions occur."),(0,a.kt)("td",{parentName:"tr",align:null},"Use when you're ready to deploy your smart contract to production.")))),(0,a.kt)("p",null,"To better understand Clarinet and how to develop with Clarinet, Hiro has created an introductory video tutorial series from Hiro Engineer ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ludovic?lang=en"},"Ludo Galabru")," that will guide you through some of the basics of using Clarinet. The video series also shows you how to use Clarinet to develop, test, and deploy smart contracts."),(0,a.kt)("p",null,"To view these video tutorials, please see ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL5Ujm489LoJaAz9kUJm8lYUWdGJ2AnQTb"},"Hiro's Youtube channel"),"."),(0,a.kt)("p",null,"For the latest information on Clarinet, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.hiro.so/search?query=Clarinet"},"blog posts on Clarinet"),"."),(0,a.kt)("p",null,"When developing smart contracts, you can also use the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=HiroSystems.clarity-lsp"},"Clarity Visual Studio Code plugin"),"."))}u.isMDXComponent=!0},30891:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-e4f00c404595be3ee2ca8c468136bfb0.gif"}}]);