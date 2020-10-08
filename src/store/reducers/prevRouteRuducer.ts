const initState = {
  prevRoute: '/',
};

const prevRouteReducer = (
  state = initState,
  action: { type: any; prevRoute: any; error: any },
) => {
  switch (action.type) {
    case 'SET_PREV_ROUTE':
      return {
        ...state,
        prevRoute: action.prevRoute,
      };
    case 'GET_PREV_ROUTE':
      return state;
    default:
      return state;
  }
};

export default prevRouteReducer;
