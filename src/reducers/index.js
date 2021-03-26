import tasks from './tasks';
import articles from './articles';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks,
  articles,
});

export default rootReducer;
