import { useForm } from "react-hook-form"

const StepTwo = ({ step, setStep, allFormData, setAllFormData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        if (data) {
            setAllFormData({ ...allFormData, ...data })
            setStep(step + 1)

        }
    }
    const handlePrevStep = (e) => {
        e.preventDefault()
        setStep(step - 1)
    }
    return (
        <div className="bg-white rounded-xl shadow p-5 lg:px-[40px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
            <h2 className="text-xl xs:text-2xl font-semibold mb-7 md:mb-10 text-headingTextColor">Let’s get to know your goals.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-2 gap-[18px] md:gap-7 3xl:gap-10">
                    <div className="self-end">
                        <label htmlFor="cashFlow" className="xs:text-lg md:text-xl font-medium">What is your monthly cash flow going?</label>
                        <input id="cashFlow" type="number" {...register("cashFlowAmount", { required: true })} placeholder="Enter Amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        <p className="text-primaryTextColor text-sm md:text-base">Calculation : ( Rents - Expenses -  Mortgage payment = Cashlow) </p>
                        {errors.cashFlowAmount && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div className="self-end">
                        <label htmlFor="growth" className="xs:text-lg md:text-xl font-medium">What is your real estate net worth goal?</label>
                        <input id="growth" type="number" {...register("growthAmount", { required: true })} placeholder="Enter Amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        <p className="text-primaryTextColor text-sm md:text-base">Calculation : ( Rental portfolio valuation - Loan balance  = Net worth)</p>
                        {errors.growthAmount && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div className="self-end">
                        <label htmlFor="goals" className="xs:text-lg md:text-xl font-medium">When do you want to achieve these goals?</label>
                        <select className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" {...register("goals", { required: true })}>
                            <option value="1 year">1 year</option>
                            <option value="2 year">2 year</option>
                            <option value="3 year">3 year</option>
                            <option value="4 year">4 year</option>
                        </select>
                        {errors.goals && <span className="text-red-400">Select one</span>}
                    </div>
                </div>
                {/* Next, Prev btn */}
                <div className="flex justify-center items-center gap-3 pt-6 md:mt-10">
                    <button onClick={handlePrevStep} className="px-8 md:px-20 cursor-pointer py-2 md:py-3 font-medium rounded-lg border border-primaryBgColor">Back</button>
                    <button type="submit" className="px-5 md:px-20 py-2 md:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor">Continue</button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;