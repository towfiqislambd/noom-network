/* eslint-disable react-refresh/only-export-components */
import { useGetUserData } from '@/hooks/auth.hook';
import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useEffect, useState } from 'react';

export const AuthContextProvider = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken, clearToken] = useLocalStorage('token', null);
  const {
    data: userData = [],
    isLoading: loadingUserData,
    isFetching: fetchingUserData,
  } = useGetUserData(token);

  // console.log(user);

  //get user info::
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return; // Stop execution if token doesn't exist
    }

    try {
      if (userData?.data) {
        setUser(userData?.data);
      }
    } catch (error) {
      setUser(null);
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  }, [token, userData?.data]);

  // values to pass:
  const allValues = {
    loading,
    setLoading,
    token,
    setToken,
    clearToken,
    user,
    setUser,
    loadingUserData,
    fetchingUserData,
  };
  return (
    <AuthContextProvider.Provider value={allValues}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
