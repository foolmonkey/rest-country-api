import React, { useRef } from "react";

const Filter = (props) => {
  const regionOptions = useRef(null);
  const searchInput = useRef(null);
  const filterLabel = useRef(null);

  function showFilterRegion() {
    let item = regionOptions.current;
    item.style.visibility = "unset";
  }

  function hideFilterRegion() {
    let item = regionOptions.current;
    item.style.visibility = "hidden";
  }

  function updateFilterRegionChange(ele) {
    if (ele.target.value.length > 0) {
      filterLabel.current.className = "fas fa-times-circle";
    } else {
      filterLabel.current.className = "fas fa-angle-down";
    }
    props.onFilterRegionChange(ele);
  }

  return (
    <div className="filters">
      <div className="searchbar">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={props.onSearchChange}
          ref={searchInput}
        ></input>
      </div>

      <div
        className="filter-region"
        onMouseOver={showFilterRegion}
        onMouseLeave={hideFilterRegion}
      >
        <div className="filter-region-label-container">
          <button
            className="filter-region-label"
            type="button"
            value=""
            onClick={updateFilterRegionChange}
          >
            <a>Filter by Region</a>
            <i ref={filterLabel} className="fas fa-angle-down"></i>
          </button>
        </div>
        <form className="filter-region-options" ref={regionOptions}>
          <button
            type="button"
            value="africa"
            onClick={updateFilterRegionChange}
          >
            Africa
          </button>
          <button
            type="button"
            value="america"
            onClick={updateFilterRegionChange}
          >
            America
          </button>
          <button type="button" value="asia" onClick={updateFilterRegionChange}>
            Asia
          </button>
          <button
            type="button"
            value="europe"
            onClick={updateFilterRegionChange}
          >
            Europe
          </button>
          <button
            type="button"
            value="oceania"
            onClick={updateFilterRegionChange}
          >
            Oceania
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
