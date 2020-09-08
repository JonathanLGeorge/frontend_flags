import React, { useContext } from "react";
import Cards from "./Cards";
import { GetCountryInfo } from "./GetCountryInfo";

function Container_Main() {
  const { countries } = useContext(GetCountryInfo);
  return (
    <div className="container">
      <div className="canvas">
        {countries.map((country) => (
          <Cards key={country.alpha3code} info={country} />
        ))}
      </div>
    </div>
  );
}

export default Container_Main;
