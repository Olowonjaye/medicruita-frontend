import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../store/slices/auth";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);


  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-10 flex h-screen w-[270px] flex-col overflow-y-hidden bg-[#E9EBFD] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-2 px-2 lg:py-4">
        <NavLink to="/" className="w-[250px] h-[50px]">
          <img
            src="logo.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </NavLink>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="no-scrollbar flex overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 lg:px-1 py-4 w-full">

          {/* <!-- Menu Group --> */}
          <div>

            <ul className="flex flex-col gap-[24px] scroll-y-none">
              {/* <!-- Menu Item Calendar --> */}
            <li className={`flex flex-row gap-4 items-center ${pathname === "/dashboard" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("dashboard") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/dashboard"
                className={`group relative flex items-center ${pathname === "/dashboard" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                  <RiHome2Line className="text-2xl"/>
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- role management--> */}
            <li className={`flex flex-row gap-4 items-center ${pathname === "/chatollama" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("chatollama") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/chatollama"
                className={`group relative flex items-center ${pathname === "/chatollama" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                <HiOutlineChatBubbleBottomCenterText className="text-2xl"/>
                  Chat Ilama
                </NavLink>
              </li>

              {/* <!--role management --> */}

              {/* <!-- staff management --> */}
              <li className={`flex flex-row gap-4 items-center ${pathname === "/savings&investment" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("savings&investment") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/savings&investment"
                className={`group relative flex items-center ${pathname === "/savings&investment" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                  <RiSearchLine className="text-2xl"/>
                  Find Jobs
                </NavLink>
              </li>

              {/* <!-- User management --> */}

              <li className={`flex flex-row gap-4 items-center ${pathname === "/transactions" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("transactions") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/transactions"
                className={`group relative flex items-center ${pathname === "/transactions" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                <SlScreenDesktop className="text-2xl"/>
                  CPD Courses
                </NavLink>
              </li>

              <li className={`flex flex-row mb-6 gap-4 items-center ${pathname === "/insurance" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("insurance") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/insurance"
                className={`group relative flex items-center ${pathname === "/insurance" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                <CiUser className="text-2xl"/>
                  My Profile
                </NavLink>
              </li>

              <div className="w-full border-b border-b-gray-300"></div>

              <p className="text-[#7C8493] font-semibold text-sm ml-6">SETTINGS</p>

            <li className={`flex flex-row gap-4 items-center ${pathname === "/explore" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("explore") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/explore"
                className={`group relative flex items-center ${pathname === "/explore" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                  <FiSettings  className="text-xl"/>
                  Settings
                </NavLink>
              </li>

              <li className={`flex flex-row gap-4 items-center ${pathname === "/logs" ? "text-[#4640DE]" : "text-[#7C8493]"}`}>
              <div className={`${
                pathname.includes("logs") 
                  ? "py-4 border-r-4 border-[#4640DE] text-[#0173B1]" 
                  : "py-4"
              }`}>
              </div>
              <NavLink
                to="/logs"
                className={`group relative flex items-center ${pathname === "/logs" ? "bg-[#CACEF3] text-[#4640DE]" : "text-[#7C8493]"} gap-2.5 py-2 px-4 font-medium font-inter text-base duration-300 ease-in-out w-full`}>
                <BiHelpCircle className="text-2xl"/>
                  Help Center
                </NavLink>
              </li>

              <div className="flex flex-col pt-16 bottom-0 gap-6 ">
                
              <li className={`flex flex-row gap-3 text-center items-center bg-white text-[#FF6550] shaddow-md rounded-md m-2`}>
              <button
                onClick={handleLogout}
                className={`group relative flex items-center font-semibold justify-center gap-2.5 py-8 px-4 font-inter duration-300 ease-in-out w-full`}>
                <HiOutlineLogout className="text-xl"/>
                  Logout
                </button>
              </li>
          <li>
            <div className="p-4">
                <div className="flex items-center space-x-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png" alt="Admin" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-[#202430] text-lg font-medium">John Admin</p>
                        <p className="text-[#202430] text-sm opacity-50">Administrator@gmail.com</p>
                    </div>
                </div>
            </div>
        </li>

              </div>
            </ul>
          </div>

          {/* <!-- Others Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
