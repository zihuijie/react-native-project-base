import React, { Component } from 'react';
import { View, Text, YellowBox } from 'react-native';
import { Font, AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

// ignore yellow box warning in emulator

YellowBox.ignoreWarnings(['Warning:...']);

EStyleSheet.build({
  $primary: '#2552AC',
  $secondary: '#597FCA',
  $third: '#5AC8D8',
  $white: '#F1F4F6',
});

export default class App extends Component {
  state = { isReady: false };
  async _loadAssetsAsync() {
    const fontAssets = Font.loadAsync({
      'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
    });

    await this.Promise.all([...fontAssets]);
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          font: 'Raleway-Bold',
        }}
      >
        <Text>Hello from React modify!</Text>
      </View>
    );
  }
}
