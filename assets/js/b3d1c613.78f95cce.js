"use strict";(self.webpackChunk_hirosystems_docs=self.webpackChunk_hirosystems_docs||[]).push([[6475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Angular Authenticator"},s=void 0,r={unversionedId:"stacks.js/guides/how-to-use-stacks-connect-with-angular",id:"stacks.js/guides/how-to-use-stacks-connect-with-angular",title:"Angular Authenticator",description:"In this tutorial, you'll learn how to work with Stacks Connect when using Angular as your framework of choice. It builds on what you've learnt in the Authentication Overview.",source:"@site/docs/stacks.js/guides/how-to-use-stacks-connect-with-angular.md",sourceDirName:"stacks.js/guides",slug:"/stacks.js/guides/how-to-use-stacks-connect-with-angular",permalink:"/doc/stacks.js/guides/how-to-use-stacks-connect-with-angular",draft:!1,editUrl:"https://github.com/CapybaraIO/doc/tree/main/docs/stacks.js/guides/how-to-use-stacks-connect-with-angular.md",tags:[],version:"current",lastUpdatedAt:1703206175,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Angular Authenticator"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Scaffold and run",id:"step-1-scaffold-and-run",level:2},{value:"Step 2: Add Stacks connect",id:"step-2-add-stacks-connect",level:2},{value:"Step 3: Declare missing globals",id:"step-3-declare-missing-globals",level:2},{value:"Step 4: Authentication flow",id:"step-4-authentication-flow",level:2},{value:"Sign-in button",id:"sign-in-button",level:3},{value:"Connecting Stacks connect",id:"connecting-stacks-connect",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Loading text",id:"loading-text",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you'll learn how to work with Stacks Connect when using ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," as your framework of choice. It builds on what you've learnt in the ",(0,o.kt)("a",{parentName:"p",href:"/build-apps/authentication"},"Authentication Overview"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This article presumes some familiarity with ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular"),", as well as ",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"Reactive Extensions (RxJS)"),".")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We'll be using the ",(0,o.kt)("a",{parentName:"p",href:"https://cli.angular.io/"},"Angular CLI")," to scaffold the project, so make sure you've got the latest version installed. We're using version ",(0,o.kt)("inlineCode",{parentName:"p"},"10.2.0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --global @angular/cli\n")),(0,o.kt)("h2",{id:"step-1-scaffold-and-run"},"Step 1: Scaffold and run"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ng new")," command to scaffold a new project. We've named ours ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-stacks-connect"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ng new --minimal --inline-style --inline-template\n")),(0,o.kt)("p",null,"You'll be asked to enter some preferences: whether your app with use routing, and whether you want to use a CSS preprocessor like SASS. For sake of this tutorial, we're keeping things simple. No routing. No preprocessing."),(0,o.kt)("p",null,"Inside the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-stacks-connect")," directory, let's boot up the development server which defaults to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4200"},"localhost:4200"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ng-stacks-connect\nng serve\n")),(0,o.kt)("h2",{id:"step-2-add-stacks-connect"},"Step 2: Add Stacks connect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save @stacks/connect blockstack\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We're also installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockstack")," package, as it's a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies"},"peer dependency")," of Stacks Connect")),(0,o.kt)("h2",{id:"step-3-declare-missing-globals"},"Step 3: Declare missing globals"),(0,o.kt)("p",null,"Some dependencies of these packages were written for a Nodejs environment. In a browser environment, tools such as Webpack (v4) often abstract the polyfilling of Nodejs specific APIs. Using the Angular CLI, this must be done manually."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Buffer"),", for example, is a global class in a Nodejs environment. In the browser is it ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," so we must declare it to avoid runtime exceptions")),(0,o.kt)("p",null,"Add the following snippet to your ",(0,o.kt)("inlineCode",{parentName:"p"},"src/polyfills.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(window as any).global = window;\n(window as any).process = {\n  version: '',\n  env: {},\n};\nglobal.Buffer = require('buffer').Buffer;\n")),(0,o.kt)("p",null,"This does 3 things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Declares ",(0,o.kt)("inlineCode",{parentName:"li"},"global")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"window")),(0,o.kt)("li",{parentName:"ol"},"Declares a global ",(0,o.kt)("inlineCode",{parentName:"li"},"Buffer")," class"),(0,o.kt)("li",{parentName:"ol"},"Declares a global ",(0,o.kt)("inlineCode",{parentName:"li"},"process")," object")),(0,o.kt)("h2",{id:"step-4-authentication-flow"},"Step 4: Authentication flow"),(0,o.kt)("p",null,"Now everything's set up, we're ready to create our auth components"),(0,o.kt)("p",null,"We can use the CLI's generator to scaffold components."),(0,o.kt)("h3",{id:"sign-in-button"},"Sign-in button"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ng generate component\n")),(0,o.kt)("p",null,"Enter the name: ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks-sign-in-button"),". You'll find the newly generated component in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/stacks-sign-in-button/stacks-sign-in-button.component.ts"),"."),(0,o.kt)("p",null,"Here's our Sign In button component. Let's replace this example with the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'app-stacks-sign-in-button',\n  template: ` <button (click)=\"onSignIn.emit()\">Sign In</button> `,\n})\nexport class StacksSignInButtonComponent {\n  @Output() onSignIn = new EventEmitter();\n}\n")),(0,o.kt)("h3",{id:"connecting-stacks-connect"},"Connecting Stacks connect"),(0,o.kt)("p",null,"Let's add this button to our ",(0,o.kt)("inlineCode",{parentName:"p"},"app-root")," component (",(0,o.kt)("inlineCode",{parentName:"p"},"app.component.ts"),") and wire up the ",(0,o.kt)("inlineCode",{parentName:"p"},"(onSignIn)")," event. Make sure to import ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"rxjs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Component({\n  selector: 'app-root',\n  template: `<app-stacks-sign-in-button\n    (onSignIn)=\"stacksAuth$.next()\"\n  ></app-stacks-sign-in-button>`,\n})\nexport class AppComponent {\n  stacksAuth$ = new Subject<void>();\n}\n")),(0,o.kt)("p",null,"Here we're using an Rxjs ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," to represent a stream of sign in events. ",(0,o.kt)("inlineCode",{parentName:"p"},"stacksAuth$")," will emit when we should trigger the sign in action."),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"First, describe the auth options we need to pass to Connect. ",(0,o.kt)("a",{parentName:"p",href:"/build-apps/authentication"},"Learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"AuthOptions")," here"),". Let's modify the default component to look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { AuthOptions, FinishedData } from '@stacks/connect';\nimport { ReplaySubject, Subject } from 'rxjs';\nimport { switchMap } from 'rxjs/operators';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <app-stacks-sign-in-button (onSignIn)=\"stacksAuth$.next()\"></app-stacks-sign-in-button>\n    <code>\n      <pre>{{ authResponse$ | async | json }}</pre>\n    </code>\n  `,\n})\nexport class AppComponent {\n  stacksAuth$ = new Subject<void>();\n  authResponse$ = new ReplaySubject<FinishedData>(1);\n\n  authOptions: AuthOptions = {\n    finished: response => this.authResponse$.next(response),\n    appDetails: {\n      name: 'Angular Stacks Connect Demo',\n      icon: 'http://placekitten.com/g/100/100',\n    },\n  };\n\n  ngOnInit() {\n    this.stacksAuth$\n      .pipe(switchMap(() => import('@stacks/connect')))\n      .subscribe(connectLibrary => connectLibrary.showBlockstackConnect(this.authOptions));\n  }\n}\n")),(0,o.kt)("p",null,"Let's run through what's going on. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"authOptions")," field, we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"finished")," handler to emit a value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"authResponse$")," which uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReplaySubject")," to persist the latest response."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A ",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/api/index/class/ReplaySubject"},(0,o.kt)("inlineCode",{parentName:"a"},"ReplaySubject"))," is an Observable that starts without an initial value, but replays the latest x emissions when subscribed to")),(0,o.kt)("p",null,"For initial load performance, we're using ",(0,o.kt)("inlineCode",{parentName:"p"},'import("@stacks/connect")')," to only load the Stacks Connect library when it's needed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"switchMap"),' operators "switches" out the ',(0,o.kt)("inlineCode",{parentName:"p"},"stacksAuth$")," event for the library."),(0,o.kt)("p",null,"The output of ",(0,o.kt)("inlineCode",{parentName:"p"},"authResponse$")," can be added to the template for debugging purposes. This uses Angular's ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," pipes."),(0,o.kt)("h3",{id:"loading-text"},"Loading text"),(0,o.kt)("p",null,"One problem with the current implementation is that there's a network delay while waiting to load the Connect library. Let's keep track of the loading state and display some text in the sign in button component. You'll need to ",(0,o.kt)("inlineCode",{parentName:"p"},"import { tap, switchMap } from 'rxjs/operators';"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// src/app/app.component.ts\nisLoadingConnect$ = new BehaviorSubject(false);\n\nngOnInit() {\n  this.stacksAuth$\n    .pipe(\n      tap(() => this.isLoadingConnect$.next(true)),\n      switchMap(() => import("@stacks/connect")),\n      tap(() => this.isLoadingConnect$.next(false))\n    )\n    .subscribe(connectLibrary =>\n      connectLibrary.showBlockstackConnect(this.authOptions)\n    );\n}\n')),(0,o.kt)("p",null,"We can keep track of it with a ",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/api/index/class/BehaviorSubject"},"BehaviorSubject"),", which always emits its initial value when subscribed to."),(0,o.kt)("p",null,"Let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},"loading")," input to the ",(0,o.kt)("inlineCode",{parentName:"p"},"StacksSignInButtonComponent")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"highlight=3,6",highlight:"3,6"},"@Component({\n  selector: 'app-stacks-sign-in-button',\n  template: `\n    <button (click)=\"onSignIn.emit()\">\n      {{ loading ? 'Loading' : 'Sign in' }}\n    </button>\n  `,\n})\nexport class StacksSignInButtonComponent {\n  @Input() loading: boolean;\n  @Output() onSignIn = new EventEmitter();\n}\n")),(0,o.kt)("p",null,"Then, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoadingConnect$")," Observable into the component, and hide it when the user has already authenticated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'// Edit src/app/app.component.ts\n<app-stacks-sign-in-button\n  *ngIf="!(authResponse$ | async)"\n  (onSignIn)="stacksAuth$.next()"\n  [loading]="isLoadingConnect$ | async"\n></app-stacks-sign-in-button>\n')),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"This tutorial has shown you how to integrate Stacks Connect with an Angular application. You may want to consider abstracting the Stacks Connect logic behind an ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-services"},"Angular service"),", or using ",(0,o.kt)("a",{parentName:"p",href:"https://material.angular.io/"},"Material Design")," to theme your app."))}d.isMDXComponent=!0}}]);