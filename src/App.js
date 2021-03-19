import React from "react"
import './App.css';
import SummaryContainer from "./components/SummaryContainer"
import store from "./redux/store"
import {Provider} from "react-redux"
import "./App.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import CountryHistory from "./components/CountryHistory"


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={SummaryContainer} />
          <Route path="/:slug" component={CountryHistory} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

