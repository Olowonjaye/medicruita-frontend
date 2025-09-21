import React, { useRef, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="font-inter fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white h-[80%] rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto">

        <div className="flex justify-between px-6 border-b border-b-gray-200">
        {/* Header */}
        <h2 className="text-lg mt-4 font-semibold mb-4 text-[#0D2B4E] text-md">Transaction Details</h2>
        {/* Close Button */}
        <button onClick={onClose}>
          <MdOutlineCancel className="text-[#1E1E1E80] opacity-50 text-2xl"/>
        </button>

        </div>
        
        <div className="px-6 py-4">
        {/* Transaction Info */}
        <div className="text-sm text-gray-700 space-y-2">
        <div className="flex justify-between">
        <div>
          <p className="text-[#1E1E1E]">Date & Time: <span className="opacity-75">14 Feb 2025, 10:23 AM </span>
          </p>
          <p className="text-[#1E1E1E]">Transaction ID: <span className="opacity-75">WSX-10452 </span>
          </p>
          </div>
            {/* Actions */}
            <div className="flex gap-4 mt-4">
          <button className="text-[#0D2B4E flex items-center">
            <VscDebugRestart /> <p className="font-semibold"> Retry </p>
          </button>
          <button className="flex gap-1 items-center text-red-600 flex items-center">
            <MdOutlineCancel /> <p className="font-semibold"> Cancel </p>
          </button>
        </div>
        </div>
          <p className="font-semibold text-[#0D2B4E] text-md">Transaction Information</p>
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
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Successful</span>
          </p>
          </div>

          <h3 className="font-semibold text-[#0D2B4E] mt-4">Additional Details</h3>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Account Number: <span className="opacity-75"> 0123456789 (GTBank) </span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Processing Time: <span className="opacity-75"> Instant </span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Initiated By: <span className="opacity-75"> User </span></p></div>
          <div className="flex gap-2 items-center"><FaRegCircle className="w-2 h-2"/><p className="text-[#1E1E1E]">Admin Actions: <span className="italic text-gray-500">None Required</span></p></div>
        </div>

        {/* Add Internal Note */}
        <div className="mt-4 w-2/3">
          <h3 className="text-sm font-semibold text-[#0D2B4E] mb-1">Add Internal Note</h3>
          <textarea
            className="w-full border p-2 h-28 rounded-md text-sm border border-[#C2C3C1] text-gray-700 focus:outline-none"
            placeholder="Provide a brief note here..."
          ></textarea>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
