import React, { useContext } from "react";
import { GetCountryInfo } from "./GetCountryInfo";

function Country_Info({ info }) {
  const { countryName } = useContext(GetCountryInfo);
  console.log(info);
  return info ? (
    <div className="details">
      <div className="details_flag">
        <img src={info.flag} alt={info.name + "flag"} />
      </div>
      <div className="details_info">
        <h3>{info.name}</h3>
        <div>
          <p>
            <b>Native Name: </b>
            {info.nativeName}
          </p>
          <p>
            <b>Population: </b>
            {Number(info.population).toLocaleString()}
          </p>
          <p>
            <b>Region: </b>
            {info.region}
          </p>
          <p>
            <b>Sub Region: </b>
            {info.subregion}
          </p>
          <p>
            <b>Sub Region: </b>
            {info.capital}{" "}
          </p>
          <p>
            <b>Currencies: </b>
            {info.currencies.map((icon) => `${icon.name} (${icon.symbol})`)}
          </p>
          <p>
            <b>Languages: </b>
            {info.languages.map((item) => item.name).join(",")}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div>LOADING</div>
  );
}
export default Country_Info;
