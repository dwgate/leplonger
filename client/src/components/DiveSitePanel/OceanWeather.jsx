import React from 'react';
import { Bar } from 'react-chartjs-2';

const OceanWeather = props => (
  <div className="col-md-12 weather-section panel-text">
    <Bar
      data={props.data}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: 'Wave Height Last 12 Hours',
          fontColor: '#8d8d8d',
          fontFamily: 'helvetica',
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Height In Feet',
            },
          }],
        },
      }}
    />
    <p>Data for this dive site provided by NDBC Bouy: #{props.bouy}</p>
  </div>
);

OceanWeather.propTypes = {
  bouy: React.PropTypes.string,
  data: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

OceanWeather.defaultProps = {
  bouy: '...loading...',
  data: {},
};

export default OceanWeather;
