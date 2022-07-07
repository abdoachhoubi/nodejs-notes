# Package Versioning and Updating

## Versioning

Now that we know all about how the `npm` works, the `package.json` file and the types of packages and installs. We need a way to control the versions of our packages!
Thankfully the `package.json` file lists all the dependencies with their versions.
Let's take this version for example `1.14.10`, let's break it down to see what each number means:

- `1` This is called the major version, and it only changes when there are big changes in the dependency, if we find someday that our dependency is updated to `2.14.10` it means that `1.14.10` is no longer supported and some functionalities might not work in the newer version.

- `14` We refer to this one as the minor version, it only changes when there are new features in the dependency without affecting the previous ones.

- `10` This is the patch version, it changes when the dependency developers fix a bug.

**These are the 3 types of versions!**

## Semantic Versioning and Updates

### Minor and Patch Releases

Now let's take a look at an actual example by installing a specific version of a package:

```bash
npm i framer-motion@5.0.0
```

Today (7th JULY 2022) the actual version of `framer-motion` is `6.4.2`.

If you take a look at the `package.json` file you'll notice something new in the dependency version:

```json
"dependencies": {
    "framer-motion": "^6.0.0"
}
```

That `^` symbol means that when a new `minor` or `patch` release comes; if we run `npm update` it will update to that new version.

To check if there's any outdated package that needs to get updated we can run `npm outdated` in the command prompt and it will list all the packages that needs an update:

```bash
> npm outdated
> package         current    wanted     latest
> framer-motion    6.0.0     6.4.2      6.4.2
```

That `wanted` version is decided by us, we can specify it by changing the symbol at the beginning of the version in the `package.json` file.

In the case of the example above, it will only look for new `minor` or `patch` releases.

### Patch releases

Let's now uninstall `framer-motion` and install the version `6.4.0`:

Now if we change that symbol we talked about earlier to this one `~`, to be like this:

```json
"dependencies": {
    "framer-motion": "~6.4.0"
}
```

We automatically say that we only look for a newer `patch` release.
So if we run `npm outdated` again we will get:

```bash
> npm outdated
> package         current    wanted     latest
> framer-motion    6.4.0     6.4.2      6.4.2
```

So as you see above, the only thing that has changed is the patch version!

### Major Releases

There's one more symbol that can be used to check if there is a new major release which is the `*` symbol.
So if we set the package version to:

```json
"dependencies": {
    "framer-motion": "*6.4.2"
}
```

We tell npm that we're only looking if there's a new major update.

## package-lock.json

This file holds the versions of all our dependencies and their dependencies!
It's an important file, so make sure to include it when saving a copy of your project in the cloud or in a repository hosting server like GitHub.
And the `node_modules` folder holds a lot of folders and files!
So by saving the `package-lock.json` and `package.json` files, you'll be able to get the `node_modules` folder in any other computer if you run `npm i` in the command prompt.
