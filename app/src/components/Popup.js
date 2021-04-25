import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const classes = useStyles();

  const { children, title, yes, no, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">{title}</Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenPopup(false)} color="primary">
          {no}
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          {yes}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
