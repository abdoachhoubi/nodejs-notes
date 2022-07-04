# Third-Party Modules

So far, we learned how to require Node JS core modules. How to require our own modules.
Now, we're gonna learn how to require third-party modules from the NPM registry.

Actually requiring a module that we already installed from NPM is really simple.

A good coding practice is requiring the modules at the top and usually we require the core modules first, then the third-party modules, and then our local modules.

Let's say we've installed `slugify`, which is a third party-module that can be used to create nice URLs! [Learn more about slugify](https://www.npmjs.com/package/slugify)

And we also have a local module `birthday`.

We can organize our `index.js` this way:

```js
// Core Modules
const fs = require("fs");

// Third-Party Modules
const slugify = require("slugify");

// Local Modules
const birthday = require("./modules/birthday");

// The rest of the code
console.log("Hello mom!");
```

As you noticed, we require third-party modules the same way we require core modules!

You can check `index.js` file to see an example of working with all types of modules and the best coding practice when dealing with them!
