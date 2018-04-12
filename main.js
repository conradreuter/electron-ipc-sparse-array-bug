const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

const URL = url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true,
})

app.on('ready', () => {
  const win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(URL)
  win.webContents.openDevTools()
})
app.on('window-all-closed', () => app.quit())

ipcMain.on('test', (event, arg) => {
  console.log('renderer -> main', arg)
  event.sender.send('test', [, 'msg'])
})
