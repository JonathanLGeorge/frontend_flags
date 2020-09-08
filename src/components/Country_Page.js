import React from "react";
import sprites from "../images/sprites.svg";
import Country_Info from "./Country_Info";
import { GetCountryInfo } from "./GetCountryInfo";

function Country_Page() {
  return (
    <div className="container">
      <button onClick={(e) => history.push("/")}>
        <svg className="icon">
          <use href={`${sprites}#icon-arrow-left`}></use>
        </svg>
        Back
      </button>
      <Country_Info key={code} country={country} />
    </div>
  );
}

export default Country_Page;
