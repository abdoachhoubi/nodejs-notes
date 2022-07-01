# Installation and usage

## Installation

Before installing Node.js, let's first check if it's already installed on your system or not by opening the **Command-Line** and running this command :

```bash
node -v
```

If you get a result similar to `v17.8.0` then you already have it installed, else let's see how we can install it!

1. Go to the [Node.js official webpage](https://nodejs.org/en/)
2. You'll get two download buttons for your operating system:
   - **LTS** and **Current**
   - Choose the LTS version because it's more stable
3. After downloading it, run it and follow the installation steps

## Usage

Create a new file `example.js` and let's write some code!

```js
const hello = "Hi mom!";
console.log(hello);
```

To execute a JavaScript file using Node.js we need to open a new terminal instance and run this command:

```bash
node example.js
```

Output:

```bash
Hi mom!
```

Congrats 🎉 you have successfully executed your first JavaScript code outside the browser and said Hi to your mom!

Now let's see the difference between JavaScript in the browser and outside the browser.

## JavaScript inside and outside the browser

When using JavaScript outside the browser we can no longer have access to anything related to the client-side, such as `Document Object Model` and the `window object`.
Instead, we have something called a `global object` similar to the `window object` which allows us to use some methods like `setTimeout()` and `setInterval()`

This is one of the most exciting things about Node.js. Unlike the browser where JavaScript is sandboxed for your safety, Node.js has full access to the system like any other native application. This means you can read and write directly to/from the file system, have unrestricted access to the network, can execute software and more.
This means writing full desktop software is possible with Node.js even including a UI through modules like electron. This means that javaScript ran through Node.js needs to be treated with the same level of caution as running C++, java, or any other language directly on your system. `Never run untrusted JavaScript in Node.js!`.
