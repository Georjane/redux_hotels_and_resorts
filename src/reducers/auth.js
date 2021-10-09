import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADDFAV_FAIL,
  ADDFAV_SUCCESS,
} from '../actions/types';

const userId = sessionStorage.getItem('userId');

const initialState = userId
  ? {
    isLoggedIn: true, userId, error: '',
  }
  : {
    isLoggedIn: false, userId: null, error: '',
  };

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userId: payload,
        error: '',
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        error: 'Username or Email already taken!',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userId: payload,
        error: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        error: 'Invalid credentials!',
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        error: 'Logged out successful!',
      };

    case 'RESET_TOAST': {
      return {
        ...state, error: '',
      };
    }
    case 'ADDFAV': {
      return state;
    }
    case ADDFAV_SUCCESS: {
      const newState = {
        ...state, favAdded: true,
      };
      return newState;
    }
    case ADDFAV_FAIL:
      return {
        ...state,
        error: payload,
        favAdded: false,
      };
    case 'SIGNUP': {
      return state;
    }
    case 'LOGIN': {
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
