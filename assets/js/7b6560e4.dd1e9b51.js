"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[5339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Unit Tests With the Clarinet SDK"},i=void 0,l={unversionedId:"clarinet/guides/test-contract-with-clarinet-sdk",id:"clarinet/guides/test-contract-with-clarinet-sdk",title:"Unit Tests With the Clarinet SDK",description:"The Clarinet SDK allows you to write unit tests for your Clarity smart contracts. You can theoritically use any JavaScript test framework, but the SDK supports Vitest out of the box.",source:"@site/docs/clarinet/guides/test-contract-with-clarinet-sdk.md",sourceDirName:"clarinet/guides",slug:"/clarinet/guides/test-contract-with-clarinet-sdk",permalink:"/doc/clarinet/guides/test-contract-with-clarinet-sdk",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/guides/test-contract-with-clarinet-sdk.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Unit Tests With the Clarinet SDK"},sidebar:"clarinet",previous:{title:"Clarinet SDK",permalink:"/doc/clarinet/guides/clarinet-js-sdk"},next:{title:"Create new Project",permalink:"/doc/clarinet/guides/how-to-create-new-project"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Set Up the Clarity Contract and Unit Tests",id:"set-up-the-clarity-contract-and-unit-tests",level:2},{value:"Migrating Between Clarinet v1 and Clarinet v2",id:"migrating-between-clarinet-v1-and-clarinet-v2",level:3},{value:"Unit Tests for <code>counter</code> Example",id:"unit-tests-for-counter-example",level:3},{value:"Comprehensive Unit Tests for <code>counter</code>",id:"comprehensive-unit-tests-for-counter",level:3},{value:"Measure and Increase Code Coverage",id:"measure-and-increase-code-coverage",level:2},{value:"Costs Optimization",id:"costs-optimization",level:2},{value:"Produce Both Coverage and Costs Reports",id:"produce-both-coverage-and-costs-reports",level:2},{value:"Run Tests in CI",id:"run-tests-in-ci",level:2},{value:"Custom Vitest Matchers",id:"custom-vitest-matchers",level:2},{value:"Check Clarity Type",id:"check-clarity-type",level:3},{value:"<code>toHaveClarityType(expectedType: ClarityType)</code>  omit from toc ",id:"tohaveclaritytypeexpectedtype-claritytype--omit-from-toc-",level:4},{value:"Response Type",id:"response-type",level:3},{value:"<code>toBeOk(expected: ClarityValue)</code>  omit from toc ",id:"tobeokexpected-clarityvalue--omit-from-toc-",level:4},{value:"<code>toBeErr(expected: ClarityValue)</code>  omit from toc ",id:"tobeerrexpected-clarityvalue--omit-from-toc-",level:4},{value:"Optional Type",id:"optional-type",level:3},{value:"<code>toBeSome(expected: ClarityValue)</code>  omit from toc ",id:"tobesomeexpected-clarityvalue--omit-from-toc-",level:4},{value:"<code>toBeNone()</code>  omit from toc ",id:"tobenone--omit-from-toc-",level:4},{value:"Simple Clarity Types",id:"simple-clarity-types",level:3},{value:"<code>toBeBool(expected: boolean)</code>  omit from toc ",id:"tobeboolexpected-boolean--omit-from-toc-",level:4},{value:"<code>toBeInt(expected: number | bigint)</code>  omit from toc ",id:"tobeintexpected-number--bigint--omit-from-toc-",level:4},{value:"<code>toBeUint(expected: number | bigint)</code>  omit from toc ",id:"tobeuintexpected-number--bigint--omit-from-toc-",level:4},{value:"<code>toBeAscii(expected: string)</code>  omit from toc ",id:"tobeasciiexpected-string--omit-from-toc-",level:4},{value:"<code>toBeUtf8(expected: string)</code>  omit from toc ",id:"tobeutf8expected-string--omit-from-toc-",level:4},{value:"<code>toBePrincipal(expected: string)</code>  omit from toc ",id:"tobeprincipalexpected-string--omit-from-toc-",level:4},{value:"<code>toBeBuff(expected: Uint8Array)</code>  omit from toc ",id:"tobebuffexpected-uint8array--omit-from-toc-",level:4},{value:"Other Composite Types",id:"other-composite-types",level:3},{value:"<code>toBeList(expected: ClarityValue[])</code>  omit from toc ",id:"tobelistexpected-clarityvalue--omit-from-toc-",level:4},{value:"<code>toBeTuple(expected: Record&lt;string, ClarityValue&gt;)</code>  omit from toc ",id:"tobetupleexpected-recordstring-clarityvalue--omit-from-toc-",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@hirosystems/clarinet-sdk"},"Clarinet SDK")," allows you to write unit tests for your Clarity smart contracts. You can theoritically use any JavaScript test framework, but the SDK supports ",(0,o.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," out of the box."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure you are using the latest version of Clarinet to follow this guide. See the ",(0,o.kt)("a",{parentName:"p",href:"/doc/clarinet/getting-started"},"getting started")," guide to know more.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/clarinet-js-sdk"},"API reference guide")," for more information about the methods and elements of the clarinet-sdk.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The SDK requires Node.js >= 18.0 and NPM to be installed. ",(0,o.kt)("a",{parentName:"p",href:"https://volta.sh/"},"Volta")," is a great tool to install and manage JS tooling."),(0,o.kt)("p",null,"To follow this tutorial, you must have the Clarinet CLI installed as well."),(0,o.kt)("h2",{id:"set-up-the-clarity-contract-and-unit-tests"},"Set Up the Clarity Contract and Unit Tests"),(0,o.kt)("p",null,"Let us consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," smart contract to understand how to write unit tests for our application requirements."),(0,o.kt)("p",null,"First, create a new Clarinet project with a ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"clarinet new counter\ncd counter\nclarinet contract new counter\n")),(0,o.kt)("p",null,"Below will be the content of our smart contract.\nIt keeps track of an initialized value, allows for incrementing and decrementing, and prints actions as a log."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-clarity"},';; counter.clar\n(define-data-var count uint u1)\n\n(define-public (increment (step uint))\n  (let ((new-val (+ (var-get count) step)))\n    (var-set count new-val)\n    (print { object: "count", action: "incremented", value: new-val })\n    (ok new-val)\n  )\n)\n\n(define-public (decrement (step uint))\n  (let ((new-val (- (var-get count) step)))\n    (var-set count new-val)\n    (print { object: "count", action: "decremented", value: new-val })\n    (ok new-val)\n  )\n)\n\n(define-read-only (read-count)\n  (ok (var-get count))\n)\n')),(0,o.kt)("h3",{id:"migrating-between-clarinet-v1-and-clarinet-v2"},"Migrating Between Clarinet v1 and Clarinet v2"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Clarinet v2 will be released in October 2023, and will create the right boilerplate files. But if a project has been created with Clarinet v1, the following script prepares the project to run the SDK and Vitest.")),(0,o.kt)("p",null,"Executing this script in a Clarinet v1 project will initialise NPM and Vitest. It will also create a sample test file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npx @hirosystems/clarinet-sdk@latest\n")),(0,o.kt)("p",null,"This script will ask you if you want to run npm install now; you can press enter to do so.\nThis can take a few seconds."),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/counter_test.ts")," that was created by ",(0,o.kt)("inlineCode",{parentName:"p"},"clarinet contract new counter")," can be deleted."),(0,o.kt)("p",null,"You can also have a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/contract.test.ts"),". It's a sample file showing how to use the SDK with Vitest.\nIt can safely be deleted."),(0,o.kt)("h3",{id:"unit-tests-for-counter-example"},"Unit Tests for ",(0,o.kt)("inlineCode",{parentName:"h3"},"counter")," Example"),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/counter.test.ts")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Cl } from '@stacks/transactions';\nimport { describe, expect, it } from 'vitest';\n\nconst accounts = simnet.getAccounts();\nconst address1 = accounts.get('wallet_1')!;\n\ndescribe('test `increment` public function', () => {\n  it('increments the count by the given value', () => {\n    const incrementResponse = simnet.callPublicFn('counter', 'increment', [Cl.uint(1)], address1);\n    console.log(Cl.prettyPrint(incrementResponse.result)); // (ok u2)\n    expect(incrementResponse.result).toBeOk(Cl.uint(2));\n\n    const count1 = simnet.getDataVar('counter', 'count');\n    expect(count1).toBeUint(2);\n\n    simnet.callPublicFn('counter', 'increment', [Cl.uint(40)], address1);\n    const count2 = simnet.getDataVar('counter', 'count');\n    expect(count2).toBeUint(42);\n  });\n\n  it('sends a print event', () => {\n    const incrementResponse = simnet.callPublicFn('counter', 'increment', [Cl.uint(1)], address1);\n\n    expect(incrementResponse.events).toHaveLength(1);\n    const printEvent = incrementResponse.events[0];\n    expect(printEvent.event).toBe('print_event');\n    expect(printEvent.data.value).toBeTuple({\n      object: Cl.stringAscii('count'),\n      action: Cl.stringAscii('incremented'),\n      value: Cl.uint(2),\n    });\n  });\n});\n")),(0,o.kt)("p",null,"To run the test, go back to your console and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," command. It should display a report telling you that tests succeeded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,o.kt)("p",null,"There is a very important thing happening under the hood here. The ",(0,o.kt)("inlineCode",{parentName:"p"},"simnet")," object is available globally in the tests, and is automatically initialized before each test."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You don't need to know much more about that, but if you want to know in detail how it works, you can have a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"vitest.config.js")," file at the root of you project.")),(0,o.kt)("p",null,"Getting back to the tests, we just implemented two of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first test checks that the ",(0,o.kt)("inlineCode",{parentName:"li"},"increment")," function returns the new value and saves it to the ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," variable."),(0,o.kt)("li",{parentName:"ul"},"The second test checks that an ",(0,o.kt)("inlineCode",{parentName:"li"},"print_event")," is emitted when the increment function is called.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Cl.prettyPrint(value: ClarityValue)")," to format any Clarity value into readable Clarity code. It can be useful to debug function results or event values.")),(0,o.kt)("p",null,"Note that we are importing ",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"it")," from Vitest."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"it")," allows us to write a test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"describe")," is not necessary but allows to organize tests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expect")," is use to make assertions on value.")),(0,o.kt)("p",null,"You can learn more about Vitest on their ",(0,o.kt)("a",{parentName:"p",href:"https://vitest.dev"},"website"),".\nWe also implemented some custom matchers to make assertions on Clarity variables (like ",(0,o.kt)("inlineCode",{parentName:"p"},"toBeUint"),").\nThe ",(0,o.kt)("a",{parentName:"p",href:"#custom-vitest-matchers"},"full list of custom matchers")," is available at the end of this guide."),(0,o.kt)("h3",{id:"comprehensive-unit-tests-for-counter"},"Comprehensive Unit Tests for ",(0,o.kt)("inlineCode",{parentName:"h3"},"counter")),(0,o.kt)("p",null,"Let us now write a higher coverage test suite by testing the ",(0,o.kt)("inlineCode",{parentName:"p"},"decrement")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get-counter")," functions."),(0,o.kt)("p",null,"These two code blocks can be added at the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/counter.test.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"describe('test `decrement` public function', () => {\n  it('decrements the count by the given value', () => {\n    const decrementResponse = simnet.callPublicFn('counter', 'decrement', [Cl.uint(1)], address1);\n    expect(decrementResponse.result).toBeOk(Cl.uint(0));\n\n    const count1 = simnet.getDataVar('counter', 'count');\n    expect(count1).toBeUint(0);\n\n    // increase the count so that it can be descreased without going < 0\n    simnet.callPublicFn('counter', 'increment', [Cl.uint(10)], address1);\n\n    simnet.callPublicFn('counter', 'decrement', [Cl.uint(5)], address1);\n    const count2 = simnet.getDataVar('counter', 'count');\n    expect(count2).toBeUint(5);\n  });\n\n  it('sends a print event', () => {\n    const decrementResponse = simnet.callPublicFn('counter', 'decrement', [Cl.uint(1)], address1);\n\n    expect(decrementResponse.events).toHaveLength(1);\n    const printEvent = decrementResponse.events[0];\n    expect(printEvent.event).toBe('print_event');\n    expect(printEvent.data.value).toBeTuple({\n      object: Cl.stringAscii('count'),\n      action: Cl.stringAscii('decremented'),\n      value: Cl.uint(0),\n    });\n  });\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"describe('test `get-count` read only function', () => {\n  it('returns the counter value', () => {\n    const count1 = simnet.callReadOnlyFn('counter', 'read-count', [], address1);\n    expect(count1.result).toBeOk(Cl.uint(1));\n\n    simnet.callPublicFn('counter', 'increment', [Cl.uint(10)], address1);\n    const count2 = simnet.callReadOnlyFn('counter', 'read-count', [], address1);\n    expect(count2.result).toBeOk(Cl.uint(11));\n  });\n});\n")),(0,o.kt)("h2",{id:"measure-and-increase-code-coverage"},"Measure and Increase Code Coverage"),(0,o.kt)("p",null,"To help developers maximize their test coverage, the test framework can produce a ",(0,o.kt)("inlineCode",{parentName:"p"},"lcov")," report, using ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage")," flag. You can set it in the scripts in the project ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "test:coverage": "vitest run -- --coverage",\n    // ...\n  },\n')),(0,o.kt)("p",null,"Then run the script with the following command. It will produce a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"./lcov.info"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:coverage\n")),(0,o.kt)("p",null,"From there, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"lcov")," tooling suite to produce HTML reports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install lcov\ngenhtml --branch-coverage -o coverage lcov.info\nopen coverage/index.html\n")),(0,o.kt)("h2",{id:"costs-optimization"},"Costs Optimization"),(0,o.kt)("p",null,"The test framework can also be used to optimize costs. When you execute a test suite, Clarinet keeps track of all costs being computed when executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract-call"),", and displays the most expensive ones in a table."),(0,o.kt)("p",null,"To help developers maximize their test coverage, the test framework can produce a ",(0,o.kt)("inlineCode",{parentName:"p"},"lcov")," report, using ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage")," flag. You can set it in the scripts in the project ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "test:costs": "vitest run -- --costs",\n    // ...\n  },\n')),(0,o.kt)("p",null,"And run the script with the following command. It will produce a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"./costs-reports.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:costs\n")),(0,o.kt)("p",null,"For now, there isn't much you can do out of the box with a costs report. But in future versions of the clarinet sdk, we will implement features to help keep track of your costs, such as checking that function calls do not go above a certain threshold."),(0,o.kt)("h2",{id:"produce-both-coverage-and-costs-reports"},"Produce Both Coverage and Costs Reports"),(0,o.kt)("p",null,"In your package.json, you should already have a script called ",(0,o.kt)("inlineCode",{parentName:"p"},"test:reports")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "test:reports": "vitest run -- --coverage --costs",\n    // ...\n  },\n')),(0,o.kt)("p",null,"Run it to produce both the coverage and the costs reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:reports\n")),(0,o.kt)("h2",{id:"run-tests-in-ci"},"Run Tests in CI"),(0,o.kt)("p",null,"Because the tests only require Node.js and NPM run, they can also be run in GitHub actions and CIs just like any other Node test."),(0,o.kt)("p",null,"In GitHub, you can directly set up a Node.js workflow like this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"name: Test counter contract\n\non:\n  push:\n    branches: ['main']\n  pull_request:\n    branches: ['main']\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [20.x]\n\n    steps:\n      - uses: actions/checkout@v3\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node-version }}\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run test:reports\n")),(0,o.kt)("h2",{id:"custom-vitest-matchers"},"Custom Vitest Matchers"),(0,o.kt)("p",null,"A set of Vitest matchers can be used to make assertions on Clarity values.\nThey can check the return values of contracts, ensure that the value is actually a Clarity value, and provide nice error messages."),(0,o.kt)("h3",{id:"check-clarity-type"},"Check Clarity Type"),(0,o.kt)("h4",{id:"tohaveclaritytypeexpectedtype-claritytype--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toHaveClarityType(expectedType: ClarityType)")," "),(0,o.kt)("p",null,"This matcher can be used to make sure that the value has the right Clarity Type, without checking its value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ClarityType } from '@stacks/transactions';\nimport { expect, it } from 'vitest';\n\nconst address1 = simnet.getAccounts().get('wallet_1');\n\nit('ensures <increment> adds 1', () => {\n  const { result } = simnet.callPublicFn('counter', 'increment', [], address1);\n\n  // make sure it returns a response ok `(ok ...)`\n  expect(result).toHaveClarityType(ClarityType.ResponseOk);\n});\n")),(0,o.kt)("p",null,"It can also be used to check any type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// uint\nexpect(result).toHaveClarityType(ClarityType.UInt);\n\n// or tuple\nexpect(result).toHaveClarityType(ClarityType.Tuple);\n\n// and so one\n")),(0,o.kt)("h3",{id:"response-type"},"Response Type"),(0,o.kt)("p",null,"The response type is noted ",(0,o.kt)("inlineCode",{parentName:"p"},"(response <ok-type> <error-type>)")," in Clarity.\nIt can be ",(0,o.kt)("inlineCode",{parentName:"p"},"(ok <ok-type>)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"(err <error-type>)"),".\nThey are called composite types, meaning that they contain another Clarity value."),(0,o.kt)("h4",{id:"tobeokexpected-clarityvalue--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeOk(expected: ClarityValue)")," "),(0,o.kt)("p",null,"Check that a response is ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," and has the expected value. Any Clarity value can be passed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const decrement = simnet.callPublicFn('counter', 'decrement', [Cl.uint(1)], address1);\n\n// decrement.result is `(ok (uint 0))`\nexpect(decrement.result).toBeOk(Cl.uint(0));\n")),(0,o.kt)("h4",{id:"tobeerrexpected-clarityvalue--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeErr(expected: ClarityValue)")," "),(0,o.kt)("p",null,"Check that a response is ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," and has the expected value. Any Clarity value can be passed."),(0,o.kt)("p",null,"Consider that the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," contract returns and error code 500 ",(0,o.kt)("inlineCode",{parentName:"p"},"(err u500)")," if the value passed to increment is too big:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const tooBig = 100000;\nconst increment = simnet.callPublicFn('counter', 'increment', [Cl.uint(toBig)], address1);\n\n// increment.result is `(err u500)`\nexpect(increment.result).toBeErr(Cl.uint(500));\n")),(0,o.kt)("h3",{id:"optional-type"},"Optional Type"),(0,o.kt)("p",null,"The option type is noted ",(0,o.kt)("inlineCode",{parentName:"p"},"(optional <some-type>)")," in Clarity.\nIt can be ",(0,o.kt)("inlineCode",{parentName:"p"},"(some <some-type>)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),".\nHere, ",(0,o.kt)("inlineCode",{parentName:"p"},"some")," is a composite type, meaning that it contains another Clarity value."),(0,o.kt)("h4",{id:"tobesomeexpected-clarityvalue--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeSome(expected: ClarityValue)")," "),(0,o.kt)("p",null,"Consider a billboard smart contract that can contain an optional message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const getMessage = simnet.callPublicFn('billboard', 'get-message', [], address1);\n\n// (some u\"Hello world\")\nexpect(getMessage.result).toBeSome(Cl.stringUtf8('Hello world'));\n")),(0,o.kt)("h4",{id:"tobenone--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeNone()")," "),(0,o.kt)("p",null,"Considering the same billboard smart contract but with no saved message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const getMessage = simnet.callPublicFn('billboard', 'get-message', [], address1);\n\n// none\nexpect(getMessage.result).toBeNone();\n")),(0,o.kt)("h3",{id:"simple-clarity-types"},"Simple Clarity Types"),(0,o.kt)("p",null,"Custom assertion matchers are available for all types of Clarity values. They will check that the value has the right type and value."),(0,o.kt)("h4",{id:"tobeboolexpected-boolean--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeBool(expected: boolean)")," "),(0,o.kt)("p",null,"Asserts the value of Clarity boolean (true or false)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(trueResult).toBeBool(true);\nexpect(falseResult).toBeBool(false);\n")),(0,o.kt)("h4",{id:"tobeintexpected-number--bigint--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeInt(expected: number | bigint)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity int."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(result).toBeInt(1);\n// it accepts JS bigints\nexpect(result).toBeInt(1n);\n")),(0,o.kt)("h4",{id:"tobeuintexpected-number--bigint--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeUint(expected: number | bigint)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity uint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(result).toBeUint(1);\n// it accepts JS bigints\nexpect(result).toBeUint(1n);\n")),(0,o.kt)("h4",{id:"tobeasciiexpected-string--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeAscii(expected: string)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity string-ascii."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(result).toBeAscii('Hello wolrd');\n")),(0,o.kt)("h4",{id:"tobeutf8expected-string--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeUtf8(expected: string)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity string-utf8."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(result).toBeUtf8('STX');\n")),(0,o.kt)("h4",{id:"tobeprincipalexpected-string--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBePrincipal(expected: string)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity principal value. The principal can be a standard or a contract principal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"expect(standardPrincipal).toBePrincipal('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM');\nexpect(contractPrincipal).toBePrincipal('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter');\n")),(0,o.kt)("h4",{id:"tobebuffexpected-uint8array--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeBuff(expected: Uint8Array)")," "),(0,o.kt)("p",null,"Asserts the value of a Clarity buffer.",(0,o.kt)("br",{parentName:"p"}),"\n","It takes as an input an ArrayBuffer (",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array"),")."),(0,o.kt)("p",null,"Your test case will ultimately depends on how the Uint8Array is built. ",(0,o.kt)("inlineCode",{parentName:"p"},"@stacks/transaction")," can help building these buffers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it.only('can assert buffer values', () => {\n  const { result } = simnet.callPublicFn(/* ... */);\n\n  // knowing the expected UintArray\n  const value = Uint8Array.from([98, 116, 99]);\n  expect(result).toBeBuff(value);\n\n  // knowing the expected string\n  const bufferFromAscii = Cl.bufferFromAscii('btc');\n  expect(result).toBeBuff(bufferFromAscii.buffer);\n\n  // knowing the expected hex value\n  const bufferFromHex = Cl.bufferFromHex('627463');\n  console.log(bufferFromHex.buffer);\n});\n")),(0,o.kt)("h3",{id:"other-composite-types"},"Other Composite Types"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tuple")," are composite types, like ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"err"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"some"),". Meanning that they contain another Clarity value."),(0,o.kt)("h4",{id:"tobelistexpected-clarityvalue--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeList(expected: ClarityValue[])")," "),(0,o.kt)("p",null,"Check that the value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," containing an array of Clarity values.",(0,o.kt)("br",{parentName:"p"}),"\n","Considering a function that return a list of 3 uints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const address1 = simnet.getAccounts().get('wallet_1');\n\nit('can assert list values', () => {\n  const { result } = simnet.callReadOnlyFn('counter', 'func-returning-list-of-uints', [], address1);\n\n  expect(result).toBeList([Cl.uint(1), Cl.uint(2), Cl.uint(3)]);\n});\n")),(0,o.kt)("h4",{id:"tobetupleexpected-recordstring-clarityvalue--omit-from-toc-"},(0,o.kt)("inlineCode",{parentName:"h4"},"toBeTuple(expected: Record<string, ClarityValue>)")," "),(0,o.kt)("p",null,"Check that the value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tuple"),", it takes a JavaScript object to check the values. It's used in the ",(0,o.kt)("a",{parentName:"p",href:"#unit-tests-for-counter-example"},"tutorial above")," to check the value of the print event. It can also be used to check function call result."),(0,o.kt)("p",null,"The snippet below shows that composite types can be nested:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const address1 = simnet.getAccounts().get('wallet_1');\n\nit('can assert tuple values', () => {\n  const { result } = simnet.callPublicFn('counter', 'func-returning-tuple', [], address1);\n\n  expect(result).toBeTuple({\n    id: Cl.uint(1),\n    data: Cl.tuple({\n      text: Cl.stringUtf8('Hello world'),\n      owner: Cl.standardPrincipal(address1),\n    }),\n  });\n});\n")))}d.isMDXComponent=!0}}]);