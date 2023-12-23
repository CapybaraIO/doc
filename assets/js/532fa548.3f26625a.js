"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[5212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={Title:"Overview"},i="Stacks Explorer Overview",l={unversionedId:"explorer/index",id:"explorer/index",title:"Stacks Explorer Overview",description:"The Stacks Explorer frontend user interface is built with React, next.js and @stacks/ui.",source:"@site/docs/explorer/index.md",sourceDirName:"explorer",slug:"/explorer/",permalink:"/doc/explorer/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/explorer/index.md",tags:[],version:"current",frontMatter:{Title:"Overview"},sidebar:"stacks-explorer",next:{title:"Getting Started",permalink:"/doc/explorer/getting-started"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stacks-explorer-overview"},"Stacks Explorer Overview"),(0,o.kt)("p",null,"The Stacks Explorer frontend user interface is built with ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js"},"next.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/ui"},"@stacks/ui"),"."),(0,o.kt)("p",null,"Before you can run it on your machine locally, you must first clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/explorer"},"Stacks Explorer")," repository to obtain all of the necessary files and libraries needed."),(0,o.kt)("h1",{id:"project-dependencies"},"Project Dependencies"),(0,o.kt)("p",null,"Once you have cloned the Stacks Explorer repositories, you will need to install the following project dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.dev/en/"},"NodeJS")," that includes ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/installation/"},"PNPM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))),(0,o.kt)("p",{parentName:"blockquote"},"Although Homebrew is not required to install and operate the Stacks Explorer, it is highly recommended.")),(0,o.kt)("p",null,"Open your terminal window, and make sure you are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/explorer")," folder. Run the below command to install the dependencies:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm i")))}d.isMDXComponent=!0}}]);