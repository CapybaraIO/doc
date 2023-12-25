"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[8361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Overview"},i="API - Token Metadata Overview",s={unversionedId:"token-metadata-api/index",id:"token-metadata-api/index",title:"Overview",description:"Token metadata is a microservice that indexes metadata for all Fungible, Non-Fungible, and Semi-Fungible Tokens in the Stacks blockchain and exposes it via JSON REST API endpoints.",source:"@site/docs/token-metadata-api/index.md",sourceDirName:"token-metadata-api",slug:"/token-metadata-api/",permalink:"/doc/token-metadata-api/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/token-metadata-api/index.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Overview"},sidebar:"token-metadata-api",next:{title:"Getting started",permalink:"/doc/token-metadata-api/getting-started"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Rate Limiting for Metadata API",id:"rate-limiting-for-metadata-api",level:2},{value:"Service architecture",id:"service-architecture",level:2},{value:"External architecture",id:"external-architecture",level:3},{value:"Internal architecture",id:"internal-architecture",level:3},{value:"Blockchain importer",id:"blockchain-importer",level:4},{value:"Smart contract monitor",id:"smart-contract-monitor",level:4},{value:"Job queue",id:"job-queue",level:4},{value:"Process smart contract job",id:"process-smart-contract-job",level:5},{value:"Process token job",id:"process-token-job",level:5}],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api---token-metadata-overview"},"API - Token Metadata Overview"),(0,r.kt)("p",null,"Token metadata is a microservice that indexes metadata for all Fungible, Non-Fungible, and Semi-Fungible Tokens in the Stacks blockchain and exposes it via JSON REST API endpoints."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))),(0,r.kt)("p",{parentName:"blockquote"},"To explore the detailed documentation for the API endpoints, request and response formats, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hiro.so/metadata"},"OpenAPI specification"),"."),(0,r.kt)("p",{parentName:"blockquote"},"The source code for this project is available in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api"},"GitHub repository"),". You can explore the codebase, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hiro.so/contributors-guide"},"contribute"),", and raise ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/issues"},"issues")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/pulls"},"pull requests"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Following are the features of Token-Metadata API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-016/sip-016-token-metadata.md"},"SIP-016")," metadata ingestion for",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-009/sip-009-nft-standard.md"},"SIP-009"),"\nNon-Fungible Tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md"},"SIP-010"),"\nFungible Tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-013/sip-013-semi-fungible-token-standard.md"},"SIP-013"),"\nSemi-Fungible Tokens"))),(0,r.kt)("li",{parentName:"ul"},"Automatic metadata refreshes via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/stacksgov/sips/pull/72"},"SIP-019"),"\nnotifications"),(0,r.kt)("li",{parentName:"ul"},"Metadata localization support"),(0,r.kt)("li",{parentName:"ul"},"Metadata fetching via ",(0,r.kt)("inlineCode",{parentName:"li"},"http:"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https:"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"data:")," URIs. Also supported via customizable gateways:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IPFS"),(0,r.kt)("li",{parentName:"ul"},"Arweave"))),(0,r.kt)("li",{parentName:"ul"},"Easy to use REST JSON endpoints with ETag caching.="),(0,r.kt)("li",{parentName:"ul"},"Prometheus metrics for job queue status, contract and token counts, API performance, etc"),(0,r.kt)("li",{parentName:"ul"},"Image cache/CDN support")),(0,r.kt)("h2",{id:"rate-limiting-for-metadata-api"},"Rate Limiting for Metadata API"),(0,r.kt)("p",null,"The following rate-limits (in requests per minute, or RPM) are applicable for all Hiro APIs as of ",(0,r.kt)("a",{parentName:"p",href:"https://www.hiro.so/blog/updated-rate-limits-for-hiro-apis"},"November, 2023"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50 requests per minute, per client IP, for unauthenticated traffic (without an API key)"),(0,r.kt)("li",{parentName:"ul"},"500 requests per minute (regardless of origin IP) with an authenticated API key")),(0,r.kt)("p",null,"These new rate limits help us ensure fair usage of Hiro APIs and provide the best possible service as our community of developers and applications grow and scale."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hiroapi"},"complete this form")," to apply for an API key."),(0,r.kt)("h2",{id:"service-architecture"},"Service architecture"),(0,r.kt)("p",null,"This section gives you an overview of external and internal architectural diagrams."),(0,r.kt)("h3",{id:"external-architecture"},"External architecture"),(0,r.kt)("p",null,"The external architectural diagram shows how the Token metadata API is connected to three systems: Stacks node, Stacks blockchain API database, and Postgres database."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:a(81771).Z,width:"1436",height:"828"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Token metadata API interacts with the Stacks Blockchain API database( referred to as Local Metadata DB in the diagram) to import all historical smart contracts when booting up and to listen for new contracts that may be deployed. Read-only access is recommended as this service will never need to write anything to this database(DB)."),(0,r.kt)("li",{parentName:"ol"},"A Stacks node to respond to all read-only contract calls required when fetching token metadata (calls to get token count, token metadata URIs, etc.)."),(0,r.kt)("li",{parentName:"ol"},"A local Postgres DB to store all processed metadata info.")),(0,r.kt)("p",null,"The service needs to fetch external metadata files (JSONs, images) from the internet, so it must have access to external networks."),(0,r.kt)("h3",{id:"internal-architecture"},"Internal architecture"),(0,r.kt)("p",null,"The following is the internal architectural diagram of the Token metadata API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flowchart",src:a(27091).Z,width:"3244",height:"1428"})),(0,r.kt)("h4",{id:"blockchain-importer"},"Blockchain importer"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/tree/master/src/token-processor/blockchain-api/blockchain-importer.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockchainImporter"))," is a component in the Token metadata API that takes token contracts from the API database. This component is only used on service boot."),(0,r.kt)("p",null,"It connects to the Stacks Blockchain API database and scans the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"smart_contracts")," table looking for any contract that conforms to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stacksgov/sips/blob/main/sips/sip-009/sip-009-nft-standard.md"},"SIP-009"),", SIP-010 or SIP-013. When it finds a token contract, it creates a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/tree/master/src/token-processor/queue/job/process-smart-contract-job.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcessSmartContractJob"))," and adds it to the ",(0,r.kt)("a",{parentName:"p",href:"#job-queue"},"Job queue"),", \xdfso its tokens can be read and processed thereafter."),(0,r.kt)("p",null,"This process runs only once. If the Token metadata API is ever restarted, though, this component re-scans the API ",(0,r.kt)("inlineCode",{parentName:"p"},"smart_contracts")," table from the last processed block height. It can pick up any newer contracts it might have missed while the service was unavailable."),(0,r.kt)("h4",{id:"smart-contract-monitor"},"Smart contract monitor"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/tree/master/src/token-processor/blockchain-api/blockchain-smart-contract-monitor.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockchainSmartContractMonitor"))," component constantly listens to the following Stacks Blockchain API events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Smart contract log events")),(0,r.kt)("p",{parentName:"li"},"If a contract ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," event conforms to SIP-019, it finds the affected tokens and marks them for metadata refresh.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Smart contract deployments")),(0,r.kt)("p",{parentName:"li"},"If the new contract is a token contract, it saves the new token contract and adds the contract to the job queue for token processing."))),(0,r.kt)("p",null,"This process is kept alive throughout the entire service lifetime."),(0,r.kt)("h4",{id:"job-queue"},"Job queue"),(0,r.kt)("p",null,"The role of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/tree/master/src/token-processor/queue/job-queue.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"JobQueue"))," is to perform all the smart contract and token processing in the service."),(0,r.kt)("p",null,"It is a priority queue that organizes all necessary work for contract ingestion and token metadata processing. Every job this queue processes corresponds to one row in the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," DB table, which marks its processing status and related objects to be worked on (smart contract or token)."),(0,r.kt)("p",null,"This object essentially runs an infinite loop that follows these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start(),")," it fetches a set number of job rows that are ",(0,r.kt)("inlineCode",{parentName:"li"},"'pending'")," and loads their corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"Job")," objects into memory for processing, marking those rows now as ",(0,r.kt)("inlineCode",{parentName:"li"},"'queued'"),"."),(0,r.kt)("li",{parentName:"ol"},"It executes each loaded job to completion concurrently. The job row is marked as either ",(0,r.kt)("inlineCode",{parentName:"li"},"'done'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'failed'")," depending on success or failure."),(0,r.kt)("li",{parentName:"ol"},"Once all loaded jobs are done (and the queue is now empty), it goes back to step 1.")),(0,r.kt)("p",null,"There are two environment variables that can help you tune how the queue performs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENV.JOB_QUEUE_SIZE_LIMIT"),": The in-memory size of the queue, i.e., the number of pending jobs that are loaded from the database while they wait for execution (see step 1 above)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENV.JOB_QUEUE_CONCURRENCY_LIMIT"),": The number of jobs that will be run simultaneously.")),(0,r.kt)("p",null,"This queue runs continuously and can handle an unlimited number of jobs."),(0,r.kt)("h5",{id:"process-smart-contract-job"},"Process smart contract job"),(0,r.kt)("p",null,"This job makes a contract call to the Stacks node to determine the total number of tokens declared by the given contract. Once determined, it creates and enqueues all these tokens for metadata ingestion."),(0,r.kt)("h5",{id:"process-token-job"},"Process token job"),(0,r.kt)("p",null,"This job fetches the metadata JSON object for a single token and other relevant properties depending on the token type (symbol, decimals, etc.). Once fetched, it parses and ingests this data to save it into the local database for API endpoints to return."))}u.isMDXComponent=!0},81771:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-7ff8fc1b0b53b7c890cb6f0917c7e7ae.png"},27091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flowchart-db9986359bb25cebcdfff5321f87d719.png"}}]);