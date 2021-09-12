const initialState = {
  users: [],
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
        };
        return newState;
      }
      const newState = {
        ...state, isLoggedIn: false, hasSignedUp: false, signupErr: true,
      };
      return newState;
    }
    case 'LOGIN': {
      if (action.payload.status === 'created') {
        const newState = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
        };
        console.log(newState);
        return newState;
      }
      if (action.payload.status === 401) {
        const newState = { ...state, isLoggedIn: false, loginErr: true };
        console.log(newState);
        return newState;
      }
      const newState = { ...state, isLoggedIn: false, loginErr: true };
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default rootReducer;
