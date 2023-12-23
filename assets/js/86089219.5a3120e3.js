"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[5940],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24654:(t,e,n)=>{n.d(e,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={toc:[{value:"StacksProvider injected variable",id:"stacksprovider-injected-variable",level:2}]},i="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stacksprovider-injected-variable"},"StacksProvider injected variable"),(0,r.kt)("p",null,"When users have the ",(0,r.kt)("a",{parentName:"p",href:"https://leather.io/install-extension"},"Leather Wallet")," extension installed, the extension will inject a global ",(0,r.kt)("inlineCode",{parentName:"p"},"StacksProvider")," variable into the JavaScript context of your web app. This allows your JavaScript code to hook into the extension, and make authentication, transaction and signature requests. ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," automatically detects and uses this global variable for you."),(0,r.kt)("p",null,"At the moment, only the Leather Wallet extension and the Xverse built-in browswer includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"StacksProvider"),", however, ideally more wallets (and mobile wallets) will support this format, so that your app can be compatible with any Stacks wallet that has functionality to embed web applications."),(0,r.kt)("p",null,"In your web application, you can check to see if the user has a compatible wallet installed by checking for the presence of ",(0,r.kt)("inlineCode",{parentName:"p"},"window.StacksProvider"),"."),(0,r.kt)("p",null,"Here is the interface for the ",(0,r.kt)("inlineCode",{parentName:"p"},"StacksProvider")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface StacksProvider {\n  transactionRequest(payload: string): Promise<FinishedTxPayload | SponsoredFinishedTxPayload>;\n  authenticationRequest(payload: string): Promise<string>;\n  signatureRequest(payload: string): Promise<SignatureData>;\n  structuredDataSignatureRequest(payload: string): Promise<SignatureData>;\n  profileUpdateRequest(payload: string): Promise<PublicProfile>;\n  getProductInfo:\n    | undefined\n    | (() => {\n        version: string;\n        name: string;\n        meta?: {\n          tag?: string;\n          commit?: string;\n          [key: string]: any;\n        };\n        [key: string]: any;\n      });\n}\n")))}s.isMDXComponent=!0},53256:(t,e,n)=>{n.d(e,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},i="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{class:"block p-4 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 hover:dark:bg-neutral-600 bg-neutral-200 rounded-lg dark:bg-neutral-700 mb-6 hover:no-underline hover:text-neutral-800 hover:dark:text-neutral-100 transition-colors",href:"https://docs.hiro.so/stacksjs-starters"},(0,r.kt)("span",{class:"i-radix-icons-lightning-bolt align-text-bottom text-lg"})," Bootstrap your project with ",(0,r.kt)("strong",null,"Stacks.js Starters"),", which come with Stacks Connect pre-installed ",(0,r.kt)("span",{class:"i-bi-globe2 align-text-bottom text-lg"})))}s.isMDXComponent=!0},88873:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(53256),i=n(24654);const s={title:"Sign Transactions"},l=void 0,c={unversionedId:"stacks.js/guides/sign-transactions",id:"stacks.js/guides/sign-transactions",title:"Sign Transactions",description:"This guide explains how to prompt users to sign transactions and broadcast them to the Stacks blockchain by implementing the connect package of Stacks.js.",source:"@site/docs/stacks.js/guides/sign-transactions.md",sourceDirName:"stacks.js/guides",slug:"/stacks.js/guides/sign-transactions",permalink:"/doc/stacks.js/guides/sign-transactions",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/guides/sign-transactions.md",tags:[],version:"current",frontMatter:{title:"Sign Transactions"},sidebar:"stacks-js",previous:{title:"Connecting Wallets & Authenticating",permalink:"/doc/stacks.js/guides/authenticate-users-with-connect"},next:{title:"Sign Messages",permalink:"/doc/stacks.js/guides/sign-messages"}},p={},d=[{value:"Install dependency",id:"install-dependency",level:2},{value:"Initiate session",id:"initiate-session",level:2},{value:"Get the user&#39;s Stacks address",id:"get-the-users-stacks-address",level:2},{value:"Prompt to transfer STX",id:"prompt-to-transfer-stx",level:2},{value:"Prompt to deploy smart contract",id:"prompt-to-deploy-smart-contract",level:2},{value:"Prompt to execute contract",id:"prompt-to-execute-contract",level:2},{value:"Getting the signed transaction back after completion",id:"onFinish-option",level:2},{value:"Specifying the network for a transaction",id:"network-option",level:2},{value:"Usage in React Apps",id:"usage-in-react-apps",level:2},{value:"Request testnet STX from faucet",id:"request-testnet-stx-from-faucet",level:2},{value:"Transaction request / response payload",id:"transaction-request--response-payload",level:2},{value:"Transaction Request Payload",id:"transaction-request-payload",level:3},{value:"Transaction Response payload",id:"transaction-response-payload",level:3}],u={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"StacksjsStartersNote"}),(0,r.kt)("p",null,"This guide explains how to prompt users to sign ",(0,r.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/transactions"},"transactions")," and broadcast them to the Stacks blockchain by implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/connect"},(0,r.kt)("inlineCode",{parentName:"a"},"connect"))," package of Stacks.js."),(0,r.kt)("p",null,"Transaction signing provides a way for users execute Clarity smart contracts that are relevant to your app then handle the result as appropriate."),(0,r.kt)("p",null,"Users can sign transactions that exchange fungible or non-fungible tokens with upfront guarantees that help them retain control over their digital assets."),(0,r.kt)("p",null,"There are three types of transactions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"STX transfer"),(0,r.kt)("li",{parentName:"ol"},"Contract deployment"),(0,r.kt)("li",{parentName:"ol"},"Contract execution")),(0,r.kt)("p",null,"See the public registry tutorial for a concrete example of these capabilities in practice."),(0,r.kt)("h2",{id:"install-dependency"},"Install dependency"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In order to utilize the latest transaction signing with the Stacks Wallet, use version 5 of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," NPM package.")),(0,r.kt)("p",null,"The following dependency must be installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @stacks/connect\n")),(0,r.kt)("h2",{id:"initiate-session"},"Initiate session"),(0,r.kt)("p",null,"Users must authenticate to an app before the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," package will work to prompt them for signing and broadcasting transactions to the Stacks blockchain with an authenticator such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.hiro.so/wallet/install-web"},"the Stacks Wallet"),"."),(0,r.kt)("p",null,"See the authentication guide before proceeding to integrate the following transaction signing capabilities in cases where ",(0,r.kt)("inlineCode",{parentName:"p"},"userSession.isUserSignedIn()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"get-the-users-stacks-address"},"Get the user's Stacks address"),(0,r.kt)("p",null,"After your user has authenticated with their Stacks Wallet, you can get their Stacks address from their ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const profile = userSession.loadUserData().profile.stxAddress;\n\nconst mainnetAddress = stxAddresses.mainnet;\n// "SP2K5SJNTB6YP3VCTCBE8G35WZBPVN6TDMDJ96QAH"\nconst testnetAddress = stxAddresses.testnet;\n// "ST2K5SJNTB6YP3VCTCBE8G35WZBPVN6TDMFEVESR6"\n')),(0,r.kt)("h2",{id:"prompt-to-transfer-stx"},"Prompt to transfer STX"),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"openSTXTransfer")," function provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," package to trigger the display of a transaction signing prompt for transferring STX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { openSTXTransfer } from '@stacks/connect';\nimport { StacksTestnet } from '@stacks/network';\n\nopenSTXTransfer({\n  recipient: 'ST2EB9WEQNR9P0K28D2DC352TM75YG3K0GT7V13CV',\n  amount: '100',\n  memo: 'Reimbursement',\n  network: new StacksTestnet(), // for mainnet, `new StacksMainnet()`\n  appDetails: {\n    name: 'My App',\n    icon: window.location.origin + '/my-app-logo.svg',\n  },\n  onFinish: data => {\n    console.log('Stacks Transaction:', data.stacksTransaction);\n    console.log('Transaction ID:', data.txId);\n    console.log('Raw transaction:', data.txRaw);\n  },\n});\n")),(0,r.kt)("p",null,"Several parameters are available for calling ",(0,r.kt)("inlineCode",{parentName:"p"},"openSTXTransfer"),". Here's the exact interface for them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface STXTransferOptions {\n  recipient: string;\n  amount: string;\n  memo?: string;\n  network: StacksNetwork;\n  fee: number | string;\n  appDetails: {\n    name: string;\n    icon: string;\n  };\n  onFinish: (data: FinishedTxData) => void;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recipient"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"STX address for recipient of transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of microstacks (1 STX = 1,000,000 microstacks) to be transferred provided as string to prevent floating point errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary that requires ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"icon")," for app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback executed by app when transaction has been signed and broadcasted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memo"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional memo for inclusion with transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"StacksNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the network that this transaction should be completed on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional fee amount in microstacks (1 STX = 1,000,000 microstacks) for overwriting the wallet's default fee value. ",(0,r.kt)("a",{parentName:"td",href:"https://forum.stacks.org/t/mempool-congestion-on-stacks-observations-and-next-steps-from-hiro/12325/5"},"Read more"))))),(0,r.kt)("h2",{id:"prompt-to-deploy-smart-contract"},"Prompt to deploy smart contract"),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"openContractDeploy")," function provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," package to trigger the display of a transaction signing prompt for deploying a smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { openContractDeploy } from '@stacks/connect';\n\nconst codeBody = '(begin (print \"hello, world\"))';\n\nopenContractDeploy({\n  contractName: 'my-contract-name',\n  codeBody,\n  appDetails: {\n    name: 'My App',\n    icon: window.location.origin + '/my-app-logo.svg',\n  },\n  onFinish: data => {\n    console.log('Stacks Transaction:', data.stacksTransaction);\n    console.log('Transaction ID:', data.txId);\n    console.log('Raw transaction:', data.txRaw);\n  },\n});\n")),(0,r.kt)("p",null,"Several parameters are available for calling ",(0,r.kt)("inlineCode",{parentName:"p"},"openContractDeploy"),". Here's the exact interface for them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ContractDeployOptions {\n  codeBody: string;\n  contractName: string;\n  network: StacksNetwork;\n  fee: number | string;\n  appDetails: {\n    name: string;\n    icon: string;\n  };\n  onFinish: (data: FinishedTxData) => void;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeBody"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Clarity source code for contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contractName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Name for contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary that requires ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"icon")," for app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback executed by app when transaction has been signed and broadcasted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"StacksNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the network that this transaction should be completed on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional fee amount in microstacks (1 STX = 1,000,000 microstacks) for overwriting the wallet's default fee value. ",(0,r.kt)("a",{parentName:"td",href:"https://forum.stacks.org/t/mempool-congestion-on-stacks-observations-and-next-steps-from-hiro/12325/5"},"Read more"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Contracts will deploy to the Stacks address of the authenticated user.")),(0,r.kt)("h2",{id:"prompt-to-execute-contract"},"Prompt to execute contract"),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"openContractCall")," function provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," package to trigger the display of a transaction signing prompt for executing a contract."),(0,r.kt)("p",null,"As an example, consider this simple Clarity contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public\n  (my-func\n    (arg-uint uint)\n    (arg-int int)\n    (arg-buff (buff 20))\n    (arg-string-ascii (string-ascii 20))\n    (arg-string-utf8 (string-utf8 20))\n    (arg-principal principal)\n    (arg-bool bool)\n  )\n  (ok u0)\n)\n")),(0,r.kt)("p",null,"To execute this function, invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"openContractCall")," method. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClarityValue")," types from ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/transactions")," to construct properly formatted arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { openContractCall } from '@stacks/connect';\nimport {\n  uintCV,\n  intCV,\n  bufferCV,\n  stringAsciiCV,\n  stringUtf8CV,\n  standardPrincipalCV,\n  trueCV,\n} from '@stacks/transactions';\n\nconst functionArgs = [\n  uintCV(1234),\n  intCV(-234),\n  bufferCV(Buffer.from('hello, world')),\n  stringAsciiCV('hey-ascii'),\n  stringUtf8CV('hey-utf8'),\n  standardPrincipalCV('STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6'),\n  trueCV(),\n];\n\nconst options = {\n  contractAddress: 'ST22T6ZS7HVWEMZHHFK77H4GTNDTWNPQAX8WZAKHJ',\n  contractName: 'my-contract',\n  functionName: 'my-func',\n  functionArgs,\n  appDetails: {\n    name: 'My App',\n    icon: window.location.origin + '/my-app-logo.svg',\n  },\n  onFinish: data => {\n    console.log('Stacks Transaction:', data.stacksTransaction);\n    console.log('Transaction ID:', data.txId);\n    console.log('Raw transaction:', data.txRaw);\n  },\n};\n\nawait openContractCall(options);\n")),(0,r.kt)("p",null,"Several parameters are available for calling ",(0,r.kt)("inlineCode",{parentName:"p"},"openContractCall"),". Here's the exact interface for them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ContractCallOptions {\n  contractAddress: string;\n  functionName: string;\n  contractName: string;\n  functionArgs?: ClarityValue[];\n  network: StacksNetwork;\n  fee: number | string;\n  appDetails: {\n    name: string;\n    icon: string;\n  };\n  onFinish: (data: FinishedTxData) => void;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contractAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Stacks address to which contract is deployed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contractName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of contract to sign"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"functionName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of function for signing / execution, which needs to be a ",(0,r.kt)("a",{parentName:"td",href:"https://docs.stacks.co/references/language-functions#define-public"},"public function"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"functionArgs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ClarityValue[]")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments for calling the function. ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/blockstack/stacks.js/tree/master/packages/transactions#constructing-clarity-values"},"Learn more about constructing clarity values"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary that requires ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"icon")," for app"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback executed by app when transaction has been signed and broadcasted."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"StacksNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the network that this transaction should be completed on."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional fee amount in microstacks (1 STX = 1,000,000 microstacks) for overwriting the wallet's default fee value. ",(0,r.kt)("a",{parentName:"td",href:"https://forum.stacks.org/t/mempool-congestion-on-stacks-observations-and-next-steps-from-hiro/12325/5"},"Read more")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"onFinish-option"},"Getting the signed transaction back after completion"),(0,r.kt)("p",null,"Each transaction signing method from ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," allows you to specify an ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," callback. This callback will be triggered after the user has successfully broadcasted their transaction. The transaction will be broadcasted, but it will be pending until it has been mined on the Stacks blockchain."),(0,r.kt)("p",null,"You can access some information about this transaction via the arguments passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish"),". Your callback will be fired with a single argument, which is an object with the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface FinishedTxData {\n  stacksTransaction: StacksTransaction;\n  txRaw: string;\n  txId: string;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StacksTransaction")," type comes from the ",(0,r.kt)("a",{parentName:"p",href:"https://stacks.js.org/modules/transactions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/transactions"))," library."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"txId")," property can be used to provide a link to view the transaction in the explorer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onFinish = data => {\n  const explorerTransactionUrl = 'https://explorer.stacks.co/txid/${data.txId}';\n  console.log('View transaction in explorer:', explorerTransactionUrl);\n};\n")),(0,r.kt)("h2",{id:"network-option"},"Specifying the network for a transaction"),(0,r.kt)("p",null,"All of the methods included on this page accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," option. By default, Connect uses a testnet network option. You can import a network configuration from the ",(0,r.kt)("a",{parentName:"p",href:"https://stacks.js.org/modules/network.html"},(0,r.kt)("inlineCode",{parentName:"a"},"@stacks/network"))," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { StacksTestnet, StacksMainnet } from '@stacks/network';\n\nconst testnet = new StacksTestnet();\nconst mainnet = new StacksMainnet();\n\n// use this in your transaction signing methods:\n\nopenSTXTransfer({\n  network: mainnet,\n  // other relevant options\n});\n")),(0,r.kt)("h2",{id:"usage-in-react-apps"},"Usage in React Apps"),(0,r.kt)("p",null,"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useConnect")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/connect"},(0,r.kt)("inlineCode",{parentName:"a"},"connect-react"))," package to integrate transaction signing more seamlessly into React apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @stacks/connect-react\n")),(0,r.kt)("p",null,"Each transaction signing method is itself available as a function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useConnect")," though prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"do")," for consistency with React action naming standards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openContractCall")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"doContractCall")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openSTXTransfer")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"doSTXTransfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openContractDeploy")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"doContractDeploy"))),(0,r.kt)("p",null,"Use these functions with the same parameters as outlined above. However, you don't have to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"appDetails")," since they are detected automatically if ",(0,r.kt)("inlineCode",{parentName:"p"},"useConnect")," has been used already ",(0,r.kt)("a",{parentName:"p",href:"/build-apps/authentication#usage-in-react-apps"},"for authentication"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useConnect } from '@stacks/connect-react';\n\nconst MyComponent = () => {\n  const { doContractCall } = useConnect();\n\n  const onClick = async () => {\n    const options = {\n      /** See examples above */\n    };\n    await doContractCall(options);\n  };\n\n  return <span onClick={onClick}>Call my contract</span>;\n};\n")),(0,r.kt)("h2",{id:"request-testnet-stx-from-faucet"},"Request testnet STX from faucet"),(0,r.kt)("p",null,"You may find it useful to request testnet STX from ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.stacks.co/sandbox/deploy?chain=testnet"},"the Explorer sandbox")," while developing your app with the Stacks testnet."),(0,r.kt)("h2",{id:"transaction-request--response-payload"},"Transaction request / response payload"),(0,r.kt)("p",null,"Under the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," will serialize and deserialize data between your app and the Stacks Wallet."),(0,r.kt)("p",null,"These payloads are tokens that conform to the ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"JSON Web Token (JWT) standard")," with additional support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve used by Bitcoin and many other cryptocurrencies."),(0,r.kt)("h3",{id:"transaction-request-payload"},"Transaction Request Payload"),(0,r.kt)("p",null,"When an application triggers an transaction from ",(0,r.kt)("inlineCode",{parentName:"p"},"@stacks/connect"),", the options of that transaction are serialized into a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionRequest")," payload. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionRequest")," is similar to the ",(0,r.kt)("a",{parentName:"p",href:"/build-apps/authentication#authrequest-payload-schema"},"authRequest")," payload used for authentication."),(0,r.kt)("p",null,"The transaction request payload has the following schema, in addition to the standard JWT required fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface TransactionRequest {\n  appDetails?: {\n    name: string;\n    icon: string;\n  };\n  // 1 = \"allow\", 2 = \"deny\".\n  postConditionMode?: PostConditionMode; // number\n  // Serialized version of post conditions\n  postConditions?: string[];\n  // JSON serialized version of `StacksNetwork`\n  // This allows the app to specify their default desired network.\n  // The user may switch networks before broadcasting their transaction.\n  network?: {\n    coreApiUrl: string;\n    chainID: ChainID; // number\n  };\n  // `AnchorMode` defined in `@stacks/transactions`\n  anchorMode?: AnchorMode; // number\n  // The desired default stacks address to sign with.\n  // There is no guarantee that the transaction is signed with this address;\n  stxAddress?: string;\n  txType: TransactionDetails; // see below\n}\n\nexport enum TransactionTypes {\n  ContractCall = 'contract_call',\n  ContractDeploy = 'smart_contract',\n  STXTransfer = 'token_transfer',\n}\n\ninterface ContractCallPayload extends TransactionRequest {\n  contractAddress: string;\n  contractName: string;\n  functionName: string;\n  // Serialized Clarity values to be used as arguments in the contract call\n  functionArgs: string[];\n  txType: TransactionTypes.ContractCall;\n}\n\ninterface ContractDeployPayload extends TransactinRequest {\n  contractName: string;\n  // raw source code for this contract\n  codeBody: string;\n  txType: TransactionTypes.ContractDeploy;\n}\n\ninterface StxTransferPayload extends TransactionRequest {\n  recipient: string;\n  // amount for this transaction, in microstacks\n  amount: string;\n  memo?: string;\n  txType: TransactionTypes.STXTransfer;\n}\n")),(0,r.kt)("h3",{id:"transaction-response-payload"},"Transaction Response payload"),(0,r.kt)("p",null,"After the user signs and broadcasts a transaction, a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionResponse")," payload is sent back to your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface TransactionResponse {\n  txId: string;\n  // hex serialized version of this transaction\n  txRaw: string;\n}\n")),(0,r.kt)(i.ZP,{mdxType:"StacksProviderSection"}))}k.isMDXComponent=!0}}]);