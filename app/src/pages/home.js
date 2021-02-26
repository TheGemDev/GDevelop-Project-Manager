import React from "react";
import PageHeader from "../components/pageHeader";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import optionalRequire from "../util/OptionalRequire";
import ErrorIcon from "@material-ui/icons/Error";
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

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
} else
{
  
  var projectsPath = "\\Path not found";
  dialog
    .showMessageBox(WIN, options)
    .then((res) => {
      if (res.response === 0) {
        fs.mkdir(path.join(documentsDir, "GDevelop projects"), (err) => {
          if (err) {
            return console.error(err);
          }

          console.log("GDevelop projects created successfully!");
        });
        var projectsPath = documentsDir + "\\GDevelop projects";
        console.log("Button Clicked 'Yes'");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Home() {
  const [state, setState] = React.useState({
    open: true,
    Transition: Fade,
  });
  function SlideTransition(props) {
    return <Slide {...props} direction='up' />;
  }

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: true,
    });
  };
  return (
    (
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message='hello'
        key={state.Transition.name}
        onClick={handleClick(SlideTransition)}
      />
    ),
    (
      <PageHeader
        title='GDevelop Projects'
        subTitle={projectsPath}
        icon={<SentimentVerySatisfiedIcon />}
      />
    )
  );
}
