# Example-project-with-framework-Electron

## Install the global command electron
npm install electron-prebuilt -g

## Install the development dependencies
npm install electron-prebuilt --save-dev

## For the development of our project we need do the next directory structure:

name_project
- package.json
- main.js
- index.html

## The first element, package.json, we do it:

{
  "name"    : "Example-project-with-framework-Electron",
  "version" : "0.1.0",
  "main"    : "main.js"
}


## The main class are main.js. The next once we will define the basic functionality:

//Control the application life cycle
var app = require('app');

## Well, we have already created our hello world in Electron, we just have to execute it. We are located in the directory that contains our project and execute the following command:

electron Example-project-with-framework-Electron

And we will open a window with our application.
