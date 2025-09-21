import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineSave } from "react-icons/hi";
import { IoCloseCircleOutline, IoEllipseOutline } from "react-icons/io5";

const permissions = [
  {
    category: "User Management",
    items: [
      "View Users",
      "Edit User Details",
      "Approve/Reject KYC",
      "Deactivate Users",
    ],
  },
  {
    category: "Financial OperationsUser Management",
    items: [
      "Approve Withdrawals",
      "Process Deposits",
      "Retry Failed Transactions",
      "View Transaction Logs",
    ],
  },
  {
    category: "Savings & Investments",
    items: [
      "Manage Savings Plans",
      "Approve Investment Withdrawals",
      "Edit Investment Asset Types",
    ],
  },
  {
    category: "System & Security",
    items: [
      "Manage Savings Plans",
      "Approve Investment Withdrawals",
      "Edit Investment Asset Types",
    ],
  },
];

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const EditAdminPermissionsModal: React.FC<Props> = ({ setIsOpen }) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const togglePermission = (permission: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[25%] relative max-h-[70vh] overflow-y-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-[70%] lg:w-full">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3  text-[#1E1E1E80]"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseCircleOutline className="text-2xl" />
        </button>

        {/* Title */}
        <h2 className="text-lg text-[#0D2B4E] font-dm-sans mb-4">
          Edit Admin Permissions
        </h2>

        {/* Permissions Checklist */}
        <h3 className="font-[Manrope] font-semibold text-[#111827] mt-4">
          Permissions Checklist
        </h3>
        {permissions.map((group) => (
          <div key={group.category} className="mt-3">
            <h4 className="text-[#111827] font-[Manrope] font-semibold text-sm flex items-center gap-1">
              <IoEllipseOutline className="text-[#111827"/> {group.category}
            </h4>
            {group.items.map((perm) => (
              <label key={perm} className="flex items-center space-x-2 mt-2 px-6">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#111827] focus:ring-2 focus:ring-blue-400"
                  checked={selectedPermissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                />
                <span className="text-[#111827] font-[Manrope] text-sm">{perm}</span>
              </label>
            ))}
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button 
          className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-[#0D2B4E] border-[#0D2B4E]"
          onClick={() => setIsOpen(false)}
          >
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
  );
};

export default EditAdminPermissionsModal;
