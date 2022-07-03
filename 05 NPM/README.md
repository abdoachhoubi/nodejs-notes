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

After finishing all this you'll notice that a file `package.json` is generated for your project with a very basic set of information
about the project for now.
But there is a lot of stuff that can be added to this file, and we will do that later on when we start installing third-party packages.
