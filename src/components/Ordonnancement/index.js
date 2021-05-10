import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';
import FormOrdo from '../../containers/Ordonnancement/Form';
import BackToMenu from '../BackToMenu';
import { jsPDF } from "jspdf";
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import { openDate } from '../../Utils/openDate';

const Ordonnancement = ({ id, lctNumber, name, start, end, quantity }) => {
  const [ viewPdf, setViewPdf ] = useState(false)
  const MakePdf = () => {
    openDate();
    const totalSecond = moment(end).workingDiff(moment(start), 'seconds', true);
    const hours = parseInt(totalSecond/3600);
    const minutes = Math.floor((totalSecond % 3600) / 60);
    const seconds = totalSecond % 60;
    console.log(totalSecond,hours,minutes,seconds)
    const aujourdhui =moment().format('DD/MM/YYYY à HH:mm:ss');
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`imprimé le ${aujourdhui}`, 150, 10);
    doc.text(`id n° ${id}`, 5, 10);
    doc.setFontSize(30);
    doc.text([`Lancement n° ${lctNumber}`], 60, 35);
    doc.setLineWidth(1.5)
    doc.line(58, 40, 140, 40 );
    doc.setFontSize(20);
    doc.text(["Référence :"], 40, 75);
    doc.text([`${name}`], 90, 75);
    doc.text(["Date début :"], 40, 85);
    doc.text([`${moment(start).format('DD/MM/YYYY à HH:mm:ss')}`], 90, 85);
    doc.text(["Date fin :"], 40, 95);
    doc.text([`${moment(end).format('DD/MM/YYYY à HH:mm:ss')}`], 90, 95);
    doc.text(["Quantité :"], 40, 105);
    doc.text([`${quantity}`], 90, 105);
    doc.text(["Temps alloué :"], 40, 115);
    doc.text([`${hours}h ${minutes}min ${seconds}sec`], 90, 115);
    doc.save("a4.pdf");
    setViewPdf(true)
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
