// src/pages/Counselors.js
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Counselors() {
  const navigate = useNavigate();

  // Using useMemo to memoize the counselor data to avoid unnecessary re-renders
  const counselors = useMemo(() => [
    {
      name: "Dr. Nazia Ahmed",
      exp: "6 Years",
      rating: "4.9",
      sessions: [
        { date: "2024-12-10", time: "10:00 AM" },
        { date: "2024-12-11", time: "3:00 PM" },
      ],
    },
    {
      name: "Dr. Rafiq Hasan",
      exp: "4 Years",
      rating: "4.4",
      sessions: [
        { date: "2024-12-10", time: "11:00 AM" },
        { date: "2024-12-12", time: "4:00 PM" },
      ],
    },
    {
      name: "Dr. Mahbub Alam",
      exp: "6 Years",
      rating: "4.5",
      sessions: [
        { date: "2024-12-11", time: "1:00 PM" },
        { date: "2024-12-12", time: "5:00 PM" },
      ],
    },
  ], []);

  const handleBook = (doctorName, session) => {
    navigate('/userbook', { state: { doctorName, session } });
  };

  const renderSessions = (sessions) => (
    <ul className="space-y-1">
      {sessions.map((session, i) => (
        <li key={i} className="flex justify-between items-center">
          <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">
            {session.date} - {session.time}
          </span>
          <button
            onClick={() => handleBook(session.date, session)}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Book
          </button>
        </li>
      ))}
    </ul>
  );

  const renderDoctorCard = (doctor) => (
    <li key={doctor.name} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
      <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
      <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
      <h3 className="font-semibold mt-2">Available Sessions:</h3>
      {renderSessions(doctor.sessions)}
    </li>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Counselors</h1>
        <ul className="space-y-3">
          {counselors.map(renderDoctorCard)}
        </ul>
      </div>
    </div>
  );
}

export default Counselors;
