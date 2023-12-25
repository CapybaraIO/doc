"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8026],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>k});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var h=o.createContext({}),s=function(n){var e=o.useContext(h),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},l=function(n){var e=s(n.components);return o.createElement(h.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,h=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),p=s(t),u=a,k=p["".concat(h,".").concat(u)]||p[u]||d[u]||i;return t?o.createElement(k,r(r({ref:e},l),{},{components:t})):o.createElement(k,r({ref:e},l))}));function k(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var h in e)hasOwnProperty.call(e,h)&&(c[h]=e[h]);c.originalType=n,c[p]="string"==typeof n?n:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42606:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={title:"FAQs"},r="FAQs",c={unversionedId:"chainhook/faq",id:"chainhook/faq",title:"FAQs",description:"Can Chainhook target both Bitcoin and Stacks?",source:"@site/docs/chainhook/faq.md",sourceDirName:"chainhook",slug:"/chainhook/faq",permalink:"/doc/chainhook/faq",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/chainhook/faq.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"FAQs"},sidebar:"chainhook",previous:{title:"Use Chainhooks with Stacks",permalink:"/doc/chainhook/guides/chainhooks-with-stacks"}},h={},s=[{value:"<strong>Can Chainhook target both Bitcoin and Stacks?</strong>",id:"can-chainhook-target-both-bitcoin-and-stacks",level:4},{value:"<strong>Can I use chainhook for cross-chain protocols?</strong>",id:"can-i-use-chainhook-for-cross-chain-protocols",level:4},{value:"<strong>Can I use chainhook for chain-indexing?</strong>",id:"can-i-use-chainhook-for-chain-indexing",level:4},{value:"<strong>Can I use Chainhook with distributed nodes?</strong>",id:"can-i-use-chainhook-with-distributed-nodes",level:4},{value:"<strong>How can I connect chainhook with Oracles?</strong>",id:"how-can-i-connect-chainhook-with-oracles",level:4},{value:"<strong>How can I use Chainhook in my application?</strong>",id:"how-can-i-use-chainhook-in-my-application",level:4},{value:"<strong>Can I run chainhook on mainnet?</strong>",id:"can-i-run-chainhook-on-mainnet",level:4},{value:"<strong>How can I optimize chainhook scanning?</strong>",id:"how-can-i-optimize-chainhook-scanning",level:4}],l={toc:s},p="wrapper";function d(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faqs"},"FAQs"),(0,a.kt)("h4",{id:"can-chainhook-target-both-bitcoin-and-stacks"},(0,a.kt)("strong",{parentName:"h4"},"Can Chainhook target both Bitcoin and Stacks?")),(0,a.kt)("p",null,"Chainhooks can listen and act on events from the Bitcoin and Stacks network."),(0,a.kt)("h4",{id:"can-i-use-chainhook-for-cross-chain-protocols"},(0,a.kt)("strong",{parentName:"h4"},"Can I use chainhook for cross-chain protocols?")),(0,a.kt)("p",null,"Yes, Chainhooks can be used for coordinating cross-chain actions. You can use chainhook on Bitcoin, ordinals, and Stacks."),(0,a.kt)("h4",{id:"can-i-use-chainhook-for-chain-indexing"},(0,a.kt)("strong",{parentName:"h4"},"Can I use chainhook for chain-indexing?")),(0,a.kt)("p",null,"Chainhook can easily extract the information needed to build (or rebuild) databases for a front end."),(0,a.kt)("h4",{id:"can-i-use-chainhook-with-distributed-nodes"},(0,a.kt)("strong",{parentName:"h4"},"Can I use Chainhook with distributed nodes?")),(0,a.kt)("p",null,"The chainhook event observer was designed as a library written in Rust, which makes it very portable. Bindings can easily be created from other languages (Node, Ruby, Python, etc.), making this tool a very convenient and performant library, usable by anyone."),(0,a.kt)("h4",{id:"how-can-i-connect-chainhook-with-oracles"},(0,a.kt)("strong",{parentName:"h4"},"How can I connect chainhook with Oracles?")),(0,a.kt)("p",null,"Oracles, in general, do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Capture relevant on-chain events")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Process the events via some off-chain, centralized logic")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit the resultant data on-chain"),(0,a.kt)("p",{parentName:"li"},"Chainhook can be used to efficiently capture relevant on-chain events and forward them to off-chain services."))),(0,a.kt)("h4",{id:"how-can-i-use-chainhook-in-my-application"},(0,a.kt)("strong",{parentName:"h4"},"How can I use Chainhook in my application?")),(0,a.kt)("p",null,"Chainhook can be used from the exposed RESTful API endpoints. A comprehensive OpenAPI specification explaining how to interact with the Chainhook REST API can be found ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/hirosystems/chainhook/develop/docs/chainhook-openapi.json"},"here"),"."),(0,a.kt)("h4",{id:"can-i-run-chainhook-on-mainnet"},(0,a.kt)("strong",{parentName:"h4"},"Can I run chainhook on mainnet?")),(0,a.kt)("p",null,"Yes, you can run chainhook on both the testnet and mainnet."),(0,a.kt)("h4",{id:"how-can-i-optimize-chainhook-scanning"},(0,a.kt)("strong",{parentName:"h4"},"How can I optimize chainhook scanning?")),(0,a.kt)("p",null,"Use adequate values for ",(0,a.kt)("inlineCode",{parentName:"p"},"start_block")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"end_block")," in predicates by reducing the number of network hops between the chainhook and the ",(0,a.kt)("inlineCode",{parentName:"p"},"bitcoind")," process."))}d.isMDXComponent=!0}}]);