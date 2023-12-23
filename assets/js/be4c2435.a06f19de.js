"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[1061],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>p});var t=a(67294);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,c=function(e,n){if(null==e)return{};var a,t,c={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=l(a),u=c,p=b["".concat(i,".").concat(u)]||b[u]||f[u]||r;return a?t.createElement(p,o(o({ref:n},s),{},{components:a})):t.createElement(p,o({ref:n},s))}));function p(e,n){var a=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=a.length,o=new Array(r);o[0]=u;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[b]="string"==typeof e?e:c,o[1]=d;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12870:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=a(87462),c=(a(67294),a(3905));const r={title:"Event dispatching / observer interface"},o="Event dispatching / observer interface",d={unversionedId:"subnets/event-dispatcher",id:"subnets/event-dispatcher",title:"Event dispatching / observer interface",description:"This document helps you build developer and API tools for Subnets.",source:"@site/docs/subnets/event-dispatcher.md",sourceDirName:"subnets",slug:"/subnets/event-dispatcher",permalink:"/doc/subnets/event-dispatcher",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/subnets/event-dispatcher.md",tags:[],version:"current",frontMatter:{title:"Event dispatching / observer interface"},sidebar:"subnets",previous:{title:"Getting Started",permalink:"/doc/subnets/getting-started"},next:{title:"Subnet Participants",permalink:"/doc/subnets/guides/subnet-participants"}},i={},l=[{value:"Configure Event Observer Interface",id:"configure-event-observer-interface",level:2},{value:"<code>POST /new_block</code>",id:"post-new_block",level:3},{value:"Layer 1-triggered transactions",id:"layer-1-triggered-transactions",level:4},{value:"<code>POST /new_burn_block</code>",id:"post-new_burn_block",level:3},{value:"<code>POST /new_microblocks</code>",id:"post-new_microblocks",level:3},{value:"<code>POST /new_mempool_tx</code>",id:"post-new_mempool_tx",level:3},{value:"<code>POST /drop_mempool_tx</code>",id:"post-drop_mempool_tx",level:3},{value:"<code>POST /mined_block</code>",id:"post-mined_block",level:3},{value:"<code>POST /mined_microblock</code>",id:"post-mined_microblock",level:3}],s={toc:l},b="wrapper";function f(e){let{components:n,...a}=e;return(0,c.kt)(b,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"event-dispatching--observer-interface"},"Event dispatching / observer interface"),(0,c.kt)("p",null,"This document helps you build developer and API tools for Subnets."),(0,c.kt)("h2",{id:"configure-event-observer-interface"},"Configure Event Observer Interface"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"stacks-node")," supports a configurable event observer interface.\nThis is enabled by adding an entry to the node's ",(0,c.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-toml"},'[[events_observer]]\nendpoint = "listener:3700"\nevents_keys = [\n  "*"\n]\n')),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"stacks-node")," will then execute HTTP POSTs to the configured\nendpoint in two events:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"A new Stacks block is processed."),(0,c.kt)("li",{parentName:"ol"},"New mempool transactions have been received.")),(0,c.kt)("p",null,"These events are sent to the configured endpoint at two URLs:"),(0,c.kt)("h3",{id:"post-new_block"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /new_block")),(0,c.kt)("p",null,"This payload includes data related to a newly processed block,\nand any events emitted from Stacks transactions during the block."),(0,c.kt)("p",null,"If the transaction originally comes from the parent microblock stream\npreceding this block, the microblock related fields will be filled in."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block_hash": "0x4eaabcd105865e471f697eff5dd5bd85d47ecb5a26a3379d74fae0ae87c40904",\n  "block_height": 3,\n  "burn_block_time": 1591301733,\n  "events": [\n    {\n      "event_index": 1,\n      "committed": true,\n      "stx_transfer_event": {\n        "amount": "1000",\n        "recipient": "ST31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZZ239N96",\n        "sender": "ST3WM51TCWMJYGZS1QFMC28DH5YP86782YGR113C1"\n      },\n      "txid": "0x738e4d44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b4214c",\n      "type": "stx_transfer_event"\n    }\n  ],\n  "index_block_hash": "0x329efcbcc6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c54274d7afc",\n  "parent_block_hash": "0xf5d4ce0efe1d42c963d615ce57f0d014f263a985175e4ece766eceff10e0a358",\n  "parent_index_block_hash": "0x0c8b38d44d6af72703a4767ff4cea683ec965346d9e9a7ded2d773fb4f257c28",\n  "parent_microblock": "0xedd15cf1e697c28df934e259f0f82970a7c9edc2d39bef04bdd0d422116235c6",\n  "transactions": [\n    {\n      "contract_abi": null,\n      "raw_result": "0x03",\n      "raw_tx": "0x808000000004008bc5147525b8f477f0bc4522a88c8339b2494db50000000000000002000000000000000001015814daf929d8700af344987681f44e913890a12e38550abe8e40f149ef5269f40f4008083a0f2e0ddf65dcd05ecfc151c7ff8a5308ad04c77c0e87b5aeadad31010200000000040000000000000000000000000000000000000000000000000000000000000000",\n      "status": "success",\n      "tx_index": 0,\n      "txid": "0x3e04ada5426332bfef446ba0a06d124aace4ade5c11840f541bf88e2e919faf6",\n      "microblock_sequence": "None",\n      "microblock_hash": "None",\n      "microblock_parent_hash": "None",\n      "burnchain_op": null,\n    },\n    {\n      "contract_abi": null,\n      "raw_result": "0x03",\n      "raw_tx": "0x80800000000400f942874ce525e87f21bbe8c121b12fac831d02f4000000000000000000000000000003e800006ae29867aec4b0e4f776bebdcea7f6d9a24eeff370c8c739defadfcbb52659b30736ad4af021e8fb741520a6c65da419fdec01989fdf0032fc1838f427a9a36102010000000000051ac2d519faccba2e435f3272ff042b89435fd160ff00000000000003e800000000000000000000000000000000000000000000000000000000000000000000",\n      "status": "success",\n      "tx_index": 1,\n      "txid": "0x738e4d44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b4214c",\n      "microblock_sequence": "3",\n      "microblock_hash": "0x9304fcbcc6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c54274daaac",\n      "microblock_parent_hash": "0x4893ab44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b474bd"\n      "burnchain_op": null,\n    }\n   ],\n   "matured_miner_rewards": [\n    {\n      "recipient": "ST31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZZ239N96",\n      "coinbase_amount": "1000",\n      "tx_fees_anchored": "800",\n      "tx_fees_streamed_confirmed": "0",\n      "from_stacks_block_hash": "0xf5d4ce0efe1d42c963d615ce57f0d014f263a985175e4ece766eceff10e0a358",\n      "from_index_block_hash": "0x329efcbcc6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c54274d7afc",\n    }\n   ],\n   "anchored_cost": {\n    "runtime": 100,\n    "read_count": 10,\n    "write_count": 5,\n    "read_length": 150,\n    "write_length": 75\n   },\n   "confirmed_microblocks_cost": {\n    "runtime": 100,\n    "read_count": 10,\n    "write_count": 5,\n    "read_length": 150,\n    "write_length": 75\n   }\n}\n')),(0,c.kt)("h4",{id:"layer-1-triggered-transactions"},"Layer 1-triggered transactions"),(0,c.kt)("p",null,"Some subnet transactions are broadcasted via the layer-1 (just as some\nStacks transactions are broadcasted via Bitcoin). These transactions\nuse the ",(0,c.kt)("inlineCode",{parentName:"p"},"burnchain_op")," field of the ",(0,c.kt)("inlineCode",{parentName:"p"},"transaction")," object to convey information\nfrom the layer-1 operation. The following block payload contains an example of this:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "anchored_cost": {\n      "read_count": 9,\n      "read_length": 3621,\n      "runtime": 4325000,\n      "write_count": 3,\n      "write_length": 2\n    },\n    "block_hash": "0x6951c0d3cf1ce9169685c897fdb7eee594fc232e805560117859d71b08f9c8e3",\n    "block_height": 6,\n    "burn_block_hash": "0x1c712cfaf83f8f9bc5990b611a18317e44497028e4d4440331dac0313802b01a",\n    "burn_block_height": 18,\n    "burn_block_time": 0,\n    "confirmed_microblocks_cost": {\n      "read_count": 0,\n      "read_length": 0,\n      "runtime": 0,\n      "write_count": 0,\n      "write_length": 0\n    },\n    "events": [\n      {\n        "committed": true,\n        "event_index": 1,\n        "nft_mint_event": {\n          "asset_identifier": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-nft::nft-token",\n          "raw_value": "0x0100000000000000000000000000000001",\n          "recipient": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8",\n          "value": {\n            "UInt": 1\n          }\n        },\n        "txid": "0x7c558d682960d87f0af8f2904a5b561cdfb1732c878a048fc280454282e9eeb2",\n        "type": "nft_mint_event"\n      },\n      {\n        "committed": true,\n        "event_index": 0,\n        "ft_mint_event": {\n          "amount": "1",\n          "asset_identifier": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-ft::ft-token",\n          "recipient": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8"\n        },\n        "txid": "0x37eeac70800f4d6b6f18948d8987c26410a288afdbf6b0a30daeb17daaf300bc",\n        "type": "ft_mint_event"\n      }\n    ],\n    "index_block_hash": "0xdb379f4c3e43d3ee986ceff9e63c8fb222d855a640fe230ce33d080169315eee",\n    "matured_miner_rewards": [],\n    "miner_txid": "0x5af873ac3ded0e8041c539a66ecec3e85ec467a63fdda2526c6eeab6ad4fc416",\n    "parent_block_hash": "0x2bb521ae1d336e23a2e750d2dbbb2abfebc8f0295a9d4391cd72c40f0060a3fd",\n    "parent_burn_block_hash": "0x44e53851d23867abaf86abf0ad4013c9cfffbccb36afbb5c319b2d58743db4ce",\n    "parent_burn_block_height": 16,\n    "parent_burn_block_timestamp": 0,\n    "parent_index_block_hash": "0x4237bf67c1f20126ea67bc8b8beea1f80d44248e2d10290e6c2de97f6ed4a64d",\n    "parent_microblock": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "parent_microblock_sequence": 0,\n    "transactions": [\n      {\n        "burnchain_op": {\n          "deposit_ft": {\n            "amount": 1,\n            "burn_header_hash": "44e53851d23867abaf86abf0ad4013c9cfffbccb36afbb5c319b2d58743db4ce",\n            "l1_contract_id": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-ft",\n            "name": "ft-token",\n            "sender": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8",\n            "subnet_contract_id": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-ft",\n            "txid": "37eeac70800f4d6b6f18948d8987c26410a288afdbf6b0a30daeb17daaf300bc"\n          }\n        },\n        "contract_abi": null,\n        "execution_cost": {\n          "read_count": 5,\n          "read_length": 1622,\n          "runtime": 1966000,\n          "write_count": 2,\n          "write_length": 1\n        },\n        "microblock_hash": null,\n        "microblock_parent_hash": null,\n        "microblock_sequence": null,\n        "raw_result": "0x0703",\n        "raw_tx": "0x00",\n        "status": "success",\n        "tx_index": 0,\n        "txid": "0x37eeac70800f4d6b6f18948d8987c26410a288afdbf6b0a30daeb17daaf300bc"\n      },\n      {\n        "burnchain_op": {\n          "deposit_nft": {\n            "burn_header_hash": "44e53851d23867abaf86abf0ad4013c9cfffbccb36afbb5c319b2d58743db4ce",\n            "id": 1,\n            "l1_contract_id": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-nft",\n            "sender": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8",\n            "subnet_contract_id": "ST18F1AHKW194BWQ3CEFDPWVRARA79RBGFEWSDQR8.simple-nft",\n            "txid": "7c558d682960d87f0af8f2904a5b561cdfb1732c878a048fc280454282e9eeb2"\n          }\n        },\n        "contract_abi": null,\n        "execution_cost": {\n          "read_count": 4,\n          "read_length": 1999,\n          "runtime": 2359000,\n          "write_count": 1,\n          "write_length": 1\n        },\n        "microblock_hash": null,\n        "microblock_parent_hash": null,\n        "microblock_sequence": null,\n        "raw_result": "0x0703",\n        "raw_tx": "0x00",\n        "status": "success",\n        "tx_index": 1,\n        "txid": "0x7c558d682960d87f0af8f2904a5b561cdfb1732c878a048fc280454282e9eeb2"\n      },\n      {\n        "burnchain_op": null,\n        "contract_abi": null,\n        "execution_cost": {\n          "read_count": 0,\n          "read_length": 0,\n          "runtime": 0,\n          "write_count": 0,\n          "write_length": 0\n        },\n        "microblock_hash": null,\n        "microblock_parent_hash": null,\n        "microblock_sequence": null,\n        "raw_result": "0x0703",\n        "raw_tx": "0x800cf475620400a0e3473dd203d4f46ad5c24e5b444f5212e11d3b000000000000000500000000000000000001584c0b3805734fb438d2f2034c0503250effa85bf6a84e0a8d70122b86c5eb0b4fcf946276d515a5318576dc5b05234ab38d687046851e85deb72fb606da89cc010200000000040000000000000000000000000000000000000000000000000000000000000000",\n        "status": "success",\n        "tx_index": 2,\n        "txid": "0x427628fb9dc3a2848c551c4e1f6188138e030a091425574985f7af257757ee58"\n      }\n    ]\n  }\n')),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"burnchain_op"),' field contains an "externally tagged" object. These example burnchain ops cover the whole of the\nsubnet burnchain_op enum:'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deposit_stx": {\n    "amount": 7381273163198273,\n    "burn_header_hash": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n    "sender": "SP000000000000000000002Q6VF78",\n    "txid": "3333333333333333333333333333333333333333333333333333333333333333"\n  }\n}\n{\n  "deposit_ft": {\n    "amount": 7381273163198273,\n    "burn_header_hash": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n    "l1_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "name": "ft-name",\n    "sender": "SP000000000000000000002Q6VF78.bns",\n    "subnet_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "txid": "1111111111111111111111111111111111111111111111111111111111111111"\n  }\n}\n{\n  "deposit_nft": {\n    "burn_header_hash": "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",\n    "id": 123123,\n    "l1_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "sender": "SP000000000000000000002Q6VF78.bns",\n    "subnet_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "txid": "f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1"\n  }\n}\n{\n  "leader_block_commit": {\n    "block_header_hash": "1212121212121212121212121212121212121212121212121212121212121212",\n    "burn_header_hash": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n    "txid": "a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1",\n    "withdrawal_merkle_root": "3131313131313131313131313131313131313131313131313131313131313131"\n  }\n}\n{\n  "withdraw_stx": {\n    "amount": 7381273163198273,\n    "burn_header_hash": "babababababababababababababababababababababababababababababababa",\n    "recipient": "SP000000000000000000002Q6VF78",\n    "txid": "3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b"\n  }\n}\n{\n  "withdraw_nft": {\n    "burn_header_hash": "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",\n    "id": 123123,\n    "l1_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "recipient": "SP000000000000000000002Q6VF78.bns",\n    "txid": "f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1"\n  }\n}\n{\n  "withdraw_ft": {\n    "amount": 7381273163198273,\n    "burn_header_hash": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n    "l1_contract_id": "SP000000000000000000002Q6VF78.bns",\n    "name": "ft-name",\n    "recipient": "SP000000000000000000002Q6VF78.bns",\n    "txid": "1111111111111111111111111111111111111111111111111111111111111111"\n  }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note")," that withdraw operations and block commit operations on the\nlayer-1 do not impact the subnet's transaction state, so these\nburnchain ops will not appear in transaction receipts."),(0,c.kt)("h3",{id:"post-new_burn_block"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /new_burn_block")),(0,c.kt)("p",null,"This payload includes information about burn blocks as their sortitions are processed.\nIn the event of PoX forks, a ",(0,c.kt)("inlineCode",{parentName:"p"},"new_burn_block")," event may be triggered for a burn block\npreviously processed."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "burn_block_hash": "0x4eaabcd105865e471f697eff5dd5bd85d47ecb5a26a3379d74fae0ae87c40904",\n  "burn_block_height": 331,\n  "reward_recipients": [\n    {\n      "recipient": "1C56LYirKa3PFXFsvhSESgDy2acEHVAEt6",\n      "amt": 5000\n    }\n  ],\n  "reward_slot_holders": [\n    "1C56LYirKa3PFXFsvhSESgDy2acEHVAEt6",\n    "1C56LYirKa3PFXFsvhSESgDy2acEHVAEt6"\n  ],\n  "burn_amount": 12000\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"reward_recipients")," is an array of all the rewards received during this burn block. It may\ninclude recipients who did ",(0,c.kt)("em",{parentName:"li"},"not")," have reward slots during the block. This could happen if\na miner's commitment was included a block or two later than intended. Such commitments would\nnot be valid, but the reward recipient would still receive the burn ",(0,c.kt)("inlineCode",{parentName:"li"},"amt"),"."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"reward_slot_holders")," is an array of the Bitcoin addresses that would validly receive\nPoX commitments during this block. These addresses may not actually receive rewards during\nthis block if the block is faster than miners have an opportunity to commit.")),(0,c.kt)("h3",{id:"post-new_microblocks"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /new_microblocks")),(0,c.kt)("p",null,"This payload includes data related to one or more microblocks that are either emmitted by the\nnode itself, or received through the network. "),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent_index_block_hash": "0x999b38d44d6af72703a476dde4cea683ec965346d9e9a7ded2d773fb4f257a3b",\n  "events": [\n    {\n      "event_index": 1,\n      "committed": true,\n      "stx_transfer_event": {\n        "amount": "1000",\n        "recipient": "ST31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZZ239N96",\n        "sender": "ST3WM51TCWMJYGZS1QFMC28DH5YP86782YGR113C1"\n      },\n      "txid": "0x738e4d44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b4214c",\n      "type": "stx_transfer_event"\n    }\n  ],\n  "transactions": [\n    {\n      "contract_abi": null,\n      "raw_result": "0x03",\n      "raw_tx": "0x808000000004008bc5147525b8f477f0bc4522a88c8339b2494db50000000000000002000000000000000001015814daf929d8700af344987681f44e913890a12e38550abe8e40f149ef5269f40f4008083a0f2e0ddf65dcd05ecfc151c7ff8a5308ad04c77c0e87b5aeadad31010200000000040000000000000000000000000000000000000000000000000000000000000000",\n      "status": "success",\n      "tx_index": 0,\n      "txid": "0x3e04ada5426332bfef446ba0a06d124aace4ade5c11840f541bf88e2e919faf6",\n      "microblock_sequence": "3",\n      "microblock_hash": "0x9304fcbcc6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c54274daaac",\n      "microblock_parent_hash": "0x4893ab44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b474bd"\n    },\n    {\n      "contract_abi": null,\n      "raw_result": "0x03",\n      "raw_tx": "0x80800000000400f942874ce525e87f21bbe8c121b12fac831d02f4000000000000000000000000000003e800006ae29867aec4b0e4f776bebdcea7f6d9a24eeff370c8c739defadfcbb52659b30736ad4af021e8fb741520a6c65da419fdec01989fdf0032fc1838f427a9a36102010000000000051ac2d519faccba2e435f3272ff042b89435fd160ff00000000000003e800000000000000000000000000000000000000000000000000000000000000000000",\n      "status": "success",\n      "tx_index": 1,\n      "txid": "0x738e4d44636023efa08374033428e44eca490582bd39a6e61f3b6cf749b4214c",\n      "microblock_sequence": "4",\n      "microblock_hash": "0xfcd4fc34c6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c5427459e43",\n      "microblock_parent_hash": "0x9304fcbcc6daf5ac3f264522e0df50eddb5be85df6ee8a9fc2384c54274daaac"\n    }\n  ],\n  "burn_block_hash": "0x4eaabcd105865e471f697eff5dd5bd85d47ecb5a26a3379d74fae0ae87c40904",\n  "burn_block_height": 331,\n  "burn_block_timestamp": 1651301734\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"burn_block_{}")," are the stats related to the burn block that is associated with the stacks\nblock that precedes this microblock stream."),(0,c.kt)("li",{parentName:"ul"},"Each transaction json object includes information about the microblock the transaction was packaged into. ")),(0,c.kt)("h3",{id:"post-new_mempool_tx"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /new_mempool_tx")),(0,c.kt)("p",null,"This payload includes raw transactions newly received in the\nnode's mempool."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "0x80800000000400f942874ce525e87f21bbe8c121b12fac831d02f4000000000000000000000000000003e800006ae29867aec4b0e4f776bebdcea7f6d9a24eeff370c8c739defadfcbb52659b30736ad4af021e8fb741520a6c65da419fdec01989fdf0032fc1838f427a9a36102010000000000051ac2d519faccba2e435f3272ff042b89435fd160ff00000000000003e800000000000000000000000000000000000000000000000000000000000000000000"\n]\n')),(0,c.kt)("h3",{id:"post-drop_mempool_tx"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /drop_mempool_tx")),(0,c.kt)("p",null,"This payload includes raw transactions newly received in the\nnode's mempool."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dropped_txids": ["d7b667bb93898b1d3eba4fee86617b06b95772b192f3643256dd0821b476e36f"],\n  "reason": "ReplaceByFee"\n}\n')),(0,c.kt)("p",null,"Reason can be one of:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"ReplaceByFee")," - replaced by a transaction with the same nonce, but a higher fee"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"ReplaceAcrossFork")," - replaced by a transaction with the same nonce but in the canonical fork"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TooExpensive")," - the transaction is too expensive to include in a block"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"StaleGarbageCollect")," - transaction was dropped because it became stale")),(0,c.kt)("h3",{id:"post-mined_block"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /mined_block")),(0,c.kt)("p",null,"This payload includes data related to block mined by this Stacks node. This\nwill never be invoked if the node is configured only as a follower. This is invoked\nwhen the miner ",(0,c.kt)("strong",{parentName:"p"},"assembles")," the block; this block may or may not win the sortition."),(0,c.kt)("p",null,"This endpoint will only broadcast events to observers that explicitly register for\n",(0,c.kt)("inlineCode",{parentName:"p"},"MinedBlocks")," events, ",(0,c.kt)("inlineCode",{parentName:"p"},"AnyEvent")," observers will not receive the events by default."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block_hash": "0x4eaabcd105865e471f697eff5dd5bd85d47ecb5a26a3379d74fae0ae87c40904",\n  "stacks_height": 3,\n  "target_burn_height": 745000,\n  "block_size": 145000,\n  "anchored_cost": {\n    "runtime": 100,\n    "read_count": 10,\n    "write_count": 5,\n    "read_length": 150,\n    "write_length": 75\n  },\n  "confirmed_microblocks_cost": {\n    "runtime": 100,\n    "read_count": 10,\n    "write_count": 5,\n    "read_length": 150,\n    "write_length": 75\n  },\n  "tx_events": [\n    {\n      "Success": {\n        "txid": "3e04ada5426332bfef446ba0a06d124aace4ade5c11840f541bf88e2e919faf6", \n        "fee": 0, \n        "execution_cost": { \n          "write_length": 0, \n          "write_count": 0, \n          "read_length": 0, \n          "read_count": 0, \n          "runtime": 0\n        }, \n        "result": {\n          "ResponseData": \n          {\n            "committed": true,\n            "data": true\n          }\n        }\n    }}, \n    {\n      "ProcessingError": {\n        "txid": "eef9f46b20fb637bd07ec92ad3ec175a5a4bdf3e8799259fc5b16a272090d4de",\n        "error": "Duplicate contract \'ST3BMYNT1DW2QSRZWB6M4S183NK1BXGJ41TEBCCH8.example\'"\n      }\n    }\n  ]\n}\n')),(0,c.kt)("h3",{id:"post-mined_microblock"},(0,c.kt)("inlineCode",{parentName:"h3"},"POST /mined_microblock")),(0,c.kt)("p",null,"This payload includes data related to microblocks mined by this Stacks node. This\nwill never be invoked if the node is configured only as a follower. This is invoked\nwhen the miner ",(0,c.kt)("strong",{parentName:"p"},"assembles")," the microblock; this microblock may or may be incorporated\ninto the canonical chain."),(0,c.kt)("p",null,"This endpoint will only broadcast events to observers that explicitly register for\n",(0,c.kt)("inlineCode",{parentName:"p"},"MinedMicroblocks")," events, ",(0,c.kt)("inlineCode",{parentName:"p"},"AnyEvent")," observers will not receive the events by default."),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block_hash": "0x4eaabcd105865e471f697eff5dd5bd85d47ecb5a26a3379d74fae0ae87c40904",\n  "sequence": 3,\n  "anchor_block_consensus_hash": "53c166a709a9abd64a92a57f928a8b26aad08992",\n  "anchor_block": "43dbf6095c7622db6607d9584c3f65e908ca4eb77d86ee8cc1352aafec5d68b5",\n  "tx_events": [\n    {\n      "Success": {\n        "txid": "3e04ada5426332bfef446ba0a06d124aace4ade5c11840f541bf88e2e919faf6", \n        "fee": 0, \n        "execution_cost": { \n          "write_length": 10, \n          "write_count": 10, \n          "read_length": 20, \n          "read_count": 10, \n          "runtime": 1290\n        }, \n        "result": {\n          "ResponseData": \n          {\n            "committed": true,\n            "data": true\n          }\n        }\n    }}, \n    {\n      "Skipped": {\n        "txid": "eef9f46b20fb637bd07ec92ad3ec175a5a4bdf3e8799259fc5b16a272090d4de",\n        "reason": "tx.anchor_mode does not support microblocks, anchor_mode=OnChainOnly."\n      }\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);