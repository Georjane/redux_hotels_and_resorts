import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADDFAV_FAIL,
  ADDFAV_SUCCESS,
} from '../actions/types';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  const token = sessionStorage.getItem('token');
  // const url = 'https://redux-authentication-api.herokuapp.com/'
  const url = 'http://localhost:3001/';
  if (action.type === 'SIGNUP') {
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
        const newActions = { ...action, type: REGISTER_SUCCESS, payload: data.data.id };
        delete newActions.meta;
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem('userId', data.data.id);
        window.location.href = '/home';
        return store.dispatch(newActions);
      })
      .catch(() => {
        const newActions = { ...action, type: REGISTER_FAIL, payload: 'error' };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGIN') {
    axios.post(`${url}sessions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      username: action.payload.username,
      password: action.payload.password,
    })
      .then((data) => {
        const newActions = { ...action, type: LOGIN_SUCCESS, payload: data.data };
        delete newActions.meta;
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem('userId', data.data.id);
        return store.dispatch(newActions);
      })
      .catch(() => {
        const newActions = { ...action, type: LOGIN_FAIL, payload: 'error' };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGOUT') {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    const newActions = { ...action, type: LOGOUT };
    window.location.href = '/home';
    delete newActions.meta;
    return store.dispatch(newActions);
  }

  if (action.type === 'ADDFAV') {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `'Bearer ' + ${token}`,
    };
    const data = { user_id: action.payload.fav.user_id, hotel_id: action.payload.fav.hotel_id };
    axios.post(`${url}favorites`,
      data,
      {
        headers,
      })
      .then((data) => {
        const newActions = { ...action, type: ADDFAV_SUCCESS, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      })
      .catch(() => {
        const newActions = { ...action, type: ADDFAV_FAIL, payload: 'You already have it in your list of favourites' };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  return next(action);
};

export default apiMiddleware;
