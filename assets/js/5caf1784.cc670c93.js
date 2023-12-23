"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Stacks Testnet Faucet"},s="Stacks Testnet Faucet",i={unversionedId:"platform/guides/faucet",id:"platform/guides/faucet",title:"Stacks Testnet Faucet",description:"The Stacks Testnet Faucet is a dedicated utility for developers building on the Stacks blockchain. To aid you in deploying and running smart contracts on the Stacks testnet, we've provided this faucet that offers easy access to testnet STX tokens.",source:"@site/docs/platform/guides/faucet.md",sourceDirName:"platform/guides",slug:"/platform/guides/faucet",permalink:"/doc/platform/guides/faucet",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/platform/guides/faucet.md",tags:[],version:"current",frontMatter:{title:"Stacks Testnet Faucet"},sidebar:"platform",previous:{title:"Create Chainhooks",permalink:"/doc/platform/guides/create-chainhooks"},next:{title:"FAQs",permalink:"/doc/platform/faq"}},c={},l=[{value:"Why Use the Stacks Testnet Faucet?",id:"why-use-the-stacks-testnet-faucet",level:2},{value:"How to Request Testnet STX",id:"how-to-request-testnet-stx",level:2},{value:"Note:",id:"note",level:3}],u={toc:l},p="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stacks-testnet-faucet"},"Stacks Testnet Faucet"),(0,r.kt)("p",null,"The Stacks Testnet Faucet is a dedicated utility for developers building on the Stacks blockchain. To aid you in deploying and running smart contracts on the Stacks testnet, we've provided this faucet that offers easy access to testnet STX tokens."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Chainhook Window",src:n(81041).Z,width:"1783",height:"1318"})),(0,r.kt)("h2",{id:"why-use-the-stacks-testnet-faucet"},"Why Use the Stacks Testnet Faucet?"),(0,r.kt)("p",null,"Building and testing on a blockchain requires a certain amount of native tokens to facilitate various operations, from contract deployments to transaction executions. However, sourcing these tokens can often be a cumbersome process. The Stacks Testnet Faucet simplifies this by offering a hassle-free way to acquire STX tokens for testing purposes."),(0,r.kt)("h2",{id:"how-to-request-testnet-stx"},"How to Request Testnet STX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Visit the Faucet Page"),": Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://platform.hiro.so/faucet"},"platform.hiro.so/faucet"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Login into Your Wallet"),": Log into the platform with the wallet that has the test account that you want funded. Click ",(0,r.kt)("em",{parentName:"li"},"Connect Wallet")," to login."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Request Tokens"),": You'll find a straightforward interface with a button to request tokens. Simply click on the button ",(0,r.kt)("em",{parentName:"li"},"Request STX"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Receive 500 STX Tokens"),": By clicking the button, you'll receive 500 STX tokens to your testnet account.")),(0,r.kt)("h3",{id:"note"},"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Daily Limit"),": To ensure fair distribution and availability for all developers, there's a limit of one request per day. Plan your testing accordingly!")))}f.isMDXComponent=!0},81041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/faucet-697943822632feb6ea301000ed789d57.jpeg"}}]);