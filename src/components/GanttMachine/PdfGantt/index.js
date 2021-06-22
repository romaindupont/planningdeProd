import { jsPDF } from 'jspdf';
import { DateTime } from 'luxon';
import 'jspdf-autotable';
import moment from 'moment';

export function PdfGantt(title, list, screen) {
  const doc = new jsPDF('l', 'mm', [297, 210]);
  const now = DateTime.now();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`imprimé le ${now}`, 200, 10);
  doc.setFontSize(16);
  doc.text([`${title}`], 100, 35);
  doc.setLineWidth(1.5);
  doc.line(98, 40, 200, 40);
  doc.setFontSize(20);
  doc.addImage(screen, 'PNG', 10, 60, 280, 120);
  doc.autoTable({
    tableWidth: 280,
    startY: 200,
    head: [
      [
        { content: 'id', styles: { cellWidth: 10 } },
        { content: 'Name', styles: { cellWidth: 40 } },
        { content: 'Description', styles: { cellWidth: 50 } },
        { content: 'Lancement n°', styles: { cellWidth: 30 } },
        { content: 'Date début', styles: { cellWidth: 30 } },
        { content: 'Date fin', styles: { cellWidth: 30 } },
        { content: 'Quantité', styles: { cellWidth: 20 } },
        { content: 'Progression', styles: { cellWidth: 25 } }
      ]
    ]
  })
  list.map((task) =>
    doc.autoTable({
      tableWidth: 280,
      body: [
        [
          { content: `${task.planning_id}`, styles: { cellWidth: 10 } },
          { content: `${task.reference}`, styles: { cellWidth: 40 } },
          { content: `${task.description}`, styles: { cellWidth: 50 } },
          { content: `${task.lancement}`, styles: { cellWidth: 30 } },
          { content: `${moment(task.start).format('DD/MM/YYYY HH:mm:ss')}`, styles: { cellWidth: 30 } },
          { content: `${moment(task._end).format('DD/MM/YYYY HH:mm:ss')}`, styles: { cellWidth: 30 } },
          { content: `${task.quantity}`, styles: { cellWidth: 20 } },
          { content: `${task.progress}`, styles: { cellWidth: 25 } }
        ]
      ],
    })
  )
  doc.save('tableau.pdf');
}
