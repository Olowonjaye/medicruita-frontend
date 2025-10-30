import React from "react";
import General from "../../components/Settings/General";
import Payout from "../../components/Settings/Payout";

const Settings: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="bg-white p-4 rounded shadow">
        <General />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Payout />
      </div>
    </div>
  );
};

export default Settings;
