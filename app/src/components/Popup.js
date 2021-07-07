import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(9),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },

}));

export default function Popup(props) {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { children, title, yes, no, openPopup, setOpenPopup, help } = props;
  return (
    <Dialog
      open={openPopup}
      fullScreen={fullScreen}
      //classes={{ paper: classes.dialogWrapper }}
    
      fullWidth={true}
      maxWidth={'sm'} // 'sm' || 'md' || 'lg' || 'xl'


    >
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">{title}</Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        
      <Button color="primary" disableElevation >
          {help}
        </Button>
        <div style={{flex: '1 0 0'}} />
        <Button onClick={() => setOpenPopup(false)} color="primary">
          {no}
        </Button>
        <Button variant="contained" color="primary" disableElevation >
          {yes}
        </Button>
        
      </DialogActions>
    </Dialog>
  );
}
