import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Signup() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Declare the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, mail, phone, gender, religion, dob, nationality, location, password };

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Signup successful');
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert('Error during signup');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDoctorSignup = () => {
    navigate('/doctor-signup'); // Navigate to Doctor Signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Gender Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Religion Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="religion">Religion</label>
            <input
              type="text"
              id="religion"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your religion"
              required
            />
          </div>
          {/* Date of Birth Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Nationality Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="nationality">Nationality</label>
            <input
              type="text"
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your nationality"
              required
            />
          </div>
          {/* Location Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your location"
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
        {/* Add Sign Up as Doctor Button */}
        <button
          onClick={handleDoctorSignup}
          className="mt-4 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
        >
          Sign Up as Doctor
        </button>
      </div>
    </div>
  );
}

export default Signup;
