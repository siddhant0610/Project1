import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const rotatingPhrases = [
  "Discover your path to healing",
  "Clarity through Reiki",
  "Balance with Numerology",
  "Insight from Tarot"
];
const testimonials = [
  { name: "Emily R.", quote: "Reiki Spiritual changed my life, the healing sessions are transformative!" },
  { name: "James K.", quote: "The tarot readings helped me find clarity in my career and relationships." },
  { name: "Sophia M.", quote: "Numerology insights were surprisingly accurate and enlightening." }
];
export default function Home() {
  const navigate = useNavigate();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < rotatingPhrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(rotatingPhrases[currentPhraseIndex].slice(0, displayedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(rotatingPhrases[currentPhraseIndex].slice(0, displayedText.length - 1));
        }, 100);
      } else {
        setTyping(true);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % rotatingPhrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentPhraseIndex]);
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, [testimonialIndex]);
  const goToServices = () => {
    navigate('services');
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <section className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-col justify-center items-center px-6 text-centerbg-aqua text-white px-6" style={{ backgroundColor: '#00FFFF' }}>
        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Welcome to Tatva Alignment</h1>
      <h2 className="text-2xl h-10 mb-6 font-semibold min-w-[320px]">
        {displayedText}
        <span className="border-r-2 border-white animate-pulse ml-1" />
      </h2>
      <button
        onClick={goToServices}
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        View Our Services
      </button>
      <div className="mt-16 max-w-xl bg-white bg-opacity-20 rounded-lg p-6 shadow-lg animate-fadeIn">
        <blockquote className="italic text-white text-lg mb-4">
          "{testimonials[testimonialIndex].quote}"
        </blockquote>
        <cite className="block text-white font-semibold">- {testimonials[testimonialIndex].name}</cite>
      </div>
      <style>{`
       @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
}