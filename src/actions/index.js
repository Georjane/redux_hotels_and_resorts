export const LOGIN = () => ({
  type: 'LOGIN',
  // payload: id,
  meta: {
    type: 'api',
  },
});

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});
