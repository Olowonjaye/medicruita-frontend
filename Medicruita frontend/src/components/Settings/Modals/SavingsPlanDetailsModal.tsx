import React, { useRef, useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";import { HiOutlineSave } from "react-icons/hi";
import ModifyMaturityDateModal from "./ModifyMaturityDateModal";
import { VscDebugRestart } from "react-icons/vsc";
;

type MenuItem = {
    title: string;
    subTile1: string;
    subTile2: string;
    className?: string;
  };

type SavingsPlanDetailsModalProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  modalType?: "savings" | "investment" | "transactionModal";
};

const SavingsPlanDetailsModal: React.FC<SavingsPlanDetailsModalProps> = ({ modalType, items, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isMaturityDateModalOpen, setIsMaturityDateModalOpen] = useState(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
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
  const handleMenuClose = () => setIsMaturityDateModalOpen(false);

  return (
    <div className="font-inter fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white h-[80%] rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto">

        <div className="flex justify-between px-6 border-b border-b-gray-200">
        {/* Header */}
        {items.map((item, index) => (
        <h2 
        key={index} 
        className="text-lg mt-4 font-semibold mb-4 text-[#0D2B4E] text-md">
            {item.title}
        </h2>
    ))}
        {/* Close Button */}
        <button onClick={onClose}>
          <MdOutlineCancel className="text-[#1E1E1E80] opacity-50 text-2xl"/>
        </button>

        </div>
        
        <div className="px-6 py-4">
        {/* Transaction Info */}
        <div className="text-sm text-gray-700 space-y-2">
        {items.map((item, index) => (
          <p
          key={index} 
          className="font-semibold text-[#0D2B4E] text-md">
            {item.subTile1}</p>
        ))}
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">User Name: <span className="opacity-75">Adekunle Alabi</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">User Email:<span className="opacity-75">adekunle@yahoo.com</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Transaction Type: <span className="opacity-75">Deposit</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Amount:<span className="opacity-75">₦250,000</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Transaction Fee: <span className="opacity-75">₦500</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Total Amount Processed: <span className="opacity-75">₦249,500</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Payment Method: <span className="opacity-75">Bank Transfer</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Reference ID:<span className="opacity-75">ABC123XYZ</span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">
            Status:
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Ongoing</span>
          </p>
          </div>
          <div className="flex justify-end">
          {modalType === "transactionModal" ?(
                      <div className="flex gap-4 mt-4">
                    <button className="text-[#0D2B4E flex items-center">
                      <VscDebugRestart /> <p className="font-semibold"> Retry </p>
                    </button>
                    <button className="flex gap-1 items-center text-red-600 flex items-center">
                      <MdOutlineCancel /> <p className="font-semibold"> Cancel </p>
                    </button>
                  </div>
                  ) : (
                        <div className="relative flex gap-4 mt-4">
                          <button 
                          onClick={() => setIsMaturityDateModalOpen(!isMaturityDateModalOpen)}
                          className="text-[#0D2B4E flex items-center">
                            <CiEdit /> <p className="font-semibold"> Modify Maturity Date </p>
                          </button>
                          <button className="flex gap-1 items-center text-red-600 flex items-center">
                            <MdOutlineCancel /> <p className="font-semibold"> Cancel Plan </p>
                          </button>

                        {isMaturityDateModalOpen && (
                          <ModifyMaturityDateModal
                          isOpen={isMaturityDateModalOpen}
                          onClose={handleMenuClose}
                          />
          )}
        </div>
        )}
        </div>
          {items.map((item, index) => (
          <h3 
          key={index} 
          className="font-semibold text-[#0D2B4E] mt-4">{item.subTile2}</h3>
        ))}
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">14 Feb 2025, 10:23 AM: <span className="opacity-75"> Deposit of ₦250,000 </span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">12 Feb 2025, 03:45 PM: <span className="opacity-75"> Withdrawal of ₦120,000 </span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">10 Feb 2025, 09:30 AM: <span className="opacity-75"> Savings Deposit of ₦75,000 </span></p></div>
        </div>
        {modalType === "transactionModal" &&
        (<div className="mt-4 w-2/3">
          <h3 className="text-sm font-semibold text-[#0D2B4E] mb-1">Add Internal Note</h3>
          <textarea
            className="w-full border p-2 h-28 rounded-md text-sm border border-[#C2C3C1] text-gray-700 focus:outline-none"
            placeholder="Provide a brief note here..."
          ></textarea>
        </div>)}
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
            <HiOutlineSave /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingsPlanDetailsModal;
