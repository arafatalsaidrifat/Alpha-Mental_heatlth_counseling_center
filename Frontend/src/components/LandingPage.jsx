import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2'; // Adjust the path based on your project structure
const back = '/back.jpeg'; // Adjust the path according to your structure

const LandingPage = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar2 />

      {/* Banner Section */}
      <div
        className="relative h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Mental Health Counseling Center</h1>
          <p className="text-lg mb-8">Your journey to mental wellness begins here.</p>

          {/* Email Input and GO Button */}
          <form onSubmit={handleEmailSubmit} className='flex items-center justify-center mb-4'>
            <input
              type='text'
              name='email'
              className='bg-white text-black rounded px-4 py-2'
              placeholder='Write your e-mail to start !!!..'
            />
            <button type='submit' className='bg-orange-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:opacity-0'>
              GO
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
