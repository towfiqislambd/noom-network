import { axiosPublic } from './useAxiosPublic';
import { axiosSecure } from './useAxiosSecure';

// register::
export const RegisterFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/users/register', payload);
  return data?.data;
};

// login::
export const LoginFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/users/login', payload);
  return data;
};

// get user data::
export const GetUserDataFunc = async () => {
  try {
    const { data } = await axiosSecure.get('/api/users/data');
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Ensure the error is handled in React Query
  }
};

// logout::
export const LogOutFunc = async () => {
  const { data } = await axiosSecure.post('/api/users/logout');
  return data?.data;
};

// verify email::
export const VerifyEmailFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/email-verify',
    payload
  );
  return data?.data;
};

// otp verify::
export const OtpVerifyFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/otp-verify',
    payload
  );
  return data?.data;
};

// reset password::
export const ResetPasswordFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/reset-password',
    payload
  );
  return data?.data;
};

// ssl login::
export const GoogleLoginFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/social-login', payload);
  return data?.data;
};
