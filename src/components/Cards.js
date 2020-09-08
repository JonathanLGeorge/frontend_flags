import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Cards({ info }) {
  return (
    <Link className="card_country" to={`/country/${info.alpha3Code}`}>
      <div className="card_img">
        <img src={info.flag} alt={info.name} />
      </div>
      <div className="card_info">
        <h2 className="card_name">{info.name}</h2>
        <p className="card_pop">Population: {info.population}</p>
        <p className="card_region">Region: {info.region}</p>
        <p className="card_cap">Capital: {info.capital}</p>
      </div>
    </Link>
  );
}

export default Cards;
