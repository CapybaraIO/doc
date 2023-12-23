"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[3219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(f,p(p({ref:t},s),{},{components:r})):o.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<n;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={title:"Create Project"},p=void 0,i={unversionedId:"platform/guides/create-project",id:"platform/guides/create-project",title:"Create Project",description:"This article walks you through the process of creating a new project or importing a project from GitHub.",source:"@site/docs/platform/guides/create-project.md",sourceDirName:"platform/guides",slug:"/platform/guides/create-project",permalink:"/doc/platform/guides/create-project",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/platform/guides/create-project.md",tags:[],version:"current",frontMatter:{title:"Create Project"},sidebar:"platform",previous:{title:"Getting Started",permalink:"/doc/platform/getting-started"},next:{title:"Build Contracts",permalink:"/doc/platform/guides/build-contract"}},c={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Create new Project",id:"create-new-project",level:2},{value:"Import Project from GitHub",id:"import-project-from-github",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article walks you through the process of creating a new project or importing a project from GitHub."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"After you log into the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.hiro.so/"},"Hiro Platform"),", you will be prompted to ",(0,a.kt)("em",{parentName:"p"},"create a project")," or ",(0,a.kt)("em",{parentName:"p"},"import from GitHub"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create or import a project",src:r(80724).Z,width:"300",height:"389"})),(0,a.kt)("h2",{id:"create-new-project"},"Create new Project"),(0,a.kt)("p",null,"To create a new project, you can start with a ",(0,a.kt)("em",{parentName:"p"},"Blank project")," or use one of the examples displayed in the project modal - Hello world, Ordyswap, Clarity bitcoin, Counter, Fungible token, Lightning swaps, NFT marketplace, Non-fungible token. You can also refer to the examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarity-examples/tree/main/examples"},"Clarity examples")," to view the source code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create new project",src:r(2331).Z,width:"300",height:"623"})),(0,a.kt)("p",null,"Once you select a new project from the list, the selected example project will be automatically cloned and displayed on the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.hiro.so"},"projects")," page. Below is the screenshot of the ",(0,a.kt)("em",{parentName:"p"},"Hello world")," project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello world project",src:r(75825).Z,width:"1545",height:"243"})),(0,a.kt)("p",null,"Now, you can view your projects on the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.hiro.so"},"projects page"),". Select the project to review the list of contracts in them."),(0,a.kt)("h2",{id:"import-project-from-github"},"Import Project from GitHub"),(0,a.kt)("p",null,"When you ",(0,a.kt)("strong",{parentName:"p"},"Import from GitHub"),", there will be a modal displayed on the right to enter the GitHub URL of your project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Import from GitHub",src:r(28137).Z,width:"300",height:"379"})),(0,a.kt)("p",null,"Once you enter the URL of your project, select ",(0,a.kt)("em",{parentName:"p"},"clone")," to clone your project into the Hiro platform."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The maximum project size allowed for imports is 50 MB.")),(0,a.kt)("p",null,"Your cloned project is now displayed on the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.hiro.so"},"projects page"),"."),(0,a.kt)("p",null,"After your import, your project shows a list of Clarity contracts ending with ",(0,a.kt)("inlineCode",{parentName:"p"},".clar")," extension, as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Import Clarinet project from GitHub",src:r(83186).Z,width:"1509",height:"672"})))}u.isMDXComponent=!0},2331:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/create-new-project-7ee91c7f54b3e937c288c40de4b409ef.jpeg"},80724:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/create-or-import-project-27eae5e926987f7f6bb4f894519a3076.png"},75825:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/hello-world-project-cd6036fdb3dda1a60bbbad7d5edce9f7.png"},83186:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/import-clarinet-project-99f17a73ac72b71b499a10328dba344d.png"},28137:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/import-from-github-ef458aedafd46bea4ab01c8bab09f08e.jpeg"}}]);