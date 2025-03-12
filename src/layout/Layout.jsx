import Loader from '@/components/Loader/Loader';
import useAuth from '@/hooks/useAuth';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  const { loadingUserData, loading } = useAuth();
  if (loadingUserData || loading) return <Loader />;

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
