import React from 'react';
import { jsPDF } from "jspdf";
import { DateTime } from "luxon";
import 'jspdf-autotable'

export function PdfGantt( title, list, screen ) {
  const doc = new jsPDF('l', 'mm', [297, 210]);
  const now = DateTime.now();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`imprimé le ${now}`, 150, 10);
  doc.setFontSize(16);
  doc.text([`${title}`], 60, 35);
  doc.setLineWidth(1.5)
  doc.line(58, 40, 150, 40 );
  doc.setFontSize(20);
  doc.addImage(screen, 'PNG', 10, 60, 280, 120);
  doc.addPage();
  doc.autoTable({tableWidth: 200,startY: 200, head: [['id', 'Name', 'description', 'lancement n°', 'date début', 'date fin', 'quantité', 'progression']]})
  list.map((task)=>
  doc.autoTable({
    tableWidth: 200,
    body: [
      [`${task.id}`, `${task.name}`, `${task.description}`, `${task.lancement}`, `${task.start}`, `${task._end}`, `${task.quantity}`, `${task.progress}`,]
    ],
  }))

  /* doc.text([`${list}`], 90, 75); */
  doc.save("tableau.pdf");
};
