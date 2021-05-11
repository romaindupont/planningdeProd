import tasks from './tasks';
import articles from './articles';
import launch from './launch';
import lancement from './lancement';
import workingDay from './workingDay';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks,
  articles,
  launch,
  lancement,
  workingDay,
});

export default rootReducer;
