import * as React from "react";
import Popup from "../components/Popup";
import Icon from "../components/Icons/Icons";
import {
  Typography,
  Input,
  TextField,
  makeStyles,
  FormHelperText,
  InputAdornment,
  IconButton,
  Switch,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import requirePath from "./requirePath";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
  dual: {
    width: "10%",
  },
}));

export default function FormContent() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            autoFocus
            id="name"
            label="Project Name"
            type=""
            fullWidth
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            id="path"
            label="Project Path"
            defaultValue={requirePath.docDir}
            placeholder={requirePath.docDir}
            fullWidth
            autoCorrect="false"
            spellCheck="false"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon.FolderIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            autoFocus
            id="author"
            label="Author (Your name or brand name)"
            type=""
            fullWidth
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            autoFocus
            id="version"
            label="Version number (x.y.z) "
            type=""
            defaultValue="1.0.0"
            fullWidth
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            id="Package name"
            label="Package name"
            type=""
            defaultValue="com.example.projectname"
            fullWidth
            autoCorrect="false"
            spellCheck="false"
          />
        </div>
      </div>
      <div className={classes.root}>
        <TextField
          variant="filled"
          id="width"
          label="Width"
          type=""
          defaultValue="600"
          fullWidth
        />
      </div>
      <div className={classes.root}>
        <TextField
          variant="filled"
          id="name"
          label="Height"
          type=""
          defaultValue="1000"
          fullWidth
        />
        {/*<FormHelperText id="padth" error>
            Please choose an empty Folder
          </FormHelperText>*/}
      </div>
      <div className={classes.root}>
        <FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Display GDevelop Splash-Screen at Startup"
          />
        </FormControl>
      </div>
    </div>
  );
}
