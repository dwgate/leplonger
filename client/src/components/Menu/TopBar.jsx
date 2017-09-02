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

    this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
  }

  openModal() { this.setState({ modalIsOpen: true }); }
  closeModal() { this.setState({ modalIsOpen: false }); }
  openLoginModal() { this.setState({ modalLogin: true }); }
  closeLoginModal() { this.setState({ modalLogin: false }); }
  openSignupModal() { this.setState({ modalSignup: true }); }
  afterOpenSignupModal() { this.subtitle.style.color = '#777'; }
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
              contentLabel="Example Modal"
              style={{
                overlay: {
                  background: 'rgba(255, 255, 255, 0.4)',
                  position: 'absolute',
                  top: '40px',
                  left: '1000px',
                  height: 675,
                },
                content: {
                  background: 'rgba(63, 68, 119, 0.80)',
                  maxWidth: 1000,
                  height: 600,
                  color: '#a4b9f3',
                  right: '15px',
                },
              }}
            >
              <button className="cool-button" onClick={this.closeLoginModal}>&times;</button>
              <h2>Log in</h2>
              <Login
                logIn={this.props.logIn}
                close={this.closeLoginModal}
              />
            </Modal>
          </div> }
        {this.props.user ? null :
        <div className="signinForm" >
          <button className="cool-button" onClick={this.openSignupModal}>Sign Up</button>
          <Modal
            isOpen={this.state.modalSignup}
            onAfterOpen={this.afterOpenSignupModal}
            onRequestClose={this.closeSignupModal}
            contentLabel="Example Modal"
            style={{
              overlay: {
                background: 'rgba(255, 255, 255, 0.4)',
                position: 'absolute',
                top: '40px',
                left: '1000px',
                height: 675,
              },
              content: {
                background: 'rgba(63, 68, 119, 0.80)',
                maxWidth: 1000,
                height: 600,
                color: '#a4b9f3',
                right: '15px',
              },
            }}
          >
            <button className="cool-button" onClick={this.closeSignupModal}>&times;</button>
            <h2>Sign Up</h2>
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
                  background: 'rgba(255, 255, 255, 0.4)',
                  position: 'absolute',
                  top: '40px',
                  left: '1000px',
                  height: 675,
                },
                content: {
                  background: 'rgba(63, 68, 119, 0.80)',
                  maxWidth: 1000,
                  height: 600,
                  color: '#a4b9f3',
                  right: '15px',
                },
              }}
            >
              <button className="cool-button" onClick={this.closeModal}>&times;</button>
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
