import React from 'react'
import { connect } from "react-redux";
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { deepPurple} from '@material-ui/core/colors'
import {useHistory} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },

    typography: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        backgroundColor: deepPurple[400],
        textAlign: "center",
        fontWeight: 500
    },

    tableheading: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },

  })
)
const countryDetails =['Country','CopuntryCode','Date','NewConfirmed','NewDeaths','NewRecovered','TotalConfirmed','TotalDeaths','TotalRecovered']

function Country({summaryData}) {
    const history = useHistory()
    const classes = useStyles();
    
    const handleClick = (slug) => {
        history.push(`/${slug}`)
    }

    return (
        <div>
            <Paper>
                <Typography variant="h5" className={classes.typography}>Country wise Covid19 data</Typography>
            </Paper>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {countryDetails.map((item)=>{
                            return(
                                <TableCell className={classes.tableheading}>{item}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {summaryData.filtered_countries && 
                    summaryData.filtered_countries.map((country) => {
                        return (
                            <TableRow key={country.ID} onClick={()=> handleClick(country.Country)}>
                            <TableCell component="th" scope="row">
                                {country.Country}
                                </TableCell>
                                <TableCell align="right">{country.CountryCode}</TableCell>
                                <TableCell align="right">{moment(country.Date).format('DD MMMM YYYY')}</TableCell>
                                <TableCell align="right">{country.NewConfirmed}</TableCell>
                                <TableCell align="right">{country.NewDeaths}</TableCell>
                                <TableCell align="right">{country.NewRecovered}</TableCell>
                                <TableCell align="right">{country.TotalConfirmed}</TableCell>
                                <TableCell align="right">{country.TotalDeaths}</TableCell>
                                <TableCell align="right">{country.TotalRecovered}</TableCell>
                            </TableRow>
                            
                        )}
                    )}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      summaryData: state.summary,
    };
  };

export default connect(mapStateToProps)(Country)
