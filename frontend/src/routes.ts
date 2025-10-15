import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";

const SignIn = lazy(() => import("./pages/authenticaton/SignIn"));
const Home = lazy(() => import("./pages/dashboard/Home"));
const SignUp = lazy(() => import("./pages/authenticaton/SignUp"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Chatollama = lazy(() => import("./pages/dashboard/ChatIlama"));



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
        path: "/chatollama",
        component: Chatollama,
        requiresAuth: false,
    },

]