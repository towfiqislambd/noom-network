import MyPortfolio from '@/pages/dashboard/MyPortfolio';
import MyProperty from '@/pages/dashboard/MyProperty';
import Subscription from '@/pages/dashboard/Subscription';
import AuthLayout from '@/layout/AuthLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import Layout from '@/layout/Layout';
import AboutUs from '@/pages/AboutUs';
import ForgetPassword from '@/pages/auth/ForgetPassword';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/SignUp';
import VerifyOTP from '@/pages/auth/VerifyOTP';
import ContactUs from '@/pages/ContactUs';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import Settings from '@/pages/dashboard/Settings';
import ProjectCashFlow from '@/pages/dashboard/ProjectCashFlow';
import PortfolioForecasting from '@/pages/dashboard/PortfolioForecasting';
import ChangePassword from '@/pages/auth/ChangePassword';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PropertyDetails from '@/pages/dashboard/PropertyDetails';
import MyPortfolioPage from '@/pages/dashboard/MyPortfolioPage';

const router = createBrowserRouter([
  // Main Layout
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/contactUs',
        element: <ContactUs />,
      },
    ],
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
    ],
  },
  // Dashboard Layout
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/myPortfolio',
        element: (
          <PrivateRoute>
            <MyPortfolio />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/myPortfolio/projectCashFlow',
        element: (
          <PrivateRoute>
            <ProjectCashFlow />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/myPortfolio/portfolioForecasting',
        element: (
          <PrivateRoute>
            <PortfolioForecasting />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/myProperty',
        element: (
          <PrivateRoute>
            <MyProperty />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/subscription',
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/settings',
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/property-details/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/property-portfolio',
        element: (
          <PrivateRoute>
            <MyPortfolioPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
