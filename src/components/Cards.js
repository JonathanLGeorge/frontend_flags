import React, { useContext } from "react";
import { Link } from "react-router-dom";
function Cards({ info }) {
  return (
    <Link to={`/country/${info.alpha3Code}`}>
      <div card_img>
        <img className="flag_img" src={info.flag} alt={info.name} />
      </div>
      <div>
        <h2 className="card_country">{info.name}</h2>
        <p className="card_pop">Population: {info.population}</p>
        <p className="card_region">Region: {info.region}</p>
        <p className="card_cap">Capital: {info.capital}</p>
      </div>
    </Link>
  );
}

export default Cards;
