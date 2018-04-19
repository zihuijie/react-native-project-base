// reducers in charge of updating the state of the app

import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
});

export default rootReducer;
