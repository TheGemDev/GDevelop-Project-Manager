const { app, BrowserWindow, Menu, shell } = require('electron')
const fs = require('fs')

//get path to documents folder
var path = app.getPath('documents')

const isMac = process.platform === 'darwin'
function createWindow () {
  const win = new BrowserWindow({
    title: "GDevelop Project Manager",
    width: 1050,
    height: 650,
    minWidth: 800,
    minHeight:450,
    
    webPreferences: {
      nodeIntegration: true,
      
    }
  })

  win.loadURL('http://localhost:3000')
}


//menu

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',

    submenu: [
      { role: 'openProjects',
      label: 'Open Projects',
      click: () => {
          
          if (fs.existsSync(path + '/GDevelop projects')) {
            shell.openPath(path + '/GDevelop projects')
          } else { //
            const Alert = require("electron-alert");

let alert = new Alert();

let swalOptions = {
	title: "Folder not found!",
	text: "Please ensure you have a 'GDevelop projects' folder in your documents directory",
	type: "error",
	showCancelButton: false
};

alert.fireWithFrame(swalOptions, null, true, true, null,);
          }
      }  
    },
        {role: 'openGDevelop',
        label : 'Open GDevelop',
        click: () => {
            //
        }
        },
      isMac ? { role: 'close' } : { role: 'Quit' }
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'About',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://www.gdevelop-app.com')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
