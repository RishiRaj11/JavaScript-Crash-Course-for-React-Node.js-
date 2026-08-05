# JavaScript-Crash-Course-for-React-Node.js-
## **PART-1:** JavaScript Fundamentals
## Tutorial-1:JavaScript Introduction
### 1. what is javascript?
JavaScript is a high-level, dynamically typed programming language used to make applications interactive and dynamic.

Originally, JavaScript was mainly used inside web browsers, but today it can run almost anywhere using different runtimes.

MDN Doc (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

## 2. Why JavaScript?
JavaScript is important because it is one of the core technologies of modern web development.

HTML Defines the structure.
`<h1>Hello</h1>`

CSS Defines the appearance.
`
h1 {
  color: red;
}
`

Javascript Adds behavior.

`
document.querySelector("h1").onclick = () => {
  alert("Hello JavaScript!");
};
`

*Note:* Without JavaScript, most modern web applications would be static.

Javascript used for both Frontend & Backend

* React.js → JavaScript

* Node.js  → JavaScript

* Express  → JavaScript

* Next.js  → JavaScript


What can JavaScript build?
* Interactive websites
* React applications
* Node.js backend APIs
* Real-time applications
* Mobile applications
* Desktop applications
* Serverless applications
* Automation scripts

## 3. JavaScript vs Java

This is a very common beginner confusion.

JavaScript and Java are completely different programming languages.


## 4. JavaScript Engine

A JavaScript engine is a program that understands and executes JavaScript code.

Different environments use different JavaScript engines.
Think of JavaScript as a language you speak.

The JavaScript engine is the translator/interpreter system that allows the computer environment to execute that language.
```
JavaScript
    │
    ├── Browser
    │     ├── Chrome
    │     ├── Firefox
    │     └── Safari
    │
    └── Node.js
          └── Server-side JavaScript
```        

## 5. V8 Engine

V8 is Google's open-source JavaScript engine.

It is written primarily in C++ and is used by:

* Google Chrome
* Node.js
* Chromium-based applications

The important thing for React and Node.js learners is:

Chrome and Node.js both use V8.
