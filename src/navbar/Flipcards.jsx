import React from 'react';

export default function FlipCard({ frontContent, backContent }) {
  return (
    <>
      <style>{`
        .flip-card {
          perspective: 1000px;
          width: 280px;
          height: 360px;
          margin: 0 auto;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 0.2);
          border-radius: 0.75rem; /* rounded-lg */
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem; /* rounded-lg */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
        }
        .flip-card-front {
          background-color: white;
          color: black;
        }
        .dark .flip-card-front {
          background-color: #1f2937; /* gray-800 */
          color: white;
        }
        .flip-card-back {
         background-color: #c7d2fe;; /* indigo-600 */
          color: white;
          transform: rotateY(180deg);
          overflow-y: auto;
          text-align: left;
        }

        /* Scrollbar styling for better UX */
        .flip-card-back::-webkit-scrollbar {
          width: 6px;
        }
        .flip-card-back::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        .flip-card-back::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
        }

      `}</style>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front rounded-lg shadow-md dark:shadow-indigo-700">
            {frontContent}
          </div>
          <div className="flip-card-back rounded-lg shadow-md dark:shadow-indigo-700">
            {backContent}
          </div>
        </div>
      </div>
    </>
  );
}
