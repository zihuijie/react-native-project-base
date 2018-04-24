import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Complete Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
