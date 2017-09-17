import React from 'react';

class NewDiveSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      longitude: '',
      latitude: '',
      rating: null,
      description: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handleLongitude = this.handleLongitude.bind(this);
    this.handleLatitude = this.handleLatitude.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleName(e) { this.setState({ name: e.target.value }); }
  handleLongitude(e) { this.setState({ longitude: e.target.value }); }
  handleLatitude(e) { this.setState({ latitude: e.target.value }); }
  handleRating(e) { this.setState({ rating: e.target.value }); }
  handleDescription(e) { this.setState({ description: e.target.value }); }

  handleClick() {
    this.props.newDiveSite(
          this.state.name,
          this.state.longitude,
          this.state.latitude,
          this.state.rating,
          this.state.description);

    this.props.close();
  }

  render() {
    return (
      <div>
        <div className="signup col-sm-6">
          <p>Name:</p>
          <input
            className="user-input"
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
        </div>
        <div className="signup col-sm-6">
          <p>Difficulty:</p>
          <select className="user-input" onChange={this.handleSkill}>
            <option className="user-input" value="Beginner">Beginner</option>
            <option className="user-input" value="Intermediate">Intermediate</option>
            <option className="user-input" value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="signup col-sm-6">
          <p>Latitude:</p>
          <input
            className="user-input"
            type="text"
            value={this.state.latitude}
            onChange={this.handleLatitude}
          />
        </div>
        <div className="signup col-sm-6">
          <p>Longitude:</p>
            <input
              className="user-input"
              type="text"
              value={this.state.longitude}
              onChange={this.handleLongitude}
            />
        </div>


        <div className="signup col-sm-12">
          <p> Description:
            <input
              className="user-input user-input-site"
              type="text"
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </p>
          <button className="cool-button cool-button-addsite" onClick={() => this.handleClick()}>Add Site</button>
        </div>

      </div>
    );
  }
}

NewDiveSite.propTypes = {
  newDiveSite: React.PropTypes.func,
  close: React.PropTypes.func,
};

NewDiveSite.defaultProps = {
  newDiveSite: () => {},
  close: () => {},
};

export default NewDiveSite;
