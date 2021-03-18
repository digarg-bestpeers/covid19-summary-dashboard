import React from "react"
import './App.css';
import SummaryContainer from "./components/SummaryContainer"
import store from "./redux/store"
import {Provider} from "react-redux"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div>
        <SummaryContainer />
      </div>
    </Provider>
  );
}

export default App;
