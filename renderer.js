const { ipcRenderer } = require('electron')

ipcRenderer.on('test', (event, arg) => console.log('main -> renderer', arg))
ipcRenderer.send('test', [, 'msg'])
