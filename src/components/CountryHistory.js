import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { fetchHistory } from "../redux/summary/summaryActions";



function CountryHistory({summaryData, match, fetchHistory}) {
  useEffect( () => {
    const slug = match.params.slug.toLowerCase()
    const date = new Date()
    fetchHistory(slug, date)
  }, [])

    // console.log(summaryData)
    return (
        <div>
            <h1>hello</h1>
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
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryHistory)
