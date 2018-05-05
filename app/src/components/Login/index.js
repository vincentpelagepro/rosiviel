/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Particle from './Particle';

/*
 * Local import
 */


/*
 * Code
 */
class Login extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }
  onChange = (evt) => {
    // récuperer la value de l'input
    const { value, name } = evt.target;

    const valueSecured = value.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    // envoyer dans le state local
    this.props.actions.changeLogin(name, valueSecured);
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { login, password } = this.props;

    if (login.length !== 0 && password.length !== 0) {
      this.props.actions.getDataFromDB();
      this.props.actions.clearLogin();
    }
  }

  render() {
    const { login, password } = this.props;
    return (
      <div id="login">
        <Particle />
        <div id="particles-js">
          <h1>Rosiviel AdWords Reporting</h1>
          <form
            method="post"
            onSubmit={this.onSubmit}
          >
            <div className="form-group">
              <label htmlFor="email">Username:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Username"
                name="login"
                onChange={this.onChange}
                value={login}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Password"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-default"
            >
              S'identifier/Login
            </button>
            <p id="access"><a href="mailto:rosivielTeam@rosiviel.fr">Ask for an access to our team</a></p>
          </form>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Login;
