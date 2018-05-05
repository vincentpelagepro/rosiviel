/*
 * Npm import
 */
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
/*
 * Local import
 */

// containers
import Login from 'src/containers/Login';
import Home from 'src/containers/Home';
import Campaigns from 'src/containers/Campaigns';
import Adgroups from 'src/containers/Adgroups';
import Keywords from 'src/containers/Keywords';
import Ads from 'src/containers/Ads';
import Top from 'src/containers/Top';
import Header from 'src/containers/Header';

// composents
import Footer from 'src/components/Template/Footer';
// import NotFound from 'src/components/NotFound';
// import Loading from 'src/components/Loading';

// jwt
import { jWTKey } from 'src/config';

/*
 * Code
 */
class App extends React.Component {
  render() {
    // console.log(localStorage.token);
    if (!localStorage[jWTKey]) {
      return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
          {/* <Route component={NotFound} /> */}
        </Switch>
      );
    }
    return (
      <div id="app">
        <Route path="/:slug" component={Header} />

        <Switch>
          {/* // <Route exact path="/" component={Login} /> */}

          <Route exact path="/home" component={Home} />
          <Route exact path="/campaigns" component={Campaigns} />
          <Route exact path="/adgroups" component={Adgroups} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/keywords" component={Keywords} />


          <Route exact path="/:groupType/top-5/:topType" component={Top} />

          {/*  si rien ne match : redirection vers home */}
          <Redirect to="/home" />
          {/* ou Route 404 */}
          {/* <Route component={NotFound} /> */}
        </Switch>

        {/* Footer ssi url != '/' */}
        <Route path="/:slug" component={Footer} />

      </div>
    );
  }
}


/*
 * Export default
 */
export default App;
