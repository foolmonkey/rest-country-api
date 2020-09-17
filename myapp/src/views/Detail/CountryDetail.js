import React, { useEffect, useState } from "react";

const CountryDetail = (props) => {
  const countryName = props.match.params.name.replace(/_/g, " ");

  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    if (props.countriesData.length !== 0) {
      let countryMatch = props.countriesData.find(
        (item) => item.name === countryName
      );

      setCountryInfo(countryMatch);
    }
  }, [props.countriesData]);

  const FilteredItems = (items, propertyName) => {
    let filtered = "";

    for (let i = 0; i < items.length; i++) {
      let property = items[i];

      if (propertyName) {
        property = items[i][propertyName];
      }
      filtered += property;

      if (i < items.length - 1) {
        filtered += ", ";
      }
    }

    return <div>{filtered}</div>;
  };

  const Borders = (items) => {
    let filtered = [];

    for (let i = 0; i < items.length; i++) {
      let property = items[i];
      property = props.countriesData.find(
        (item) => item.alpha3Code === property
      );
      let link = "/detail/" + property.name;

      let Button = (
        <a href={link} key={i}>
          <button tabIndex="-1">{property.name}</button>
        </a>
      );

      filtered.push(Button);
    }

    if (filtered.length == 0) {
      return null;
    } else {
      return (
        <li className="bordercountries">
          <h3>Border Countries:</h3>
          <div>{filtered}</div>
        </li>
      );
    }
  };

  return (
    <main className="country-detail-container">
      <button type="button" className="back">
        <a href="/home" tabIndex="-1">
          <i class="fas fa-arrow-left"></i>
          <p>Back</p>
        </a>
      </button>

      {countryInfo.name === countryName && (
        <section className="country-detail">
          <a
            className="card-img"
            style={{ backgroundImage: `url(` + countryInfo.flag + `)` }}
          ></a>

          <div className="card-body">
            <h2 className="card-title country">{countryInfo.name}</h2>

            <ul className="card-info">
              <div className="divider">
                <div>
                  <li>
                    <h3>Population:</h3>
                    <p className="population">
                      {countryInfo.population.toLocaleString()}
                    </p>
                  </li>
                  <li>
                    <h3>Region:</h3>
                    <p className="region">{countryInfo.region}</p>
                  </li>
                  <li>
                    <h3>Sub Region:</h3>
                    <p className="subregion">{countryInfo.subregion}</p>
                  </li>
                  <li>
                    <h3>Capital:</h3>
                    <p className="capital">{countryInfo.capital}</p>
                  </li>
                </div>

                <div className="additional">
                  <li>
                    <h3>Top Level Domain:</h3>
                    <p className="topleveldomain">
                      {countryInfo.topLevelDomain}
                    </p>
                  </li>
                  <li className="currencies">
                    <h3>Currencies:</h3>
                    {FilteredItems(countryInfo.currencies, "name")}
                  </li>
                  <li className="languages">
                    <h3>Languages:</h3>
                    {FilteredItems(countryInfo.languages, "name")}
                  </li>
                </div>
              </div>

              {Borders(countryInfo.borders)}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export default CountryDetail;
