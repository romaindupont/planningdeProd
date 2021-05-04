import React, { useEffect } from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.scss';
import Gantt from './containers/Gantt';
import ArticlesPage from './components/ArticlesPage';
import Lancement from './containers/Lancement';
import Ordonnancement from './components/Ordonnancement';
import PropTypes from 'prop-types';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Base Articles">
        <Link to="/articles" rel="noreferrer">
          <button type="button">Base Articles</button>
        </Link>
        <Link to="/Machines" rel="noreferrer">
          <button type="button">Base Machine</button>
        </Link>
        <Link to="/gantt" rel="noreferrer">
          <button type="button">Planning Général</button>
        </Link>
        <Link to="/lancement" rel="noreferrer">
          <button type="button">Lancement</button>
        </Link>
        <Link to="/ordonnancement" rel="noreferrer">
          <button type="button">Ordonnancement</button>
        </Link>
      </div>
    </div>
  );
};

export default function App({ fetchPlanning, fetchArticle }) {
  useEffect(() => {
    fetchPlanning();
  }, []);
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/gantt" component={Gantt} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/lancement" component={Lancement} />
        <Route path="/ordonnancement" component={Ordonnancement} />
      </Switch>
    </HashRouter>
  );
};

/* App.propTypes = {
  fetchPlanning : PropTypes.func,
  fetchArticle : PropTypes.func,
}; */
