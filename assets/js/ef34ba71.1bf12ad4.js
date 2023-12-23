"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[9621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"Customize Deployment"},i=void 0,o={unversionedId:"clarinet/guides/how-to-use-deployment-plans",id:"clarinet/guides/how-to-use-deployment-plans",title:"Customize Deployment",description:"Deployment Plans are reproducible deployment steps that publish a collection of on-chain transactions and one or more contracts to a network, whether a local developer network, the public testnet, or into production on mainnet. Deployment plans minimize the inherent complexity of deployments, such as smart contract dependencies and interactions, transaction chaining limits, deployment costs, and more, while ensuring reproducible deployments critical for testing purposes.",source:"@site/docs/clarinet/guides/how-to-use-deployment-plans.md",sourceDirName:"clarinet/guides",slug:"/clarinet/guides/how-to-use-deployment-plans",permalink:"/doc/clarinet/guides/how-to-use-deployment-plans",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/guides/how-to-use-deployment-plans.md",tags:[],version:"current",frontMatter:{title:"Customize Deployment"},sidebar:"clarinet",previous:{title:"Set up local Development Environment",permalink:"/doc/clarinet/guides/how-to-set-up-local-development-environment"},next:{title:"Analyze with Check-Checker",permalink:"/doc/clarinet/guides/analyze-with-check-checker"}},p={},c=[{value:"Deployment plans",id:"deployment-plans",level:2},{value:"View your deployment plan",id:"view-your-deployment-plan",level:2},{value:"Deployment plan&#39;s specifications files",id:"deployment-plans-specifications-files",level:2},{value:"Adding project contract requirements",id:"adding-project-contract-requirements",level:2},{value:"Edit your deployment plan directly",id:"edit-your-deployment-plan-directly",level:2},{value:"<code>emulated-contract-publish</code>",id:"emulated-contract-publish",level:3},{value:"<code>emulated-contract-call</code>",id:"emulated-contract-call",level:3},{value:"<code>requirement-publish</code>",id:"requirement-publish",level:3},{value:"<code>contract-publish</code>",id:"contract-publish",level:3},{value:"<code>contract-call</code>",id:"contract-call",level:3},{value:"<code>stx-transfer</code>",id:"stx-transfer",level:3},{value:"<code>btc-transfer</code>",id:"btc-transfer",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deployment Plans are reproducible deployment steps that publish a collection of on-chain transactions and one or more contracts to a network, whether a local developer network, the public testnet, or into production on mainnet. Deployment plans minimize the inherent complexity of deployments, such as smart contract dependencies and interactions, transaction chaining limits, deployment costs, and more, while ensuring reproducible deployments critical for testing purposes."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Topics covered in this guide"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#deployment-plans"},"Understand deployment plans")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#view-your-deployment-plan"},"View sample deployment plan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#deployment-plans-specifications-files"},"Set deployment plan specifications")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#adding-project-contract-requirements"},"Add project contract requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#edit-your-deployment-plan-directly"},"Customize your deployment plan"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"deployment-plans",src:n(48423).Z,width:"350",height:"350"})),(0,l.kt)("h2",{id:"deployment-plans"},"Deployment plans"),(0,l.kt)("p",null,"Furthermore, many details of your deployment are configurable in a deployment plan's specifications. However, every Clarinet project comes with a default deployment plan, so customization is not required. For a video walkthrough of how to customize deployment plans, ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YcIg5VCO98s"},"watch this video"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Network"),(0,l.kt)("th",{parentName:"tr",align:null},"Features"),(0,l.kt)("th",{parentName:"tr",align:null},"Limitations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"simnet")),(0,l.kt)("td",{parentName:"tr",align:null},"- Widely configurable Stacks simnet ",(0,l.kt)("br",null)," - No private keys needed (for contacts, transactions) ",(0,l.kt)("br",null)," - Stored entirely in memory"),(0,l.kt)("td",{parentName:"tr",align:null},"- No Bitcoin emulation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"devnet")),(0,l.kt)("td",{parentName:"tr",align:null},"- Widely configurable Stacks and Bitcoin devnets ",(0,l.kt)("br",null)," - Publish contracts, transactions across multiple Stacks and/or Bitcoin blocks ",(0,l.kt)("br",null)," - Control chainstate for tests"),(0,l.kt)("td",{parentName:"tr",align:null},"- Accounts need private keys (see ",(0,l.kt)("inlineCode",{parentName:"td"},"Devnet.toml"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"testnet"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"mainnet")),(0,l.kt)("td",{parentName:"tr",align:null},"- Public networks with other users and contracts ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"- Time-consuming and expensive environment for testing")))),(0,l.kt)("h2",{id:"view-your-deployment-plan"},"View your deployment plan"),(0,l.kt)("p",null,"Clarinet uses a deployment plan for every deployment-whether for a basic simnet (for use in Clarinet's ",(0,l.kt)("inlineCode",{parentName:"p"},"console"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"check")," features), a devnet (for use with Clarinet's ",(0,l.kt)("inlineCode",{parentName:"p"},"integrate")," command), or the public testnet and mainnet."),(0,l.kt)("p",null,"You can view the current deployment plan saved to disk at any time with the following command (specifying the network ",(0,l.kt)("inlineCode",{parentName:"p"},"simnet"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"devnet"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"testnet"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet deployments generate --<network>\n")),(0,l.kt)("p",null,"Upon this command, your project's default deployment plan, a ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," file (for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"default.devnet-plan.yaml"),"), is generated from your project specifications and contracts. Here, for example, is the deployment plan for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-cli/examples/counter/deployments/default.devnet-plan.yaml"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"counter")," smart contract application"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: 0\nname: Devnet deployment\nnetwork: devnet\nstacks-node: "http://localhost:20443"\nbitcoin-node: "http://devnet:devnet@localhost:18443"\nplan:\n  batches:\n    - id: 0\n      transactions:\n        - contract-publish:\n            contract-name: counter\n            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            cost: 5960\n            path: contracts/counter.clar\n            anchor-block-only: true\n            clarity-version: 1\n')),(0,l.kt)("h2",{id:"deployment-plans-specifications-files"},"Deployment plan's specifications files"),(0,l.kt)("p",null,"A project's deployment plan specifications are set on two files within a Clarinet project\u2014the ",(0,l.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," file as well as the network\u2019s corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},".toml")," file (for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Devnet.toml"),") in the ",(0,l.kt)("inlineCode",{parentName:"p"},"settings/")," folder."),(0,l.kt)("p",null,"Specifications in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," file you can change include"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Clarity version or blockchain epoch that Clarinet emulates for your smart contracts"),(0,l.kt)("li",{parentName:"ul"},"Project requirements in the form of contract dependencies (see next section)")),(0,l.kt)("p",null,"Specifications in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Devnet.toml")," file you can change include"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Accounts, balances, and names"),(0,l.kt)("li",{parentName:"ul"},"Blockchain environment features, such as block time or API ports, of your devnet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.stacks.co/docs/understand-stacks/stacking"},"Stacking")," orders")),(0,l.kt)("h2",{id:"adding-project-contract-requirements"},"Adding project contract requirements"),(0,l.kt)("p",null,"Your project can reference a smart contract that already exists on the blockchain. For example, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md"},"Stacks Improvement Proposal 009")," specifies a trait reference for all non-fungible tokens. Instead of redeploying this trait as a separate contract each time a new NFT collection is published, you can reference the contract directly within deployment plans with the following Clarinet command, including the contract principal reference:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet requirements add SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait\n")),(0,l.kt)("p",null,"This command updates a Clarinet project's deployment plan for use in development. For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"clarinet integrate")," would now download a copy of the contract principal via the Stacks API node that is booted alongside each devnet deployment, and remaps the principal that publishes this contract to one of the accounts specified in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Devnet.toml")," file. This permits a developer to maintain the minimum set of contracts their Clarinet project will deploy to mainnet (with a single use of an ",(0,l.kt)("a",{parentName:"p",href:"https://docs.stacks.co/docs/clarity/language-functions#impl-trait"},(0,l.kt)("inlineCode",{parentName:"a"},"impl-trait"))," statement in their Clarity contract)."),(0,l.kt)("h2",{id:"edit-your-deployment-plan-directly"},"Edit your deployment plan directly"),(0,l.kt)("p",null,"Recall that a default deployment plan is used for every deployment, comprising your projects specifications as set in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<network>.toml")," files."),(0,l.kt)("p",null,"The default plan is generated upon each ",(0,l.kt)("inlineCode",{parentName:"p"},"clarinet deployments generate --<network>")," shell command to your ",(0,l.kt)("inlineCode",{parentName:"p"},"deployments/")," folder."),(0,l.kt)("p",null,"However, you can also manually edit this default deployment ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," file directly\u2014programmatically orchestrating your contract publication and user interaction beyond your plan's defaults. "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When deploying, Clarinet prompts you to overwrite any manually added or edited changes that differ from the specifications laid out in your project's ",(0,l.kt)("inlineCode",{parentName:"p"},".toml")," files. Type ",(0,l.kt)("inlineCode",{parentName:"p"},"no")," to proceed with your manually configured deployment plan instead of the default.")),(0,l.kt)("p",null,"Here are some of the relevant transactions and configurations available to developers manually configuring their deployment plans:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emulated-contract-publish"),": Deploy a contract in an in-memory simulated chain (",(0,l.kt)("inlineCode",{parentName:"li"},"simnet")," only)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emulated-contract-call"),": Call a contract that has been deployed in an in-memory simulated chain (simnet only)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"requirement-publish"),": Deploy an external contract (that is, one not published by the same set of private keys as the user wallet currently deploying) on another ",(0,l.kt)("inlineCode",{parentName:"li"},"testnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"devnet")," using another wallet + search, and replace all the references to this contract in the local contracts to deploy (",(0,l.kt)("inlineCode",{parentName:"li"},"devnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"testnet")," only)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contract-publish"),": Deploy a contract (",(0,l.kt)("inlineCode",{parentName:"li"},"devnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"testnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"mainnet"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contract-call"),": Call a contract (",(0,l.kt)("inlineCode",{parentName:"li"},"devnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"testnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"mainnet"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stx-transfer"),": Transfer STX between specified accounts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"btc-transfer"),": Simple bitcoin transfer from a p2pkh address to a p2pkh address (experimental, ",(0,l.kt)("inlineCode",{parentName:"li"},"regtest"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"testnet"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"mainnet"),")."),(0,l.kt)("li",{parentName:"ul"},"Waiting between blocks to make transactions is done by specifying transaction directives in a different batch in the deployment plan (see the ",(0,l.kt)("inlineCode",{parentName:"li"},"batches")," field)")),(0,l.kt)("h3",{id:"emulated-contract-publish"},(0,l.kt)("inlineCode",{parentName:"h3"},"emulated-contract-publish")),(0,l.kt)("p",null,"This default transaction is included in every generated deployment for a ",(0,l.kt)("inlineCode",{parentName:"p"},"simnet")," deployment. The institutional lending protocol ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Trust-Machines/Zest-Audit/blob/1c35ea49fff7d990aa58d045f1e3bcac5e65406c/deployments/default.simnet-plan.yaml"},"Zest has a code audit")," that includes a simnet environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"        - emulated-contract-publish:\n            contract-name: extension-trait\n            emulated-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            path: contracts/dao/traits/extension-trait.clar\n            clarity-version: 1\n")),(0,l.kt)("h3",{id:"emulated-contract-call"},(0,l.kt)("inlineCode",{parentName:"h3"},"emulated-contract-call")),(0,l.kt)("p",null,"This is a transaction type for a ",(0,l.kt)("inlineCode",{parentName:"p"},"simnet")," deployment where the developer wants to emulate a contract call."),(0,l.kt)("p",null,"::note: Read-only functions and functions that take no arguments are passed an empty list like so: ",(0,l.kt)("inlineCode",{parentName:"p"},"parameters: []")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"        - emulated-contract-call:\n            contract-id: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter\n            emulated-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            method: increment\n            parameters:\n                - u1\n")),(0,l.kt)("h3",{id:"requirement-publish"},(0,l.kt)("inlineCode",{parentName:"h3"},"requirement-publish")),(0,l.kt)("p",null,"This cBTC smart contract application has a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-cli/examples/cbtc/deployments/default.devnet-plan.yaml"},"devnet deployment plan")," that publishes the contract required by its core smart contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'        - requirement-publish:\n            contract-id: SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard\n            remap-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            remap-principals:\n                SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            cost: 8400\n            path: ".cache/requirements/SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.clar"\n')),(0,l.kt)("h3",{id:"contract-publish"},(0,l.kt)("inlineCode",{parentName:"h3"},"contract-publish")),(0,l.kt)("p",null,'This default transaction is included in every generated deployment plan for every contract your Clarinet project has. This "counter" application has a ',(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-cli/examples/counter/deployments/default.devnet-plan.yaml"},"devnet deployment plan")," that publishes its core smart contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"        - contract-publish:\n            contract-name: counter\n            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            cost: 5960\n            path: contracts/counter.clar\n            anchor-block-only: true\n            clarity-version: 1\n")),(0,l.kt)("h3",{id:"contract-call"},(0,l.kt)("inlineCode",{parentName:"h3"},"contract-call")),(0,l.kt)("p",null,"The developer can call a function and pass arguments of any valid Clarity type."),(0,l.kt)("p",null,"::note: Read-only functions and functions that take no arguments are passed an empty list like so: ",(0,l.kt)("inlineCode",{parentName:"p"},"parameters: []")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'        - contract-call:\n            contract-id: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bitcoin-dao\n            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            method: add-new-member\n            parameters:\n                - u1\n                - "0x01"\n                - "{ id: u4, username: "Satoshi", address: \'SP1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE }"\n                - "\'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"\n            cost: 5960\n')),(0,l.kt)("h3",{id:"stx-transfer"},(0,l.kt)("inlineCode",{parentName:"h3"},"stx-transfer")),(0,l.kt)("p",null,"The developer can specify the originating account of an STX transfer, the quantity denominated in microstacks, and the recipient, as well as an optional memo field (Note: the memo field can only contain a Clarity ",(0,l.kt)("a",{parentName:"p",href:"https://book.clarity-lang.org/ch02-02-sequence-types.html"},"buffer type")," up to 34 bytes in size, pre-fixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"0x")," (for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"0x68656c6c6f21"),"), not ASCII text or strings)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'        - stx-transfer:\n            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM\n            recipient: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.my-contract\n            mstx-amount: 1000\n            memo: "0x01"\n            cost: 10000\n')),(0,l.kt)("h3",{id:"btc-transfer"},(0,l.kt)("inlineCode",{parentName:"h3"},"btc-transfer")),(0,l.kt)("p",null,"This cBTC smart contract application has a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-cli/examples/cbtc/deployments/wrap-btc.devnet-plan.yaml"},"devnet deployment plan")," that includes broadcasting a BTC transfer transaction to the emulated bitcoin chain with these parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"        - btc-transfer:\n            expected-sender: mjSrB3wS4xab3kYqFktwBzfTdPg367ZJ2d\n            recipient: bcrt1qnxknq3wqtphv7sfwy07m7e4sr6ut9yt6ed99jg\n            sats-amount: 100000000\n            sats-per-byte: 10\n")))}m.isMDXComponent=!0},48423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deployment-plans-a01b2505c0bde10fa0acf37445ac82ca.png"}}]);