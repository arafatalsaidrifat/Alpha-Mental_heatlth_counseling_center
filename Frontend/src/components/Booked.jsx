import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Booked() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookedDetails } = location.state; // Get the passed booking details

  return (
    <div className="p-10 max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-xl">
      <h1 className="text-3xl font-semibold text-white text-center mb-8">Booking Confirmation</h1>
      <div className="space-y-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Booking Details</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-800">Doctor: <span className="font-medium text-indigo-700">{bookedDetails.doctorName}</span></p>
          <p className="text-lg text-gray-800">Session Time: <span className="font-medium text-indigo-700">{bookedDetails.session}</span></p>
          <p className="text-lg text-gray-800">Your Name: <span className="font-medium text-indigo-700">{bookedDetails.patientName}</span></p>
          <p className="text-lg text-gray-800">Contact Info: <span className="font-medium text-indigo-700">{bookedDetails.contact}</span></p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/dashboard')} 
            className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booked;
