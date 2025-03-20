import { useForm } from 'react-hook-form';

const StepFive = ({ step, setStep, allFormData, setAllFormData }) => {
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
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="text-xl xs:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">
        Let’s get to know more about your property.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-4 xs:gap-x-8 xs:gap-y-5">
          {/* Property Type */}
          <div className="self-end">
            <label className="xs:text-lg md:text-xl font-medium">
              Property Type
            </label>
            <select
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              {...register('propertyType', { required: true })}
            >
              <option value="Triplex">Triplex</option>
              <option value="Condo / Apartment">Condo / Apartment</option>
              <option value="Single family house">Single family house</option>
              <option value="Duplex">Duplex</option>
            </select>
            {errors.propertyType && (
              <span className="text-red-400">Select one</span>
            )}
          </div>
          {/* Number of Units */}
          <div className="self-end">
            <label
              htmlFor="numberOfUnits"
              className="xs:text-lg md:text-xl font-medium"
            >
              Number of Units
            </label>
            <input
              id="numberOfUnits"
              type="number"
              {...register('numberOfUnits', { required: true })}
              placeholder="Enter number of units"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.numberOfUnits && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 1 Bedrooms */}
          <div className="self-end">
            <label
              htmlFor="unitOneBedrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 1 Bedrooms
            </label>
            <input
              id="unitOneBedrooms"
              type="number"
              {...register('unitOneBedrooms', { required: true })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitOneBedrooms && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 1 Bathrooms (including partial) */}
          <div className="self-end">
            <label
              htmlFor="unitOneBathrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 1 Bathrooms (including partial)
            </label>
            <input
              id="unitOneBathrooms"
              type="number"
              {...register('unitOneBathrooms', { required: true })}
              placeholder="Enter number of bathrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitOneBathrooms && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 2 Bedrooms */}
          <div className="self-end">
            <label
              htmlFor="unitTwoBedrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 2 Bedrooms
            </label>
            <input
              id="unitTwoBedrooms"
              type="number"
              {...register('unitTwoBedrooms', { required: true })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitTwoBedrooms && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 2 Bathrooms */}
          <div className="self-end">
            <label
              htmlFor="unitTwoBathrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 2 Bathrooms
            </label>
            <input
              id="unitTwoBathrooms"
              type="number"
              {...register('unitTwoBathrooms', { required: true })}
              placeholder="Enter number of bathrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitTwoBathrooms && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 3 Bedrooms */}
          <div className="self-end">
            <label
              htmlFor="unitThreeBedrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 3 Bedrooms
            </label>
            <input
              id="unitThreeBedrooms"
              type="number"
              {...register('unitThreeBedrooms', { required: true })}
              placeholder="Enter number of bedrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitThreeBedrooms && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {/* Unit 3 Bathrooms */}
          <div className="self-end">
            <label
              htmlFor="unitThreeBathrooms"
              className="xs:text-lg md:text-xl font-medium"
            >
              Unit 3 Bathrooms
            </label>
            <input
              id="unitThreeBathrooms"
              type="number"
              {...register('unitThreeBathrooms', { required: true })}
              placeholder="Enter number of bathrooms"
              className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
            {errors.unitThreeBathrooms && (
              <span className="text-red-400">This field is required</span>
            )}
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

export default StepFive;
