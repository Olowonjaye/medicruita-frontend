import React, { ReactNode } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/SideBar/Index";
import { useLocation } from "react-router-dom";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const excludedRoutes = ["/",, "/login", "/register", "/forgot-password", "/reset-password"]; // Add more routes that does not need the header and sidebar
  const hideLayout = excludedRoutes.includes(pathname);

  return (
    <div className="">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {!hideLayout && <Sidebar  sidebarOpen={false} setSidebarOpen={function (): void {
          throw new Error("Function not implemented.");
        } } />}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto">
          {/* <!-- ===== Header Start ===== --> */}
          {!hideLayout && <Header
          //  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} 
           />}
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
          <main className={!hideLayout ? "mx-auto max-w-screen-2xl pt-20" : ""}>
            {children}
          </main>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
