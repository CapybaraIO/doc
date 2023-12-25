"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[4069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={Title:"Troubleshooting"},o="Troubleshooting",s={unversionedId:"stacks-blockchain-api/troubleshooting",id:"stacks-blockchain-api/troubleshooting",title:"Troubleshooting",description:"I need help retrieving the requested information from an API endpoint.",source:"@site/docs/stacks-blockchain-api/troubleshooting.md",sourceDirName:"stacks-blockchain-api",slug:"/stacks-blockchain-api/troubleshooting",permalink:"/doc/stacks-blockchain-api/troubleshooting",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks-blockchain-api/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{Title:"Troubleshooting"},sidebar:"stacks-api",previous:{title:"FAQ's",permalink:"/doc/stacks-blockchain-api/faq"}},l={},c=[{value:"I need help retrieving the requested information from an API endpoint.",id:"i-need-help-retrieving-the-requested-information-from-an-api-endpoint",level:2},{value:"I&#39;m hitting rate limits with API Calls",id:"im-hitting-rate-limits-with-api-calls",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"i-need-help-retrieving-the-requested-information-from-an-api-endpoint"},"I need help retrieving the requested information from an API endpoint."),(0,i.kt)("p",null,"As a first step, examine the HTTP response codes returned by the API call. The following are the classification groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP 2xx - Typically expected behavior ie; the API is responding as expected. Consider caching all or part of the response to reduce retrieval times in the future."),(0,i.kt)("li",{parentName:"ul"},"HTTP 3xx - Redirecting; In this case, the client should be programmed to retry the call with the redirected URL or terminate the execution."),(0,i.kt)("li",{parentName:"ul"},"HTTP 4xx - Client errors; This usually signifies a malformed request (for example - attempting to access a resource that has access restrictions or does not exist)"),(0,i.kt)("li",{parentName:"ul"},"HTTP 5xx - Server error; These typically signal an issue with the backend infrastructure.")),(0,i.kt)("p",null,"In all cases, ensure that you log any erroneous debugging responses. Your application may be attempting to utilize deprecated endpoints, which can lead to the failure of the request. You must update these operations to use a different endpoint as soon as possible. To stay updated with deprecation events, subscribe to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.hiro.so/updates"},"developer newsletter"),"."),(0,i.kt)("p",null,"Additionally, ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/pPwMzMx9k8"},"Discord")," and ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/stacks-blockchain+or+clarity-lang"},"StackOverflow")," are great resources for sharing knowledge and getting your questions addressed through the community."),(0,i.kt)("h2",{id:"im-hitting-rate-limits-with-api-calls"},"I'm hitting rate limits with API Calls"),(0,i.kt)("p",null,"Hiro's Public Stacks API calls ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/rate-limiting"},"are rate-limited")," to ensure high availability of the API and prevent abuse by a single or specific group of clients."),(0,i.kt)("p",null,"While increasing limits may only be feasible to be fair to some users, clients can employ various techniques to adapt to the rate limit. One example is using an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/retry"},"exponential back-off strategy"),", which repeatedly retries the operation when hitting a rate limit. However, the time between each retry increases exponentially so that over a more extended period, the rate of requests adapts to the rate limit."),(0,i.kt)("p",null,"Caching API responses can also be handy, as not all information is updated frequently and can be stored locally to reduce API traffic. Depending on the use case, there may be multiple options to achieve this. For example, a client-side cache can be created/refreshed based on a combination of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Weight - Retain an item longer the more frequently it is accessed."),(0,i.kt)("li",{parentName:"ul"},"Time - Let the cached item expire after a specific time interval - call the API the next time this item is required."),(0,i.kt)("li",{parentName:"ul"},"On-Chain Events - If your application tracks on-chain events, some additional ways to build the cache would be based on block height, successful execution of a function/contract, etc.")),(0,i.kt)("p",null,"Finally, more mature development projects can consider ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/get-started/running-api-node"},"running their own instances of the API"),"."))}h.isMDXComponent=!0}}]);