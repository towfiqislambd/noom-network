import { useForm } from "react-hook-form";

const StepTwo = ({ step, setStep, allFormData, setAllFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setAllFormData({ ...allFormData, ...data });
      setStep(step + 1);
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[40px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="text-xl xs:text-2xl font-semibold mb-7 md:mb-10 text-headingTextColor">
        Let’s get to know your goals.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-[18px] md:gap-7 3xl:gap-10">
          {/* Monthly Cash Flow */}
          <div className="self-end">
            <label
              htmlFor="monthly_cash_flow"
              className="xs:text-lg md:text-xl font-medium"
            >
              What is your cash flow goal?
            </label>
            <input
              id="monthly_cash_flow"
              type="number"
               step="any"
              {...register("monthly_cash_flow", {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="Enter Amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            <p className="text-primaryTextColor text-sm md:text-base">
              Calculation : ( Rents - Expenses - Mortgage payment = Cashlow)
            </p>
            {errors.monthly_cash_flow && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Real Estate Net Worth Goal */}
          <div className="self-end">
            <label
              htmlFor="real_estate_gole"
              className="xs:text-lg md:text-xl font-medium"
            >
              What is your real estate net worth goal?
            </label>
            <input
              id="real_estate_gole"
              type="number"
              step="any"
              {...register("real_estate_gole", {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="Enter Amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            <p className="text-primaryTextColor text-sm md:text-base">
              Calculation : ( Rental portfolio valuation - Loan balance = Net
              worth)
            </p>
            {errors.real_estate_gole && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Goal Timeline */}
          <div className="self-end">
            <label
              htmlFor="year"
              className="xs:text-lg md:text-xl font-medium"
            >
              When do you want to achieve these goals?
            </label>
            <select
              id="year"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              {...register("year", { required: true, valueAsNumber: true })}
            >
              <option value="">Select one</option>
              <option value="4">4 years</option>
              <option value="8">8 years</option>
              <option value="10">10 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
            {errors.year && (
              <span className="text-red-400">Select one</span>
            )}
          </div>

          {/* Appreciation Rate */}
          <div className="self-end">
            <label
              htmlFor="appreciation_rate"
              className="xs:text-lg md:text-xl font-medium"
            >
              Appreciation rate
            </label>
            <input
              id="appreciation_rate"
              type="number"
              step="any"
              {...register("appreciation_rate", {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="Enter Amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.appreciation_rate && (
              <span className="text-red-400">
                Appreciation rate is required
              </span>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-3 pt-6 md:mt-10">
          <button
            onClick={handlePrevStep}
            className="px-8 md:px-20 cursor-pointer py-2 md:py-3 font-medium rounded-lg border border-primaryBgColor"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-5 md:px-20 py-2 md:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
