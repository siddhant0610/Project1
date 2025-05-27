import React from 'react';
import { Link } from 'react-router-dom';
export default function GuidedMeditataion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F1] to-[#E8DBC5] py-12 px-6 dark:bg-gradient-to-b dark:from-[#4B3869] dark:to-[#3A2A54]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4B3869] mb-8 dark:text-[#F5F0E6]">
          Guided Meditation
        </h1>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#CBA135]/50 hover:shadow-xl transition-shadow duration-300 dark:bg-[#4B3869]/80 dark:border-[#DDBEC3]/50">
          {/* Introduction */}
          <p className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]">
            Meditation is a practice of turning inward—quieting the mind and connecting with your inner self. It’s not about stopping thoughts, but learning to observe them without attachment, cultivating inner peace, awareness, and clarity.</p>

          {/* How It Works Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]">How It Works</h2>
            <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
              <li>Universal life force energy is channeled through the hands of the practitioner</li>
              <li>The client remains fully clothed and typically lies on a treatment table</li>
              <li>Hands are placed lightly over or just above the body to transmit healing energy</li>
              <li>Session typically lasts 60-90 minutes</li>
            </ul>
          </div> */}

          {/* Benefits Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]">Benefits of Mediatation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                <li>Reduces stress and anxiety</li>
                <li>Improves focus and concentration
                </li>
                <li>Enhances emotional balance
                </li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                <li>Boosts the immune system</li>
                <li>Helps with better sleep and physical healing
                </li>
                <li>Promotes spiritual connection
                </li>
              </ul>
            </div>
          </div>


          {/* Booking Button */}
          <div className="text-center mt-10">
           <Link
    to="/contact"
    className="inline-block bg-[#CBA135] hover:bg-[#4B3869] text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-[#DDBEC3] dark:hover:bg-[#CBA135] dark:text-[#4B3869]"
  >
              Contact Me
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}