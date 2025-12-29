import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Standard modern SEO package
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Navbar from './Navbar.jsx';
import ScrollToTop from './navbar/Scroll.jsx';

// --- Lazy Load Components (Best for Performance) ---
// Ensure these paths match your folder structure exactly!
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

// --- SEO Configuration ---
const seoConfig = {
  '/': { 
    title: 'Tatva Alignment | Online Reiki Healing & Chakra Balancing', 
    desc: 'Join beginner-friendly online Reiki Level 1, guided meditation & Tarot. Restore energy—start your spiritual journey with certified experts today.' 
  },
  '/about': { 
    title: 'About Tatva Alignment | Spiritual Healing Experts', 
    desc: 'Learn about Neelu and our mission for holistic wellness through Reiki, chakra work & meditation.' 
  },
  '/services': { 
    title: 'Services | Reiki, Tarot & Trauma Healing', 
    desc: 'Explore online services: Chakra balancing, guided meditation, numerology & more for inner peace.' 
  },
  // Default Fallback
  default: { 
    title: 'Tatva Alignment | Spiritual Wellness & Healing', 
    desc: 'Online Reiki, meditation & energy healing services worldwide.' 
  }
};

// --- SEO Helper Component ---
function SEOHelmet() {
  const location = useLocation();
  // Clean the path (remove trailing slash)
  const path = location.pathname.endsWith('/') && location.pathname !== '/' 
    ? location.pathname.slice(0, -1) 
    : location.pathname;
    
  const pageSeo = seoConfig[path] || seoConfig.default;

  return (
    <Helmet>
      <title>{pageSeo.title}</title>
      <meta name="description" content={pageSeo.desc} />
      <meta property="og:title" content={pageSeo.title} />
      <meta property="og:description" content={pageSeo.desc} />
      <link rel="canonical" href={`https://tatvaalignment.com${location.pathname === '/' ? '' : location.pathname}`} />
    </Helmet>
  );
}

// --- Error Boundary (Prevents White Screen Crashes) ---
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error) { console.error('Lazy load error:', error); }
  render() { 
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Connection Interrupted</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Click to Reload Page
          </button>
        </div>
      );
    }
    return this.props.children; 
  }
}

// --- Main App ---
export default function App() {
  // 1. DARK MODE DEFAULT: Checks storage, otherwise defaults to TRUE
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
    // 2. HELMET PROVIDER: Essential wrapper for SEO to work
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ErrorBoundary>
          <div className="min-h-screen font-sans bg-primaryBg dark:bg-gray-900 dark:text-white transition-colors duration-300 px-4 sm:px-6 md:px-10">
            
            <SEOHelmet /> 
            
            <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            
            {/* 3. SUSPENSE: Shows this loading state while lazy components fetch */}
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
    </HelmetProvider>
  );
}