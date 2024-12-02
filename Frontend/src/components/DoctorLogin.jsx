import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorLogin({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleDoctorLogin = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

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
        setIsLoggedIn(true); // Update global login state
        navigate('/doctor-dashboard'); // Navigate to the correct route
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
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)', 
        backgroundSize: '400% 400%', 
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-2xl p-4 max-w-sm w-3/4 opacity-90">
        <h2 className="text-2xl font-bold text-center mb-4">Doctor Login</h2>
        <form onSubmit={handleDoctorLogin} className="w-full">
          <label className="flex flex-col mb-3">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2 mt-1 bg-gray-100"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="flex flex-col mb-3">
            <span className="text-sm text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-2 mt-1 bg-gray-100"
              placeholder="Enter your password"
              required
            />
          </label>
          <button 
            type="submit" 
            className="bg-blue-500 text-white rounded-lg py-2 mt-3 hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorLogin;
