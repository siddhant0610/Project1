import React from 'react';
import profile from '../assets/profile.jpg';
const expertise = [
  "🔮 Tarot Coach: Providing insights and guidance through intuitive readings.",
  "💔 Trauma & Inner Child Healer: Compassionate healing for emotional release.",
  "✋ Master Reiki Healer: Facilitating deep energetic healing and balance.",
  "🕉️ Yog Maya, Haleem, Lama Phera & Siddhi Healer: Spiritual tools for transformation and clarity.",
  "🔢 Numerologist : Life path insights and spiritual guidance.",
  "🧘 Yoga Alliance 200-Hour Certified: Aligning body, mind, and spirit holistically."
];

export default function About() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">
        About Us
      </h2>

      <div className="mb-16 space-y-6 max-w-4xl mx-auto text-center text-lg leading-relaxed">
        <p className="uppercase tracking-wider text-sm text-indigo-500 font-semibold"></p>
        <p>
          At <strong>Tatva Alignment</strong>, we harness the power of ancient wisdom combined with modern
          practices to facilitate healing on a spiritual and emotional level.
        </p>
        <p>Empowering Women to Unleash Their Inner Potential</p>
        <p>
          Our mission is to bring clarity, balance, and purpose to your life using Reiki, Tarot, and Numerology.
        </p>
        <p>
          We believe every soul is unique and deserves a personalized journey toward inner peace and growth.
        </p>
      </div>

      <h3 className="text-3xl font-semibold text-center mb-10">Our Journey</h3>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl mx-auto p-8 relative overflow-hidden border border-indigo-100 dark:border-indigo-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-transparent opacity-10 pointer-events-none"></div>
        <div className="text-center">
          < img
            className="w-24 h-24 mx-auto rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Initials NK for Neelu Khajuria"
            src={profile}
          /> 
          
          <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">Neelu Khajuria</h4>
          <p className="italic text-indigo-500 dark:text-indigo-300 mb-4">Founder, Spiritual Healer & Coach</p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I'm a  healer, coach, and guide devoted to helping women rediscover themselves and
            transform their lives. Blending ancient spiritual wisdom with modern healing practices, I empower
            you to unlock your inner potential and live with purpose, joy, and fulfillment.
          </p>

          <ul className="mt-6 text-left space-y-3 text-gray-800 dark:text-gray-200 list-disc list-inside">
            {expertise.map((item, idx) => {
              // Split the label and description by first colon for bold label
              const [label, ...desc] = item.split(':');
              return (
                <li key={idx}>
                  <strong>{label}:</strong> {desc.join(':').trim()}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
