import { combineReducers } from 'redux';

import CounterReducer from './counter/counter/reducer/CounterReducer';
import UserReducer from './users/reducer/UserReducer';

export default combineReducers({
  counter: CounterReducer,
  user: UserReducer,
});
