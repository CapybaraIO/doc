"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,h=p["".concat(c,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"How to install Stacks CLI"},s=void 0,r={unversionedId:"stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli",id:"stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli",title:"How to install Stacks CLI",description:"The Stacks CLI enables interactions with the Stacks blockchain through a set of commands.",source:"@site/docs/stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli.md",sourceDirName:"stacks-blockchain-api/how-to-guides",slug:"/stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks-blockchain-api/how-to-guides/how-to-install-stacks-cli.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"How to install Stacks CLI"},sidebar:"stacks-api",previous:{title:"Rosetta Support",permalink:"/doc/stacks-blockchain-api/feature-guides/rosetta-support"},next:{title:"Run a Stacks Blockchain API instance with Docker",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-run-stacks-blockchain-api-docker"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Network selection",id:"network-selection",level:2},{value:"Account",id:"account",level:2},{value:"Creating an account",id:"creating-an-account",level:3},{value:"Checking balance",id:"checking-balance",level:3},{value:"Transactions",id:"transactions",level:2},{value:"Sending tokens",id:"sending-tokens",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Stacks CLI enables interactions with the Stacks blockchain through a set of commands."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First, ensure you have ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," installed. Next, run the following command in your terminal:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g @stacks/cli")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-g")," flag makes the CLI commands available globally")),(0,o.kt)("h2",{id:"network-selection"},"Network selection"),(0,o.kt)("p",null,"By default, the CLI will attempt to interact with Stacks mainnet. However, it is possible to override the network and set it to testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"stx <command> -t\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For account usage, that means addresses generated will ",(0,o.kt)("em",{parentName:"p"},"only")," be available for the specific network. An account generated for testnet cannot be used on mainnet.")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," flag causes the CLI to connect to the testnet node at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://stacks-node-api.blockstack.org:20443"),". To specify a node to connect to, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-I")," flag followed by the URL of the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'stx <command> -I "http://localhost:20443"\n')),(0,o.kt)("h2",{id:"account"},"Account"),(0,o.kt)("p",null,"This section describes how to use the CLI to manage an account."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We don't recommended you use the CLI to handle accounts with real STX tokens on the mainnet. Instead, use an appropriate wallet to support secure token holding.")),(0,o.kt)("h3",{id:"creating-an-account"},"Creating an account"),(0,o.kt)("p",null,"You can generate a new account for testnet by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"make_keychain")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx make_keychain -t\n")),(0,o.kt)("p",null,"Your response should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mnemonic": "private unhappy random runway boil scissors remove harvest fatigue inherit inquiry still before mountain pet tail mad accuse second milk client rebuild salt chase",\n  "keyInfo": {\n    "privateKey": "381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301",\n    "address": "ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ",\n    "btcAddress": "n4X37UmRZYk9HawtS1w4xRtqJWhByxiz3c",\n    "index": 0\n  }\n}\n')),(0,o.kt)("p",null,"The mnemonic is your 24 word seed phrase, which you should back up securely if you want access to this account again in the future. Once lost, it cannot be recovered."),(0,o.kt)("p",null,"The Stacks address associated with the newly generated account is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The preceding address is a testnet address that can only be used on testnet.")),(0,o.kt)("p",null,"It is best to store the response of the CLI somewhere. You will need the private key, for instance, to send tokens to others."),(0,o.kt)("h3",{id:"checking-balance"},"Checking balance"),(0,o.kt)("p",null,"You can check the balance of your account using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx balance ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ -t\n")),(0,o.kt)("p",null,"The response should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "balance": "10000",\n  "nonce": 0\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To receive testnet STX tokens, use the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.hiro.so/sandbox/faucet?chain=testnet"},"faucet"),".")),(0,o.kt)("p",null,"Take note that the nonce for the account is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". Account nonce is important for transaction broadcasting."),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"This section describes how to use the CLI to generate and broadcast transactions."),(0,o.kt)("h3",{id:"sending-tokens"},"Sending tokens"),(0,o.kt)("p",null,"In order to send tokens, the CLI command requires 5 parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recipient Address"),": The Stacks address of the recipient"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Amount"),": The number of Stacks to send denoted in microstacks (1 STX = 1,000,000 microstacks)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fee Rate"),": The fee rate for this transaction. You can safely set a fee rate of 200 for testnet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nonce"),": The nonce is a number that needs to be incremented monotonically for each transaction from the account. This ensures transactions are not duplicated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Private Key"),": This is the private key corresponding to your account")),(0,o.kt)("p",null,"The CLI command to use with these parameters is ",(0,o.kt)("inlineCode",{parentName:"p"},"send_tokens"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx send_tokens ST2KMMVJAB00W5Z6XWTFPH6B13JE9RJ2DCSHYX0S7 1000 200 0 381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301 -t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid": "0xd32de0d66b4a07e0d7eeca320c37a10111c8c703315e79e17df76de6950c622c",\n  "transaction": "https://explorer.hiro.so/txid/0xd32de0d66b4a07e0d7eeca320c37a10111c8c703315e79e17df76de6950c622c"\n}\n')),(0,o.kt)("p",null,"With this command we\u2019re sending 1000 microstacks to the Stacks address ",(0,o.kt)("inlineCode",{parentName:"p"},"ST2KMMVJAB00W5Z6XWTFPH6B13JE9RJ2DCSHYX0S7"),"."),(0,o.kt)("p",null,"We set the fee rate to ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," microstacks."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," flag to estimate the transaction fee needed to get processed by the network, without broadcasting your transaction.")),(0,o.kt)("p",null,"The nonce is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for this transaction, since it will be the first transaction we send from this account. For subsequent transactions, you will need to increment this number by ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," each time. You can check the current nonce for the account using the ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," command."),(0,o.kt)("p",null,"Finally, the last parameter is the private key for the account. ",(0,o.kt)("inlineCode",{parentName:"p"},"381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301")),(0,o.kt)("p",null,"Once again, we\u2019re using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," option to indicate that this is a testnet transaction, so it should be broadcast to testnet."),(0,o.kt)("p",null,"If valid, the transaction will be broadcast to the network, and the command will respond with a transaction ID."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To obtain the raw, serialized transaction payload without broadcasting it, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-x")," flag")))}u.isMDXComponent=!0}}]);