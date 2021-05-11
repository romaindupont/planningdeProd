import React from 'react';
import { jsPDF } from "jspdf";
import moment from 'moment';

export function Pdf( aujourdhui, id, lctNumber, name, start, end, quantity, onlyHours, onlyMinutes ) {
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
  doc.text([`${onlyHours}h ${onlyMinutes}min`], 90, 115);
  doc.save("a4.pdf");
};
