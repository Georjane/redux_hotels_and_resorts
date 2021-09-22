const initialState = {
  users: [],
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'LOGOUT': {
    //   console.log('this is logout action');
    //   const newState = {
    //     ...state, favAdded: true,
    //   };
    //   return newState;
    // }
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
      const newState = { ...state, isLoggedIn: false, loginErr: true };
      return newState;
    }
    case 'LOGOUT': {
      if (action.payload.status === 200) {
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
