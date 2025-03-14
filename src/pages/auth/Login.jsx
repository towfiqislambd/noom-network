import { useForm } from 'react-hook-form';
import signUpBg from '../../assets/loginBg.png';
import { Link } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import { useLogin, useSocialLogin } from '@/hooks/auth.hook';
import { ImSpinner9 } from 'react-icons/im';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const { loading } = useAuth();
  const [sslLoading, setSslLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // mutation:
  const { mutateAsync: loginMutation } = useLogin();
  const { mutateAsync: socialLoginMutation } = useSocialLogin(setSslLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    if (data) {
      await loginMutation(data);
      reset();
    }
  };

  // login with google:
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google login success:', tokenResponse);
      const token = tokenResponse.access_token;
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_GOOGLE_URL}/oauth2/v2/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(data);
        const updatedData = {
          token,
          provider: 'google',
          username: data?.name,
          email: data?.email,
          avatar: data?.picture,
        };
        console.log(updatedData);
        await socialLoginMutation(updatedData);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error);
    },
  });

  return (
    <div className="flex justify-center items-center my-5 xl:my-0 min-h-screen max-h-screen">
      <div className="container max-w-[450px] xl:max-w-[987px] xl:grid items-center gap-14 grid-cols-2">
        <div className="w-full hidden xl:block">
          <img src={signUpBg} alt="bg" className="object-cover w-full h-full" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 shadow rounded-lg px-5 sm:px-7 md:py-10 py-5 bg-[#F2F4F7]"
          >
            <h3 className="text-headingTextColor font-semibold text-xl xs:text-2xl mb-3">
              Login To Your Account
            </h3>
            <span className="text-[#4F4F4F] font-medium">
              Welcome to Network
            </span>
            {/* Email field */}
            <div className="md:mb-8 mb-5 mt-5 md:mt-8">
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email Address"
                className="bg-transparent outline-none border-b pb-3 mb-2 block w-full border-gray-400"
              />
              {errors.email && (
                <span className="text-red-500">Email Address is required</span>
              )}
            </div>
            {/* Password field */}
            <div className="mb-5 md:mb-8 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                className="bg-transparent outline-none border-b pr-9 pb-3 mb-2 block w-full border-gray-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-2 top-1"
              >
                {showPassword ? (
                  <IoEyeOutline className="text-xl" />
                ) : (
                  <IoEyeOffOutline className="text-xl" />
                )}
              </span>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            {/* Forget Password */}
            <div className="flex my-6 text-[13px] xs:text-base justify-end items-center">
              <div className="  gap-1 xs:gap-3 items-center hidden">
                <input id="remember" className="xs:scale-150" type="checkbox" />
                <label htmlFor="remember" className="text-primaryTextColor">
                  Remember Me
                </label>
              </div>
              <Link
                className="text-red-600 hover:underline duration-300"
                to="/auth/forgetPassword"
              >
                Forget Password?
              </Link>
            </div>
            {/* Submit btn */}
            <button
              type="submit"
              className={`hover:bg-transparent hover:text-primaryBgColor border-2 border-primaryBgColor duration-500 w-full flex items-center justify-center py-2 sm:py-3 rounded bg-primaryBgColor font-medium text-white cursor-pointer group h-12 ${
                loading ? 'opacity-80' : 'opacity-100'
              }`}
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <ImSpinner9 className="animate-spin text-white text-lg group-hover:text-primaryBgColor" />
              ) : (
                'Sign in'
              )}
            </button>
            <p className="flex gap-2 text-sm xs:text-base my-4 md:my-6 font-medium items-center justify-center text-center">
              <span className="text-[#101828]">New User?</span>
              <Link
                className="text-primaryBgColor hover:underline duration-300"
                to="/auth/signup"
              >
                Create an account
              </Link>
            </p>
            <hr className="mb-5 md:mb-8" />
            {/* Google sign in btn */}
            <button
              type="button"
              onClick={() => handleLoginWithGoogle()}
              className="w-full bg-white text-center flex border rounded-lg py-3 gap-3 font-medium justify-center items-center"
            >
              {sslLoading ? (
                <ImSpinner9 className="animate-spin text-primaryBgColor text-lg" />
              ) : (
                <span className="flex gap-3">
                  <img
                    className="size-6 object-cover"
                    src={google}
                    alt="google"
                  />
                  <span>Continue with Google</span>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
