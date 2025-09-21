import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed top-0 left-75 w-[calc(100%-299px)] h-20 flex items-center justify-between bg-[#FFFFFF] border-b border-b-gray-200 lg:px-6 lg:py-4 z-50">
      {/* Search Bar */}
        <div className="text-2xl text-[#25324B] font-bold">Dashboard</div>
      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="text-[#4640DE] font-semibold border py-2 px-4">
          Back to homepage
        </button>
        <button className="relative">
          {/* <img src="/Bell.png" alt="Notifications" /> */}
          <IoMdNotificationsOutline  className="text-2xl cursor-pointer hover:opacity-80"/>
          <span className="absolute top-1.5 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
