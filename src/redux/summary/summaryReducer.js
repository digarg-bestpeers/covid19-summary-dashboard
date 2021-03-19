import {FETCH_SUMMARY_REQUEST, FETCH_SUMMARY_SUCCESS, FETCH_SUMMARY_FAILURE, SEARCH_COUNTRY, COUNTRY_HISTORY} from "./summaryTypes"


const intialState = {
    loading: false,
    summary: {},
    error: '',
    filtered_countries: [],
    histoy: []
}

const summaryReducer = (state=intialState, action) => {
    switch(action.type){
        case FETCH_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_SUMMARY_SUCCESS:
            return {
                loading: false,
                summary: action.payload,
                error: '',
                filtered_countries: action.payload.Countries,
            }

        case FETCH_SUMMARY_FAILURE:
            return {
                loading: false,
                summary: {},
                error: action.payload
            }

        case SEARCH_COUNTRY:
            const Countries = state.summary.Countries.filter(country => country.Country.toLowerCase().includes(action.payload.toLowerCase()) )
            return {
                ...state,
                loading: false,
                filtered_countries: Countries,
                error: ''
            }

        case COUNTRY_HISTORY:
            return {
                ...state,
                loading: false,
                history: action.payload,
                error: ''
            }

        default: return state
    }
}

export default summaryReducer;