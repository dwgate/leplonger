import React from 'react';

const SurfaceWeather = props => (
  <div className="col-md-12 weather-section panel-text">
    <img alt="current weather icon" src={`${props.weatherdata.current_observation.icon}.png`} />
    <span className="forecast surface-table">  {props.weatherdata.current_observation.icon}</span>
    <span className="temp data">{props.weatherdata.current_observation.temp_f}&#176;</span>
    <table className="table">
      <tbody>
        <tr>
          <td className="surface-table">Gusts <span className="data">{
            props.weatherdata.current_observation.wind_gust_mph}
          </span>
          </td>
          <td className="surface-table">Wind from <span className="data">{
            props.weatherdata.current_observation.wind_dir}
          </span>
          </td>
        </tr>
        <tr>
          <td className="surface-table">Dew Point: <span className="data">{
            props.weatherdata.current_observation.dewpoint_f}
          </span>
          </td>
          <td className="surface-table">Humidity: <span className="data">{
            props.weatherdata.current_observation.relative_humidity}
          </span>
          </td>
        </tr>
        <tr>
          <td className="surface-table">Precip Rate: <span className="data">{
            props.weatherdata.current_observation.precip_1hr_in}
          </span>
          </td>
          <td className="surface-table">Precip Accum <span className="data">{
            props.weatherdata.current_observation.precip_today_in}
          </span>
          </td>
        </tr>
        <tr>
          <td className="surface-table">Feels Like <span className="data">{
            props.weatherdata.current_observation.temp_f}
          </span>
          </td>
          <td className="surface-table">Pressure <span className="data">{
            props.weatherdata.current_observation.pressure_in}
          </span>
          </td>
        </tr>
        <tr>
          <td className="surface-table">Weather Provided by:<a href={props.weatherdata.current_observation.image.link}>
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
