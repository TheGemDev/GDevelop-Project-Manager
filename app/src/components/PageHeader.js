import React from "react";
import {
  Paper,
  Card,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import FileIcon from "@material-ui/icons/Folder";
import Icon from "./Icons/Icons";
import optionalRequire from "../util/OptionalRequire";
import requirePath from "../util/requirePath";

const  shell  = optionalRequire("electron")

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e9e5df",
    //#fdfdff
  },
  pageHeader: {
    padding: theme.spacing(1),
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(3),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card elevation={3} className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>

          <Typography variant="subtitle2" component="div">
            <IconButton onClick={() => {shell.openPath(requirePath.docDir)}}> 
              <Icon.FolderIcon />
            </IconButton>
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
