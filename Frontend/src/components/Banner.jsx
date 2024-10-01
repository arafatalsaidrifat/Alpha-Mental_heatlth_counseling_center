import React, { useState } from 'react';
 // Import the health image
 const back = "/back.jpeg"; // Adjusted path
 // Adjust the path according to your structure
 // Import the background image

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
      className="relative mb-10"
      style={{ 
        backgroundImage: `url(${back})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating
      }}
    >
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 opacity-80 transform -translate-z-0 shadow-lg" />

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10 md:mt-3 relative z-10'>
        <div className='w-full md:w-1/2 mt-12 md:mt-30 md:mr-10'>
          <h1 className='text-3xl font-bold'>Welcome to our!!</h1>
          <h1 className='text-3xl font-bold'>MENTAL HEALTH COUNSELING CENTER</h1>
          <div className='space-y-6'>
            <h1>
              <span className='text-black-500'>
                Unlock Inner Peace with Expert Guidance.
              </span>
            </h1>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-center mb-6">Explore Our Services</h2>
              <div className="flex items-center justify-center mb-4">
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

            <ul className='list-disc ml-5 space-y-1'>
              <li>Professional and certified counselors available 24/7.</li>
              <li>Confidential one-on-one sessions tailored to your needs.</li>
              <li>Online booking for appointments with licensed therapists.</li>
              <li>Resources and articles for self-care and mental wellness.</li>
              <li>Support groups for various mental health concerns.</li>
            </ul>

            <label className='input input-bordered flex items-center gap-2 mt-4'>
              Email
              <input
                type='text'
                className='grow'
                placeholder='Write your e-mail to start !!!..'
              />
            </label>
          </div>
          <button className='btn btn-active mt-3 btn-secondary hover:bg-transparent hover:text-white duration-300 mb-8'>GO</button>
        </div>

        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
 
</div>

{/* Your Health Section */}
<div 
  className="absolute right-1/4 top-1/2 transform translate-x-1/2 translate-y-[-50%] p-6 bg-gray-50 rounded-md shadow-md w-auto max-w-xs mx-auto hover:scale-110 transition-all duration-300"
  onMouseEnter={toggleZoom}
  onMouseLeave={toggleZoom}
>
  <h2 className="text-lg font-bold mb-2 text-center text-gray-700">Your Health</h2>
  <div className="grid grid-cols-2 gap-1">
    <div onClick={() => window.location.href = '/counselor'} className="bg-gradient-to-r from-pink-400 to-pink-600 p-2 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 hover:bg-gradient-to-l hover:from-pink-600 hover:to-pink-400">
      <img src="https://img.icons8.com/ios-filled/40/ffffff/doctor-male--v2.png" alt="Doctor" className="h-8 w-8" />
      <p className="mt-1 text-white text-xs font-medium">Doctors</p>
    </div>
    <div onClick={() => window.location.href = '#medicine'} className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-400">
      <img src="https://img.icons8.com/ios-filled/40/ffffff/pills.png" alt="Medicine" className="h-8 w-8" />
      <p className="mt-1 text-white text-xs font-medium">Medicine</p>
    </div>
    <div onClick={() => window.location.href = '#tests'} className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 hover:bg-gradient-to-l hover:from-green-600 hover:to-green-400">
      <img src="https://img.icons8.com/ios-filled/40/ffffff/test-tube.png" alt="Tests" className="h-8 w-8" />
      <p className="mt-1 text-white text-xs font-medium">Tests</p>
    </div>
    <div 
      onClick={() => window.location.href = '/HealthRecord'} 
      className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 hover:bg-gradient-to-l hover:from-yellow-600 hover:to-yellow-400"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-8 w-8 text-white" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM10 6h4v2h-4V6zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
      </svg>
      <p className="mt-1 text-white text-xs font-medium">Health Records</p>
    </div>
  </div>
  {/* Check Doctor and Health Suggestions Tag with 3D Arrow */}
  <div className="flex justify-center items-center mt-3">
    <div className="flex items-center space-x-2 cursor-pointer transform hover:scale-110 transition duration-300">
      <span className="text-sm text-gray-800 font-medium">Check Doctor and Health Suggestions</span>
      <div className="w-6 h-6 transform rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5h-15v15" />
        </svg>
      </div>
    </div>
  </div>
</div>
</div>

    </div>
  );
}

export default Banner;
