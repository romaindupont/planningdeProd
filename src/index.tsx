import React from 'react';
import { render } from 'react-dom';
/* import App from './App'; */
import App from './containers/Hello';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
