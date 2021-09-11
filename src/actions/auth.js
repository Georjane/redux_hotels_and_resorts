import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';

import AuthService from '../services/auth.service';

// const {
//   x, y, z, i,
// } = {
//   username, email, password, passwordConfirmation,
// };
export const register = (x, y, z, i) => (dispatch) => AuthService.register(x, y, z, i)
  .then(
    (response) => {
      console.log('this is res from dispatch register actions that call api', response);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response.data.user },
      });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data.user },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );

export const login = (username, password) => (dispatch) => AuthService.login(username, password)
  .then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const TEST = () => ({
  type: 'TEST',
  meta: {
    type: 'api',
  },
});

export const SIGNUP = (add) => ({
  type: 'SIGNUP',
  payload: add,
  meta: {
    type: 'api',
  },
});

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});
