import React from 'react';
const login = "/login.jpg"; // Import the login image

function Login() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{ 
        backgroundImage: `url(${login})`, // Set the login image as background
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
      }}
    >
      <div className="flex flex-col items-center bg-white rounded-lg shadow-2xl p-4 max-w-xs w-3/4 opacity-90 transform transition duration-500 hover:scale-105 hover:shadow-2xl"> {/* Smaller box size */}
        <h2 className="text-2xl font-bold text-center mb-3">Login to Your Account</h2>
        
        <label className="flex flex-col mb-3 w-full"> {/* Adjusted width */}
          <span className="text-sm text-gray-700">Email</span> 
          <input
            type="email"
            className="border rounded-lg p-2 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 shadow-sm hover:shadow-lg" // Added background color
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col mb-3 w-full"> {/* Adjusted width */}
          <span className="text-sm text-gray-700">Password</span> 
          <input
            type="password"
            className="border rounded-lg p-2 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 shadow-sm hover:shadow-lg" // Added background color
            placeholder="Enter your password"
          />
        </label>

        <div className="flex justify-between items-center w-full mb-3 px-2">
          <a href="/forgot-password" className="text-blue-500 hover:underline text-xs">Forgot Password?</a>
        </div>

        <button className="bg-blue-500 text-white rounded-lg py-2 mt-3 hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg duration-300 w-full"> {/* Adjusted width */}
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
