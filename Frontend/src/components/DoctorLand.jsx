import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const DoctorLand = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [totalDue, setTotalDue] = useState(0);
  const [totalDone, setTotalDone] = useState(0);

  useEffect(() => {
    // Check if the user is logged in and is a doctor
    const user = sessionStorage.getItem("user_id");
    const role = sessionStorage.getItem("role");
    
    if (!user || role !== "doctor") {
      navigate("/login");
    } else {
      // Fetch doctor details and today's appointments
      const email = sessionStorage.getItem("user_id");

      axios
        .get(`http://localhost:5000/doctor/${email}`)
        .then(response => {
          setDoctor(response.data);
        })
        .catch(error => console.error(error));

      axios
        .get(`http://localhost:5000/appointments?doctorEmail=${email}&date=${new Date().toISOString().split("T")[0]}`)
        .then(response => {
          setAppointments(response.data);
          calculateAppointmentStatus(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [navigate]);

  const calculateAppointmentStatus = (appointmentsList) => {
    let due = 0;
    let done = 0;

    appointmentsList.forEach(appointment => {
      if (appointment.status === "completed") {
        done++;
      } else {
        due++;
      }
    });

    setTotalDue(due);
    setTotalDone(done);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  const { name, gender, profile_picture } = doctor;

  return (
    <div className="dashboard">
      <main className="content">
        <h1>Welcome, {name}!</h1>
        <section className="today-schedule">
          <h2>Today's Schedule</h2>
          <p><strong>Date:</strong> {new Date().toISOString().split("T")[0]}</p>
          <table>
            <caption>Appointment Patient List</caption>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient Name</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.start_time}</td>
                    <td>{appointment.patient_name}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="2">No appointments for today.</td></tr>
              )}
            </tbody>
          </table>
        </section>

        <section className="appointments-summary">
          <table>
            <caption>Appointments Summary</caption>
            <thead>
              <tr>
                <th>Appointment Status</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Due</strong></td>
                <td>{totalDue}</td>
              </tr>
              <tr>
                <td><strong>Completed</strong></td>
                <td>{totalDone}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <aside className="sidebar right">
        <div className="profile" onClick={() => navigate("/doctor/profile")}>
          <img
            src={profile_picture ? `/doctor/img/${profile_picture}` : gender === "Male" ? "/photo/male.png" : gender === "Female" ? "/photo/female.png" : "/doctor/img/default.png"}
            alt="Profile"
          />
          <p>{name}</p>
        </div>

        <nav>
          <ul>
            <li><a href="/doctor/availability">Availability</a></li>
            <li><a href="/doctor/appointments">Appointments</a></li>
          </ul>
        </nav>

        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </aside>
    </div>
  );
};

export default DoctorLand;
