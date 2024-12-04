// src/pages/Psychiatrists.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Psychiatrists() {
  const navigate = useNavigate();
  const psychiatrists = [
    { name: "Dr. Farhana Islam", exp: "8 Years", rating: "4.8", sessions: ["10:00 AM", "2:00 PM"] },
    { name: "Dr. Imran Hossain", exp: "10 Years", rating: "4.5", sessions: ["12:00 PM", "3:00 PM"] },
    { name: "Dr. Sadia Sultana", exp: "9 Years", rating: "4.8", sessions: ["3:00 PM", "6:00 PM"] },
  ];

  const handleBook = (doctorName, session) => {
    const date = prompt("Please enter the date for the session (e.g., 2024-12-25):");
    if (date) {
      navigate('/book', { state: { doctorName, session, date } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center py-10"> {/* Added py-10 for top/bottom padding */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Psychiatrists</h1>
        <ul className="space-y-3">
          {psychiatrists.map((doctor, index) => (
            <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
              <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
              <h3 className="font-semibold mt-2">Available Sessions:</h3>
              <ul className="space-y-1">
                {doctor.sessions.map((session, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">{session}</span>
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

export default Psychiatrists;
