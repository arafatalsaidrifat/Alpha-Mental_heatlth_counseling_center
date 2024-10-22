import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const login = "/login.jpg"; // Import the login image

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();  // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { mail, password };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Login successful');
        navigate('/dashboard');  // Redirect to the dashboard after successful login
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{ 
        backgroundImage: `url(${login})`, // Set the login image as background
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center bg-white rounded-lg shadow-2xl p-4 max-w-xs w-3/4 opacity-90 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-3">Login to Your Account</h2>
        
        <form onSubmit={handleLogin} className="w-full">
          <label className="flex flex-col mb-3 w-full">
            <span className="text-sm text-gray-700">Email</span> 
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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

export default Login;
