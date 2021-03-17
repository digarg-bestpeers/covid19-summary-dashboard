import React from 'react'
import { connect } from "react-redux";
import moment from 'moment'


function Country({summaryData}) {
    return (
        <div>
            <h2>Country Data</h2>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>CountryCode</th>
                        <th>Date</th>
                        <th>NewConfirmed</th>
                        <th>NewDeaths</th>
                        <th>NewRecovered</th>
                        <th>TotalConfirmed</th>
                        <th>TotalDeaths</th>
                        <th>TotalRecovered</th>
                    </tr>
                </thead>
                <tbody>
                    {summaryData.filtered_countries &&
                    summaryData.filtered_countries.map((country) => {
                        return (
                            <tr key={country.ID}>
                            <td>{country.Country}</td>
                            <td>{country.CountryCode}</td>
                            <td>{moment(country.Date).format('DD/MMMM/YYYY')}</td>
                            <td>{country.NewConfirmed}</td>
                            <td>{country.NewDeaths}</td>
                            <td>{country.NewRecovered}</td>
                            <td>{country.TotalConfirmed}</td>
                            <td>{country.TotalDeaths}</td>
                            <td>{country.TotalRecovered}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      summaryData: state,
    };
  };

export default connect(mapStateToProps)(Country)
