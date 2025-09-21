import React from "react";

interface ProfileViewsCardProps {
  totalViews: number;
  employerViews: number;
  otherViews: number;
}

const ProfileViewsCard: React.FC<ProfileViewsCardProps> = ({
  totalViews,
  employerViews,
  otherViews,
}) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-medium text-gray-700 mb-2">Profile Views</h2>

      {/* Total Views */}
      <div className="text-5xl font-bold text-blue-700 mb-6">{totalViews}</div>

      {/* Breakdown */}
      <div className="flex justify-between w-full px-4">
        {/* By Employer */}
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm">By Employer</span>
          <span className="text-lg font-semibold text-sky-500">
            {employerViews}
          </span>
        </div>

        {/* By Others */}
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm">By others</span>
          <span className="text-lg font-semibold text-green-500">
            {otherViews}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewsCard;
