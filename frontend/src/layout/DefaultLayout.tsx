import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/SideBar/Index";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import apiRequest from '../lib/apiRequest';
import { setAuthData, logOut } from '../store/slices/auth';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const authToken = useAppSelector((s: any) => s.auth?.token);

  // Hydrate authenticated user on app load if a token exists but Redux isn't populated.
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return; // nothing to do
    // If store already has token or fullName, skip fetch
    if (authToken) return;

    let mounted = true;
    (async () => {
      try {
        const { data: user } = await apiRequest.get('/user/me');
        if (!mounted) return;
        dispatch(setAuthData({
          token,
          email: user.email || null,
          role: user.role || null,
          profilePicture: user.profilePicture || null,
          fullName: user.fullName || user.full_name || null,
        }));
      } catch (err) {
        console.warn('[DefaultLayout] Failed to hydrate user', err);
        try {
          localStorage.removeItem('token');
        } catch (e) {}
        dispatch(logOut());
      }
    })();

    return () => { mounted = false; };
  }, [authToken, dispatch]);

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
