import forgetPassBg from '../../assets/forgetPasswordBg.png';
import OtpInput from 'react-otp-input';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useVerifyOtp } from '@/hooks/auth.hook';
import { ImSpinner9 } from 'react-icons/im';
import useAuth from '@/hooks/useAuth';

const VerifyOTP = () => {
  const location = useLocation();
  const email = location.state?.email;
  const { loading } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   mutation:
  const { mutateAsync: verifyOtpMutation } = useVerifyOtp(reset);

  // Catch OTP here..
  const onSubmit = async (data) => {
    if (data.otp) {
      const updatedData = {
        email,
        otp: data.otp,
      };
      await verifyOtpMutation(updatedData);
      reset();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen max-h-screen">
      <div className="container max-w-[450px] xl:max-w-[987px] xl:grid items-center gap-14 grid-cols-2">
        <div className="w-full hidden xl:block">
          <img
            src={forgetPassBg}
            alt="bg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 shadow rounded-lg p-6 sm:p-10 bg-[#F2F4F7]"
          >
            <h3 className="my-5 xl:my-0 text-headingTextColor font-semibold text-2xl sm:text-3xl mb-3">
              Enter 4 digit code
            </h3>
            <span className="text-[#4F4F4F] font-medium max-w-[393px]">
              Enter the 4-digit code sent to your{' '}
              <span className="pr-2">{email}</span>
              verification.
            </span>
            {/* otp field */}
            <div id="otp_container" className="sm:mt-10 mt-6 mb-7">
              <Controller
                name="otp"
                control={control}
                rules={{
                  required: 'OTP is required',
                  minLength: { value: 4, message: 'OTP must be 4 digits' },
                }}
                render={({ field }) => (
                  <OtpInput
                    {...field}
                    value={field.value || ''}
                    onChange={field.onChange}
                    numInputs={4}
                    renderSeparator={false}
                    renderInput={(props) => <input {...props} />}
                  />
                )}
              />
              {errors.otp && (
                <p className="text-red-500 text-center mt-3">
                  {errors.otp.message}
                </p>
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

export default VerifyOTP;
