import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HeaderButtons from "react-navigation-header-buttons";
// import screens
import MapScreen from "./MapScreen";
import MessageScreen from "./MessageScreen";
import ServicesScreen from "./ServicesScreen";
import TasksScreen from "./TasksScreen";

const HomeScreenTabNavigator = new createBottomTabNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: () => <Ionicons name="md-compass" size={24} />
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarLabel: "Message",
      tabBarIcon: () => <Ionicons name="md-chatboxes" size={24} />
    }
  },
  Tasks: {
    screen: TasksScreen,
    navigationOptions: {
      tabBarLabel: "Tasks",
      tabBarIcon: () => <Ionicons name="md-briefcase" size={24} />
    }
  },
  Services: {
    screen: ServicesScreen,
    navigationOptions: {
      tabBarLabel: "Services",
      tabBarIcon: () => <Ionicons name="md-calendar" size={24} />
    }
  }
});
class AppTabNavigator extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderButtons>
          <HeaderButtons.Item
            buttonWrapperStyle={{ marginTop: 19 }}
            IconElement={<Ionicons name="md-menu" size={24} />}
            onPress={() => navigation.navigate("DrawerOpen")}
          />
        </HeaderButtons>
      )
    };
  };
  render() {
    return (
      <HomeScreenTabNavigator
        screenProps={{ navigation: this.props.navigation }}
      />
    );
  }
}
export default AppTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
