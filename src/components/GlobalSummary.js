import React from 'react'
import { connect } from "react-redux";
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red, green, brown, orange, grey } from '@material-ui/core/colors';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      
      '& > *': {
        margin: theme.spacing(1),
        height: theme.spacing(16),
        padding: theme.spacing(2),
      },
    },
    paperbox: {
        backgroundColor: grey[300
        ],
    },
    

  }));


function GlobalSummary({summaryData}) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {summaryData.summary.Global && (
                <>
                <Paper elevation={5} className={classes.paperbox}>
                    <Typography variant="h5">Total Confirmed</Typography>
                    <Typography variant="subtitle1"> <ArrowDropUpIcon/>
                    {summaryData.summary.Global.TotalConfirmed - summaryData.summary.Global.NewConfirmed}</Typography>
                    <Typography variant="subtitle1">{`+ ${summaryData.summary.Global.NewConfirmed}`}</Typography>
                    
                </Paper>
                <Paper elevation={5} className={classes.paperbox}>
                    <Typography variant="h5">Total Deaths</Typography>
                    <Typography variant="subtitle1"><ArrowDropUpIcon style={{color:"red"}}/>
                    {summaryData.summary.Global.TotalDeaths - summaryData.summary.Global.NewDeaths}</Typography>
                    <Typography variant="subtitle1">{`+ ${summaryData.summary.Global.NewDeaths}`}</Typography>
                </Paper>
                <Paper elevation={5} className={classes.paperbox}>
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
      summaryData: state,
    };
  };


export default connect(mapStateToProps)(GlobalSummary)
