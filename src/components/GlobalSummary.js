import React from 'react'
import { connect } from "react-redux";
import moment from 'moment';

function GlobalSummary({summaryData}) {
    return (
        <div>
            <h2>Global Summary</h2>
            {summaryData.summary.Global && (
                <table border="1px">
                    <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Date</td>
                        <td>
                        {moment(summaryData.summary.Global.Date).format('DD-MMMM-YYYY')}
                        </td>
                    </tr>
                    <tr>
                        <td>NewConfirmed</td>
                        <td>
                        {summaryData.summary.Global.NewConfirmed}
                        </td>
                    </tr>
                    <tr>
                        <td>NewDeaths</td>
                        <td>
                        {summaryData.summary.Global.NewDeaths}
                        </td>
                    </tr>
                    <tr>
                        <td>NewRecovered</td>
                        <td>
                        {summaryData.summary.Global.NewRecovered}
                        </td>
                    </tr>
                    <tr>
                        <td>TotalConfirmed</td>
                        <td>
                        {summaryData.summary.Global.TotalConfirmed}
                        </td>
                    </tr>
                    <tr>
                        <td>TotalDeaths</td>
                        <td>
                        {summaryData.summary.Global.TotalDeaths}
                        </td>
                    </tr>
                    <tr>
                        <td>TotalRecovered</td>
                        <td>
                        {summaryData.summary.Global.TotalRecovered}
                        </td>
                    </tr>
                    </tbody>
                </table>
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
