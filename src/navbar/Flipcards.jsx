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
          transition: transform 0.6s ease-in-out;
          transform-style: preserve-3d;
          border-radius: 0.75rem; /* rounded-lg */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          background-color: transparent;
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
          border: 1px solid #DDBEC3; /* secondaryAccent */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        /* Front card light mode */
        .flip-card-front {
          background-color: #FAF8F1; /* lightBg */
          color: #3E3E3E; /* textMain */
        }
        /* Front card dark mode */
        .dark .flip-card-front {
          background-color: #4B3869; /* primaryAccent */
          color: #DACFBB; /* primaryBg */
          border-color: #DDBEC3; /* secondaryAccent */
          box-shadow: 0 2px 10px rgba(218, 207, 187, 0.3);
        }
        /* Back card light mode */
        .flip-card-back {
          background-color: #DACFBB; /* primaryBg */
          color: #3E3E3E; /* textMain */
          transform: rotateY(180deg);
          overflow-y: auto;
          text-align: left;
          border-color: #DDBEC3; /* secondaryAccent */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        /* Back card dark mode */
        .dark .flip-card-back {
          background-color: #DDBEC3; /* secondaryAccent */
          color: #4B3869; /* primaryAccent */
          border-color: #CBA135; /* highlight */
          box-shadow: 0 2px 10px rgba(203, 161, 53, 0.3);
        }

        /* Scrollbar styling */
        .flip-card-back::-webkit-scrollbar {
          width: 6px;
        }
        .flip-card-back::-webkit-scrollbar-track {
          background: rgba(203, 161, 53, 0.1); /* highlight with low opacity */
          border-radius: 3px;
        }
        .flip-card-back::-webkit-scrollbar-thumb {
          background: rgba(203, 161, 53, 0.3); /* highlight */
          border-radius: 3px;
        }
      `}</style>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front rounded-lg">
            {frontContent}
          </div>
          <div className="flip-card-back rounded-lg">
            {backContent}
          </div>
        </div>
      </div>
    </>
  );
}
