import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from "./Search";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));


function Navbar() {
  const history = useHistory()
  const handleHome = () => {
    history.push("/")
  }

  const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} onClick={() => handleHome()}>
                        Covid19 Tracker
                    </Typography>
                    <Search />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
