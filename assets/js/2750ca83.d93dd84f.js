"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[802],{77449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),o=n(67294),r=n(3905),s=n(33913),i=n(1571);const l={title:"Build a Decentralized Grants Program"},p=void 0,c={unversionedId:"hacks/build-a-decentralized-grants-program",id:"hacks/build-a-decentralized-grants-program",title:"Build a Decentralized Grants Program",description:"<meta",source:"@site/docs/hacks/build-a-decentralized-grants-program.mdx",sourceDirName:"hacks",slug:"/hacks/build-a-decentralized-grants-program",permalink:"/doc/hacks/build-a-decentralized-grants-program",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/hacks/build-a-decentralized-grants-program.mdx",tags:[],version:"current",frontMatter:{title:"Build a Decentralized Grants Program"},sidebar:"hacks",previous:{title:"Build a Friend.tech Clone",permalink:"/doc/hacks/build-a-friend-tech-clone"},next:{title:"Build a Custom Blockchain API",permalink:"/doc/hacks/build-a-custom-api-using-chainhook"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding the ExecutorDAO Protocol",id:"understanding-the-executordao-protocol",level:2},{value:"Clone the Starter Template",id:"clone-the-starter-template",level:2},{value:"Establishing Your Core Contract",id:"establishing-your-core-contract",level:2},{value:"Error Handling and State Management",id:"error-handling-and-state-management",level:3},{value:"Authorization Check",id:"authorization-check",level:3},{value:"Extension Management",id:"extension-management",level:3},{value:"Proposal Execution",id:"proposal-execution",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Extension Requests",id:"extension-requests",level:3},{value:"Create Your Membership Token",id:"create-your-membership-token",level:2},{value:"Constants and Variables",id:"constants-and-variables",level:3},{value:"Authorization Check",id:"authorization-check-1",level:3},{value:"Token Minting and Burning",id:"token-minting-and-burning",level:3},{value:"Token Information",id:"token-information",level:3},{value:"Proposal Submission Contract (Extension)",id:"proposal-submission-contract-extension",level:2},{value:"Traits and Constants",id:"traits-and-constants",level:3},{value:"Variables",id:"variables",level:3},{value:"Authorization Check",id:"authorization-check-2",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Proposals",id:"proposals",level:3},{value:"Extension Callback",id:"extension-callback",level:3},{value:"Proposal Voting Contract (Extension)",id:"proposal-voting-contract-extension",level:2},{value:"Traits and Constants",id:"traits-and-constants-1",level:3},{value:"Variables",id:"variables-1",level:3},{value:"Authorization Check",id:"authorization-check-3",level:3},{value:"Proposals",id:"proposals-1",level:3},{value:"Votes",id:"votes",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Extension Callback",id:"extension-callback-1",level:3},{value:"Challenges",id:"challenges",level:2},{value:"Prizes and Submissions",id:"prizes-and-submissions",level:2}],h={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://docs.hiro.so/hacks/build-a-decentralized-grants-program"}),(0,r.kt)("meta",{property:"og:type",content:"website"}),(0,r.kt)("meta",{property:"og:title",content:"Hiro Hacks | Build a Decentralized Grants Program"}),(0,r.kt)("meta",{property:"og:description",content:"Learn how to build a decentralized grants program on Stacks."}),(0,r.kt)("meta",{property:"og:image",content:"/img/hack2-og.jpg"})),(0,r.kt)("h1",{id:"build-a-decentralized-grants-program"},"Build a Decentralized Grants Program"),(0,r.kt)("div",{className:"gap-3 flex flex-wrap mb-6"},(0,s.Z)(new Date("2023-12-13"))?(0,r.kt)(o.Fragment,null,(0,r.kt)("a",{className:"inline-block bg-neutral-200 hover:bg-neutral-100 rounded-md text-sm text-neutral-700 px-2 py-1 hover:text-neutral-700 hover:no-underline transition-colors",href:"https://survey.hiro.so/hirohacks",target:"_blank"},"Submit your project"),(0,r.kt)("a",{className:"inline-block bg-violet-300 hover:bg-violet-200 rounded-md text-sm text-violet-800 px-2 py-1 hover:text-violet-800 hover:no-underline transition-colors",href:"https://stacks.chat"},"Discord Support ",(0,r.kt)("span",{className:"i-bi-discord align-text-bottom text-lg"}))):(0,r.kt)(o.Fragment,null,(0,r.kt)("a",{className:"inline-block bg-green-300 rounded-md text-sm text-green-800 px-2 py-1 hover:text-green-800 hover:no-underline transition-colors cursor-default",href:"#"},"Open"),(0,r.kt)("a",{className:"inline-block bg-neutral-200 hover:bg-neutral-100 rounded-md text-sm text-neutral-700 px-2 py-1 hover:text-neutral-700 hover:no-underline transition-colors",href:"https://survey.hiro.so/hirohacks",target:"_blank"},"Submission deadline ",(0,i.Z)(new Date("2023-12-13"),{addSuffix:!0})),(0,r.kt)("a",{className:"inline-block bg-violet-300 hover:bg-violet-200 rounded-md text-sm text-violet-800 px-2 py-1 hover:text-violet-800 hover:no-underline transition-colors",href:"https://stacks.chat"},"Discord Support ",(0,r.kt)("span",{className:"i-bi-discord align-text-bottom text-lg"})))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to a world where funding for innovative projects is fluid and controlled by a community of token holders, not just a select few. This is the value proposition of a decentralized grants program. In this guide, we'll walk you through the process of building such a program using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarvinJanssen/executor-dao"},"ExecutorDAO")," protocol on the Stacks blockchain."),(0,r.kt)("p",null,"Key features of this project include:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Decentralized Governance"),": Anyone holding a ",(0,r.kt)("inlineCode",{parentName:"p"},"membership-token")," can vote on grant proposals."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open Proposal Submission"),": Anyone can propose a grant, encouraging a wide range of ideas and projects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Contract Automation"),": All aspects of the grants program, from proposal submission to voting and fund distribution, are automated through smart contracts, ensuring transparency and tamper-proof processes."),(0,r.kt)("p",null,"This Hack walks you through the basics of building a decentralized grants program. Over the course of this hack, you will deploy your own functioning grants program."),(0,r.kt)("p",null,"There are also optional challenges at the end\u2014opportunities to stretch your skills, differentiate your application, and win BTC prizes. ",(0,r.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hirohacks"},"Submit your project here!")),(0,r.kt)("p",null,"Now it's time to hack. First, we'll cover the basics of the core functionalities of our grants program and look at 4 contracts. Let's dive in."),(0,r.kt)("h2",{id:"understanding-the-executordao-protocol"},"Understanding the ExecutorDAO Protocol"),(0,r.kt)("p",null,"ExecutorDAO is a powerful and flexible protocol that allows for the creation of decentralized autonomous organizations (DAOs) with a high degree of modularity and customization. ExecutorDAO operates on three core tenets:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proposals are smart contracts"),":\nProposals in ExecutorDAO are expressed as smart contracts, allowing for precise, logical descriptions of the operations, duties, and members of the DAO. In our case, each grant application is a proposal expressed as a smart contract."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The core executes, the extensions give form"),":\nExecutorDAO starts with a single core contract whose sole purpose is to execute proposals and keep a list of authorized ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),". Extensions are contracts that can be enabled or disabled by proposals and add specific features to the DAO - like ",(0,r.kt)("em",{parentName:"p"},"proposing grants"),", ",(0,r.kt)("em",{parentName:"p"},"voting on grants"),", ",(0,r.kt)("em",{parentName:"p"},"distributing funds"),", and more."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ownership control happens via sending context"),":\nExecutorDAO follows a single-address ownership model. The core contract is the de facto owner of external ownable contracts. This allows any proposal or extension to act upon it, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"membership-token")," we will build out in the sections below."),(0,r.kt)("p",null,"For more details, you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarvinJanssen/executor-dao/tree/main/contracts"},"view the standard contracts in the ExecutorDAO repository"),"."),(0,r.kt)("h2",{id:"clone-the-starter-template"},"Clone the Starter Template"),(0,r.kt)("p",null,"In this section, we'll start by setting up your development environment. We've prepared a repository that includes an initialized Clarinet project and a React frontend with some boilerplate code and all the required packages."),(0,r.kt)("p",null,"To clone the repository, open your terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hirosystems/hiro-hacks-template.git\ncd hiro-hacks-template\n")),(0,r.kt)("h2",{id:"establishing-your-core-contract"},"Establishing Your Core Contract"),(0,r.kt)("p",null,"Before we create our core contract, we need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," contracts that we'll be implementing for our grants program."),(0,r.kt)("p",null,"Traits in Clarity define a set of functions that a contract must implement. In this case, any contract that wants to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," must implement the functions defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-trait")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"extension-trait")," respectively."),(0,r.kt)("p",null,"In your project's directory, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new extension-trait && clarinet contract new proposal-trait\n")),(0,r.kt)("p",null,"Now in your contracts, respectively, add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},";; extension-trait.clar\n(define-trait extension-trait\n  (\n    (callback (principal (buff 34)) (response bool uint))\n  )\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},";; proposal-trait.clar\n(define-trait proposal-trait\n  (\n    (execute (principal) (response bool uint))\n  )\n)\n")),(0,r.kt)("p",null,"Now that we've defined how your set of functions must be implemented, we can now begin to create our core contract - let's run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new core\n")),(0,r.kt)("p",null,"This will create a new contract in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"core.clar"),"."),(0,r.kt)("p",null,"Inside our ",(0,r.kt)("inlineCode",{parentName:"p"},"core.clar")," contract, let's add the two trait contracts we've just created from the steps above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(use-trait proposal-trait .proposal-trait.proposal-trait)\n(use-trait extension-trait .extension-trait.extension-trait)\n")),(0,r.kt)("h3",{id:"error-handling-and-state-management"},"Error Handling and State Management"),(0,r.kt)("p",null,"Next, we need to define some basic error handling and variables for managing our contracts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-constant ERR_UNAUTHORIZED (err u1000))\n(define-constant ERR_ALREADY_EXECUTED (err u1001))\n(define-constant ERR_INVALID_EXTENSION (err u1002))\n\n(define-data-var executive principal tx-sender)\n(define-map executedProposals principal uint)\n(define-map extensions principal bool)\n")),(0,r.kt)("p",null,"These constants represent error codes that the contract can return. The variables store the executive principal (the owner of the grants program), a map of executed proposals, and a map of authorized extensions."),(0,r.kt)("h3",{id:"authorization-check"},"Authorization Check"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is-self-or-extension")," function is a private function that checks if the caller of a function is the contract itself or an authorized extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-private (is-self-or-extension)\n  (ok (asserts! (or (is-eq tx-sender (as-contract tx-sender)) (is-extension contract-caller)) ERR_UNAUTHORIZED))\n)\n\n(define-read-only (is-extension (extension principal))\n  (default-to false (map-get? extensions extension))\n)\n\n(define-read-only (executed-at (proposal <proposal-trait>))\n  (map-get? executedProposals (contract-of proposal))\n)\n")),(0,r.kt)("h3",{id:"extension-management"},"Extension Management"),(0,r.kt)("p",null,"Here we provide a function to enable or disable an extension (",(0,r.kt)("inlineCode",{parentName:"p"},"set-extension"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (set-extension (extension principal) (enabled bool))\n  (begin\n    (try! (is-self-or-extension))\n    (print {event: "extension", extension: extension, enabled: enabled})\n    (ok (map-set extensions extension enabled))\n  )\n)\n')),(0,r.kt)("h3",{id:"proposal-execution"},"Proposal Execution"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," function allows for the execution of a proposal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (execute (proposal <proposal-trait>) (sender principal))\n  (begin\n    (try! (is-self-or-extension))\n    (asserts! (map-insert executedProposals (contract-of proposal) block-height) ERR_ALREADY_EXECUTED)\n    (print {event: "execute", proposal: proposal})\n    (as-contract (contract-call? proposal execute sender))\n  )\n)\n')),(0,r.kt)("p",null,"This function checks if the caller is authorized, inserts the proposal into the ",(0,r.kt)("inlineCode",{parentName:"p"},"executedProposals")," map, and then calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," function of the proposal contract."),(0,r.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"construct")," function is used to bootstrap the grants program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (construct (proposal <proposal-trait>))\n  (let\n    (\n      (sender tx-sender)\n    )\n    (asserts! (is-eq sender (var-get executive)) ERR_UNAUTHORIZED)\n    (var-set executive (as-contract tx-sender))\n    (as-contract (execute proposal sender))\n  )\n)\n")),(0,r.kt)("p",null,"This function checks if the caller is the executive, sets the executive to the contract itself, and then executes the provided proposal."),(0,r.kt)("h3",{id:"extension-requests"},"Extension Requests"),(0,r.kt)("p",null,"The request-extension-callback function allows an extension to request a callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (request-extension-callback (extension <extension-trait>) (memo (buff 34)))\n  (let\n    (\n      (sender tx-sender)\n    )\n    (asserts! (is-extension contract-caller) ERR_INVALID_EXTENSION)\n    (asserts! (is-eq contract-caller (contract-of extension)) ERR_INVALID_EXTENSION)\n    (as-contract (contract-call? extension callback sender memo))\n  )\n)\n")),(0,r.kt)("p",null,"This function checks if the caller is an authorized extension and then calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," function of the extension contract."),(0,r.kt)("p",null,"These are the key components of the ExecutorDAO core contract. Understanding these will help you in building your own extensions and proposals."),(0,r.kt)("h2",{id:"create-your-membership-token"},"Create Your Membership Token"),(0,r.kt)("p",null,"In this section, we will create our first ",(0,r.kt)("inlineCode",{parentName:"p"},"extension"),", a non-transferable membership token, which will be used to grant voting rights on proposals. The token will be initially distributed to certain addresses during the bootstrapping process. However, new minting (distribution) and burning (removal) of tokens can be managed through proposals."),(0,r.kt)("p",null,"To create our membership token, navigate to your project's directory and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new membership-token\n")),(0,r.kt)("p",null,"This will create a new contract in the contracts directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"membership-token.clar"),"."),(0,r.kt)("p",null,"Let's walk through the key components of this contract."),(0,r.kt)("h3",{id:"constants-and-variables"},"Constants and Variables"),(0,r.kt)("p",null,"The contract defines some constants and variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-constant ERR_UNAUTHORIZED (err u2000))\n(define-constant ERR_NOT_TOKEN_OWNER (err u2001))\n(define-constant ERR_MEMBERSHIP_LIMIT_REACHED (err u2002))\n\n(define-fungible-token sGrant)\n\n(define-data-var tokenName (string-ascii 32) "sGrant")\n(define-data-var tokenSymbol (string-ascii 10) "SGT")\n(define-data-var tokenUri (optional (string-utf8 256)) none)\n(define-data-var tokenDecimals uint u6)\n')),(0,r.kt)("p",null,"These constants represent error codes that the contract can return. The variables store the token name, symbol, URI, and decimals. The define-fungible-token function is used to define our sGrant token."),(0,r.kt)("h3",{id:"authorization-check-1"},"Authorization Check"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is-dao-or-extension"),", function is a private function that checks if the caller of a function is the core contract itself or an authorized extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (is-dao-or-extension)\n  (ok (asserts! (or (is-eq tx-sender .core) (contract-call? .core is-extension contract-caller)) ERR_UNAUTHORIZED))\n)\n")),(0,r.kt)("p",null,"This function will allow you to distribute (or burn) tokens to new members, granting them the ability to vote on future grant proposals."),(0,r.kt)("h3",{id:"token-minting-and-burning"},"Token Minting and Burning"),(0,r.kt)("p",null,"The contract provides functions to ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (mint (amount uint) (recipient principal))\n  (begin\n    (try! (is-dao-or-extension))\n    (ft-mint? sGrant amount recipient)\n  )\n)\n\n(define-public (burn (amount uint) (owner principal))\n  (begin\n    (try! (is-dao-or-extension))\n    (ft-burn? sGrant amount owner)\n  )\n)\n")),(0,r.kt)("p",null,"These functions check if the caller is authorized and then mint or burn the specified amount of sGrant tokens. And as you can see, these functions must be executed either through an approved grant proposal or an enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," (more on this later)."),(0,r.kt)("h3",{id:"token-information"},"Token Information"),(0,r.kt)("p",null,"The contract provides functions to get the token's name (",(0,r.kt)("inlineCode",{parentName:"p"},"get-name"),"), symbol (",(0,r.kt)("inlineCode",{parentName:"p"},"get-symbol"),"), decimals (",(0,r.kt)("inlineCode",{parentName:"p"},"get-decimals"),"), balance (",(0,r.kt)("inlineCode",{parentName:"p"},"get-balance"),"), total supply (",(0,r.kt)("inlineCode",{parentName:"p"},"get-total-supply"),"), and URI (",(0,r.kt)("inlineCode",{parentName:"p"},"get-token-uri"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-name)\n  (ok (var-get tokenName))\n)\n\n(define-read-only (get-symbol)\n  (ok (var-get tokenSymbol))\n)\n\n(define-read-only (get-decimals)\n  (ok (var-get tokenDecimals))\n)\n\n(define-read-only (get-balance (who principal))\n  (ok (ft-get-balance sGrant who))\n)\n\n(define-read-only (get-total-supply)\n  (ok (ft-get-supply sGrant))\n)\n\n(define-read-only (get-token-uri)\n  (ok (var-get tokenUri))\n)\n")),(0,r.kt)("p",null,"These functions return the corresponding information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"sGrant")," token."),(0,r.kt)("p",null,"These are the key components of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sGrant")," token contract. Understanding these will help you in managing the distribution and burning of tokens through proposals."),(0,r.kt)("h2",{id:"proposal-submission-contract-extension"},"Proposal Submission Contract (Extension)"),(0,r.kt)("p",null,"In this section, we will create our second ",(0,r.kt)("inlineCode",{parentName:"p"},"extension"),", a proposal submission contract. This contract will allow anyone to propose a grant, which will then be voted on by the token holders."),(0,r.kt)("p",null,"To create our proposal submission contract, navigate to your project's directory and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new proposal-submission\n")),(0,r.kt)("p",null,"This will create a new contract in the contracts directory called proposal-submission.clar."),(0,r.kt)("p",null,"Let's walk through the key components of this contract."),(0,r.kt)("h3",{id:"traits-and-constants"},"Traits and Constants"),(0,r.kt)("p",null,"First, we need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension-trait")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-trait"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(impl-trait .extension-trait.extension-trait)\n(use-trait proposal-trait .proposal-trait.proposal-trait)\n")),(0,r.kt)("p",null,"Next, we define some constants that represent error codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-constant ERR_UNAUTHORIZED (err u3000))\n(define-constant ERR_UNKNOWN_PARAMETER (err u3001))\n")),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("p",null,"We define a map to store the parameters of our contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-map parameters (string-ascii 34) uint)\n")),(0,r.kt)("p",null,"We set the proposal-duration parameter to a default value. This value represents the duration of a proposal in blocks. For example, if a block is mined approximately every 10 minutes, a proposal-duration of 1440 would be approximately 10 days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(map-set parameters "proposal-duration" u1440) ;; ~10 days based on a ~10 minute block time.\n')),(0,r.kt)("h3",{id:"authorization-check-2"},"Authorization Check"),(0,r.kt)("p",null,"The is-dao-or-extension function is a private function that checks if the caller of a function is the core contract itself or an authorized extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (is-dao-or-extension)\n  (ok (asserts! (or (is-eq tx-sender .core) (contract-call? .core is-extension contract-caller)) ERR_UNAUTHORIZED))\n)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The get-parameter function is a read-only function that returns the value of a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-parameter (parameter (string-ascii 34)))\n  (ok (unwrap! (map-get? parameters parameter) ERR_UNKNOWN_PARAMETER))\n)\n")),(0,r.kt)("h3",{id:"proposals"},"Proposals"),(0,r.kt)("p",null,"The propose function allows anyone to propose a grant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (propose (proposal <proposal-trait>) (title (string-ascii 50)) (description (string-utf8 500)))\n  (begin\n    (contract-call? .proposal-voting add-proposal\n      proposal\n      {\n        end-block-height: (+ block-height (try! (get-parameter "proposal-duration"))),\n        proposer: tx-sender,\n        title: title,\n        description: description\n      }\n    )\n  )\n)\n')),(0,r.kt)("p",null,"This function calls the add-proposal function of the proposal-voting contract, passing the proposal contract, the current block height as the start block height, the current block height plus the proposal-duration as the end block height, the sender as the proposer, and the title and description of the proposal."),(0,r.kt)("h3",{id:"extension-callback"},"Extension Callback"),(0,r.kt)("p",null,"The callback function allows the core contract to request a callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (callback (sender principal) (memo (buff 34)))\n  (ok true)\n)\n")),(0,r.kt)("p",null,"These are the key components of the proposal submission contract. Understanding these will help you in managing the submission of proposals."),(0,r.kt)("h2",{id:"proposal-voting-contract-extension"},"Proposal Voting Contract (Extension)"),(0,r.kt)("p",null,"In this section, we will create our third extension, a proposal voting contract. This contract will allow token holders to vote on the proposed grants."),(0,r.kt)("p",null,"To create our proposal voting contract, navigate to your project's directory and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new proposal-voting\n")),(0,r.kt)("p",null,"This will create a new contract in the contracts directory called proposal-voting.clar."),(0,r.kt)("p",null,"Let's walk through the key components of this contract."),(0,r.kt)("h3",{id:"traits-and-constants-1"},"Traits and Constants"),(0,r.kt)("p",null,"First, we need to implement the extension-trait and use the proposal-trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(impl-trait .extension-trait.extension-trait)\n(use-trait proposal-trait .proposal-trait.proposal-trait)\n")),(0,r.kt)("p",null,"Next, we define some constants that represent error codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-constant ERR_UNAUTHORIZED (err u3000))\n(define-constant ERR_PROPOSAL_ALREADY_EXECUTED (err u3002))\n(define-constant ERR_PROPOSAL_ALREADY_EXISTS (err u3003))\n(define-constant ERR_UNKNOWN_PROPOSAL (err u3004))\n(define-constant ERR_PROPOSAL_ALREADY_CONCLUDED (err u3005))\n(define-constant ERR_PROPOSAL_INACTIVE (err u3006))\n(define-constant ERR_PROPOSAL_NOT_CONCLUDED (err u3007))\n(define-constant ERR_NO_VOTES_TO_RETURN (err u3008))\n(define-constant ERR_END_BLOCK_HEIGHT_NOT_REACHED (err u3009))\n(define-constant ERR_DISABLED (err u3010))\n")),(0,r.kt)("h3",{id:"variables-1"},"Variables"),(0,r.kt)("p",null,"We define a map to store the proposals and another map to store the total votes of each member:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-map proposals\n  principal\n  {\n    votes-for: uint,\n    votes-against: uint,\n    end-block-height: uint,\n    concluded: bool,\n    passed: bool,\n    proposer: principal,\n    title: (string-ascii 50),\n    description: (string-utf8 500)\n  }\n)\n\n(define-map member-total-votes {proposal: principal, voter: principal} uint)\n")),(0,r.kt)("h3",{id:"authorization-check-3"},"Authorization Check"),(0,r.kt)("p",null,"The is-dao-or-extension function is a private function that checks if the caller of a function is the core contract itself or an authorized extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (is-dao-or-extension)\n  (ok (asserts! (or (is-eq tx-sender .core) (contract-call? .core is-extension contract-caller)) ERR_UNAUTHORIZED))\n)\n")),(0,r.kt)("h3",{id:"proposals-1"},"Proposals"),(0,r.kt)("p",null,"The add-proposal function allows the core contract or an authorized extension to add a new proposal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (add-proposal (proposal <proposal-trait>) (data {end-block-height: uint, proposer: principal, title: (string-ascii 50), description: (string-utf8 500)}))\n  (begin\n    (try! (is-dao-or-extension))\n    (asserts! (is-none (contract-call? .core executed-at proposal)) ERR_PROPOSAL_ALREADY_EXECUTED)\n    (print {event: "propose", proposal: proposal, proposer: tx-sender})\n    (ok (asserts! (map-insert proposals (contract-of proposal) (merge {votes-for: u0, votes-against: u0, concluded: false, passed: false} data)) ERR_PROPOSAL_ALREADY_EXISTS))\n  )\n)\n')),(0,r.kt)("h3",{id:"votes"},"Votes"),(0,r.kt)("p",null,"The vote function allows a token holder to vote on a proposal. It checks if the voter has at least 1 membership-token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (vote (amount uint) (for bool) (proposal principal))\n  (let\n    (\n      (proposal-data (unwrap! (map-get? proposals proposal) ERR_UNKNOWN_PROPOSAL))\n    )\n    (asserts! (>= (unwrap-panic (contract-call? .membership-token get-balance tx-sender)) u1) ERR_UNAUTHORIZED)\n    (map-set member-total-votes {proposal: proposal, voter: tx-sender}\n      (+ (get-current-total-votes proposal tx-sender) amount)\n    )\n    (map-set proposals proposal\n      (if for\n        (merge proposal-data {votes-for: (+ (get votes-for proposal-data) amount)})\n        (merge proposal-data {votes-against: (+ (get votes-against proposal-data) amount)})\n      )\n    )\n    (ok (print {event: "vote", proposal: proposal, voter: tx-sender, for: for, amount: amount}))\n  )\n)\n\n(define-read-only (get-current-total-votes (proposal principal) (voter principal))\n  (default-to u0 (map-get? member-total-votes {proposal: proposal, voter: voter}))\n)\n')),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"conclude")," function allows the core contract or an authorized extension to conclude a proposal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (conclude (proposal <proposal-trait>))\n  (let\n    (\n      (proposal-data (unwrap! (map-get? proposals (contract-of proposal)) ERR_UNKNOWN_PROPOSAL))\n      (passed (> (get votes-for proposal-data) (get votes-against proposal-data)))\n    )\n    (asserts! (not (get concluded proposal-data)) ERR_PROPOSAL_ALREADY_CONCLUDED)\n    (asserts! (>= block-height (get end-block-height proposal-data)) ERR_END_BLOCK_HEIGHT_NOT_REACHED)\n    (map-set proposals (contract-of proposal) (merge proposal-data {concluded: true, passed: passed}))\n    (print {event: "conclude", proposal: proposal, passed: passed})\n    (and passed (try! (contract-call? .core execute proposal tx-sender)))\n    (ok passed)\n  )\n)\n')),(0,r.kt)("p",null,"This function concludes a proposal. It first retrieves the proposal data and checks if the proposal has more votes for than against. It then asserts that the proposal has not already been concluded and that the current block height is greater than or equal to the end block height of the proposal. If these conditions are met, it sets the concluded and passed fields of the proposal data and prints an event. If the proposal passed, it also tries to execute the proposal. The function returns whether the proposal passed."),(0,r.kt)("h3",{id:"extension-callback-1"},"Extension Callback"),(0,r.kt)("p",null,"The callback function allows the core contract to request a callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (callback (sender principal) (memo (buff 34)))\n  (ok true)\n)\n")),(0,r.kt)("p",null,"Congratulations! You've successfully created the foundations for a Decentralized Grants Program!"),(0,r.kt)("h2",{id:"challenges"},"Challenges"),(0,r.kt)("p",null,"If you are here for the Hiro Hacks prizes (see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hiro.so/hacks"},"overview page")," for more details), you've come to the right section. The following challenges are additional features you can implement to further differentiate your project. Feel free to add any other features you want."),(0,r.kt)("span",{className:"inline-flex items-center rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 mb-2 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/10 dark:ring-green-400/20"},"Starter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialize Your Grants Program"),": Now that we have our core extension contracts, we can initialize the project. The way we do this is through the ",(0,r.kt)("inlineCode",{parentName:"p"},"construct")," function we wrote inside our ",(0,r.kt)("inlineCode",{parentName:"p"},"core.clar")," contract. Create your first proposal enabling your extensions (",(0,r.kt)("inlineCode",{parentName:"p"},"membership-token"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-submission"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-voting"),") and distribute the initial token allocation to addresses responsible for voting on grants. If you need a little more guidance, check out the example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarvinJanssen/executor-dao/blob/main/contracts/proposals/edp000-bootstrap.clar"},"here"),"."),(0,r.kt)("span",{className:"inline-flex items-center rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 mb-2 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/10 dark:ring-green-400/20"},"Starter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create Grant Proposals"),": After initializing your grants program, the next step is to create grant proposals. This involves using the ",(0,r.kt)("inlineCode",{parentName:"p"},"propose")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-submission")," contract. This function allows anyone to propose a grant, which will then be voted on by the token holders. The proposal includes details such as the title, description, and the proposal contract. Once a proposal is submitted, it can be voted on during the voting period defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-duration")," parameter."),(0,r.kt)("span",{className:"inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 mb-2 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/10 dark:ring-yellow-400/20"},"Intermediate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implement Milestone-Based funding"),": To implement milestone-based funding, you'll need to create a new extension contract that tracks the progress of each grant proposal. This extension will manage the milestones for each grant, allowing funds to be released as each milestone is achieved. To enable this extension, you'll need to create a proposal using the propose function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposal-submission")," contract. Once enabled, the milestone-based funding extension will provide a more structured and accountable way to distribute funds, ensuring that the grant recipients are making progress before they receive their next round of funding."),(0,r.kt)("span",{className:"inline-flex items-center rounded-md bg-orange-50 dark:bg-orange-400/10 px-2 py-1 mb-2 text-xs font-medium text-orange-700 dark:text-orange-400 ring-1 ring-inset ring-orange-600/10 dark:ring-orange-400/20"},"Advanced"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UI Integration"),": Using the provided starter template, integrate your contracts using Stacks.js. This will allow users to submit proposals, vote on them, and view the status of their proposals directly from the UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { callReadOnlyFunction, standardPrincipalCV } from '@stacks/transactions';\n\nconst senderAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';\nconst contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';\nconst contractName = 'core';\nconst functionName = 'is-extension';\nconst extensionAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.membership-token';\n\nconst functionArgs = [standardPrincipalCV(extensionAddress)];\n\nawait callReadOnlyFunction({\n  network,\n  contractAddress,\n  contractName,\n  functionName,\n  functionArgs,\n  senderAddress,\n});\n")),(0,r.kt)("h2",{id:"prizes-and-submissions"},"Prizes and Submissions"),(0,r.kt)("p",null,"The submission deadline for prize eligibility has now closed."),(0,r.kt)("p",null,"However, you can still ",(0,r.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hirohacks"},"submit your project here")," to talk to our team and get notified the next time a new hack drops."),(0,r.kt)("p",null,"View the official Hiro Hacks rules ",(0,r.kt)("a",{parentName:"p",href:"https://www.hiro.so/hiro-hacks-rules"},"here"),"."))}k.isMDXComponent=!0}}]);