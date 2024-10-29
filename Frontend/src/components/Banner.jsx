// Import the Navbar
import Navbar from './Navbar';
import React, { useState } from 'react';

const back = "/back.jpeg"; // Adjusted path for background image

function Banner() {
  const [currentDivision, setCurrentDivision] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom effect

  // Divisions content
  const divisions = [
    {
      title: "Individual Therapy",
      description: "Personalized one-on-one therapy sessions focused on your unique needs."
    },
    {
      title: "Group Counseling",
      description: "Engage with others in a supportive environment to share experiences and insights."
    },
    {
      title: "Mental Health Workshops",
      description: "Participate in workshops designed to equip you with practical tools for mental wellness."
    }
  ];

  const handleNext = () => {
    setCurrentDivision((prev) => (prev + 1) % divisions.length);
  };

  const handlePrev = () => {
    setCurrentDivision((prev) => (prev - 1 + divisions.length) % divisions.length);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev); // Toggle zoom state
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center" // Centering styles
      style={{ 
        backgroundImage: `url(${back})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
      }}
    >
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 opacity-80 transform -translate-z-0 shadow-lg" />

      <div className="w-full max-w-screen-lg mx-auto relative z-10 flex flex-col items-center justify-center text-center space-y-6"> {/* Center everything in a column */}
        <h1 className="text-4xl font-bold">Welcome to our!!</h1>
        <h1 className="text-4xl font-bold">MENTAL HEALTH COUNSELING CENTER</h1>
        <p className="text-lg text-black-500">
          Unlock Inner Peace with Expert Guidance.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Explore Our Services</h2>
          <div className="flex items-center justify-center">
            <button onClick={handlePrev} className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">❮</button>
            <div className="mx-4 overflow-hidden" style={{ width: '300px' }}>
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentDivision * 100}%)` }}>
                {divisions.map((division, index) => (
                  <div key={index} className="flex-shrink-0 w-full p-4 rounded-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white text-center transform transition-transform duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold">{division.title}</h3>
                    <p className="mt-2">{division.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">❯</button>
          </div>
        </div>

        <ul className="list-disc ml-5 space-y-1 text-center">
          <li>Professional and certified counselors available 24/7.</li>
          <li>Confidential one-on-one sessions tailored to your needs.</li>
          <li>Online booking for appointments with licensed therapists.</li>
          <li>Resources and articles for self-care and mental wellness.</li>
          <li>Support groups for various mental health concerns.</li>
        </ul>

        <label className="flex flex-col items-center mt-6">
          <span className="text-lg font-semibold mb-2">Email</span>
          <input
            type="text"
            className="p-2 rounded border border-gray-300"
            placeholder="Write your e-mail to start !!!.."
          />
        </label>

        <button className="mt-4 px-6 py-2 bg-secondary text-white rounded hover:bg-transparent hover:text-secondary border-secondary border-2 transition duration-300">
          GO
        </button>
      </div>
    </div>
  );
}

export default Banner;
