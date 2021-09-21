import { createStore, applyMiddleware } from 'redux';
// import { sessionReducer } from 'redux-react-session';
import rootReducer from './reducers/auth';
import apiMiddleware from './api/middleware';

// const reducers = {
//   rootReducer,
//   session: sessionReducer,
// };

// const reducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  applyMiddleware(apiMiddleware),
);

// sessionService.initSessionService(store);

export default store;
