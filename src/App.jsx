import React, { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';
import axios from 'axios';

import InfoBox from './components/InfoBox';
import Map from './components/Map';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      const { data } = await axios.get(
        'https://disease.sh/v3/covid-19/countries'
      );
      const countriesInfo = data.map((c) => ({
        name: c.country,
        value: c.countryInfo.iso2,
      }));
      setCountries(countriesInfo);
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((c) => (
                <MenuItem key={c.name} value={c.value}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus Vases" cases={123} total={2000} />

          <InfoBox title="Recovered" cases={124} total={3000} />

          <InfoBox title="Deaths" cases={125} total={200} />
        </div>

        {/* Map */}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
