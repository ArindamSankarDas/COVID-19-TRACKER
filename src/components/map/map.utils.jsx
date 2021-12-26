import React from "react";
import { Circle, Popup } from "react-leaflet";
import { InfoContainer, FlagImage } from "./map.styles";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    color: "#ed4061",
    multiplier: 800,
  },
  recovered: {
    color: "#82eb13",
    multiplier: 1200,
  },
  deaths: {
    color: "#f71716",
    multiplier: 2000,
  },
};

const ShowDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].color}
      fillColor={casesTypeColors[casesType].color}
      radius={Math.sqrt(
        country[casesType] * casesTypeColors[casesType].multiplier
      )}
    >
      <Popup>
        <InfoContainer>
          <FlagImage imageUrl={country.countryInfo.flag} />
          <h1>{country.country}</h1>
          <div>Cases: {numeral(country.cases).format("0,0")}</div>
          <div>Recovered:{numeral(country.recovered).format("0,0")} </div>
          <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </InfoContainer>
      </Popup>
    </Circle>
  ));

export default ShowDataOnMap;
