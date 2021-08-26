import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams() as any;

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryDetails();
  }, []);

  return (
    <div className="mainContainer">
      <div className="backButton">
        <FaLongArrowAltLeft />
        <Link to="/" className="linkContainer">
          <i className="fas fa-arrow-left"></i>
          Back Home
        </Link>
      </div>
      <div className="country">
        {country.map((country) => {
          const {
            numericCode,
            flag,
            name,
            population,
            region,
            subregion,
            currencies,
            languages,
            capital,
          }: {
            numericCode: string;
            flag: string;
            name: string;
            population: number;
            region: string;
            subregion: string;
            currencies: any;
            languages: any;
            capital: string;
          } = country;
          return (
            <div key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="information">
                <h2 className="country-name">
                  Country name: <span>{name}</span>
                </h2>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Subregion: <span>{subregion}</span>
                </h4>
                <h4>
                  Currencies: <span>{currencies[0].name}</span>
                </h4>
                <h4>
                  Languages: <span>{languages[0].name}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CountryDetails;
