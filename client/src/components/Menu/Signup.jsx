import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      newPassword: '',
      repeated: '',
      age: '',
      skill: '',
      email: '',
    };

    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeated = this.handleRepeated.bind(this);
    this.handleSkill = this.handleSkill.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleUser(e) { this.setState({ username: e.target.value }); }
  handlePassword(e) { this.setState({ newPassword: e.target.value }); }
  handleRepeated(e) { this.setState({ repeated: e.target.value }); }
  handleEmail(e) { this.setState({ email: e.target.value }); }
  handleAge(e) { this.setState({ age: e.target.value }); }
  handleSkill(e) { this.setState({ skill: e.target.value }); }

  render() {
    return (
      <div>
        <div clasName="ol-sm-12">
          <div className="signup col-sm-6">
            <p>Username:</p>
            <input
              className="user-input"
              type="text"
              value={this.state.username}
              onChange={this.handleUser}
            />
          </div>
          <div className="signup col-sm-6">
            <p>Email:</p>
            <input
              className="user-input"
              type="text"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
        </div>

        <div clasName="ol-sm-12">
          <div className="signup col-sm-6">
            <p>Age:</p>
            <input
              className="user-input"
              type="text"
              value={this.state.age}
              onChange={this.handleAge}
            />
          </div>
          <div className="signup col-sm-6">
            <p>Skill:</p>
            <select className="user-input" onChange={this.handleSkill}>
              <option className="user-input" value="Beginner">Beginner</option>
              <option className="user-input" value="Intermediate">Intermediate</option>
              <option className="user-input" value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div clasName="ol-sm-12">
          <div className="signup col-sm-6">
            <p>Password:</p>
            <input
              className="user-input"
              type="password"
              value={this.state.newPassword}
              onChange={this.handlePassword}
            />
          </div>
          <div className="signup col-sm-6">
            <p>Repeat password:</p>
            <input
              className="user-input"
              type="password"
              value={this.state.repeated}
              onChange={this.handleRepeated}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <button
            className="signup-button cool-button"
            onClick={() => this.props.new_users(this.state.username,
              this.state.newPassword,
              this.state.repeated,
              this.state.skill,
              this.state.age,
              this.state.email)}
          >
          Submit</button>
        </div>

      </div>
    );
  }
}

Signup.propTypes = {
  new_users: React.PropTypes.func,
};

Signup.defaultProps = {
  new_users: () => {},
};

export default Signup;

