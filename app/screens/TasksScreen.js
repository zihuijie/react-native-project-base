import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class TasksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TasksScreen</Text>
      </View>
    );
  }
}
export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
