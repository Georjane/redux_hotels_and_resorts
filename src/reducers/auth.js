const initialState = {
  users: [],
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      if (action.payload.status === 'created') {
        const newState = { ...state, isLoggedIn: true, users: [action.payload.user] };
        return newState;
      }
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
