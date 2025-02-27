import { useForm } from "react-hook-form"
import forgetPassBg from "../../assets/forgetPasswordBg.png"
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        if (data) {
            navigate('/auth/verifyOTP')
        }
        console.log(data)
    }

    return (
        <div className="flex my-5 xl:my-0 justify-center items-center min-h-screen max-h-screen">
            <div className="container max-w-[450px] xl:max-w-[987px] xl:grid items-center gap-14 grid-cols-2">
                <div className="w-full hidden xl:block">
                    <img src={forgetPassBg} alt="bg" className="object-cover w-full h-full" />
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="border-2 shadow rounded-lg p-7 sm:p-10 bg-[#F2F4F7]">
                        <h3 className="text-headingTextColor font-semibold text-2xl sm:text-3xl mb-2 md:mb-3">Forgot Password</h3>
                        <span className="text-[#4F4F4F] font-medium max-w-[393px]">Enter your email for the verification process, we will send code to your email</span>
                        {/* Email field */}
                        <div className="my-5 md:my-7 xl:my-10">
                            <input type="email" {...register("email", { required: true })} placeholder="Email Address" className="bg-transparent outline-none border-b pb-3 mb-2 block w-full border-gray-400" />
                            {errors.email && <span className="text-red-500">Enter Email Address</span>}
                        </div>
                        {/* Submit btn */}
                        <input type="submit" value='Continue' className="block hover:bg-transparent hover:text-primaryBgColor border-2 border-primaryBgColor duration-500 w-full py-2 sm:py-3 rounded bg-primaryBgColor font-medium text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;