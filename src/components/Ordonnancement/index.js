import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';
import FormOrdo from '../../containers/Ordonnancement/Form';
import BackToMenu from '../BackToMenu';
import { ReactPDF } from '@react-pdf/renderer';
import PDF from '../PDF';

const Ordonnancement = () => {
  const MakePdf = () => {
    console.log('on le fabrique', `${__dirname}/example.pdf`)
    ReactPDF.render(<PDF />, `${__dirname}/example.pdf`);
  }
  return (
    <div className="lancement">
      <BackToMenu />
      <h1 className="lancement-title">Ordonnancement</h1>
      <div className="container-ordo">
        <Table />
        <FormOrdo />
      </div>
      <div className="impression">
        <button className="impression-button" onClick={MakePdf}>Impression PDF</button>
      </div>
    </div>
  );
};

export default Ordonnancement;
