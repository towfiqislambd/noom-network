import { useForm } from 'react-hook-form';
import forgetPassBg from '../../assets/forgetPasswordBg.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useResetPassword } from '@/hooks/auth.hook';
import { ImSpinner9 } from 'react-icons/im';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const { loading } = useAuth();
  const location = useLocation();
  const email = location?.state?.email;
  const key = location?.state?.key;

  // states:
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //mutation:
  const { mutateAsync: resetPasswordMutation } = useResetPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data?.password == data?.password_confirmation) {
      const updatedData = {
        email,
        key,
        password: data.password,
        password_confirmation: data.password_confirmation,
      };
      await resetPasswordMutation(updatedData);
      reset();
    } else {
      toast.error('Passwords do not match');
      return;
    }
  };

  return (
    <div className="flex my-5 xl:my-0 justify-center items-center min-h-screen max-h-screen">
      <div className="container max-w-[450px] xl:max-w-[987px] xl:grid items-center gap-14 grid-cols-2">
        {/* left side image */}
        <div className="w-full hidden xl:block">
          <img
            src={forgetPassBg}
            alt="bg"
            className="object-cover w-full h-full"
          />
        </div>

        {/* form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 shadow rounded-lg p-5 sm:p-10 bg-[#F2F4F7]"
          >
            <h3 className="text-headingTextColor font-semibold text-2xl sm:text-3xl mb-3">
              Reset Password
            </h3>
            <span className="text-[#4F4F4F] font-medium max-w-[393px]">
              Enter a new password below the input, and make sure the password
              is enough strength
            </span>
            {/* New Password field */}
            <div className="mb-5 mt-7 md:mb-8 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                })}
                placeholder="Enter New Password"
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
              {errors.newPassword && (
                <span className="text-red-500">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
            {/* Confirm New password field */}
            <div className="mb-5 md:mb-8 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('password_confirmation', {
                  required: 'Confirm Password is required',
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
              {errors.confirmNewPassword && (
                <span className="text-red-500">
                  {errors.confirmNewPassword.message}
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
                'Verify'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
