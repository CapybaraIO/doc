"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24654:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),s=(n(67294),n(3905));const i={toc:[{value:"StacksProvider injected variable",id:"stacksprovider-injected-variable",level:2}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,s.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"stacksprovider-injected-variable"},"StacksProvider injected variable"),(0,s.kt)("p",null,"When users have the ",(0,s.kt)("a",{parentName:"p",href:"https://leather.io/install-extension"},"Leather Wallet")," extension installed, the extension will inject a global ",(0,s.kt)("inlineCode",{parentName:"p"},"StacksProvider")," variable into the JavaScript context of your web app. This allows your JavaScript code to hook into the extension, and make authentication, transaction and signature requests. ",(0,s.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," automatically detects and uses this global variable for you."),(0,s.kt)("p",null,"At the moment, only the Leather Wallet extension and the Xverse built-in browswer includes a ",(0,s.kt)("inlineCode",{parentName:"p"},"StacksProvider"),", however, ideally more wallets (and mobile wallets) will support this format, so that your app can be compatible with any Stacks wallet that has functionality to embed web applications."),(0,s.kt)("p",null,"In your web application, you can check to see if the user has a compatible wallet installed by checking for the presence of ",(0,s.kt)("inlineCode",{parentName:"p"},"window.StacksProvider"),"."),(0,s.kt)("p",null,"Here is the interface for the ",(0,s.kt)("inlineCode",{parentName:"p"},"StacksProvider")," variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"interface StacksProvider {\n  transactionRequest(payload: string): Promise<FinishedTxPayload | SponsoredFinishedTxPayload>;\n  authenticationRequest(payload: string): Promise<string>;\n  signatureRequest(payload: string): Promise<SignatureData>;\n  structuredDataSignatureRequest(payload: string): Promise<SignatureData>;\n  profileUpdateRequest(payload: string): Promise<PublicProfile>;\n  getProductInfo:\n    | undefined\n    | (() => {\n        version: string;\n        name: string;\n        meta?: {\n          tag?: string;\n          commit?: string;\n          [key: string]: any;\n        };\n        [key: string]: any;\n      });\n}\n")))}o.isMDXComponent=!0},53256:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),s=(n(67294),n(3905));const i={toc:[]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,s.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{class:"block p-4 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 hover:dark:bg-neutral-600 bg-neutral-200 rounded-lg dark:bg-neutral-700 mb-6 hover:no-underline hover:text-neutral-800 hover:dark:text-neutral-100 transition-colors",href:"https://docs.hiro.so/stacksjs-starters"},(0,s.kt)("span",{class:"i-radix-icons-lightning-bolt align-text-bottom text-lg"})," Bootstrap your project with ",(0,s.kt)("strong",null,"Stacks.js Starters"),", which come with Stacks Connect pre-installed ",(0,s.kt)("span",{class:"i-bi-globe2 align-text-bottom text-lg"})))}o.isMDXComponent=!0},62227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),i=n(53256),r=n(24654);const o={title:"Sign Messages"},l=void 0,p={unversionedId:"stacks.js/guides/sign-messages",id:"stacks.js/guides/sign-messages",title:"Sign Messages",description:"This guide explains how to prompt users to sign a message.",source:"@site/docs/stacks.js/guides/sign-messages.md",sourceDirName:"stacks.js/guides",slug:"/stacks.js/guides/sign-messages",permalink:"/doc/stacks.js/guides/sign-messages",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/guides/sign-messages.md",tags:[],version:"current",frontMatter:{title:"Sign Messages"},sidebar:"stacks-js",previous:{title:"Sign Transactions",permalink:"/doc/stacks.js/guides/sign-transactions"},next:{title:"Integrating Stacking",permalink:"/doc/stacks.js/guides/how-to-integrate-stacking"}},c={},u=[{value:"Install dependency",id:"install-dependency",level:2},{value:"Initiate session",id:"initiate-session",level:2},{value:"Prompt to sign a message",id:"prompt-to-sign-a-message",level:2},{value:"Getting the signed message back after completion",id:"getting-the-signed-message-back-after-completion",level:2},{value:"How to verify a signature",id:"how-to-verify-a-signature",level:2},{value:"Specifying the network for a transaction",id:"network-option",level:2},{value:"Usage in React Apps",id:"usage-in-react-apps",level:2},{value:"Signature request / response payload",id:"signature-request--response-payload",level:2},{value:"Signature Request Payload",id:"signature-request-payload",level:3},{value:"Signature Response payload",id:"signature-response-payload",level:3}],g={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.ZP,{mdxType:"StacksjsStartersNote"}),(0,s.kt)("p",null,"This guide explains how to prompt users to sign a message."),(0,s.kt)("p",null,"The user will be prompted a popup from the Leather Wallet showing the message you would like them to sign."),(0,s.kt)("p",null,"The user can then click on the \u2018Sign\u2019 button which will return the signature data and the user's publicKey to your app. You can then verify the signature by passing the signature data and the public key to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks.js"},(0,s.kt)("inlineCode",{parentName:"a"},"stacks.js"))," ",(0,s.kt)("inlineCode",{parentName:"p"},"verifySignature")," method."),(0,s.kt)("p",null,"The message can be any utf-8 string."),(0,s.kt)("p",null,"Internally the string will be hashed using ",(0,s.kt)("inlineCode",{parentName:"p"},"sha256")," and signed with ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," using the user's privateKey"),(0,s.kt)("h2",{id:"install-dependency"},"Install dependency"),(0,s.kt)("p",null,"@stacks/connect should be installed as a dependency."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install @stacks/connect\n")),(0,s.kt)("h2",{id:"initiate-session"},"Initiate session"),(0,s.kt)("p",null,"Users must authenticate to an app before you request message signing. Users can install an authenticator like the ",(0,s.kt)("a",{parentName:"p",href:"https://leather.io/install-extension"},"Leather Wallet"),"."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.hiro.so/build-apps/authentication"},"authentication guide")," before proceeding to integrate the following message signing capabilities."),(0,s.kt)("h2",{id:"prompt-to-sign-a-message"},"Prompt to sign a message"),(0,s.kt)("p",null,"Call the\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"openSignatureRequestPopup"),"\xa0function provided by the\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," \xa0package to trigger the display of the message signing prompt."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { openSignatureRequestPopup } from '@stacks/connect';\nimport { StacksTestnet } from '@stacks/network';\n\nconst message = 'Hello World';\n\nopenSignatureRequestPopup({\n  message,\n  network: new StacksTestnet(), // for mainnet, `new StacksMainnet()`\n  appDetails: {\n    name: 'My App',\n    icon: window.location.origin + '/my-app-logo.svg',\n  },\n  onFinish(data) {\n    console.log('Signature of the message', data.signature);\n    console.log('Use public key:', data.publicKey);\n  },\n});\n")),(0,s.kt)("p",null,"Several parameters are available for calling\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"openSignatureRequestPopup"),". Here's the exact interface for them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"interface SignatureRequestOptions {\n  message: string;\n  onFinish?: (data: SignatureData) => void;\n  onCancel?: (data: SignatureData) => void;\n  appDetails: {\n    name: string;\n    icon: string;\n  };\n  authOrigin?: string;\n  stxAddress?: string;\n  userSession?: UserSession;\n}\n")),(0,s.kt)("h2",{id:"getting-the-signed-message-back-after-completion"},"Getting the signed message back after completion"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"openSignatureRequestPopup")," signing method from ",(0,s.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," allows you to specify an ",(0,s.kt)("inlineCode",{parentName:"p"},"onFinish")," callback.\nThis callback will be triggered after the user has successfully signed the message."),(0,s.kt)("p",null,"You can get the signature of the message via the arguments passed to\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"onFinish"),". Your callback will be fired with a single argument, which is an object with the following properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SignatureData {\n  /* Hex encoded DER signature */\n  signature: string;\n  /* Hex encoded private string taken from privateKey */\n  publicKey: string;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const onFinish = (data: SignatureData) => {\n  console.log('Signature', data.signature);\n  console.log('PublicKey', data.publicKey);\n};\n")),(0,s.kt)("h2",{id:"how-to-verify-a-signature"},"How to verify a signature"),(0,s.kt)("p",null,"You can easily verify the signature using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks.js"},(0,s.kt)("inlineCode",{parentName:"a"},"@stacks/stacks.js"))," package as seen in the following example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { verifyMessageSignatureRsv } from '@stacks/encryption';\n\nconst message = 'Hello World';\n\nopenSignatureRequestPopup({\n  // ...\n  onFinish({ publicKey, signature }) {\n    const verified = verifyMessageSignatureRsv({ message, publicKey, signature });\n    if (verified) {\n      // Trigger a notification explaining signature is verified\n    }\n  },\n});\n")),(0,s.kt)("h2",{id:"network-option"},"Specifying the network for a transaction"),(0,s.kt)("p",null,"All of the methods included on this page accept a ",(0,s.kt)("inlineCode",{parentName:"p"},"network")," option. By default, Connect uses a testnet network option. You can import a network configuration from the ",(0,s.kt)("a",{parentName:"p",href:"https://stacks.js.org/modules/network.html"},(0,s.kt)("inlineCode",{parentName:"a"},"@stacks/network"))," package."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { StacksTestnet, StacksMainnet } from '@stacks/network';\n\nconst testnet = new StacksTestnet();\nconst mainnet = new StacksMainnet();\n\n// use this in your messe signing method:\n\nopenSignatureRequestPopup({\n  network: mainnet,\n  // other relevant options\n});\n")),(0,s.kt)("h2",{id:"usage-in-react-apps"},"Usage in React Apps"),(0,s.kt)("p",null,"Import the ",(0,s.kt)("inlineCode",{parentName:"p"},"useConnect")," helper from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/connect"},(0,s.kt)("inlineCode",{parentName:"a"},"connect-react"))," package to sign messages more seamlessly with React apps.\nYou must install a version >= 15.0.0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install @stacks/connect-react\n")),(0,s.kt)("p",null,"Use the function with the same parameters as outlined above. However, you don't have to specify ",(0,s.kt)("inlineCode",{parentName:"p"},"appDetails")," since they are detected automatically if ",(0,s.kt)("inlineCode",{parentName:"p"},"useConnect")," has been used already ",(0,s.kt)("a",{parentName:"p",href:"/build-apps/authentication#usage-in-react-apps"},"for authentication"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useConnect } from '@stacks/connect-react';\n\nconst MyComponent = () => {\n  const { sign } = useConnect();\n\n  const onClick = async () => {\n    const options = {\n      /** See examples above */\n    };\n    await sign(options);\n  };\n\n  return <span onClick={onClick}>Sign message</span>;\n};\n")),(0,s.kt)("h2",{id:"signature-request--response-payload"},"Signature request / response payload"),(0,s.kt)("p",null,"Under the hood, ",(0,s.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," will serialize and deserialize data between your app and the Leather Wallet."),(0,s.kt)("p",null,"These payloads are tokens that conform to the ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"JSON Web Token (JWT) standard")," with additional support for the ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve used by Bitcoin and many other cryptocurrencies."),(0,s.kt)("h3",{id:"signature-request-payload"},"Signature Request Payload"),(0,s.kt)("p",null,"When an application triggers a message signing from\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"@stacks/connect"),", the options of that signature request are serialized into a\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"signatureRequest"),"\xa0payload. The\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"signatureRequest"),"\xa0is similar to the\xa0",(0,s.kt)("a",{parentName:"p",href:"https://docs.hiro.so/build-apps/authentication#authrequest-payload-schema"},"authRequest"),"\xa0payload used for authentication."),(0,s.kt)("p",null,"The signature request payload has the following schema, in addition to the standard JWT required fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface SignatureRequestPayload {\n  message: string;\n  publicKey: string;\n  /**\n   * Provide the Leather Wallet with a suggested account to sign this transaction with.\n   * This is set by default if a `userSession` option is provided.\n   */\n  stxAddress?: string;\n  appDetails?: AuthOptions['appDetails'];\n  network?: StacksNetwork;\n}\n")),(0,s.kt)("h3",{id:"signature-response-payload"},"Signature Response payload"),(0,s.kt)("p",null,"After the user signs the message, a ",(0,s.kt)("inlineCode",{parentName:"p"},"signatureResponse")," payload is sent back to your app."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface SignatureData {\n  /* Hex encoded DER signature */\n  signature: string;\n  /* Hex encoded private string taken from privateKey */\n  publicKey: string;\n}\n")),(0,s.kt)(r.ZP,{mdxType:"StacksProviderSection"}))}m.isMDXComponent=!0}}]);