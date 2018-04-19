import React, { Component } from "react";
import { Provider } from "react-redux";
import { YellowBox } from "react-native";
import { Font, AppLoading } from "expo";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigation from "./Navigation";

import store from "./store";

console.disableYellowBox = true;

EStyleSheet.build({
  $primary: "#2552AC",
  $secondary: "#597FCA",
  $third: "#5AC8D8",
  $white: "#F1F4F6"
});

const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

export default class App extends Component {
  state = { isReady: false };
  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      { RalewayExtraBold: require("../assets/fonts/Raleway-Black.ttf") },
      { RalewayBold: require("../assets/fonts/Raleway-Bold.ttf") },
      { RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf") },
      { RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf") },
      { RalewayLight: require("../assets/fonts/Raleway-Light.ttf") }
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
