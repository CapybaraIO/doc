"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[9409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(53256);const i={id:"overview",title:"Building on Stacks"},s=void 0,l={unversionedId:"build-apps/overview",id:"build-apps/overview",title:"Building on Stacks",description:"Apps built with the Stacks blockchain give users control over their digital identities, assets, and data.",source:"@site/docs/build-apps/index.md",sourceDirName:"build-apps",slug:"/build-apps/",permalink:"/doc/build-apps/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/build-apps/index.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Building on Stacks"}},c={},p=[],u={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{mdxType:"StacksjsStartersNote"}),(0,a.kt)("p",null,"Apps built with the Stacks blockchain give users control over their digital identities, assets, and data."),(0,a.kt)("p",null,'Unlike most cloud-based apps, they are "decentralized" since they don\'t depend on any centralized platform, server, or database to function. Rather, they use the Stacks blockchain to authenticate users and facilitate read and write requests for them without any single point of failure or trust.'),(0,a.kt)("p",null,"This page provides information on how to build such apps using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks.js"},"Stacks.js")," and other libraries that make integration of the Stacks blockchain easy for front-end developers."),(0,a.kt)("p",null,"Three main integrations are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authentication"),": Register and sign users in with identities on the Stacks blockchain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction signing"),": Prompt users to sign and broadcast transactions to the Stacks blockchain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data storage"),": Save and retrieve data for users with ",(0,a.kt)("a",{parentName:"li",href:"https://docs.stacks.co/build-apps/references/gaia"},"Gaia"))),(0,a.kt)("p",null,"All three of these integrations can be used together to create powerful new user experiences that rival or exceed those of traditional apps\u2014all while protecting your users' digital rights."),(0,a.kt)("p",null,"While integration is possible for any type of app, the resources available here are for web developers experienced with JavaScript."))}h.isMDXComponent=!0},53256:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{class:"block p-4 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 hover:dark:bg-neutral-600 bg-neutral-200 rounded-lg dark:bg-neutral-700 mb-6 hover:no-underline hover:text-neutral-800 hover:dark:text-neutral-100 transition-colors",href:"https://docs.hiro.so/stacksjs-starters"},(0,a.kt)("span",{class:"i-radix-icons-lightning-bolt align-text-bottom text-lg"})," Bootstrap your project with ",(0,a.kt)("strong",null,"Stacks.js Starters"),", which come with Stacks Connect pre-installed ",(0,a.kt)("span",{class:"i-bi-globe2 align-text-bottom text-lg"})))}s.isMDXComponent=!0}}]);