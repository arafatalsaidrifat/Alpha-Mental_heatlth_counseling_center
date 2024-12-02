import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div
      className="w-full bg-gradient-to-r from-teal-400 to-teal-200 shadow-lg"
      style={{ padding: "20px 0" }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-4xl font-extrabold text-white">MIND</span>
            <span className="text-4xl font-extrabold text-green-500">full</span>
          </Link>
        </div>

        {/* Navigation Links */}
        {!isAuthPage && (
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/dashboard"
              className="text-lg font-medium text-white hover:text-blue-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-white hover:text-blue-800"
            >
              About Us
            </Link>
            <Link
              to="/sessions"
              className="text-lg font-medium text-white hover:text-blue-800"
            >
              My sessions
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white hover:text-blue-800"
            >
              Contact Us
            </Link>
          </nav>
        )}

        {/* CTA Button */}
        
      </div>
    </div>
  );
}

export default Navbar;
