# What I Learned

## Goal

> To have a basic understanding of TypeScript, npm, AngularJS (changed from React), webpack, and the ts-loader for webpack.

## TypeScript (TS)

TS helps developers write better JavaScript (JS) by setting restraints when writing code. A problem I had with JS is that it's super easy to write error-prone code. It's also easy to get lost in JS when it comes to big projects.

Instead of JS allowing anything to fit parameters, TS allows developers to expect certain parameters before the code is compiled. For example:

JS:

```js
function test(firstName) {
    console.log(firstName);
}
```

You can put whatever you want into that parameter and JS will write it to the console.

Whereas TS:

```ts
function test(firstName: string): void {
    console.log(firstName);
}
```

If you put anything other than a string, the code will not compile.


## npm

npm is a package manager for NodeJS. Whenever you install a package, a directory called `node_modules` is created.

For this project, I needed to install: typescript, webpack, webpack-cli, and ts-loader.

## AngularJS

AngularJS allowed me to write template HTML that would work with JS. 

I linked to the source file located on the CDN rather than locally hosting the file.