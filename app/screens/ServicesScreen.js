import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ServicesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ServicesScreen</Text>
      </View>
    );
  }
}
export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
