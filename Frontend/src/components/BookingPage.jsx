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
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Book Session</h1>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block text-gray-700">Doctor:</label>
          <p className="font-medium">{doctorName}</p>
        </div>
        <div>
          <label className="block text-gray-700">Session Time:</label>
          <p className="font-medium">{session}</p>
        </div>
        <div>
          <label className="block text-gray-700">Your Name:</label>
          <input 
            type="text" 
            value={patientName} 
            onChange={(e) => setPatientName(e.target.value)} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700">Contact Info:</label>
          <input 
            type="text" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
