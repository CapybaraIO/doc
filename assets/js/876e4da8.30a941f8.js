"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[3445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Subnet Participants"},s=void 0,o={unversionedId:"subnets/guides/subnet-participants",id:"subnets/guides/subnet-participants",title:"Subnet Participants",description:"This guide outlines the potential participants required to run a subnet. The participants are classified into two categories:",source:"@site/docs/subnets/guides/subnet-participants.md",sourceDirName:"subnets/guides",slug:"/subnets/guides/subnet-participants",permalink:"/doc/subnets/guides/subnet-participants",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/subnets/guides/subnet-participants.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Subnet Participants"},sidebar:"subnets",previous:{title:"Event dispatching / observer interface",permalink:"/doc/subnets/event-dispatcher"},next:{title:"Trust Models",permalink:"/doc/subnets/guides/trust-models"}},p={},l=[{value:"Primary Participants",id:"primary-participants",level:2},{value:"Miners",id:"miners",level:3},{value:"Supporting Application (Example: NFT Marketplace)",id:"supporting-application-example-nft-marketplace",level:3},{value:"Supporting UseCase (Example: NFT Collection Mint)",id:"supporting-usecase-example-nft-collection-mint",level:3},{value:"Secondary Participants",id:"secondary-participants",level:2},{value:"Wallets",id:"wallets",level:3},{value:"End Users",id:"end-users",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide outlines the potential participants required to run a subnet. The participants are classified into two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"primary participants")," need to agree on trust parameters and incentives to launch a subnet"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"secondary participants")," listed here are meant to illustrate different parties involved when using/interacting with a subnet on Stacks")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Capybara does not intend to participate in running a subnet on Stacks mainnet."))),(0,r.kt)("h2",{id:"primary-participants"},"Primary Participants"),(0,r.kt)("p",null,"The following are the required entities to run a subnet."),(0,r.kt)("h3",{id:"miners"},"Miners"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The initial version of subnets uses a Byzantine Fault Tolerance (BFT) consensus mechanism, and the miners are a Federated pool and fully trusted."),(0,r.kt)("li",{parentName:"ul"},"Miners have arbitrary control over STX deposited on the subnets. A minimum of three miners will be required for the subnet\u2019s BFT consensus to materialize and support a 2n/3 majority"),(0,r.kt)("li",{parentName:"ul"},"Miners are motivated by subnet transaction fees. The supporting applications and the use case will set the subnet fees"),(0,r.kt)("li",{parentName:"ul"},"Miners will require specific hardware/software to validate and process subnet transactions. Miners may include the supporting application, use case, and facilitator or none of these")),(0,r.kt)("p",null,"To understand the resource recommendation for miner, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks-subnets/blob/develop/docs/miner-resource-recommendation.md"},"miner resource recommendation document")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key Activities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Miners are responsible for approving and signing transactions and submitting them to the Stacks chain for finality"),(0,r.kt)("li",{parentName:"ul"},"Miners must agree to subnet parameters and incentives. Example: transaction fees, duration, performance requirements")),(0,r.kt)("h3",{id:"supporting-application-example-nft-marketplace"},"Supporting Application (Example: NFT Marketplace)"),(0,r.kt)("p",null,"This application supports subnets and owns the user experience. For an NFT use case, the supporting application might be an NFT marketplace. For a DeFi use case, the supporting application might be an exchange, and it may be independent of miners or elect to participate as a miner."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key Activities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Own user experience for people who want to use a subnet as an application, specifically support connecting a Stacks Wallet to a subnet and minting and trading on a subnet"),(0,r.kt)("li",{parentName:"ul"},"Must agree to subnet parameters and incentives\u2014for example, transaction fees, duration, and performance requirements")),(0,r.kt)("h3",{id:"supporting-usecase-example-nft-collection-mint"},"Supporting UseCase (Example: NFT Collection Mint)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The supporting use case refers to the event that drives people to use a subnet, for example, a mint for a popular NFT collection"),(0,r.kt)("li",{parentName:"ul"},"The supporting use case includes any other parties involved with the use case. In the example above, it could be the artist for a mint collection. The supporting application may be independent of miners")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key Activities")),(0,r.kt)("p",null,"Must agree to subnet parameters and incentives\u2014for example, transaction fees, duration, and performance requirements."),(0,r.kt)("h2",{id:"secondary-participants"},"Secondary Participants"),(0,r.kt)("p",null,"These participants use a subnet and do not need to agree to the parameters and incentives of a subnet."),(0,r.kt)("h3",{id:"wallets"},"Wallets"),(0,r.kt)("p",null,"Users interact with applications using wallets, so subnet support is crucial."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key Activities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Own user experience for people who want to use a subnet via a wallet"),(0,r.kt)("li",{parentName:"ul"},"Deposit of STX from Stacks main chain to a subnet"),(0,r.kt)("li",{parentName:"ul"},"Connect to subnets for mints and transfers"),(0,r.kt)("li",{parentName:"ul"},"Support withdrawals of STX and NFTs from subnet to Stacks main chain"),(0,r.kt)("li",{parentName:"ul"},"Display subnet address balances")),(0,r.kt)("h3",{id:"end-users"},"End Users"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users interact with subnets to experience faster throughput and lower latency for specific use cases (DeFi trades or purchasing or trading NFTs)"),(0,r.kt)("li",{parentName:"ul"},"Users interact primarily with wallets and supporting applications to complete the specific use case (NFT mint)")))}d.isMDXComponent=!0}}]);