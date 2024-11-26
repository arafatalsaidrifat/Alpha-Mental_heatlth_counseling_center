import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Main Navbar
import Navbar2 from './components/Navbar2'; // Navbar for Landing Page
import BlankNavbar from './components/BlankNavbar'; // Blank Navbar
import Dashboard from './components/Dashboard';
import PaymentPage from './components/PaymentPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Banner from './components/Banner'; // Your Banner component acts as the Landing Page
import Footer from './components/Footer';
import './index.css';
import Counselor from './components/Counselor'; // Adjust the path as necessary
import LiveChat from './components/LiveChat';
import HealthRecord from './components/HealthRecord';
import DoctorPackages from './components/DoctorPackages';
import Psychiatrists from './components/Psychiatrists';
import Psychologists from './components/Psychologists';
import Counselors from './components/Counselors';
import BookingPage from './components/BookingPage'; // Import BookingPage
import SessionsPage from './components/SessionsPage';
import HealthSuggestions from './components/HealthSuggestions'; // Import HealthSuggestions
import MedicinePage from './components/MedicinePage';
import TestsPage from './components/TestsPage';
import DoctorLogin from './components/DoctorLogin'; // Correctly import DoctorLogin
import DoctorSignup from './components/DoctorSignup';
import DoctorDashboard from './components/DoctorDashboard';
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:3001/login')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Conditionally render BlankNavbar for DoctorSignup and DoctorLogin pages */}
      {location.pathname === '/doctor-signup' || location.pathname === '/doctor-login' ? (
        <BlankNavbar /> // Show BlankNavbar on these pages
      ) : (
        location.pathname === '/' ? <Navbar2 /> : <Navbar /> // Show Navbar2 for Landing Page and Navbar for others
      )}

      <div className="app-content">
        <Routes>
          {/* Banner component as the Landing Page */}
          <Route path="/" element={<Banner />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/counselor" element={<Counselor />} />
          <Route path="/healthRecord" element={<HealthRecord />} />
          <Route path="/liveChat" element={<LiveChat />} />
          <Route path="/packages" element={<DoctorPackages />} />
          <Route path="/psychiatrists" element={<Psychiatrists />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/counselors" element={<Counselors />} />
          <Route path="/book" element={<BookingPage />} /> {/* Route to BookingPage */}
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/health-suggestions" element={<HealthSuggestions />} /> {/* New Route for HealthSuggestions */}
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/doctor-login" element={<DoctorLogin />} /> {/* Corrected Route for DoctorLogin */}
          <Route path="/doctor-signup" element={<DoctorSignup />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

        </Routes>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
