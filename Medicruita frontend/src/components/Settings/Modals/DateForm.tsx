import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

type DateFormProps = {
  isOpen: boolean;
  onClose: boolean;
};

const DateForm: React.FC<DateFormProps> = ({ isOpen, onClose }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const menuRef = useRef<HTMLDivElement>(null);

  // Separate refs for each DatePicker
  const startDateRef = useRef<any>(null);
  const endDateRef = useRef<any>(null);

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
    <div ref={menuRef} className="absolute right-96 top-8 mt-2 w-full bg-white rounded-lg shadow-md border border-gray-200">

        <div className="p-4 border w-96 border-gray-300 rounded-lg bg-white font-[Hiragino Sans]">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#31373D]">Date Range</h3>
            <button className="text-[#5A3D8B] font-semibold" >Reset</button>
          </div>

          <div className="flex gap-2">
          <div className="mt-4">
          <div className="relative">
            <label className="text-[#555E67] text-sm">From</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border border-gray-300 focus:outline-none text-[#555E67] font-semibold text-sm rounded mt-1"
              ref={startDateRef}
            />
            <CiCalendar className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer" 
            onClick={() => startDateRef.current?.setFocus()}
            />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-[#555E67] text-sm">To</label>
            <div className="relative">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-2 border border-gray-300 focus:outline-none text-[#555E67] font-semibold text-sm rounded mt-1 "
              ref={endDateRef}
            />
            <CiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer" 
            onClick={() => endDateRef.current?.setFocus()}
            />
          </div>
          </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <button className="p-2 text-[#555E67] text-sm border border-gray-300 rounded">Today</button>
            <button className="p-2 text-[#555E67] text-sm border border-gray-300 rounded">This Week</button>
            <button className="p-2 text-[#555E67] text-sm border border-gray-300 rounded">This Month</button>
          </div>
        </div>
    </div>
  );
};

export default DateForm;
