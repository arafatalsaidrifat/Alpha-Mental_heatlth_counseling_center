import React, { useState } from 'react';

const back = "/back.jpeg"; // Adjusted path for background image

function Banner() {
  const [currentDivision, setCurrentDivision] = useState(0);

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

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-orange-500 opacity-90" />

      <div className="w-full max-w-screen-lg mx-auto relative z-10 flex flex-col items-center justify-center text-center space-y-8">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Welcome to our</h1>
<h1 className="text-6xl font-extrabold text-yellow-300 drop-shadow-xl">
  MENTAL HEALTH COUNSELING CENTER
</h1>

        <p className="text-lg text-gray-100 italic">
          Unlock Inner Peace with Expert Guidance.
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6 text-white underline">Explore Our Services</h2>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition duration-300 shadow-lg"
            >
              ❮
            </button>
            <div
              className="mx-4 overflow-hidden rounded-lg border border-gray-300 shadow-lg"
              style={{ width: '300px' }}
            >
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentDivision * 100}%)` }}
              >
                {divisions.map((division, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full p-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white text-center transform transition-transform duration-300 hover:scale-105 shadow-md"
                  >
                    <h3 className="text-xl font-semibold">{division.title}</h3>
                    <p className="mt-2">{division.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition duration-300 shadow-lg"
            >
              ❯
            </button>
          </div>
        </div>

        <ul className="list-disc ml-5 space-y-2 text-center text-gray-100">
          <li>Professional and certified counselors available 24/7.</li>
          <li>Confidential one-on-one sessions tailored to your needs.</li>
          <li>Online booking for appointments with licensed therapists.</li>
          <li>Resources and articles for self-care and mental wellness.</li>
          <li>Support groups for various mental health concerns.</li>
        </ul>

        <label className="flex flex-col items-center mt-6">
          <span className="text-lg font-semibold mb-2 text-gray-100">Email</span>
          <input
            type="text"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm"
            placeholder="Write your e-mail to start !!!.."
          />
        </label>

        <button className="mt-4 px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-transparent hover:text-pink-500 border-2 border-pink-500 transition duration-300 shadow-lg">
          GO
        </button>
      </div>
    </div>
  );
}

export default Banner;
