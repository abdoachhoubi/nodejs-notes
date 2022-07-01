# What is Node.js?

## JavaScript?

Before talking about NodeJS let's get to know JavaScript:

JavaScript is a High-level, prototype-based object-oriented, multi-paradigm, Just-In-Time compiled, Dynamic, Single-threaded, Garbage Collected with first-class functions and a **non-blocking event loop concurrency model.**

All these features made JavaScript one of the most used programming languages around the world. According to the [2022 usage statistics of JavaScript on the client-side.](https://w3techs.com/technologies/details/cp-javascript/) As of 2022, 98% of websites use JavaScript on the client-side for web page behavior.

## Node.js?

JavaScript uses the browser as a runtime environment to execute its code using a so-called **JavaScript Engine**, this engine is used to compile javascript code into machine code.

But that means we can only run javascript in the browser. Hence we can only use it for the client-side.

But in 2009 some genius named [Ryan Dhal](https://en.wikipedia.org/wiki/Ryan_Dahl) took [Google's open-source V8 engine](https://v8.dev/), and added some C/C++ bindings and boom! NodeJS was created! 🎉

<div align="center"><img src="https://v8.dev/_img/v8-outline.svg" width="20%" alt="V8 Engine Logo"></div>

Keep in mind that Node.js is not a language, it's a runtime environment built on top of the V8 Engine to run javascript code outside the browser for the server-side.

JavaScript is the only language that Node.js supports natively, but many compile-to-JS languages are available. As a result, Node.js applications can be written in CoffeeScript, Dart, TypeScript, ClojureScript and others.

## What can we create with Node.js?

Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of **modules** that handle various core functionalities.

Node.js is very efficient with real-time applications, as it facilitates handling multiple client requests, enables sharing and reusing packages of library code, and the data sync between the client and server happens very fast.

## Why Node.js and not other server-side languages and frameworks?

Node.js is primarily used to build network programs such as Web servers. The most significant difference between Node.js and other technologies is that most functions in the other technologies block until completion (commands execute only after previous commands finish), while Node.js functions are non-blocking (commands execute concurrently or even in parallel, and use callbacks to signal completion or failure).

## When is Node.js not a good idea?

As we touched on above, Node.js only supports single-threaded programming. It’s not suitable for performing long-running calculations. Heavy computations block the incoming requests, making the biggest advantage of Node.js useless.

While Node.js is perfect for lightweight yet complex apps, in the case of software that requires some heavy computing, it might perform less effectively than traditional methods.
