import React, { createContext, useState, useEffect } from "react";

export const GetCountryInfo = createContext();

export default function CountryContextProvider(props) {
  const [countries, setCountries] = useState([]);
  const [countryNames, setCountryName] = useState([]);

  async function getCountryInfo() {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      setCountries(data);
      setCountryName(
        data.map((country) => {
          return {
            name: country.name,
            code: country.alph3Code,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCountryInfo();
  }, []);
  return (
    <GetCountryInfo.Provider
      value={{
        countries,
        countryNames,
        setCountries,
        getCountryInfo,
      }}
    >
      {props.children}
    </GetCountryInfo.Provider>
  );
}
