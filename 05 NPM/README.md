<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/npm.svg" alt="npm logo" width="20%"></div><br />

# Node Package Manager (npm)

NPM is the node package manager, it's a command line interface app that automatically comes included with Node.js, which we use to install and manage Open Source packages.

Now, these packages usually come from the package repository that is also npm.
So at [npmjs](https://npmjs.com), you can take a look at all the modules or packages that are included in the npm repository.
NPM is actually both the command line interface app that we use to manage the packages and also the repository itself. And actually, it's the largest software registry in the world, no matter what language we're talking about.

Probably, you have used npm, yourself, before when working on front-end development. Because these days, npm is actually not just used for node development, but really across the entire JavaScript stack.
For example, if you search for react, it's also gonna be there.

So really, all these popular libraries and frameworks are all on the npm registry. Basically, [npmjs](https://npmjs.com) is where all these packages are hosted.

Now, about the command line interface, itself, it actually comes already pre-installed with Node.js.
Let's now actually start using it.

## Using the npm command line interface (npm CLI)

NPM is a software that we basically use to manage the third party Open Source packages that we choose to include and use in our project.

The first thing that we usually do whenever we start a new project, is to start with `npm init`. We use `npm` as the command and then `init`. And this will basically create a `package.json` file. Which is kind of a configuration file of our project where all kinds of data about the project are stored.

If you run `npm init` on your command line, you'll be asked a bunch of questions:

```bash
# Project name
# If you don't specify it, it will be the name of the current directory by default
package name: (example)

# Version
# If you hit enter without specifying the version of your project, it'll be 1.0.0 by default
version: (1.0.0)

# Description
# (optional) but it good to give a short description of your projrct
description: This is just a test project

# Entry point
# It is the file from which execution starts. (index.js by default)
entry point: (index.js) main.js

# Test command
# it is the command that is run whenever you call npm test
test command:

# GIT repository
# specifies the git repo in which npm should write the attributes to
git repository:

# Keywords
# A collection of keywords about a module that can help identify a package, related modules and software, and concepts.
keywords:

# Author
# The creator of the project
author: Abdo Achhoubi

# License
# Specifies how can others deal with your project. (ISC) by default!
license: (ISC) MIT
```

After finishing all this you'll notice that a file `package.json` is generated for your project with a very basic set of information about the project for now.
But there is a lot of stuff that can be added to this file, and we will do that later on, when we start installing third-party packages.

## Types of Packages and Installs

There are two types of packages that we can install using npm, there are also two types of installs but let's talk about that later.

The two types of packages that we can install are **simple dependencies** and **development dependencies**.

### Local Installs

#### 1. Simple Dependencies

Simple, or regular dependencies, are simply packages that contain some code that we need to include in our own projects. And that's the reason behind calling them dependencies, because our projects and our code depend on them to work correctly.
Let's take `express` for example, which is the Node framework that we might use later, that'll be a dependency.

In order to install a simple dependency in npm, all we have to do is say npm install, and then the name of the package:

Let's take `graphql` for example:

```bash
npm install graphql
```

After hitting `Enter` we will have `graphql` installed in our project, and we can use it in our code.

But let's see if anything in `package.json` file has changed:

```json
"dependencies": {
    "graphql": "^16.5.0"
}
```

Once we install a package, a new field called **dependencies** got automatically created in `package.json` file, and put the installed dependency right in there, and also included the version of the package.

#### 2. Development Dependencies

Besides these regular dependencies, we also have development dependencies. And these are usually just tools for development, for example a code bundler like Webpack, or a debugger tool or a testing library. These are development dependencies. They are not needed for production, our code does not really depend on them, we simply use them to develop our applications.
Let's now install a dev dependency.
We're gonna take `nodemon` for example:

```bash
npm install nodemon --save-dev
```

Notice that we added a flag `--save-dev`, it's used to indicate that this package we're installing is a **development (dev) dependency**.

And once our package is done installing something new will be added to the `package.json` file:

```json
"devDependencies": {
    "nodemon": "^2.0.18"
}
```

Now `nodemon` is a very useful tool that helps us develop Node JS applications by automatically restarting the Node application whenever we change some files in our working directory.

But to start using it we need to specify a script in our `package.json` file:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "nodemon main.js"
}
```

The script is `nodemon main.js`, it means that `nomdemon` will keep track of changes on `main.js` and update the output automatically on the console.
I named my script `watch` but you can name it whatever you want!

now to run this script we should open our command prompt and execute this command:

```bash
# Replace watch with your own script name
npm run watch
```

### Global Installs

Until now we've installed two dependencies, one for development on the other one our code depends on it. But these dependencies are only available for this project that we're working on. If we want to use them for another project we need to install them all over again. We call this type of installation, a `local installation`. Because npm created a folder `node_modules` which contains all our dependencies located in this specific project and can only work in it.
If you open `node_modules` you might see lots of folder even if we only installed `graphql` and `codemon`. The reason behind the existance of all those folders in our `node_modules` directory, is because they're dependencies of our dependencies, which means our dependecies installs them because they depend on them.

There's another type of installation that makes it possible for our dependencies to work in all our projects, this type is called `global installs`.

So a package should be installed globally when it provides an executable command that you can run from the command line interface. There're lots of dependencies like that, for example `live-server` which used in the fronted to create a local server that keep track of every change in the working directory and apply the changes automatically on the browser!

But let's get back to `nodemon` it's also that kind of dependencies, and we can use it for all our Node.js projects in the future, and we don't want to keep installing it whenever we start a project.

Let's install it globally now!

```bash
npm i -g nodemon
```

Notice that I used `i` instead of `install`, it's just a shortcut!

Now we can simply use `nodemon` in a any new project because it's already installed globally.

Now in every project we create we can use `nodemon` like this:

```bash
nodemon main.js
```

And we don't need to create any new script in `package.json` for that.

This way whenever we change anything that's in `main.js` or related to it, `nodemon` will automatically compile our code!
