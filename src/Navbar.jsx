import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo1.jpg';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tatva.alignment',
    icon: (
      <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2a.75.75 0 100 1.5.75.75 0 000-1.5z" />
    ),
  },
  {
    name: 'Facebook',
    url:'https://www.facebook.com/profile.php?id=61576813916078',
    icon: (
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7H8v-3h2.44V9.5c0-2.43 1.46-3.78 3.7-3.78 1.07 0 2.2.19 2.2.19v2.41H15.7c-1.28 0-1.66.79-1.66 1.6V12h2.83l-.45 3h-2.38v7C18.34 21.13 22 17 22 12z" />
    ),
  },
];

const IconLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:scale-110 transition"
  >
    <svg className="w-6 h-6 fill-current text-primaryAccent dark:text-white" viewBox="0 0 24 24">
      {icon}
    </svg>
  </a>
);

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses =
    "px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primaryAccent/30 hover:scale-105";

  return (
    <nav className="bg-primaryBg dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Tatva Alignment logo"
              className="w-16 h-16 transition-shadow duration-300 hover:shadow-primaryAccent/30"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h1 className="text-xl font-bold text-primaryAccent dark:text-white">Tatva Alignment</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 sm:hidden">
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
          <div className="hidden sm:flex items-center space-x-6 text-primaryAccent dark:text-white font-medium">
            <ul className="flex space-x-6">
              <li><Link to="/" className={linkClasses}>Home</Link></li>
              <li><Link to="/about" className={linkClasses}>About</Link></li>
              <li><Link to="/services" className={linkClasses}>Services</Link></li>
              <li><Link to="/contact" className={linkClasses}>Contact</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ url, icon, name }) => (
                <IconLink key={name} href={url} icon={icon} label={name} />
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-4 py-1 rounded-full bg-highlight text-lightBg hover:brightness-110 transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-2 text-primaryAccent dark:text-white font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className={linkClasses}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className={linkClasses}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)} className={linkClasses}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className={linkClasses}>Contact</Link></li>
            <li className="flex space-x-4 px-4">
              {socialLinks.map(({ url, icon, name }) => (
                <IconLink key={name} href={url} icon={icon} label={name} />
              ))}
            </li>
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
