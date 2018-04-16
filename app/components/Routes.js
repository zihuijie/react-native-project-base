import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Switch, Router, Route } from 'react-router-native';

import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';
import createHistory from 'history/createMemoryHistory';

import AuthUserContext from './AuthUserContext';
// screens
import { Home, Landing, Login, Signup } from '../screens';

const history = createHistory();

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
  </Switch>
);

const NavigationNonAuth = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </Router>
    );
  }
}
export default Routes;
