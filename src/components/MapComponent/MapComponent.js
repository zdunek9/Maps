import React from "react";
import { Marker, Polyline, useMap } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";


function MapComponent({ getPosition }) {

  return (
    <MapContainer
      center={getPosition}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={getPosition} />
    </MapContainer>
  );
}

export default MapComponent;
