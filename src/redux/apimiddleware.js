import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  if (action.type === 'TEST') {
    console.log('this i api++++++++++++++++++++');
    const url = 'http://localhost:3001/hotels';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('data from api middle ware-----------------');
        console.log(data);
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }
  if (action.type === 'SIGNUP') {
    console.log('ooooooooooooooooooooo');
    console.log(action);
    console.log('ooooooooooooooooooooo');
    const {
      username, email, password, passwordConfirmation,
    } = action.payload;
    console.log('this i api++++++++++++++++++++');
    const url = 'http://localhost:3001/registrations';
    axios.post(url, {
      user: {
        username,
        email,
        password,
        passwordConfirmation,
      },
    },
    { withCredentials: true })
      .then((data) => {
        console.log('data from api middle ware-----------------');
        console.log(data);
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }
  return next(action);
};

export default apiMiddleware;
