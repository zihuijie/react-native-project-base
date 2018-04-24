import React, { Component } from "react";
import { Provider } from "react-redux";
import { YellowBox } from "react-native";
import { Font } from "expo";
import EStyleSheet from "react-native-extended-stylesheet";

import store from "./store";

import { Loading } from "./components/Loading";

import AppNav from "./screens/AppNav";

console.disableYellowBox = true;

EStyleSheet.build({
  $primary: "#00204A",
  $secondary: "#005792",
  $third: "#00BBF0",
  $fouth: "#FDB44B",
  $white: "#FAFAF6"
});

const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      { RalewayExtraBold: require("../assets/fonts/Raleway-Black.ttf") },
      { RalewayBold: require("../assets/fonts/Raleway-Bold.ttf") },
      { RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf") },
      { RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf") },
      { RalewayLight: require("../assets/fonts/Raleway-Light.ttf") }
    ]);
    await Promise.all([...fontAssets])
      .then(() => {
        this.setState({ isReady: true });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return <Loading />;
    }

    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}
