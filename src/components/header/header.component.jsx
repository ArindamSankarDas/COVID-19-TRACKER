import React from "react";
import { HeaderDiv } from "./header.styles";
import { FormControl, Select, MenuItem } from "@material-ui/core";

import { connect } from "react-redux";
import {
  setCurrentCountry,
  setCountryInfo,
} from "../../redux/countries/countries.actions";

const Header = ({
  countriesData,
  country,
  setCurrentCountry,
  setCountryInfo,
}) => {
  let handleChange = (event) => {
    const countryCode = event.target.value;

    fetch(
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentCountry(`${countryCode}`);
        setCountryInfo(data);
      });
  };

  return (
    <HeaderDiv>
      <h1>COVID-19 TRACKER</h1>
      <FormControl>
        <Select variant="outlined" value={country} onClick={handleChange}>
          <MenuItem value="worldwide">WorldWide</MenuItem>

          {countriesData.map(({ countryName, countryCode }, index) => (
            <MenuItem value={countryCode} key={index}>
              {countryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </HeaderDiv>
  );
};

const mapSateToProps = ({ countryData }) => ({
  country: countryData.country,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
  setCountryInfo: (countryInfo) => dispatch(setCountryInfo(countryInfo)),
});

export default connect(mapSateToProps, mapDispatchToProps)(Header);
