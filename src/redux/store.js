import {createStore, applyMiddleware} from "redux"
import summaryReducer from "./summary/summaryReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(summaryReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;