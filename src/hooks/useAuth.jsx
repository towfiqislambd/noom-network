import { AuthContextProvider } from '@/Provider/AuthProvider';
import { useContext } from 'react';

const useAuth = () => {
  const all = useContext(AuthContextProvider);
  return all;
};

export default useAuth;
