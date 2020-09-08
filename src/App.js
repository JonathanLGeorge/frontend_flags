import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GetCountryInfo from "./components/GetCountryInfo";
import Container_Main from "./components/Container_Main";

import Country_Page from "./components/Country_Page";
function App() {
  return (
    <div className="App">
      <header>
        <div class="banner">
          <h1>Click on a Card to get more Country Info.</h1>
        </div>
      </header>
      <GetCountryInfo>
        <Router>
          <Switch>
            <div className="padding">
              <Route exact path="/home" component={Container_Main} />
              <Route exact path="/country/:id" component={Country_Page} />
            </div>
          </Switch>
        </Router>
      </GetCountryInfo>
    </div>
  );
}

export default App;
