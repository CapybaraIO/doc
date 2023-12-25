"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),k=i,g=d["".concat(c,".").concat(k)]||d[k]||u[k]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},53256:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));const s={toc:[]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{class:"block p-4 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 hover:dark:bg-neutral-600 bg-neutral-200 rounded-lg dark:bg-neutral-700 mb-6 hover:no-underline hover:text-neutral-800 hover:dark:text-neutral-100 transition-colors",href:"https://docs.hiro.so/stacksjs-starters"},(0,i.kt)("span",{class:"i-radix-icons-lightning-bolt align-text-bottom text-lg"})," Bootstrap your project with ",(0,i.kt)("strong",null,"Stacks.js Starters"),", which come with Stacks Connect pre-installed ",(0,i.kt)("span",{class:"i-bi-globe2 align-text-bottom text-lg"})))}o.isMDXComponent=!0},6702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(53256);const r={title:"Integrating Stacking"},o=void 0,c={unversionedId:"stacks.js/guides/how-to-integrate-stacking",id:"stacks.js/guides/how-to-integrate-stacking",title:"Integrating Stacking",description:"In this tutorial, you'll learn how to integrate Stacking by interacting with the respective smart contract, as well as reading data from the Stacks blockchain.",source:"@site/docs/stacks.js/guides/how-to-integrate-stacking.md",sourceDirName:"stacks.js/guides",slug:"/stacks.js/guides/how-to-integrate-stacking",permalink:"/doc/stacks.js/guides/how-to-integrate-stacking",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/guides/how-to-integrate-stacking.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Integrating Stacking"},sidebar:"stacks-js",previous:{title:"Sign Messages",permalink:"/doc/stacks.js/guides/sign-messages"},next:{title:"FAQs",permalink:"/doc/stacks.js/faq"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Step 1: Integrate libraries",id:"step-1-integrate-libraries",level:2},{value:"Step 2: Generating an account and initialization",id:"step-2-generating-an-account-and-initialization",level:2},{value:"Step 3: Display stacking info",id:"step-3-display-stacking-info",level:2},{value:"Step 4: Verify stacking eligibility",id:"step-4-verify-stacking-eligibility",level:2},{value:"Step 5: Lock STX to stack",id:"step-5-lock-stx-to-stack",level:2},{value:"Step 6: Confirm lock-up",id:"step-6-confirm-lock-up",level:2},{value:"Step 6: Display Stacking status",id:"step-6-display-stacking-status",level:2},{value:"Optional: Rewards",id:"optional-rewards",level:2}],d={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.ZP,{mdxType:"StacksjsStartersNote"}),(0,i.kt)("p",null,"In this tutorial, you'll learn how to integrate Stacking by interacting with the respective smart contract, as well as reading data from the Stacks blockchain."),(0,i.kt)("p",null,"This tutorial highlights the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Stacks accounts"),(0,i.kt)("li",{parentName:"ul"},"Display stacking info"),(0,i.kt)("li",{parentName:"ul"},"Verify stacking eligibility"),(0,i.kt)("li",{parentName:"ul"},"Add stacking action"),(0,i.kt)("li",{parentName:"ul"},"Display stacking status")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively to integration using JS libraries, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/kantai/c261ca04114231f0f6a7ce34f0d2499b"},"Rust CLI")," or ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/stacking-using-cli"},"JS CLI"),".")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"First, you'll need to understand the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/stacking"},"Stacking mechanism"),"."),(0,i.kt)("p",null,"You'll also need ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"NodeJS")," ",(0,i.kt)("inlineCode",{parentName:"p"},"12.10.0")," or higher to complete this tutorial. You can verify your installation by opening up your terminal and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this tutorial, we'll implement the Stacking flow laid out in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/stacking#stacking-flow"},"Stacking guide"),"."),(0,i.kt)("h2",{id:"step-1-integrate-libraries"},"Step 1: Integrate libraries"),(0,i.kt)("p",null,"Install the stacking, network, transactions libraries and bn.js for large number handling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @stacks/stacking @stacks/network @stacks/transactions bn.js\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See additional ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks.js/tree/master/packages/stacking"},"Stacking library reference"))),(0,i.kt)("h2",{id:"step-2-generating-an-account-and-initialization"},"Step 2: Generating an account and initialization"),(0,i.kt)("p",null,"To get started, let's create a new, random Stacks 2.0 account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  makeRandomPrivKey,\n  privateKeyToString,\n  getAddressFromPrivateKey,\n  TransactionVersion,\n} from '@stacks/transactions';\n\nimport { StackingClient } from '@stacks/stacking';\n\nimport { StacksTestnet, StacksMainnet } from '@stacks/network';\n\nimport BN from 'bn.js';\n\n// generate random key or use an existing key\nconst privateKey = privateKeyToString(makeRandomPrivKey());\n\n// get Stacks address\n// for mainnet, remove the TransactionVersion\nconst stxAddress = getAddressFromPrivateKey(privateKey, TransactionVersion.Testnet);\n\n// instantiate the Stacker class for testnet\n// for mainnet, use `new StacksMainnet()`\nconst client = new StackingClient(stxAddress, new StacksTestnet());\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Review the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/accounts"},"accounts guide")," for more details")),(0,i.kt)("h2",{id:"step-3-display-stacking-info"},"Step 3: Display stacking info"),(0,i.kt)("p",null,"In order to inform users about the upcoming reward cycle, we can use the following methods to obtain information for Stacking:"),(0,i.kt)("p",null,"With the obtained PoX info, you can present whether Stacking has been executed in the next cycle, when the next cycle begins, the duration of a cycle, and the minimum microstacks required to participate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// will Stacking be executed in the next cycle?\nconst stackingEnabledNextCycle = await client.isStackingEnabledNextCycle();\n// true or false\n\n// how long (in seconds) is a Stacking cycle?\nconst cycleDuration = await client.getCycleDuration();\n// 120\n\n// how much time is left (in seconds) until the next cycle begins?\nconst secondsUntilNextCycle = await client.getSecondsUntilNextCycle();\n// 600000\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Cycle duration and participation thresholds will differ between mainnet and testnet")),(0,i.kt)("p",null,"You can also retrieve the raw PoX and core information using the methods below if required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const poxInfo = await client.getPoxInfo();\n\n// poxInfo:\n// {\n//   contract_id: 'ST000000000000000000002AMW42H.pox',\n//   first_burnchain_block_height: 0,\n//   min_amount_ustx: 83335083333333,\n//   prepare_cycle_length: 30,\n//   rejection_fraction: 3333333333333333,\n//   reward_cycle_id: 17,\n//   reward_cycle_length: 120,\n//   rejection_votes_left_required: 0,\n//   total_liquid_supply_ustx: 40000840000000000\n// }\n\nconst coreInfo = await client.getCoreInfo();\n\n// coreInfo:\n// {\n//   peer_version: 385875968,\n//   pox_consensus: 'bb88a6e6e65fa7c974d3f6e91a941d05cc3dff8e',\n//   burn_block_height: 2133,\n//   stable_pox_consensus: '2284451c3e623237def1f8caed1c11fa46b6f0cc',\n//   stable_burn_block_height: 2132,\n//   server_version: 'blockstack-core 0.0.1 => 23.0.0.0 (HEAD:a4deb7a+, release build, linux [x86_64])',\n//   network_id: 2147483648,\n//   parent_network_id: 3669344250,\n//   stacks_tip_height: 1797,\n//   stacks_tip: '016df36c6a154cb6114c469a28cc0ce8b415a7af0527f13f15e66e27aa480f94',\n//   stacks_tip_consensus_hash: 'bb88a6e6e65fa7c974d3f6e91a941d05cc3dff8e',\n//   unanchored_tip: '6b93d2c62fc07cf44302d4928211944d2debf476e5c71fb725fb298a037323cc',\n//   exit_at_block_height: null\n// }\n\nconst targetBlocktime = await client.getTargetBlockTime();\n\n// targetBlocktime:\n// 120\n")),(0,i.kt)("p",null,"Users need to have sufficient Stacks (STX) tokens to participate in Stacking. This can be verified easily:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const hasMinStxAmount = await client.hasMinimumStx();\n// true or false\n")),(0,i.kt)("p",null,"For testing purposes, you can use the faucet to obtain testnet STX tokens. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<stxAddress>")," below with your address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPOST "https://stacks-node-api.testnet.stacks.co/extended/v1/faucets/stx?address=<stxAddress>&stacking=true"\n')),(0,i.kt)("p",null,"You'll have to wait a few minutes for the transaction to complete."),(0,i.kt)("p",null,"Users can select how many cycles they would like to participate in. To help with that decision, the unlocking time can be estimated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// this would be provided by the user\nlet numberOfCycles = 3;\n\n// the projected datetime for the unlocking of tokens\nconst unlockingAt = new Date(new Date().getTime() + secondsUntilNextCycle);\nunlockingAt.setSeconds(unlockingAt.getSeconds() + cycleDuration * numberOfCycles);\n")),(0,i.kt)("h2",{id:"step-4-verify-stacking-eligibility"},"Step 4: Verify stacking eligibility"),(0,i.kt)("p",null,"At this point, your app shows Stacking details. If Stacking will be executed and the user has enough funds, the user should be asked to provide input for the amount of microstacks to lockup and a Bitcoin address to receive the pay out rewards."),(0,i.kt)("p",null,"With this input, and the data from previous steps, we can determine the eligibility for the next reward cycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// user supplied parameters\n// BTC address must start with "1" or "3". Native Segwit (starts with "bc1") is not supported\nlet btcAddress = \'1Xik14zRm29UsyS6DjhYg4iZeZqsDa8D3\';\nlet numberOfCycles = 3;\n\nconst stackingEligibility = await client.canStack({\n  poxAddress: btcAddress,\n  cycles: numberOfCycles,\n});\n\n// stackingEligibility:\n// {\n//   eligible: false,\n//   reason: \'ERR_STACKING_INVALID_LOCK_PERIOD\',\n// }\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The eligibility check assumes the user will be stacking the maximum balance available in the account. The eligibility check is a read-only function call to the PoX smart contract which does not require broadcasting a transaction")),(0,i.kt)("p",null,"If the user is eligible, the stacking action should be enabled on the UI. If not, the respective error message should be shown to the user."),(0,i.kt)("h2",{id:"step-5-lock-stx-to-stack"},"Step 5: Lock STX to stack"),(0,i.kt)("p",null,"Next, the Stacking action should be executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// set the amount to lock in microstacks\nconst amountMicroStx = new BN(100000000000);\n\n// set the burnchain (BTC) block for stacking lock to start\n// you can find the current burnchain block height from coreInfo above\n// and adding 3 blocks to provide a buffer for transaction to confirm\nconst burnBlockHeight = 2133 + 3;\n\n// execute the stacking action by signing and broadcasting a transaction to the network\nclient\n  .stack({\n    amountMicroStx,\n    poxAddress: btcAddress,\n    cycles: numberOfCycles,\n    privateKey,\n    burnBlockHeight,\n  })\n  .then(response => {\n    // If successful, stackingResults will contain the txid for the Stacking transaction\n    // otherwise an error will be returned\n    if (response.hasOwnProperty('error')) {\n      console.log(response.error);\n      throw new Error('Stacking transaction failed');\n    } else {\n      console.log(`txid: ${response}`);\n      // txid: f6e9dbf6a26c1b73a14738606cb2232375d1b440246e6bbc14a45b3a66618481\n      return response;\n    }\n  });\n")),(0,i.kt)("p",null,"The transaction completion will take several minutes. Only one stacking transaction from each account/address is active at any time. Multiple/concurrent stacking actions from the same account will fail."),(0,i.kt)("h2",{id:"step-6-confirm-lock-up"},"Step 6: Confirm lock-up"),(0,i.kt)("p",null,"The new transaction will not be completed immediately. It'll stay in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," status for a few minutes. We need to poll the status and wait until the transaction status changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),". We can use the ",(0,i.kt)("a",{parentName:"p",href:"/get-started/stacks-blockchain-api#javascript-client-library"},"Stacks Blockchain API client library")," to check transaction status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { TransactionsApi } = require('@stacks/blockchain-api-client');\nconst tx = new TransactionsApi(apiConfig);\n\nconst waitForTransactionSuccess = txId =>\n  new Promise((resolve, reject) => {\n    const pollingInterval = 3000;\n    const intervalID = setInterval(async () => {\n      const resp = await tx.getTransactionById({ txId });\n      if (resp.tx_status === 'success') {\n        // stop polling\n        clearInterval(intervalID);\n        // update UI to display stacking status\n        return resolve(resp);\n      }\n    }, pollingInterval);\n  });\n\n// note: txId should be defined previously\nconst resp = await waitForTransactionSuccess(txId);\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More details on the lifecycle of transactions can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/understand-stacks/transactions#lifecycle"},"transactions guide"))),(0,i.kt)("p",null,"Alternatively to the polling, the Stacks Blockchain API client library offers WebSockets. WebSockets can be used to subscribe to specific updates, like transaction status changes. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const client = await connectWebSocketClient('ws://stacks-node-api.blockstack.org/');\n\n// note: txId should be defined previously\nconst sub = await client.subscribeAddressTransactions(txId, event => {\n  console.log(event);\n  // update UI to display stacking status\n});\n\nawait sub.unsubscribe();\n")),(0,i.kt)("h2",{id:"step-6-display-stacking-status"},"Step 6: Display Stacking status"),(0,i.kt)("p",null,"With the completed transactions, Stacks tokens are locked up for the lockup duration. During that time, your app can display the following details: unlocking time, amount of Stacks locked, and bitcoin address used for rewards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const stackingStatus = await client.getStatus();\n\n// If stacking is active for the account, you will receive the stacking details\n// otherwise an error will be thrown\n// stackingStatus:\n// {\n//   stacked: true,\n//   details: {\n//     amount_microstx: '80000000000000',\n//     first_reward_cycle: 18,\n//     lock_period: 10,\n//     burnchain_unlock_height: 3020,\n//     pox_address: {\n//       version: '00',\n//       hashbytes: '05cf52a44bf3e6829b4f8c221cc675355bf83b7d'\n//     }\n//   }\n// }\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pox_address")," property is the PoX contract's internal representation of the reward BTC address.")),(0,i.kt)("p",null,"To display the unlocking time, you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"firstRewardCycle")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"lockPeriod")," fields."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," With the completion of this step, you successfully learnt how to ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Stacks accounts"),(0,i.kt)("li",{parentName:"ul"},"Display stacking info"),(0,i.kt)("li",{parentName:"ul"},"Verify stacking eligibility"),(0,i.kt)("li",{parentName:"ul"},"Add stacking action"),(0,i.kt)("li",{parentName:"ul"},"Display stacking status")),(0,i.kt)("h2",{id:"optional-rewards"},"Optional: Rewards"),(0,i.kt)("p",null,"Currently, the Stacking library does not provide methods to get the paid rewards for a set address. However, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#tag/Burnchain"},"Stacks Blockchain API exposes endpoints")," to get more details."),(0,i.kt)("p",null,"As an example, if you want to get the rewards paid to ",(0,i.kt)("inlineCode",{parentName:"p"},"btcAddress"),", you can make the following API call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# for mainnet, replace `testnet` with `mainnet`\ncurl 'https://stacks-node-api.testnet.stacks.co/extended/v1/burnchain/rewards/<btcAddress>'\n")))}k.isMDXComponent=!0}}]);