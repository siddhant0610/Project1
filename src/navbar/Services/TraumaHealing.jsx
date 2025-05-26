import React from 'react';

export default function TraumaHealing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F1] to-[#E8DBC5] py-12 px-6 dark:bg-gradient-to-b dark:from-[#4B3869] dark:to-[#3A2A54]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4B3869] mb-8 dark:text-[#F5F0E6]">
          Trauma Healing
        </h1>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#CBA135]/50 hover:shadow-xl transition-shadow duration-300 dark:bg-[#4B3869]/80 dark:border-[#DDBEC3]/50">
          {/* Introduction */}
          <p className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]">
            Not all wounds are visible.
            Some pain lives in the silent corners of our hearts—unspoken, unseen, and often misunderstood.
            Hidden trauma is the emotional and psychological pain that gets buried deep within us—either because we didn’t know how to express it, weren’t allowed to, or simply thought we had to move on. It can stem from childhood experiences, broken relationships, betrayals, neglect, or even moments we considered “too small” to matter but left a lasting impact.
            <strong className="text-[#4B3869] dark:text-[#CBA135]">Tatva Alignment</strong>,
            will guide you through my <strong className="text-[#4B3869] dark:text-[#CBA135]">"Energetic Trust Repair Session"</strong>,a deeply intiitive Tarot Coaching experience specifically designed for those struggling to trust after a painful relationship or betrayal           </p>

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
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]">Benefits of Reiki</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                <li>Reduces stress and anxiety</li>
                <li>Promotes emotional healing</li>
                <li>Enhances mental clarity</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                <li>Boosts the immune system</li>
                <li>Releases emotional blockages</li>
                <li>Improves sleep quality</li>
              </ul>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]">What to Expect</h2>
            <p className="text-lg leading-relaxed text-[#3E3E3E] dark:text-[#DACFBB]">
              Expect to feel lighter, tired, or very peaceful.The healer may suggest journaling, rest, hydration, or grounding practices (e.g., walking barefoot, deep breathing).
              Trauma healing is often a journey, not a one-time fix — multiple sessions may be recommended.
            </p>
          </div>

          {/* Booking Button */}
          <div className="text-center mt-10">
            <a
              href="https://calendly.com/neelukhajuria11/trauma-healing"
              className="inline-block bg-[#CBA135] hover:bg-[#4B3869] text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-[#DDBEC3] dark:hover:bg-[#CBA135] dark:text-[#4B3869]"
            >
              Book a Reiki Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}