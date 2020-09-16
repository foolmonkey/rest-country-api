import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar";
import Home from "./views/Home/Home";
import NoMatch from "./views/NoMatch/NoMatch";
import CountryDetail from "./views/Detail/CountryDetail";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  async function fetchAll() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    response
      .json()
      .then((response) => {
        setCountriesData(response);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <Switch>
        <Route
          exact
          path="/home"
          render={(props) => <Home {...props} countriesData={countriesData} />}
        />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route
          exact
          path="/detail/:name"
          render={(props) => (
            <CountryDetail {...props} countriesData={countriesData} />
          )}
        />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
