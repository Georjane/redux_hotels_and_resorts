import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import loginReducer from './reducers/loginReducer';
// import { createStore, applyMiddleware } from 'redux';
// import apiMiddleware from './redux/apimiddleware';
// const store = createStore(loginReducer, applyMiddleware(apiMiddleware));

const store = createStore(loginReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
