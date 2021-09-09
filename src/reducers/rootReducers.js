export const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};
  // Our root reducer starts with the initial state
  // and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
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
