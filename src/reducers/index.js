import { combineReducers } from 'redux';
import tasks from './tasks';
import articles from './articles';
import launch from './launch';
import lancement from './lancement';
import workingDay from './workingDay';
import machines from './machines';
import valorisation from './valorisation';

const rootReducer = combineReducers({
  tasks,
  articles,
  launch,
  lancement,
  workingDay,
  machines,
  valorisation
});

export default rootReducer;
