// const apiMiddleware = (store) => (next) => (action) => {
//   if (!action.meta || action.meta.type !== 'api') {
//     return next(action);
//   }
//   if (action.type === 'LOGINN') {
//     const url = 'http://localhost:3001/sessions';
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         const newActions = { ...action, payload: data };
//         delete newActions.meta;
//         return store.dispatch(newActions);
//       });
//   }
//   return next(action);
// };

// export default apiMiddleware;
