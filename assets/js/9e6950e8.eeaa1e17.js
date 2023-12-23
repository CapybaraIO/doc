"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[1384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"managing-accounts",title:"Managing accounts"},i=void 0,s={unversionedId:"tutorials/managing-accounts",id:"tutorials/managing-accounts",title:"Managing accounts",description:"Introduction",source:"@site/docs/tutorials/managing-accounts.md",sourceDirName:"tutorials",slug:"/tutorials/managing-accounts",permalink:"/doc/tutorials/managing-accounts",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/tutorials/managing-accounts.md",tags:[],version:"current",frontMatter:{id:"managing-accounts",title:"Managing accounts"},sidebar:"tutorials",previous:{title:"Tutorials",permalink:"/doc/tutorials/"},next:{title:"Sending tokens",permalink:"/doc/tutorials/sending-tokens"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Install libraries",id:"step-1-install-libraries",level:2},{value:"Step 2: Generate an account",id:"step-2-generate-an-account",level:2},{value:"Step 3: Review account info",id:"step-3-review-account-info",level:2},{value:"Disable proofs",id:"disable-proofs",level:3},{value:"Step 4: Review account history",id:"step-4-review-account-history",level:2},{value:"Handle pagination",id:"handle-pagination",level:3},{value:"Step 5: Get account balances",id:"step-5-get-account-balances",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This tutorial walks you through the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate an account"),(0,r.kt)("li",{parentName:"ul"},"Review account info"),(0,r.kt)("li",{parentName:"ul"},"Review account history"),(0,r.kt)("li",{parentName:"ul"},"Get account balances")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial is NodeJS-specific. You can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/accounts"},"review the accounts guide")," to understand how to manage Stacks 2.0 accounts using a different language/framework.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You will need ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"NodeJS")," ",(0,r.kt)("inlineCode",{parentName:"p"},"8.12.0")," or higher to complete this tutorial. You can verify your installation by opening up your terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,r.kt)("h2",{id:"step-1-install-libraries"},"Step 1: Install libraries"),(0,r.kt)("p",null,"First, install all the required libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @stacks/transactions @stacks/blockchain-api-client cross-fetch\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The TypeScript API client is generated from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks-blockchain-api/blob/master/docs/openapi.yaml"},"OpenAPI specification")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"openapi-generator"),"). You can use the generator to create Stacks API clients for many other languages.")),(0,r.kt)("h2",{id:"step-2-generate-an-account"},"Step 2: Generate an account"),(0,r.kt)("p",null,"To get started, generate a new, random Stacks 2.0 private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { fetch } = require("cross-fetch");\nconst {\n  makeRandomPrivKey,\n  privateKeyToString,\n  getAddressFromPrivateKey,\n  TransactionVersion,\n} = require("@stacks/transactions");\nconst {\n  AccountsApi,\n  FaucetsApi,\n  Configuration,\n} = require("@stacks/blockchain-api-client");\n\nconst apiConfig = new Configuration({\n  fetchApi: fetch,\n  // for mainnet, replace `testnet` with `mainnet`\n  basePath: "https://api.testnet.hiro.so",\n});\n\nconst privateKey = makeRandomPrivKey();\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The preceding code also imports methods required for the next steps, including API configuration for the client library usage.")),(0,r.kt)("h2",{id:"step-3-review-account-info"},"Step 3: Review account info"),(0,r.kt)("p",null,"With the private key, you can review account details. First, we need to derive the Stacks address from the private key. Then, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountsApi")," class to get the account details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stacksAddress = getAddressFromPrivateKey(\n  privateKeyToString(privateKey),\n  TransactionVersion.Testnet // remove for Mainnet addresses\n);\n\nconst accounts = new AccountsApi(apiConfig);\n\nasync function getAccountInfo() {\n  const accountInfo = await accounts.getAccountInfo({\n    principal: stacksAddress,\n  });\n\n  return accountInfo;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'A "principal" is any entity that can have a token balance. Find more details in the ',(0,r.kt)("a",{parentName:"p",href:"https://docs.stacks.co/write-smart-contracts/principals"},"Principals guide"),".")),(0,r.kt)("p",null,"The API will respond with a balance, nonce (starting at zero), and respective proofs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  balance: '0x00000000000000000000000000000000',\n  nonce: 0,\n  balance_proof: '',\n  nonce_proof: ''\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," property represents the Stacks token balance, as hex-encoded string of an unsigned 128-bit integer (big-endian). It is not easy to consume the ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," property in this format. To simplify that, and to obtain all balances for all tokens (Stacks/STX, fungible, and non-fungible), check out ",(0,r.kt)("a",{parentName:"p",href:"#step-5-getting-account-balances"},"step 5"),"."),(0,r.kt)("h3",{id:"disable-proofs"},"Disable proofs"),(0,r.kt)("p",null,"Proofs, provided as hex-encoded strings, can be removed from the responses by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function getAccountInfoWithoutProof() {\n  const accountInfo = await accounts.getAccountInfo({\n    principal: stacksAddress,\n    proof: 0,\n  });\n\n  return accountInfo;\n}\n")),(0,r.kt)("h2",{id:"step-4-review-account-history"},"Step 4: Review account history"),(0,r.kt)("p",null,"The following step requires associated accounts transactions. For simplicity, run the faucet for the new account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function runFaucetStx() {\n  const faucets = new FaucetsApi(apiConfig);\n\n  const faucetTx = await faucets.runFaucetStx({\n    address: stacksAddress,\n  });\n\n  return faucetTx;\n}\n")),(0,r.kt)("p",null,"The API will respond with a new transaction ID and confirmation that the faucet run was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  success: true,\n  txId: '0x5b3d9b47c8f0a3c161868c37d94977b3b0a507558a542fd9499b597bfc799d11',\n  txRaw: '80800000000400164247d6f2b425ac5771423ae6c80c754f717...'\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wait a few minutes for the transaction to complete. You can review the status using the Explorer, by navigating to the following URL: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://explorer.hiro.so/txid/<txid>"),".")),(0,r.kt)("p",null,"Assuming the faucet transaction was successful, you can review the account history. We are expecting at least one transaction to show up in the account history."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function getAccountTransactions() {\n  const history = await accounts.getAccountTransactions({\n    principal: stacksAddress,\n  });\n\n  return history;\n}\n")),(0,r.kt)("p",null,"The API will respond with a paginatable list of transactions associated with the account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  limit: 20,\n  offset: 0,\n  total: 1,\n  results: [\n    {\n      tx_id: '0x89ee63c0',\n      tx_type: 'token_transfer',\n      fee_rate: '180',\n      sender_address: 'STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6',\n      sponsored: false,\n      post_condition_mode: 'deny',\n      tx_status: 'success',\n      block_hash: '0x167662a4e',\n      block_height: 2951,\n      burn_block_time: 1598910912,\n      burn_block_time_iso: '2020-08-31T21:55:12.000Z',\n      canonical: true,\n      tx_index: 1,\n      tx_result: {\"hex\":\"0x03\",\"repr\":\"true\"},\n      token_transfer: {\n        recipient_address:\"STW617CAFYNFQG6G470DNWW4V56XAY7125S3Z6RK\",\n        amount:\"500000\",\n        memo:\"0x466175636574000000\"\n        },\n      events: [{ ... }]\n    }\n  ]\n}\n")),(0,r.kt)("p",null,"Please review the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#operation/get_account_transactions"},"API reference")," for property definitions and details."),(0,r.kt)("h3",{id:"handle-pagination"},"Handle pagination"),(0,r.kt)("p",null,"To make API responses more compact, lists returned by the API are paginated. For lists, the response body includes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of list items returned"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of elements skipped"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"total")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of all available list items"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"results")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of list items (length of array equals the set limit)"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")))),(0,r.kt)("p",null,"In order to paginate throughout the full result set, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," request properties. Here is an example where we request transactions 50-100 for an account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function getAccountTransactions() {\n  const history = await accounts.getAccountTransactions({\n    principal: stacksAddress,\n    limit: 50,\n    offset: 50,\n  });\n\n  return history;\n}\n")),(0,r.kt)("h2",{id:"step-5-get-account-balances"},"Step 5: Get account balances"),(0,r.kt)("p",null,"As mentioned above, any Stacks address can have a variety of tokens and associated balances. In order to get balances for all Stacks, fungible, and non-fungible tokens, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccountBalance")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function getAccountBalance() {\n  const balances = await accounts.getAccountBalance({\n    principal: stacksAddress,\n  });\n\n  return balances;\n}\n")),(0,r.kt)("p",null,"The API will respond with the following breakdown of token balances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  stx: {\n    balance: '500000',\n    total_sent: '0',\n    total_received: '500000'\n  },\n  fungible_tokens: {},\n  non_fungible_tokens: {}\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," field is denoted in micro-STX units. 1,000,000 micro-STX are worth 1 Stacks (STX) token.")),(0,r.kt)("p",null,"In the preceding response, the current Stacks (STX) balance is ",(0,r.kt)("inlineCode",{parentName:"p"},"500000")," micro-STX, or ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," Stacks (STX) token."))}d.isMDXComponent=!0}}]);