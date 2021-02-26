import React from "react";
import PageHeader from "../components/pageHeader";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import optionalRequire from "../util/OptionalRequire";
import ErrorIcon from "@material-ui/icons/Error";
//import Alert from "../components/lab/alert";

const electron = optionalRequire("electron");
const app = electron ? electron.remote.app : null;
const fs = optionalRequire("fs");
const path = optionalRequire("path");
const documentsDir = app ? app.getPath("documents") : null;
const dialog = electron ? electron.remote.dialog : null;

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

let WIN = electron ? electron.remote.getCurrentWindow() : null;

if (fs.existsSync(documentsDir + "/GDevelop projects")) {
  var projectsPath = documentsDir + "\\GDevelop projects";
} else {
  var projectsPath = "\\Path not found";
  dialog
    .showMessageBox(WIN, options)
    .then((res) => {
      if (res.response === 0) {
        fs.mkdir(path.join(documentsDir, "GDevelop projects"), (err) => {
          if (err) {
            return console.error(err);
          }
          // <Alert
          //text= "Yes"
          ///>
          console.log("GDevelop projects created successfully!");
        });
        console.log("Button Clicked 'Yes'");
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
