"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[5522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=l,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={title:"Getting Started"},o=void 0,i={unversionedId:"clarinet/getting-started",id:"clarinet/getting-started",title:"Getting Started",description:"Install Clarinet",source:"@site/docs/clarinet/getting-started.md",sourceDirName:"clarinet",slug:"/clarinet/getting-started",permalink:"/doc/clarinet/getting-started",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/clarinet/getting-started.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Getting Started"},sidebar:"clarinet",previous:{title:"Overview",permalink:"/doc/clarinet/"},next:{title:"Clarinet SDK",permalink:"/doc/clarinet/guides/clarinet-js-sdk"}},s={},u=[{value:"Install Clarinet",id:"install-clarinet",level:2},{value:"Install on macOS (Homebrew)",id:"install-on-macos-homebrew",level:3},{value:"Install on Windows",id:"install-on-windows",level:3},{value:"Install from a pre-built binary",id:"install-from-a-pre-built-binary",level:3},{value:"Install from source using Cargo",id:"install-from-source-using-cargo",level:3},{value:"Build Clarinet",id:"build-clarinet",level:3},{value:"Setup shell completions",id:"setup-shell-completions",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-clarinet"},"Install Clarinet"),(0,l.kt)("p",null,"Hiro has developed Clarinet to be environment-agnostic. Follow this guide to install and build Clarinet."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Topics covered in this guide"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-clarinet"},"Install Clarinet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-on-macos-homebrew"},"Install on MacOS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-on-windows"},"Install on Windows")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/clarinet#install-from-a-pre-built-binary"},"Install from Pre-built library")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#build-clarinet"},"Build Clarinet from source using Cargo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setup-shell-completions"},"Use Clarinet to generate shell completion scripts"))),(0,l.kt)("p",null,"You may choose to install Clarinet in any of the following operating systems:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS"),(0,l.kt)("li",{parentName:"ul"},"Windows"),(0,l.kt)("li",{parentName:"ul"},"Linux")),(0,l.kt)("p",null,"To install Clarinet, you may choose from the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/clarinet#install-from-a-pre-built-binary"},"pre-built binary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hirosystems/clarinet#install-from-source-using-cargo"},"build source from Cargo"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NOTE:"))),(0,l.kt)("p",{parentName:"blockquote"},"There is no difference in Clarinet functionality based on the environment you select.")),(0,l.kt)("h3",{id:"install-on-macos-homebrew"},"Install on macOS (Homebrew)"),(0,l.kt)("p",null,"To install Clarinet using macOs, you must first install Homebrew on your system. If you do not already have Homebrew already installed,\nplease refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," documentation for detailed information on installing Homebrew."),(0,l.kt)("p",null,"Once you have Homebrew installed, run the below command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install clarinet\n")),(0,l.kt)("p",null,"For more information on how to install Clarinet on macOS, please see the ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dpPopuvYU90"},"Setting Up Your Clarity Development Environment (Mac)")," video walkthrough."),(0,l.kt)("h3",{id:"install-on-windows"},"Install on Windows"),(0,l.kt)("p",null,"The easiest way to install Clarinet on Windows is to use the MSI installer,\nwhich you can download from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/releases"},"Hiro releases page"),"."),(0,l.kt)("p",null,"You may also install Clarinet on Winget. Microsoft created this package manager, which includes the latest Windows updates."),(0,l.kt)("p",null,"Enter the command below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-PowerShell"},"winget install clarinet\n")),(0,l.kt)("p",null,"For more information on how to install Clarinet on Windows, please see the ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=r5LY1J5oACs"},"Setting Up Your Clarity Environment (Windows)")," video walkthrough."),(0,l.kt)("h3",{id:"install-from-a-pre-built-binary"},"Install from a pre-built binary"),(0,l.kt)("p",null,"If you would like to install Clarinet from pre-built binaries, you must first download the latest release from the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hirosystems/clarinet/releases"},"Hiro releases page"),". When you have downloaded the latest release,\nunzip the binary and copy it to a location already in your path, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),", using the command shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# note: you can change the v0.27.0 version that is available on the releases page.\nwget -nv https://github.com/hirosystems/clarinet/releases/download/v0.27.0/clarinet-linux-x64-glibc.tar.gz -O clarinet-linux-x64.tar.gz\ntar -xf clarinet-linux-x64.tar.gz\nchmod +x ./clarinet\nmv ./clarinet /usr/local/bin\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NOTE:"))),(0,l.kt)("p",{parentName:"blockquote"},"If you use macOS, you may receive security errors when running the pre-compiled binary.\nTo resolve the security warning, use the command below and replace the path ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/clarinet")," with your local binary file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xattr -d com.apple.quarantine /usr/local/bin/clarinet\n")),(0,l.kt)("h3",{id:"install-from-source-using-cargo"},"Install from source using Cargo"),(0,l.kt)("p",null,"You may also install Clarinet using Cargo. If you choose this option, please be aware that you must first install Rust.\nFor more information on installing Rust, please see the ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Install Rust")," page for access\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo"),", the Rust package manager."),(0,l.kt)("p",null,"If you are using Debian or Ubuntu-based distributions, you must also install the following package to build Clarinet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential pkg-config libssl-dev\n")),(0,l.kt)("h3",{id:"build-clarinet"},"Build Clarinet"),(0,l.kt)("p",null,"Once you have installed Clarinet using Cargo, you can build Clarinet from the source using Cargo with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hirosystems/clarinet.git --recursive\ncd clarinet\ncargo clarinet-install\n")),(0,l.kt)("p",null,"By default, you will be placed in our development branch, ",(0,l.kt)("inlineCode",{parentName:"p"},"develop"),", with code that has not yet been released."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you plan to submit any code changes, this is the right branch for you."),(0,l.kt)("li",{parentName:"ul"},"If you prefer the latest stable version, switch to the main branch by entering the command below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\n")),(0,l.kt)("p",null,"If you have previously checked out the source, ensure you have the latest code (including submodules) before building using this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git pull\ngit submodule update --recursive\n")),(0,l.kt)("p",null,"Now that you have installed and built Clarinet, you can ",(0,l.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/how-to-create-new-project"},"create a new project")," and then ",(0,l.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/how-to-add-contract"},"populate the project with smart contracts"),"."),(0,l.kt)("p",null,"Clarinet also provides tools for interacting with your contracts in a Read, Evaluate, Print, Loop (REPL) console and perform automated ",(0,l.kt)("a",{parentName:"p",href:"/doc/clarinet/guides/test-contract-with-clarinet-sdk"},"testing of contracts"),"."),(0,l.kt)("h2",{id:"setup-shell-completions"},"Setup shell completions"),(0,l.kt)("p",null,"Clarinet already has many different commands built in. Therefore, enabling tab completion in your shell may be useful.\nUsing the command below, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"clarinet")," to generate the shell completion scripts for many common shells."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"clarinet completions (bash|elvish|fish|powershell|zsh)\n")),(0,l.kt)("p",null,"After generating the file, you can refer to the documentation for your shell to determine where this file should be moved to and what other steps may be necessary to enable tab completion for ",(0,l.kt)("inlineCode",{parentName:"p"},"clarinet"),"."))}m.isMDXComponent=!0}}]);