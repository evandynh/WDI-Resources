#Intro to Node (part 2)

<!-- Note to instructors: This lesson serves as a bridge between "Intro to Node" and "Debugging and logging". It covers some minor concepts of running node and npm, the package.json, and why node_modules can be git ignored. It was thrown together in 10 minutes and is full of typos and general errors. PRs welcome. -->

###SWBAT
* Describe npm init and package.json
* Define an entry point
* Use nodemon
* Install npm packages globally and locally

###Preparation

* Use `module.exports` and `require()` to organize code

## 1. `npm init`

This starts a new node project. As we learned earlier, we can run node against any Javascript file. `npm init` creates a `package.json` file. This is the summary of our entire project. It is where we will store all sorts of information about dependencies, entry point, test suite, etc. This is not a necesary step; you can run node against any JS file; however, working in this way will make things easier. 

####Try it! 

* `mkdir test_node_project`

* `cd test_node_project`
	
* `npm init` creates a package.json file. This generator will walk you through a step by step in the command line to configure this file. Accept all the defaults this time (press enter for everything)
	
* `atom .`

Now go inspect the `package.json` file. 

Note: if you want to accept all default settings on `npm init` you can use `-f` => `npm init -f`

## 2. package.json

This is a default package.json file:

```
{
  "name": "test_node_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

The two main areas to focus on are "main" and "dependencies" (once created).

####Try it!

* `touch index.js`
* make it console log "HELLO WORLD"
* run the file with node: `$ node index.js`

---

## 3. entry point

Looks like `index.js` is our **entry point** to our application. This will make more sense when we start adding more code, because in the future, when we have dozens of JS files, we need to tell the V8 engine where to start running our code. 
If our app is nicely set up, everything will snowball from there.

Note: you can name your entry point whatever you like. Typically in Express projects you will see it named `index.js`, `app.js`, `main.js`, or `server.js`.


## 4. `nodemon`

`npm install -g nodemon`

`-g` is a global install and will be available to **all** node projects on your system. This is different to installing **dependencies** which we will look at in a minute. You will only need to run the above command once on this computer! 

This is a really cool (and really simple) utility that basically looks at the `package.json` file and runs the value of the "main" key as the starter script, or entry point.

It also watches for changes. 

####Try it! 

you can now run `$ nodemon` instead of `$ node index.js`. Notice that this time we are hanging and waiting for changes to index.js.

You can use `ctrl c` to exit.

Try adding another line of code to Hello World and watch nodemon detect the change and re-run the whole file. 

## 5. dependencies 

Dependencies are the core of how node works. We learned how to make our own modules, but npm also has a bunch of existing modules, authored by third parties, that we can leverage. NPM cleverly manages these dependencies for us and manages how they are sourced in. These modules are very similar to gems. 

####Try it! 

`npm install morgan`

This creates a new directory called node_modules. We will **almost never** make ANY changes to anything inside this file. Don't worry about exactly what morgan is doing for us just yet. 

####Q: why do we not change node_modules?

####Q: is this a global install??

We will learn what morgan does later, and we will learn all about express tomorrow, but just for giggles let's: 

`npm install express`

Notice through all of this that the dependencies section of our package.json has **NOT** changed. 

So from now on, we will almost always do project specific dependency installs using:

```npm install <dependency-name-found-in-npm-library> --save```  

####Try it! 

eg: 

* `npm install morgan --save`
* `npm install express --save`

Notice that npm doesn't reinstall extra copies of express and morgan to our node_modules, it just updates our `package.json` (because they were already there!)

We can also combine these into one command:

`npm install --save morgan express`

---

In the future, when you clone down other people's apps, you will have JUST their `package.json` file and code files specific to their projects. You will get all the dependencies they are using by doing an `npm install` with no arguments. It will install all of the modules listed in the dependencies section of the `package.json` file.

---

####Try it!

Delete your node_modules directory and then run `npm install`. What happened?

## 6. `.gitignore`

We have already looked at [gitignore](https://help.github.com/articles/ignoring-files/), but here's a quick refresher. 

####Q: What does this file do?

Because we will NEVER make changes to our dependencies, and we will ALWAYS get these files from npm, we can add the entire contents of the node_modules directory to `.gitignore`.

**Installfest created a global `.gitignore` that will always ignore the node_modules directory.**

If, for some reason, you did not complete installfest, or you changed your settings, you should set up your global `.gitignore` to ignore node modules.

```bash
touch ~/.gitignore_global 
atom ~/.gitignore_global 
```
Add this line to the file:
`node_modules`

If your `.gitignore_global` file doesn't have it already, also add `.DS_Store`.

##Conclusion

* What does `npm init` do?
* What is `package.json` for?
* Where is the entry point defined?
* What is a global install?
* What is nodemon?
* Why include `--save` with `npm install <module>`?
* What are dependencies and where are they defined?
* What is the purpose of `.gitignore`?
