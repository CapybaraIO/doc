"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[1386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=l(n),u=i,k=h["".concat(p,".").concat(u)]||h[u]||d[u]||s;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53256:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));const s={toc:[]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{class:"block p-4 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 hover:dark:bg-neutral-600 bg-neutral-200 rounded-lg dark:bg-neutral-700 mb-6 hover:no-underline hover:text-neutral-800 hover:dark:text-neutral-100 transition-colors",href:"https://docs.hiro.so/stacksjs-starters"},(0,i.kt)("span",{class:"i-radix-icons-lightning-bolt align-text-bottom text-lg"})," Bootstrap your project with ",(0,i.kt)("strong",null,"Stacks.js Starters"),", which come with Stacks Connect pre-installed ",(0,i.kt)("span",{class:"i-bi-globe2 align-text-bottom text-lg"})))}o.isMDXComponent=!0},27772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),s=n(53256);const r={id:"authenticate-users-with-connect",title:"Connecting Wallets & Authenticating"},o=void 0,p={unversionedId:"stacks.js/guides/authenticate-users-with-connect",id:"stacks.js/guides/authenticate-users-with-connect",title:"Connecting Wallets & Authenticating",description:"This guide explains how to connect to users' wallets and authenticate users with the @stacks/connect package of Stacks.js.",source:"@site/docs/stacks.js/guides/authenticate-users-with-connect.md",sourceDirName:"stacks.js/guides",slug:"/stacks.js/guides/authenticate-users-with-connect",permalink:"/doc/stacks.js/guides/authenticate-users-with-connect",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/guides/authenticate-users-with-connect.md",tags:[],version:"current",frontMatter:{id:"authenticate-users-with-connect",title:"Connecting Wallets & Authenticating"},sidebar:"stacks-js",previous:{title:"Overview",permalink:"/doc/stacks.js/connect"},next:{title:"Sign Transactions",permalink:"/doc/stacks.js/guides/sign-transactions"}},l={},c=[{value:"Installing Dependency",id:"installing-dependency",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Initiate <code>userSession</code>",id:"initiate-usersession",level:3},{value:"Initiate Authentication Flow",id:"initiate-authentication-flow",level:3},{value:"Handle Pending Authentication",id:"handle-pending-authentication",level:3},{value:"Advanced",id:"advanced",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Key Pairs",id:"key-pairs",level:3},{value:"Transit Private Key",id:"transit-private-key",level:4},{value:"Identity Address Private Key",id:"identity-address-private-key",level:4},{value:"App Private Key",id:"app-private-key",level:4},{value:"<code>authRequest</code> Payload Schema",id:"authrequest-payload-schema",level:3},{value:"<code>authResponse</code> Payload Schema",id:"authresponse-payload-schema",level:3},{value:"Decode <code>authRequest</code> or <code>authResponse</code>",id:"decode-authrequest-or-authresponse",level:3}],h={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.ZP,{mdxType:"StacksjsStartersNote"}),(0,i.kt)("p",null,"This guide explains how to connect to users' wallets and authenticate users with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/connect#readme"},(0,i.kt)("inlineCode",{parentName:"a"},"@stacks/connect"))," package of Stacks.js."),(0,i.kt)("h2",{id:"installing-dependency"},"Installing Dependency"),(0,i.kt)("p",null,"To install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@stacks/connect")," package in your JavaScript/TypeScript project run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @stacks/connect\n")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Authentication provides a way for users to identify themselves to an app while retaining complete control over their credentials and personal details. It can be integrated alone or used in conjunction with ",(0,i.kt)("a",{parentName:"p",href:"/build-apps/transaction-signing"},"transaction signing")," and ",(0,i.kt)("a",{parentName:"p",href:"/build-apps/data-storage"},"data storage"),", for which it is a prerequisite."),(0,i.kt)("p",null,"Users who register for your app can subsequently authenticate to any other app with support for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/build-apps/references/bns"},"Blockchain Naming System")," and vice versa."),(0,i.kt)("h3",{id:"initiate-usersession"},"Initiate ",(0,i.kt)("inlineCode",{parentName:"h3"},"userSession")),(0,i.kt)("p",null,"Apps keep track of user authentication state with the ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," object, initiated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserSession")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," classes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { AppConfig, UserSession } from '@stacks/connect';\n\nconst appConfig = new AppConfig(['store_write', 'publish_data']);\nconst userSession = new UserSession({ appConfig });\n")),(0,i.kt)("p",null,"The main thing to decide here is what permission scopes your app needs from the user during authentication."),(0,i.kt)("p",null,"Apps may request any of the following scopes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scope"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"store_write")),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write data to the user's Gaia hub in an app-specific storage bucket.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"publish_data")),(0,i.kt)("td",{parentName:"tr",align:null},"Publish data so other users of the app can discover and interact with the user.")))),(0,i.kt)("p",null,"The default scopes are ",(0,i.kt)("inlineCode",{parentName:"p"},"['store_write']")," if no ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," array is provided when initializing the ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig")," object."),(0,i.kt)("p",null,"We recommend you initiate the ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," object just once in your app then reference it using imports where needed."),(0,i.kt)("h3",{id:"initiate-authentication-flow"},"Initiate Authentication Flow"),(0,i.kt)("p",null,"Apps prompt both new and existing users to authenticate with the ",(0,i.kt)("inlineCode",{parentName:"p"},"showConnect")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { AppConfig, UserSession, showConnect } from '@stacks/connect';\n\nconst appConfig = new AppConfig(['store_write', 'publish_data']);\nconst userSession = new UserSession({ appConfig });\n\nfunction authenticate() {\n  showConnect({\n    appDetails: {\n      name: 'My App',\n      icon: window.location.origin + '/my-app-logo.svg',\n    },\n    redirectTo: '/',\n    onFinish: () => {\n      let userData = userSession.loadUserData();\n      // Save or otherwise utilize userData post-authentication\n    },\n    userSession: userSession,\n  });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"showConnect")," triggers the display of a popup that initiates the authentication process for users, one in which they'll authenticate with a ",(0,i.kt)("em",{parentName:"p"},"Secret Key")," that's used to encrypt their private data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Popup displayed by showConnect function",src:n(87101).Z,width:"960",height:"640"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"showConnect")," function accepts a number of properties within a parameter object such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The app's ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"icon"),": provided as strings comprising the ",(0,i.kt)("inlineCode",{parentName:"li"},"appDetails")," object property."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"redirectTo")," string: used to provide a URL to which the user should be redirected upon successful authentication. The ",(0,i.kt)("inlineCode",{parentName:"li"},"onFinish")," callback serves a similar purpose by handling successful authentication within a context of a popup window."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"userSession")," object initiated above.")),(0,i.kt)("p",null,"Once the user selects the button presented in this popup, they are passed to the Stacks Wallet for authenticator with the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest")," token as a GET parameter. From there they can confirm authentication and generate a new ",(0,i.kt)("em",{parentName:"p"},"Secret Key")," or Stacks identity before doing so, as needed before coming back to the app."),(0,i.kt)("h3",{id:"handle-pending-authentication"},"Handle Pending Authentication"),(0,i.kt)("p",null,"Unless the user has confirmed authentication within the context of a popup window, they will get redirected back to the app via the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectTo")," address provided above, at which point the app needs to handle the pending authentication state using the ",(0,i.kt)("inlineCode",{parentName:"p"},"authResponse")," value provided as a GET parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppConfig, UserSession, showConnect } from '@stacks/connect';\n\nconst appConfig = new AppConfig(['store_write', 'publish_data']);\nconst userSession = new UserSession({ appConfig });\n\nwindow.onload = function () {\n  if (userSession.isSignInPending()) {\n    userSession.handlePendingSignIn().then(userData => {\n      // Save or otherwise utilize userData post-authentication\n    });\n  } else if (userSession.isUserSignedIn()) {\n    // Handle case in which user is already authenticated\n  }\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignInPending")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession")," object is used to detect whether the user needs to handle a pending authentication state upon page load."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"handlePendingSignIn")," method is then used to handle that state, returning a ",(0,i.kt)("inlineCode",{parentName:"p"},"userData")," object with all the data needed to save the user's information into their session."),(0,i.kt)("p",null,"The authenticated state can later be detected by the ",(0,i.kt)("inlineCode",{parentName:"p"},"isUserSignedIn")," method in case any particular handling is needed then."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It's especially important to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"handlePendingSignIn")," within the context of mobile apps.")),(0,i.kt)("p",null,"If the user has indeed confirmed authentication in the context of a popup window, the authenticator will resolve the pending authentication state automatically with the app within the parent window."),(0,i.kt)("p",null,"It will then trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"onFinish")," function provided above, which can be used similarly to save the user's information into their session as retrieved with ",(0,i.kt)("inlineCode",{parentName:"p"},"userSession.loadUserData()"),"."),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("h3",{id:"how-it-works"},"How It Works"),(0,i.kt)("p",null,"The authentication flow with Stacks is similar to the typical client-server flow used by centralized sign in services (for example, OAuth). However, with Stacks the authentication flow happens entirely client-side."),(0,i.kt)("p",null,"An app and authenticator, such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.hiro.so/wallet/install-web"},"the Stacks Wallet"),", communicate during the authentication flow by passing back and forth two tokens. The requesting app sends the authenticator an ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest")," token. Once a user approves authentication, the authenticator responds to the app with an ",(0,i.kt)("inlineCode",{parentName:"p"},"authResponse")," token."),(0,i.kt)("p",null,"These tokens are are based on ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"a JSON Web Token (JWT) standard")," with additional support for the ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve used by Bitcoin and many other cryptocurrencies. They are passed via URL query strings."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"#authrequest-payload-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"authRequest"))," and ",(0,i.kt)("a",{parentName:"p",href:"#authresponse-payload-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"authResponse"))," payload schemas below for more details about what data they contain."),(0,i.kt)("p",null,"When a user chooses to authenticate an app, it sends the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest")," token to the authenticator via a URL query string with an equally named parameter:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://wallet.hiro.so/...?authRequest=j902120cn829n1jnvoa...")),(0,i.kt)("p",null,"When the authenticator receives the request, it generates an ",(0,i.kt)("inlineCode",{parentName:"p"},"authResponse")," token for the app using an ",(0,i.kt)("em",{parentName:"p"},"ephemeral transit key")," . The ephemeral transit key is just used for the particular instance of the app, in this case, to sign the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest"),"."),(0,i.kt)("p",null,"The app stores the ephemeral transit key during request generation. The public portion of the transit key is passed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest")," token. The authenticator uses the public portion of the key to encrypt an ",(0,i.kt)("em",{parentName:"p"},"app private key")," which is returned via the ",(0,i.kt)("inlineCode",{parentName:"p"},"authResponse"),"."),(0,i.kt)("p",null,"The authenticator generates the app private key from the user's ",(0,i.kt)("em",{parentName:"p"},"identity address private key")," and the app's domain. The app private key serves three functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is used to create credentials that give the app access to a storage bucket in the user's Gaia hub"),(0,i.kt)("li",{parentName:"ol"},"It is used in the end-to-end encryption of files stored for the app in the user's Gaia storage."),(0,i.kt)("li",{parentName:"ol"},"It serves as a cryptographic secret that apps can use to perform other cryptographic functions.")),(0,i.kt)("p",null,"Finally, the app private key is deterministic, meaning that the same private key will always be generated for a given Stacks address and domain."),(0,i.kt)("p",null,"The first two of these functions are particularly relevant to ",(0,i.kt)("a",{parentName:"p",href:"/build-apps/data-storage"},"data storage with Stacks.js"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#key-pairs"},"Learn more about keypairs")," used by authentication."),(0,i.kt)("h3",{id:"key-pairs"},"Key Pairs"),(0,i.kt)("p",null,"Authentication with Stacks makes extensive use of public key cryptography generally and ECDSA with the ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve in particular."),(0,i.kt)("p",null,"The following sections describe the three public-private key pairs used, including how they're generated, where they're used and to whom private keys are disclosed."),(0,i.kt)("h4",{id:"transit-private-key"},"Transit Private Key"),(0,i.kt)("p",null,"The transit private is an ephemeral key that is used to encrypt secrets that\nneed to be passed from the authenticator to the app during the\nauthentication process. It is randomly generated by the app at the beginning of\nthe authentication response."),(0,i.kt)("p",null,"The public key that corresponds to the transit private key is stored in a single\nelement array in the ",(0,i.kt)("inlineCode",{parentName:"p"},"public_keys")," key of the authentication request token. The\nauthenticator encrypts secret data such as the app private key using this\npublic key and sends it back to the app when the user signs in to the app. The\ntransit private key signs the app authentication request."),(0,i.kt)("h4",{id:"identity-address-private-key"},"Identity Address Private Key"),(0,i.kt)("p",null,"The identity address private key is derived from the user's keychain phrase and\nis the private key of the Stacks username that the user chooses to use to sign in\nto the app. It is a secret owned by the user and never leaves the user's\ninstance of the authenticator."),(0,i.kt)("p",null,"This private key signs the authentication response token for an app to indicate that the user approves sign in to that app."),(0,i.kt)("h4",{id:"app-private-key"},"App Private Key"),(0,i.kt)("p",null,"The app private key is an app-specific private key that is generated from the\nuser's identity address private key using the ",(0,i.kt)("inlineCode",{parentName:"p"},"domain_name")," as input."),(0,i.kt)("p",null,"The app private key is securely shared with the app on each authentication, encrypted by the authenticator with the transit public key. Because the transit key is only stored on the client side, this prevents a man-in-the-middle attack where a server or internet provider could potentially snoop on the app private key."),(0,i.kt)("h3",{id:"authrequest-payload-schema"},(0,i.kt)("inlineCode",{parentName:"h3"},"authRequest")," Payload Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const requestPayload = {\n  jti, // UUID\n  iat, // JWT creation time in seconds\n  exp, // JWT expiration time in seconds\n  iss, // legacy decentralized identifier generated from transit key\n  public_keys, // single entry array with public key of transit key\n  domain_name, // app origin\n  manifest_uri, // url to manifest file - must be hosted on app origin\n  redirect_uri, // url to which the authenticator redirects user on auth approval - must be hosted on app origin\n  version, // version tuple\n  do_not_include_profile, // a boolean flag asking authenticator to send profile url instead of profile object\n  supports_hub_url, // a boolean flag indicating gaia hub support\n  scopes, // an array of string values indicating scopes requested by the app\n};\n")),(0,i.kt)("h3",{id:"authresponse-payload-schema"},(0,i.kt)("inlineCode",{parentName:"h3"},"authResponse")," Payload Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const responsePayload = {\n  jti, // UUID\n  iat, // JWT creation time in seconds\n  exp, // JWT expiration time in seconds\n  iss, // legacy decentralized identifier (string prefix + identity address) - this uniquely identifies the user\n  private_key, // encrypted private key payload\n  public_keys, // single entry array with public key\n  profile, // profile object\n  username, // Stacks username (if any)\n  core_token, // encrypted core token payload\n  email, // email if email scope is requested & email available\n  profile_url, // url to signed profile token\n  hubUrl, // url pointing to user's gaia hub\n  version, // version tuple\n};\n")),(0,i.kt)("h3",{id:"decode-authrequest-or-authresponse"},"Decode ",(0,i.kt)("inlineCode",{parentName:"h3"},"authRequest")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"authResponse")),(0,i.kt)("p",null,"To decode a token and see what data it holds:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequest")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"authResponse")," string from the URL during authentication.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the full token there."),(0,i.kt)("p",{parentName:"li"},"The output should look similar to below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jti": "f65f02db-9f42-4523-bfa9-8034d8edf459",\n  "iat": 1555641911,\n  "exp": 1555645511,\n  "iss": "did:btc-addr:1ANL7TNdT7TTcjVnrvauP7Mq3tjcb8TsUX",\n  "public_keys": ["02f08d5541bf611ded745cc15db08f4447bfa55a55a2dd555648a1de9759aea5f9"],\n  "domain_name": "http://localhost:8080",\n  "manifest_uri": "http://localhost:8080/manifest.json",\n  "redirect_uri": "http://localhost:8080",\n  "version": "1.3.1",\n  "do_not_include_profile": true,\n  "supports_hub_url": true,\n  "scopes": ["store_write", "publish_data"],\n  "private_key": "4447bfa55a55a2dd555648a1d02f08d759aea5f945cc15db08f"\n}\n')),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," property is a decentralized identifier or ",(0,i.kt)("inlineCode",{parentName:"p"},"did"),". This identifies the user and the username to the app. The specific ",(0,i.kt)("inlineCode",{parentName:"p"},"did")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"btc-addr"),"."))))}u.isMDXComponent=!0},87101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/todos-get-started-de44cc7ec9ac9d55caf7b23719b9cbdd.png"}}]);