import { app, BrowserWindow } from 'electron'

let mainWindow
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('http://localhost:5173')
})
