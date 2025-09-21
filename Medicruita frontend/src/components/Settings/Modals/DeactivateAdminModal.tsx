import { IoCloseCircleOutline } from "react-icons/io5";
import { LuTriangleAlert } from "react-icons/lu";

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
  }

const DeactivateAdminModal: React.FC<ModalProps> = ({ setIsOpen }) => {

  return (
      <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%]"
        onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="w-full flex justify-end">
          <div className="flex justify-between w-[55%] items-start">

          {/* Warning Icon */}
          <div>
            <div className="bg-red-100 p-3 rounded-full">
              <LuTriangleAlert className="h-6 w-6 text-red-600"/>
            </div>
          </div>

          <button
            className="text-[#1E1E1E80]"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseCircleOutline className="text-2xl" />
          </button>
          </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-lg font-dm-sans font-semibold text-[#1E1E1E] mt-4">
            Deactivate Admin
          </h2>
          <div className="w-full font-dm-sans flex flex-col justify-center items-center text-black opacity-50 text-sm">
          <p className="text-center">Are you sure you want to deactivate this admin?</p>
          <p className="text-center">This action will revoke their access to the platform.</p>
          </div>
          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              className="md:w-1/2 px-4 py-2 md:py-3 text-[#C10606] border border-[#C10606] rounded-md font-semibold font-dm-sans"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button className="md:w-1/2 ml-3 px-4 py-2 md:py-3 bg-[#C10606] text-white rounded-md font-semibold font-dm-sans">
              Yes, Deactivate
            </button>
          </div>
        </div>
      </div>
  );
};

export default DeactivateAdminModal;
