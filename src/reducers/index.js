import tasks from './tasks';
import articles from './articles';
import launch from './launch';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks,
  articles,
  launch,
});

export default rootReducer;
