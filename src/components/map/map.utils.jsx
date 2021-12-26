import React from "react";
import { Circle, Popup } from "react-leaflet";
import { InfoContainer, FlagImage } from "./map.styles";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const ShowDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={Math.sqrt(
        country[casesType] * casesTypeColors[casesType].multiplier
      )}
    >
      <Popup>
        <InfoContainer>
          <FlagImage imageUrl={country.countryInfo.flag} />
          <h1>{country.country}</h1>
          <div>Cases: {country.cases}</div>
          <div>Recovered:{country.recovered} </div>
          <div>Deaths: {country.deaths}</div>
        </InfoContainer>
      </Popup>
    </Circle>
  ));
