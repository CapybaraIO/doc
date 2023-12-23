"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?i.createElement(d,o(o({ref:t},p),{},{components:r})):i.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={title:"Rate Limiting"},o=void 0,l={unversionedId:"rate-limiting",id:"rate-limiting",title:"Rate Limiting",description:"Rate Limiting for Hiro APIs",source:"@site/docs/rate-limiting.md",sourceDirName:".",slug:"/rate-limiting",permalink:"/doc/rate-limiting",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/rate-limiting.md",tags:[],version:"current",frontMatter:{title:"Rate Limiting"},sidebar:"docs",previous:{title:"API Keys",permalink:"/doc/api-keys"},next:{title:"Hiro Product Changelog",permalink:"/doc/changelog"}},s={},c=[{value:"Rate Limiting for Hiro APIs",id:"rate-limiting-for-hiro-apis",level:2},{value:"STX Faucet Rate Limit",id:"stx-faucet-rate-limit",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rate-limiting-for-hiro-apis"},"Rate Limiting for Hiro APIs"),(0,n.kt)("p",null,"The following rate-limits (in requests per minute, or RPM) are applicable for all Hiro APIs as of ",(0,n.kt)("a",{parentName:"p",href:"https://www.hiro.so/blog/updated-rate-limits-for-hiro-apis"},"November, 2023"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"50 requests per minute, per client IP, for unauthenticated traffic (without an API key)"),(0,n.kt)("li",{parentName:"ul"},"500 requests per minute (regardless of origin IP) with an authenticated API key")),(0,n.kt)("p",null,"These new rate limits help us ensure fair usage of Hiro APIs and provide the best possible service as our community of developers and applications grow and scale."),(0,n.kt)("p",null,"Please ",(0,n.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hiroapi"},"complete this form")," to apply for an API key."),(0,n.kt)("h3",{id:"stx-faucet-rate-limit"},"STX Faucet Rate Limit"),(0,n.kt)("p",null,"The Stacks faucet rate limit depends on the type of request. For stacking requests, there is a limit of 1 request per 2 days. In case of regular Stacks faucet requests, the limit is set to 1 request per minute."))}m.isMDXComponent=!0}}]);