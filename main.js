const{app, BrowserWindow} = require('electron')

function createWindow(){
    win = new BrowserWindow({width: 300, height: 300})
    win.loadFile('index.html')
}

app.on('ready', createWindow)