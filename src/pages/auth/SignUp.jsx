import { useForm } from 'react-hook-form';
import signUpBg from '../../assets/loginBg.png';
import { Link } from 'react-router-dom';
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
      // console.log('Google login success:', tokenResponse);
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

        // console.log(data);
        const updatedData = {
          token,
          provider: 'google',
          username: data?.name,
          email: data?.email,
          avatar: data?.picture,
        };
        // console.log(updatedData);
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
              disabled={sslLoading}
              type="button"
              onClick={() => handleLoginWithGoogle()}
              className="w-full bg-white text-center flex border rounded-lg py-3 gap-3 font-medium justify-center items-center"
            >
              {sslLoading ? (
                <ImSpinner9 className="animate-spin text-primaryBgColor text-lg" />
              ) : (
                <span className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_22196_948)">
                      <path
                        d="M4.43145 12.5865L3.73527 15.1854L1.19078 15.2393C0.430352 13.8288 -0.000976562 12.2151 -0.000976562 10.5003C-0.000976562 8.84203 0.402305 7.27828 1.11715 5.90137H1.1177L3.38301 6.31668L4.37535 8.5684C4.16766 9.17391 4.05445 9.82391 4.05445 10.5003C4.05453 11.2343 4.1875 11.9377 4.43145 12.5865Z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M19.8242 8.63184C19.939 9.23676 19.9989 9.86148 19.9989 10.5C19.9989 11.2159 19.9236 11.9143 19.7802 12.5879C19.2934 14.8802 18.0214 16.8818 16.2594 18.2983L16.2588 18.2978L13.4055 18.1522L13.0017 15.6313C14.1709 14.9456 15.0847 13.8725 15.566 12.5879H10.2188V8.63184H15.644H19.8242Z"
                        fill="#518EF8"
                      />
                      <path
                        d="M16.2586 18.2975L16.2591 18.298C14.5454 19.6755 12.3684 20.4996 9.99867 20.4996C6.19043 20.4996 2.87945 18.3711 1.19043 15.2387L4.43109 12.5859C5.27559 14.8398 7.44977 16.4442 9.99867 16.4442C11.0943 16.4442 12.1207 16.148 13.0014 15.631L16.2586 18.2975Z"
                        fill="#28B446"
                      />
                      <path
                        d="M16.382 2.80219L13.1425 5.45437C12.2309 4.88461 11.1534 4.55547 9.99906 4.55547C7.39246 4.55547 5.17762 6.23348 4.37543 8.56812L1.11773 5.90109H1.11719C2.78148 2.6923 6.13422 0.5 9.99906 0.5C12.4254 0.5 14.6502 1.3643 16.382 2.80219Z"
                        fill="#F14336"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_22196_948">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(-0.000976562 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
