import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "../assets/profile.jpg";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expertise = [
    "Reiki Healing: A gentle Japanese technique for stress reduction and relaxation that promotes healing.",
    "Numerology: Discover the hidden meanings behind numbers and how they influence your life.",
    "Tarot Reading: Gain clarity and guidance through intuitive tarot readings.",
    "Meditation Coaching: Personalized guidance to achieve mental clarity and emotional balance.",
    "Spiritual Counseling: One-on-one sessions to explore your spiritual path and overcome challenges.",
    "Trauma & Inner Child Healer: Compassionate healing for emotional release.",
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 dark:from-gray-900 dark:via-purple-900 dark:to-black">
      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#CBA135", opacity: 0.3 },
          },
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6 py-8 sm:py-12"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 text-[#4B3869] dark:text-[#CBA135]"
        >
          About <span className="text-pink-500">Tatva Alignment</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed px-2"
        >
          At <strong>Tatva Alignment</strong>, we combine Reiki, Numerology, and Tarot
          Card reading to guide individuals towards emotional, spiritual, and physical
          well-being. Our mission is to help you realign your energy pathways, release
          blockages, and manifest the life you truly desire.
        </motion.p>

        {/* Founder Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl mx-auto p-6 sm:p-8 relative border border-indigo-200 dark:border-indigo-700 bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg mt-8 sm:mt-10"
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 cursor-pointer rounded-full p-[3px] bg-gradient-to-tr from-purple-400 via-pink-400 to-indigo-400 animate-spin-slow"
            whileHover={{ scale: 1.08, rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setIsModalOpen(true)}
          >
            <img
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              src={profile}
              alt="Founder"
            />
          </motion.div>

          {/* Name */}
          <h4 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1 text-center">
            Neelu Khajuria
          </h4>
          <p className="italic text-indigo-500 dark:text-indigo-300 mb-3 sm:mb-4 text-center text-sm sm:text-base">
            Founder, Spiritual Healer & Coach
          </p>

          {/* Bio */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
            I'm a healer, coach, and guide devoted to helping women rediscover themselves and
            transform their lives with 10+ years of experience. I combine spiritual wisdom and modern healing methods to help you live with purpose and joy.
          </p>

          {/* Expertise Cards */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {expertise.map((item, idx) => {
              const [label, ...desc] = item.split(":");
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 sm:p-4 rounded-xl shadow-lg bg-white/50 dark:bg-gray-900/50 border border-purple-200 dark:border-purple-800 backdrop-blur-lg hover:shadow-purple-300 dark:hover:shadow-purple-700 text-sm sm:text-base"
                >
                  <strong className="text-purple-600 dark:text-purple-400">
                    {label}:
                  </strong>{" "}
                  {desc.join(":").trim()}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 max-w-sm sm:max-w-md text-center relative backdrop-blur-lg border border-purple-200 dark:border-purple-800"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={profile}
                alt="Founder"
                className="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-full mb-3 sm:mb-4 border-4 border-purple-400 shadow-lg"
              />
              <h3 className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                Neelu Khajuria
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                "Healing is a journey inward, where your soul meets peace and your heart finds light."
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 sm:px-5 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition text-sm sm:text-base"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
