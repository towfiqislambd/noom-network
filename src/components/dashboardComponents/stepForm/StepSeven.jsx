import { useForm } from "react-hook-form";

const StepSeven = ({ step, setStep, allFormData, setAllFormData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        setAllFormData({ ...allFormData, ...data })
        if (data) {
            setStep(step + 1)
        }
    }
    const handlePrevStep = (e) => {
        e.preventDefault()
        setStep(step - 1)
    }
    return (
        <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
            <h2 className="text-lg xs:text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">Current Loan Information (If you have loan)</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-7">
                <div className="grid lg:grid-cols-2 gap-x-8">
                    {/* Current Loan Balance */}
                    <div className="self-end">
                        <label htmlFor="LoanBalance" className="xs:text-lg md:text-xl font-medium">Current Loan Balance</label>
                        <input id="LoanBalance" type="number" {...register("LoanBalance", { required: true })} placeholder="Enter purchase price" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.LoanBalance && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Amount Instead of a date */}
                    <div className="self-end">
                        <label htmlFor="amountDate" className="xs:text-lg md:text-xl font-medium">Amount Instead of a date</label>
                        <input id="amountDate" type="date" {...register("amountDate", { required: true })} placeholder="Enter number of bedrooms" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.amountDate && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-y-4 md:gap-y-5 gap-x-8">
                    {/* Loan Organization Date */}
                    <div className="self-end">
                        <label htmlFor="loanOrganizationDate" className="xs:text-lg md:text-xl font-medium">Loan Organization Date</label>
                        <input id="loanOrganizationDate" type="date" {...register("loanOrganizationDate", { required: true })} placeholder="Enter number of bedrooms" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.loanOrganizationDate && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Loan Term */}
                    <div className="self-end">
                        <label htmlFor="LoanTerm" className="xs:text-lg md:text-xl font-medium">Loan Term</label>
                        <input id="LoanTerm" type="number" {...register("LoanTerm", { required: true })} placeholder="Enter repair amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.LoanTerm && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Interest rate */}
                    <div className="self-end">
                        <label htmlFor="interestRate" className="xs:text-lg md:text-xl font-medium">Interest rate</label>
                        <input id="interestRate" type="number" {...register("interestRate", { required: true })} placeholder="Enter property current price" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.interestRate && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                {/* No loan property btn */}
                <button onClick={() => setStep(step + 1)} className="block py-1 xs:py-2 md:py-3 rounded-lg text-center font-medium w-full md:text-lg text-[#025397] border border-[#025397]">No loan on this property</button>
                {/* Next, Prev btn */}
                <div className="flex justify-center items-center gap-3 pt-3 md:mt-10">
                    <button onClick={handlePrevStep} className="px-8 md:px-20 cursor-pointer py-2 md:py-3 font-medium rounded-lg border border-primaryBgColor">Back</button>
                    <button type="submit" className="px-5 md:px-20 py-2 md:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor">Continue</button>
                </div>
            </form>
        </div>
    );
};

export default StepSeven;