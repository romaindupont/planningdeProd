import { createStore, compose, applyMiddleware } from 'redux';
import articles from '../middlewares/articles';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(articles),
));
export default store;
