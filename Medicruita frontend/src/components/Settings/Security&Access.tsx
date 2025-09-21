import React from "react";
import { HiOutlineSave } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const SecurityandAccess: React.FC = () => {
  return (
    <div className="flex items-center rounded-lg border justify-center bg-[#FFFFFF]">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold font-inter mb-4">
          Admin Access Controls
        </h2>
        <div className="p-4 border rounded-lg bg-[#FAFAFB]">
        <form className="space-y-4 font-dm-sans">
          
          {/* Admin Role Management */}
          <div>
            <label className="block text-md text-[#1E1E1E]">
              Admin Role Management
            </label>
            <select className="mt-1 block w-full text-sm px-4 py-2 text-[#1E1E1E80] border rounded-md  focus:outline-none">
              <option>Select Admin Role</option>
              <option>Admin Role</option>
              <option>Role</option>
            </select>
          </div>

          {/* Edit Permissions for Admins */}
          <div>
            <label className="block text-md text-[#1E1E1E]">
              Edit Permissions for Admins
            </label>
            <input
              type="text"
              placeholder="Choose Permissions to Modify"
              className="mt-1 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
            />
            <button className="mt-2 px-2 py-1 border rounded-md font-semibold text-[#0D2B4E] border-[#0D2B4E]">
              Edit Permissions
            </button>
          </div>

          {/* Deactivate Admin Accounts */}
          <div>
            <label className="block text-md text-[#1E1E1E]">
              Deactivate Admin Accounts
            </label>
            <input
              type="text"
              placeholder="Enter Admin Name or Email"
              className="mt-1 block w-full text-sm px-4 py-2 border placeholder-[#1E1E1E80] rounded-md focus:outline-none"
            />
            <button className="mt-2 px-2 py-1 border rounded-md font-semibold text-[#C10606] border-[#C10606]">
              Deactivate Admin
            </button>
          </div>
        </form>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-[#0D2B4E] border-[#0D2B4E]">
            <MdOutlineCancel />Cancel
          </button>
          <button className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-white"
          style={{
            background: "linear-gradient(90deg, #1C5CA6 5%, #0D2B4E 329.93%)",
          }}
          >
            <HiOutlineSave /> Save Changes
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default SecurityandAccess;
