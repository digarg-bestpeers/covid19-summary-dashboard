import React from 'react'
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red, green, teal } from '@material-ui/core/colors';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      '& > *': {
        margin: theme.spacing(1),
        height: theme.spacing(16),
        padding: theme.spacing(2),
        marginTop: theme.spacing(10),
      },
    },
    paperbox1: {
      backgroundColor: teal[200
      ],
      color: 'white'
    },
    paperbox2: {
      backgroundColor: red[200
      ],
      color: 'white'
    },
      paperbox3: {
      backgroundColor: green[200
      ],
      color: 'white'
    },
    

  }));


function GlobalSummary({total}) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
                <Paper elevation={3} className={classes.paperbox1}>
                    <Typography variant="h5">Total Confirmed</Typography>
                    <Typography variant="subtitle1">
                    {total.TotalConfirmed - total.NewConfirmed}</Typography>
                    <Typography variant="subtitle1">{`+ ${total.NewConfirmed}`}<ArrowDropUpIcon/></Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperbox2}>
                    <Typography variant="h5">Total Deaths</Typography>
                    <Typography variant="subtitle1">
                    {total.TotalDeaths - total.NewDeaths}</Typography>
                    <Typography variant="subtitle1">{`+ ${total.NewDeaths}`}<ArrowDropUpIcon style={{color:"red"}}/></Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperbox3}>
                    <Typography variant="h5">Total Recovered</Typography>
                    <Typography variant="subtitle1">
                    {total.TotalRecovered - total.NewRecovered}</Typography>
                    <Typography variant="subtitle1">{`+ ${total.NewRecovered}`}<ArrowDropUpIcon style={{color:"green"}}/></Typography>
                </Paper>      
        </div>
    )
}


export default GlobalSummary;
