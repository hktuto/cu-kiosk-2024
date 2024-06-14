const { app, BrowserWindow, webFrame } = require("electron");


const port = 3000;
const server = require("./index");
// server(port);
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: false,
    },
  });
  
  // mainWindow.maximize();
  mainWindow.webContents.openDevTools();

  mainWindow.loadURL(`http://localhost:${port}/`).then(() => {
    mainWindow.webContents.setZoomFactor(1.35);
  });
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  // mainWindow.webContents.openDevTools()
}
app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
app.commandLine.appendSwitch("disable-site-isolation-trials");
app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
