import React, { useState } from 'react';
import { Pdf } from '../PDF';
import BackToMenu from '../BackToMenu';
import FormOrdo from '../../containers/Ordonnancement/Form';
import PopupMessage from '../../containers/Reglages/Popup';
import Table from './Table';
import { openDate } from '../../Utils/openDate';
import { hoursCalcul } from '../../Utils/hoursCalcul';

const Ordonnancement = ({ id, lctNumber, name, start, end, quantity }) => {
  const [ viewPdf, setViewPdf ] = useState(false)
  const [ isShowing, setIsShowing ] = useState(false);
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
        <FormOrdo setIsShowing={setIsShowing}/>
      </div>
      <div className="impression">
        <button className="impression-button" onClick={MakePdf}>Impression PDF</button>
      </div>
      {isShowing && (<PopupMessage setIsShowing={setIsShowing}/>)}
    </div>
  );
};

export default Ordonnancement;
