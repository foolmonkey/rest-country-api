import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Cardlist from "./components/Cardlist";
import Filter from "./components/Filter";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  async function fetchAPI() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    response
      .json()
      .then((response) => {
        setCountriesData(response);
        setFilteredCountries(response);
      })
      .catch((err) => console.error(err));
  }

  function onSearchChange(ele) {
    setSearchfield(ele.target.value);
  }

  function onFilterRegionChange(ele) {
    if (ele.target.value != undefined) {
      setFilterRegion(ele.target.value);
    } else {
      setFilterRegion("");
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    let filteredItems = countriesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchfield.toLowerCase()) &&
        item.region.toLowerCase().includes(filterRegion)
      );
    });

    setFilteredCountries(filteredItems);
  }, [searchfield, countriesData, filterRegion]);

  return (
    <div className="App">
      <Navbar></Navbar>

      <Filter
        onSearchChange={onSearchChange}
        onFilterRegionChange={onFilterRegionChange}
      ></Filter>

      <Cardlist items={filteredCountries}></Cardlist>
    </div>
  );
}

export default App;
