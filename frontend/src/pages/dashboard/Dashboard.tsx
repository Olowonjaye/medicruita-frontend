import React from "react";
import ApplicationsHistory from "../../components/tables/applicationsHistory/ApplicationsHistory";
import ProfileCompletenessCard from "../../components/tables/applicationsHistory/ProfileCompletenessCard";
import InterviewedCard from "../../components/tables/applicationsHistory/InterviewedCard";
import ProfileViewsCard from "../../components/tables/applicationsHistory/ProfileViewsCard";
import { FileText } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFB] pt-5 px-4 sm:px-6">
      {/* Greeting Section */}
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <span className="font-inter font-semibold text-[#25324B] text-2xl">Good morning, Adewale</span>
        <span className="font-inter text-[#7C8493] hidden sm:inline">Here is what’s happening with your job search applications </span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between w-full max-w-sm">
      <div>
        <p className="text-gray-700 font-medium text-lg mb-1">Total Jobs Applied</p>
        <p className="text-5xl font-bold text-gray-900">10</p>
      </div>
      <FileText className="w-14 h-14 text-gray-300" />
    </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Jobs Applied Status</h3>

      <div className="flex items-center space-x-6">
        {/* Pie chart */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              className="text-indigo-100"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-indigo-600"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              strokeDasharray="60, 40"
            />
          </svg>
        </div>

        {/* Labels */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-indigo-600 rounded"></span>
            <div>
              <p className="text-sm font-semibold text-gray-800">60%</p>
              <p className="text-sm text-gray-500">Unsuitable</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-indigo-100 rounded"></span>
            <div>
              <p className="text-sm font-semibold text-gray-800">40%</p>
              <p className="text-sm text-gray-500">Interviewed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="mt-5 text-sm">
        <a
          href="#"
          className="text-indigo-600 font-medium hover:underline flex items-center space-x-1"
        >
          <span>View All Applications</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
      <ProfileViewsCard totalViews={100} employerViews={50} otherViews={50} />
      <ProfileCompletenessCard completionPercentage={55} />
      <InterviewedCard interviewedCount={18} />
    </div>

      {/* Recent Activities Section */}
      <div className="flex flex-col pt-5">
        <div className="overflow-x-auto">
              <ApplicationsHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
