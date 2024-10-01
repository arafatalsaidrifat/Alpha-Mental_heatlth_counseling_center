// Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="mail">
              Mail
            </label>
            <input
              type="email"
              id="mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mail"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="religion">
              Religion
            </label>
            <input
              type="text"
              id="religion"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your religion"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="nationality">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your nationality"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="location">
              Location (City)
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
