import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { Link } from "react-router-native";
import styles from "./styles";

const backgroundImage = require("../../../assets/images/splash.png");

class Landing extends React.Component {
  static navigationOptions = {
    title: "Welcome to the app!"
  };

  _showMoreApp = () => {
    console.log("go to next");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={backgroundImage} style={styles.backgroundImage} />
        </View>
        <Button block onPress={this._showMoreApp}>
          <Link to="/login">
            <Text style={styles.text}>Let's Begin</Text>
          </Link>
        </Button>
      </View>
    );
  }
}

export default Landing;
