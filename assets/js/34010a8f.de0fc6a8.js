"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[7493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"How to query Stacks 2.0 blockchain"},s=void 0,r={unversionedId:"stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain",id:"stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain",title:"How to query Stacks 2.0 blockchain",description:"The Stacks 2.0 blockchain API allows you to query the Stacks 2.0 blockchain and interact with smart contracts. It was built to maintain paginated, materialized views of the Stacks 2.0 Blockchain.",source:"@site/docs/stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain.md",sourceDirName:"stacks-blockchain-api/how-to-guides",slug:"/stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks-blockchain-api/how-to-guides/how-to-query-stacks2.0-blockchain.md",tags:[],version:"current",frontMatter:{title:"How to query Stacks 2.0 blockchain"}},c={},l=[{value:"Stacks node RPC API",id:"stacks-node-rpc-api",level:3},{value:"Stacks blockchain API",id:"stacks-blockchain-api",level:3},{value:"Using the API",id:"using-the-api",level:2},{value:"OpenAPI spec",id:"openapi-spec",level:2},{value:"TypeScript client library",id:"typescript-client-library",level:2},{value:"HTTP API client sample",id:"http-api-client-sample",level:3},{value:"TypeScript sample",id:"typescript-sample",level:3},{value:"WebSocket sample",id:"websocket-sample",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Requesting proofs",id:"requesting-proofs",level:2},{value:"Searching",id:"searching",level:2},{value:"Using Clarity values",id:"using-clarity-values",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Proxied Stacks Node RPC API endpoints",id:"proxied-stacks-node-rpc-api-endpoints",level:2},{value:"Rosetta support",id:"rosetta-support",level:2},{value:"Microblocks support",id:"microblocks-support",level:2},{value:"Nonce handling",id:"nonce-handling",level:2},{value:"Running an API server",id:"running-an-api-server",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Stacks 2.0 blockchain API allows you to query the Stacks 2.0 blockchain and interact with smart contracts. It was built to maintain paginated, materialized views of the Stacks 2.0 Blockchain."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This API is hosted by Hiro. Using it requires you to trust the hosted server, but provides a faster development experience. Consider ",(0,i.kt)("a",{parentName:"p",href:"#running-an-api-server"},"running your own API instance")," to create a fully trustless architecture for your app.")),(0,i.kt)("p",null,"The RESTful JSON API can be used without any authorization. The base path for the API is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for mainnet, replace `testnet` with `mainnet`\nhttps://api.testnet.hiro.so/\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Review the ",(0,i.kt)("a",{parentName:"p",href:"/api"},"Stacks API reference")," for more details")),(0,i.kt)("p",null,"The API is comprised of two parts: the Stacks Blockchain API and the Stacks Node RPC API. The Node RPC API is exposed by every running node. Stacks Blockchain API, however, introduces additional capabilities (for example, retrieving all transactions). It also proxies calls directly to Stacks Node RPC API."),(0,i.kt)("h3",{id:"stacks-node-rpc-api"},"Stacks node RPC API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain/"},"stacks-node implementation")," exposes JSON RPC endpoints."),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/")," routes are routed through a proxy to a Hiro-hosted Stacks Node. For a trustless architecture, you should make these requests to a self-hosted node."),(0,i.kt)("h3",{id:"stacks-blockchain-api"},"Stacks blockchain API"),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"/extended/")," routes are provided by the Stacks 2.0 Blockchain API directly. They extend the Stacks Node API capabilities to make it easier to integrate with."),(0,i.kt)("h2",{id:"using-the-api"},"Using the API"),(0,i.kt)("p",null,"Depending on your development environment, you can access the API through a variety of methods.\nThe easiest way to start interacting with the API is through the ",(0,i.kt)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/614feab5c108d292bffa#?env%5BStacks%20Blockchain%20API%5D=W3sia2V5Ijoic3R4X2FkZHJlc3MiLCJ2YWx1ZSI6IlNUMlRKUkhESE1ZQlE0MTdIRkIwQkRYNDMwVFFBNVBYUlg2NDk1RzFWIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJibG9ja19pZCIsInZhbHVlIjoiMHgiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im9mZnNldCIsInZhbHVlIjoiMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfdHgiLCJ2YWx1ZSI6IjIwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfYmxvY2siLCJ2YWx1ZSI6IjMwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0eF9pZCIsInZhbHVlIjoiMHg1NDA5MGMxNmE3MDJiNzUzYjQzMTE0ZTg4NGJjMTlhODBhNzk2MzhmZDQ0OWE0MGY4MDY4Y2RmMDAzY2RlNmUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9pZCIsInZhbHVlIjoiU1RKVFhFSlBKUFBWRE5BOUIwNTJOU1JSQkdRQ0ZOS1ZTMTc4VkdIMS5oZWxsb193b3JsZFxuIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidGNfYWRkcmVzcyIsInZhbHVlIjoiYWJjIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9hZGRyZXNzIiwidmFsdWUiOiJTVEpUWEVKUEpQUFZETkE5QjA1Mk5TUlJCR1FDRk5LVlMxNzhWR0gxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9uYW1lIiwidmFsdWUiOiJoZWxsb193b3JsZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWFwIiwidmFsdWUiOiJzdG9yZSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWV0aG9kIiwidmFsdWUiOiJnZXQtdmFsdWUiLCJlbmFibGVkIjp0cnVlfV0="},"Postman Collection")," or ",(0,i.kt)("a",{parentName:"p",href:"https://curl.haxx.se/"},"cURL"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Postman allows you to ",(0,i.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/generate-code-snippets/"},"generate sample code")," for API requests for various languages and libraries.")),(0,i.kt)("h2",{id:"openapi-spec"},"OpenAPI spec"),(0,i.kt)("p",null,"The Stacks API was designed using the ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specification"),", making it compatible with a variety of developer tools."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks-blockchain-api/blob/master/docs/openapi.yaml"},"OpenAPI specification file for Stacks")," is used to generate the ",(0,i.kt)("a",{parentName:"p",href:"#typescript-client-library"},"TypeScript client library"),". You can use the specification file to generate client libraries for other programming languages using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"openapi-generator tool")),(0,i.kt)("h2",{id:"typescript-client-library"},"TypeScript client library"),(0,i.kt)("p",null,"A Typescript client library is available for use of the Stacks API. The client library enables type-safe REST and WebSocket communication with the Stacks API endpoints. ",(0,i.kt)("a",{parentName:"p",href:"https://hirosystems.github.io/stacks-blockchain-api/client/index.html"},"Review the client documentation for more details"),"."),(0,i.kt)("p",null,"The client is made up of three components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generated HTTP API client"),(0,i.kt)("li",{parentName:"ol"},"Typescript definitions for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/stacks-blockchain-api/feature-guides/use-clarity-values"},"Clarity values")),(0,i.kt)("li",{parentName:"ol"},"WebSocket client")),(0,i.kt)("p",null,"The following sections demonstrate common usages of the TypeScript API client."),(0,i.kt)("h3",{id:"http-api-client-sample"},"HTTP API client sample"),(0,i.kt)("p",null,"The Typescript client library requires you to specify the underlying HTTP request library to handle HTTP communication. The example below uses the universal fetch API ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lquixada/cross-fetch"},(0,i.kt)("inlineCode",{parentName:"a"},"cross-fetch")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import fetch from 'cross-fetch';\nimport { Configuration, AccountsApi } from '@stacks/blockchain-api-client';\n\n(async () => {\n  const apiConfig = new Configuration({\n    fetchApi: fetch,\n    // for mainnet, replace `testnet` with `mainnet`\n    basePath: 'https://api.testnet.hiro.so', // defaults to http://localhost:3999\n  });\n\n  // initiate the /accounts API with the basepath and fetch library\n  const accountsApi = new AccountsApi(apiConfig);\n\n  // get transactions for a specific account\n  const txs = await accountsApi.getAccountTransactions({\n    principal: 'ST000000000000000000002AMW42H',\n  });\n\n  console.log(txs);\n})().catch(console.error);\n")),(0,i.kt)("h3",{id:"typescript-sample"},"TypeScript sample"),(0,i.kt)("p",null,"The following sample demonstrate how generated ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/stacks-blockchain-api/tree/master/client/src/generated/models"},"TypeScript models")," can be used for type-safety:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import fetch from 'cross-fetch';\nimport {\n  Configuration,\n  AccountsApi,\n  AccountsApiInterface,\n  AddressBalanceResponse,\n  AddressBalanceResponseStx,\n} from '@stacks/blockchain-api-client';\n\n(async () => {\n  const apiConfig: Configuration = new Configuration({\n    fetchApi: fetch,\n    // for mainnet, replace `testnet` with `mainnet`\n    basePath: 'https://api.testnet.hiro.so', // defaults to http://localhost:3999\n  });\n\n  const principal: string = 'ST000000000000000000002AMW42H';\n\n  // initiate the /accounts API with the basepath and fetch library\n  const accountsApi: AccountsApiInterface = new AccountsApi(apiConfig);\n\n  // get balance for a specific account\n  const balance: AddressBalanceResponse = await accountsApi.getAccountBalance({\n    principal,\n  });\n\n  // get STX balance details\n  const stxAmount: AddressBalanceResponseStx = balance.stx;\n\n  console.log(stxAmount);\n})().catch(console.error);\n")),(0,i.kt)("h3",{id:"websocket-sample"},"WebSocket sample"),(0,i.kt)("p",null,"The WebSocket components enabled you to subscribe to specific updates, enabling a near real-time display of updates on transactions and accounts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { connectWebSocketClient } from '@stacks/blockchain-api-client';\n\nconst client = await connectWebSocketClient('ws://stacks-node-api.blockstack.org/');\n\nconst sub = await client.subscribeAddressTransactions(contractCall.txId, event => {\n  console.log(event);\n});\n\nawait sub.unsubscribe();\n")),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"To make API responses more compact, lists returned by the API are paginated. For lists, the response body includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"limit"),": the number of list items return per response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset"),": the number of elements to skip (starting from 0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total"),": the number of all available list items"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"results"),": the array of list items (length of array equals the set limit)")),(0,i.kt)("p",null,"Here is a sample response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "limit": 10,\n  "offset": 0,\n  "total": 101922,\n  "results": [{\n    "tx_id": "0x924e0a688664851f5f96b437fabaec19b7542cfcaaf92a97eae43384cacd83d0",\n    "nonce": 308,\n    "fee_rate": "0",\n    "sender_address": "ST39F7SA0AKH7RB363W3NE2DTHD3P32ZHNX2KE7J9",\n    "sponsored": false,\n    "post_condition_mode": "deny",\n    "post_conditions": [],\n    "anchor_mode": "on_chain_only",\n    "block_hash": "0x17ceb3da5f36aab351d6b14f5aa77f85bb6b800b954b2f24c564579f80116d99",\n    "parent_block_hash": "0xe0d1e8d216a77526ae2ce40294fc77038798a179a6532bb8980d3c2183f58de6",\n    "block_height": 14461,\n    "burn_block_time": 1622875042,\n    "burn_block_time_iso": "2021-06-05T06:37:22.000Z",\n    "canonical": true,\n    "tx_index": 0,\n    "tx_status": "success",\n    "tx_result": { ... },\n    "microblock_hash": "",\n    "microblock_sequence": 2147483647,\n    "microblock_canonical": true,\n    "event_count": 0,\n    "events": [],\n    "tx_type": "coinbase",\n    "coinbase_payload": { ... }\n    },\n    { ... }\n  ]\n}\n')),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," properties, you can paginate through the entire list by increasing the offset by the limit until you reach the total."),(0,i.kt)("h2",{id:"requesting-proofs"},"Requesting proofs"),(0,i.kt)("p",null,"Several endpoints will by default request the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-004/sip-004-materialized-view.md#marf-merkle-proofs"},"MARF Merkel Proof"),"."),(0,i.kt)("p",null,"Provided with the proof, a client can verify the value, cumulative energy spent, and the number of confirmation for the response value provided by the API."),(0,i.kt)("p",null,"Requesting the proof requires more resources (computation time, response time, and response body size). To avoid the additional resources, in case verification is not required, API endpoints allow setting the request parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"proof=0"),". The returned response object will not have any proof fields."),(0,i.kt)("h2",{id:"searching"},"Searching"),(0,i.kt)("p",null,"The API provides a search endpoint (",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#operation/search_by_id"},(0,i.kt)("inlineCode",{parentName:"a"},"/extended/v1/search/{id}")),") that takes an identifier and responds with matching blocks, transactions, contracts, or accounts."),(0,i.kt)("p",null,"The search operation used by the endpoint (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM txs WHERE tx_id = $1 LIMIT 1"),") matches hashes ",(0,i.kt)("strong",{parentName:"p"},"equal")," to the provided identifier. Fuzzy search, incomplete identifiers, or wildcards will not return any matches."),(0,i.kt)("h2",{id:"using-clarity-values"},"Using Clarity values"),(0,i.kt)("p",null,"Some endpoints, like the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#operation/call_read_only_function"},"read-only function contract call"),", require input to as serialized ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/docs/clarity/"},"Clarity value"),". Other endpoints return serialized values that need to be deserialized."),(0,i.kt)("p",null,"Below is an example for Clarity value usage in combination with the API."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The example below is for illustration only. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@stacks/transactions")," library supports typed contract calls and makes ",(0,i.kt)("a",{parentName:"p",href:"https://docs.stacks.co/docs/clarity/"},"response value utilization much simpler"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Configuration,\n  SmartContractsApiInterface,\n  SmartContractsApi,\n  ReadOnlyFunctionSuccessResponse,\n} from '@stacks/blockchain-api-client';\nimport { uintCV, UIntCV, cvToHex, hexToCV, ClarityType } from '@stacks/transactions';\n\n(async () => {\n  const apiConfig: Configuration = new Configuration({\n    fetchApi: fetch,\n    // for mainnet, replace `testnet` with `mainnet`\n    basePath: 'https://api.testnet.hiro.so', // defaults to http://localhost:3999\n  });\n\n  const contractsApi: SmartContractsApiInterface = new SmartContractsApi(apiConfig);\n\n  const principal: string = 'ST000000000000000000002AMW42H';\n\n  // use most recent from: https://api.<mainnet/testnet>.hiro.so/v2/pox\n  const rewardCycle: UIntCV = uintCV(22);\n\n  // call a read-only function\n  const fnCall: ReadOnlyFunctionSuccessResponse = await contractsApi.callReadOnlyFunction({\n    contractAddress: principal,\n    contractName: 'pox',\n    functionName: 'is-pox-active',\n    readOnlyFunctionArgs: {\n      sender: principal,\n      arguments: [cvToHex(rewardCycle)],\n    },\n  });\n\n  console.log({\n    status: fnCall.okay,\n    result: fnCall.result,\n    representation: hexToCV(fnCall.result).type === ClarityType.BoolTrue,\n  });\n})().catch(console.error);\n")),(0,i.kt)("h2",{id:"error-handling"},"Error handling"),(0,i.kt)("p",null,"The API can respond with two different error types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For URLs that don't match any defined endpoint, an HTTP 404 is returned. The body lists the URL in reference (as a string)"),(0,i.kt)("li",{parentName:"ul"},"For invalid input values (URL/body parameters), an HTTP 500 is returned. The body is a JSON object with an ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," property. The object also includes stack trace (",(0,i.kt)("inlineCode",{parentName:"li"},"stack"),") and an error UUID (",(0,i.kt)("inlineCode",{parentName:"li"},"errorTag"),")")),(0,i.kt)("h2",{id:"proxied-stacks-node-rpc-api-endpoints"},"Proxied Stacks Node RPC API endpoints"),(0,i.kt)("p",null,"The Stacks 2.0 Blockchain API is centrally hosted. However, every running Stacks node exposes an RPC API, which allows you to interact with the underlying blockchain. Instead of using a centrally hosted API, you can directly access the RPC API of a locally hosted Node."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Stacks Blockchain API proxies to Node RPC endpoints")),(0,i.kt)("p",null,"While the Node RPC API doesn't give the same functionality as the hosted Stacks 2.0 Blockchain API, you get similar functionality in a way that is scoped to that specific node. The RPC API includes the following endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/post_core_node_transactions"},"POST /v2/transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_contract_interface"},"GET /v2/contracts/interface/{contract_address}/{contract_name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_contract_data_map_entry"},"POST /v2/map_entry/{contract_address}/{contract_name}/{map_name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_contract_source"},"GET /v2/contracts/source/{contract_address}/{contract_name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_account_info"},"GET /v2/accounts/{principal}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/call_read_only_function"},"POST /v2/contracts/call-read/{contract_address}/{contract_name}/{function_name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_fee_transfer"},"GET /v2/fees/transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.hiro.so/api#operation/get_core_api_info"},"GET /v2/info"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you run a local node, it exposes an HTTP server on port ",(0,i.kt)("inlineCode",{parentName:"p"},"20443"),". The info endpoint would be ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:20443/v2/info"),".")),(0,i.kt)("h2",{id:"rosetta-support"},"Rosetta support"),(0,i.kt)("p",null,"This API supports ",(0,i.kt)("a",{parentName:"p",href:"https://www.rosetta-api.org/"},"v1.4.6 of the Rosetta specification"),". This industry open standard makes it simple to integrate blockchain deployment and interaction."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Find all Data and Construction Rosetta endpoints ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#tag/Rosetta"},"here"))),(0,i.kt)("h2",{id:"microblocks-support"},"Microblocks support"),(0,i.kt)("p",null,"!> API support for microblocks is a work-in-progress. Review the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/api#tag/Microblocks"},"API documentation")," carefully to\nensure that you are up-to-date on the latest implementation details for microblocks."),(0,i.kt)("p",null,"The API allows querying the most recently streamed microblocks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for mainnet, remove `.testnet`\ncurl 'https://api.testnet.hiro.so/extended/v1/microblock'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "limit": 20,\n  "offset": 0,\n  "total": 8766,\n  "results": [\n    {\n      "canonical": true,\n      "microblock_canonical": true,\n      "microblock_hash": "0xe6897aab881208185e3fb6ba58d9d9e35c43c68f13fbb892b20cebd39ac69567",\n      "microblock_sequence": 0,\n      "microblock_parent_hash": "0xe0d1e8d216a77526ae2ce40294fc77038798a179a6532bb8980d3c2183f58de6",\n      "parent_index_block_hash": "0x178cd9a37bf38f6b85d9f18e65588e60782753b1463ae080fb9865938b0898ea",\n      "block_height": 14461,\n      "parent_block_height": 14460,\n      "parent_block_hash": "0xe0d1e8d216a77526ae2ce40294fc77038798a179a6532bb8980d3c2183f58de6",\n      "block_hash": "0x17ceb3da5f36aab351d6b14f5aa77f85bb6b800b954b2f24c564579f80116d99",\n      "txs": ["0x0622e096dec7e2f6e8f7d95f732e04d238b7381aea8d0aecffae026c53e73e05"]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"nonce-handling"},"Nonce handling"),(0,i.kt)("p",null,"In order to prevent stuck transactions, you must track the next available nonce for principals issuing transactions. The\nAPI provides an endpoint to make nonce handling simpler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for mainnet, remove `.testnet`\n# replace <principal> with your STX address\ncurl 'https://api.testnet.hiro.so/extended/v1/address/<principal>/nonces'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "last_executed_tx_nonce": 5893,\n  "last_mempool_tx_nonce": null,\n  "possible_next_nonce": 5894,\n  "detected_missing_nonces": []\n}\n')),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"possible_next_nonce")," property as the nonce for your next transaction."),(0,i.kt)("h2",{id:"running-an-api-server"},"Running an API server"),(0,i.kt)("p",null,"While Hiro provides a hosted API server of the Stacks Blockchain API, anyone can spin up their own version. Please ",(0,i.kt)("a",{parentName:"p",href:"/get-started/running-api-node"},"follow the instructions in this guide")," to start a Docker container with the API service running."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once started, the API is available on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3999"))))}h.isMDXComponent=!0}}]);