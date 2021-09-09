const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedInStatus: 'LOGGED_IN' };
    default:
      return state;
  }
};

export default loginReducer;
