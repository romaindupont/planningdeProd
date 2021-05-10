import React from 'react';
import { jsPDF } from "jspdf";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const Pdf = () => (

  doc.text("Hello world!", 10, 10)
  doc.save("a4.pdf")
);

export default Pdf;
const Pdf = () => {
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
  return (
    doc={doc}
  );
};

export default Pdf;
