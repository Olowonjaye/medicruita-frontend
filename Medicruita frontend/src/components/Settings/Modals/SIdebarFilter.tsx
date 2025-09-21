import React, { useRef, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DateForm from "./DateForm";

type MenuItem = {
  label: string;
  onClick: () => void;
  className?: string;
};

type SidebarFilterProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({ items, isOpen, onClose }) => {
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute right-4 top-4 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      {items.map((item, index) => (
        <button
          key={index}
          className={`block w-full text-left px-4 py-2 border-b border-gray-200 hover:bg-gray-100 ${
            item.className || "text-[#181818] text-sm"
          } ${index === 0 ? "rounded-t-lg" : ""} ${
            index === items.length - 1 ? "rounded-b-lg border-b-0" : ""
          }`}
          onClick={() => {
            if (item.label === "Filter By Date Range") {
              setIsDateRangeOpen(!isDateRangeOpen);
            } else {
              item.onClick();
            }
          }}
        >
          {item.label}
        </button>
      ))}
            {/* Date Range Picker Modal */}
        {isDateRangeOpen && <DateForm isOpen={isDateRangeOpen} onClose={isDateRangeOpen} />
      }
    </div>
  );
};

export default SidebarFilter;
