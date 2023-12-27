"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[5763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,k=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={Title:"Upgrade Stacks Blockchain API version"},i="Upgrade Stacks Blockchain API version",s={unversionedId:"stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api",id:"stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api",title:"Upgrade Stacks Blockchain API version",description:"Over time, the Stacks Blockchain API may be updated to a newer version, providing you additonal features and benefits not available in previous versions. When a new API version is released, you may want to upgrade the Stacks Blockchain API version to this new, stable version.",source:"@site/docs/stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api.md",sourceDirName:"stacks-blockchain-api/how-to-guides",slug:"/stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks-blockchain-api/how-to-guides/how-to-upgrade-stacks-blockchain-api.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{Title:"Upgrade Stacks Blockchain API version"},sidebar:"stacks-api",previous:{title:"How to Run an API Node",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-run-api-node"},next:{title:"Error Handling",permalink:"/doc/stacks-blockchain-api/how-to-guides/how-to-handle-errors"}},l={},p=[{value:"Event Replay",id:"event-replay",level:2},{value:"Event Replay Instructions",id:"event-replay-instructions",level:3},{value:"V1 BNS Data",id:"v1-bns-data",level:4},{value:"Export and Import",id:"export-and-import",level:4}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrade-stacks-blockchain-api-version"},"Upgrade Stacks Blockchain API version"),(0,o.kt)("p",null,"Over time, the Stacks Blockchain API may be updated to a newer version, providing you additonal features and benefits not available in previous versions. When a new API version is released, you may want to upgrade the Stacks Blockchain API version to this new, stable version."),(0,o.kt)("p",null,"The process to upgrade the API version is descibed below."),(0,o.kt)("h1",{id:"upgrading-the-api-version"},"Upgrading the API Version"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))),(0,o.kt)("p",{parentName:"blockquote"},"If you choose to upgrade the Stacks Blockchain API to a new major version (for example, 3.0.0 to 4.0.0), then the Postgres database from the previous version will not be compatible and the upgrade process will fail to start.")),(0,o.kt)("p",null,"When upgrading the API version, you must use Event Replay. Failure to do so will require wiping both the Stacks Blockchain chainstate data and the API Postgres database, and then re-syncing from scratch."),(0,o.kt)("h2",{id:"event-replay"},"Event Replay"),(0,o.kt)("p",null,"The stacks-node is only able to emit events live as they happen. This poses a problem in the scenario where the stacks-blockchain-api needs to be upgraded and its database cannot be migrated to a new schema. One way to handle this upgrade is to wipe the stacks-blockchain-api's database and stacks-node working directory, and re-sync from scratch."),(0,o.kt)("p",null,"Alternatively, an event-replay feature is available where the API records the HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests from the stacks-node event emitter, then streams these events back to itself. This essentially simulaties a wipe and full re-sync, although this is much faster."),(0,o.kt)("p",null,"The Event Replay feature can be used via program args. For example, if there are breaking changes in the API's SQL schema, such as adding a new column which requires events to be re-played, the steps described below can be run."),(0,o.kt)("h3",{id:"event-replay-instructions"},"Event Replay Instructions"),(0,o.kt)("h4",{id:"v1-bns-data"},"V1 BNS Data"),(0,o.kt)("p",null,"This process is optional, but recommended. If you want to retrieve the V1 BNS data, there will be a few extra steps you need to perform."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download BNS data using the command below.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -L https://storage.googleapis.com/blockstack-v1-migration-data/export-data.tar.gz -o /stacks-node/bns/export-data.tar.gz")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Extract the data by entering the command below.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tar -xzvf ./bns/export-data.tar.gz -C /stacks-node/bns/")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Each file in ",(0,o.kt)("inlineCode",{parentName:"li"},"./bns")," will have a corresponding sha256 value. To verify the sha256 sum value, run the following script:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'for file in `ls /stacks-node/bns/* | grep -v sha256 | grep -v .tar.gz`; do\n    if [ $(sha256sum $file | awk {\'print $1\'}) == $(cat ${file}.sha256 ) ]; then\n        echo "sha256 Matched $file"\n    else\n        echo "sha256 Mismatch $file"\n    fi\ndone')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Set the data's location as the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"BNS_IMPORT_DIR")," in your ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,o.kt)("h4",{id:"export-and-import"},"Export and Import"),(0,o.kt)("p",null,"To export and/or import event data, follow the steps listed below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure the API process is not running. When stopping the API, let the process exit gracefully so that any in-progress SQL writes can finish.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Export event data to disk with the export-events command:"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node ./lib/index.js export-events --file /tmp/stacks-node-events.tsv")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the API version to the new stacks-blockchain-api version.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Perform the event playback using the ",(0,o.kt)("inlineCode",{parentName:"p"},"import-events")," command."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING"),": This action will drop all tables from the configured Postgres database, including any tables not automatically added by the API."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node ./lib/index.js import-events --file /tmp/stacks-node-events.tsv --wipe-db --force")),(0,o.kt)("p",null,"This command has two modes of operation, specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"--mode")," option:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"archival (default)"),": The process will import and ingest all blockchain events that have happened since the first block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pruned"),": The import process will ignore some prunable events (mempool, microblocks) until the import block height has reached ",(0,o.kt)("inlineCode",{parentName:"li"},"chain tip - 256")," blocks. This saves a considerable amount of time during import, but sacrifices some historical data. You can use this mode if you are mostly interested in running an API version that prioritizes real-time information.")),(0,o.kt)("p",null,"Alternatively, instead of performing the ",(0,o.kt)("inlineCode",{parentName:"p"},"export-events")," command in step 1, an environmental variable can be set which enables events to be streamed to a file as they are received, while the application is running normally. To enable this feature, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"STACKS_EXPORT_EVENTS_FILE")," environment variable to the file path where events should be appended. "),(0,o.kt)("p",null,"For example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"STACKS_EXPORT_EVENTS_FILE=/tmp/stacks-node-events.tsv")))}h.isMDXComponent=!0}}]);