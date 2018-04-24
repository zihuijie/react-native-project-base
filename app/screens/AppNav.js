import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import { View, Text } from "react-native";

import AppDrawerNavigator from "./AppDrawerNavigator";
// import screens
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

const AppNav = new createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNav;
