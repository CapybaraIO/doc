"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[9649],{3905:(t,e,i)=>{i.d(e,{Zo:()=>d,kt:()=>y});var n=i(67294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},d=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(i),k=a,y=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return i?n.createElement(y,r(r({ref:e},d),{},{components:i})):n.createElement(y,r({ref:e},d))}));function y(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},89605:(t,e,i)=>{i.r(e),i.d(e,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const o={},r="Derive an AccountIdentifier from a PublicKey",l={type:"api",id:"derive-an-account-identifier-from-a-public-key",unversionedId:"derive-an-account-identifier-from-a-public-key",title:"Derive an AccountIdentifier from a PublicKey",description:"",slug:"/derive-an-account-identifier-from-a-public-key",frontMatter:{},api:{tags:["Rosetta"],operationId:"rosetta_construction_derive",description:"Retrieves the Account Identifier information based on a Public Key for a given network",responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",title:"RosettaConstructionDeriveResponse",description:"ConstructionDeriveResponse is returned by the /construction/derive endpoint.",additionalProperties:!1,properties:{address:{type:"string",description:"[DEPRECATED by account_identifier in v1.4.4] Address in network-specific format."},account_identifier:{type:"object",title:"RosettaAccountIdentifier",description:"The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).",required:["address"],properties:{address:{type:"string",description:"The address may be a cryptographic public key (or some encoding of it) or a provided username."},sub_account:{type:"object",title:"RosettaSubAccount",description:"An account may have state specific to a contract address (ERC-20 token) and/or a stake (delegated balance). The sub_account_identifier should specify which state (if applicable) an account instantiation refers to.",required:["address"],additionalProperties:!1,properties:{address:{type:"string",description:"The address may be a cryptographic public key (or some encoding of it) or a provided username."},metadata:{type:"object",description:"If the SubAccount address is not sufficient to uniquely specify a SubAccount, any other identifying information can be stored here. It is important to note that two SubAccounts with identical addresses but differing metadata will not be considered equal by clients."}}},metadata:{type:"object",description:"Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata."}}},metadata:{type:"object"}}}}}},400:{description:"Error",content:{"application/json":{schema:{type:"object",title:"RosettaError",description:"Instead of utilizing HTTP status codes to describe node errors (which often do not have a good analog), rich errors are returned using this object. Both the code and message fields can be individually used to correctly identify an error. Implementations MUST use unique values for both fields.",additionalProperties:!1,required:["code","message","retriable"],properties:{code:{type:"integer",description:"Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code."},message:{type:"string",description:"Message is a network-specific error message. The message MUST NOT change for a given code. In particular, this means that any contextual information should be included in the details field."},retriable:{type:"boolean",description:"An error is retriable if the same request may succeed if submitted again."},details:{type:"object",description:"Often times it is useful to return context specific to the request that caused the error (i.e. a sample of the stack trace or impacted account) in addition to the standard error message.",properties:{address:{type:"string"},error:{type:"string"}}}}}}}}},requestBody:{required:!0,content:{"application/json":{schema:{type:"object",title:"RosettaConstructionDeriveRequest",description:"Network is provided in the request because some blockchains have different address formats for different networks",required:["network_identifier","public_key"],additionalProperties:!1,properties:{network_identifier:{type:"object",title:"NetworkIdentifier",description:"The network_identifier specifies which network a particular object is associated with.",required:["blockchain","network"],additionalProperties:!1,properties:{blockchain:{type:"string",description:"Blockchain name"},network:{type:"string",description:"If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet."},sub_network_identifier:{type:"object",description:"In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.",required:["network"],additionalProperties:!1,properties:{network:{type:"string",description:"Network name"},metadata:{type:"object",description:"Meta data from subnetwork identifier",required:["producer"],properties:{producer:{type:"string",description:"producer"}}}}}}},public_key:{type:"object",title:"RosettaPublicKey",description:"PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.",required:["hex_bytes","curve_type"],additionalProperties:!1,properties:{hex_bytes:{type:"string",description:"Hex-encoded public key bytes in the format specified by the CurveType."},curve_type:{type:"string",description:"CurveType is the type of cryptographic curve associated with a PublicKey.",enum:["secp256k1","edwards25519"]}}},metadata:{type:"object"}}},example:{network_identifier:{blockchain:"stacks",network:"mainnet"},public_key:{hex_bytes:"025c13b2fc2261956d8a4ad07d481b1a3b2cbf93a24f992249a61c3a1c4de79c51",curve_type:"secp256k1"},metadata:{}}}}},method:"post",path:"/rosetta/v1/construction/derive",parameters:[],servers:[{url:"https://api.mainnet.hiro.so/",description:"Mainnet"},{url:"https://api.testnet.hiro.so/",description:"Testnet"},{url:"http://localhost:3999/",description:"Local"}],jsonRequestBodyExample:{network_identifier:{blockchain:"string",network:"string",sub_network_identifier:{network:"string",metadata:{producer:"string"}}},public_key:{hex_bytes:"string",curve_type:"secp256k1"},metadata:{}},info:{title:"Stacks Blockchain API",version:"v7.3.0",description:'Welcome to the API reference overview for the <a href="https://docs.hiro.so/get-started/stacks-blockchain-api">Stacks Blockchain API</a>.\n\n<a href="https://hirosystems.github.io/stacks-blockchain-api/collection.json" download="stacks-api-collection.json">Download Postman collection</a>\n'},postman:{name:"Derive an AccountIdentifier from a PublicKey",description:{content:"Retrieves the Account Identifier information based on a Public Key for a given network",type:"text/plain"},url:{path:["rosetta","v1","construction","derive"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "network_identifier": {\n        "blockchain": "<string>",\n        "network": "<string>",\n        "sub_network_identifier": {\n            "network": "<string>",\n            "metadata": {\n                "producer": "<string>"\n            }\n        }\n    },\n    "public_key": {\n        "hex_bytes": "<string>",\n        "curve_type": "<string>"\n    },\n    "metadata": "<object>"\n}'}}},source:"@site/openapi/stacks-blockchain-api.json",sourceDirName:".",permalink:"/doc/api/derive-an-account-identifier-from-a-public-key",previous:{title:"Get a Mempool Transaction",permalink:"/doc/api/get-a-mempool-transaction"},next:{title:"Get the Hash of a Signed Transaction",permalink:"/doc/api/get-the-hash-of-a-signed-transaction"}},s=[],c={toc:s},d="wrapper";function p(t){let{components:e,...i}=t;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"derive-an-accountidentifier-from-a-publickey"},"Derive an AccountIdentifier from a PublicKey"),(0,a.kt)("p",null,"Retrieves the Account Identifier information based on a Public Key for a given network"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"network_identifier"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The network_identifier specifies which network a particular object is associated with.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"blockchain"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Blockchain name")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"network"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sub_network_identifier"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"network"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Network name")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Meta data from subnetwork identifier")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"producer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"producer")))))))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"public_key"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"hex_bytes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Hex-encoded public key bytes in the format specified by the CurveType.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"curve_type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"secp256k1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edwards25519"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"CurveType is the type of cryptographic curve associated with a PublicKey.")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Success"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"address"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"[DEPRECATED by account_identifier in v1.4.4]"," Address in network-specific format.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"account_identifier"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"address"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The address may be a cryptographic public key (or some encoding of it) or a provided username.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sub_account"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An account may have state specific to a contract address (ERC-20 token) and/or a stake (delegated balance). The sub_account_identifier should specify which state (if applicable) an account instantiation refers to.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"address"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The address may be a cryptographic public key (or some encoding of it) or a provided username.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"If the SubAccount address is not sufficient to uniquely specify a SubAccount, any other identifying information can be stored here. It is important to note that two SubAccounts with identical addresses but differing metadata will not be considered equal by clients.")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"code"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Message is a network-specific error message. The message MUST NOT change for a given code. In particular, this means that any contextual information should be included in the details field.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"retriable"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An error is retriable if the same request may succeed if submitted again.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Often times it is useful to return context specific to the request that caused the error (i.e. a sample of the stack trace or impacted account) in addition to the standard error message.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"address"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))))))}p.isMDXComponent=!0}}]);