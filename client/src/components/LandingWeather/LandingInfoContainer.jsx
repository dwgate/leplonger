import React from 'react';
import LandingInfoNorth from './LandingInfoNorth.jsx';
import LandingInfoCentral from './LandingInfoCentral.jsx';
import LandingInfoSouth from './LandingInfoSouth.jsx';

const LandingInfoContainer = props => (
  <div className="col-md-3 scroll">
    <div className="left-col">
      <LandingInfoNorth darksky={props.darksky} />
      <LandingInfoCentral darksky={props.darksky} />
      <LandingInfoSouth darksky={props.darksky} />
    </div>
  </div>
);

LandingInfoContainer.propTypes = {
  // darksky: React.PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

LandingInfoContainer.defaultProps = {
  // darksky: [],
};

export default LandingInfoContainer;
