export const SIGNUP = (username) => ({
  type: 'SIGNUP',
  payload: username,
  meta: {
    type: 'api',
  },
});

export const MEAL_DETAILS = (id) => ({
  type: 'MEAL_DETAILS',
  payload: id,
  meta: {
    type: 'api',
  },
});
