import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // SET_MESSAGE,
} from '../actions/types';
// import AuthService from '../services/auth.service';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  const token = sessionStorage.getItem('token');
  // const url = 'https://redux-authentication-api.herokuapp.com/'
  const url = 'http://localhost:3001/';
  if (action.type === 'SIGNUP') {
    // AuthService.register(
    //   action.payload.username,
    //   action.payload.email,
    //   action.payload.password,
    //   action.payload.passwordConfirmation,
    // )
    console.log('im here');
    axios.post(`${url}registrations`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      user: {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        password_confirmation: action.payload.passwordConfirmation,
      },
    })
      .then((data) => {
        console.log(data);
        const newActions = { ...action, type: REGISTER_SUCCESS, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      })
      .catch((err) => {
        const newActions = { ...action, type: REGISTER_FAIL, payload: err.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGIN') {
    // AuthService.login(action.payload.username, action.payload.password)
    // console.log(token);
    axios.post(`${url}sessions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      username: action.payload.username,
      password: action.payload.password,
    })
      .then((data) => {
        console.log('login data middleware data');
        const newActions = { ...action, type: LOGIN_SUCCESS, payload: data.data };
        delete newActions.meta;
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem('user_id', data.data.id);
        window.location.href = '/home';
        return store.dispatch(newActions);
      })
      .catch((err) => {
        const newActions = { ...action, type: LOGIN_FAIL, payload: err.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGOUT') {
    // axios.delete(`${url}logout`)
    // AuthService.logout();
    console.log('middleware logout');
    const newActions = { ...action, type: LOGOUT };
    delete newActions.meta;
    return store.dispatch(newActions);
    // .then((data) => {
    //   const newActions = { ...action, payload: data };
    //   delete newActions.meta;
    //   return store.dispatch(newActions);
    // });
  }

  if (action.type === 'ADDFAV') {
    axios.post(`${url}favorites`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      user_id: action.payload.fav.user_id,
      hotel_id: action.payload.fav.hotel_id,
    })
      .then((data) => {
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  return next(action);
};

export default apiMiddleware;
