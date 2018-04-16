import React, { Component } from 'react';
import { View, Text, YellowBox } from 'react-native';
import { Font } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import Routes from './components/Routes';
import { Loading } from './components/Loading';

console.disableYellowBox = true;

EStyleSheet.build({
  $primary: '#2552AC',
  $secondary: '#597FCA',
  $third: '#5AC8D8',
  $white: '#F1F4F6',
});

export default class App extends Component {
  state = { isReady: true };

  render() {
    if (!this.state.isReady) {
      return <Loading />;
    }

    return <Routes />;
  }
}
