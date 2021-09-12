export const SIGNUP = (user) => ({
  type: 'SIGNUP',
  payload: user,
  meta: {
    type: 'api',
  },
});

export const LOGIN = (user) => ({
  type: 'LOGIN',
  payload: user,
  meta: {
    type: 'api',
  },
});

export const LOGOUT = () => ({
  type: 'LOGOUT',
  payload: {
    status: 404,
  },
  meta: {
    type: 'api',
  },
});
export const ADDFAV = (favourite) => ({
  type: 'ADDFAV',
  payload: favourite,
  meta: {
    type: 'api',
  },
});
