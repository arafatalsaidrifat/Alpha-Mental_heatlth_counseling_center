import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const doctorLogin = "/doctor-login.jpg"; // Doctor login page background image

function DoctorLogin() {
  const [doctorID, setDoctorID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleDoctorLogin = async (e) => {
    e.preventDefault();
    const loginData = { doctorID, email, password };

    try {
      const response = await fetch('http://localhost:3001/doctor-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Doctor Login Successful');
        navigate('/DoctorDashboard'); // Redirect to Doctor Dashboard after login
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{ 
        backgroundImage: `url(${doctorLogin})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center bg-white rounded-lg shadow-2xl p-4 max-w-sm w-3/4 opacity-90 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Doctor Login</h2>
        
        <form onSubmit={handleDoctorLogin} className="w-full">
          <label className="flex flex-col mb-3 w-full">
            <span className="text-sm text-gray-700">Doctor ID</span>
            <input
              type="text"
              value={doctorID}
              onChange={(e) => setDoctorID(e.target.value)}
              className="border rounded-lg p-2 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 shadow-sm hover:shadow-lg"
              placeholder="Enter your Doctor ID"
              required
            />
          </label>

          <label className="flex flex-col mb-3 w-full">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 shadow-sm hover:shadow-lg"
              placeholder="Enter your email"
              required
            />
          </label>

          <label className="flex flex-col mb-3 w-full">
            <span className="text-sm text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-2 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 shadow-sm hover:shadow-lg"
              placeholder="Enter your password"
              required
            />
          </label>

          <div className="flex justify-between items-center w-full mb-3 px-2">
            <a href="/forgot-password" className="text-blue-500 hover:underline text-xs">Forgot Password?</a>
          </div>

          <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 mt-3 hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg duration-300 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorLogin;
