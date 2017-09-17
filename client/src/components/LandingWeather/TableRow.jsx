import React from 'react';
import moment from 'moment';

const TableRow = (props) => {
  const day = moment.unix(props.darksky.time);
  const dayString = day._d.toString().slice(0, 4);
  return (
    <td>
      <span className="weather-box">{dayString}</span>
      <img alt="weather icon" className="weather-img" width="20px" src={`${props.darksky.icon}.png`} />
      <span className="weather-box">Temp</span>
      <span className="weather-box info">{props.darksky.temperatureMax}&#176;</span>
      <span className="weather-box">Wind Speed</span>
      <span className="weather-box info">{props.darksky.windSpeed} mph</span>
    </td>
  );
};

TableRow.propTypes = {
  // darksky: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TableRow.defaultProps = {
  // darksky: {},
};

export default TableRow;
