import React, { useContext } from 'react';
import { ThemeContext } from '../App'; // Adjust path if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Dashboard() {
  const { theme } = useContext(ThemeContext); // Accessing theme from context
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="mt-20 p-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen rounded-lg shadow-lg flex flex-col">
      {/* Your Health Section */}
      <div className="flex-none p-4 bg-white dark:bg-gray-800 rounded-md shadow-md w-full mb-6">
        <h2 className="text-lg font-bold mb-2 text-center text-gray-700">Your Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          <div onClick={() => navigate('/doctor-match')} className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img src="https://img.icons8.com/ios-filled/40/ffffff/doctor-male--v2.png" alt="Doctor" className="h-10 w-10" />
            <p className="mt-1 text-white text-sm font-medium">Doctors match</p>
          </div>
          <div onClick={() => navigate('/medicine')} className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img src="https://img.icons8.com/ios-filled/40/ffffff/pills.png" alt="Medicine" className="h-10 w-10" />
            <p className="mt-1 text-white text-sm font-medium">Medicine</p>
          </div>
          <div onClick={() => navigate('/tests')} className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img src="https://img.icons8.com/ios-filled/40/ffffff/test-tube.png" alt="Tests" className="h-10 w-10" />
            <p className="mt-1 text-white text-sm font-medium">Tests</p>
          </div>
          <div onClick={() => navigate('/HealthRecord')} className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM10 6h4v2h-4V6zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
            </svg>
            <p className="mt-1 text-white text-sm font-medium">Health Records</p>
          </div>
        </div>
        {/* Check Doctor and Health Suggestions Tag with Arrow */}
        <div className="flex justify-center items-center mt-3 cursor-pointer" onClick={() => window.location.href = '/health-suggestions'}>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-800 font-medium">Check Doctor and Health Suggestions</span>
            <div className="w-6 h-6 transform rotate-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5h-15v15" />
              </svg>
            </div>
          </div>
        </div>
      </div>


      {/* Doctor List Section */}
      <section className="flex-grow ml-8 mt-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
          <h2 className="text-3xl font-semibold mb-4 text-center">Available Doctors</h2>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Specialization</th>
                <th className="py-2 px-4 border-b">Experience</th>
                <th className="py-2 px-4 border-b">Rating</th>
              </tr>
            </thead>
            <tbody>
              {/* Doctor Rows */}
              {[
                { name: "Dr. Farhana Islam", spec: "Psychiatrist", exp: "8 Years", rating: "4.8" },
                { name: "Dr. Tahsin Rahman", spec: "Psychologist", exp: "5 Years", rating: "4.6" },
                { name: "Ms. Nazia Ahmed", spec: "Counselor", exp: "6 Years", rating: "4.9" },
                { name: "Dr. Imran Hossain", spec: "Psychiatrist", exp: "10 Years", rating: "4.5" },
                { name: "Dr. Sabrina Chowdhury", spec: "Psychologist", exp: "7 Years", rating: "4.7" },
                { name: "Mr. Rafiq Hasan", spec: "Counselor", exp: "4 Years", rating: "4.4" },
                { name: "Dr. Sadia Sultana", spec: "Psychiatrist", exp: "9 Years", rating: "4.8" },
                { name: "Ms. Tania Rahim", spec: "Psychologist", exp: "5 Years", rating: "4.6" },
                { name: "Dr. Mahbub Alam", spec: "Counselor", exp: "6 Years", rating: "4.5" },
                { name: "Ms. Nusrat Jahan", spec: "Psychologist", exp: "3 Years", rating: "4.9" },
              ].map((doctor, index) => (
                <tr key={index} className="hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  <td className="py-2 px-4 border-b">{doctor.name}</td>
                  <td className="py-2 px-4 border-b">{doctor.spec}</td>
                  <td className="py-2 px-4 border-b">{doctor.exp}</td>
                  <td className="py-2 px-4 border-b">{doctor.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Doctor Categories Section */}
      <section className="mb-10 mt-4 w-full ml-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Doctor Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onClick={() => navigate('/psychiatrists')} className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-lg font-bold text-white">Psychiatrists</h3>
            <p className="mt-2 text-white">Specialized in mental health disorders.</p>
          </div>
          <div onClick={() => navigate('/psychologists')} className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-lg font-bold text-white">Psychologists</h3>
            <p className="mt-2 text-white">Focus on therapy and counseling.</p>
          </div>
          <div onClick={() => navigate('/counselors')} className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-lg font-bold text-white">Counselors</h3>
            <p className="mt-2 text-white">Support for mental well-being.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
