import React, { useState, useEffect } from "react";
import Cardlist from "./Cardlist";
import Filter from "./Filter";

const Home = (props) => {
  const [searchfield, setSearchfield] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(props.countriesData);
    setFilterRegion("");
  }, [props.countriesData]);

  function onSearchChange(ele) {
    setSearchfield(ele.target.value);
  }

  function onFilterRegionChange(ele) {
    if (ele.target.value !== undefined) {
      setFilterRegion(ele.target.value);
    } else {
      setFilterRegion("");
    }
  }

  useEffect(() => {
    let filteredItems = props.countriesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchfield.toLowerCase()) &&
        item.region.toLowerCase().includes(filterRegion)
      );
    });

    setFilteredCountries(filteredItems);
  }, [searchfield, props.countriesData, filterRegion]);

  return (
    <main>
      <Filter
        onSearchChange={onSearchChange}
        onFilterRegionChange={onFilterRegionChange}
      ></Filter>

      <Cardlist items={filteredCountries}></Cardlist>
    </main>
  );
};

export default Home;
