"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[9682],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(f,c(c({ref:e},d),{},{components:n})):r.createElement(f,c({ref:e},d))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62674:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Add new Contract"},c=void 0,i={unversionedId:"clarinet/guides/how-to-add-contract",id:"clarinet/guides/how-to-add-contract",title:"Add new Contract",description:"Clarinet can handle adding a new contract and its configuration to your project.",source:"@site/docs/clarinet/guides/how-to-add-contract.md",sourceDirName:"clarinet/guides",slug:"/clarinet/guides/how-to-add-contract",permalink:"/doc/clarinet/guides/how-to-add-contract",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/guides/how-to-add-contract.md",tags:[],version:"current",frontMatter:{title:"Add new Contract"},sidebar:"clarinet",previous:{title:"Create new Project",permalink:"/doc/clarinet/guides/how-to-create-new-project"},next:{title:"Check Contracts",permalink:"/doc/clarinet/guides/how-to-check-contract"}},l={},u=[{value:"New Contract",id:"new-contract",level:2},{value:"Contract Configuration",id:"contract-configuration",level:2}],d={toc:u},p="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Clarinet can handle adding a new contract and its configuration to your project."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Topics covered in this guide"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new-contract"},"Add a new contract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contract-configuration"},"Verify contract configuration"))),(0,a.kt)("h2",{id:"new-contract"},"New Contract"),(0,a.kt)("p",null,"You can use the command below to add a new contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new bbtc\n")),(0,a.kt)("p",null,"Clarinet will add two files to your project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the contract file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"contracts")," directory"),(0,a.kt)("li",{parentName:"ul"},"the contract test file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"tests")," directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Clarinet.toml\n\u251c\u2500\u2500 contracts\n\u2502   \u2514\u2500\u2500 bbtc.clar\n\u251c\u2500\u2500 settings\n\u2502   \u2514\u2500\u2500 Devnet.toml\n\u2502   \u2514\u2500\u2500 Mainnet.toml\n\u2502   \u2514\u2500\u2500 Testnet.toml\n\u2514\u2500\u2500 tests\n    \u2514\u2500\u2500 bbtc_test.ts\n")),(0,a.kt)("h2",{id:"contract-configuration"},"Contract Configuration"),(0,a.kt)("p",null,"Clarinet will also add your contract configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Clarinet.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[contracts.my-contract]\npath = "contracts/my-contract.clar"\nclarity_version = 2\nepoch = 2.4\n')),(0,a.kt)("p",null,"You can add contracts to your project by adding the files manually; however, you must make sure to add the appropriate configuration\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," for Clarinet to recognize the contracts."))}s.isMDXComponent=!0}}]);