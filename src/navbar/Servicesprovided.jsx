import React from 'react';
import FlipCard from './Flipcards'; // Ensure the correct path to your FlipCard component

const services = [
  {
    title: "Reiki Healing",
    description:
      "Experience deep relaxation and energy cleansing through our expert Reiki sessions. Perfect for reducing stress and promoting healing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.333 0-2 .75-2 3m0 0c0 1.5 1 2.5 2 2.5s2-1 2-2.5c0-2.25-1.334-3-2-3zm0 0v5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1m-4-3v.01M16 10v.01M8 14v.01M16 14v.01M12 12v.01" />
      </svg>
    )
  },
  {
    title: "Tarot Card Reading",
    description:
      "Gain clarity and insight into your life's journey with our intuitive Tarot card readings by experienced specialists.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.524 0-2.796.944-3 2.249M9 14a3 3 0 006 0 5 5 0 011-3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.21 11.6l-1.827.21A3 3 0 0116 12.5l-3.163.45M17 17h4M3 17h4" />
      </svg>
    )
  },
  {
    title: "Numerology",
    description:
      "Discover meaningful insights about your personality, destiny, and life challenges through ancient Numerology practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10 10-4.477 10-10z" />
      </svg>
    )
  },
  {
    title: "Inner Child Healing",
    description:
      "Gain clarity and insight into your life's journey with our intuitive Tarot card readings by experienced specialists.",
     
    icon: (
      <img
        src="https://th.bing.com/th/id/OIP.OllgDUOoPu1qbKV6Xxd5ZgHaHa?w=184&h=184&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3"
        alt="Inner Child Healing Icon"
        className="h-12 w-12 object-contain text-indigo-600 dark:text-indigo-400"
      />
    )
  },
  {
    title: "Trauma Healing",
    description:
      "Gain clarity and insight into your life's journey with our intuitive Tarot card readings by experienced specialists.",
    icon: (
      <img
        src="https://static.vecteezy.com/system/resources/previews/012/188/989/original/black-on-white-silhouette-of-open-hands-holding-reiki-energy-symbol-hand-drawn-concept-of-hands-with-healing-energy-illustration-isolated-on-white-background-vector.jpg"
        alt="Trauma Healing Icon"
        className="h-12 w-12 object-contain text-indigo-600 dark:text-indigo-400"
      />
    )
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map(({ title, description, icon }, idx) => (
          <FlipCard
            key={idx}
            frontContent={
              <div className="flex flex-col items-center">
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">{title}</h3>
                {/* <p className="text-gray-700 dark:text-gray-300">{description}</p> */}
              </div>
            }
            backContent={
              <div className="p-4">
                <h4 className="text-lg font-semibold">More About {title}</h4>
                <p className="text-gray-700 dark:text-gray-900">{description}</p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
