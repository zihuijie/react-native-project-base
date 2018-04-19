// Action is a function return an object with a type attribute
// expressing what happened with the app
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';
import * as firebase from '../firebase';
import { AsyncStorage } from 'react-native';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = (email, password) => (dispatch) => {
  firebase.auth.doSignInWithEmailAndPassword(email, password).then((user) => {

    dispatch(userLoggedIn({ ...user}));
  });
};

export const logout = () => dispatch =>{
  firebase.auth.doSignOut();
  dispatch(userLoggedOut());
};

export const resetPasswordRequest = email =>firebase.auth.doPasswordReset(email);

export const updatePasswordRequest = password => firebase.auth.doPasswordUpdate(password);
