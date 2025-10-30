import React from "react";
import ProfileSettings from "../../components/Settings/ProfileSettings";

const Profile: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="bg-white p-4 rounded shadow">
        <ProfileSettings />
      </div>
    </div>
  );
};

export default Profile;
