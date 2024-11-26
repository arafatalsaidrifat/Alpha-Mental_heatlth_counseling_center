import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BlankNavbar from "./BlankNavbar"; // Import the blank navbar

const doctorSignupBg = "/doctorsignup.jpg"; // Background image for Doctor Signup

function DoctorSignup() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorData = { name, mail, specialization, experience, phone, password };

    try {
      const response = await fetch('http://localhost:3001/doctor-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctorData),
      });

      if (response.ok) {
        alert('Doctor Signup successful');
        navigate('/DoctorDashboard'); // Redirect to DoctorDashboard after successful signup
      } else {
        alert('Error during doctor signup');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <BlankNavbar /> {/* Include the blank navbar */}
      <div className="flex min-h-screen">
        {/* Left side: Signup form */}
        <div className="flex items-center justify-center w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <div className="w-full max-w-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Doctor Signup</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="mail">Email</label>
                <input
                  type="email"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="specialization">Specialization</label>
                <input
                  type="text"
                  id="specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your specialization"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="experience">Experience (Years)</label>
                <input
                  type="number"
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter years of experience"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Right side: Background image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${doctorSignupBg})` }}></div>
      </div>
    </div>
  );
}

export default DoctorSignup;
