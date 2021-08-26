import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../countrydetails.css";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    };
    fetchCountryData();
  }, []);

  const filterByRegion = async (region: string) => {
    if (region === "") return;
    const res = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const data = await res.json();
    await setCountries(data);
  };

  const searchCountry = async (term: string) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`);
    const data = await res.json();
    await console.log(data);
    await setCountries(data);
  };

  return (
    <div>
      <div className="searchBar">
        <form action="" className="form">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for the country"
            onChange={(term) => searchCountry(term.target.value)}
          />
        </form>

        <div className="region">
          <select
            name="select"
            id="select"
            className="select"
            onChange={(val) => filterByRegion(val.target.value)}
          >
            <option value="">Select a region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="gridContainer">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <div key={numericCode}>
              <img src={flag} alt={name} />
              <div className="countryDetails">
                <h2>{name}</h2>
                <h3>
                  Population: <span>{population}</span>
                </h3>
                <h3>
                  Region: <span>{region}</span>
                </h3>
                <h3>
                  Capital: <span>{capital}</span>
                </h3>
                <div className="buttonContainer">
                  <Link to={`/countries/${name}`} className="detailButton">
                    View details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Countries;
