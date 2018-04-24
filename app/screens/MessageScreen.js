import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MessageScreen</Text>
      </View>
    );
  }
}
export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
