import { useCreateProperty } from '@/hooks/cms.mutations';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const StepNine = ({
  step,
  setStep,
  allFormData,
  setAllFormData,
  totalIncome,
}) => {
  const [loading, setLoading] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(0);
  const [remainingIncome, setRemainingIncome] = useState(totalIncome);

  // mutation:
  const { mutateAsync: createPropertyMutation } = useCreateProperty(setLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      totalMonthlyIncome: totalIncome,
    },
  });

  // Watch all expense fields
  const watchedFields = watch([
    'monthly_tax',
    'property_managment',
    'monthly_insurance',
    'average_vacancy',
    'total_unitlities_amount',
    'other_expense',
  ]);

  // Calculate current expense whenever any expense field changes
  useEffect(() => {
    // Convert watched fields to numbers, defaulting to 0 if empty or NaN
    const expenses = watchedFields.map((val) => Number(val) || 0);

    // Sum up all expenses except monthly_rent
    const totalExpense = expenses.reduce((sum, expense) => sum + expense, 0);

    // Update current expense
    setCurrentExpense(totalExpense);

    // Calculate remaining income
    const newRemainingIncome = totalIncome - totalExpense;
    setRemainingIncome(newRemainingIncome);

    // Set values for form submission
    setValue('cuurent_expense', totalExpense);
    setValue('totalMonthlyIncome', newRemainingIncome);
  }, [watchedFields, totalIncome, setValue]);

  const onSubmit = async (data) => {
    if (data) {
      const updatedData = {
        ...allFormData,
        ...data,
        other_expense: [data.other_expense], // Wrap only this field in an array
        total_monthly_expense: currentExpense,
        total_monthly_income: remainingIncome,
      };

      setAllFormData(updatedData);
      await createPropertyMutation(updatedData);

      setStep(step + 1);
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="xs:text-lg md:text-2xl font-semibold mb-7 md:mb-10 text-headingTextColor">
        Monthly Expense (Enter zero for any required values that do not apply)
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-7"
      >
        <div className="grid lg:grid-cols-2 gap-3 md:gap-5">
          {/* Monthly Property Taxes */}
          <div className="self-end">
            <label
              htmlFor="monthly_tax"
              className="xs:text-lg md:text-xl font-medium"
            >
              Monthly Property Taxes
            </label>
            <input
              id="monthly_tax"
              type="number"
              {...register('monthly_tax', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter monthly property taxes"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.monthly_tax && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Monthly Property Management */}
          <div className="self-end">
            <label
              htmlFor="property_managment"
              className="xs:text-lg md:text-xl font-medium"
            >
              Monthly Property Management
            </label>
            <input
              id="property_managment"
              type="number"
              {...register('property_managment', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter property management cost"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.property_managment && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Monthly Insurance */}
          <div className="self-end">
            <label
              htmlFor="monthly_insurance"
              className="xs:text-lg md:text-xl font-medium"
            >
              Monthly Insurance
            </label>
            <input
              id="monthly_insurance"
              type="number"
              {...register('monthly_insurance', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter monthly insurance"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.monthly_insurance && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Average Vacancy */}
          <div className="self-end">
            <label
              htmlFor="average_vacancy"
              className="xs:text-lg md:text-xl font-medium"
            >
              Average Vacancy
            </label>
            <input
              id="average_vacancy"
              type="number"
              {...register('average_vacancy', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter average vacancy amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.average_vacancy && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Maintenance Reserves as % of Income */}
          <div className="self-end">
            <label
              htmlFor="monthly_rent"
              className="xs:text-lg md:text-xl font-medium"
            >
              Maintenance Reserves as % of Income
            </label>
            <input
              id="monthly_rent"
              type="number"
              {...register('monthly_rent', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter maintenance reserves"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.monthly_rent && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Utilities Leave Blank if Tenant Pays */}
          <div className="self-end">
            <label
              htmlFor="total_unitlities_amount"
              className="xs:text-lg md:text-xl font-medium"
            >
              Utilities Leave Blank if Tenant Pays
            </label>
            <input
              id="total_unitlities_amount"
              type="number"
              {...register('total_unitlities_amount', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter utilities amount"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.total_unitlities_amount && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Others Expense Description */}
          <div className="self-end">
            <label
              htmlFor="other_expense"
              className="xs:text-lg md:text-xl font-medium"
            >
              Others Expense Description
            </label>
            <input
              id="other_expense"
              type="number"
              {...register('other_expense', {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              placeholder="Enter other expenses"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.otherExpenses && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          {/* Current Expense Amount */}
          <div className="self-end">
            <label
              htmlFor="total_monthly_expense"
              className="xs:text-lg md:text-xl font-medium"
            >
              Current Expense Amount
            </label>
            <input
              readOnly
              id="total_monthly_expense"
              type="number"
              {...register('total_monthly_expense')}
              value={currentExpense}
              placeholder="Total current expenses"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300 bg-gray-100"
            />
          </div>

          {/* Total Monthly Income */}
          <div className="self-end">
            <label
              htmlFor="total_monthly_income"
              className="xs:text-lg md:text-xl font-medium"
            >
              Total Monthly Income
            </label>
            <input
              readOnly
              id="total_monthly_income"
              type="number"
              {...register('total_monthly_income')}
              value={remainingIncome}
              placeholder="Remaining monthly income"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300 bg-gray-100"
            />
          </div>
        </div>

        {/* Next, Prev btn */}
        <div className="flex flex-col justify-center items-center gap-3 lg:pt-10">
          <button
            onClick={handlePrevStep}
            className="px-8 md:px-20 cursor-pointer py-2 md:py-3 font-medium rounded-lg border border-primaryBgColor"
          >
            Back
          </button>
          <button
            type="submit"
            className={`w-full lg:w-auto block lg:inline lg:px-72 py-2 md:py-3 font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor ${
              loading ? 'cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Loading' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepNine;
