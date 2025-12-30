import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ScrollToTop from './navbar/Scroll.jsx';

// --- Lazy Load Components ---
const Home = lazy(() => import('./navbar/Home'));
const About = lazy(() => import('./navbar/Aboutus'));
const Servicesprovided = lazy(() => import('./navbar/Servicesprovided'));
const Contact = lazy(() => import('./navbar/Contactus'));
const Reiki = lazy(() => import('./navbar/Services/Reiki'));
const InnerChild = lazy(() => import('./navbar/Services/InnerChild'));
const Tarot = lazy(() => import('./navbar/Services/Tarot'));
const Numerology = lazy(() => import('./navbar/Services/Numerology'));
const GuidedMeditation = lazy(() => import('./navbar/Services/GuidedMeditation'));
const TraumaHealing = lazy(() => import('./navbar/Services/TraumaHealing'));
const Relationship = lazy(() => import('./navbar/Services/Relationship'));
const Courses = lazy(() => import('./navbar/Courses'));

// --- CUSTOM SEO COMPONENT (No Library Needed!) ---
const SEOHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Define your titles and descriptions here
    const paths = {
      '/': {
        title: 'TatvaAlignment | Online Reiki & Healing Courses',
        desc: 'Join beginner-friendly online Reiki Level 1, guided meditation & Tarot. Restore energy with certified experts.'
      },
      '/about': {
        title: 'About Us | TatvaAlignment',
        desc: 'Learn about Neelu and our mission to bring holistic healing to the world.'
      },
      '/services': {
        title: 'Our Services | Reiki, Tarot & Meditation',
        desc: 'Explore our wide range of spiritual services including Chakra balancing and Trauma healing.'
      },
      '/contact': {
        title: 'Contact Us | TatvaAlignment',
        desc: 'Get in touch for bookings, queries, or guidance.'
      },
      '/courses': {
        title: 'Online Courses | Reiki Certification',
        desc: 'Enroll in our certified Reiki Level 1 and spiritual healing courses online.'
      }
      // Add more paths here if needed
    };

    // 2. Find the current page info (or use default)
    const currentPath = location.pathname.endsWith('/') && location.pathname !== '/' 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
      
    const meta = paths[currentPath] || paths['/'];

    // 3. Update the Browser Title
    document.title = meta.title;

    // 4. Update the Meta Description
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', meta.desc);
    } else {
      // Create it if it doesn't exist
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = meta.desc;
      document.head.appendChild(newMeta);
    }

  }, [location]); // Runs every time the URL changes

  return null; // This component renders nothing visibly
};

// --- Error Boundary ---
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error) { console.error('App Error:', error); }
  render() { 
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Something went wrong</h2>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default function App() {
  // Force Dark Mode Default
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; 
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Run our custom SEO logic */}
      <SEOHandler />
      
      <ErrorBoundary>
        <div className="min-h-screen font-sans bg-primaryBg dark:bg-gray-900 dark:text-white transition-colors duration-300 px-4 sm:px-6 md:px-10">
          
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          
          <Suspense fallback={
            <div className="flex justify-center items-center py-8 min-h-[50vh]">
              <div className="text-lg animate-pulse font-medium text-indigo-400">
                Aligning your path... ✨
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
              
              <Route path="/services" element={<Servicesprovided />} />
              <Route path="/services/reiki" element={<Reiki />} />
              <Route path="/services/inner-child" element={<InnerChild />} />
              <Route path="/services/tarot" element={<Tarot />} />
              <Route path="/services/guided-meditation" element={<GuidedMeditation />} />
              <Route path="/services/numerology" element={<Numerology />} />
              <Route path="/services/trauma-healing" element={<TraumaHealing />} />
              <Route path="/services/relationship" element={<Relationship />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
}