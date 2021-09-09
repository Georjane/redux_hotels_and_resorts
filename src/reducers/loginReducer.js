const loggedInStatus = ['NOT_LOGGED_IN'];

const loginReducer = (state = loggedInStatus, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ['LOGGED_IN'];
    case 'SIGNOUT':
      return loggedInStatus;
    case 'LOGOUT':
      return loggedInStatus;
    default:
      return state;
  }
};

export default loginReducer;
