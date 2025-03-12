import { useMutation, useQuery } from '@tanstack/react-query';
import {
  GetUserDataFunc,
  LoginFunc,
  LogOutFunc,
  RegisterFunc,
} from './auth.api';
import toast from 'react-hot-toast';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (payload) => RegisterFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      setLoading(false);
      toast.success('Registration Successful');
      if (data?.token) {
        navigate('/auth/login');
      }
    },
    onError: (err) => {
      setLoading(false);
      toast.error('Registration Failed');
      console.log(err);
    },
  });
};

// login:
export const useLogin = () => {
  const navigate = useNavigate();

  const { setLoading, setToken } = useAuth();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload) => LoginFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data?.success) {
        if (data?.data?.token) {
          setToken(data?.data?.token);
          navigate('/');
        }
      }
      setLoading(false);
      toast.success('Login Successful');
    },
    onError: (err) => {
      setLoading(false);
      toast.error('Login Failed');
      console.log(err);
    },
  });
};

// get user data:
export const useGetUserData = (token) => {
  return useQuery({
    queryKey: ['user', token],
    queryFn: GetUserDataFunc,
    enabled: !!token,
    refetchInterval: 1000 * 60 * 60, // refetch every hour
  });
};

// logout:
export const useLogOut = () => {
  const { setLoading, clearToken } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: LogOutFunc,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      clearToken();
      navigate('/auth/login');
      toast.success('User Logged out Successfully');
    },
    onError: () => {
      toast.error('Logout Failed');
    },
  });
};
