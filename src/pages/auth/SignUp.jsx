import { useForm } from 'react-hook-form';
import signUpBg from '../../assets/loginBg.png';
import { Link } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { IoEyeOffOutline } from 'react-icons/io5';
import { useRegister, useSocialLogin } from '@/hooks/auth.hook';
import useAuth from '@/hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignUp = () => {
  const { loading } = useAuth();
  const [sslLoading, setSslLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch('password');

  //   mutation:
  const { mutateAsync: registerMutation } = useRegister();
  const { mutateAsync: socialLoginMutation } = useSocialLogin(setSslLoading);

  const onSubmit = async (data) => {
    try {
      await registerMutation(data);
      reset();
    } catch (err) {
      console.log(err);
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
    <div className="flex my-5 xl:my-0 justify-center items-center min-h-screen max-h-screen">
      <div className="container max-w-[450px] xl:max-w-[987px] xl:grid items-center gap-14 grid-cols-2">
        <div className="w-full hidden xl:block">
          <img src={signUpBg} alt="bg" className="object-cover w-full h-full" />
        </div>
        <div className="w-full">
          <form
            id="signUpForm"
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 shadow rounded-lg sm:px-10 px-5 py-5 md:py-10 bg-[#F2F4F7]"
          >
            <h3 className="text-headingTextColor font-semibold text-2xl mb-2 md:mb-3">
              Create Your Account
            </h3>
            <span className="text-[#4F4F4F] font-medium">
              Welcome to Network
            </span>
            {/* Email field */}
            <div className="md:my-8 my-5">
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
            {/* Confirm password field */}
            <div className="mb-5 md:mb-8 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('password_confirmation', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
                placeholder="Confirm Password"
                className="bg-transparent outline-none border-b pr-9 pb-3 mb-2 block w-full border-gray-400"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute cursor-pointer right-2 top-1"
              >
                {showConfirmPassword ? (
                  <IoEyeOutline className="text-xl" />
                ) : (
                  <IoEyeOffOutline className="text-xl" />
                )}
              </span>
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
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
                'Sign Up'
              )}
            </button>

            <p className="flex gap-2 text-sm xs:text-base my-4 md:my-6 font-medium items-center justify-center text-center">
              <span className="text-[#101828]">Already have an account?</span>
              <Link
                className="text-primaryBgColor hover:underline duration-300"
                to="/auth/login"
              >
                Sign In
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

export default SignUp;
