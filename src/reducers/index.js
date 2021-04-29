import tasks from './tasks';
import articles from './articles';
import launch from './launch';
import lancement from './lancement';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks,
  articles,
  launch,
  lancement,
});

export default rootReducer;
