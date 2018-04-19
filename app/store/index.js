import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import * as firebase from '../firebase';
import rootReducer from '../reducers';


// const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(firebase)));
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
};
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
