import React, {useRef, useEffect, useState } from "react";
import TransactionModal from "./TransactionModal";
import SavingsPlanDetailsModal from "./SavingsPlanDetailsModal";

type MenuItem = {
  label: string;
  onClick: () => void;
  className?: string;
};

type ContextMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  modalType?: "transaction" | "savings" | "investment" | "transactionModal";
};

const ContextMenu: React.FC<ContextMenuProps> = ({ items, isOpen, onClose, modalType }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSavingModalOpen, setIsSavingModalOpen] = useState(false)
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false)
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    <div
      ref={menuRef}
      className="absolute right-16 top-8 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      {items.map((item, index) => (
        <button
          key={index}
          className={`block w-full text-left px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100 ${item.className || "text-[#181818]"} ${index === 0 ? "rounded-t-lg" : ""} ${index === items.length - 1 ? "rounded-b-lg" : ""}`}
          onClick={() => {
            if (item.label === "View Details" && modalType === "transaction") {
              setIsModalOpen(!isModalOpen);
            } else if(item.label === "View Details" && modalType === "savings"){
              setIsSavingModalOpen(!isSavingModalOpen);
            } else if(item.label === "View Details" && modalType === "investment"){
              setIsInvestmentModalOpen(!isInvestmentModalOpen);
            } else if(item.label === "View Details" && modalType === "transactionModal"){
              setIsTransactionModalOpen(!isTransactionModalOpen);
            }
              else{
              item.onClick();
            }
          }}
        >
          {item.label}
        </button>
      ))}

      {/* Date Range Picker Modal */}
      {isModalOpen && 
      <TransactionModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(!isModalOpen)} 
      />}

      {isSavingModalOpen 
      && <SavingsPlanDetailsModal 
        items={[
          { title: "Savings Plan Details", 
            subTile1: "Savings Plan Overview", 
            subTile2: "Savings Transactions" 
          }
      ]}
       isOpen={isSavingModalOpen} 
       onClose={() => setIsSavingModalOpen(!isSavingModalOpen)} 
       />
    }

    {isInvestmentModalOpen && <SavingsPlanDetailsModal 
        items={[
          { title: "Investment Plan Details", 
            subTile1: "Investment Overview", 
            subTile2: "Savings Transactions" 
          }
      ]}
       isOpen={isInvestmentModalOpen} 
       onClose={() => setIsInvestmentModalOpen(!isInvestmentModalOpen)} 
       />
    }

{isTransactionModalOpen && <SavingsPlanDetailsModal 
        items={[
          { title: "Transaction Details", 
            subTile1: "Transaction Overview", 
            subTile2: "Processing Timeline" 
          }
      ]}
       isOpen={isTransactionModalOpen} 
       onClose={() => setIsTransactionModalOpen(!isTransactionModalOpen)} 
       modalType = "transactionModal"
       />
    }
    </div>
  );
};

export default ContextMenu;
