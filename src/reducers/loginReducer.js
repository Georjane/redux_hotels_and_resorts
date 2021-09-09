const loggedInStatus = ['NOT_LOGGED_IN'];

const loginReducer = (state = loggedInStatus, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ['LOGGED_IN'];
    default:
      return state;
  }
};

export default loginReducer;
