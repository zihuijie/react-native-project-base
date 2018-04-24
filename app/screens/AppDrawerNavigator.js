import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import AppTabNavigator from "./AppTabNavigator";

const InnerStackNavigator = new createStackNavigator({
  TabNavigator: {
    screen: AppTabNavigator
  }
});

const AppDrawerNavigator = new createDrawerNavigator({
  Home: { screen: InnerStackNavigator }
});

export default AppDrawerNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
