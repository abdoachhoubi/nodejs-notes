# Local Modules

In large projects, putting all your code in a single file is not a good idea. As you add more code, you’ll want to stay organized and break your Node.js app into multiple scripts that all work together. For that purpose, we can create local (user-defined) modules in our application.

Modules can be organized in a single file or a collection of multiple files/folders. Almost all programmers prefer modules because of their reusability throughout the application and ability to reduce the complexity of code into smaller pieces.

## Export a module

Let's start by creating a new folder and naming it `modules`, and then create a new JS file `greet.js`. Now We can export javascript code written on this file using `module.exports`. In the code below a function `greet` is defined and assigned to the `module.exports`.

`greet.js:`

```js
const greet = (name) => {
  console.log(`Hi ${name}! How are you doing?`);
};
module.exports = greet;
```

## Import a local module

Now we need to import the local module file into main.js. `require()` function is also used for importing the local modules. All you need to do is provide `require()` with a relative `path` to the script you want to load.

`main.js:`

```js
const greet = require("./modules/greet.js"); // IMPORTING "greet" MODULE

greet("Abdo");
/* ------ OUTPUT ------ 
    > Hi Abdo!
    > How are you doing?
*/
```
