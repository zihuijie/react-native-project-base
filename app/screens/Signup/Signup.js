import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Keyboard, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { Link, withRouter } from 'react-router-native';

import { auth, db } from '../../firebase';
import styles from './styles';

const INITIAL_STATE = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  isValid() {
    const {
      userName, email, password, confirmPassword, error,
    } = this.state;
    if (userName === '' || email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: 'Please enter in all fields!',
      });
      return false;
    }
    if (password !== confirmPassword) {
      this.setState({
        error: 'Please make sure your password match!',
      });
      return false;
    }
    return true;
  }
  handleSignup() {
    const { userName, email, password } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // create user
        db.doCreateUser(authUser.uid, userName, email).then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          this.props.history.push('/');
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <Form>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={userName => this.setState({ userName })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
              />
            </Item>
            <Button
              full
              primary
              block
              style={styles.button}
              disabled={!this.isValid()}
              onPress={() => this.handleSignup()}
            >
              <Text style={styles.text}>Next</Text>
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default withRouter(SignUp);
