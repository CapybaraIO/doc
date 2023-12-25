"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[5858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),k=i,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=k;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={id:"running-mainnet-node",title:"Running a mainnet node"},o=void 0,c={unversionedId:"get-started/running-mainnet-node",id:"get-started/running-mainnet-node",title:"Running a mainnet node",description:"This procedure demonstrates how to run a local mainnet node using Docker images.",source:"@site/docs/get-started/running-mainnet-node.md",sourceDirName:"get-started",slug:"/get-started/running-mainnet-node",permalink:"/doc/get-started/running-mainnet-node",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/get-started/running-mainnet-node.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"running-mainnet-node",title:"Running a mainnet node"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Firewall configuration",id:"firewall-configuration",level:3},{value:"Step 1: Initial setup",id:"step-1-initial-setup",level:2},{value:"Step 2: Running Stacks blockchain",id:"step-2-running-stacks-blockchain",level:2},{value:"Step 3: Verifying the services",id:"step-3-verifying-the-services",level:2},{value:"Stopping the mainnet node",id:"stopping-the-mainnet-node",level:2},{value:"Additional reading",id:"additional-reading",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This procedure demonstrates how to run a local mainnet node using Docker images."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This procedure focuses on Unix-like operating systems (Linux and MacOS). This procedure has not been tested on\nWindows.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Running a node has no specialized hardware requirements. Users have been successful in running nodes on Raspberry Pi\nboards and other system-on-chip architectures. In order to complete this procedure, you must have the following software\ninstalled on the node host machine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://curl.se/download.html"},"curl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"jq"))),(0,i.kt)("h3",{id:"firewall-configuration"},"Firewall configuration"),(0,i.kt)("p",null,"In order for the API node services to work correctly, you must configure any network firewall rules to allow traffic on\nthe ports discussed in this section. The details of network and firewall configuration are highly specific to your\nmachine and network, so a detailed example isn't provided."),(0,i.kt)("p",null,"The following ports must open on the host machine:"),(0,i.kt)("p",null,"Ingress:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stacks-blockchain (open to ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0"),"):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"20443 TCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"20444 TCP"))))),(0,i.kt)("p",null,"Egress:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8332")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8333")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"20443-20444"))),(0,i.kt)("p",null,"These egress ports are for syncing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain"},(0,i.kt)("inlineCode",{parentName:"a"},"stacks-blockchain"))," and Bitcoin headers. If they're not open, the sync will fail."),(0,i.kt)("h2",{id:"step-1-initial-setup"},"Step 1: Initial setup"),(0,i.kt)("p",null,"In order to run the mainnet node, you must download the Docker images and create a directory structure to hold the\npersistent data from the services. Download and configure the Docker images with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull blockstack/stacks-blockchain\n")),(0,i.kt)("p",null,"Create a directory structure for the service data with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ./stacks-node/{persistent-data/stacks-blockchain/mainnet,config/mainnet} && cd stacks-node\n")),(0,i.kt)("h2",{id:"step-2-running-stacks-blockchain"},"Step 2: Running Stacks blockchain"),(0,i.kt)("p",null,"First, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/mainnet/Config.toml")," file and add the following content to the\nfile using a text editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[node]\nworking_dir = "/root/stacks-node/data"\nrpc_bind = "0.0.0.0:20443"\np2p_bind = "0.0.0.0:20444"\nbootstrap_node = "02da7a464ac770ae8337a343670778b93410f2f3fef6bea98dd1c3e9224459d36b@seed-0.mainnet.stacks.co:20444,02afeae522aab5f8c99a00ddf75fbcb4a641e052dd48836408d9cf437344b63516@seed-1.mainnet.stacks.co:20444,03652212ea76be0ed4cd83a25c06e57819993029a7b9999f7d63c36340b34a4e62@seed-2.mainnet.stacks.co:20444"\nwait_time_for_microblocks = 10000\n\n[burnchain]\nchain = "bitcoin"\nmode = "mainnet"\npeer_host = "bitcoin.blockstack.com"\nusername = "blockstack"\npassword = "blockstacksystem"\nrpc_port = 8332\npeer_port = 8333\n\n[connection_options]\nread_only_call_limit_write_length = 0\nread_only_call_limit_read_length = 100000\nread_only_call_limit_write_count = 0\nread_only_call_limit_read_count = 30\nread_only_call_limit_runtime = 1000000000\n')),(0,i.kt)("p",null,"Start the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain"},(0,i.kt)("inlineCode",{parentName:"a"},"stacks-blockchain"))," container with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d --rm \\\n  --name stacks-blockchain \\\n  -v $(pwd)/persistent-data/stacks-blockchain/mainnet:/root/stacks-node/data \\\n  -v $(pwd)/config/mainnet:/src/stacks-node \\\n  -p 20443:20443 \\\n  -p 20444:20444 \\\n  blockstack/stacks-blockchain \\\n/bin/stacks-node start --config /src/stacks-node/Config.toml\n")),(0,i.kt)("p",null,"You can verify the running ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain"},(0,i.kt)("inlineCode",{parentName:"a"},"stacks-blockchain"))," container with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker ps --filter name=stacks-blockchain\n")),(0,i.kt)("h2",{id:"step-3-verifying-the-services"},"Step 3: Verifying the services"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The initial header sync can take several minutes, until this is done the following commands will not work.")),(0,i.kt)("p",null,"To verify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain"},(0,i.kt)("inlineCode",{parentName:"a"},"stacks-blockchain"))," burn chain header sync progress:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker logs stacks-blockchain\n")),(0,i.kt)("p",null,"The output should be similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INFO [1626290705.886954] [src/burnchains/bitcoin/spv.rs:926] [main] Syncing Bitcoin headers: 1.2% (8000 out of 691034)\nINFO [1626290748.103291] [src/burnchains/bitcoin/spv.rs:926] [main] Syncing Bitcoin headers: 1.4% (10000 out of 691034)\nINFO [1626290776.956535] [src/burnchains/bitcoin/spv.rs:926] [main] Syncing Bitcoin headers: 1.7% (12000 out of 691034)\n")),(0,i.kt)("p",null,"To verify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks-blockchain"},(0,i.kt)("inlineCode",{parentName:"a"},"stacks-blockchain"))," tip height is progressing use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sL localhost:20443/v2/info | jq\n")),(0,i.kt)("p",null,"If the instance is running you should receive terminal output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peer_version": 402653184,\n  "pox_consensus": "89d752034e73ed10d3b97e6bcf3cff53367b4166",\n  "burn_block_height": 666143,\n  "stable_pox_consensus": "707f26d9d0d1b4c62881a093c99f9232bc74e744",\n  "stable_burn_block_height": 666136,\n  "server_version": "stacks-node 2.0.11.1.0-rc1 (master:67dccdf, release build, linux [x86_64])",\n  "network_id": 1,\n  "parent_network_id": 3652501241,\n  "stacks_tip_height": 61,\n  "stacks_tip": "e08b2fe3dce36fd6d015c2a839c8eb0885cbe29119c1e2a581f75bc5814bce6f",\n  "stacks_tip_consensus_hash": "ad9f4cb6155a5b4f5dcb719d0f6bee043038bc63",\n  "genesis_chainstate_hash": "74237aa39aa50a83de11a4f53e9d3bb7d43461d1de9873f402e5453ae60bc59b",\n  "unanchored_tip": "74d172df8f8934b468c5b0af2efdefe938e9848772d69bcaeffcfe1d6c6ef041",\n  "unanchored_seq": 0,\n  "exit_at_block_height": null\n}\n')),(0,i.kt)("h2",{id:"stopping-the-mainnet-node"},"Stopping the mainnet node"),(0,i.kt)("p",null,"Use the following commands to stop the local mainnet node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop stacks-blockchain\n")),(0,i.kt)("h2",{id:"additional-reading"},"Additional reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/get-started/running-api-node"},"Running an API instance with Docker"))))}u.isMDXComponent=!0}}]);