import React, { useEffect } from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.scss';
import Gantt from './containers/Gantt';
import Lancement from './containers/Lancement';
import Ordonnancement from './containers/Ordonnancement';
import ArticlesPage from './components/ArticlesPage';
import Reglages from './components/Reglages';
import MachinesPage from './components/MachinesPage';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Base Articles">
        <Link to="/articles" rel="noreferrer">
          <button className="button-accueil" type="button">
            <span>Base Articles</span>
            <img className="button-accueil-img" src="../assets/images/articles.png" alt="Base articles" />
          </button>
        </Link>
        <Link to="/machines" rel="noreferrer">
          <button className="button-accueil" type="button">
          <span>Base Machines</span>
            <img className="button-accueil-img" src="../assets/images/machine.png" alt="Base machines" />
          </button>
        </Link>
        <Link to="/gantt" rel="noreferrer">
          <button className="button-accueil" type="button">
          <span>Planning Général</span>
            <img className="button-accueil-img" src="../assets/images/planning.png" alt="Planning" />
          </button>
        </Link>
        <Link to="/lancement" rel="noreferrer">
          <button className="button-accueil" type="button">
            <span>Lancement</span>
            <img className="button-accueil-img" src="../assets/images/lancement.png" alt="Lancement" />
          </button>
        </Link>
        <Link to="/ordonnancement" rel="noreferrer">
          <button className="button-accueil" type="button">
            <span>Ordonnancement</span>
            <img className="button-accueil-img" src="../assets/images/ordo.png" alt="Ordonnacment" />
          </button>
        </Link>
        <Link to="/reglages" rel="noreferrer">
          <button className="button-accueil" type="button">
            <span>Réglages Généraux</span>
            <img className="button-accueil-img" src="../assets/images/reglages.png" alt="Reglages" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function App({ fetchPlanning, fetchArticle, fetchWorkingDay, fetchMachine, fetchMachinePlanning }) {
  useEffect(() => {
    fetchPlanning();
  }, []);
  useEffect(() => {
    fetchArticle();
  }, []);
  useEffect(() => {
    fetchWorkingDay();

  }, []);
  useEffect(() => {
    fetchMachine();
  }, []);
  useEffect(() => {
    fetchMachinePlanning();
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/gantt" component={Gantt} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/lancement" component={Lancement} />
        <Route path="/ordonnancement" component={Ordonnancement} />
        <Route path="/reglages" component={Reglages} />
        <Route path="/machines" component={MachinesPage} />
      </Switch>
    </HashRouter>
  );
};
