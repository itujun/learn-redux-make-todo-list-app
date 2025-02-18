import { combineReducers } from 'redux';

import todos from './todos';

const rootReducer = combineReducers({
  todos: todos, // atau karena value dan namenya sama, bisa ditulis todos saja
});

export default rootReducer;
