import tasks from './tasks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;