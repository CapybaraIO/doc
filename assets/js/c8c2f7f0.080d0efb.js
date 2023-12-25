"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[2024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||k[u]||r;return a?i.createElement(d,o(o({ref:t},c),{},{components:a})):i.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=a(87462),n=(a(67294),a(3905));const r={title:"Overview"},o="Hiro Archive Overview",s={unversionedId:"hiro-archive/index",id:"hiro-archive/index",title:"Overview",description:"The Hiro Archive is a collection of datasets for various services in the Stacks ecosystem.",source:"@site/docs/hiro-archive/index.md",sourceDirName:"hiro-archive",slug:"/hiro-archive/",permalink:"/doc/hiro-archive/",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/hiro-archive/index.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Overview"},sidebar:"docs",next:{title:"API Keys",permalink:"/doc/api-keys"}},l={},h=[{value:"Supported Services",id:"supported-services",level:2},{value:"Stacks Blockchain",id:"stacks-blockchain",level:2},{value:"Where to Download Archives",id:"where-to-download-archives",level:3},{value:"Restoring the Stacks Blockchain Node Using the Hiro Archive",id:"restoring-the-stacks-blockchain-node-using-the-hiro-archive",level:3},{value:"Stacks Blockchain API",id:"stacks-blockchain-api",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Restoration Methods",id:"restoration-methods",level:3},{value:"Where to Download Archives",id:"where-to-download-archives-1",level:3},{value:"Restoring the Stacks Blockchain API Using the Hiro Archive",id:"restoring-the-stacks-blockchain-api-using-the-hiro-archive",level:3},{value:"Token Metadata API",id:"token-metadata-api",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Where to Download Archives",id:"where-to-download-archives-2",level:3},{value:"Restoring the Token Metadata API Using the Hiro Archive",id:"restoring-the-token-metadata-api-using-the-hiro-archive",level:3},{value:"Verifying Integrity",id:"verifying-integrity",level:2}],c={toc:h},p="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hiro-archive-overview"},"Hiro Archive Overview"),(0,n.kt)("p",null,"The Hiro Archive is a collection of datasets for various services in the Stacks ecosystem."),(0,n.kt)("p",null,"The purpose of the Hiro Archive is to enable Stacks developers and users to quickly bootstrap supported services with pre-loaded data, which otherwise could take days or weeks to acquire when syncing from genesis. This is a public service Hiro offers as a benefit to the Stacks community."),(0,n.kt)("p",null,"All available artifacts can be found here: ",(0,n.kt)("a",{parentName:"p",href:"https://archive.hiro.so"},"https://archive.hiro.so")),(0,n.kt)("h2",{id:"supported-services"},"Supported Services"),(0,n.kt)("p",null,"Nightly mainnet and testnet archives are published for the following services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stacks-network/stacks-blockchain"},"Stacks Blockchain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/stacks-blockchain-api"},"Stacks Blockchain API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/token-metadata-api"},"Token Metadata API"))),(0,n.kt)("h2",{id:"stacks-blockchain"},"Stacks Blockchain"),(0,n.kt)("h3",{id:"where-to-download-archives"},"Where to Download Archives"),(0,n.kt)("p",null,"Stacks Blockchain archives for each network can be found at the following locations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mainnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/mainnet/stacks-blockchain/"},"https://archive.hiro.so/mainnet/stacks-blockchain/")),(0,n.kt)("li",{parentName:"ul"},"testnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/testnet/stacks-blockchain/"},"https://archive.hiro.so/testnet/stacks-blockchain/"))),(0,n.kt)("p",null,"The file name patterns are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-<VERSION>-<DATE(YYYYMMDD)>.tar.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-<VERSION>-<DATE(YYYYMMDD)>.sha256"))),(0,n.kt)("p",null,"There is a continually updated archive and shasum which always points to the most recent upload:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-latest.tar.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-latest.sha256"))),(0,n.kt)("p",null,"or the most recent upload for a particular version:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-2.3.0.0.2-latest.tar.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<NETWORK>-stacks-blockchain-2.3.0.0.2-latest.sha256"))),(0,n.kt)("h3",{id:"restoring-the-stacks-blockchain-node-using-the-hiro-archive"},"Restoring the Stacks Blockchain Node Using the Hiro Archive"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#where-to-download-archives"},"Download the archive and shasum for the appropriate network")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#verifying-integrity"},"Verify the archive with the shasum")),(0,n.kt)("li",{parentName:"ol"},"Extract the archive into the desired directory",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    # Target directory must already exist\n    tar -zxvf <ARCHIVE FILE> -C /target/directory\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.stacks.co/docs/nodes-and-miners/stacks-node-configuration#node"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"a"},"working_dir")," property in your Stacks Blockchain node Config.toml file")," to match the directory you extracted the archive to. "),(0,n.kt)("li",{parentName:"ol"},"Launch your Stacks Blockchain node. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stacks-network/stacks-blockchain/tree/master/testnet/stacks-node/conf"},"You can use one of these example configuration files as a reference.")),(0,n.kt)("li",{parentName:"ol"},"Verify the dataset is being used by comparing your nodes ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:20443/v2/info"},"local block height")," with ",(0,n.kt)("a",{parentName:"li",href:"https://api.hiro.so/v2/info"},"Hiro's"),". If the block height matches or is close to Hiro's block height, the restoration was successful.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"It may take a few minutes for the local node to respond on this endpoint."),(0,n.kt)("li",{parentName:"ol"},"Your block height may be up to a few hundred blocks away from Hiro's depending on the age of the archive. It should catch up relatively quickly.")))),(0,n.kt)("h2",{id:"stacks-blockchain-api"},"Stacks Blockchain API"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Since the Stacks Blockchain API depends on a Stacks Blockchain node being at the same block height, you will need to first ",(0,n.kt)("a",{parentName:"p",href:"#restoring-the-stacks-blockchain-node-using-the-hiro-archive"},"restore a Stacks Blockchain node using the Hiro Archive")," before restoring the Stacks Blockchain API. Otherwise, you may encounter errors when running the API."),(0,n.kt)("p",null,"In order for the Stacks Blockchain and Stacks Blockchain API archives to be compatible, they must meet the following criteria:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both archives correspond to the same Stacks network (mainnet/testnet)"),(0,n.kt)("li",{parentName:"ul"},"The API archive version must be compatible with the Stacks Blockchain archive version (See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/stacks-blockchain-api/releases"},"API release notes")," for guidance)"),(0,n.kt)("li",{parentName:"ul"},"Both archives were created on the same date")),(0,n.kt)("h3",{id:"restoration-methods"},"Restoration Methods"),(0,n.kt)("p",null,"There are two ways to restore a Stacks Blockchain API using the Hiro Archive. The archive file you'll need to download will depend on your method of restoration. There is no scenario where you would need both restoration methods."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Restore via Postgres database dump (Recommended)")),(0,n.kt)("p",null,"This is the quickest and most direct method, and is suitable for most scenarios. It consists of a backup of the API's Postgres database taken using ",(0,n.kt)("inlineCode",{parentName:"p"},"pg_dump"),". We generally recommend starting with this method before attempting the method below if this one does not work for any reason."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Restore via tab-separated-values (TSV) file")),(0,n.kt)("p",null,"This method is several times slower than restoring from a Postgres dump. The API TSV file contains the raw unprocessed events from a Stacks Blockchain node. The API can ingest this file to process events into a Postgres database.\nRestoring from a TSV file can be useful when a Postgres database archive for a particular API version is not available or when it cannot be used for any reason."),(0,n.kt)("h3",{id:"where-to-download-archives-1"},"Where to Download Archives"),(0,n.kt)("p",null,"Depending on the ",(0,n.kt)("a",{parentName:"p",href:"#restoration-methods"},"restoration method"),", Stacks Blockchain API archives for each network can be found at the following locations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Postgres database dump",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mainnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/mainnet/stacks-blockchain-api-pg/"},"https://archive.hiro.so/mainnet/stacks-blockchain-api-pg/")),(0,n.kt)("li",{parentName:"ul"},"testnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/testnet/stacks-blockchain-api-pg/"},"https://archive.hiro.so/testnet/stacks-blockchain-api-pg/")))),(0,n.kt)("li",{parentName:"ul"},"TSV file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mainnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/mainnet/stacks-blockchain-api/"},"https://archive.hiro.so/mainnet/stacks-blockchain-api/")),(0,n.kt)("li",{parentName:"ul"},"testnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/testnet/stacks-blockchain-api/"},"https://archive.hiro.so/testnet/stacks-blockchain-api/"))))),(0,n.kt)("p",null,"The file name patterns are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Postgres database dump",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-<API VERSION>-<DATE(YYYYMMDD)>.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-<API VERSION>-<DATE(YYYYMMDD)>.sha256")))),(0,n.kt)("li",{parentName:"ul"},"TSV file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-<API VERSION>-<DATE(YYYYMMDD)>.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-<API VERSION>-<DATE(YYYYMMDD)>.sha256"))))),(0,n.kt)("p",null,"There is a continually updated archive and shasum which always points to the most recent upload:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Postgres database dump",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-latest.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-latest.sha256")))),(0,n.kt)("li",{parentName:"ul"},"TSV file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-latest.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-latest.sha256"))))),(0,n.kt)("p",null,"or the most recent upload for a particular version:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Postgres database dump",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-<API VERSION>-latest.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"stacks-blockchain-api-pg-<DATABASE VERSION>-<API VERSION>-latest.sha256")))),(0,n.kt)("li",{parentName:"ul"},"TSV file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-<API VERSION>-latest.gz")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"<network>-stacks-blockchain-api-<API VERSION>-latest.sha256"))))),(0,n.kt)("h3",{id:"restoring-the-stacks-blockchain-api-using-the-hiro-archive"},"Restoring the Stacks Blockchain API Using the Hiro Archive"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If restoring via Postgres dump")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#where-to-download-archives-1"},"Download the archive and shasum for the appropriate network and restoration method")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#verifying-integrity"},"Verify the archive with the shasum")),(0,n.kt)("li",{parentName:"ol"},"Import the archive file into a running Postgres database (may take up to an hour depending on database specs and tuning)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    export PGPASSWORD=<YOUR POSTGRES PASSWORD>\n    pg_restore --username postgres --verbose --jobs 4 --dbname stacks_blockchain_api /path/to/archive/file\n"))),(0,n.kt)("li",{parentName:"ol"},"Launch the Stacks Blockchain API service"),(0,n.kt)("li",{parentName:"ol"},"Verify the dataset is being used by comparing your nodes ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:3999/extended/v1/status"},"local block height")," with ",(0,n.kt)("a",{parentName:"li",href:"https://api.hiro.so/extended/v1/status"},"Hiro's"),". If the block height matches or is close to Hiro's block height, the restoration was successful.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"It may take a few minutes for the local node to respond on this endpoint."),(0,n.kt)("li",{parentName:"ol"},"Your block height may be up to a few hundred blocks away from Hiro's depending on the age of the archive. It should catch up relatively quickly.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If restoring via TSV file")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#where-to-download-archives-1"},"Download the archive and shasum for the appropriate network and restoration method")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#verifying-integrity"},"Verify the archive with the shasum")),(0,n.kt)("li",{parentName:"ol"},"Extract the archive into the desired directory",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    # Target directory must already exist\n    gzip -d <ARCHIVE FILE> --stdout > /path/to/extracted/file\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/stacks-blockchain-api#export-and-import"},"Follow these directions to process and import the events in the TSV file into your Postgres database.")),(0,n.kt)("li",{parentName:"ol"},"Launch the Stacks Blockchain API service"),(0,n.kt)("li",{parentName:"ol"},"Verify the dataset is being used by comparing your nodes ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:3999/extended/v1/status"},"local block height")," with ",(0,n.kt)("a",{parentName:"li",href:"https://api.hiro.so/extended/v1/status"},"Hiro's"),". If the block height matches or is close to Hiro's block height, the restoration was successful.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"It may take a few minutes for the local node to respond on this endpoint."),(0,n.kt)("li",{parentName:"ol"},"Your block height may be up to a few hundred blocks away from Hiro's depending on the age of the archive. It should catch up relatively quickly.")))),(0,n.kt)("h2",{id:"token-metadata-api"},"Token Metadata API"),(0,n.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"Since the Token Metadata API depends on a Stacks Blockchain API, you will need to first launch a Stacks Blockchain API configured for the same Stacks network."),(0,n.kt)("p",null,"If you don't already have one, you can follow ",(0,n.kt)("a",{parentName:"p",href:"#stacks-blockchain-api"},"these instructions")," to launch one with an archive."),(0,n.kt)("h3",{id:"where-to-download-archives-2"},"Where to Download Archives"),(0,n.kt)("p",null,"Token Metadata API archives for each network can be found at the following locations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mainnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/mainnet/token-metadata-api-pg/"},"https://archive.hiro.so/mainnet/token-metadata-api-pg/")),(0,n.kt)("li",{parentName:"ul"},"testnet: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.hiro.so/testnet/token-metadata-api-pg/"},"https://archive.hiro.so/testnet/token-metadata-api-pg/"))),(0,n.kt)("p",null,"The file name patterns are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-<API VERSION>-<DATE(YYYYMMDD)>.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-<API VERSION>-<DATE(YYYYMMDD)>.sha256"))),(0,n.kt)("p",null,"There is a continually updated archive and shasum which always points to the most recent upload:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-latest.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-latest.sha256"))),(0,n.kt)("p",null,"or the most recent upload for a particular version:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archive: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-<API VERSION>-latest.dump")),(0,n.kt)("li",{parentName:"ul"},"shasum: ",(0,n.kt)("inlineCode",{parentName:"li"},"token-metadata-api-pg-<DATABASE VERSION>-<API VERSION>-latest.sha256"))),(0,n.kt)("h3",{id:"restoring-the-token-metadata-api-using-the-hiro-archive"},"Restoring the Token Metadata API Using the Hiro Archive"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#where-to-download-archives-2"},"Download the archive and shasum for the appropriate network")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#verifying-integrity"},"Verify the archive with the shasum")),(0,n.kt)("li",{parentName:"ol"},"Import the archive file into a running Postgres database (may take up to an hour depending on database specs and tuning)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    export PGPASSWORD=<YOUR POSTGRES PASSWORD>\n    pg_restore --username postgres --verbose --jobs 4 --dbname token_metadata_api /path/to/archive/file\n"))),(0,n.kt)("li",{parentName:"ol"},"Launch the Token Metadata API service"),(0,n.kt)("li",{parentName:"ol"},"Verify the restoration was successful by viewing the ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:3000/metadata"},"total number of tokens and contracts tracked in the service.")," If the total number of each property is greater than zero, the restoration was successful.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"It may take a few minutes for the local node to respond on this endpoint.")))),(0,n.kt)("h2",{id:"verifying-integrity"},"Verifying Integrity"),(0,n.kt)("p",null,"All datasets have an associated SHA256 hash file which can be used to verify the integrity of the downloaded dataset.\nAs some of the archives are quite large, this is useful to ensure the file you've downloaded matches the file maintained in the Archive."),(0,n.kt)("p",null,"After downloading an archive file and its associated shasum file, you can verify the integrity of the archive file like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    echo \"$(cat <SHASUM FILE> | awk '{print $1}')  <ARCHIVE FILE>\" | shasum --check\n    <ARCHIVE FILE>: OK\n\n    # Example\n    echo \"$(cat mainnet-stacks-blockchain-api-latest.sha256 | awk '{print $1}')  mainnet-stacks-blockchain-api-latest.gz\" | shasum --check\n\n    # If the integrity check succeeds, a log will be printed indicating so\n    mainnet-stacks-blockchain-api-latest.gz: OK\n\n    # Otherwise a log will be printed indicating failure\n    mainnet-stacks-blockchain-api-latest.gz: FAILED\n    shasum: WARNING: 1 computed checksum did NOT match\n")),(0,n.kt)("p",null,"If the integrity check fails for any reason, you may need to delete the local archive and re-attempt the download. If issues persist, switch to a different network and try again."))}k.isMDXComponent=!0}}]);