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
      const newState = {
        ...state, favAdded: action.payload,
      };
      return newState;
    }
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        // sessionStorage.setItem('user_id', action.payload.user.id);
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
        };
        console.log(newState);
        return newState;
      }
      // const newState = {
      //   ...state, isLoggedIn: false, hasSignedUp: false, signupErr: true,
      // };
      return state;
    }
    case 'LOGIN': {
      console.log(action.payload);
      if (action.payload.status === 'created') {
        // sessionStorage.setItem('user_id', action.payload.user.id);
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
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
      console.log(action.payload.status);
      if (action.payload.status === 200) {
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
