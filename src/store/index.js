import { createStore, compose, applyMiddleware } from 'redux';
import articles from '../middlewares/articles';
import planning from '../middlewares/planning';
import lancement from '../middlewares/lancement';
import workingDay from '../middlewares/workingDay';
import machine from '../middlewares/machine';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(articles, planning, lancement, workingDay, machine),
));

export default store;
