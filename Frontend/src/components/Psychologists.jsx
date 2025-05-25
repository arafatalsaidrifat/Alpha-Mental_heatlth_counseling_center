// src/pages/Psychologists.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Psychologists() {
  const navigate = useNavigate();

  const psychologists = [
    {
      name: "Dr. Sabrina Chowdhury",
      exp: "7 Years",
      rating: "4.8",
      sessions: [
        { date: "2024-12-20", time: "10:00 AM" },
        { date: "2024-12-21", time: "3:00 PM" },
      ],
    },
    {
      name: "Dr. Tahsin Rahman",
      exp: "5 Years",
      rating: "4.6",
      sessions: [
        { date: "2024-12-22", time: "11:00 AM" },
        { date: "2024-12-23", time: "4:00 PM" },
      ],
    },
    {
      name: "Dr. Tania Rahim",
      exp: "5 Years",
      rating: "4.6",
      sessions: [
        { date: "2024-12-24", time: "1:00 PM" },
        { date: "2024-12-25", time: "5:00 PM" },
      ],
    },
    {
      name: "Dr. Nusrat Jahan",
      exp: "3 Years",
      rating: "4.9",
      sessions: [
        { date: "2024-12-26", time: "2:00 PM" },
        { date: "2024-12-27", time: "6:00 PM" },
      ],
    },
  ];

  const handleBook = (doctorName, session) => {
    navigate("/userbook", { state: { doctorName, session } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Psychologists</h1>
        <ul className="space-y-3">
          {psychologists.map((doctor, index) => (
            <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
              <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
              <h3 className="font-semibold mt-2">Available Sessions:</h3>
              <ul className="space-y-1">
                {doctor.sessions.map((session, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">
                      {session.date} - {session.time}
                    </span>
                    <button
                      onClick={() => handleBook(doctor.name, session)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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

export default Psychologists;
