import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { GraphContainer } from './LineGraph.styles';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          parser: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const buildChartData = (data, cases) => {
  const chartData = [];
  let lastDataPoint;

  // eslint-disable-next-line
  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[cases][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[cases][date];
  }

  return chartData;
};

const LineGraph = ({ casesType, country }) => {
  const [historyData, setHistoryData] = useState({});

  const url = country === 'worldwide' ? 'all' : country;

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/historical/${url}?lastdays=120`
      );

      const dataType = country === 'worldwide' ? data : data.timeline;

      const charData = buildChartData(dataType, casesType);

      setHistoryData(charData);
    };

    fetchHistory();
  }, [casesType, country]);

  return (
    <GraphContainer>
      {historyData?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(0, 128, 255, 0.5)',
                borderColor: 'rgba(0, 128, 255, 1)',
                data: historyData,
              },
            ],
          }}
        />
      )}
    </GraphContainer>
  );
};

export default LineGraph;
