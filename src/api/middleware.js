import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  if (action.type === 'SIGNUP') {
    axios.post('http://localhost:3001/registrations', {
      user: {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        password_confirmation: action.payload.passwordConfirmation,
      },
      withCredentials: true,
    })
      .then((data) => {
        const newActions = { ...action, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGIN') {
    axios.post('http://localhost:3001/sessions', {
      user: {
        username: action.payload.username,
        password: action.payload.password,
      },
      withCredentials: true,
    })
      .then((data) => {
        const newActions = { ...action, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }
  return next(action);
};

export default apiMiddleware;
