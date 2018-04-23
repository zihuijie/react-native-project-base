import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { StyleSheet, Text, View } from "react-native";
import { Button, ListItem, List } from "native-base";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Home;
