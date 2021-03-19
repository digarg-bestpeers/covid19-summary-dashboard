import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSummary } from "../redux/summary/summaryActions";
import GlobalSummary from "./GlobalSummary"
import Country from "./Country"
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from "./Navbar"



const SummaryContainer = ({ summaryData, fetchSummary }) => {
   
  useEffect(() => {
    fetchSummary();
  }, []);
  
  return summaryData.loading ? (
    <CircularProgress color="secondary" />
  ) : summaryData.error ? (
    <h2>{summaryData.error}</h2>
  ) : (
    <div>
      <Container>
      <Navbar />
      <GlobalSummary />
      <Country />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    summaryData: state.summary,
  };
};


const mapDispatchToProps = {
    fetchSummary: fetchSummary,
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);
