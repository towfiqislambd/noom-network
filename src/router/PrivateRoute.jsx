import Loader from '@/components/Loader/Loader';
import useAuth from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (user) return children;

  return <Navigate to="/auth/login" state={location?.pathname} replace />;
};

export default PrivateRoute;
