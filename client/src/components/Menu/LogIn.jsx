import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      password: '',
      login: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) { this.setState({ value: e.target.value }); }
  handlePassword(e) { this.setState({ password: e.target.value }); }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ login: !prevState.login }));
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-6">
          <div className="loginUserName">
            Username:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="loginUserName">
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
        </div>
        <div className="col-md-12 btn-ctr">
          <button
            className="cool-button"
            onClick={() => this.props.logIn(this.state.value, this.state.password)}
          >Sign In </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: React.PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
