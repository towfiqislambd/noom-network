import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const StepEight = ({
  step,
  setStep,
  allFormData,
  setAllFormData,
  setTotalIncome,
}) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      unit_rent: '',
      other_income: '',
    },
  });

  const gridRef = useRef(null);

  // Watch the input values
  const unitRent = watch('unit_rent');
  const otherIncome = watch('other_income');

  // Calculate total monthly income whenever unit_rent or other_income changes
  useEffect(() => {
    // Convert to numbers, default to 0 if empty
    const rent = parseFloat(unitRent) || 0;
    const income = parseFloat(otherIncome) || 0;

    // Calculate total and set the value
    const total = rent + income;
    setValue(
      'total_monthly_income',
      total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [unitRent, otherIncome, setValue]);

  const onSubmit = (data) => {
    if (data) {
      const cleanTotal = parseFloat(
        data.total_monthly_income.replace(/[^0-9.-]+/g, '')
      );
      setTotalIncome(cleanTotal);

      const transformedData = {
        unit_rent: [data.unit_rent],
        other_income: [data.other_income],
        total_monthly_income: data.total_monthly_income,
      };

      setAllFormData({
        ...allFormData,
        ...transformedData,
      });
      setStep(step + 1);
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">
        Monthly Income
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-7"
      >
        <div ref={gridRef} className="w-full space-y-4">
          {/* Unit Monthly Rent and Other Income */}
          <div className="flex w-full gap-5">
            <div className="w-full">
              <label
                htmlFor={`unit_rent`}
                className="xs:text-lg md:text-xl font-medium"
              >
                Total Monthly Rent
              </label>
              <input
                id={`unit_rent`}
                    step="any"
                type="number"
                {...register(`unit_rent`, {
                  required: true,
                  min: 0,
                  valueAsNumber: true
                })}
                placeholder="Enter your monthly rent"
                className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              />
            </div>
            {/* Others Income */}
            <div className="w-full">
              <label
                htmlFor={`other_income`}
                className="xs:text-lg md:text-xl font-medium"
              >
                Total Others Income
              </label>
              <input
                id={`other_income`}
                  step="any"
                type="number"
                {...register(`other_income`, {
                  required: true,
                  min: 0,
                  valueAsNumber: true
                })}
                placeholder="Car parking"
                className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              />
            </div>
          </div>

          {/* Total Monthly Income */}
          <div className="self-end w-full col-span-2">
            <label className="xs:text-lg md:text-xl font-medium">
              Total Monthly Income
            </label>
            <input
              type="text"
              readOnly
              {...register('total_monthly_income', { required: true })}
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300 bg-gray-100"
            />
          </div>
        </div>

        {/* Next, Prev btn */}
        <div className="flex justify-center items-center gap-3 pt-3 md:mt-10">
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

export default StepEight;
