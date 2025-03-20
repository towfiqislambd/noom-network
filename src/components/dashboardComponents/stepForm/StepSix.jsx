import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const StepSix = ({ step, setStep, allFormData, setAllFormData }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // Watch the input values to update total automatically
  const purchasePrice = watch('purchase_price') || 0;
  const repairsAndImprovements = watch('repairs_and_improvemants') || 0;

  // Calculate total whenever inputs change
  useEffect(() => {
    const purchaseVal = parseFloat(purchasePrice) || 0;
    const repairsVal = parseFloat(repairsAndImprovements) || 0;
    setTotalPrice(purchaseVal + repairsVal);
  }, [purchasePrice, repairsAndImprovements]);

  const onSubmit = (data) => {
    if (data) {
      // Include the current totalPrice in your form data
      const updatedData = {
        ...data,
        total_cost: totalPrice, // Override with the current totalPrice value
      };

      setAllFormData({ ...allFormData, ...updatedData });
      setStep(step + 1);
    }
  };
  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="xs:text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">
        Acquisition and Current Valuation (Enter zero for any required values
        that do not apply)
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-5">
          {/* Purchase Price */}
          <div className="self-end">
            <label
              htmlFor="purchase_price"
              className="xs:text-lg md:text-xl font-medium"
            >
              Purchase Prices
            </label>
            <input
              id="purchase_price"
              type="number"
              {...register('purchase_price', { required: true })}
              placeholder="Enter purchase prices"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.purchase_price && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Date of Purchase */}
          <div className="self-end">
            <label
              htmlFor="purchase_date"
              className="xs:text-lg md:text-xl font-medium"
            >
              Date of Purchase
            </label>
            <input
              id="purchase_date"
              type="date"
              {...register('purchase_date', { required: true })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.purchase_date && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Initial Repairs & Improvements */}
          <div className="self-end">
            <label
              htmlFor="repairs_and_improvemants"
              className="xs:text-lg md:text-xl font-medium"
            >
              Initial Repairs & Improvements
            </label>
            <input
              id="repairs_and_improvemants"
              type="number"
              {...register('repairs_and_improvemants', { required: true })}
              placeholder="Enter repair amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.repairs_and_improvemants && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Current Value of Property */}
          <div className="self-end">
            <label
              htmlFor="current_value"
              className="xs:text-lg md:text-xl font-medium"
            >
              Current Value of Property
            </label>
            <input
              id="current_value"
              type="number"
              {...register('current_value', { required: true })}
              placeholder="Enter property current price"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.current_value && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Total Closing Costs */}
          <div className="self-end">
            <label
              htmlFor="total_closing_cost"
              className="xs:text-lg md:text-xl font-medium"
            >
              Total Closing Costs
            </label>
            <input
              id="total_closing_cost"
              type="number"
              {...register('total_closing_cost', { required: true })}
              placeholder="Enter repair amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.total_closing_cost && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Total Cost */}
          <div className="self-end">
            <label className="xs:text-lg md:text-xl font-medium">
              Total Cost
            </label>
            <input
              readOnly
              {...register('total_cost')}
              value={`${totalPrice}`}
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
          </div>
        </div>
        {/* Next, Prev btn */}
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

export default StepSix;
