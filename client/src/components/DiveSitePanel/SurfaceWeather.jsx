import React from 'react';

const SurfaceWeather = props => (
  <div className="col-md-12 weather-section">
    <img alt="current weather icon" src={`${props.weatherdata.current_observation.icon}.png`} />
    <span className="forecast">{props.weatherdata.current_observation.icon}</span>
    <span className="temp data">{props.weatherdata.current_observation.temp_f}&#176;</span>
    <table className="table">
      <tbody>
        <tr>
          <td>Gusts <span className="data">{
            props.weatherdata.current_observation.wind_gust_mph}
          </span>
          </td>
          <td>Wind from <span className="data">{
            props.weatherdata.current_observation.wind_dir}
          </span>
          </td>
        </tr>
        <tr>
          <td>Dew Point: <span className="data">{
            props.weatherdata.current_observation.dewpoint_f}
          </span>
          </td>
          <td>Humidity: <span className="data">{
            props.weatherdata.current_observation.relative_humidity}
          </span>
          </td>
        </tr>
        <tr>
          <td>Precip Rate: <span className="data">{
            props.weatherdata.current_observation.precip_1hr_in}
          </span>
          </td>
          <td>Precip Accum <span className="data">{
            props.weatherdata.current_observation.precip_today_in}
          </span>
          </td>
        </tr>
        <tr>
          <td>Feels Like <span className="data">{
            props.weatherdata.current_observation.temp_f}
          </span>
          </td>
          <td>Pressure <span className="data">{
            props.weatherdata.current_observation.pressure_in}
          </span>
          </td>
        </tr>
        <tr>
          <td>Weather Provided by:<a href={props.weatherdata.current_observation.image.link}>
            <img
              alt=""
              width="50px"
              src={props.weatherdata.current_observation.image.url}
            /></a>
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>
);

SurfaceWeather.propTypes = {
  weatherdata: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

SurfaceWeather.defaultProps = {
  weatherdata: {},
};

export default SurfaceWeather;
