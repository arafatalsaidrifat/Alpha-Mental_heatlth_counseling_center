// src/pages/Psychologists.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Psychologists() {
  const navigate = useNavigate();

  const psychologists = [
    { name: "Dr. Sabrina Chowdhury", exp: "7 Years", rating: "4.8", sessions: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Tahsin Rahman", exp: "5 Years", rating: "4.6", sessions: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Tania Rahim", exp: "5 Years", rating: "4.6", sessions: ["1:00 PM", "5:00 PM"] },
    { name: "Dr. Nusrat Jahan", exp: "3 Years", rating: "4.9", sessions: ["2:00 PM", "6:00 PM"] },
  ];

  const handleBook = (psychologistName, session) => {
    navigate('/book', { state: { psychologistName, session } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Psychologists</h1>
        <ul>
          {psychologists.map((doctor, index) => (
            <li key={index} className="p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
                <p className="text-gray-600">Experience: {doctor.exp}</p>
                <p className="text-gray-600">Rating: {doctor.rating}</p>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Psychologists;
