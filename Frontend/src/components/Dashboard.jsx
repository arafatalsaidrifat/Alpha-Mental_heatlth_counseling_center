import React, { useContext } from 'react';
import { ThemeContext } from '../App'; // Adjust path if needed

function Dashboard() {
  const { theme } = useContext(ThemeContext); // Accessing theme from context

  return (
    <div className="mt-20 p-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h1 className="text-4xl font-bold mb-8 text-center">Mental Health Counseling Dashboard</h1>
      
      {/* Doctor List Section */}
      <section className="mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
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
      <section className="mb-10">
        <div className="bg-gradient-to-r from-red-400 to-yellow-400 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
          <h2 className="text-3xl font-semibold mb-4 text-center">Doctor Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
              <h3 className="text-lg font-bold">Psychiatrists</h3>
              <p>Experts in mental health treatment and medication management.</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
              <h3 className="text-lg font-bold">Psychologists</h3>
              <p>Focus on therapy and behavior analysis.</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
              <h3 className="text-lg font-bold">Counselors</h3>
              <p>Provide guidance and support for various mental health issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Time Section */}
      <section className="mb-10">
        <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
          <h2 className="text-3xl font-semibold mb-4 text-center">Session Times</h2>
          <ul className="list-disc pl-5 text-center">
            <li className="hover:text-blue-500 transition duration-300">Morning Sessions: 9:00 AM - 12:00 PM</li>
            <li className="hover:text-blue-500 transition duration-300">Afternoon Sessions: 1:00 PM - 4:00 PM</li>
            <li className="hover:text-blue-500 transition duration-300">Evening Sessions: 5:00 PM - 8:00 PM</li>
          </ul>
        </div>
      </section>

      {/* Additional Assets Section */}
      <section>
        <div className="bg-teal-100 dark:bg-teal-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-transparent">
          <h2 className="text-3xl font-semibold mb-4 text-center">Additional Resources</h2>
          <ul className="list-disc pl-5 text-center">
            <li className="hover:text-blue-500 transition duration-300">Mental Health Blogs</li>
            <li className="hover:text-blue-500 transition duration-300">Support Groups</li>
            <li className="hover:text-blue-500 transition duration-300">Meditation and Relaxation Techniques</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
