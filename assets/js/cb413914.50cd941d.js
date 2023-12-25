"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4083],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(o),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return o?n.createElement(h,a(a({ref:e},p),{},{components:o})):n.createElement(h,a({ref:e},p))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=o.length,a=new Array(s);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:r,a[1]=i;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},70072:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const s={sidebar_label:"FAQs"},a="Stacks.js FAQs",i={unversionedId:"stacks.js/faq",id:"stacks.js/faq",title:"Stacks.js FAQs",description:"What are Post Conditions? How do Post Conditions work?",source:"@site/docs/stacks.js/faq.md",sourceDirName:"stacks.js",slug:"/stacks.js/faq",permalink:"/doc/stacks.js/faq",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/faq.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{sidebar_label:"FAQs"},sidebar:"stacks-js",previous:{title:"Integrating Stacking",permalink:"/doc/stacks.js/guides/how-to-integrate-stacking"},next:{title:"Troubleshooting",permalink:"/doc/stacks.js/troubleshooting"}},c={},l=[{value:"What are Post Conditions? How do Post Conditions work?",id:"what-are-post-conditions-how-do-post-conditions-work",level:4},{value:"How to fix the BigInt support when using Stacks.js?",id:"how-to-fix-the-bigint-support-when-using-stacksjs",level:4}],p={toc:l},d="wrapper";function u(t){let{components:e,...o}=t;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stacksjs-faqs"},"Stacks.js FAQs"),(0,r.kt)("h4",{id:"what-are-post-conditions-how-do-post-conditions-work"},"What are Post Conditions? How do Post Conditions work?"),(0,r.kt)("p",null,"In computer programming, a post-condition is a condition (or a predicate) that must always be true just after the execution of some section of code or after an operation. And on Stacks, transactions are secured by post-conditions. Thus, if a post-condition check fails on a Clarity smart contract then the entire transaction is reverted."),(0,r.kt)("p",null,'In addition, the Stacks blockchain supports an "allow" or "deny" mode for evaluating post-conditions: in "allow" mode, other asset transfers not covered by the post-conditions are permitted, but in "deny" mode, no other asset transfers are permitted besides those named in the post-conditions.'),(0,r.kt)("p",null,'Post-conditions are less a part of Clarity (the language), but more a part of transactions.\nUsers could send the otherwise-identical transaction (Example: contract-call, executing a function on the blockchain) with OR without different post-conditions, in allow OR deny mode.\nThe PCs are managed by the user/wallet/app that\'s creating the tx; so they are a bit different from the other "safety" features of clarity (Example: asserts, try, ',(0,r.kt)("a",{parentName:"p",href:"https://book.clarity-lang.org/ch06-00-control-flow.html"},"https://book.clarity-lang.org/ch06-00-control-flow.html"),")"),(0,r.kt)("h4",{id:"how-to-fix-the-bigint-support-when-using-stacksjs"},"How to fix the BigInt support when using Stacks.js?"),(0,r.kt)("p",null,"BigInt support is available in most modern browsers, but some bundlers try to optimize them incorrectly. If you are targeting browsers that are too outdated, building an application with Stacks.js dependencies might fail.\nTo solve this set your project ",(0,r.kt)("inlineCode",{parentName:"p"},"browserslist")," to the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks.js-starters/blob/efb93261b59494f4eb34a7cb5db5d82a84bd3b7c/templates/template-react/package.json#L34-L40"},"package.json"),"."))}u.isMDXComponent=!0}}]);