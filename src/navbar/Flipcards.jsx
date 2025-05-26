import React from 'react';

export default function FlipCard({ frontContent, backContent }) {
  return (
    <>
      <style>{`
        .flip-card {
          perspective: 1000px;
          -webkit-perspective: 1000px;
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
          -webkit-transform-style: preserve-3d;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          border: 1px solid #DDBEC3;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .flip-card-front {
          background-color: #FAF8F1;
          color: #3E3E3E;
          z-index: 2;
        }

        .dark .flip-card-front {
          background-color: #4B3869;
          color: #F5F0E6;
          border-color: #DDBEC3;
          box-shadow: 0 2px 10px rgba(218, 207, 187, 0.3);
        }

        .flip-card-back {
          background: linear-gradient(135deg, #F5F0E6 0%, #E8DBC5 100%);
          color: #4B3869;
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
          z-index: 1;
          overflow-y: auto;
          text-align: left;
          border: 1px solid #CBA135;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dark .flip-card-back {
          background: linear-gradient(135deg, #4B3869 0%, #3A2A54 100%);
          color: #F5F0E6;
          border-color: #CBA135;
          box-shadow: 0 4px 12px rgba(203, 161, 53, 0.2);
        }

        .flip-card-back::-webkit-scrollbar {
          width: 6px;
        }

        .flip-card-back::-webkit-scrollbar-track {
          background: rgba(203, 161, 53, 0.1);
          border-radius: 3px;
        }

        .flip-card-back::-webkit-scrollbar-thumb {
          background: rgba(203, 161, 53, 0.4);
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
