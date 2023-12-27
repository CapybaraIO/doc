"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[7288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create new Project"},c=void 0,i={unversionedId:"clarinet/guides/how-to-create-new-project",id:"clarinet/guides/how-to-create-new-project",title:"Create new Project",description:"Once you have installed Clarinet, you may then use Clarinet to create a new project.",source:"@site/docs/clarinet/guides/how-to-create-new-project.md",sourceDirName:"clarinet/guides",slug:"/clarinet/guides/how-to-create-new-project",permalink:"/doc/clarinet/guides/how-to-create-new-project",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/guides/how-to-create-new-project.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Create new Project"},sidebar:"clarinet",previous:{title:"Unit Tests With the Clarinet SDK",permalink:"/doc/clarinet/guides/test-contract-with-clarinet-sdk"},next:{title:"Add new Contract",permalink:"/doc/clarinet/guides/how-to-add-contract"}},l={},p=[{value:"New project",id:"new-project",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have installed Clarinet, you may then use Clarinet to create a new project. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Topic covered in this guide"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new-project"},"Create new project"))),(0,a.kt)("h2",{id:"new-project"},"New project"),(0,a.kt)("p",null,"To create a new project, enter the command shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet new my-project && cd my-project\n")),(0,a.kt)("p",null,"Clarinet creates a project directory with the following directory layout: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Clarinet.toml\n\u251c\u2500\u2500 contracts\n\u251c\u2500\u2500 settings\n\u2502   \u2514\u2500\u2500 Devnet.toml\n\u2502   \u2514\u2500\u2500 Testnet.toml\n\u2502   \u2514\u2500\u2500 Mainnet.toml\n\u2514\u2500\u2500 tests\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," file contains configuration files for the smart contracts in your project. Clarinet will add contracts to this file when you create contracts in your project."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"settings/Devnet.toml")," file contains configuration for accounts in the Clarinet console, including the seed phrases and initial balances. Initial balances are in microstacks (uSTX)."))}d.isMDXComponent=!0}}]);