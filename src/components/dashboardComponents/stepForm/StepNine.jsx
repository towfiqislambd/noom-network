import { useForm } from "react-hook-form";

const StepNine = ({ step, setStep, allFormData, setAllFormData }) => {
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
    return (
        <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
            <h2 className="xs:text-lg md:text-2xl font-semibold mb-7 md:mb-10 text-headingTextColor">Monthly Expense (Enter zero for any required values that do not apply)</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-7">
                <div className="grid lg:grid-cols-2 gap-3 md:gap-5">
                    {/* Monthly Property Taxes */}
                    <div className="self-end">
                        <label htmlFor="monthlyRent" className="xs:text-lg md:text-xl font-medium">Monthly Property Taxes</label>
                        <input id="monthlyRent" type="number" {...register("monthlyRent", { required: true })} placeholder="Enter your monthly rent" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.monthlyRent && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Monthly Property Management */}
                    <div className="self-end">
                        <label htmlFor="propertyManagement" className="xs:text-lg md:text-xl font-medium">Monthly Property Management</label>
                        <input id="propertyManagement" type="text" {...register("propertyManagement", { required: true })} placeholder="Carparking" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.propertyManagement && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Monthly Insurance */}
                    <div className="self-end">
                        <label htmlFor="monthlyInsurance" className="xs:text-lg md:text-xl font-medium">Monthly Insurance</label>
                        <input id="monthlyInsurance" type="number" {...register("monthlyInsurance", { required: true })} placeholder="Enter your monthly rent" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.monthlyInsurance && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Average Vacancy */}
                    <div className="self-end">
                        <label htmlFor="averageVacancy" className="xs:text-lg md:text-xl font-medium">Average Vacancy</label>
                        <input id="averageVacancy" type="number" {...register("averageVacancy", { required: true })} placeholder="Enter your amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.averageVacancy && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Maintenance Reserves as % of Income */}
                    <div className="self-end">
                        <label htmlFor="reservesIncome" className="xs:text-lg md:text-xl font-medium">Maintenance Reserves as % of Income</label>
                        <input id="reservesIncome" type="number" {...register("reservesIncome", { required: true })} placeholder="Enter your monthly rent" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.reservesIncome && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Utilities Leave Blank if Tenant Pays */}
                    <div className="self-end">
                        <label htmlFor="utilitiesLeave" className="xs:text-lg md:text-xl font-medium">Utilities Leave Blank if Tenant Pays</label>
                        <input id="utilitiesLeave" type="number" {...register("utilitiesLeave", { required: true })} placeholder="Enter your amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.utilitiesLeave && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Others Expense Description */}
                    <div className="self-end">
                        <label htmlFor="otherExpenses" className="xs:text-lg md:text-xl font-medium">Others Expense Description</label>
                        <input id="otherExpenses" type="number" {...register("otherExpenses", { required: true })} placeholder="Enter your monthly rent" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.otherExpenses && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Current Expense Amount */}
                    <div className="self-end">
                        <label htmlFor="currentExpenseAmount" className="xs:text-lg md:text-xl font-medium">Current Expense Amount</label>
                        <input id="currentExpenseAmount" type="number" {...register("currentExpenseAmount", { required: true })} placeholder="Enter your monthly rent" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.currentExpenseAmount && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Total Monthly Income */}
                    <div className="self-end">
                        <label htmlFor="totalMonthlyIncome" className="xs:text-lg md:text-xl font-medium">Total Monthly Income</label>
                        <input id="totalMonthlyIncome" type="number" {...register("totalMonthlyIncome", { required: true })} placeholder="Total monthly income" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.totalMonthlyIncome && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Annual NOI */}
                    <div className="self-end">
                        <label htmlFor="annualNoI" className="xs:text-lg md:text-xl font-medium">Annual NOI</label>
                        <input id="annualNoI" type="number" {...register("annualNoI", { required: true })} className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.annualNoI && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                {/* Next, Prev btn */}
                <div className="flex flex-col justify-center items-center gap-3 lg:pt-10">
                    {/* <button onClick={e => e.preventDefault()} className="py-2 md:py-3 px-52 rounded-lg text-center font-medium text-lg text-[#025397] border border-[#025397] ">Add others Expenses</button> */}
                    <button type="submit" className="w-full lg:w-auto block lg:inline lg:px-72 py-2 md:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor">Save</button>
                </div>
            </form >
        </div >
    );
};

export default StepNine;