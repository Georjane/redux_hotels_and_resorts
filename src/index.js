import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';
// import { createStore, applyMiddleware } from 'redux';
// import apiMiddleware from './redux/apimiddleware';
// const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
