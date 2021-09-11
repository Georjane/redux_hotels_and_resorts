const initialState = {
  isLoggedIn: false,
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      console.log('rooot');
      const newState = { ...state, isLoggedIn: true, user: [...state.user, ...action.payload] };
      return newState;
    }
    default:
      return state;
  }
};

export default rootReducer;
