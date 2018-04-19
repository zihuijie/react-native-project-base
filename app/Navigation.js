import React from "react";
import { Router, Route, Switch } from "react-router-native";
import { View } from "react-native";
import { Body, Container, Header, Left, Right, Title } from "native-base";
import createHistory from "history/createMemoryHistory";

import {
  Home,
  Icon,
  Landing,
  Login,
  PasswordChange,
  PasswordForget,
  Signup,
  UserProfile
} from "./screens";
import * as routes from "./constants/routes";

const history = createHistory();

const Navigation = () => {
  return (
    <Router history={history}>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/">
            <Container>
              <Header>
                <Left>
                  <Icon onPress={() => history.goBack()} name="arrow-back" />
                </Left>
                <Body>
                  <Title>AladdinGo</Title>
                </Body>
                <Right />
              </Header>
              <Switch>
                <Route exact path={routes.LOGIN} component={() => <Login />} />
                <Route
                  exact
                  path={routes.SIGN_UP}
                  component={() => <SignUp />}
                />
                <Route exact path={routes.HOME} component={() => <Home />} />
                <Route
                  exact
                  path={routes.PASSWORDFORGET}
                  component={() => <PasswordForget />}
                />
                <Route
                  exact
                  path={routes.PASSWORDCHANGE}
                  component={() => <PasswordChange />}
                />
                <Route
                  exact
                  path={routes.USERPROFILE}
                  component={() => <UserProfile />}
                />
              </Switch>
            </Container>
          </Route>
        </Switch>
      </View>
    </Router>
  );
};

export default Navigation;
