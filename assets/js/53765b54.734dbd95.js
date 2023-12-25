"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6078],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=n,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return o?r.createElement(k,i(i({ref:t},c),{},{components:o})):r.createElement(k,i({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},93749:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={title:"Getting Started"},i=void 0,l={unversionedId:"ordhook/getting-started",id:"ordhook/getting-started",title:"Getting Started",description:"Ordhook is a developer tool designed for interacting with Bitcoin ordinals, enabling you to retrieve ordinal activity from the Bitcoin chain. Follow the steps below to install Ordhook.",source:"@site/docs/ordhook/getting-started.md",sourceDirName:"ordhook",slug:"/ordhook/getting-started",permalink:"/doc/ordhook/getting-started",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/ordhook/getting-started.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Getting Started"},sidebar:"ordhook",previous:{title:"Overview",permalink:"/doc/ordhook/"},next:{title:"Run Ordhook as a Service Using Bitcoind",permalink:"/doc/ordhook/guides/ordhook-as-a-service-bitcoind"}},s={},d=[{value:"Installing Ordhook",id:"installing-ordhook",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Navigate to the Ordhook Directory",id:"navigate-to-the-ordhook-directory",level:3},{value:"Install Ordhook",id:"install-ordhook",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ordhook is a developer tool designed for interacting with ",(0,n.kt)("a",{parentName:"p",href:"https://www.hiro.so/blog/what-are-bitcoin-ordinals"},"Bitcoin ordinals"),", enabling you to retrieve ordinal activity from the Bitcoin chain. Follow the steps below to install Ordhook."),(0,n.kt)("h2",{id:"installing-ordhook"},"Installing Ordhook"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"NOTE")),"\nBefore proceeding, make sure you have the Rust and Cargo (Rust's package manager) installed on your computer.")),(0,n.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,n.kt)("p",null,"Open your terminal and navigate to the directory where you want to clone the Ordhook repository. Then run the following command to clone the repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hirosystems/ordhook.git\n")),(0,n.kt)("p",null,"This will download the Ordhook source code to your local machine."),(0,n.kt)("h3",{id:"navigate-to-the-ordhook-directory"},"Navigate to the Ordhook Directory"),(0,n.kt)("p",null,"Move into the newly cloned Ordhook directory by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ordhook\n")),(0,n.kt)("p",null,"You are now inside the Ordhook directory."),(0,n.kt)("h3",{id:"install-ordhook"},"Install Ordhook"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"NOTE:"))),(0,n.kt)("p",{parentName:"blockquote"},"Ordhook requires Rust to be installed on your system. If you haven't installed Rust yet, you can do so by following the instructions on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official Rust website"),".")),(0,n.kt)("p",null,"Use the Rust package manager, Cargo, to install Ordhook. Run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo ordhook-install\n")),(0,n.kt)("p",null,"This command compiles the Ordhook code and installs it on your system."),(0,n.kt)("h3",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"With Ordhook installed, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Scan blocks in your terminal. See the ",(0,n.kt)("a",{parentName:"li",href:"/doc/ordhook/guides/scan-ordinal-activities"},"Scanning Ordinal Activities")," guide."),(0,n.kt)("li",{parentName:"ul"},"Stream ordinal activity to an external API. Refer to the ",(0,n.kt)("a",{parentName:"li",href:"/doc/ordhook/guides/stream-ordinal-activities"},"Streaming Ordinal Activities")," guide.")))}u.isMDXComponent=!0}}]);