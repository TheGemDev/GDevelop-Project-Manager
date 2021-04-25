import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';




export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const {clickOpen} = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={clickOpen}
        onClose={handleClose}
        disableBackdropClick='true'
        aria-labelledby="responsive-dialog"
      >
        <DialogTitle id="responsive-dialog">{"Game Properties"}</DialogTitle>
        <DialogContent>
          <Input />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
