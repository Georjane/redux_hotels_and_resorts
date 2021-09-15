import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  if (action.type === 'SIGNUP') {
    axios.post('https://redux-authentication-api.herokuapp.com/registrations', {
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
    axios.post('https://redux-authentication-api.herokuapp.com/sessions', {
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

  if (action.type === 'LOGOUT') {
    axios.delete('https://redux-authentication-api.herokuapp.com/logout', {
      withCredentials: true,
    })
      .then((data) => {
        // console.log(data);
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'ADDFAV') {
    // console.log(action.payload);
    // console.log(action.payload.fav.hotel_id);
    axios.post('https://redux-authentication-api.herokuapp.com/favorites', {
      user_id: action.payload.fav.user_id,
      hotel_id: action.payload.fav.hotel_id,
    })
      .then((data) => {
        // console.log(data);
        const newActions = { ...action, payload: data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }

  if (action.type === 'ISLOGGEDIN') {
    axios.get('https://redux-authentication-api.herokuapp.com/logged_in', {
      withCredentials: true,
    })
      .then((data) => {
        // console.log(data);
        const newActions = { ...action, payload: data.data };
        delete newActions.meta;
        return store.dispatch(newActions);
      });
  }
  return next(action);
};

export default apiMiddleware;
