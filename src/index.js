import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { sessionService } from 'redux-react-session';
import Routes from './Routes';
import store from './store';
import './App.css';

// const validateSession = (session) => {
//   console.log('session', session);
//   // if (session.user_id) {
//   //   return true;
//   // }
//   return !!session.user_id;
//   // check if your session is still valid
// };
// const options = {
//   refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES',
// };

// sessionService.initSessionService(store, options)
//   .then(() => console.log(' Session is ready and a session was refreshed from your storage'))
//   .catch(() => console.log(' Session is ready and there is no session in your storage'));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
