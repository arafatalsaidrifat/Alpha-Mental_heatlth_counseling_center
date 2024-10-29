// src/pages/Counselors.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Counselors() {
  const navigate = useNavigate();

  const counselors = [
    { name: "Dr. Nazia Ahmed", exp: "6 Years", rating: "4.9", sessions: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Rafiq Hasan", exp: "4 Years", rating: "4.4", sessions: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Mahbub Alam", exp: "6 Years", rating: "4.5", sessions: ["1:00 PM", "5:00 PM"] },
  ];

  const handleBook = (doctorName, session) => {
    navigate('/book', { state: { doctorName, session } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-400 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl transform transition-all duration-500 translate-y-4 hover:-translate-y-2">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Counselors</h1>
        <ul>
          {counselors.map((doctor, index) => (
            <li key={index} className="p-4 mb-4 bg-gradient-to-r from-green-200 to-green-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
              <p className="text-gray-700">Experience: {doctor.exp}</p>
              <p className="text-gray-700">Rating: {doctor.rating}</p>
              <h3 className="font-semibold mt-2 text-gray-800">Available Sessions:</h3>
              <ul className="mt-2">
                {doctor.sessions.map((session, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className="text-blue-600 hover:underline">{session}</span>
                    <button
                      onClick={() => handleBook(doctor.name, session)}
                      className="bg-purple-600 text-white px-4 py-1 rounded transition duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      Book
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counselors;
