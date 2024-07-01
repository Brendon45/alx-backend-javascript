# 0x03. ES6 data manipulation

## JavaScript

## ES6

![SCRIPT](https://private-user-images.githubusercontent.com/125453474/294835104-e80f64bf-f162-4a5d-93c1-924122088ea4.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4MTg1MjMsIm5iZiI6MTcxOTgxODIyMywicGF0aCI6Ii8xMjU0NTM0NzQvMjk0ODM1MTA0LWU4MGY2NGJmLWYxNjItNGE1ZC05M2MxLTkyNDEyMjA4OGVhNC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMVQwNzE3MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzM5ZWVmNTBhYWE5ZjdhMGUzMTA5YzczOTZhOTA3OTU3Y2VkZTY0NjQwOTE0YjE0Y2NlMTFhYTljN2Y5NThiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lAvXrwI754rx-Xs_kvatecBTxFN6n88pVGJKrb8IGc8)

## Resources

``Read or watch:``
- [Array](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives📖

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

  - How to use map, filter and reduce on arrays
  - Typed arrays
  - The Set, Map, and Weak link data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
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

- in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

## Configuration files

- Add the following files to your project directory

``package.json``


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
