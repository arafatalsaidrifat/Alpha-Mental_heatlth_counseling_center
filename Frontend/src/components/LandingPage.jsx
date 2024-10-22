import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Regular Navbar
import LandingPage from './components/LandingPage'; // This includes Navbar2
import Dashboard from './components/Dashboard';
import PaymentPage from './components/PaymentPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import './index.css'; 
import Counselor from './components/counselor';
import LiveChat from './components/LiveChat';
import HealthRecord from './components/HealthRecord';
import DoctorPackages from './components/DoctorPackages';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Render Navbar for all pages except Landing Page */}
      {location.pathname === '/' ? null : <Navbar />} 

      <div className="app-content">
        <Routes>
          {/* Landing Page with Navbar2 */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/counselor" element={<Counselor />} />
          <Route path="/healthRecord" element={<HealthRecord />} />
          <Route path="/liveChat" element={<LiveChat />} />
          <Route path="/packages" element={<DoctorPackages />} />
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
