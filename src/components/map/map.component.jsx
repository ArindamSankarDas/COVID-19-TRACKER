import React from "react";
import { MapDiv } from "./map.styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { connect } from "react-redux";

const Map = ({ latitude, longitude }) => {
  return (
    <MapDiv>
      <MapContainer
        center={[latitude, longitude]}
        zoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapDiv>
  );
};

const mapSateToProps = ({ mapLocationData }) => ({
  latitude: mapLocationData.lat,
  longitude: mapLocationData.lng,
});

export default connect(mapSateToProps)(Map);
