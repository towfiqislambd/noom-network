import { useMutation, useQuery } from '@tanstack/react-query';
import {
  GetUserDataFunc,
  GoogleLoginFunc,
  LoginFunc,
  LogOutFunc,
  OtpVerifyFunc,
  RegisterFunc,
  ResetPasswordFunc,
  VerifyEmailFunc,
} from './auth.api';
import toast from 'react-hot-toast';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

// register::
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
      toast.error(err?.response?.data?.message);
    },
  });
};

// login::
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
      toast.error(err?.response?.data?.message);
    },
  });
};

// get user data::
export const useGetUserData = (token) => {
  return useQuery({
    queryKey: ['user', token],
    queryFn: GetUserDataFunc,
    enabled: !!token, // Only run the query if token is truthy
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

// verify email::
export const useVerifyEmail = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['verify-email'],
    mutationFn: (payload) => VerifyEmailFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data?.email) {
        navigate('/auth/verifyOTP', { state: { email: data.email } });
        setLoading(false);
        toast.success('Otp sent to your email address');
      }
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err?.response?.data?.data?.email?.[0]);
      console.log(err);
    },
  });
};

// verify otp:
export const useVerifyOtp = (reset) => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['verify-otp'],
    mutationFn: (payload) => OtpVerifyFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data) {
        setLoading(false);
        toast.success('Otp verified successfully');
        navigate('/auth/changePassword', {
          state: { email: data.email, key: data?.password_reset_token },
        });
      }
    },
    onError: (err) => {
      setLoading(false);
      reset();
      toast.error(err?.response?.data?.message);
      console.log(err);
    },
  });
};

// reset password:
export const useResetPassword = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['reset-password'],
    mutationFn: (payload) => ResetPasswordFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data) {
        setLoading(false);
        toast.success('Password reset successfully');
        navigate('/auth/login');
      }
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// ssl login::
export const useSocialLogin = () => {
  return useMutation({
    mutationKey: ['social-login'],
    mutationFn: (payload) => GoogleLoginFunc(payload),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
