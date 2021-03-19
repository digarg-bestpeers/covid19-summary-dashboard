import {combineReducers} from "redux"
import summaryReducer from "./summary/summaryReducer"

const rootReducer = combineReducers({
    summary: summaryReducer
})

export default rootReducer;