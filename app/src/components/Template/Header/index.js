/*
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * Local import
 */
// jwt
import { jWTKey } from 'src/config';

/*
 * Code
 */
class Header extends React.Component {
static propTypes = {
  dataText: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

  onChange = () => {
    this.props.actions.changeLanguage();
  }

  logOut = (evt) => {
    evt.preventDefault();
    // vider le token jwt
    localStorage.removeItem(jWTKey);
    // forcer le refresh
    window.location.reload(true);
    // document.location.reload(true);
    // effacer le token AdWord
    this.props.actions.Logout();
  }

  render() {
    // récupérer le texte de l'appli
    const {
      overview, campaigns, adgroups, ads, keywords,
    } = this.props.dataText;

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink to="/home" className="navbar-brand">Rosiviel</NavLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li id="header-overview"><NavLink to="/home">{overview}</NavLink></li>
              <li id="header-campaigns"><NavLink to="/campaigns">{campaigns}</NavLink></li>
              <li id="header-adgroups"><NavLink to="/adgroups">{adgroups}</NavLink></li>
              <li id="adsheader"><NavLink to="/ads">{ads}</NavLink></li>
              <li id="header-keywords"><NavLink to="/keywords">{keywords}</NavLink></li>
              <li id="header-logout">
                <button
                  type="button"
                  id="header-logout-button"
                  onClick={this.logOut}
                >
                  Logout <span className="glyphicon glyphicon-log-out" />
                </button>
              </li>
              <li className="active">
                <form className="navbar-form">
                  <div className="form-group">
                    <select
                      className="form-control"
                      onChange={this.onChange}
                    >
                      <option>English</option>
                      <option>Français</option>
                    </select>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/*
 * Export default
 */
export default Header;
