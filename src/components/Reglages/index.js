import React from 'react';
import { Link } from 'react-router-dom';
import BackToMenu from '../BackToMenu';
import FormReglages from '../../containers/Reglages/Form';

const Reglages = () => {
  return (
    <div className="reglages">
      <BackToMenu />
      <h1 className="reglages-title">Réglages</h1>
      <div className="container-reglages-hour">
        <h2 className="reglages-title">Horaires</h2>
      <FormReglages />
      </div>
    </div>
  );
};

export default Reglages;
