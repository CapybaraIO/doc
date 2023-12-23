"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[7310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"testing-contracts",title:"Testing Clarity code with JS and Mocha"},l=void 0,i={unversionedId:"tutorials/testing-contracts",id:"tutorials/testing-contracts",title:"Testing Clarity code with JS and Mocha",description:"Introduction",source:"@site/docs/tutorials/testing-contracts.md",sourceDirName:"tutorials",slug:"/tutorials/testing-contracts",permalink:"/doc/tutorials/testing-contracts",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/tutorials/testing-contracts.md",tags:[],version:"current",frontMatter:{id:"testing-contracts",title:"Testing Clarity code with JS and Mocha"},sidebar:"tutorials",previous:{title:"Non-fungible tokens",permalink:"/doc/tutorials/clarity-nft"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Node environment",id:"node-environment",level:3},{value:"Download a starter project",id:"download-a-starter-project",level:2},{value:"Run tests",id:"run-tests",level:2},{value:"Interact with contracts",id:"interact-with-contracts",level:2},{value:"Initializing a client",id:"initializing-a-client",level:3},{value:"Checking syntax",id:"checking-syntax",level:3},{value:"Deploying contract",id:"deploying-contract",level:3},{value:"Run public functions",id:"run-public-functions",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Clarity, the smart contracting language, is based on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)"},"LISP"),". Clarity is an interpreted language, and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Recursive_language"},"decidable"),". In this tutorial, you will learn how to test Clarity and how to use ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," to test Clarity contracts while you develop them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Have a working Clarity starter project"),(0,r.kt)("li",{parentName:"ul"},"Understand how to test Clarity code using ",(0,r.kt)("inlineCode",{parentName:"li"},".ts")," files and Mocha.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"node-environment"},"Node environment"),(0,r.kt)("p",null,"To complete the tutorial, you should have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"NodeJS")," installed on your workstation. To install and run the starter project, you'll need  version ",(0,r.kt)("inlineCode",{parentName:"p"},"8.12.0")," or higher. You can verify your installation by opening your terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,r.kt)("h2",{id:"download-a-starter-project"},"Download a starter project"),(0,r.kt)("p",null,"Using your terminal, run the following command to create a new folder and initialize a new project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir hello-world; cd hello-world\nnpm init clarity-starter\n")),(0,r.kt)("p",null,"After the starter project is created, you can select a template and a name for your local project folder. Feel free to hit ENTER both times to accept the default suggestion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Template - one of [hello-world, counter]: (hello-world)\n")),(0,r.kt)("p",null,"Finally, after the project dependencies are installed, your project is ready for development."),(0,r.kt)("p",null,"The project resources are created in your current folder. Take note of the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," folders. The other files are standardized components required to run the project."),(0,r.kt)("h2",{id:"run-tests"},"Run tests"),(0,r.kt)("p",null,"The starter project comes with test tooling already set up for you using ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),". You can now run the tests and review the results:"),(0,r.kt)("p",null,"In the project root directory, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,r.kt)("p",null,"You'll see the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  hello world contract test suite\n    \u2713 should have a valid syntax\n    deploying an instance of the contract\n    \u2713 should return 'hello world'\n    \u2713 should echo number\n\n3 passing (412ms)\n")),(0,r.kt)("p",null,"Great, all tests are passing. Now, let's have a look at the test implementation. That helps understand how to interact with Clarity smart contracts."),(0,r.kt)("h2",{id:"interact-with-contracts"},"Interact with contracts"),(0,r.kt)("p",null,"Tests are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," folder, let's have a look at the tests associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.clar")," file."),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat test/hello-world.ts\n")),(0,r.kt)("p",null,"Take a few seconds to review the contents of the file. You should ignore the test setup functions and focus on the most relevant parts related to Clarity."),(0,r.kt)("p",null,"Note that we're importing modules from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@blockstack/clarity")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  Client,\n  Provider,\n  ProviderRegistry,\n  Result,\n} from "@blockstack/clarity";\n')),(0,r.kt)("h3",{id:"initializing-a-client"},"Initializing a client"),(0,r.kt)("p",null,"At the test start, we are initializing a contract instance ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorldClient")," and a provider that simulates interactions with the Stacks 2.0 blockchain. If this was in a production environment, the contract instance would be the equivalent of a contract deployed to the blockchain. The provider would be the Stacks blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let helloWorldClient: Client;\nlet provider: Provider;\n\n(...)\n\nprovider = await ProviderRegistry.createProvider();\nhelloWorldClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.hello-world", "hello-world", provider);\n')),(0,r.kt)("p",null,"Take a look at the client initialization. It requires a contract identifier in the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},"{contract_address}.{contract_name}"),". The second argument indicates the location of the smart contract file, without the ",(0,r.kt)("inlineCode",{parentName:"p"},".clar")," suffix. By default, the location is assumed to be relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," folder."),(0,r.kt)("p",null,"As you can see above, a sample Stacks address and contract identifier are already provided for you. You don't need to modify anything."),(0,r.kt)("h3",{id:"checking-syntax"},"Checking syntax"),(0,r.kt)("p",null,"Next, we check the contract for valid syntax. If the smart contract implementation has syntax error (bugs), this check fails:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await helloWorldClient.checkContract();\n")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkContract()")," function returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," command makes sure JavaScript is not executing the next lines until the contract check completes."),(0,r.kt)("h3",{id:"deploying-contract"},"Deploying contract"),(0,r.kt)("p",null,"Further down in the file, you find a contract deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await helloWorldClient.deployContract();\n")),(0,r.kt)("h3",{id:"run-public-functions"},"Run public functions"),(0,r.kt)("p",null,"Finally, you will find snippets that call the public ",(0,r.kt)("inlineCode",{parentName:"p"},"say-hi")," function of the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const query = helloWorldClient.createQuery({\n  method: { name: "say-hi", args: [] },\n});\nconst receipt = await helloWorldClient.submitQuery(query);\nconst result = Result.unwrapString(receipt);\n')),(0,r.kt)("p",null,"As you see, smart contract calls are realized through query definitions. The ",(0,r.kt)("inlineCode",{parentName:"p"},"createQuery")," function defines the name and arguments passed to the smart contract function. With ",(0,r.kt)("inlineCode",{parentName:"p"},"submitQuery"),", the function is executed and the response is wrapped into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," object. To obtain the readable result, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrapString")," function that returns ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world"),"."),(0,r.kt)("p",null,"Now, review the last test ",(0,r.kt)("inlineCode",{parentName:"p"},"should echo number")," on your own and try to understand how arguments are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"echo-number")," smart contract."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"With the completion of this tutorial, you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created a working Clarity starter project"),(0,r.kt)("li",{parentName:"ul"},"Understood how to test Clarity contracts")),(0,r.kt)("p",null,"Congratulations."))}d.isMDXComponent=!0}}]);