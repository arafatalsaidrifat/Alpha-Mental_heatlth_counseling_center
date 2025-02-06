import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { doctorName, session } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    needs: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      ...formData,
      doctor: doctorName,
      date: session.date,
      time: session.time,
    };

    try {
      await axios.post("http://localhost:3001/ub", bookingData);
      alert("Booking successful!");
      navigate("/dashboard"); // Redirect to home or confirmation page
    } catch (error) {
      console.error("Error booking:", error);
      alert("Booking failed, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Date:</strong> {session.date}</p>
        <p><strong>Time:</strong> {session.time}</p>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="needs"
            placeholder="Any Specific Needs?"
            value={formData.needs}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
