import {FETCH_SUMMARY_REQUEST, FETCH_SUMMARY_SUCCESS, FETCH_SUMMARY_FAILURE, SEARCH_COUNTRY} from "./summaryTypes"
import axios from "axios"


export const fetchSummaryRequest = () => ({
    type: FETCH_SUMMARY_REQUEST,
    
})

export const fetchSummarySuccess = (summary) => ({
    type: FETCH_SUMMARY_SUCCESS,
    payload: summary
})

export const fetchSummaryFailure = (error) => ({
    type: FETCH_SUMMARY_FAILURE,
    payload: error
})


export const fetchSummary = () => {
    return (dispatch) => {
        dispatch(fetchSummaryRequest);
        axios.get('https://api.covid19api.com/summary',{
            headers: {
                'Authorization': `token ${'5cf9dfd5-3449-485e-b5ae-70a60e997864'}`
            }
        })
        .then( response => {
            const summary = response.data
            dispatch(fetchSummarySuccess(summary))
        })
        .catch( error => {
            const errorMsg = error.message
            dispatch(fetchSummaryFailure(errorMsg))
        })
    }
}


export const searchCountry = (name) => ({
    type: SEARCH_COUNTRY,
    payload: name
})
