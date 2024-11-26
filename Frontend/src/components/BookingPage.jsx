import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctorName, session } = location.state; // Get doctor and session from state

  const [patientName, setPatientName] = useState('');
  const [contact, setContact] = useState('');
  const [patientId, setPatientId] = useState(''); // Added patient ID state

  const handleBooking = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      doctorName,
      session,
      patientName,
      contact,
      patientId, // Include the patient ID in the booking data
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
        navigate('/sessions'); // Redirect to sessions page
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-white text-center mb-6">Book Your Session</h1>
      <form onSubmit={handleBooking} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700 font-medium">Doctor:</label>
          <p className="text-lg text-blue-600">{doctorName}</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Session Time:</label>
          <p className="text-lg text-blue-600">{session}</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Patient ID:</label>
          <input 
            type="text" 
            value={patientId} 
            onChange={(e) => setPatientId(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your ID" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Your Name:</label>
          <input 
            type="text" 
            value={patientName} 
            onChange={(e) => setPatientName(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
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
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your contact info" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full p-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;

