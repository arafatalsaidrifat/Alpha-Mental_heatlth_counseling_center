import React from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorMatch() {
  const navigate = useNavigate();

  const psychiatrists = [
    { name: "Dr. Farhana Islam", exp: "8 Years", rating: "4.8", sessions: ["10:00 AM", "2:00 PM"] },
    { name: "Dr. Imran Hossain", exp: "10 Years", rating: "4.5", sessions: ["12:00 PM", "3:00 PM"] },
    { name: "Dr. Sadia Sultana", exp: "9 Years", rating: "4.8", sessions: ["3:00 PM", "6:00 PM"] },
  ];

  const psychologists = [
    { name: "Dr. Sabrina Chowdhury", exp: "7 Years", rating: "4.8", sessions: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Tahsin Rahman", exp: "5 Years", rating: "4.6", sessions: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Tania Rahim", exp: "5 Years", rating: "4.6", sessions: ["1:00 PM", "5:00 PM"] },
    { name: "Dr. Nusrat Jahan", exp: "3 Years", rating: "4.9", sessions: ["2:00 PM", "6:00 PM"] },
  ];

  const counselors = [
    { name: "Dr. Nazia Ahmed", exp: "6 Years", rating: "4.9", sessions: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Rafiq Hasan", exp: "4 Years", rating: "4.4", sessions: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Mahbub Alam", exp: "6 Years", rating: "4.5", sessions: ["1:00 PM", "5:00 PM"] },
  ];

  const handleBook = (doctorName, session) => {
    navigate('/book', { state: { doctorName, session } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-400 flex flex-col items-center py-10">
      {/* Banner Section with Uploaded Image */}
      <div className="w-full bg-cover bg-center h-40" style={{ backgroundImage: `url(${require('/mnt/data/R.jpg')})` }}>
        <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Find Your Perfect Doctor Match</h1>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto px-4 mt-6">
        {/* Psychiatrists Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Psychiatrists</h2>
          <ul className="space-y-4">
            {psychiatrists.map((doctor, index) => (
              <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
                <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
                <h4 className="font-semibold mt-2">Available Sessions:</h4>
                <ul className="space-y-2">
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

        {/* Psychologists Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Psychologists</h2>
          <ul className="space-y-4">
            {psychologists.map((doctor, index) => (
              <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
                <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
                <h4 className="font-semibold mt-2">Available Sessions:</h4>
                <ul className="space-y-2">
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

        {/* Counselors Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Counselors</h2>
          <ul className="space-y-4">
            {counselors.map((doctor, index) => (
              <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">Experience: <span className="font-medium">{doctor.exp}</span></p>
                <p className="text-gray-600">Rating: <span className="font-medium">{doctor.rating}</span></p>
                <h4 className="font-semibold mt-2">Available Sessions:</h4>
                <ul className="space-y-2">
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
    </div>
  );
}

export default DoctorMatch;
