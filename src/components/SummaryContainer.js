import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSummary, searchCountry } from "../redux/summary/summaryActions";
import GlobalSummary from "./GlobalSummary"
import Country from "./Country"


const SummaryContainer = ({ summaryData, fetchSummary, searchCountry }) => {
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetchSummary();
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry(search)
    
  };
  
  return summaryData.loading ? (
    <h2>Loading</h2>
  ) : summaryData.error ? (
    <h2>{summaryData.error}</h2>
  ) : (
    <div>
      <GlobalSummary />
      <br /> <br />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button variant="outlined" color="primary">Search</button>
      </form>
      <Country />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    summaryData: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSummary: () => dispatch(fetchSummary()),
//   };
// };

const mapDispatchToProps = {
    fetchSummary: fetchSummary,
    searchCountry: searchCountry
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);
