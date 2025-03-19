import { useForm } from 'react-hook-form';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { ImSpinner9 } from 'react-icons/im';
import { useUserPasswordUpdate } from '@/hooks/auth.hook';

const UpdatePasswordModal = ({ setOpen }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //   mutation:

  const { mutateAsync: userPasswordUpdateMutation } =
    useUserPasswordUpdate(setLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   handlers:
  const onSubmit =async (data) => {
    if(data){
        await userPasswordUpdateMutation(data);
        setOpen(false);
        reset();
    }
  };
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl text-headingTextColor font-semibold">
          Change Password
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="">
            <label
              htmlFor="current_password"
              className="font-medium block w-full mb-[6px] text-black"
            >
              Enter Old Password
            </label>
            <div className="relative border border-gray-800 rounded-md">
              <input
                id="current_password"
                type={showPassword ? 'text' : 'password'}
                {...register('current_password', {
                  required: 'Password is required',
                })}
                placeholder="Password"
                className="bg-transparent outline-none text-black rounded-md pr-9  py-3 pl-4 block w-full"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
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
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="font-medium block w-full mb-[6px] text-black "
            >
              Enter New Password
            </label>
            <div className="relative border border-gray-800 rounded-md">
              <input
                type={showNewPassword ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                className="bg-transparent outline-none text-black rounded-md pr-9  py-3 pl-4 block w-full"
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
              >
                {showNewPassword ? (
                  <IoEyeOutline className="text-xl" />
                ) : (
                  <IoEyeOffOutline className="text-xl" />
                )}
              </span>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="pb-2">
            <label
              htmlFor="password_confirmation"
              className="font-medium block w-full mb-[6px] text-black"
            >
              Re-type Password
            </label>
            <div className="relative border border-gray-800 rounded-md">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('password_confirmation', {
                  required: 'Password is required',
                })}
                placeholder="Password"
                className="bg-transparent text-black outline-none   rounded-md pr-9  py-3 pl-4 block w-full"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <IoEyeOutline className="text-xl" />
                ) : (
                  <IoEyeOffOutline className="text-xl" />
                )}
              </span>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            //   onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full rounded py-2 text-center bg-primaryBgColor text-white h-10"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin text-white text-lg group-hover:text-primaryBgColor" />
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
      </DialogDescription>
    </DialogContent>
  );
};

export default UpdatePasswordModal;
