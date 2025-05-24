import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './navbar/Home';
import About from './navbar/Aboutus';
import Servicesprovided from './navbar/Servicesprovided';
import Contact from './navbar/Contactus';
import ScrollToTop from './navbar/Scroll';

export default function App() {
  <  ScrollToTop />
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);
  return (
    <Router>
     <div className="min-h-screen font-sans dark:bg-gray-900 dark:text-white transition-colors duration-300 px-4 sm:px-6 md:px-10">
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/contactlist" element={<ContactList />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Servicesprovided />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}