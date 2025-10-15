import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Loader from "./common/Loader/index";
import DefaultLayout from "./layout/DefaultLayout";
import { useAppSelector } from "./hooks/useAppSelector";
import { appRoutes } from "./routes";
import NotFound from "./pages/NotFound";
// import React from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const { token } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map((route) => {
            if (route.requiresAuth && !token) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Navigate replace to="/" />}
                />
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            }
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;
