// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
// import apiMiddleware from './redux/apimiddleware';
import rootReducer from './reducers/auth';
import apiMiddleware from './api/middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(apiMiddleware),
);

export default store;
