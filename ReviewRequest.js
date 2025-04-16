
import { useState } from 'react';

export default function ReviewRequest() {
  const [studentName, setStudentName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const generateReviewRequest = () => {
    const result = `Hi ${studentName}, goed gedaan met je rijlessen! Als je een momentje hebt, zouden we het waarderen als je een korte review wilt achterlaten over je ervaring met LesPlan. Dank je wel!`;
    setReviewText(result);
  };

  return (
    <div>
      <h3>Reviewverzoek Generator</h3>
      <input
        placeholder="Naam leerling"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={generateReviewRequest}>Genereer reviewbericht</button>
      <textarea rows={4} value={reviewText} readOnly />
    </div>
  );
}
    