import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MapScreen</Text>
      </View>
    );
  }
}
export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
