# 0x00. ES6 Basics

## JavaScript

## ES6

## Concepts

- For this project, we expect you to look at these concepts:

	- [JavaScript programming](#javascript-programming)
	- [Software Linter](#software-linter)

![LINTER](https://private-user-images.githubusercontent.com/125453474/293857653-9addde3f-8461-4a69-8f35-deb69c78fe62.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzOTk4NjYsIm5iZiI6MTcxOTM5OTU2NiwicGF0aCI6Ii8xMjU0NTM0NzQvMjkzODU3NjUzLTlhZGRkZTNmLTg0NjEtNGE2OS04ZjM1LWRlYjY5Yzc4ZmU2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNlQxMDU5MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MWQ1MWU4ZThkYjdhN2YyOTdlZDc5NjViYWJhNGJhNjEzYmRjNDVhMDE2YjNjNGM3M2YzNmE1ZTNiMWFlODVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mR6pW4T-SFhw65-Ck2vVjUDhTj125OJR_9PsxBXA_Xw)

## Resources

- Read or watch:

	- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
	- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
	- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
	- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
	- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
	- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of ``Google``:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

	- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
	- Allowed editors: vi, vim, emacs, Visual Studio Code
	- All your files should end with a new line
	- A README.md file, at the root of the folder of the project, is mandatory
	- Your code should use the js extension
	- Your code will be tested using the Jest Testing Framework
	- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
	- All of your functions must be exported
 ## Setup

 ### Install NodeJS 12.11.x
(in your home directory):

	curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
	sudo bash nodesource_setup.sh
	sudo apt install nodejs -y

	$ nodejs -v
	v12.11.1
	$ npm -v
	6.11.3

### Install Jest, Babel, and ESLint

- in your project directory, install `Jest`, `Babel` and `ESList` by using the supplied package.json and run npm install.

## Configuration files
- Add the files below to your project directory

`package.json`

	{
  	 "scripts": {
    	  "lint": "./node_modules/.bin/eslint",
    	  "check-lint": "lint [0-9]*.js",
          "dev": "npx babel-node",
          "test": "jest",
          "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  	},
  	"devDependencies": {
    	  "@babel/core": "^7.6.0",
          "@babel/node": "^7.8.0",
          "@babel/preset-env": "^7.6.0",
          "eslint": "^6.4.0",
          "eslint-config-airbnb-base": "^14.0.0",
          "eslint-plugin-import": "^2.18.2",
          "eslint-plugin-jest": "^22.17.0",
          "jest": "^24.9.0"
  	}
    }

`babel.config.js`

	module.exports = {
  	  presets: [
    	    [
      	      '@babel/preset-env',
      	      {	
        	targets: {
          	  node: 'current',
        	},
      	      },
            ],
          ],
       };

`.eslintrc.js`

	module.exports = {
          env: {
            browser: false,
            es6: true,
            jest: true,
          },
	extends: [
           'airbnb-base',
           'plugin:jest/all',
        ],
  	globals: {
          Atomics: 'readonly',
          SharedArrayBuffer: 'readonly',
        },
  	parserOptions: {
          ecmaVersion: 2018,
          sourceType: 'module',
        },
  	plugins: ['jest'],
  	rules: {
    	   'no-console': 'off',
           'no-shadow': 'off',
           'no-restricted-syntax': [
              'error',
              'LabeledStatement',
              'WithStatement',
           ],
        },
  	overrides:[
    	  {
             files: ['*.js'],
             excludedFiles: 'babel.config.js',
          }
       ]
     };

## Finally…

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.


