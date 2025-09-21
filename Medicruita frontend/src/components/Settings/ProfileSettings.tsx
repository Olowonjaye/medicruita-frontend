import React, { useState } from "react";
import { HiOutlineSave } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi2";

const ProfileSettings: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
  return (
    <div className="flex items-center justify-center bg-white">
      <div className=" rounded-lg w-full border max-w-6xl p-4 flex flex-col lg:flex-row">
        {/* Profile Picture Section */}
        <div className="w-full lg:w-1/2 lg:pr-6">
        <div className="flex gap-4 lg:py-6 items-center max-w-lg mx-auto">
      {/* Profile Image Container */}
      <div className="relative group w-20 h-20 cursor-pointer">
        {/* Profile Image */}
        <img
          src="profile-image.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
        />

        {/* Camera Icon (Shown on Hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <HiOutlineCamera className="text-white text-2xl" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col justify-center font-dm-sans">
        <p className="mt-2 font-semibold text-[#1E1E1E]">Profile Picture</p>
        <p className="text-sm text-[#1E1E1ECC]">PNG, JPEG under 20MB</p>
      </div>
         </div>
        </div>

        {/* Edit Profile Form */}
        <div className="w-full lg:w-1/2 lg:pl-6">
        <div className="bg-white py-6 lg:py-6 rounded-lg w-full max-w-lg lg:w-full mx-auto">
          <h2 className="text-lg font-semibold mb-4 font-inter">Edit Profile Information</h2>
          <div className="p-4 border rounded-lg bg-[#FAFAFB]">
          <form className="space-y-4 font-dm-sans">
            <div>
              <label className="block text-md text-[#1E1E1E]">Full Name</label>
              <div className="relative w-full">
                {/* Icon */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    <IoPersonOutline />
                </span>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full pl-10 pr-4 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
                />
                </div>
            </div>
            <div>
              <label className="block text-md text-[#1E1E1E]">Email Address</label>
              <div className="relative w-full">
                {/* Icon */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    <MdOutlineMail />
                </span>

                {/* Input Field */}
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full pl-10 pr-4 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
                />
                </div>
            </div>
            <div>
              <label className="block text-md text-[#1E1E1E]">Role</label>
              <div className="relative w-full">
                {/* Icon */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    <IoPersonOutline />
                </span>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="E.g. Super Admin"
                    className="w-full pl-10 pr-4 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
                />
                </div>
            </div>
            <div>
              <label className="block text-md text-[#1E1E1E]">Current Password</label>
               <div className="relative w-full">
                {/* Icon */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    <MdLockOutline />
                </span>

                {/* Input Field */}
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Current Password"
                    className="w-full pl-10 pr-4 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
                  />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEye className="text-[#292B33]" /> : <FiEyeOff className="text-[#292B33]" />}
                </span>
                </div>
            </div>
            <div>
              <label className="block text-md text-[#1E1E1E]">New Password</label>
              <div className="relative w-full">
                {/* Icon */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    <MdLockOutline />
                </span>

                {/* Input Field */}
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    className="w-full pl-10 pr-4 block w-full text-sm px-4 py-2 border rounded-md placeholder-[#1E1E1E80]  focus:outline-none"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEye className="text-[#292B33]" /> : <FiEyeOff className="text-[#292B33]" />}
                </span>
                </div>
            </div>
          </form>
          </div>
          {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-[#0D2B4E] border-[#0D2B4E] hover:bg-gray-100">
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
      </div>
    </div>
  );
};

export default ProfileSettings;
