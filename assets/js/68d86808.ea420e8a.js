"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:a,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const s={title:"Overview"},i="Stacks Connect",r={unversionedId:"stacks.js/connect",id:"stacks.js/connect",title:"Overview",description:"<a",source:"@site/docs/stacks.js/connect.md",sourceDirName:"stacks.js",slug:"/stacks.js/connect",permalink:"/doc/stacks.js/connect",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/connect.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"stacks-js",previous:{title:"Getting Started",permalink:"/doc/stacks.js/getting-started"},next:{title:"Connecting Wallets & Authenticating",permalink:"/doc/stacks.js/guides/authenticate-users-with-connect"}},c={},l=[{value:"Features",id:"features",level:2},{value:"Getting Started with Stacks Connect",id:"getting-started-with-stacks-connect",level:2},{value:"1. Add the dependency",id:"1-add-the-dependency",level:3},{value:"2. Creating <code>AppConfig</code> and <code>UserSession</code>",id:"2-creating-appconfig-and-usersession",level:3},{value:"3. Interacting with the wallet",id:"3-interacting-with-the-wallet",level:3},{value:"&quot;Connect&quot; aka authentication (<code>showConnect</code>)",id:"connect-aka-authentication-showconnect",level:4},{value:"Sending STX (<code>openSTXTransfer</code>)",id:"sending-stx-openstxtransfer",level:4},{value:"Calling Smart-Contracts (<code>openContractCall</code>)",id:"calling-smart-contracts-opencontractcall",level:4},{value:"Sending transactions with post-conditions (<code>openContractCall</code>)",id:"sending-transactions-with-post-conditions-opencontractcall",level:4},{value:"Post-Condition Modes",id:"post-condition-modes",level:5}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stacks-connect"},"Stacks Connect"),(0,a.kt)("div",{className:"gap-3 flex flex-wrap mb-6"},(0,a.kt)("a",{className:"inline-block bg-neutral-200 hover:bg-neutral-100 rounded-md text-sm text-neutral-700 px-2 py-1 hover:text-neutral-700 hover:no-underline transition-colors",href:"https://connect.stacks.js.org"},"Stacks Connect Reference ",(0,a.kt)("span",{className:"i-radix-icons-link-2 align-text-bottom text-lg"})),(0,a.kt)("a",{className:"inline-block bg-violet-300 hover:bg-violet-200 rounded-md text-sm text-violet-800 px-2 py-1 hover:text-violet-800 hover:no-underline transition-colors",href:"https://discord.com/channels/621759717756370964/1022879438515486791"},"Discord Support ",(0,a.kt)("span",{className:"i-bi-discord align-text-bottom text-lg"}))),(0,a.kt)("p",null,"Stacks Connect is a frontend library that allows developers to build Stacks-ready web applications.\nKickstart your next project with Stacks Connect templates with React, Vue, and more ",(0,a.kt)("a",{parentName:"p",href:"/stacksjs-starters"},"\u2192 Stacks.js Starters")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcf8 Prompt a user to sign transactions with their Stacks wallet"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udec2 Provide the web-app with the user's Stacks and Bitcoin addresses")),(0,a.kt)("h2",{id:"getting-started-with-stacks-connect"},"Getting Started with Stacks Connect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-add-the-dependency"},"Add the dependency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-creating-appconfig-and-usersession"},"Creating ",(0,a.kt)("inlineCode",{parentName:"a"},"AppConfig")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"UserSession"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-interacting-with-the-wallet"},"Interacting with the wallet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#connect-aka-authentication-showconnect"},'"Connect" aka authentication (',(0,a.kt)("inlineCode",{parentName:"a"},"showConnect"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sending-stx-openstxtransfer"},"Sending STX (",(0,a.kt)("inlineCode",{parentName:"a"},"openSTXTransfer"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#calling-smart-contracts-opencontractcall"},"Calling Smart-Contracts (",(0,a.kt)("inlineCode",{parentName:"a"},"openContractCall"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sending-transactions-with-post-conditions-opencontractcall"},"Sending transactions with post-conditions (",(0,a.kt)("inlineCode",{parentName:"a"},"openContractCall"),")"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#post-condition-modes"},"Post-Condition Modes"))))))),(0,a.kt)("h3",{id:"1-add-the-dependency"},"1. Add the dependency"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," dependency to your project using your favorite package manager.\n",(0,a.kt)("em",{parentName:"p"},"Some options below")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @stacks/connect\npnpm install @stacks/connect\nyarn add @stacks/connect\n")),(0,a.kt)("h3",{id:"2-creating-appconfig-and-usersession"},"2. Creating ",(0,a.kt)("inlineCode",{parentName:"h3"},"AppConfig")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"UserSession")),(0,a.kt)("p",null,"Add a reusable ",(0,a.kt)("inlineCode",{parentName:"p"},"UserSession")," instance to your project.\nThis will allow your website to store authentication state in localStorage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* ./userSession.js */\nimport { AppConfig, UserSession } from '@stacks/connect';\n\nconst appConfig = new AppConfig(['store_write', 'publish_data']);\nexport const userSession = new UserSession({ appConfig }); // we will use this export from other files\n")),(0,a.kt)("h3",{id:"3-interacting-with-the-wallet"},"3. Interacting with the wallet"),(0,a.kt)("h4",{id:"connect-aka-authentication-showconnect"},'"Connect" aka authentication (',(0,a.kt)("inlineCode",{parentName:"h4"},"showConnect"),")"),(0,a.kt)("p",null,"Connecting the wallet is a very simple form of authentication.\nThis process gives the web-app information about a wallet account (selected by the user)."),(0,a.kt)("p",null,"The snippet below lets your web-app trigger the wallet to open and ",(0,a.kt)("em",{parentName:"p"},"authenticate")," an account.\nIf no wallet is installed, an informational modal will be displayed in the web-app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { showConnect } from '@stacks/connect';\nimport { userSession } from './userSession';\n\nconst myAppName = 'My Stacks Web-App'; // shown in wallet pop-up\nconst myAppIcon = window.location.origin + '/my_logo.png'; // shown in wallet pop-up\n\nshowConnect({\n  userSession, // `userSession` from previous step, to access storage\n  appDetails: {\n    name: myAppName,\n    icon: myAppIcon,\n  },\n  onFinish: () => {\n    window.location.reload(); // WHEN user confirms pop-up\n  },\n  onCancel: () => {\n    console.log('oops'); // WHEN user cancels/closes pop-up\n  },\n});\n")),(0,a.kt)("h4",{id:"sending-stx-openstxtransfer"},"Sending STX (",(0,a.kt)("inlineCode",{parentName:"h4"},"openSTXTransfer"),")"),(0,a.kt)("p",null,"Sending STX tokens is also possible through web-apps interacting with a user's wallet."),(0,a.kt)("p",null,"The snippet below will open the wallet to ",(0,a.kt)("em",{parentName:"p"},"confirm and broadcast")," a smart-contract transaction.\nHere, we are sending ",(0,a.kt)("inlineCode",{parentName:"p"},"10000")," micro-STX tokens to a recipient address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { openSTXTransfer } from '@stacks/connect';\nimport { StacksTestnet } from '@stacks/network';\nimport { AnchorMode, PostConditionMode } from '@stacks/transactions';\nimport { userSession } from './userSession';\n\nopenSTXTransfer({\n  network: new StacksTestnet(), // which network to use; use `new StacksMainnet()` for mainnet\n  anchorMode: AnchorMode.Any, // which type of block the tx should be mined in\n\n  recipient: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK', // which address we are sending to\n  amount: 10000, // tokens, denominated in micro-STX\n  memo: 'Nr. 1337', // optional; a memo to help identify the tx\n\n  onFinish: response => {\n    // WHEN user confirms pop-up\n    console.log(response.txid); // the response includes the txid of the transaction\n  },\n  onCancel: () => {\n    // WHEN user cancels/closes pop-up\n    console.log('User canceled');\n  },\n});\n")),(0,a.kt)("h4",{id:"calling-smart-contracts-opencontractcall"},"Calling Smart-Contracts (",(0,a.kt)("inlineCode",{parentName:"h4"},"openContractCall"),")"),(0,a.kt)("p",null,"Calling smart-contracts lets users interact with the blockchain through transactions."),(0,a.kt)("p",null,"The snippet below will open the wallet to ",(0,a.kt)("em",{parentName:"p"},"confirm and broadcast")," a smart-contract transaction.\nHere, we are passing our pick ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," to an imaginary deployed voting smart-contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { openContractCall } from '@stacks/connect';\nimport { StacksTestnet } from '@stacks/network';\nimport { AnchorMode, PostConditionMode, stringUtf8CV } from '@stacks/transactions';\nimport { userSession } from './userSession';\n\nconst pick = stringUtf8CV('Alice');\n\nopenContractCall({\n  network: new StacksTestnet(),\n  anchorMode: AnchorMode.Any, // which type of block the tx should be mined in\n\n  contractAddress: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK',\n  contractName: 'example-contract',\n  functionName: 'vote',\n  functionArgs: [pick],\n\n  postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred\n  postConditions: [], // for an example using post-conditions, see next example\n\n  onFinish: response => {\n    // WHEN user confirms pop-up\n  },\n  onCancel: () => {\n    // WHEN user cancels/closes pop-up\n  },\n});\n")),(0,a.kt)("h4",{id:"sending-transactions-with-post-conditions-opencontractcall"},"Sending transactions with post-conditions (",(0,a.kt)("inlineCode",{parentName:"h4"},"openContractCall"),")"),(0,a.kt)("p",null,"Consider the example above.\nUsing ",(0,a.kt)("a",{parentName:"p",href:"https://docs.hiro.so/get-started/transactions#post-conditions"},"post-conditions"),", a feature of the Stacks blockchain, we can ensure something happened after a transaction.\nHere, we could ensure that the recipient indeed receives a certain amount of STX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  PostConditionMode,\n  FungibleConditionCode,\n  makeStandardSTXPostCondition,\n} from '@stacks/transactions';\n\n// this post-condition ensures that our recipient receives at least 5000 STX tokens\nconst myPostCondition = makeStandardSTXPostCondition(\n  'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK', // address of recipient\n  FungibleConditionCode.GreaterEqual, // comparator\n  5000000000 // relative amount to previous balance (denoted in micro-STX)\n);\n\n// passing to `openContractCall` options, e.g. modifying our previous example ...\n  postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred\n  postConditions: [ myPostCondition ],\n// ...\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more examples on constructing different kinds of post-conditions read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks.js/tree/main/packages/transactions#post-conditions"},"Post-Conditions Guide of Stacks.js"),".")),(0,a.kt)("h5",{id:"post-condition-modes"},"Post-Condition Modes"),(0,a.kt)("p",null,"If post-conditions ",(0,a.kt)("inlineCode",{parentName:"p"},"postConditions: [ ... ]")," are specified, they will ALWAYS be checked by blockchain nodes.\nIf ANY conditions fails, the transaction will fail."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Post-Condition Mode")," only relates to transfers of assets, which were not specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"postConditions"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PostConditionMode.Deny")," will fail the transaction if any unspecified assets are transferred"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PostConditionMode.Allow")," will allow unspecified assets to be transferred"),(0,a.kt)("li",{parentName:"ul"},"In both cases, all ",(0,a.kt)("inlineCode",{parentName:"li"},"postConditions")," will be checked")))}u.isMDXComponent=!0}}]);