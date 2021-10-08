import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

// const user = JSON.parse(localStorage.getItem('user'));
const user_id = sessionStorage.getItem('user_id');

const initialState = user_id
  ? { isLoggedIn: true, user_id }
  : { isLoggedIn: false, user_id: null };

// const initialState = {
//   users: [],
//   isLoggedIn: false,
//   loginErr: false,
//   logout: false,
// };

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      sessionStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('user_id', action.payload);
      console.log(sessionStorage.getItem('token'));
      return {
        ...state,
        isLoggedIn: true,
        user_id: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      console.log('login success');
      console.log(action.payload);

      return {
        ...state,
        isLoggedIn: true,
        user_id: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user_id: null,
      };
    case LOGOUT:
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user_id');
      console.log('its out');
      return {
        ...state,
        isLoggedIn: false,
        user_id: null,
      };

    case 'RESET_TOAST': {
      const newState = {
        ...state, loginErr: false,
      };
      return newState;
    }
    case 'ADDFAV': {
      const newState = {
        ...state, favAdded: true,
      };
      return newState;
    }
    // case 'ISLOGGEDIN': {
    //   if (sessionStorage.getItem('user_id_id')) {
    //     console.log('nnnnnnnnnnnnnnnnnn');
    //     const newState = {
    //       ...state, isLoggedIn: true,
    //     };
    //     return newState;
    //   }
    //   return state;
    // }
    case 'SIGNUP': {
      return state;
      // if (!action.err) {
      //   const { user_id } = action.payload.user_id;
      //   sessionStorage.setItem('user_id', action.payload.user.id);
      //   const newState = {
      //     ...state, isLoggedIn: true, loginErr: false, users: [user],
      //   };
      //   return newState;
      // }
      // const newState = {
      //   ...state, isLoggedIn: true, loginErr: true,
      // };
      // return newState;
    }
    case 'LOGIN': {
      // const { user } = action.payload;

      console.log(action.err);
      // if (action.err) {
      //   const newState = { ...state, isLoggedIn: false, loginErr: true };
      //   return newState;
      // }
      // if (action.payload !== undefined && action.payload.token) {
      //   sessionStorage.setItem('token', action.payload.token);
      //   sessionStorage.setItem('user_id', user.id);
      //   const token = sessionStorage.getItem('token');
      //   console.log(token);
      //   const newState = {
      //     ...state, isLoggedIn: true, hasSignedUp: true, loginErr: false, users: [user],
      //   };
      //   return newState;
      // }
      // if (action.payload.status === 401) {
      //   const newState = { ...state, isLoggedIn: false, loginErr: true };
      //   return newState;
      // }
      // if (user) {
      //   sessionStorage.setItem('user_id', user.id);
      // }
      // const newState = {
      //   ...state, isLoggedIn: true, hasSignedUp: true, loginErr: false, users: [user],
      // };
      // return newState;
      return state;
    }
    case 'LOGOUT': {
      // localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      // if (action.payload.status === 200) {
      //   sessionStorage.removeItem('user_id');
      //   const newState = {
      //     ...state, isLoggedIn: false, logout: true, users: [],
      //   };
      //   return newState;
      // }
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
