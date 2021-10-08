import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  const token = sessionStorage.getItem('token');
  // const url = 'https://redux-authentication-api.herokuapp.com/'
  const url = 'http://localhost:3001/';
  if (action.type === 'SIGNUP') {
    axios.post(`${url}registrations`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      user: {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        password_confirmation: action.payload.passwordConfirmation,
      },
    })
      .then((data) => {
        const newActions = { ...action, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      })
      .catch((err) => {
        const newActions = { ...action, err };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGIN') {
    console.log(token);
    axios.post(`${url}sessions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      username: action.payload.username,
      password: action.payload.password,
    })
      .then((data) => {
        console.log(data.data);
        const newActions = { ...action, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      })
      .catch((err) => {
        const newActions = { ...action, err };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'LOGOUT') {
    axios.delete(`${url}logout`)
      .then((data) => {
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'ADDFAV') {
    axios.post(`${url}favorites`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      user_id: action.payload.fav.user_id,
      hotel_id: action.payload.fav.hotel_id,
    })
      .then((data) => {
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  return next(action);
};

export default apiMiddleware;
