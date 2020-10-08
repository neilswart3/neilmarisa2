export const setPrevRoute = prevRoute => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PREV_ROUTE', prevRoute });
  };
};

// export const getPrevRoute = task => {
//   return (dispatch, getState) => {
//     dispatch({ type: 'EDIT_TASK', task });
//   };
// };
