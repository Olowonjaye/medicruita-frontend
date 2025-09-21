import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineSave } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

type ModifyMaturityDateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModifyMaturityDateModal: React.FC<ModifyMaturityDateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [newDate, setNewDate] = useState<Date | null>(new Date());
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
  const [reason, setReason] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const newDateRef = useRef<any>(null);
  const currentDateRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose;
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[350px] shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Modify Maturity Date</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            &times;
          </button>
        </div>

        {/* Current Maturity Date */}
        <div className="mb-4">
          <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Current Maturity Date</label>
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            className="w-full p-2 border border-gray-300 focus:outline-none text-[#555E67] font-semibold text-sm rounded mt-1"
            ref={currentDateRef}
          />
          </div>
        </div>

        {/* New Maturity Date */}
        <div className="mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">New Maturity Date</label>
          <DatePicker
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            className="w-full p-2 border border-gray-300 focus:outline-none text-[#555E67] font-semibold text-sm rounded mt-1"
            ref={newDateRef}
          />
          <CiCalendar className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer" 
          onClick={() => newDateRef.current?.setFocus()}
          />
          </div>
          <p className="text-xs text-gray-500 mt-1">Must be later than the original maturity date</p>
        </div>

        {/* Reason for Modification */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Reason for Modification (Optional)</label>
          <textarea
            placeholder="Provide a brief note here..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
                <div className="flex justify-end space-x-2 my-6">
                  <button className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-[#0D2B4E] border-[#0D2B4E] hover:bg-gray-100">
                    <MdOutlineCancel />Cancel
                  </button>
                  <button className="flex gap-1 items-center font-Inter text-sm font-medium px-3 py-2 border rounded-md text-white"
                  style={{
                    background: "linear-gradient(90deg, #1C5CA6 5%, #0D2B4E 329.93%)",
                  }}
                  >
                    <HiOutlineSave /> Save
                  </button>
                </div>
      </div>
    </div>
  );
};

export default ModifyMaturityDateModal;
