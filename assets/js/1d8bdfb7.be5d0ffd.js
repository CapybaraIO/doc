"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"FAQs"},i=void 0,l={unversionedId:"platform/faq",id:"platform/faq",title:"FAQs",description:"Are my projects and contracts isolated?",source:"@site/docs/platform/faq.md",sourceDirName:"platform",slug:"/platform/faq",permalink:"/doc/platform/faq",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/platform/faq.md",tags:[],version:"current",frontMatter:{title:"FAQs"},sidebar:"platform",previous:{title:"Stacks Testnet Faucet",permalink:"/doc/platform/guides/faucet"}},s={},c=[{value:"Are my projects and contracts isolated?",id:"are-my-projects-and-contracts-isolated",level:3},{value:"Clarinet Integrate/Devnet is not working in terminal",id:"clarinet-integratedevnet-is-not-working-in-terminal",level:3},{value:"I cannot import my project",id:"i-cannot-import-my-project",level:3},{value:"I cannot download files from terminal",id:"i-cannot-download-files-from-terminal",level:3},{value:"Where do I log issues/bugs?",id:"where-do-i-log-issuesbugs",level:3},{value:"I see an error: &#39;Unable to retrieve contract ...&#39; in the browser console. How do I resolve it?",id:"i-see-an-error-unable-to-retrieve-contract--in-the-browser-console-how-do-i-resolve-it",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"are-my-projects-and-contracts-isolated"},"Are my projects and contracts isolated?"),(0,o.kt)("p",null,"Your projects are deployed as pods in Kubernetes. Each pod operates with strict security context and resource limits. You are the only one to have access to the data."),(0,o.kt)("h3",{id:"clarinet-integratedevnet-is-not-working-in-terminal"},"Clarinet Integrate/Devnet is not working in terminal"),(0,o.kt)("p",null,"This feature is not supported. It is in the roadmap."),(0,o.kt)("h3",{id:"i-cannot-import-my-project"},"I cannot import my project"),(0,o.kt)("p",null,"Max project size allowed for imports is 50MB, so check the size before importing."),(0,o.kt)("h3",{id:"i-cannot-download-files-from-terminal"},"I cannot download files from terminal"),(0,o.kt)("p",null,"Internet access is unavailable inside VS Code and Terminal."),(0,o.kt)("h3",{id:"where-do-i-log-issuesbugs"},"Where do I log issues/bugs?"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://hiro-pbc.canny.io/hiro-platform"},"feedback widget inside Hiro Platform")," or go directly to ",(0,o.kt)("a",{parentName:"p",href:"https://hiro-pbc.canny.io/hiro-platform"},"https://hiro-pbc.canny.io/hiro-platform")," to report issues."),(0,o.kt)("h3",{id:"i-see-an-error-unable-to-retrieve-contract--in-the-browser-console-how-do-i-resolve-it"},"I see an error: 'Unable to retrieve contract ...' in the browser console. How do I resolve it?"),(0,o.kt)("p",null,'Currently, "clarinet integrate", and "requirements" aren\'t supported in Clarinet installed in Hiro Platform. These are on the roadmap.'))}u.isMDXComponent=!0}}]);