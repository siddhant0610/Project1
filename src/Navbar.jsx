import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo1.jpg';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses =
    "px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primaryAccent/30 hover:scale-105";

  return (
    <nav className="bg-primaryBg dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Tatva Alignment logo"
              className="w-16 h-16 transition-shadow duration-300 hover:shadow-primaryAccent/30"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h1 className="text-xl font-bold text-primaryAccent dark:text-white">
              Tatva Alignment
            </h1>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primaryAccent dark:text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6 text-primaryAccent dark:text-white font-medium">
            <li><Link to="/" className={linkClasses}>Home</Link></li>
            <li><Link to="/about" className={linkClasses}>About</Link></li>
            <li><Link to="/services" className={linkClasses}>Services</Link></li>
            <li><Link to="/contact" className={linkClasses}>Contact</Link></li>
          </ul>

          <button
            onClick={toggleDarkMode}
            className="ml-4 px-4 py-1 rounded-full bg-highlight text-lightBg hover:brightness-110 transition hidden sm:block"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-2 text-primaryAccent dark:text-white font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className={linkClasses}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className={linkClasses}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)} className={linkClasses}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className={linkClasses}>Contact</Link></li>
            <li>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full bg-highlight text-lightBg hover:brightness-110 transition"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
