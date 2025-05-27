import React from 'react';
import { Link } from 'react-router-dom';
export default function InnerChild() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F1] to-[#E8DBC5] py-12 px-6 dark:bg-gradient-to-b dark:from-[#4B3869] dark:to-[#3A2A54]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4B3869] mb-8 dark:text-[#F5F0E6]">
          Inner Child Healing
        </h1>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#CBA135]/50 hover:shadow-xl transition-shadow duration-300 dark:bg-[#4B3869]/80 dark:border-[#DDBEC3]/50">
          {/* Introduction */}
          <p className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]">
            Inner Child Healing is a deep emotional and spiritual practice that involves connecting with, nurturing, and healing the wounded parts of your younger self. This part of you holds the memories, emotions, needs, and beliefs formed in childhood—and often silently shapes how you feel, react, and relate in adulthood.
          </p>

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
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]"> What Is the Inner Child</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]">Your inner child is the emotional, sensitive, intuitive part of you that was formed in early life. It remembers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                <li>Childhood joys, dreams, and playfulness
                </li>
                <li>Emotional wounds, neglect, or abandonment</li>
                <li>Times when needs were unmet or feelings suppressed
                </li>
              </ul>

            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]"> </h2>
            <p className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]"> <div className="mb-8">

              <h2 className="text-lg leading-relaxed mb-6 text-[#3E3E3E] dark:text-[#DACFBB]">Even if you’re not consciously aware, your inner child can still carry unprocessed pain, leading to:

              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-[#3E3E3E] dark:text-[#DACFBB]">
                  <li>Self-sabotage
                  </li>
                  <li>People-pleasing
                  </li>
                  <li>Fear of abandonment or rejection
                  </li>
                </ul>

              </div>
            </div>
            </p>

          </div>
          {/* What to Expect Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#4B3869] mb-4 dark:text-[#DDBEC3]">Why Inner Child Healing Matters
            </h2>
            <p className="text-lg leading-relaxed text-[#3E3E3E] dark:text-[#DACFBB]">
              Inner child healing is a powerful process that addresses the emotional wounds rooted in our childhood
              that continue to affect us in adulthood. It heals core wounds that impact our relationships and self-esteem,
              breaks recurring emotional patterns or trauma loops, and helps restore a deep sense of joy, safety, and emotional freedom.
              This journey of self-healing empowers you to reconnect with your authentic self and unlock your true potential.
            </p>
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