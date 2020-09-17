import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar";
import Home from "./views/Home/Home";
import NoMatch from "./views/NoMatch/NoMatch";
import CountryDetail from "./views/Detail/CountryDetail";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [darkmode, setDarkmode] = useState(false);

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
    if (localStorage.getItem("dark") !== null) {
      setDarkmode(true);
    }

    // Listen to tab events to enable outlines (accessibility improvement)
    document.body.addEventListener("keyup", function (e) {
      if (e.key === "Tab") {
        /* tab */ document
          .querySelector("html")
          .classList.remove("no-focus-outline");
      }
    });
  }, []);

  useEffect(() => {
    if (darkmode) {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.querySelector("html").classList.remove("dark");
      localStorage.removeItem("dark");
    }
  });

  return (
    <div className="App">
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode}></Navbar>

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
