import React from 'react';
import Modal from 'react-modal';
import Login from './LogIn.jsx';
import Signup from './Signup.jsx';
import NewDiveSite from './NewDiveSite.jsx';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
  }

  openModal() { this.setState({ modalIsOpen: true }); }
  closeModal() { this.setState({ modalIsOpen: false }); }
  openLoginModal() { this.setState({ modalLogin: true }); }
  closeLoginModal() { this.setState({ modalLogin: false }); }
  openSignupModal() { this.setState({ modalSignup: true }); }
  closeSignupModal() { this.setState({ modalSignup: false }); }

  logOutFunc() {
    this.props.logout();
    this.closeLoginModal();
  }


  render() {
    return (
      <div>
        {this.props.user ?
          <div className="loginForm">
            <button
              className="cool-button"
              onClick={() => this.logOutFunc()}
            >Log Out</button>
          </div> :
          <div className="loginForm">
            <button className="cool-button" onClick={this.openLoginModal}>Log in</button>
            <Modal
              isOpen={this.state.modalLogin}
              onRequestClose={this.closeLoginModal}
              contentLabel="Login Modal"
              style={{
                overlay: {
                  position: 'absolute',
                  top: '40px',
                  left: '1000px',
                  float: 'right',
                  height: 0,
                },
                content: {
                  background: '#e5e5e5',
                  maxWidth: 1000,
                  height: 200,
                  color: '#a4b9f3',
                  right: '30px',
                },
              }}
            >
              <button className="cool-button exit" onClick={this.closeLoginModal}>&times;</button>
              <Login
                logIn={this.props.logIn}
                close={this.closeLoginModal}
              />
            </Modal>
          </div> }
        {!this.props.user &&
        <div className="signinForm" >
          <button className="cool-button" onClick={this.openSignupModal}>Sign Up</button>
          <Modal
            isOpen={this.state.modalSignup}
            onRequestClose={this.closeSignupModal}
            contentLabel="Signup Modal"
            style={{
              overlay: {
                position: 'absolute',
                top: '40px',
                left: '1000px',
                float: 'right',
                height: 0,
              },
              content: {
                background: '#e5e5e5',
                maxWidth: 1000,
                height: 400,
                color: '#a4b9f3',
                right: '30px',
              },
            }}
          >
            <button className="cool-button exit" onClick={this.closeSignupModal}>&times;</button>
            <Signup
              new_users={this.props.new_users}
              closeModal={this.closeSignupModal}
            />
          </Modal>
        </div>}
        {this.props.dive_sites ?
          <div className="add_dive_site">
            <button className="cool-button" onClick={this.openModal}>Add New Site</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  position: 'absolute',
                  top: '40px',
                  left: '1000px',
                  float: 'right',
                  height: 0,
                },
                content: {
                  background: '#e5e5e5',
                  maxWidth: 1000,
                  height: 400,
                  color: '#a4b9f3',
                  right: '15px',
                },
              }}
            >
              <button className="cool-button exit" onClick={this.closeModal}>&times;</button>
              <NewDiveSite
                newDiveSite={this.props.newDiveSite}
                close={this.closeModal}
              />
            </Modal>
          </div> : null }
      </div>
    );
  }

}

TopBar.propTypes = {
  newDiveSite: React.PropTypes.func,
  logout: React.PropTypes.func,
  user: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  dive_sites: React.PropTypes.bool,
};

TopBar.defaultProps = {
  newDiveSite: () => {},
  logout: () => {},
  dive_sites: false,
  user: {},
};

export default TopBar;
