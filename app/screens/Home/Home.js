import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";

import { StyleSheet, Text, View } from "react-native";
import { Button, ListItem, List } from "native-base";

class Home extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }
  render() {
    const { users } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>This is dashboard</Text>
        {!!users && <UserList users={users} />}
      </View>
    );
  }
}
const UserList = ({ users }) => {
  return (
    <View>
      <List
        dataArray={users}
        renderRow={item => (
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
