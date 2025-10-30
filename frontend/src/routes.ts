import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";

const SignIn = lazy(() => import("./pages/authenticaton/SignIn"));
const Home = lazy(() => import("./pages/dashboard/Home"));
const SignUp = lazy(() => import("./pages/authenticaton/SignUp"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Chatollama = lazy(() => import("./pages/dashboard/ChatIlama"));
const Jobs = lazy(() => import("./pages/dashboard/Jobs.tsx"));
const CPDs = lazy(() => import("./pages/dashboard/CPDs.tsx"));
const Profile = lazy(() => import("./pages/dashboard/Profile.tsx"));
const SettingsPage = lazy(() => import("./pages/dashboard/Settings.tsx"));
const Help = lazy(() => import("./pages/dashboard/Help.tsx"));



export const appRoutes: IRoute[] = [
    {
        path: "/",
        component: Home,
        requiresAuth: false,
    },
    {
        path: "/login",
        component: SignIn,
        requiresAuth: false,
    },
    {
        path: "/register",
        component: SignUp,
        requiresAuth: false,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        requiresAuth: false,
    },
    {
        path: "/jobs",
        component: Jobs,
        requiresAuth: false,
    },
    {
        path: "/cpds",
        component: CPDs,
        requiresAuth: false,
    },
    {
        path: "/profile",
        component: Profile,
        requiresAuth: false,
    },
    {
        path: "/settings",
        component: SettingsPage,
        requiresAuth: false,
    },
    {
        path: "/help",
        component: Help,
        requiresAuth: false,
    },
    {
        path: "/chatollama",
        component: Chatollama,
        requiresAuth: false,
    },

]