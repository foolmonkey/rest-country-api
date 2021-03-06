import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Link
        className="card-img"
        style={{ backgroundImage: `url(` + data.flag + `)` }}
        to={`/detail/${data.name.replace(/ /g, "_")}`}
      ></Link>

      <div className="card-body">
        <h2 className="card-title country">{data.name}</h2>

        <ul className="card-info">
          <li>
            <h3>Population:</h3>
            <p className="population">{data.population.toLocaleString()}</p>
          </li>
          <li>
            <h3>Region:</h3>
            <p className="region">{data.region}</p>
          </li>
          <li>
            <h3>Capital:</h3>
            <p className="capital">{data.capital}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
