import { combineReducers } from 'redux';
import prevRouteRuducer from './prevRouteRuducer';

const rootReducer = combineReducers({
  prevRoute: prevRouteRuducer,
});

export default rootReducer;
