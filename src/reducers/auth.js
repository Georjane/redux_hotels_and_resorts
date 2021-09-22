const initialState = {
  users: [],
  isLoggedIn: false,
  loginErr: false,
  logout: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_TOAST': {
      const newState = {
        ...state, loginErr: false, isLoggedIn: false,
      };
      return newState;
    }
    case 'ADDFAV': {
      const newState = {
        ...state, favAdded: true,
      };
      return newState;
    }
    case 'ISLOGGEDIN': {
      if (sessionStorage.getItem('user_id')) {
        const newState = {
          ...state, isLoggedIn: true,
        };
        return newState;
      }
      return state;
    }
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        const { user } = action.payload.user;
        sessionStorage.setItem('user_id', action.payload.user.id);
        const newState = {
          ...state, isLoggedIn: true, loginErr: false, users: [user],
        };
        return newState;
      }
      return state;
    }
    case 'LOGIN': {
      console.log(action.payload.status);
      const { user } = action.payload;
      if (action.payload.status === 'created') {
        sessionStorage.setItem('user_id', user.id);
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, loginErr: false, users: [user],
        };
        return newState;
      }
      if (action.payload.status === 401) {
        const newState = { ...state, isLoggedIn: false, loginErr: true };
        return newState;
      }
      return state;
    }
    case 'LOGOUT': {
      if (action.payload.status === 200) {
        sessionStorage.removeItem('user_id');
        const newState = {
          ...state, isLoggedIn: false, logout: true, users: [],
        };
        return newState;
      }
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
