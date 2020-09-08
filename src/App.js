import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GetCountryInfo from "./components/GetCountryInfo";
import Container_Main from "./components/Container_Main";
function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
          <h1>Where in the world?</h1>
        </div>
      </header>
      <GetCountryInfo>
        <Router>
          <Switch>
            <Route exact path="/" component={Container_Main} />
            <Route exact path="/country/:id" />
          </Switch>
        </Router>
      </GetCountryInfo>
    </div>
  );
}

export default App;
