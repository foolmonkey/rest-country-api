import React from "react";

const Filter = () => {
  return (
    <div className="filters">
      <div className="searchbar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..."></input>
      </div>

      <div className="filter-region">
        <button className="filter-region-label">
          <a>Filter by Region</a>
          <i class="fas fa-angle-down"></i>
        </button>
        <div className="filter-region-options">
          <button>Africa</button>
          <button>America</button>
          <button>Asia</button>
          <button>Europe</button>
          <button>Oceania</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
