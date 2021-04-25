import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  makeStyles,
  DialogContent,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Popup from "./Popup";
import Forme from "../util/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  title: {
    color: "#757575",
  },
  settings: {
    fontSize: "0.8rem",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      //#f3f2ef
    },

    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const classes = useStyles();
  const { title, searchPlaceholder } = props;
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton className={classes.settings}>
              <SettingsIcon />
            </IconButton>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <InputBase
              placeholder="Search Projects"
              className={classes.searchInput}
              startAdornment={<SearchIcon />}
            />
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              <Tooltip title="Create a new Project">
                <AddIcon />
              </Tooltip>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Popup
        title="Create A New Project"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        no="Cancel"
        yes="Create"
        children={function ss() {
          return <Typography variant="h2">Hello</Typography>;
        }}
      ></Popup>
    </AppBar>
  );
}
