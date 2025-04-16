
import React, { useState } from 'react';

export default function Factuurgenerator() {
  const [studentName, setStudentName] = useState('');
  const [lessons, setLessons] = useState(0);
  const [price, setPrice] = useState('');
  const [invoice, setInvoice] = useState('');

  const generateInvoice = () => {
    const subtotal = lessons * price;
    const vat = subtotal * 0.21;
    const total = subtotal + vat;

    setInvoice(`
      Factuur voor: ${studentName}
      Aantal lessen: ${lessons}
      Prijs per les: €${price}
      Subtotaal: €${subtotal}
      BTW (21%): €${vat}
      Totaal: €${total}
    `);
  };

  return (
    <div>
      <h3>Factuurgenerator</h3>
      <input
        type="text"
        placeholder="Naam leerling"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Aantal lessen"
        value={lessons}
        onChange={(e) => setLessons(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prijs per les"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={generateInvoice}>Genereer Factuur</button>
      <pre>{invoice}</pre>
    </div>
  );
}
    