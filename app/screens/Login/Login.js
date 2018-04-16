import React, { Component } from 'react';

import { Keyboard, KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { withRouter, Link } from 'react-router-native';
import { auth } from '../../firebase';

import styles from './styles';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleLogin() {
    const { email, password } = this.state;
    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  isValid() {
    if (email === '' || password === '') {
      this.setState({
        error: 'Please enter in all fields!',
      });
      return false;
    }
    return true;
  }
  render() {
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={password => this.setState({ password })}
              />
            </Item>

            <Button
              full
              success
              block
              disabled={!this.isValid}
              style={styles.button}
              onPress={() => this.handleLogin}
            >
              <Text style={styles.text}>Login</Text>
            </Button>
          </Form>
        </KeyboardAvoidingView>
        <Button
          full
          primary
          block
          style={styles.button}
          onPress={() => console.log('go to signup')}
        >
          <Link to="/signup">
            <Text style={styles.text}>Go to Signup</Text>
          </Link>
        </Button>
      </Container>
    );
  }
}
export default withRouter(Login);
