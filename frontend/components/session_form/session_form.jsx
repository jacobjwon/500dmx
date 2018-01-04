import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      typeUsername: null,
      typePassword: null,
      typeSubmit: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin (e) {
    this.setState({username: '', password: ''});
    const guest = { username: 'guest_user', password: 'password' };
    const username = {
      strings: [guest.username],
      typeSpeed: 50
    };
    const password = {
      strings: [guest.password],
      typeSpeed: 40
    };

    this.setState({
      typeUsername: setTimeout(() => {
        new Typed('.session-username', username);
      }, 50),
      typePassword: setTimeout(() => {
        new Typed('.session-password', password);
      }, 800),
      typeSubmit: setTimeout(() => {
        this.props.login(guest);
      }, 1700)
    });
  }

  componentWillUnmount () {
    clearTimeout(this.typeUsername);
    clearTimeout(this.typePassword);
    clearTimeout(this.typeSubmit);
  }

  render() {
    let headerTextChange, submitTextChange, formChange;
    if (this.props.formType === 'login') {
      headerTextChange = 'Log In to 500dmx';
      submitTextChange = 'Log in';
      formChange = (
        <div className="login-form-switch">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      );
    } else {
      headerTextChange = 'Sign Up';
      submitTextChange = 'Sign up';
      formChange = (
        <div className="login-form-switch">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      );
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>{headerTextChange}</h1>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <label>Username</label>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            <br/>
              <label>Password</label>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
              <input type="submit"
                value={submitTextChange}
                className="login-button"
              />
            <br/>
              <button className="demo-login-button" onClick={this.demoLogin}>
                <label>Demo Login</label>
              </button>
          </div>
          <br/>
          { formChange }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
