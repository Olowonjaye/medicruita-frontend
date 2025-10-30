import React from "react";

type Course = {
  id: string;
  title: string;
  provider: string;
  duration: string;
};

const courses: Course[] = [
  { id: "c1", title: "Infection Control Basics", provider: "Medicruita Academy", duration: "2 hrs" },
  { id: "c2", title: "Emergency Triage", provider: "HealthTrain", duration: "3.5 hrs" },
  { id: "c3", title: "Patient Communication", provider: "SoftSkills Co.", duration: "1.5 hrs" },
];

const CPDs: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">CPD Courses</h1>
      <p className="text-sm text-gray-600 mb-6">Access continuous professional development courses.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded shadow hover:shadow-md">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.provider}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CPDs;
