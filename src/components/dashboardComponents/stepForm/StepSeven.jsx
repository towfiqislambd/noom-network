import { useForm } from 'react-hook-form';

const StepSeven = ({ step, setStep, allFormData, setAllFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAllFormData({ ...allFormData, ...data });
    if (data) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="text-lg xs:text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">
        Current Loan Information (If you have loan)
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 md:space-y-7"
      >
        <div className="grid lg:grid-cols-2 gap-x-8">
          {/* Current Loan Balance */}
          <div className="self-end">
            <label
              htmlFor="curruent_lone_balance"
              className="xs:text-lg md:text-xl font-medium"
            >
              Current Loan Amount
            </label>
            <input
              id="curruent_lone_balance"
              type="number"
                 step="any"
              {...register('curruent_lone_balance', { required: true,valueAsNumber: true })}
              placeholder="Enter purchase price"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.curruent_lone_balance && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Loan Term */}
          <div className="self-end">
            <label
              htmlFor="lone_term"
              className="xs:text-lg md:text-xl font-medium"
            >
              Total Loan Amount
            </label>
            <input
              id="lone_term"
              type="number"
                step="any"
              {...register('lone_term', { required: true, valueAsNumber: true })}
              placeholder="Enter repair amount"
                
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.lone_term && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Amount Instead of a date */}
          <div className="self-end">
            <label
              htmlFor="instead_of_date"
              className="xs:text-lg md:text-xl font-medium"
            >
              {/* Amount Instead of a date */}
              Loan Start Date
            </label>
            <input
              id="instead_of_date"
              type="date"
              {...register('instead_of_date', { required: true })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.instead_of_date && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
            <div className="self-end">
            <label
              htmlFor="lone_organization_date"
              className="xs:text-lg md:text-xl font-medium"
            >
              {/* Loan Organization Date */}
              Loan End Date
            </label>
            <input
              id="lone_organization_date"
              type="date"
             
              {...register('lone_organization_date', { required: true,  })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.lone_organization_date && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-4 md:gap-y-5 gap-x-8">
          {/* Loan Organization Date
          <div className="self-end">
            <label
              htmlFor="lone_organization_date"
              className="xs:text-lg md:text-xl font-medium"
            >
          
              Loan End Date
            </label>
            <input
              id="lone_organization_date"
              type="date"
             
              {...register('lone_organization_date', { required: true,  })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.lone_organization_date && (
              <span className="text-red-400">This field is required</span>
            )}
          </div> */}
       
          {/* Interest rate */}
          <div className="self-end">
            <label
              htmlFor="insterest_rate"
              className="xs:text-lg md:text-xl font-medium"
            >
              Interest rate
            </label>
            <input
              id="insterest_rate"
              type="number"
                 step="any"
              {...register('insterest_rate', { required: true ,valueAsNumber: true})}
              placeholder="Enter property current price"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.insterest_rate && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
        </div>
        {/* No loan property btn */}
        <button
          onClick={() => setStep(step + 1)}
          className="block py-1 xs:py-2 md:py-3 rounded-lg text-center font-medium w-full md:text-lg text-[#025397] border border-[#025397]"
        >
          No loan on this property
        </button>
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

export default StepSeven;
