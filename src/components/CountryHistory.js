import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { fetchHistory, fetchSummary } from "../redux/summary/summaryActions";
import moment from "moment"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography, Container} from "@material-ui/core";
import { deepPurple} from '@material-ui/core/colors'
import Navbar from "./Navbar"
import GlobalSummary from "./GlobalSummary"

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
    backgroundColor: "black",
    color: "white"
},

}));


const countryHistory = ['Country', 'CountryCode', 'Province', 'City', 'CityCode', 'Lat', 'Long', 'Active', 'Confirmed', 'Deaths', 'Recovered', 'Date']

function CountryHistory({summaryData, match, fetchHistory, fetchSummary}) {
  const slug = match.params.slug.toLowerCase()
  useEffect( () => {
    fetchHistory(slug)
    fetchSummary()
  }, [])
  
  const classes = useStyles();
  return (
      <div>
        <Container>
          <Navbar />
          <div>
            {summaryData.summary.Countries && summaryData.summary.Countries.map(country => country.Country.toLowerCase().includes(slug) ? <GlobalSummary total={country} /> : null)}
          </div>
          <Paper>
            <Typography variant="h5" className={classes.typography}>Last 30 Days Covid History</Typography>
          </Paper>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {countryHistory.map(element => {
                    return <TableCell align="right" className={classes.tableheading}>{element}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {summaryData.history && summaryData.history.map((country) => {
                  return <TableRow key={country.ID}>
                    <TableCell component="th" scope="row" align="right">
                      {country.Country}
                    </TableCell>
                    <TableCell align="right">{country.CountryCode}</TableCell>
                    <TableCell align="right">{country.Province}</TableCell>
                    <TableCell align="right">{country.City}</TableCell>
                    <TableCell align="right">{country.CityCode}</TableCell>
                    <TableCell align="right">{country.Lat}</TableCell>
                    <TableCell align="right">{country.Lon}</TableCell>
                    <TableCell align="right">{country.Active}</TableCell>
                    <TableCell align="right">{country.Confirmed}</TableCell>
                    <TableCell align="right">{country.Deaths}</TableCell>
                    <TableCell align="right">{country.Recovered}</TableCell>
                    <TableCell align="right">{moment(country.Date).format('DD MMMM YYYY')}</TableCell>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    )
}



const mapStateToProps = (state) => {
    return {
      summaryData: state.summary,
    };
  };

  const mapDispatchToProps = {
    fetchHistory: fetchHistory,
    fetchSummary: fetchSummary
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryHistory)
