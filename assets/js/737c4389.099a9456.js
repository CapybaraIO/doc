"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[1203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Clarinet Deployment Plans"},i=void 0,o={unversionedId:"clarinet/guides/clarinet-deploy",id:"clarinet/guides/clarinet-deploy",title:"Clarinet Deployment Plans",description:"Overview",source:"@site/docs/clarinet/guides/clarinet-deploy.md",sourceDirName:"clarinet/guides",slug:"/clarinet/guides/clarinet-deploy",permalink:"/doc/clarinet/guides/clarinet-deploy",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/guides/clarinet-deploy.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Clarinet Deployment Plans"},sidebar:"clarinet",previous:{title:"Analyze with Check-Checker",permalink:"/doc/clarinet/guides/analyze-with-check-checker"},next:{title:"Clarinet Integrate",permalink:"/doc/clarinet/guides/clarinet-integrate"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Design",id:"design",level:2},{value:"Deployment plan primitives",id:"deployment-plan-primitives",level:2},{value:"References",id:"references",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Deployment Plans are reproducible deployment steps that publish a collection of on-chain transactions and one or more contracts to a network, whether a local developer network, the public testnet, or into production on mainnet. Deployment plans minimize the inherent complexity of deployments, such as smart-contract dependencies and interactions, transaction chaining limits, deployment costs, and more, while ensuring reproducible deployments critical for testing and automation purposes."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Topics covered in this guide"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#design"},"Deployment plan design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#deployment-plan-primitives"},"Plan primitives")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"The default deployment plan of every Clarinet project is contained within specifications set inside certain files. In addition to this default deployment plan, the user can manually configure each plan, adding additional transactions or contract calls across multiple Stacks or Bitcoin blocks."),(0,a.kt)("p",null,"You can commit, audit, and test contracts without including any secrets in the Deployment Plan and share these contracts without exposing any sensitive information."),(0,a.kt)("h2",{id:"deployment-plan-primitives"},"Deployment plan primitives"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Transaction primitive"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"publish contracts"),(0,a.kt)("td",{parentName:"tr",align:null},"- deploy a contract to an in-memory simulated Stacks chain or an integrate Stacks-Bitcoin environment ",(0,a.kt)("br",null)," - deploy to a public testnet or mainnet ",(0,a.kt)("br",null)," - deploy an external contract to your local network for testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"call contract functions"),(0,a.kt)("td",{parentName:"tr",align:null},"- call a contract deployed to any of your local devnets or public networks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"send BTC"),(0,a.kt)("td",{parentName:"tr",align:null},"- Perform a simple bitcoin transfer from a p2pkh address to a p2pkh address (devnet/testnet/mainnet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wait for block"),(0,a.kt)("td",{parentName:"tr",align:null},"- Test or automate contract deployment across multiple Stacks or Bitcoin blocks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"send STX"),(0,a.kt)("td",{parentName:"tr",align:null},"- send stacks to an address or contract")))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"For a more detailed discussion on how to use Deployment Plans, please see the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/how-to-use-deployment-plans"},"How To Guide for deployment plans"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YcIg5VCO98s"},"How to Set Up Custom Deployment Plans")," YouTube video.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.hiro.so/blog/meet-4-new-features-in-clarinet"},"Meet 4 New Features in Clarinet")," blog post.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ciHxOGBBS18"},"Technical Deep Dive On Clarinet")," YouTube video."))))}u.isMDXComponent=!0}}]);