import React, { useRef } from "react";

const Filter = (props) => {
  const regionOptions = useRef(null);
  const searchInput = useRef(null);
  const filterLabel = useRef(null);
  const filterLabelText = useRef(null);

  function showFilterRegion() {
    let item = regionOptions.current;
    item.style.visibility = "unset";
  }

  function hideFilterRegion() {
    let item = regionOptions.current;
    item.style.visibility = "hidden";
  }

  function updateFilterRegionChange(ele) {
    if (ele.target.value !== undefined) {
      if (ele.target.value.length > 1) {
        filterLabelText.current.textContent =
          ele.target.value.charAt(0).toUpperCase() + ele.target.value.slice(1);
        filterLabel.current.className = "fas fa-times-circle";
      } else {
        filterLabel.current.className = "fas fa-angle-down";
        filterLabelText.current.textContent = "Filter by Region";
      }
    } else {
      filterLabel.current.className = "fas fa-angle-down";
      filterLabelText.current.textContent = "Filter by Region";
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
          name="Search"
          aria-label="Search"
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
            <button ref={filterLabelText}>Filter by Region</button>
            <i ref={filterLabel} className="fas fa-angle-down"></i>
          </button>
        </div>
        <section className="filter-region-options" ref={regionOptions}>
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
        </section>
      </div>
    </div>
  );
};

export default Filter;
