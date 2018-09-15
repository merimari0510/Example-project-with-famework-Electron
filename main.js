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
  mainWindow.loadFile('index.html');

  //We open the development options
  mainWindow.openDevTools();

  // When the main window closes...
  mainWindow.on('closed', function() {
    //We release the resources relating to the window
    mainWindow = null;
  });
});
