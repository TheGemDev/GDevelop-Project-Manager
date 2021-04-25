import React from "react"
import {Button as MuiButton, makeStyles} from "@material-ui/core"

const useStyles = makeStyles

makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: "none"
    }

}))

export default function Button(props) {
    const {text, variant, size, color, onClick, ...other} = props
    const classes = useStyles()

    return(
        <MuiButton
        variant={variant || "contained"}
        size={size || "large"}
        color={color || "primary"}
        onClick={onClick}
        {...other}
        classes={{ root: classes.root, label:classes.label}}>
        
            {text}
        </MuiButton>
    )
}