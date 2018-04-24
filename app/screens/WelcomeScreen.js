import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: "none"
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Welcome To AladdinGo</Text>
        </View>
        <View>
          <Text>
            AladdinGo finds what you need by connecting you to the best people
            nearby
          </Text>
        </View>
        <Button
          title="Let Get Started"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
