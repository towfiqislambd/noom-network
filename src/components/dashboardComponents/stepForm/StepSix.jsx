import { useForm } from "react-hook-form";

const StepSix = ({ step, setStep, allFormData, setAllFormData }) => {
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
        <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
            <h2 className="xs:text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">Acquisition and Current Valuation (Enter zero for any required values that do not apply)</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-5">
                    {/* Purchase Price */}
                    <div className="self-end">
                        <label htmlFor="purchasePrice" className="xs:text-lg md:text-xl font-medium">Purchase Prices</label>
                        <input id="purchasePrice" type="number" {...register("purchasePrice", { required: true })} placeholder="Enter purchase prices" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.purchasePrice && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Date of Purchase */}
                    <div className="self-end">
                        <label htmlFor="purchaseDate" className="xs:text-lg md:text-xl font-medium">Date of Purchase</label>
                        <input id="purchaseDate" type="date" {...register("purchaseDate", { required: true })} placeholder="Enter number of bedrooms" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.purchaseDate && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Initial Repairs & Improvements */}
                    <div className="self-end">
                        <label htmlFor="initialRepairs" className="xs:text-lg md:text-xl font-medium">Initial Repairs & Improvements</label>
                        <input id="initialRepairs" type="number" {...register("initialRepairs", { required: true })} placeholder="Enter repair amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.initialRepairs && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Current Value of Property */}
                    <div className="self-end">
                        <label htmlFor="currentPropertyValue" className="xs:text-lg md:text-xl font-medium">Current Value of Property</label>
                        <input id="currentPropertyValue" type="number" {...register("currentPropertyValue", { required: true })} placeholder="Enter property current price" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.currentPropertyValue && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Total Closing Costs */}
                    <div className="self-end">
                        <label htmlFor="closingCosts" className="xs:text-lg md:text-xl font-medium">Total Closing Costs</label>
                        <input id="closingCosts" type="number" {...register("closingCosts", { required: true })} placeholder="Enter repair amount" className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
                        {errors.closingCosts && <span className="text-red-400">This field is required</span>}
                    </div>
                    {/* Total Cost */}
                    <div className="self-end">
                        <label className="xs:text-lg md:text-xl font-medium">Total Cost</label>
                        <input readOnly defaultValue={`$ ${10000}`} className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300" />
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

export default StepSix;