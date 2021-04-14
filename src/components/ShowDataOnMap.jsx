import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import {
  Info,
  InfoContainer,
  InfoFlag,
  InfoTitle,
  InfoName,
} from './ShowDataOnMap.styles';

// import './ShowDataOnChange.css';

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    mulitiplier: 800,
  },

  recovered: {
    hex: '#7DD71D',
    mulitiplier: 1200,
  },

  deaths: {
    hex: '#C0C0C0',
    mulitiplier: 2000,
  },
};

//Draw circles on the map
export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      key={Math.random()}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
      }
    >
      <Popup>
        <InfoContainer>
          <InfoFlag flag={`url(${country.countryInfo.flag})`} />

          <InfoName>{country.country}</InfoName>
          <Info>
            <InfoTitle>Cases: </InfoTitle>
            {numeral(country.cases).format('0,0')}
          </Info>
          <Info>
            <InfoTitle>Recovered: </InfoTitle>
            {numeral(country.recovered).format('0,0')}
          </Info>
          <Info>
            <InfoTitle>Deaths: </InfoTitle>
            {numeral(country.deaths).format('0,0')}
          </Info>
        </InfoContainer>
      </Popup>
    </Circle>
  ));
