import React from "react";
import { MapDiv } from "./map.styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { ShowDataOnMap } from "./map.utils";
import { connect } from "react-redux";

const Map = ({ latitude, longitude, countriesMapData }) => {
  return (
    <MapDiv>
      <MapContainer center={[latitude, longitude]} zoom={1}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          {ShowDataOnMap(countriesMapData)}
        </Marker>
      </MapContainer>
    </MapDiv>
  );
};

const mapSateToProps = ({ mapLocationData }) => ({
  latitude: mapLocationData.lat,
  longitude: mapLocationData.lng,
  countriesMapData: mapLocationData.countriesData,
});

export default connect(mapSateToProps)(Map);
