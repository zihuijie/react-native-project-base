import React, { Component } from "react";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import { MapView, Location, Permissions } from "expo";

import styles from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMapReady: false,
      mapRegion: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      locationResult: null,
      location: { coords: { latitude: 37.78825, longitude: -122.4324 } }
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  _onMapLayout = () => {
    this.setState({ isMapReady: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this._handleMapRegionChange}
          onLayout={this._onMapLayout}
        >
          {this.state.isMapReady && (
            <MapView.Marker
              coordinate={this.state.location.coords}
              title="My Marker"
              description="Some description"
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default Map;
