import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        
    },
    title: {
      color : '#757575',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

export default function Header(props) {

    const classes = useStyles();
    const { title } = props;
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                      <Typography className={classes.title}>
                       {title}
                      </Typography>
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
                        <IconButton>
                          <Tooltip title='Create a new Project'>
                            <AddIcon />
                          </Tooltip>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
