import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/auth';
import apiMiddleware from './redux/apimiddleware';

const store = createStore(
  rootReducer,
  applyMiddleware(apiMiddleware),
);

export default store;
