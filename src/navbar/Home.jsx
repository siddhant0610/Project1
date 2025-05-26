import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg2.jpg'; // Ensure you have a background image in the assets folder
const rotatingPhrases = [
  "Discover your path to healing",
  "Clarity through Reiki",
  "Balance with Numerology",
  "Insight from Tarot"
];
const testimonials = [
  { name: "Puneeta ", quote: "Thank you, Neelu, for leading such a serene and calming meditation session. Your soothing presence created a peaceful space that allowed me to truly connect with myself. It helped me clear my mind and refocus inward." },
  { name: "S.W", quote: "I’m deeply grateful for the beautiful experience, Neelu. The session was incredibly grounding and peaceful. I thoroughly enjoyed every moment. Lots of love." },
  { name: "Mrs.Soodan", quote: " I'm still feeling the peaceful energy from the session. Thank you for sharing your light, Neelu. Stay blessed." },
  { name: 'Preeti', quote: "The tarot readings helped me find clarity in my career and relationships." },
{
  name: "Priya", quote: " I noticed something truly positive — I haven't experienced any of the usual negative thoughts. I believe it's the powerful effect of yesterday's healing session. But I genuinely feel this shift is thanks to your healing. I'm grateful and hopeful to continue feeling better with each passing day." }
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
    <section
      className="min-h-screen text-white flex flex-col justify-center items-center px-6 text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '120% 100%',           // Keeps image sharp if resolution is good
        backgroundPosition: 'center',      // Centered
        backgroundRepeat: 'no-repeat',     // No repeat
        // imageRendering: 'auto', // Prevent repeating
      }}
    >
      <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Welcome to Tatva Alignment</h1>
      <h2 className="text-2xl h-10 mb-6 font-semibold min-w-[320px]">
        {displayedText}
        <span className="border-r-2 border-white animate-pulse ml-1" />
      </h2>
      <button
        onClick={goToServices}
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
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