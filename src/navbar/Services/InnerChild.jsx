import React from 'react';

export default function InnerChild() {
  return (
    <div className="bg-[#FAF8F1] text-[#3E3E3E] min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4B3869] mb-8">
          Reiki Healing
        </h1>

        <div className="bg-[#DACFBB] p-6 rounded-2xl shadow-lg">
          <p className="text-lg leading-relaxed mb-6">
            Reiki is a gentle and natural Japanese energy healing technique that promotes relaxation,
            reduces stress, and enhances the body’s natural healing abilities. At <strong>Tatvaalignment</strong>,
            we use Reiki to help realign your energy pathways, release emotional blockages,
            and bring you into a state of deep peace and well-being.
          </p>

          <h2 className="text-2xl font-semibold text-[#4B3869] mb-4">How It Works</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Universal life force energy is channeled through the hands of the practitioner.</li>
            <li>The client remains fully clothed and typically lies on a treatment table or sits comfortably.</li>
            <li>Hands are placed lightly over or just above the body to transmit healing energy.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#4B3869] mb-4">Benefits of Reiki</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Reduces stress and anxiety</li>
            <li>Promotes emotional and spiritual healing</li>
            <li>Enhances mental clarity and focus</li>
            <li>Boosts the immune system</li>
            <li>Helps release emotional blockages</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#4B3869] mb-4">What to Expect</h2>
          <p className="text-lg leading-relaxed mb-6">
            Your Reiki session at Tatvaalignment is a sacred time for you to relax, reflect, and realign.
            You’ll be guided through a calm and supportive experience by our trained Reiki practitioners.
            The effects may be subtle or powerful depending on your current energy state.
          </p>

          <div className="text-center mt-10">
            <a
              href="/contact"
              className="inline-block bg-[#CBA135] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#b88f2e] transition"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
