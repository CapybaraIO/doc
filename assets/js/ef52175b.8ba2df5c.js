"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"api-keys",title:"API Keys"},a=void 0,s={unversionedId:"api-keys",id:"api-keys",title:"API Keys",description:"Developers have open access to Hiro's APIs, without the use of an API key, subjects to Hiro's rate limit policy. For developers who need access beyond these rate limits, we provide API keys.",source:"@site/docs/api-keys.md",sourceDirName:".",slug:"/api-keys",permalink:"/doc/api-keys",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/api-keys.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"api-keys",title:"API Keys"},sidebar:"docs",previous:{title:"Overview",permalink:"/doc/hiro-archive/"},next:{title:"Rate Limiting",permalink:"/doc/rate-limiting"}},p={},l=[{value:"Using cURL",id:"using-curl",level:2},{value:"Using the API Key in Typescript",id:"using-the-api-key-in-typescript",level:2}],c={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Developers have open access to Hiro's APIs, without the use of an API key, subjects to Hiro's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/rate-limiting"},"rate limit policy"),". For developers who need access beyond these rate limits, we provide API keys."),(0,i.kt)("h1",{id:"what-is-an-api-key"},"What Is an API Key?"),(0,i.kt)("p",null,"API keys are alpha-numeric codes that identify and authenticate an application or developer. You can use API keys to control access to your API calls."),(0,i.kt)("h1",{id:"how-to-get-an-api-key"},"How to Get an API Key?"),(0,i.kt)("p",null,"If you're interested in obtaining an API key for use with your application, please complete ",(0,i.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hiroapi?utm_source=Platform&utm_medium=web"},"this form"),", and we'll be in touch with details."),(0,i.kt)("h1",{id:"steps-to-use-an-api-key"},"Steps to Use an API Key"),(0,i.kt)("p",null,"Follow these steps to interact with the API using your API key:"),(0,i.kt)("blockquote",null,(0,i.kt)("admonition",{parentName:"blockquote",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The API key is passed in the ",(0,i.kt)("strong",{parentName:"p"},"header")," of your HTTP API request and is used only for private use, like in server-side applications. This key is not to be exposed or shared; if you use the API key in your client-side application (E.g., frontend, browser-based applications), attackers can capture it using the client tools (E.g., browser console) and abuse your API key."))),(0,i.kt)("p",null,"There are multiple ways to interact with API endpoints. In this guide, we will walk through the following approaches with the help of an API endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cURL"),(0,i.kt)("li",{parentName:"ul"},"Typescript client")),(0,i.kt)("h2",{id:"using-curl"},"Using cURL"),(0,i.kt)("p",null,"Using cURL, you will pass the API key in an ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hiro-api-key")," header. Use the following command as an example to call the API endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.hiro.so/<your-api-endpoint>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.hiro.so/... -H 'x-hiro-api-key: <your-API-value>'\n")),(0,i.kt)("h2",{id:"using-the-api-key-in-typescript"},"Using the API Key in Typescript"),(0,i.kt)("p",null,"The following Typescript snippet demonstrates the instantiation of RESTful HTTP requests with an API key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'function <your-api-function>(apiKey: string) {\n  const url = `https://api.hiro.so/<your-api-endpoint>`;\n  const headers = new Headers();\n  headers.append("x-hiro-api-key", ${apiKey});\n\n  return fetch(url, {\n    headers: headers\n  })\n    .then(response => response.json());\n}\n')))}y.isMDXComponent=!0}}]);