import React from 'react';
import { Text, View, Button } from 'react-native';
import { auth } from '../../firebase';

const SignOut = () => (
  <View>
    <Button onPress={auth.doSignOut}>
      <Text>Sign Out</Text>
    </Button>
  </View>
);

export default SignOut;
