import React from "react";

type Job = {
  id: string;
  title: string;
  location: string;
  hospital: string;
  salary?: string;
};

const jobs: Job[] = [
  { id: "1", title: "Registered Nurse", location: "Lagos, NG", hospital: "St. Marys Hospital", salary: "₦120,000/mo" },
  { id: "2", title: "General Practitioner", location: "Abuja, NG", hospital: "Central Clinic", salary: "₦200,000/mo" },
  { id: "3", title: "Pharmacist", location: "Jos, NG", hospital: "HealthWorks Pharmacy", salary: "₦90,000/mo" },
];

const Jobs: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Find Jobs</h1>
      <p className="text-sm text-gray-600 mb-6">Browse and apply for available jobs.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <span className="text-sm text-gray-500">{job.location}</span>
            </div>
            <p className="text-sm text-gray-600">{job.hospital}</p>
            {job.salary && <p className="text-sm text-gray-800 font-medium mt-2">{job.salary}</p>}
            <div className="mt-4 flex gap-2">
              <a href="#" className="text-sm px-3 py-2 bg-blue-600 text-white rounded">Apply</a>
              <a href="#" className="text-sm px-3 py-2 border rounded border-gray-200">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
