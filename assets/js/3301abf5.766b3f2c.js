"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=n,f=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"Overview"},a=void 0,s={unversionedId:"ordhook/index",id:"ordhook/index",title:"Overview",description:"Ordinal Theory",source:"@site/docs/ordhook/index.md",sourceDirName:"ordhook",slug:"/ordhook/",permalink:"/doc/ordhook/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/ordhook/index.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"ordhook",next:{title:"Getting Started",permalink:"/doc/ordhook/getting-started"}},c={},l=[{value:"Ordinal Theory",id:"ordinal-theory",level:2},{value:"Ordhook",id:"ordhook",level:2}],d={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ordinal-theory"},"Ordinal Theory"),(0,n.kt)("p",null,"Ordinal Theory is a protocol with a specific goal: assigning unique identifiers to every single satoshi (sat). The protocol achieves this by introducing a numbering scheme. This numbering allows for the inclusion of arbitrary content on these satoshis."),(0,n.kt)("p",null,"This content is referred to as ",(0,n.kt)("em",{parentName:"p"},"inscriptions"),". These inscriptions essentially turn satoshis into Bitcoin-native digital artifacts, often referred to as Non-Fungible Tokens (NFTs). This means that you can associate additional information or data with individual satoshis."),(0,n.kt)("p",null,"Ordinal Theory accomplishes this without requiring the use of sidechains or creating separate tokens. This makes it an attractive option for those looking to integrate, expand, or utilize this functionality within the Bitcoin ecosystem."),(0,n.kt)("p",null,"Satoshis with inscriptions can be transferred through standard Bitcoin transactions, sent to regular Bitcoin addresses, and held in Bitcoin Unspent Transaction Outputs (UTXOs). The uniqueness of these transactions is identified while sending individual satoshis with inscriptions, and transactions must be crafted to control the order and value of inputs and outputs following the rules defined by Ordinal Theory."),(0,n.kt)("h2",{id:"ordhook"},"Ordhook"),(0,n.kt)("p",null,"Ordhook is an indexer designed to assist developers in creating new applications that are resistant to blockchain re-organizations (re-orgs) and are built on top of the ",(0,n.kt)("a",{parentName:"p",href:"https://trustmachines.co/glossary/ordinal-theory"},"Ordinal Theory")," protocol. Its primary purpose is to simplify the process for both protocol developers and users to track and discover the ownership of Ordinal Theory's inscriptions. It also provides a wealth of information about each inscription."),(0,n.kt)("p",null,"Ordhook utilizes the Chainhook Software Development Kit (SDK) from the Chainhook project. This SDK is a transaction indexing engine that is aware of re-orgs and is designed for use with both Stacks and Bitcoin. The Chainhook SDK operates on first-class event-driven principles. This means it efficiently extracts transaction data from blocks and maintains a consistent view of the state of the blockchain. This helps ensure that the data retrieved remains accurate and up-to-date."),(0,n.kt)("p",null,"Ordhook offers a valuable tool for Bitcoin developers. They can rely on it to implement feature-rich protocols and business models that make use of near-real-time information related to ordinal inscriptions and their transfers."))}p.isMDXComponent=!0}}]);