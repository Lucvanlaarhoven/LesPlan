
import React, { useState } from 'react';

export default function Lesplanning() {
  const [lessonDate, setLessonDate] = useState('');
  const [lessonTime, setLessonTime] = useState('');
  const [lessonSchedule, setLessonSchedule] = useState([]);

  const addLessonToSchedule = () => {
    const newEntry = { date: lessonDate, time: lessonTime };
    setLessonSchedule([...lessonSchedule, newEntry]);
  };

  const removeLesson = (index) => {
    const updatedSchedule = [...lessonSchedule];
    updatedSchedule.splice(index, 1);
    setLessonSchedule(updatedSchedule);
  };

  return (
    <div>
      <h3>Lesplanning</h3>
      <input
        type="date"
        value={lessonDate}
        onChange={(e) => setLessonDate(e.target.value)}
      />
      <input
        type="time"
        value={lessonTime}
        onChange={(e) => setLessonTime(e.target.value)}
      />
      <button onClick={addLessonToSchedule}>Voeg les toe</button>
      <ul>
        {lessonSchedule.map((entry, index) => (
          <li key={index}>
            {entry.date} om {entry.time}
            <button onClick={() => removeLesson(index)}>Verwijder</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
    