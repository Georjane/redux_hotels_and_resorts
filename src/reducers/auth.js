const initialState = {
  users: [],
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        const nS = {
          ...state, isLoggedIn: true, hasSignedUp: true, users: [action.payload.user],
        };
        return nS;
      }
      const newState = { ...state, isLoggedIn: false, hasSignedUp: false };
      return newState;
    }
    default:
      return state;
  }
};

export default rootReducer;
