"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,u=p["".concat(l,".").concat(h)]||p[h]||k[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Run Chainhook as a Service Using Stacks"},r=void 0,c={unversionedId:"chainhook/guides/chainhook-as-a-service-stacks",id:"chainhook/guides/chainhook-as-a-service-stacks",title:"Run Chainhook as a Service Using Stacks",description:"You can run Chainhook as a service to evaluate Stacks blocks against your predicates. You can also dynamically register new predicates by enabling predicates registration API.",source:"@site/docs/chainhook/guides/chainhook-as-a-service-stacks.md",sourceDirName:"chainhook/guides",slug:"/chainhook/guides/chainhook-as-a-service-stacks",permalink:"/doc/chainhook/guides/chainhook-as-a-service-stacks",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/chainhook/guides/chainhook-as-a-service-stacks.md",tags:[],version:"current",frontMatter:{title:"Run Chainhook as a Service Using Stacks"},sidebar:"chainhook",previous:{title:"Run Chainhook as a Service Using Bitcoind",permalink:"/doc/chainhook/guides/chainhook-as-a-service-bitcoind"},next:{title:"Use Chainhooks with Bitcoin",permalink:"/doc/chainhook/guides/chainhooks-with-bitcoin"}},l={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configure Your Stacks Node",id:"configure-your-stacks-node",level:3},{value:"Configure Chainhook",id:"configure-chainhook",level:3},{value:"Scan the blockchain based on predicates",id:"scan-the-blockchain-based-on-predicates",level:2},{value:"Example 1 - <code>file_append</code>",id:"example-1---file_append",level:3},{value:"Example 2 - <code>http_post</code>",id:"example-2---http_post",level:3},{value:"Initiate Chainhook Service",id:"initiate-chainhook-service",level:2},{value:"Dynamically Register Predicates",id:"dynamically-register-predicates",level:2}],d={toc:s},p="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can run Chainhook as a service to evaluate Stacks blocks against your predicates. You can also dynamically register new predicates by enabling predicates registration API."),(0,i.kt)("p",null,"Start with the prerequisite section and configure your files to start the chainhook service."),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("h3",{id:"configure-your-stacks-node"},"Configure Your Stacks Node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure your Stacks node using the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.stacks.co/docs/nodes-and-miners/stacks-node-configuration"},"Stacks node configuration")," documentation."),(0,i.kt)("li",{parentName:"ul"},"We Recommend using the latest version of Stacks. You can check the latest version by following ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/stacks-network/stacks-blockchain/releases"},"this")," link."),(0,i.kt)("li",{parentName:"ul"},"Set up your Bitcoin node by following ",(0,i.kt)("a",{parentName:"li",href:"/doc/chainhook/guides/chainhook-as-a-service-bitcoind#setting-up-a-bitcoin-node"},"this")," article, then get the ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcuser"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcpassword"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"rpc_port")," values defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf")," file.")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Stacks.toml")," file is generated when configuring your Stacks node. Below is the sample ",(0,i.kt)("inlineCode",{parentName:"p"},"Stacks.toml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[node]\nworking_dir = "/stacks-blockchain"\nrpc_bind = "0.0.0.0:20443"          # Make a note of this port to use in the `Chainhook.toml`\np2p_bind = "0.0.0.0:20444"\nbootstrap_node = "02da7a464ac770ae8337a343670778b93410f2f3fef6bea98dd1c3e9224459d36b@seed-0.mainnet.stacks.co:20444,02afeae522aab5f8c99a00ddf75fbcb4a641e052dd48836408d9cf437344b63516@seed-1.mainnet.stacks.co:20444,03652212ea76be0ed4cd83a25c06e57819993029a7b9999f7d63c36340b34a4e62@seed-2.mainnet.stacks.co:20444"\n\n[burnchain]\nchain = "bitcoin"\nmode = "mainnet"\npeer_host = "localhost"\nusername = "bitcoind_username"       # Must match the rpcuser in the bitcoin.conf\npassword = "bitcoind_password"       # Must match the rpcpassword in the bitcoin.conf\nrpc_port = 8332                      # Must match the rpcport in the bitcoin.conf\npeer_port = 8333\n\n[[events_observer]]\nendpoint = "localhost:20455"\nretry_count = 255\nevents_keys = ["*"]\n\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",{parentName:"blockquote"},"Ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_port")," values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stacks.toml")," file match the values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoin.conf")," file. Also, note the ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_bind")," port to use in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," configuration in the next section of this article.")),(0,i.kt)("h3",{id:"configure-chainhook"},"Configure Chainhook"),(0,i.kt)("p",null,"In this section, you will configure a chainhook to communicate with the network. Run the following command in your terminal and generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook config generate --mainnet\n")),(0,i.kt)("p",null,"Several network parameters in the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," configuration file need to match those in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoin.conf")," file created earlier in the ",(0,i.kt)("a",{parentName:"p",href:"/doc/chainhook/guides/chainhook-as-a-service-bitcoind#setting-up-a-bitcoin-node"},"Setting up a Bitcoin Node")," section. Please update the following parameters accordingly:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoind_rpc_username")," with the username set for ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcuser")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf"),"."),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoind_rpc_password")," with the password set for ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcpassword")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf"),"."),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoind_rpc_url")," with the same host and port used for ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcport")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf"),"."),(0,i.kt)("li",{parentName:"ol"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"stacks_node_rpc_url")," matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"rpc_bind")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Stacks.toml"),".")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," file is generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[storage]\nworking_dir = "cache"\n\n# The Http Api allows you to register / deregister\n# dynamically predicates.\n# Disable by default.\n#\n# [http_api]\n# http_port = 20456\n# database_uri = "redis://localhost:6379/"\n\n[network]\nmode = "mainnet"\nbitcoind_rpc_url = "http://localhost:8332"\nbitcoind_rpc_username = "devnet"\nbitcoind_rpc_password = "devnet"\n# Bitcoin block events can be received by Chainhook\n# either through a Bitcoin node\'s ZeroMQ interface,\n# or through the Stacks node. The Stacks node is\n# used by default:\nstacks_node_rpc_url = "http://localhost:20443"\nstacks_events_ingestion_port = 20455\n# but zmq can be used instead:\n# bitcoind_zmq_url = "tcp://0.0.0.0:18543"\n\n[limits]\nmax_number_of_bitcoin_predicates = 100\nmax_number_of_concurrent_bitcoin_scans = 100\nmax_number_of_stacks_predicates = 10\nmax_number_of_concurrent_stacks_scans = 10\nmax_number_of_processing_threads = 16\nmax_number_of_networking_threads = 16\nmax_caching_memory_size_mb = 32000\n\n[[event_source]]\ntsv_file_url = "https://archive.hiro.so/mainnet/stacks-blockchain-api/mainnet-stacks-blockchain-api-latest"\n')),(0,i.kt)("p",null,"Ensure the following configurations are matched to allow chainhook to communicate with both Stacks and Bitcoin."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"bitcoin.conf"),(0,i.kt)("th",{parentName:"tr",align:null},"Stacks.toml"),(0,i.kt)("th",{parentName:"tr",align:null},"Chainhook.toml"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rpcuser"),(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"bitcoind_rpc_username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rpcpassword"),(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"bitcoind_rpc_password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rpcport"),(0,i.kt)("td",{parentName:"tr",align:null},"rpc_port"),(0,i.kt)("td",{parentName:"tr",align:null},"bitcoind_rpc_url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zmqpubhashblock"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"bitcoind_zmq_url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"rpc_bind"),(0,i.kt)("td",{parentName:"tr",align:null},"stacks_node_rpc_url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"stacks_events_ingestion_port")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoind_zmq_url")," is optional when running chainhook as a service using Stacks because Stacks will pull the blocks from Stacks and the Bitcoin chain.")),(0,i.kt)("h2",{id:"scan-the-blockchain-based-on-predicates"},"Scan the blockchain based on predicates"),(0,i.kt)("p",null,"Now that the Stacks and Chainhook configurations are done, you can scan your blocks by defining your ",(0,i.kt)("a",{parentName:"p",href:"/doc/chainhook/#if-this-predicate-design"},"predicates"),". This section helps you with sample JSON files to scan blockchain blocks and render the results. To understand the supported predicates for Stacks, refer to ",(0,i.kt)("a",{parentName:"p",href:"/doc/chainhook/guides/chainhooks-with-stacks"},"how to use chainhook with stacks"),"."),(0,i.kt)("p",null,"The following are the two examples to walk you through ",(0,i.kt)("inlineCode",{parentName:"p"},"file_append")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"http_post")," ",(0,i.kt)("inlineCode",{parentName:"p"},"then-that")," predicate designs."),(0,i.kt)("p",null,"Example 1 uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event.json")," file to scan the predicates and render results using ",(0,i.kt)("inlineCode",{parentName:"p"},"file_append"),".\nExample 2 uses ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event-post.json")," to scan the predicates and render results using ",(0,i.kt)("inlineCode",{parentName:"p"},"http_post"),"."),(0,i.kt)("p",null,"You can choose between the following examples to scan the predicates."),(0,i.kt)("h3",{id:"example-1---file_append"},"Example 1 - ",(0,i.kt)("inlineCode",{parentName:"h3"},"file_append")),(0,i.kt)("p",null,"Run the following command to generate a sample JSON file with predicates in your terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook predicates new print-event.json --stacks\n")),(0,i.kt)("p",null,"A JSON file ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event.json")," is generated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chain": "stacks",\n  "uuid": "6ad27176-2b83-4381-b51c-50baede11e3f",\n  "name": "Hello world",\n  "version": 1,\n  "networks": {\n    "testnet": {\n      "start_block": 34239,\n      "end_block": 50000,\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "ST1SVA0SST0EDT4MFYGWGP6GNSXMMQJDVP1G8QTTC.arkadiko-freddie-v1-1",\n        "contains": "vault"\n      },\n      "then_that": {\n        "file_append": {\n          "path": "arkadiko.txt"\n        }\n      }\n    },\n    "mainnet": {\n      "start_block": 34239,\n      "end_block": 50000,\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1",\n        "contains": "vault"\n      },\n      "then_that": {\n        "file_append": {\n          "path": "arkadiko.txt"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",{parentName:"blockquote"},"You can get blockchain height and current block in the ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.hiro.so/blocks?chain=mainnet"},"Explorer"),".")),(0,i.kt)("p",null,"Now, use the following command to scan the blocks based on the predicates defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," network block of your ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook predicates scan print-event.json --mainnet\n")),(0,i.kt)("p",null,"The output of the above command will be a text file ",(0,i.kt)("inlineCode",{parentName:"p"},"arkadiko.txt")," generated based on the predicate definition. It should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"apply":[{"block_identifier":{"hash":"0xf048102fee15dda049e6781c8e9aec1b39b1b9dc68d06fd9b84dced1b80ddd62","index":34307},"metadata":{"bitcoin_anchor_block_identifier":{"hash":"0x000000000000000000098e9ebc30e7c8e32b30ffecbd7dc5c715b5f07e1de25c","index":705648},"confirm_microblock_identifier":{"hash":"0xa65642590e98f54183a0be747a1c01e41d3ba211f6599eff2574d78ed2578468","index":2},"pox_cycle_index":18,"pox_cycle_length":2100,"pox_cycle_position":1797,"stacks_block_hash":"0x77a1aed86e895cb4b7b969986aa6a28eb2465e7227f351dd4e23d28448b222e9"},"parent_block_identifier":{"hash":"0x3117663ee5c5690d76e3f6c97597cbcc95085e7cecb0791d3edc4f95a4ce6f23","index":34306},"timestamp":1634625398,"transactions":[{"metadata":{"description":"invoked: SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1::collateralize-and-mint(u300000000, u130000000, (tuple (auto-payoff true) (stack-pox true)), \\"STX-A\\", SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1, SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token, SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-collateral-types-v1-1, SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-oracle-v1-1)","execution_cost":{"read_count":155,"read_length":318312,"runtime":349859000,"write_count":10,"write_length":3621},"fee":188800,"kind":{"data":{"args":["u300000000","u130000000","(tuple (auto-payoff true) (stack-pox true))","\\"STX-A\\"","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-collateral-types-v1-1","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-oracle-v1-1"],"contract_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1","method":"collateralize-and-mint"},"type":"ContractCall"},"nonce":15,"position":{"index":16},"proof":null,"raw_tx":"0x000000000104003936cedf1ddb6bc1aa6f243772cab048c586a18b000000000000000f000000000002e1800001b563c7e917648668a796d972ef9352b76035102c6159c2061bc9e9a0d161098e1ebd17d6c0754e0308d2b53ef1035e5dcfba37f0cc6f16e69f842ad7f6b691980302000000010002163936cedf1ddb6bc1aa6f243772cab048c586a18b010000000011e1a3000216982f3ec112a5f5928a5c96a914bd733793b896a51561726b6164696b6f2d667265646469652d76312d3116636f6c6c61746572616c697a652d616e642d6d696e74000000080100000000000000000000000011e1a3000100000000000000000000000007bfa4800c000000020b6175746f2d7061796f66660309737461636b2d706f78030d000000055354582d410616982f3ec112a5f5928a5c96a914bd733793b896a51961726b6164696b6f2d7374782d726573657276652d76312d310616982f3ec112a5f5928a5c96a914bd733793b896a50e61726b6164696b6f2d746f6b656e0616982f3ec112a5f5928a5c96a914bd733793b896a51e61726b6164696b6f2d636f6c6c61746572616c2d74797065732d76312d310616982f3ec112a5f5928a5c96a914bd733793b896a51461726b6164696b6f2d6f7261636c652d76312d31","receipt":{"contract_calls_stack":[],"events":[{"data":{"amount":"130000000","asset_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token::usda","recipient":"SPWKDKPZ3QDPQGDADWJ3EWPAP14CB1N1HDQ897W5"},"type":"FTMintEvent"},{"data":{"contract_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1","raw_value":"0x0c0000000306616374696f6e0d000000076372656174656404646174610c000000110d61756374696f6e2d656e646564040b6175746f2d7061796f6666030a636f6c6c61746572616c0100000000000000000000000011e1a30010636f6c6c61746572616c2d746f6b656e0d000000035354580f636f6c6c61746572616c2d747970650d000000055354582d4117637265617465642d61742d626c6f636b2d686569676874010000000000000000000000000000860304646562740100000000000000000000000007bfa48002696401000000000000000000000000000000010d69732d6c69717569646174656404136c6566746f7665722d636f6c6c61746572616c0100000000000000000000000000000000056f776e657205163936cedf1ddb6bc1aa6f243772cab048c586a18b107265766f6b65642d737461636b696e67041573746162696c6974792d6665652d6163637275656401000000000000000000000000000000001a73746162696c6974792d6665652d6c6173742d6163637275656401000000000000000000000000000086030e737461636b65642d746f6b656e730100000000000000000000000011e1a3000c737461636b65722d6e616d650d00000007737461636b657217757064617465642d61742d626c6f636b2d686569676874010000000000000000000000000000860304747970650d000000057661756c74","topic":"print"},"type":"SmartContractEvent"},{"data":{"amount":"300000000","recipient":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1","sender":"SPWKDKPZ3QDPQGDADWJ3EWPAP14CB1N1HDQ897W5"},"type":"STXTransferEvent"},{"data":{"contract_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao","raw_value":"0x0c0000000306616374696f6e0d000000066d696e74656404646174610c0000000206616d6f756e740100000000000000000000000007bfa48009726563697069656e7405163936cedf1ddb6bc1aa6f243772cab048c586a18b04747970650d00000005746f6b656e","topic":"print"},"type":"SmartContractEvent"},{"data":{"contract_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1","raw_value":"0x0703","topic":"print"},"type":"SmartContractEvent"}],"mutated_assets_radius":["SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token::usda"],"mutated_contracts_radius":["SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-dao","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1","SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token"]},"result":"(ok u130000000)","sender":"SPWKDKPZ3QDPQGDADWJ3EWPAP14CB1N1HDQ897W5","success":true},"operations":[{"account":{"address":"SPWKDKPZ3QDPQGDADWJ3EWPAP14CB1N1HDQ897W5"},"amount":{"currency":{"decimals":6,"metadata":{"asset_class_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token::usda","asset_identifier":null,"standard":"SIP10"},"symbol":"TOKEN"},"value":130000000},"operation_identifier":{"index":0},"status":"SUCCESS","type":"CREDIT"},{"account":{"address":"SPWKDKPZ3QDPQGDADWJ3EWPAP14CB1N1HDQ897W5"},"amount":{"currency":{"decimals":6,"symbol":"STX"},"value":300000000},"operation_identifier":{"index":1},"related_operations":[{"index":2}],"status":"SUCCESS","type":"DEBIT"},{"account":{"address":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stx-reserve-v1-1"},"amount":{"currency":{"decimals":6,"symbol":"STX"},"value":300000000},"operation_identifier":{"index":2},"related_operations":[{"index":1}],"status":"SUCCESS","type":"CREDIT"}],"transaction_identifier":{"hash":"0x580d89b79f4e7cda9e2ae9f1a70a5392149a055b0b6f25968afb80c6cc09306a"}}]}],"chainhook":{"is_streaming_blocks":false,"predicate":{"contains":"vault","contract_identifier":"SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1","scope":"print_event"},"uuid":"6ad27176-2b83-4381-b51c-50baede11e3f"},"rollback":[]}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TIP:")),"\nTo optimize your experience with scanning, there are a few variables you can play with:\nUse of adequate values for ",(0,i.kt)("inlineCode",{parentName:"p"},"start_block")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end_block")," in predicates will drastically improve performance.\nNetworking: reducing the number of network hops between the chainhook and the bitcoind processes can also help.")),(0,i.kt)("h3",{id:"example-2---http_post"},"Example 2 - ",(0,i.kt)("inlineCode",{parentName:"h3"},"http_post")),(0,i.kt)("p",null,"Run the following command to generate a sample JSON file with predicates in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook predicates new print-event-post.json --stacks\n")),(0,i.kt)("p",null,"Update the generated JSON file ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event-post.json")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chain": "stacks",\n  "uuid": "e5fa09b2-ec3e-4b6a-9a4a-0ebb454f6e19",\n  "name": "Hello world",\n  "version": 1,\n  "networks": {\n    "testnet": {\n      "if_this": {\n        "scope": "print_event",\n        "contract_identifier": "ST1SVA0SST0EDT4MFYGWGP6GNSXMMQJDVP1G8QTTC.arkadiko-freddie-v1-1",\n        "contains": "vault"\n      },\n      "then_that": {\n        "http_post": {\n          "url": "http://localhost:3000/events",\n          "authorization_header": "Bearer cn389ncoiwuencr"\n        }\n      },\n      "start_block": 10200,\n      "expire_after_occurrence": 5\n    },\n    "mainnet": {\n      "if_this": {\n        "scope": "print-event",\n        "contract_identifier": "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1",\n        "contains": "vault"\n      },\n      "then_that": {\n        "http_post": {\n          "url": "http://localhost:3000/events",\n          "authorization_header": "Bearer cn389ncoiwuencr"\n        }\n      },\n      "start_block": 10200,\n      "expire_after_occurrence": 5\n    }\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"start_block")," is the required field to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_post")," ",(0,i.kt)("inlineCode",{parentName:"p"},"then-that")," predicate.")),(0,i.kt)("p",null,"Now, use the following command to scan the blocks based on the predicates defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event-post.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook predicates scan print-event-post.json --mainnet\n")),(0,i.kt)("p",null,"The above command posts events to the URL ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/events")," mentioned in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," file."),(0,i.kt)("h2",{id:"initiate-chainhook-service"},"Initiate Chainhook Service"),(0,i.kt)("p",null,"In this section, you'll learn two ways to initiate the Chainhook service as well as how to use the REST API call to post the events onto a server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Initiate the Chainhook service by passing the predicate path to the command as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"chainhook service start --predicate-path=print-event.json --config-path=Chainhook.toml\n")),(0,i.kt)("p",{parentName:"li"},"The above command registers the predicates based on the predicate definition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"print-event.json")," file."))),(0,i.kt)("h2",{id:"dynamically-register-predicates"},"Dynamically Register Predicates"),(0,i.kt)("p",null,"You can also dynamically register new predicates with your Chainhook service."),(0,i.kt)("p",null,"First, we need to uncomment the following lines of code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook.toml")," file to enable the predicate registration server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# ...\n\n[http_api]\nhttp_port = 20456\ndatabase_uri = "redis://localhost:6379/"\n\n# ...\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",{parentName:"blockquote"},"This assumes you have a local instance of ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/docs/getting-started/"},"Redis")," running.")),(0,i.kt)("p",null,"Start the Chainhook service by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chainhook service start --config-path=Chainhook.toml\n")),(0,i.kt)("p",null,"To dynamically register a new predicate, send a POST request to the running predicate registration server at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:20456/v1/chainhooks"),". Include the new predicate in JSON format within the request body. In another terminal window, use the following ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "chain": "stacks",\n    "uuid": "42",\n    "name": "Arkadiko",\n    "version": 1,\n    "networks": {\n      "mainnet": {\n        "start_block": 777534,\n        "if_this": {\n          "scope": "print-event",\n          "contract_identifier": "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1",\n          "contains": "vault"\n        },\n        "then_that": {\n          "http_post": {\n            "url": "http://localhost:3000/events",\n            "authorization_header": "Bearer cn389ncoiwuencr"\n          }\n        }\n      }\n    }\n  }\' \\\n  http://localhost:20456/v1/chainhooks\n')),(0,i.kt)("p",null,"You should see in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'{"result":"42","status":200}\n')),(0,i.kt)("p",null,"And if you hop back over to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainhook")," service terminal window, you will see that your predicate has been registered."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TIP:"))),(0,i.kt)("p",{parentName:"blockquote"},"You can also run chainhook service by passing multiple predicates.\nExample: ",(0,i.kt)("inlineCode",{parentName:"p"},"chainhook service start --predicate-path=predicate_1.json --predicate-path=predicate_2.json --config-path=Chainhook.toml"))))}k.isMDXComponent=!0}}]);