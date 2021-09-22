const initialState = {
  users: [],
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDFAV': {
      const newState = {
        ...state, favAdded: true,
      };
      return newState;
    }
    case 'ISLOGGEDIN': {
      if (sessionStorage.getItem('user_id')) {
        console.log('loggedin');
        const newState = {
          ...state, isLoggedIn: true,
        };
        return newState;
      }
      console.log('loggedout');
      return state;
    }
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        sessionStorage.setItem('user_id', action.payload.user.id);
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
        };
        return newState;
      }
      return state;
    }
    case 'LOGIN': {
      const { user } = action.payload;
      if (action.payload.status === 'created') {
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, loginErr: false, users: [user],
        };
        return newState;
      }
      if (action.payload.status === 401) {
        const newState = { ...state, isLoggedIn: false, loginErr: true };
        return newState;
      }
      const newState = { ...state, isLoggedIn: false, loginErr: true };
      return newState;
    }
    case 'LOGOUT': {
      if (action.payload.status === 200) {
        console.log('logginggggg out');
        sessionStorage.setItem('logout', true);
        sessionStorage.removeItem('user_id');
        const newState = {
          ...state, isLoggedIn: false, hasSignedUp: true, users: [],
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
