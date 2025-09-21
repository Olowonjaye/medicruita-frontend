import React from "react";
import { BsThreeDots } from "react-icons/bs";

type Application = {
  role: string;
  hospital: string;
  location: string;
  type: string;
  dateApplied: string;
  status: "In Review" | "Shortlisted" | "Declined";
  logo: string; // URL or imported image
};

const applications: Application[] = [
  {
    role: "Medical Analyst",
    hospital: "Naw Hospital",
    location: "Abuja, Nigeria",
    type: "Full-Time",
    dateApplied: "24 July 2025",
    status: "In Review",
    logo: "/dashboard/image1.png",
  },
  {
    role: "Care Specialist",
    hospital: "Unity Specialist Hospital",
    location: "Edo, Nig",
    type: "Full-Time",
    dateApplied: "23 June 2024",
    status: "Shortlisted",
    logo: "/dashboard/image2.png",
  },
  {
    role: "Care Specialist",
    hospital: "Peace Hospital",
    location: "Lagos, Nigeria",
    type: "Part-Time",
    dateApplied: "22 July 2024",
    status: "Declined",
    logo: "/dashboard/image3.png",
  },
];

const statusStyles = {
  "In Review": "text-yellow-600 border-yellow-400",
  Shortlisted: "text-purple-600 border-purple-400",
  Declined: "text-red-600 border-red-400",
};

const ApplicationsHistory: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-sm mx-auto border">
      <h2 className="text-xl px-6 py-4 font-semibold text-gray-800">Recent Applications History</h2>
      <div className="space-y-4 p-6 border-t">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={app.logo}
                alt={`${app.hospital} logo`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{app.role}</h3>
                <p className="text-xs text-gray-500">
                  {app.hospital} • {app.location} • {app.type}
                </p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500">
              <p className="font-medium text-gray-700">Date Applied</p>
              <p>{app.dateApplied}</p>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyles[app.status]}`}
            >
              {app.status}
            </span>
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
              <BsThreeDots />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pb-6 text-sm text-center">
        <a href="#" className="text-indigo-600 hover:underline font-medium">
          View all applications history →
        </a>
      </div>
    </div>
  );
};

export default ApplicationsHistory;
