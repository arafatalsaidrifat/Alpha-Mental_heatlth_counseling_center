import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to the Home Page</h1>
      <p className="mt-4 text-center text-gray-700">Here is some information available for users.</p>

      {/* Doctor Information Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Doctor Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Specialization</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-200 transition duration-300">
                <td className="py-3 px-4">Dr. John Doe</td>
                <td className="py-3 px-4">Psychologist</td>
              </tr>
              <tr className="hover:bg-gray-200 transition duration-300">
                <td className="py-3 px-4">Dr. Jane Smith</td>
                <td className="py-3 px-4">Counselor</td>
              </tr>
              <tr className="hover:bg-gray-200 transition duration-300">
                <td className="py-3 px-4">Dr. Alan Brown</td>
                <td className="py-3 px-4">Therapist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Categories</h2>
        <ul className="list-disc pl-6">
          <li className="transition transform hover:-translate-y-1 duration-300">
            <Link to="/category/anxiety" className="text-blue-600 hover:underline">
              Anxiety
            </Link>
          </li>
          <li className="transition transform hover:-translate-y-1 duration-300">
            <Link to="/category/depression" className="text-blue-600 hover:underline">
              Depression
            </Link>
          </li>
          <li className="transition transform hover:-translate-y-1 duration-300">
            <Link to="/category/stress" className="text-blue-600 hover:underline">
              Stress Management
            </Link>
          </li>
        </ul>
      </section>

      {/* Health Record Link */}
      <section className="mt-6 text-center">
        <Link to="/health-record" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
          Update Health Record
        </Link>
      </section>
    </div>
  );
}

export default Home;
