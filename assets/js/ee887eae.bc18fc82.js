"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Use Chainhooks with Stacks"},l=void 0,o={unversionedId:"chainhook/guides/chainhooks-with-stacks",id:"chainhook/guides/chainhooks-with-stacks",title:"Use Chainhooks with Stacks",description:"This guide helps you define predicates to use Chainhook with Stacks. The predicates are specified based on if-this, and then-that constructs.",source:"@site/docs/chainhook/guides/chainhooks-with-stacks.md",sourceDirName:"chainhook/guides",slug:"/chainhook/guides/chainhooks-with-stacks",permalink:"/doc/chainhook/guides/chainhooks-with-stacks",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/chainhook/guides/chainhooks-with-stacks.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Use Chainhooks with Stacks"},sidebar:"chainhook",previous:{title:"Use Chainhooks with Bitcoin",permalink:"/doc/chainhook/guides/chainhooks-with-bitcoin"},next:{title:"FAQs",permalink:"/doc/chainhook/faq"}},p={},s=[{value:"<code>if_this</code> Specifications",id:"if_this-specifications",level:2},{value:"<code>then_that</code> Specifications",id:"then_that-specifications",level:2},{value:"Additional Configurations available",id:"additional-configurations-available",level:2},{value:"Example predicate definition to print events",id:"example-predicate-definition-to-print-events",level:2},{value:"Example predicate definition with multiple networks",id:"example-predicate-definition-with-multiple-networks",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide helps you define predicates to use Chainhook with Stacks. The predicates are specified based on ",(0,i.kt)("inlineCode",{parentName:"p"},"if-this"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"then-that")," constructs."),(0,i.kt)("h2",{id:"if_this-specifications"},(0,i.kt)("inlineCode",{parentName:"h2"},"if_this")," Specifications"),(0,i.kt)("p",null,"The current ",(0,i.kt)("inlineCode",{parentName:"p"},"stacks")," predicates support the following ",(0,i.kt)("inlineCode",{parentName:"p"},"if_this")," constructs:"),(0,i.kt)("p",null,"Get any transaction matching a given transaction ID ",(0,i.kt)("inlineCode",{parentName:"p"},"txid")," mandatory argument admits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"32 bytes hex encoded type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "txid",\n    "equals": "0xfaaac1833dc4883e7ec28f61e35b41f896c395f8d288b1a177155de2abd6052f"\n  }\n}\n')),(0,i.kt)("p",null,"Get any stacks block matching constraints:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"block_height")," can be used to check for specific blocks based on the height of the block."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"block_height")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"higher_than"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lower_than"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"between"),": integer type.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "block_height",\n    "higher_than": 10000\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"between")," operator can be used by providing an array with two values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "block_height",\n    "between": [0, 1000]\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction related to a given fungible token asset identifier:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asset-identifier")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, fully qualifying the asset identifier to observe. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.cbtc-sip10::cbtc")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actions")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"array of string types constrained to ",(0,i.kt)("inlineCode",{parentName:"li"},"mint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"burn")," values. Example: ",'["mint", "burn"]')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "ft_event",\n    "asset_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.cbtc-token::cbtc",\n    "actions": ["burn"]\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction related to a given non-fungible token asset identifier:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asset-identifier")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, fully qualifying the asset identifier to observe. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09::monkeys")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actions")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"array of string type constrained to ",(0,i.kt)("inlineCode",{parentName:"li"},"mint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"burn")," values. Example: ",'["mint", "burn"]')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "nft_event",\n    "asset_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09::monkeys",\n    "actions": ["mint", "transfer", "burn"]\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction moving STX tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actions")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"array of string type constrained to ",(0,i.kt)("inlineCode",{parentName:"li"},"mint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer")," , ",(0,i.kt)("inlineCode",{parentName:"li"},"burn")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"lock")," values. Example: ",'["mint", "lock"]')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "stx_event",\n    "actions": ["transfer", "lock"]\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction emitting given print events predicate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract-identifier")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, fully qualifying the contract to observe. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09")))),(0,i.kt)("li",{parentName:"ul"},"Either the ",(0,i.kt)("inlineCode",{parentName:"li"},"contains")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"matches_regex")," argument:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contains")," argument admits string type, used for matching an event containing the specified string. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"vault")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matches_regex")," argument admits string type that should be valid regex, used for matching an event that regex matches with the specified string. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"(?:^|\\\\W)vault(?:$|\\\\W)"))))),(0,i.kt)("p",null,"The following example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"contains")," argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "print_event",\n    "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09",\n    "contains": "vault"\n  }\n}\n')),(0,i.kt)("p",null,"The following example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"matches_regex")," argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "print_event",\n    "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09",\n    "matches_regex": "(?:^|\\\\W)vault(?:$|\\\\W)"\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction calling a specific method for a given contract ",(0,i.kt)("strong",{parentName:"p"},"directly"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!Warning]","\nIf the observed method is being called by another contract, this predicate won't detect it.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract-identifier")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, fully qualifying the contract to observe.Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"SP000000000000000000002Q6VF78.pox")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, used for specifying the method to observe. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"stack-stx"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "contract_call",\n    "contract_identifier": "SP000000000000000000002Q6VF78.pox",\n    "method": "stack-stx"\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction, including a contract deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deployer")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'string "',"*",'" - string encoding a valid STX address. Example: "ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG"')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "contract_deployment",\n    "deployer": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"\n  }\n}\n')),(0,i.kt)("p",null,"Get any transaction, including a contract deployment implementing a given trait\n// coming soon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"implement-trait")," mandatory argument admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string type, fully qualifying the trait's shape to observe. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip09-protocol"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "if_this": {\n    "scope": "contract_deployment",\n    "implement_trait": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip09-protocol"\n  }\n}\n')),(0,i.kt)("h2",{id:"then_that-specifications"},(0,i.kt)("inlineCode",{parentName:"h2"},"then_that")," Specifications"),(0,i.kt)("p",null,"HTTP Post block/transaction payload to a given endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_post")," construct admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"url (string type). Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/api/v1/wrapBtc")),(0,i.kt)("li",{parentName:"ul"},"authorization_header (string type). Secret to add to the request ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization")," header when posting payloads")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "then_that": {\n    "http_post": {\n      "url": "http://localhost:3000/api/v1/wrapBtc",\n      "authorization_header": "Bearer cn389ncoiwuencr"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Append events to a file through the filesystem. Convenient for local tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file_append")," construct admits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"path (string type). Path to file on disk.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "then_that": {\n    "file_append": {\n      "path": "/tmp/events.json"\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"additional-configurations-available"},"Additional Configurations available"),(0,i.kt)("p",null,"Following additional configurations can be used to improve the performance of chainhook by preventing a full scan of the blockchain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ignore any block before the given block:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"start_block": 101'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ignore any block after the given block:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"end_block": 201'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop evaluating chainhook after a given number of occurrences found:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"expire_after_occurrence": 1'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Include decoded clarity values in the payload:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"decode_clarity_values": true'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Include the contract ABI for transactions that deploy contracts:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"include_contract_abi": true')))),(0,i.kt)("h2",{id:"example-predicate-definition-to-print-events"},"Example predicate definition to print events"),(0,i.kt)("p",null,"Retrieve and HTTP Post to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/v1/wrapBtc")," the first five transactions interacting with ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09, emitting print events containing the word 'vault'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chain": "stacks",\n  "uuid": "1",\n  "name": "Lorem ipsum",\n  "version": 1,\n  "networks": {\n    "testnet": {\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09",\n        "contains": "vault"\n      },\n      "then_that": {\n        "http_post": {\n          "url": "http://localhost:3000/api/v1/vaults",\n          "authorization_header": "Bearer cn389ncoiwuencr"\n        }\n      },\n      "start_block": 10200,\n      "expire_after_occurrence": 5\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"example-predicate-definition-with-multiple-networks"},"Example predicate definition with multiple networks"),(0,i.kt)("p",null,"A specification file can also include different networks. In this case, the chainhook will select the predicate corresponding to the network it was launched against."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chain": "stacks",\n  "uuid": "1",\n  "name": "Lorem ipsum",\n  "version": 1,\n  "networks": {\n    "testnet": {\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.monkey-sip09",\n        "contains": "vault"\n      },\n      "then_that": {\n        "http_post": {\n          "url": "http://localhost:3000/api/v1/vaults",\n          "authorization_header": "Bearer cn389ncoiwuencr"\n        }\n      },\n      "start_block": 10200,\n      "expire_after_occurrence": 5\n    },\n    "mainnet": {\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "SP456HQKV0RJXZFY1DGX8MNSNYVE3VGZJSRT459863.monkey-sip09",\n        "contains": "vault"\n      },\n      "then_that": {\n        "http_post": {\n          "url": "http://my-protocol.xyz/api/v1/vaults",\n          "authorization_header": "Bearer cn389ncoiwuencr"\n        }\n      },\n      "start_block": 90232,\n      "expire_after_occurrence": 5\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);