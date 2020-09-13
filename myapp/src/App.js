import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Cardlist from "./components/Cardlist";
import Filter from "./components/Filter";

function App() {
  const [countriesData, setCountriesData] = useState({});

  async function fetchAPI() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    response
      .json()
      .then((response) => {
        setCountriesData(response);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <Filter></Filter>

      <Cardlist items={countriesData}></Cardlist>
    </div>
  );
}

export default App;
