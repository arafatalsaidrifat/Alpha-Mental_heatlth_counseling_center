import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctorName, session } = location.state; // Get doctor and session from state

  const [patientName, setPatientName] = useState('');
  const [contact, setContact] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      doctorName,
      session,
      patientName,
      contact,
    };

    // Make POST request to save booking to the database
    try {
      const response = await fetch('http://localhost:3001/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      
      if (response.ok) {
        alert("Booking successful!");

        // Redirect to the Booked page with booking details
        navigate('/booked', { state: { bookedDetails: bookingData } });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-12 max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
      <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-tight">Book Your Session</h1>
      <form onSubmit={handleBooking} className="space-y-8 bg-white p-8 rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-gray-800 font-medium text-lg">Doctor:</label>
            <p className="text-xl font-semibold text-blue-700">{doctorName}</p>
          </div>
          <div>
            <label className="block text-gray-800 font-medium text-lg">Session Time:</label>
            <p className="text-xl font-semibold text-blue-700">{session}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name:</label>
            <input 
              type="text" 
              value={patientName} 
              onChange={(e) => setPatientName(e.target.value)} 
              className="w-full p-4 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-gray-200"
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Contact Info:</label>
            <input 
              type="text" 
              value={contact} 
              onChange={(e) => setContact(e.target.value)} 
              className="w-full p-4 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-gray-200"
              placeholder="Enter your contact info" 
              required 
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transform transition duration-300 hover:scale-105"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingPage;
