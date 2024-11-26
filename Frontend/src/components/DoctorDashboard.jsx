import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [totalDue, setTotalDue] = useState(0);
  const [totalDone, setTotalDone] = useState(0);
  const [date, setDate] = useState('');
  const doctorId = 1; // Use the logged-in doctor's ID (you can get this from session or token)

  useEffect(() => {
    // Fetch doctor details
    axios.get(`/api/doctor/details?id=${doctorId}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(err => console.error('Error fetching doctor details:', err));

    // Fetch today's appointments
    axios.get(`/api/appointments/today?doctorId=${doctorId}`)
      .then(response => {
        setAppointments(response.data);
        let due = 0;
        let done = 0;
        response.data.forEach(appointment => {
          if (appointment.status === 'completed') {
            done++;
          } else {
            due++;
          }
        });
        setTotalDue(due);
        setTotalDone(done);
      })
      .catch(err => console.error('Error fetching appointments:', err));

    // Set current date
    setDate(new Date().toISOString().split('T')[0]);
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="flex flex-row">
      {/* Main Content */}
      <main className="flex-3 p-6 bg-white rounded-lg shadow-md mx-4 mt-4 w-full">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, Dr. {doctor.name}!</h1>

        <section className="my-6">
          <h2 className="text-xl font-semibold text-gray-700">Today's Schedule</h2>
          <p><strong>Date:</strong> {date}</p>
          <table className="min-w-full mt-4 border-collapse">
            <caption className="text-xl font-semibold my-4">Appointment Patient List</caption>
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Patient Name</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2">{appointment.start_time}</td>
                    <td className="px-4 py-2">{appointment.patient_name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-4 py-2 text-center">No appointments for today.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Appointment Summary */}
        <section className="my-6">
          <table className="min-w-full mt-4 border-collapse">
            <caption className="text-xl font-semibold my-4">Appointments Summary</caption>
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left">Appointment Status</th>
                <th className="px-4 py-2 text-left">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Due</td>
                <td className="px-4 py-2">{totalDue}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold">Completed</td>
                <td className="px-4 py-2">{totalDone}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 fixed top-0 right-0 bottom-0">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 cursor-pointer">
          <img 
            src={doctor.profile_picture ? `../doctor/img/${doctor.profile_picture}` : '/default-profile.jpg'} 
            alt="Profile"
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="font-semibold text-lg">{doctor.name}</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul>
            <li className="mb-4">
              <a href="/doctor/availability" className="text-lg hover:text-teal-400">Availability</a>
            </li>
            <li>
              <a href="/doctor/appointment" className="text-lg hover:text-teal-400">Appointments</a>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button onClick={() => window.location.href = '/logout'} className="w-full bg-gray-700 text-white p-3 rounded-lg mt-6 hover:bg-gray-600 transition-all">
          <i className="fas fa-sign-out-alt mr-2"></i> Logout
        </button>
      </aside>
    </div>
  );
};

export default DoctorDashboard;
