import React, { Component } from "react";
import { View, Text } from "react-native";

import { Container, Content, Header, Left, Right, Icon } from "native-base";

import { Map } from "../../components/Map";
import styles from "./styles";

class MapScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon name="md-menu" style={styles.icon} />
          </Left>
          <Right>
            <Icon name="md-notifications-outline" style={styles.icon} />
          </Right>
        </Header>
        <Content>
          <Map />
        </Content>
      </Container>
    );
  }
}

export default MapScreen;
