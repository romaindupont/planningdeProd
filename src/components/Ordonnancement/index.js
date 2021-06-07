import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import { jsPDF } from "jspdf";
import { Pdf } from '../PDF';
import BackToMenu from '../BackToMenu';
import FormOrdo from '../../containers/Ordonnancement/Form';
import Table from './Table';
import { openDate } from '../../Utils/openDate';
import { hoursCalcul } from '../../Utils/hoursCalcul';

const Ordonnancement = ({ id, lctNumber, name, start, end, quantity }) => {
  const [ viewPdf, setViewPdf ] = useState(false)
  const MakePdf = () => {
    const { onlyHours, onlyMinutes, aujourdhui } = hoursCalcul(end, start);
    Pdf(aujourdhui, id, lctNumber, name, start, end, quantity, onlyHours, onlyMinutes);
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
