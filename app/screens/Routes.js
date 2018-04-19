import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Switch, Router, Route } from 'react-router-native';

import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';
import createHistory from 'history/createMemoryHistory';

import withAuthentication from './withAuthentication';
// import AuthUserContext from './AuthUserContext';
// screens
import { Home, Landing, Login, PasswordChange, PasswordForget, Signup, UserProfile } from '../screens';
import * as routes from '../constants/routes';
const history = createHistory();

const Navigation = ({ authUser }) => (

  <View>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </View>
);

const NavigationAuth = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route exact path={routes.PASSWORDCHANGE} component={PasswordChange} />
    <Route exact path={routes.PASSWORDFORGET} component={PasswordForget} />
    <Route exact path={routes.USERPROFILE} component={UserProfile} />
  </Switch>
);

const NavigationNonAuth = () => (
  <Switch>
    <Route exact path={routes.LANDING} component={Landing} />
    <Route exact path={routes.LOGIN} component={Login} />
    <Route exact path={routes.SIGNUP} component={Signup} />
  </Switch>
);
const mapStateToProps = (state) => ({
  authUser: state.session.authUser,
});

const NavigationWithState = connect(mapStateToProps)(Navigation);

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <View style={{ flex: 1 }}>
          <NavigationWithState />
        </View>
      </Router>
    );
  }
}

const RouteWithAuthentication = withAuthentication(Routes);
export default RouteWithAuthentication;
