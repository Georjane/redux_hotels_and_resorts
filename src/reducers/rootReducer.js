const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      console.log('this is login action');
      // const newState = { ...state, meals: [...state.meals, ...action.payload] };
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
