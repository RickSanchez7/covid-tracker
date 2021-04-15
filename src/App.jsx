import React, { useEffect, useState } from 'react';

import { CardContent } from '@material-ui/core';
import axios from 'axios';

import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Table from './components/Table';
import LineGraph from './components/LineGraph';
import { sortData } from './utils/sortData';
import { prettyPrintStat } from './utils/prettyPrintStat';

import {
  AppContainer,
  AppGraphTitle,
  AppHeader,
  AppLeftContainer,
  AppRightContainer,
  AppStats,
  H1,
  H3,
  StyledFormControl,
  StyledSelect,
  StyledMenuItem,
} from './App.styles';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [countryName, setCountryName] = useState('Worldwide');
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [zoom, setZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Initial data load
    const fetchWorldWide = async () => {
      const { data } = await axios.get('https://disease.sh/v3/covid-19/all');
      setCountryInfo(await data);
    };

    fetchWorldWide();
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      const { data } = await axios.get(
        'https://disease.sh/v3/covid-19/countries'
      );
      const countriesInfo = data.map((c) => ({
        name: c.country,
        value: c.countryInfo.iso2,
      }));

      const sortedData = sortData(data);

      setTableData(sortedData);
      setCountries(countriesInfo);
      setMapCountries(data);
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    setLoading(true);

    const countryCode = e.target.value;

    setCountryName(e.currentTarget.textContent);

    setCountry(countryCode);

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const { data } = await axios.get(url);
    setCountry(countryCode);

    // all the data from country selected
    setCountryInfo(await data);
    setLoading(false);

    // console.log(data);
    if (countryCode === 'worldwide') setMapCenter([34.80746, -40.4796]);
    else setMapCenter([data.countryInfo.lat, data.countryInfo.long]);

    setZoom(4);
  };

  return (
    <AppContainer>
      <AppLeftContainer>
        <AppHeader>
          <H1>COVID-19 TRACKER</H1>
          <StyledFormControl>
            <StyledSelect
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <StyledMenuItem value="worldwide">Worldwide</StyledMenuItem>
              {countries.map((c) => (
                <StyledMenuItem key={c.name} value={c.value}>
                  {c.name}
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </StyledFormControl>
        </AppHeader>
        <AppStats>
          <InfoBox
            isred
            active={casesType === 'cases'}
            // className="infoBox__cases"
            onClick={() => setCasesType('cases')}
            title="Coronavirus Cases"
            total={prettyPrintStat(countryInfo.cases)}
            cases={prettyPrintStat(countryInfo.todayCases)}
            isloading={isLoading}
          />

          <InfoBox
            active={casesType === 'recovered'}
            className="infoBox__recovered"
            onClick={() => setCasesType('recovered')}
            title="Recovered"
            total={prettyPrintStat(countryInfo.recovered)}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            isloading={isLoading}
          />

          <InfoBox
            isgrey
            active={casesType === 'deaths'}
            className="infoBox__deaths"
            onClick={() => setCasesType('deaths')}
            title="Deaths"
            total={prettyPrintStat(countryInfo.deaths)}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            isloading={isLoading}
          />
        </AppStats>

        {/* Map */}
        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={zoom}
          casesType={casesType}
        />
      </AppLeftContainer>
      <AppRightContainer>
        <CardContent>
          <H3>Live Cases by Country</H3>
          <Table countries={tableData} />
          <AppGraphTitle>
            {countryName} new {casesType}
          </AppGraphTitle>
          {/* Graph */}
          <LineGraph casesType={casesType} country={country} />
        </CardContent>
      </AppRightContainer>
    </AppContainer>
  );
}

export default App;
