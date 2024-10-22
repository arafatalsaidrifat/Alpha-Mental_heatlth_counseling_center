import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();  // Get current location

  const handleMoreClick = () => {
    setIsAboutOpen((prev) => !prev); // Toggle dropdown
  };

  const navItems = (
    <>
      <li>
        <Link to="/dashboard" className="nav-link">
          <span className='text-amber-400'>Dashboard</span>
        </Link>
      </li>

      <li className="relative" ref={aboutRef}>
        <div className="flex items-center">
          <div
            onClick={handleMoreClick}
            onTouchStart={handleMoreClick}
            onTouchEnd={handleMoreClick}
            className={`nav-link ${isAboutOpen ? 'text-blue-500' : 'text-black'} cursor-pointer`}
          >
            More
          </div>
        </div>
        {isAboutOpen && (
          <ul className="absolute left-0 mt-1 w-40 p-2 bg-white border rounded shadow-lg z-50">
            <li><Link to="/packages" className="block p-2 hover:bg-gray-200" onClick={() => setIsAboutOpen(false)}>Packages</Link></li>
            <li><Link to="/payment" className="block p-2 hover:bg-gray-200" onClick={() => setIsAboutOpen(false)}>Payments</Link></li>
            <li><Link to="/livechat" className="block p-2 hover:bg-gray-200" onClick={() => setIsAboutOpen(false)}>Live Chat</Link></li>
          </ul>
        )}
      </li>
    </>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Conditional rendering based on the current location path
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='w-full'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold cursor-pointer">
            <span className="text-2xl">MIND</span>
            <span className="text-green-500">full</span>
          </Link>
        </div>

        {/* Hide the rest of the navbar if it's login or signup page */}
        {!isAuthPage && (
          <>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex space-x-4">
                {navItems}
              </ul>
            </div>

            <div className="hidden md:block mr-3">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5,0,0,1,7,0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>

            <div className="flex items-center justify-end flex-grow">
              <label className="swap swap-rotate mr-3">
                <input type="checkbox" className="theme-controller" value="synthwave" />
                <svg className="swap-off h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2 0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg className="swap-on h-7 w-7" xmlns="http://www.w3.org/www.svgs" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
