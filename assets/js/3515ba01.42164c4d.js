"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(v,r(r({ref:t},d),{},{components:n})):i.createElement(v,r({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Using Devnet on the Hiro Platform"},r="Using Devnet on the Hiro Platform",s={unversionedId:"platform/guides/devnet",id:"platform/guides/devnet",title:"Using Devnet on the Hiro Platform",description:"Devnet on the Hiro Platform empowers developers with a private instance of the Stacks blockchain, enabling swift and secure smart contract testing. This guide will walk you through the process of using Devnet to expedite your development workflow.",source:"@site/docs/platform/guides/devnet.md",sourceDirName:"platform/guides",slug:"/platform/guides/devnet",permalink:"/doc/platform/guides/devnet",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/platform/guides/devnet.md",tags:[],version:"current",frontMatter:{title:"Using Devnet on the Hiro Platform"},sidebar:"platform",previous:{title:"Deployment Plans",permalink:"/doc/platform/guides/deployment-plans"},next:{title:"Connect Desktop to Cloud Using SSH",permalink:"/doc/platform/guides/connect-desktop-to-cloud"}},l={},c=[{value:"What is Devnet?",id:"what-is-devnet",level:2},{value:"Benefits of Devnet",id:"benefits-of-devnet",level:2},{value:"Using Devnet on Hiro Platform",id:"using-devnet-on-hiro-platform",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Starting and Managing Devnet",id:"starting-and-managing-devnet",level:3},{value:"Initialization and Customization",id:"initialization-and-customization",level:3},{value:"Active Development Session",id:"active-development-session",level:3},{value:"Exploring the Devnet Dashboard",id:"exploring-the-devnet-dashboard",level:3},{value:"Additional Devnet Features",id:"additional-devnet-features",level:3},{value:"Future Enhancements",id:"future-enhancements",level:3},{value:"Session Management and Limits",id:"session-management-and-limits",level:3},{value:"Final Notes",id:"final-notes",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-devnet-on-the-hiro-platform"},"Using Devnet on the Hiro Platform"),(0,a.kt)("p",null,"Devnet on the Hiro Platform empowers developers with a private instance of the Stacks blockchain, enabling swift and secure smart contract testing. This guide will walk you through the process of using Devnet to expedite your development workflow."),(0,a.kt)("h2",{id:"what-is-devnet"},"What is Devnet?"),(0,a.kt)("p",null,"Devnet is a configurable, local blockchain simulation for the Stacks network, allowing developers to deploy and test smart contracts quickly. It provides a risk-free testing ground with the convenience of rapid prototyping, cost savings, and privacy."),(0,a.kt)("h2",{id:"benefits-of-devnet"},"Benefits of Devnet"),(0,a.kt)("p",null,"Devnet facilitates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rapid Prototyping"),": Quick iterations with immediate feedback."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cost-Efficiency"),": No real cryptocurrency expenses for testing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Customizable Testing Environment"),": Tailor your blockchain parameters as needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Isolated Development"),": A sandbox for confidential and secure testing.")),(0,a.kt)("h2",{id:"using-devnet-on-hiro-platform"},"Using Devnet on Hiro Platform"),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"First, log into the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.hiro.so/"},"Hiro Platform"),". You can start a new project or import an existing. After setting up your project, navigate to the project page where you'll manage your Devnet."),(0,a.kt)("h3",{id:"starting-and-managing-devnet"},"Starting and Managing Devnet"),(0,a.kt)("p",null,"In the top right corner of your project's page, you'll notice a Devnet status indicator. Initially, it should read 'Inactive'. Click on this indicator to reveal a dropdown menu. From here, select 'Start Devnet' to initiate your private blockchain instance. If you want to configure your devnet like you can locally using ",(0,a.kt)("inlineCode",{parentName:"p"},"clarinet integrate")," in the terminal, before you start devnet, open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet.toml")," file in the platform VSC editor and configure the settings to match your development needs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Start Devnet",src:n(99028).Z,width:"2125",height:"467"})),(0,a.kt)("h3",{id:"initialization-and-customization"},"Initialization and Customization"),(0,a.kt)("p",null,"Once you've started Devnet, it will take a few minutes to spin up. The status indicator on the platform will keep you updated on the progress."),(0,a.kt)("h3",{id:"active-development-session"},"Active Development Session"),(0,a.kt)("p",null,"When Devnet is ready, the status will change to 'Active', and a 30-minute session countdown will begin. This timer manages how long a devnet session will last. Once the 30 minutes are up the devent instance will automatically be shutdown."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devnet Active",src:n(28926).Z,width:"1683",height:"351"})),(0,a.kt)("h3",{id:"exploring-the-devnet-dashboard"},"Exploring the Devnet Dashboard"),(0,a.kt)("p",null,"With Devnet active, clicking on the status pill again will present the option to 'View Devnet Details'. Selecting this takes you to the Devnet dashboard, where you can interact with a block explorer and an \"assembly line\" of mined blocks. Transactions within each block are accessible here, and a search function is available for efficient block navigation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devnet Dashboard",src:n(74621).Z,width:"1685",height:"852"})),(0,a.kt)("h3",{id:"additional-devnet-features"},"Additional Devnet Features"),(0,a.kt)("p",null,"On the dashboard, you'll also find the 'View Wallets' option, which displays wallets generated for use within Devnet, and the 'Make API Requests' feature, allowing you to send requests to your Devnet's Stacks API instance and view responses directly within the platform."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devnet Features",src:n(16567).Z,width:"1685",height:"1068"}),"\n",(0,a.kt)("img",{alt:"Devnet Features",src:n(69552).Z,width:"1687",height:"995"})),(0,a.kt)("h3",{id:"future-enhancements"},"Future Enhancements"),(0,a.kt)("p",null,"Looking ahead, direct access to Devnet resources will be provided, enabling API requests from external applications like a DApp frontend."),(0,a.kt)("h3",{id:"session-management-and-limits"},"Session Management and Limits"),(0,a.kt)("p",null,"Be mindful of the 30-minute timer, as your Devnet will shut down when it expires. If needed, you can restart Devnet to refresh the timer. Keep in mind the monthly limit of 100 Devnet sessions to plan your development schedule accordingly."),(0,a.kt)("h2",{id:"final-notes"},"Final Notes"),(0,a.kt)("p",null,"Remember, only one Devnet instance can run at a time per user account. If you need to work on a different project, simply start Devnet within that project to seamlessly transition."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Devnet is an invaluable part of the Hiro Platform that streamlines the development process, ensuring you can focus on creating, testing, and refining your applications with efficiency and ease. We're excited to see what you build on the Stacks blockchain. Happy coding!"),(0,a.kt)("p",null,"We wish you success as you embark on your development journey on the Hiro Platform!"))}p.isMDXComponent=!0},28926:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/devnet-active-367cbab375f19d160a68b9b48ff4db6a.jpeg"},69552:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/devnet-api-request-1d5c50b024c8eac57b0caee4c870e2e9.jpeg"},74621:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/devnet-dashboard-7e1f509fbacbbf3fc4cccb6af3406ff1.jpeg"},99028:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/devnet-start-7825b973270482ecd3787011cfd9a9d7.jpeg"},16567:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/devnet-wallets-66a5e83580f7f7143b88d4dd67602b3d.jpeg"}}]);