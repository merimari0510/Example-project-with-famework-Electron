# Example-project-with-framework-Electron

# Install the global command electron
npm install electron-prebuilt -g

# Install the development dependencies
npm install electron-prebuilt --save-dev

For the development of our project we need do the next directory structure:

name_project/
|- package.json
|- main.js
|- index.html

The first element, package.json, we do it
{
  "name"    : "Example-project-with-framework-Electron",
  "version" : "0.1.0",
  "main"    : "main.js"
}


The main class are main.js. The next once we will define the basic functionality:

//Control the application life cycle
var app = require('app');

//Access the Chromium window gestor
var BrowserWindow = require('browser-window');

//Allow error report
require('crash-reporter').start();

//Global eference in the principal window
var mainWindow = null;

//We will terminate the process of the application when all the windows are closed
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

//When everything is loaded, with ready event we will start define the application
app.on('ready', function() {
  // We will create a new window (800x600)
  mainWindow = new BrowserWindow({
        width: 800,
        height: 600});

  //We link the index.html to said window
  mainWindow.loadUrl('[DIRECTORIO_DEL_FICHERO_INDEX.HTML]');

  //We open the development options
  mainWindow.openDevTools();

  // When the main window closes...
  mainWindow.on('closed', function() {
    //We release the resources relating to the window
    mainWindow = null;
  });
});

Now all we have to do is define the index.html file, which will contain the actual view of the window. We will do this as if it were a classic website:

<html>
  <head>
    <title>Hello World with Electron JS</title>
  </head>
  <body>
    <h1>Hello World!!!</h1>
  </body>
</html>

Well, we have already created our hello world in Electron, we just have to execute it. We are located in the directory that contains our project and execute the following command:

electron Example-project-with-framework-Electron

And we will open a window with our application.
