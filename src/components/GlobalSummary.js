import React from 'react'
import { connect } from "react-redux";
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red, green, teal } from '@material-ui/core/colors';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      
      
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


function GlobalSummary({summaryData}) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {summaryData.summary.Global && (
                <>
                <Paper elevation={3} className={classes.paperbox1}>
                    <Typography variant="h5">Total Confirmed</Typography>
                    <Typography variant="subtitle1"> <ArrowDropUpIcon/>
                    {summaryData.summary.Global.TotalConfirmed - summaryData.summary.Global.NewConfirmed}</Typography>
                    <Typography variant="subtitle1">{`+ ${summaryData.summary.Global.NewConfirmed}`}</Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperbox2}>
                    <Typography variant="h5">Total Deaths</Typography>
                    <Typography variant="subtitle1"><ArrowDropUpIcon style={{color:"red"}}/>
                    {summaryData.summary.Global.TotalDeaths - summaryData.summary.Global.NewDeaths}</Typography>
                    <Typography variant="subtitle1">{`+ ${summaryData.summary.Global.NewDeaths}`}</Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperbox3}>
                    <Typography variant="h5">Total Recovered</Typography>
                    <Typography variant="subtitle1"><ArrowDropUpIcon style={{color:"green"}}/>
                    {summaryData.summary.Global.TotalRecovered - summaryData.summary.Global.NewRecovered}</Typography>
                    <Typography variant="subtitle1">{`+ ${summaryData.summary.Global.NewRecovered}`}</Typography>
                </Paper>
                </>
            )}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      summaryData: state.summary,
    };
  };


export default connect(mapStateToProps)(GlobalSummary)
