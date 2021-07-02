import { jsPDF } from 'jspdf';
import { DateTime } from 'luxon';
import 'jspdf-autotable';
import moment from 'moment';

export function PdfValo(title, list, screen, total, cUnitaire) {
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
  doc.addImage(screen, 'PNG', 70, 60, 170, 40);
  doc.setFontSize(16);
  doc.text([`Montant Total : ${total} €`], 120, 110);
  doc.text([`Coût Total unitaire : ${cUnitaire} €`], 120, 120);
  doc.autoTable({
    tableWidth: 255,
    startY: 200,
    head: [
      [
        { content: 'id', styles: { cellWidth: 20 } },
        { content: 'Référence', styles: { cellWidth: 40 } },
        { content: 'Lancement', styles: { cellWidth: 30 } },
        { content: 'Quantité', styles: { cellWidth: 30 } },
        { content: 'Date Fin', styles: { cellWidth: 30 } },
        { content: 'Coût matière', styles: { cellWidth: 30 } },
        { content: 'Coût unitaire', styles: { cellWidth: 40 } },
        { content: 'Montant TT', styles: { cellWidth: 35 } }
      ]
    ]
  })
  list.map((valo) =>
    doc.autoTable({
      tableWidth: 255,
      body: [
        [
          { content: `${valo.id}`, styles: { cellWidth: 20 } },
          { content: `${valo.name}`, styles: { cellWidth: 40 } },
          { content: `${valo.lancement}`, styles: { cellWidth: 30 } },
          { content: `${valo.quantity}`, styles: { cellWidth: 30 } },
          { content: `${valo._end.substring(8,10)}/${valo._end.substring(5,7)}/${valo._end.substring(0,4)}`, styles: { cellWidth: 30 } },
          { content: `${valo.cout}`, styles: { cellWidth: 30 } },
          { content: `${parseFloat(valo.montant/valo.quantity).toFixed(2)}`, styles: { cellWidth: 40 } },
          { content: `${valo.montant}`, styles: { cellWidth: 35 } }
        ]
      ],
    })
  )
  doc.save('valorisation.pdf');
}
