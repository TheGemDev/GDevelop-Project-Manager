import React from "react";
import PageHeader from "../components/pageHeader";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import optionalRequire from "../util/OptionalRequire";
import ErrorIcon from "@material-ui/icons/Error";

const electron = optionalRequire("electron");
const app = electron ? electron.remote.app : null;
const fs = optionalRequire("fs");
const documentsDir = app.getPath("documents");
const dialog = electron.remote.dialog;

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
let WIN = electron.remote.getCurrentWindow();

if (fs.existsSync(documentsDir + "/GDevelop projecs")) {
  var projectsPath = documentsDir + "\\GDevelop projects";
} else
{
    
  /* dialog.showMessageBox(WIN, options, (res, checked) => {
    if (res === 1) {
      window.destroy();
    } else
    {
        window.destroy()
    }
  });*/
  var projectsPath =  "\\Path not found";
}

export default function Home() {
  return (
    <PageHeader
      title='GDevelop Projects'
      subTitle={projectsPath}
      icon={<SentimentVerySatisfiedIcon />}
    />
  );
}
