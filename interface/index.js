
/*
 * 
 * TFE: Création d'un programme de création d'horaires
 * Par Tijl Van den Brugghen
 * 
 */

const {app, BrowserWindow} = require('electron')

function createWindow () {
    win = new BrowserWindow({
        width: 1200, 
        height: 800,
        backgroundColor: '#fafafa',
    })
    win.loadFile('dist/index.html')
}

app.on('ready', createWindow)