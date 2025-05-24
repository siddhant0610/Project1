// // import React from 'react';

// // const teamMembers = [
// //   { name: "Sarah John", role: "Lead Reiki Healer", description: "Expert in energy realignment and chakra balancing." },
// //   { name: "Michael Lee", role: "Tarot Specialist", description: "Guides through tarot readings with deep intuition and care." },
// //   { name: "Linda Smith", role: "Numerologist", description: "Helps you find life insights and directions through numbers." }
// // ];

// // export default function About() {
// //   return (
// //     <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
// //       <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center">About Us</h2>

// //       <div className="mb-12 space-y-8 max-w-4xl mx-auto text-center text-lg leading-relaxed">
// //         <p>At Reiki Spiritual, we harness the power of ancient wisdom combined with modern practices to facilitate healing on a spiritual and emotional level.</p>
// //         <p>Our mission is to bring clarity, balance, and purpose to your life using Reiki, Tarot, and Numerology.</p>
// //         <p>We believe every soul is unique and deserves a personalized journey toward inner peace and growth.</p>
// //       </div>

// //       <div className="max-w-5xl mx-auto">
// //         <h3 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h3>
// //         <div className="grid gap-8 md:grid-cols-3">
// //           {teamMembers.map((member, idx) => (
// //             <div
// //               key={idx}
// //               className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
// //             >
// //               <div className="mb-4">
// //                 <div className="w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto">
// //                   {member.name.split(' ').map(n => n[0]).join('')}
// //                 </div>
// //               </div>
// //               <h4 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{member.name}</h4>
// //               <p className="italic text-indigo-500 dark:text-indigo-300">{member.role}</p>
// //               <p className="mt-3 text-gray-700 dark:text-gray-300">{member.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from 'react';
// import FlipCard from './Flipcards';


// const teamMembers = [
//   {
//     name: "Neelu Khajuria",
//     role: "Founder",
//     description: `I’m a multifaceted healer, coach, and guide devoted to helping women rediscover themselves and transform their lives. Blending ancient spiritual wisdom with modern healing practices, I empower you to unlock your inner potential and live with purpose, joy, and fulfillment.
// My Expertise Includes:
// 🧘 200-Hour Yoga Alliance Certified
// Offering holistic guidance to align body, mind, and spirit.

// ✋ Master Reiki Healer
// Promoting deep energetic healing, balance, and inner peace.

// 🕉️ Practitioner of Yog Maya, Haleem, Lama Phera & Siddhi Healing
// Using powerful spiritual techniques to clear obstacles and manifest your desires.

// 💔 Trauma & Inner Child Healing
// Supporting emotional healing, self-compassion, and personal liberation.

// 🔢 Numerologist & Tarot Life Coach
// Offering clarity and insight into your life path, challenges, and strengths.`
//   },
//   // { name: "Michael Lee", role: "Tarot Specialist", description: "Guides through tarot readings with deep intuition and care." },
//   // { name: "Linda Smith", role: "Numerologist", description: "Helps you find life insights and directions through numbers." }
// ];

// export default function About() {
//   return (
//     <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
//       <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">About Us</h2>

//       <div className="mb-16 space-y-8 max-w-4xl mx-auto text-center text-lg leading-relaxed">
//         <p>EMPOWERING WOMEN TO UNLEASH THEIR INNER POTENTIAL</p>
//         <p>At Tatvaalignment, we harness the power of ancient wisdom combined with modern practices to facilitate healing on a spiritual and emotional level.</p>
//         <p>Our mission is to bring clarity, balance, and purpose to your life using Reiki, Tarot, and Numerology.</p>
//         <p>We believe every soul is unique and deserves a personalized journey toward inner peace and growth.</p>
//       </div>

//       <h3 className="text-3xl font-semibold text-center mb-10">About Me</h3>
//       <div className="content-align-centre max-w-5xl mx-auto">
//         {teamMembers.map((member, idx) => (
//           <FlipCard
//             key={idx}
//             frontContent={
//               <>
//                 <div className="w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   {member.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <h4 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{member.name}</h4>
//                 <p className="italic text-indigo-500 dark:text-indigo-300">{member.role}</p>
//               </>
//             }
//             backContent={
//               <p className="px-4 text-gray-700 dark:text-gray-300">{member.description}</p>
//             }
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import React from 'react';

export default function About() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">
        About Us
      </h2>

      <div className="mb-16 space-y-6 max-w-4xl mx-auto text-center text-lg leading-relaxed">
        <p className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">
         
        </p>
        <p>
          At <strong>Tatva Alignment</strong>, we harness the power of ancient wisdom combined with modern
          practices to facilitate healing on a spiritual and emotional level.
        </p>
        <p> Empowering Women to Unleash Their Inner Potential</p>
        <p>
          Our mission is to bring clarity, balance, and purpose to your life using Reiki, Tarot, and Numerology.
        </p>
        <p>
          We believe every soul is unique and deserves a personalized journey toward inner peace and growth.
        </p>
      </div>

      <h3 className="text-3xl font-semibold text-center mb-10">About Me</h3>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl mx-auto p-8 relative overflow-hidden border border-indigo-100 dark:border-indigo-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-transparent opacity-10 pointer-events-none"></div>
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            NK
          </div>
          <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">Neelu Khajuria</h4>
          <p className="italic text-indigo-500 dark:text-indigo-300 mb-4">Founder, Spiritual Healer & Coach</p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I'm a multifaceted healer, coach, and guide devoted to helping women rediscover themselves and
            transform their lives. Blending ancient spiritual wisdom with modern healing practices, I empower
            you to unlock your inner potential and live with purpose, joy, and fulfillment.
          </p>

          <ul className="mt-6 text-left space-y-3 text-gray-800 dark:text-gray-200 list-disc list-inside">
            <li><strong>🧘 Yoga Alliance 200-Hour Certified:</strong> Aligning body, mind, and spirit holistically.</li>
            <li><strong>✋ Master Reiki Healer:</strong> Facilitating deep energetic healing and balance.</li>
            <li><strong>🕉️ Yog Maya, Haleem, Lama Phera & Siddhi Healer:</strong> Spiritual tools for transformation and clarity.</li>
            <li><strong>💔 Trauma & Inner Child Healer:</strong> Compassionate healing for emotional release.</li>
            <li><strong>🔢 Numerologist & Tarot Life Coach:</strong> Life path insights and spiritual guidance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

