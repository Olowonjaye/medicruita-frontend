import React from "react";

interface InterviewedCardProps {
  interviewedCount: number;
}

const InterviewedCard: React.FC<InterviewedCardProps> = ({ interviewedCount }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h2 className="text-lg font-medium text-gray-700 mb-2">Interviewed</h2>

      {/* Icon */}
      <div className="flex items-center justify-center">
      {/* Count */}
      <div className="text-5xl font-bold text-gray-900 mb-4">{interviewedCount}</div>
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#D1D5DB" strokeWidth="2">
            <path
              d="M20 30h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
              fill="#F3F4F6"
            />
            <circle cx="16" cy="20" r="10" fill="#F3F4F6" />
            <path
              d="M48 10a10 10 0 1 1-10 10 10 10 0 0 1 10-10z"
              fill="#F3F4F6"
            />
          </g>
          {/* Optional highlights */}
          <path
            d="M16 20h.01M48 20h.01"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 24h.01M48 24h.01"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default InterviewedCard;
