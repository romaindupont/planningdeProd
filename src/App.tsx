import React from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.scss';
import Gantt from './containers/Gantt';
import ArticlesPage from './components/ArticlesPage';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Base Articles">
        <Link
          to="/articles"
          rel="noreferrer"
        >
          <button type="button">
            Base Articles
          </button>
        </Link>
        <Link
          to="/gantt"
          rel="noreferrer"
        >
          <button type="button">
            Planning Gantt
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/gantt" component={Gantt} />
        <Route path="/articles" component={ArticlesPage} />
      </Switch>
    </HashRouter>
  );
}
