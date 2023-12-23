"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={title:"Overview"},i="Subnet Overview",o={unversionedId:"subnets/index",id:"subnets/index",title:"Overview",description:"A subnet is a layer-2 scaling solution for the Stacks blockchain, offering low latency and high throughput, enabling developers to build fast and reliable user experiences on Stacks.",source:"@site/docs/subnets/index.md",sourceDirName:"subnets",slug:"/subnets/",permalink:"/doc/subnets/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/subnets/index.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"subnets",next:{title:"Getting Started",permalink:"/doc/subnets/getting-started"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Features",id:"features",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subnet-overview"},"Subnet Overview"),(0,r.kt)("p",null,"A subnet is a layer-2 scaling solution for the Stacks blockchain, offering low latency and high throughput, enabling developers to build fast and reliable user experiences on Stacks."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"A subnet is a network separate from the Stacks mainnet blockchain. A subnet can be thought of as a layer-2 (L2), and the Stacks chain can be thought of as a layer-1 (L1). A subnet interfaces with the Stacks chain via a smart contract specific to the subnet. Different subnets use distinct contracts on the Stacks chain as an interface."),(0,r.kt)("p",null,"This interface contract has several functions that allow it to act as an intermediary between the Stacks chain and some particular subnet. These functions include, but are not limited to, the following functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit-block"),": Called by subnet miners to record block hashes and withdrawal states on the Stacks chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deposit-ft-asset")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit-stx")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit-nft-asset"),': Called by users to deposit assets into the subnet. The subnet miners "listens" for calls to these functions and perform a mint on the subnets to replicate this state. Meanwhile, on the L1, the assets live in the subnet contract.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withdraw-ft-asset")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw-stx")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw-nft-asset"),": Called by users to withdrawal assets from the subnet. Withdrawal is a two step process, where the user first initiates a withdrawal within the subnet, then calls these functions on the Stacks chain to complete the withdrawal.")),(0,r.kt)("p",null,"In order to register new allowed assets, the subnet's administrator must call ",(0,r.kt)("inlineCode",{parentName:"p"},"register-new-ft-contract"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"register-new-nft-contract"),". Only assets that have been registered can be deposited into the subnet."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"This diagram outlines the interaction between a subnet and the Stacks layer-1 chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture of subnets.",src:n(84079).Z,width:"1749",height:"954"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"A subnet is designed to temporarily hold Stacks assets. Users can deposit assets from the Stacks chain, take advantage of faster transactions and lower fees while on the subnet, and withdraw them when finished. While a user's assets are in a subnet, the asset is locked in the subnet contract on the Stacks chain, and representations of those assets are created\u2014appearing in a user's Leather Wallet\u2014and handled by applications on the subnet."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"The current subnet implementation relies on either a single block producer or a fully-trusted federation of block producers. Users of a subnet should be aware that they are sacrificing decentralization and security for the speed provided in the subnet, and therefore should only deposit assets into trusted subnets."))),(0,r.kt)("p",null,"Listed below are some of the features of a subnet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each subnet may define its throughput settings. The default implementation should support at least 4x higher throughput for transactions and reduce confirmation time from 10 minutes to 1 minute."),(0,r.kt)("li",{parentName:"ul"},"Interacting with a subnet is similar to interacting with a different Stacks network (for example testnet vs. mainnet)."),(0,r.kt)("li",{parentName:"ul"},"The Stacks blockchain may support many different subnets."),(0,r.kt)("li",{parentName:"ul"},"Each subnet may use the same or different consensus rules."),(0,r.kt)("li",{parentName:"ul"},"This repository implements a consensus mechanism that uses a two-phase commit among a federated pool of miners."),(0,r.kt)("li",{parentName:"ul"},"FTs, NFTs, and STX deposits and withdrawals are supported via user-submitted L1 transactions."),(0,r.kt)("li",{parentName:"ul"},"To deposit into a subnet, users submit a layer-1 transaction to invoke the deposit method on that subnet's smart contract."),(0,r.kt)("li",{parentName:"ul"},"For withdrawals, users commit the withdrawal on the subnet and then submit a layer-1 transaction to invoke the subnet's smart contract's withdraw method.")))}h.isMDXComponent=!0},84079:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/subnets-architecture-eabbc2e3e8ff0aa038ec52e4d10e55fe.png"}}]);