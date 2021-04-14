import React from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent, Typography, Button } from "@material-ui/core"

export default function Popup(props) {
    const {children, title, yes, no, openPopup, setOpenPopup} = props;
    return(
        <Dialog open={openPopup}>
            <DialogTitle>
                <Typography
                variant="h6"
                >
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <Button 
                onClick={() => setOpenPopup(false)}
                color="primary"
                
                >{no}</Button>
                <Button 
                variant="contained"  
                color="primary"
                disableElevation
                >{yes}</Button>
                

            </DialogActions>
        </Dialog>
    )
}