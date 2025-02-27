import MyPortfolio from "@/pages/dashboard/MyPortfolio";
import MyProperty from "@/pages/dashboard/MyProperty";
import Subscription from "@/pages/dashboard/Subscription";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/AboutUs";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import ContactUs from "@/pages/ContactUs";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Settings from "@/pages/dashboard/Settings";
import ProjectCashFlow from "@/pages/dashboard/ProjectCashFlow";
import PortfolioForecasting from "@/pages/dashboard/PortfolioForecasting";
import ChangePassword from "@/pages/auth/ChangePassword";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    // Main Layout
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/contactUs",
                element: <ContactUs />,
            },
        ]
    },
    // Auth Layout
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />,
            },
            {
                path: '/auth/signup',
                element: <SignUp />,
            },
            {
                path: '/auth/forgetPassword',
                element: <ForgetPassword />,
            },
            {
                path: '/auth/verifyOTP',
                element: <VerifyOTP />,
            },
            {
                path: '/auth/changePassword',
                element: <ChangePassword />,
            },
        ]
    },
    // Dashboard Layout
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/myPortfolio',
                element: <MyPortfolio />,
            },
            {
                path: '/dashboard/myPortfolio/projectCashFlow',
                element: <ProjectCashFlow />,
            },
            {
                path: '/dashboard/myPortfolio/portfolioForecasting',
                element: <PortfolioForecasting />,
            },
            {
                path: '/dashboard/myProperty',
                element: <MyProperty />,
            },
            {
                path: '/dashboard/subscription',
                element: <Subscription />,
            },
            {
                path: '/dashboard/settings',
                element: <Settings />,
            },
        ]
    },
]);

export default router