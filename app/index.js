const {
  app,
  BrowserWindow,
  Menu,
  shell,
  dialog,
} = require("electron");
const { is } = require("electron-util");
const fs = require("fs");
const path = require("path");

//get projectsPath to documents folder
var documentsDir = app.getPath("documents");


const isMac = process.platform === "darwin";

function createWindow() {
  const win = new BrowserWindow({
    title: "GDevelop Project Manager",
    width: 1050,
    height: 650,
    minWidth: 800,
    minHeight: 450,
    backgroundColor: "#f3f2ef",

    webPreferences: {
      devTools: is.development,
      nodeIntegration: true,
      enableRemoteModule: true,
      //preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
}
//menu
let options = {};
options.buttons = ["Yes", "No"];
options.message =
  "'GDevelop projects' folder does not exist in your documents directory!";
options.title = "Warning";
options.defaultId = 1;
options.type = "warning";
options.detail = "Would you like to create it now?";
options.cancelId = 1;
options.defaultId = 0;
options.noLink = false;
options.normalizeAccessKeys = false;

const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
      ]
    : []),
  // { role: 'fileMenu' }
  {
    label: "File",

    submenu: [
      {
        role: "openProjects",
        label: "Open Projects...",
        click: () => {
          if (fs.existsSync(documentsDir + "/GDevelop projects")) {
            shell.openPath(documentsDir + "/GDevelop projects");
          } else {
            dialog
              .showMessageBox(BrowserWindow.getFocusedWindow(), options)
              .then((res) => {
                if (res.response === 0) {
                  fs.mkdir(
                    path.join(documentsDir, "GDevelop projects"),
                    (err) => {
                      if (err) {
                        return console.error(err);
                      }
                      // <Alert
                      //text= "Yes"
                      ///>
                      console.log("GDevelop projects created successfully!");
                    }
                  );
                  console.log("Button Clicked 'Yes'");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        },
      },
      {
        role: "openGDevelop",
        label: "Open GDevelop",
        click: () => {
          //
        },
      },
      isMac ? { role: "close" } : { role: "Quit" },
    ],
  },
  // { role: 'viewMenu' }

  {
    label: "View",
    submenu: [
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: "Window",
    submenu: [{ role: "minimize" }, { role: "close" }],
  },
  {
    role: "help",
    submenu: [
      {
        label: "About",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://www.gdevelop-app.com");
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
