# Built-in Modules

## Node.js Modules

In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application.

## Core Modules

Node.js comes with dozens of built-in modules. These built-in modules are sometimes referred to as core modules. The module system is built around the `require` function. This function is used to load a module and get access to its contents. require is a global variable provided to all your Node.js scripts, so you can use it anywhere you like. `require()` function will return a JavaScript type depending on your module.

**Syntax:**

```js
const module = require("Name_of_Module");
```

**Example:**

```js
const fs = require("fs"); // Import fs module
fs.writeFileSync("sample.txt", "Node.js is the best!"); // Using a function of the fs module to write to a file
```

`witeFileSync` is part of the `fs` module, we can only use it if we import the `fs` module.

## List of Core Modules

| module         | role                                                       |
| -------------- | ---------------------------------------------------------- |
| assert         | Provides a set of assertion tests                          |
| buffer         | To handle binary data                                      |
| child_process  | To run a child process                                     |
| cluster        | To split a single Node process into multiple processes     |
| crypto         | To handle OpenSSL cryptographic functions                  |
| dgram          | Provides implementation of UDP datagram sockets            |
| dns            | To do DNS lookups and name resolution functions            |
| events         | To handle events                                           |
| fs             | To handle the file system                                  |
| http           | To make Node.js act as an HTTP server                      |
| https          | To make Node.js act as an HTTPS server                     |
| net            | To create servers and clients                              |
| os             | It provides information about the operation system         |
| path           | To handle file paths                                       |
| querystring    | To handle URL query strings                                |
| readline       | To handle readable streams one line at the time            |
| stream         | To handle streaming data                                   |
| string decoder | To decode buffer objects into strings                      |
| timers         | To execute a function after a given number of milliseconds |
| tls            | To implement TLS and SSL protocols                         |
| tty            | Provides classes used by a text terminal                   |
| url            | To parse URL strings                                       |
| util           | To access utility functions                                |
| v8             | To access information about V8 (the JavaScript engine)     |
| vm             | To compile JavaScript code in a virtual machine            |
| zlib           | To compress or decompress files                            |
