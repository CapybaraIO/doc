"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[7440],{69855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(67294),i=n(3905),o=n(33913),l=n(1571);const s={title:"Build a Friend.tech Clone"},c=void 0,p={unversionedId:"hacks/build-a-friend-tech-clone",id:"hacks/build-a-friend-tech-clone",title:"Build a Friend.tech Clone",description:"<meta",source:"@site/docs/hacks/build-a-friend-tech-clone.mdx",sourceDirName:"hacks",slug:"/hacks/build-a-friend-tech-clone",permalink:"/doc/hacks/build-a-friend-tech-clone",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/hacks/build-a-friend-tech-clone.mdx",tags:[],version:"current",frontMatter:{title:"Build a Friend.tech Clone"},sidebar:"hacks",previous:{title:"Hiro Hacks",permalink:"/doc/hacks"},next:{title:"Build a Decentralized Grants Program",permalink:"/doc/hacks/build-a-decentralized-grants-program"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Clone the Starter Template",id:"clone-the-starter-template",level:2},{value:"Create Your Contract",id:"create-your-contract",level:2},{value:"Defining <code>Key</code> Balances and Supply",id:"defining-key-balances-and-supply",level:3},{value:"Calculating <code>Key</code> Prices",id:"calculating-key-prices",level:3},{value:"Creating, Buying, and Selling <code>Keys</code>",id:"creating-buying-and-selling-keys",level:3},{value:"Verifying Keyholders",id:"verifying-keyholders",level:3},{value:"Testing Locally",id:"testing-locally",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Prizes and Submissions",id:"prizes-and-submissions",level:2}],k={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://docs.hiro.so/hacks/build-a-friend-tech-clone"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Hiro Hacks | Build a Decentralized Social Network"}),(0,i.kt)("meta",{property:"og:description",content:"Learn how to build a decentralized social network on Stacks."}),(0,i.kt)("meta",{property:"og:image",content:"/img/hack1-og.png"})),(0,i.kt)("h1",{id:"build-a-friendtech-clone"},"Build a Friend.tech Clone"),(0,i.kt)("div",{className:"gap-3 flex flex-wrap mb-6"},(0,o.Z)(new Date("2023-12-06"))?(0,i.kt)(r.Fragment,null,(0,i.kt)("a",{className:"inline-block bg-neutral-200 hover:bg-neutral-100 rounded-md text-sm text-neutral-700 px-2 py-1 hover:text-neutral-700 hover:no-underline transition-colors",href:"https://survey.hiro.so/hirohacks",target:"_blank"},"Submit your project"),(0,i.kt)("a",{className:"inline-block bg-violet-300 hover:bg-violet-200 rounded-md text-sm text-violet-800 px-2 py-1 hover:text-violet-800 hover:no-underline transition-colors",href:"https://stacks.chat"},"Discord Support ",(0,i.kt)("span",{className:"i-bi-discord align-text-bottom text-lg"}))):(0,i.kt)(r.Fragment,null,(0,i.kt)("a",{className:"inline-block bg-green-300 rounded-md text-sm text-green-800 px-2 py-1 hover:text-green-800 hover:no-underline transition-colors cursor-default",href:"#"},"Open"),(0,i.kt)("a",{className:"inline-block bg-neutral-200 hover:bg-neutral-100 rounded-md text-sm text-neutral-700 px-2 py-1 hover:text-neutral-700 hover:no-underline transition-colors",href:"https://survey.hiro.so/hirohacks",target:"_blank"},"Submission deadline ",(0,l.Z)(new Date("2023-12-06"),{addSuffix:!0})),(0,i.kt)("a",{className:"inline-block bg-violet-300 hover:bg-violet-200 rounded-md text-sm text-violet-800 px-2 py-1 hover:text-violet-800 hover:no-underline transition-colors",href:"https://stacks.chat"},"Discord Support ",(0,i.kt)("span",{className:"i-bi-discord align-text-bottom text-lg"})))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"What if we could gamify\u2014and reward\u2014being a friend? That's the idea behind Friend.tech, the decentralized social network that took Web3 by storm. In this hack, we'll recreate Friend.tech on the Stacks blockchain."),(0,i.kt)("p",null,"There are a few key components to this hack: namely, ",(0,i.kt)("strong",{parentName:"p"},"subjects")," that have ",(0,i.kt)("strong",{parentName:"p"},"keys")," that anyone can buy. These keys start off low in price, but as people buy more keys, the price goes up faster and faster, rewarding friends who bought keys early. Key owners can sell their keys for a profit, or they can hold on to them to signal their friendship and build reputation. These keys can also be used to access exclusive chatrooms with their corresponding subject, receive exclusive airdrops, and more"),(0,i.kt)("p",null,"This Hack walks you through the basics of building a Friend.tech clone. There are also challenges at the end\u2014opportunities to stretch your skills, differentiate your application, and ",(0,i.kt)("strong",{parentName:"p"},"win prizes"),". ",(0,i.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hirohacks"},"Submit your project here!")),(0,i.kt)("h2",{id:"clone-the-starter-template"},"Clone the Starter Template"),(0,i.kt)("p",null,"In this section, we'll start by setting up your development environment. We've prepared a repository that includes an initialized Clarinet project and a React frontend with some boilerplate code and all the required packages."),(0,i.kt)("p",null,"To clone the repository, open your terminal and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hirosystems/hiro-hacks-template.git\ncd hiro-hacks-template\n")),(0,i.kt)("h2",{id:"create-your-contract"},"Create Your Contract"),(0,i.kt)("p",null,"Before we begin, we're assuming that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"clarinet")," installed and a basic understanding of how to use it. If you haven't installed ",(0,i.kt)("inlineCode",{parentName:"p"},"clarinet")," yet, you can do so by referring to our ",(0,i.kt)("a",{parentName:"p",href:"/doc/clarinet/getting-started"},"installation guide"),"."),(0,i.kt)("p",null,"To create our contract, navigate to your project's directory and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet contract new keys\n")),(0,i.kt)("p",null,"This will create a new contract in the ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts")," directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"keys.clar"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note"))),(0,i.kt)("p",{parentName:"blockquote"},"If you don't want to clone the provided starter template, you can create your ",(0,i.kt)("inlineCode",{parentName:"p"},"Clarinet")," project manually by running ",(0,i.kt)("inlineCode",{parentName:"p"},"clarinet new friendtech && cd friendtech"),".")),(0,i.kt)("h3",{id:"defining-key-balances-and-supply"},"Defining ",(0,i.kt)("inlineCode",{parentName:"h3"},"Key")," Balances and Supply"),(0,i.kt)("p",null,"Inside our ",(0,i.kt)("inlineCode",{parentName:"p"},"keys.clar")," contract, we need to keep track of the balance of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," for each user (or ",(0,i.kt)("em",{parentName:"p"},"holder"),") and the total supply of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," for each subject. We can do this using Clarity's ",(0,i.kt)("inlineCode",{parentName:"p"},"define-map")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-map keysBalance { subject: principal, holder: principal } uint)\n(define-map keysSupply { subject: principal } uint)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"keysBalance")," stores each holder's ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," balance for a given subject and the ",(0,i.kt)("inlineCode",{parentName:"p"},"keysSupply")," stores the total supply for each subject. These maps will be used in our contract's functions to manage the creation, buying, and selling of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),"."),(0,i.kt)("h3",{id:"calculating-key-prices"},"Calculating ",(0,i.kt)("inlineCode",{parentName:"h3"},"Key")," Prices"),(0,i.kt)("p",null,"The next thing we need to do is define a function that calculates the price of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," for a given a ",(0,i.kt)("inlineCode",{parentName:"p"},"supply")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),". We can do this by defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"get-price")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-price (supply uint) (amount uint))\n  (let (\n    (base-price u10) ;; Base price per key in micro-STX\n    (price-change-factor u100) ;; Factor to control the rate of price change\n  )\n  ;; Average price per token over the range of supply\n  (/ \n    (+ \n      (* base-price amount) \n      (* amount (/ (+ (* supply supply) (* supply amount) (* amount amount)) (* u3 price-change-factor)))\n    )\n    amount\n  )\n))\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"get-price")," function calculates the price of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," using a formula that calculates the average price per token over the range of supply affected. This can be done by integrating the price function over the range of supply and dividing by the amount."),(0,i.kt)("h3",{id:"creating-buying-and-selling-keys"},"Creating, Buying, and Selling ",(0,i.kt)("inlineCode",{parentName:"h3"},"Keys")),(0,i.kt)("p",null,"These functions form the core of the contract's operations, enabling users to manage keys through buying and selling."),(0,i.kt)("p",null,"Let's first take a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"buy-keys")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (buy-keys (subject principal) (amount uint))\n  (let\n    (\n      (supply (default-to u0 (map-get? keysSupply { subject: subject })))\n      (price (get-price supply amount))\n    )\n    (if (or (> supply u0) (is-eq tx-sender subject))\n      (begin\n        (match (stx-transfer? price tx-sender (as-contract tx-sender))\n          success\n          (begin\n            (map-set keysBalance { subject: subject, holder: tx-sender }\n              (+ (default-to u0 (map-get? keysBalance { subject: subject, holder: tx-sender })) amount)\n            )\n            (map-set keysSupply { subject: subject } (+ supply amount))\n            (ok true)\n          )\n          error\n          (err u2)\n        )\n      )\n      (err u1)\n    )\n  )\n)\n")),(0,i.kt)("p",null,"This function allows subjects to create their first ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),", initiating their supply in the contract. The transaction only succeeds if the ",(0,i.kt)("em",{parentName:"p"},"subject")," is creating the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," or if there are already ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," in circulation, ie ",(0,i.kt)("inlineCode",{parentName:"p"},"principal-a")," cannot buy the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"principal-b"),"."),(0,i.kt)("p",null,"Next up, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sell-keys")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (sell-keys (subject principal) (amount uint))\n  (let\n    (\n      (balance (default-to u0 (map-get? keysBalance { subject: subject, holder: tx-sender })))\n      (supply (default-to u0 (map-get? keysSupply { subject: subject })))\n      (price (get-price (- supply amount) amount))\n      (recipient tx-sender)\n    )\n    (if (and (>= balance amount) (or (> supply u0) (is-eq tx-sender subject)))\n      (begin\n        (match (as-contract (stx-transfer? price tx-sender recipient))\n          success\n          (begin\n            (map-set keysBalance { subject: subject, holder: tx-sender } (- balance amount))\n            (map-set keysSupply { subject: subject } (- supply amount))\n            (ok true)\n          )\n          error\n          (err u2)\n        )\n      )\n      (err u1)\n    )\n  )\n)\n")),(0,i.kt)("p",null,"This is more or less the same logic as the ",(0,i.kt)("inlineCode",{parentName:"p"},"buy-keys")," function, but instead we deduct the ",(0,i.kt)("inlineCode",{parentName:"p"},"keysBalance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"keysSupply")," and check if the seller owns enough keys and if they are authorized to sell."),(0,i.kt)("h3",{id:"verifying-keyholders"},"Verifying Keyholders"),(0,i.kt)("p",null,"Now that we have the ability to buy and sell ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),", we need a way to verify if a user is a keyholder. We can do this by defining an ",(0,i.kt)("inlineCode",{parentName:"p"},"is-keyholder")," read-only function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (is-keyholder (subject principal) (holder principal))\n  (>= (default-to u0 (map-get? keysBalance { subject: subject, holder: holder })) u1)\n)\n")),(0,i.kt)("p",null,"This function checks if the ",(0,i.kt)("inlineCode",{parentName:"p"},"keysBalance")," for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"subject")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"holder")," is greater than or equal to 1. If it is, then the user ",(0,i.kt)("inlineCode",{parentName:"p"},"is-keyholder"),"."),(0,i.kt)("h2",{id:"testing-locally"},"Testing Locally"),(0,i.kt)("p",null,"Let's make sure our contract is valid and doesn't have any errors. To do this, we can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clarinet check\n")),(0,i.kt)("p",null,"Next, let's check some of our contract functionality inside ",(0,i.kt)("inlineCode",{parentName:"p"},"clarinet console"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},";; Get the price of 100 keys when the supply is 0\n(contract-call? .keys get-price u0 u100) ;; u10010\n\n;; Initial purchase of keys\n(contract-call? .keys buy-keys tx-sender u100)\n\n;; Check if the sender is a keyholder\n(contract-call? .keys is-keyholder tx-sender tx-sender) ;; true\n\n(contract-call? .keys is-keyholder tx-sender  'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5) ;; false\n")),(0,i.kt)("p",null,"Congratulations! You've successfully created your contract. You've laid the groundwork for a decentralized social network, just like Friend.tech."),(0,i.kt)("h2",{id:"challenges"},"Challenges"),(0,i.kt)("p",null,"If you are here for the Hiro Hacks prizes (see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/hacks"},"overview page")," for more details), you've come to the right section. The following challenges are additional features you can implement to further differentiate your project. Feel free to add any other features you want."),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 mb-2 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/10 dark:ring-green-400/20"},"Starter"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Balance and Supply Query Functions"),": Add two new read-only functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"get-keys-balance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get-keys-supply"),". These functions will provide valuable information to users about the distribution and availability of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),", and can be used in various parts of your application to display this information to users."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-keys-balance (subject principal) (holder principal))\n  ;; Return the keysBalance for the given subject and holder\n)\n\n(define-read-only (get-keys-supply (subject principal))\n  ;; Return the keysSupply for the given subject\n)\n")),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-green-50 dark:bg-green-400/10 px-2 py-1 mb-2 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/10 dark:ring-green-400/20"},"Starter"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Price Query Functions"),": Add two new read-only functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"get-buy-price")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get-sell-price"),". These helper functions will allow users to query the current price for buying or selling a specific amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"keys")," for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-buy-price (subject principal) (amount uint))\n  ;; Implement buy price logic\n)\n\n(define-read-only (get-sell-price (subject principal) (amount uint))\n  ;; Implement sell price logic\n)\n")),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 mb-2 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/10 dark:ring-yellow-400/20"},"Intermediate"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fee Management"),": When a user buys or sells ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),", we might want to introduce a fee, either at the protocol or subject level that can be distributed accordingly. Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeePercent")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"subjectFeePercent")," variable, as well as a destination Stacks principal ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeeDestination")," for this new revenue. Now make sure to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"buy-keys")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sell-keys")," functions to incorporate these fees and ",(0,i.kt)("inlineCode",{parentName:"p"},"stx-transfer?")," into the buying and selling logic. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},";; Change the fee values as you wish\n(define-data-var protocolFeePercent uint u200) ;; or subjectFeePercent\n(define-data-var protocolFeeDestination principal tx-sender)\n")),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 mb-2 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/10 dark:ring-yellow-400/20"},"Intermediate"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Access Control"),": In a real-world application, you might need to adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeePercent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subjectFeePercent"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeeDestination")," values over time. However, you wouldn't want just anyone to be able to make these changes. This is where access control comes in. Specifically, you should add a set-fee function (or functions) that allows only a designated ",(0,i.kt)("inlineCode",{parentName:"p"},"contractOwner")," to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeePercent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subjectFeePercent"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolFeeDestination")," values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-public (set-protocol-fee-percent (feePercent uint))\n  ;; Check if the caller is the contractOwner\n  ;; Update the protocolFeePercent value\n)\n")),(0,i.kt)("p",null,"Think about how you can verify whether the caller of the function is indeed the ",(0,i.kt)("inlineCode",{parentName:"p"},"contractOwner"),". Also, consider what kind of feedback the function should give when someone else tries to call it. Test your implementation to ensure it works as expected."),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400/10 px-2 py-1 mb-2 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/10 dark:ring-yellow-400/20"},"Intermediate"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UI Integration"),": Using the provided ",(0,i.kt)("a",{parentName:"p",href:"#clone-the-starter-template"},"starter template"),", integrate your contract using ",(0,i.kt)("a",{parentName:"p",href:"/doc/stacks.js/"},"Stacks.js"),". For example, if you were calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"is-keyholder")," function, your code might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { callReadOnlyFunction, standardPrincipalCV } from '@stacks/transactions';\n\nconst senderAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';\nconst contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';\nconst contractName = 'keys';\nconst functionName = 'is-keyholder';\n\nconst functionArgs = [standardPrincipalCV(senderAddress)];\n\nawait callReadOnlyFunction({\n  network,\n  contractAddress,\n  contractName,\n  functionName,\n  functionArgs,\n  senderAddress,\n});\n")),(0,i.kt)("p",null,"By using a similar pattern to the code above, you will be able to ",(0,i.kt)("strong",{parentName:"p"},"show/hide chatrooms based on keyholdings"),", ",(0,i.kt)("strong",{parentName:"p"},"create an exchange for buying/selling keys"),", or ",(0,i.kt)("strong",{parentName:"p"},"add a search for displaying subject keyholdings"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note"))),(0,i.kt)("p",{parentName:"blockquote"},"If you are planning to experiment with your contract on ",(0,i.kt)("inlineCode",{parentName:"p"},"Devnet"),", make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"clarinet integrate")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hiro.so/clarinet/guides/clarinet-integrate"},"to deploy and test your contract locally"),". You can then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Devnet")," network when calling your contract in the ",(0,i.kt)("a",{parentName:"p",href:"https://leather.io/install-extension"},"Leather wallet"),".")),(0,i.kt)("span",{className:"inline-flex items-center rounded-md bg-orange-50 dark:bg-orange-400/10 px-2 py-1 mb-2 text-xs font-medium text-orange-700 dark:text-orange-400 ring-1 ring-inset ring-orange-600/10 dark:ring-orange-400/20"},"Advanced"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Message Signature"),": To further enhance the security and authenticity of your app, try to implemement a ",(0,i.kt)("em",{parentName:"p"},"login")," feature using ",(0,i.kt)("a",{parentName:"p",href:"../stacks.js/guides/sign-messages"},"Message Signing"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { openSignatureRequestPopup } from '@stacks/connect';\nimport { verifyMessageSignatureRsv } from '@stacks/encryption';\nimport { StacksMocknet } from '@stacks/network';\nimport { getAddressFromPublicKey } from '@stacks/transactions';\n\nconst message = 'Log in to chatroom';\nconst network = new StacksMocknet();\n\nopenSignatureRequestPopup({\n  message,\n  network,\n  onFinish: async ({ publicKey, signature }) => {\n    const verified = verifyMessageSignatureRsv({\n      message,\n      publicKey,\n      signature\n    });\n    if (verified) {\n      // The signature is verified, so now we can check if the user is a keyholder\n      const address = getAddressFromPublicKey(publicKey, network.version);\n      const isKeyHolder = await checkIsKeyHolder(address);\n      if (isKeyHolder) {\n        // The user is a keyholder, so they are authorized to access the chatroom\n      }\n    }\n  }\n});\n")),(0,i.kt)("p",null,"The signed message will serve as a ",(0,i.kt)("em",{parentName:"p"},"proof of identity")," - similar to a login, verifying that the user is indeed who they claim to be. This can be particularly useful in a chatroom setting, where only ",(0,i.kt)("inlineCode",{parentName:"p"},"is-keyholder")," users are allowed to send messages."),(0,i.kt)("h2",{id:"prizes-and-submissions"},"Prizes and Submissions"),(0,i.kt)("p",null,"The submission deadline for prize eligibility has now closed."),(0,i.kt)("p",null,"However, you can still ",(0,i.kt)("a",{parentName:"p",href:"https://survey.hiro.so/hirohacks"},"submit your project here")," to talk to our team and get notified the next time a new hack drops."),(0,i.kt)("p",null,"View the official Hiro Hacks rules ",(0,i.kt)("a",{parentName:"p",href:"https://www.hiro.so/hiro-hacks-rules"},"here"),"."))}m.isMDXComponent=!0}}]);