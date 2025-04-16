
import { useState } from 'react';

export default function SocialPost() {
  const [studentName, setStudentName] = useState('');
  const [socialText, setSocialText] = useState('');

  const generateSocial = () => {
    const result = `${studentName} is vandaag geslaagd voor het rijexamen! Gefeliciteerd! #rijbewijs #geslaagd #rijschool #LesPlan`;
    setSocialText(result);
  };

  return (
    <div>
      <h3>Social Media Post Generator</h3>
      <input
        placeholder="Naam leerling"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={generateSocial}>Genereer post</button>
      <textarea rows={4} value={socialText} readOnly />
    </div>
  );
}
    