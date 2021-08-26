import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Countries></Countries>
      </Route>
      <Route path="/countries/:name" children={<CountryDetails />}></Route>
    </Router>
  );
}

export default App;
