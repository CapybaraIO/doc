"use strict";(self.webpackChunk_CapybaraIO_docs=self.webpackChunk_CapybaraIO_docs||[]).push([[5316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,i(i({ref:t},l),{},{components:a})):r.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"How to use Image Cache Service"},i="How to use Image Cache Service",s={unversionedId:"token-metadata-api/how-to-guides/how-to-use-image-cache-service",id:"token-metadata-api/how-to-guides/how-to-use-image-cache-service",title:"How to use Image Cache Service",description:"The Token metadata API allows you to specify the path to a custom script that can pre-process every image URL detected by the service before it's inserted into the DB. This will enable you to serve CDN image URLs in your metadata responses instead of raw URLs, providing key advantages such as:",source:"@site/docs/token-metadata-api/how-to-guides/how-to-use-image-cache-service.md",sourceDirName:"token-metadata-api/how-to-guides",slug:"/token-metadata-api/how-to-guides/how-to-use-image-cache-service",permalink:"/doc/token-metadata-api/how-to-guides/how-to-use-image-cache-service",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/token-metadata-api/how-to-guides/how-to-use-image-cache-service.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"How to use Image Cache Service"},sidebar:"token-metadata-api",previous:{title:"How to stop the service",permalink:"/doc/token-metadata-api/how-to-guides/how-to-stop-service"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-image-cache-service"},"How to use Image Cache Service"),(0,o.kt)("p",null,"The Token metadata API allows you to specify the path to a custom script that can pre-process every image URL detected by the service before it's inserted into the DB. This will enable you to serve CDN image URLs in your metadata responses instead of raw URLs, providing key advantages such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improves image load speed"),(0,o.kt)("li",{parentName:"ul"},"Increases reliability in case the original image becomes unavailable"),(0,o.kt)("li",{parentName:"ul"},"Protects original image hosts from ",(0,o.kt)("a",{parentName:"li",href:"https://wikipedia.org/wiki/Denial-of-service_attack"},"DDoS attacks")),(0,o.kt)("li",{parentName:"ul"},"Increases user privacy")),(0,o.kt)("p",null,"An example IMGIX processor script is included in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/token-metadata-api/blob/master/config/image-cache.js"},(0,o.kt)("inlineCode",{parentName:"a"},"config/image-cache.js")),".\nYou can customize the script path by altering the ",(0,o.kt)("inlineCode",{parentName:"p"},"METADATA_IMAGE_CACHE_PROCESSOR")," environment variable."))}m.isMDXComponent=!0}}]);