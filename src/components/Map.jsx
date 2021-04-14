import React from 'react';
import { TileLayer, useMap } from 'react-leaflet';
import { StyledMapContainer } from './Map.styles';
import { showDataOnMap } from './ShowDataOnMap';

const Map = ({ countries, casesType, center, zoom }) => {
  const ChangeView = ({ centered, zoomed }) => {
    const map = useMap();
    map.setView(centered, zoomed);
    return null;
  };

  return (
    <StyledMapContainer
      casesType={casesType}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <ChangeView centered={center} zoomed={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showDataOnMap(countries, casesType)}
    </StyledMapContainer>
  );
};

export default Map;
