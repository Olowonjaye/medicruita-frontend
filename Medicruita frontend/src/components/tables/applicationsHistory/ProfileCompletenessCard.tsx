import React from "react";

interface ProfileCompletenessCardProps {
  completionPercentage: number;
}

const ProfileCompletenessCard: React.FC<ProfileCompletenessCardProps> = ({ completionPercentage }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
      {/* Progress Circle */}
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-lime-500"
            strokeWidth="3"
            strokeDasharray={`${completionPercentage}, 100`}
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">{completionPercentage}%</span>
          <span className="text-sm text-gray-500">Complete</span>
        </div>
      </div>

      {/* Text and Button */}
      <div className="ml-6">
        <div className="text-gray-700 font-medium">Profile Completeness</div>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600">
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletenessCard;
