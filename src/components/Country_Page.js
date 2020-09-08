import React, { useEffect, useState, useContext } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import sprites from "../images/sprites.svg";
import Country_Info from "./Country_Info";
import { GetCountryInfo } from "./GetCountryInfo";

export default withRouter(function Country_Page({ match, location }) {
  const code = match.params.id;

  const [countryCode, setCountryCode] = useState(code);
  const [country, setCountry] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const updatedCode = location.pathname.slice(9);
    setCountryCode(updatedCode);

    async function getCountry() {
      try {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${countryCode}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
    getCountry();
  }, [location, match.params.id, countryCode]);
  return (
    <div className="button_container">
      <button className="button_arrow" onClick={(e) => history.push("/")}>
        <svg className="icon">
          <use href={`${sprites}#icon-arrow-left`}></use>
        </svg>
      </button>
      <Country_Info key={code} info={country} />
    </div>
  );
});
