import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../actions/actionTypes';


const INITIAL_STATE = { isLoggedIn: false, user: null};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
    try {
      await AsyncStorage.setItem('@aladdinGo: user', user);
     } catch (error) {
       console.log(error)
     }
      return { ...state, isLoggedIn: true, user: action.user}

    case USER_LOGGED_OUT:
    try {
      await AsyncStorage.removeItem('@aladdinGo: user');
    } catch (error) {
      console.log(error);
    }
      return { ...state, isLoggedIn: false, user: null};
    default:
      return state;
  }
}
