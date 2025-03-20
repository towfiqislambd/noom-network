import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const StepEight = ({ step, setStep, allFormData, setAllFormData }) => {
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState(0);
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

  // For new input field
  const gridRef = useRef(null);
  const addOtherIncome = (e) => {
    e.preventDefault();
    if (!gridRef.current) return;

    // Create the new div container
    const newDiv = document.createElement('div');

    // Create label
    const label = document.createElement('label');
    label.className = 'xs:text-lg md:text-xl font-medium';
    label.innerText = 'Others Income';

    // Create input field
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter your amount';
    input.className =
      'block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300';

    // Append label and input to the new div
    newDiv.appendChild(label);
    newDiv.appendChild(input);

    // Append the new div to the grid container
    gridRef.current.appendChild(newDiv);
  };

  const [totalUnit, setTotalInput] = useState(3);

  return (
    <div className="bg-white rounded-xl shadow p-5 lg:px-[50px] lg:py-[50px] 3xl:px-[180px] 3xl:py-[108px]">
      <h2 className="text-xl md:text-2xl font-semibold mb-5 md:mb-10 text-headingTextColor">
        Monthly Income
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-7"
      >
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-5">
          {/* Unit 1 Monthly Rent */}
          {Array(totalUnit)
            .fill()
            .map((_, index) => (
              <div key={index} className=''>
                <div className="self-end">
                  <label
                    htmlFor="unitOneMonthlyRent"
                    className="xs:text-lg md:text-xl font-medium"
                  >
                    Unit {index + 1} Monthly Rent
                  </label>
                  <input
                    id="unitOneMonthlyRent"
                    type="number"
                    {...register(`monthly_rent_${index + 1}`, {
                      required: true,
                    })}
                    placeholder="Enter your monthly rent"
                    className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
                  />
                  {errors.unitOneMonthlyRent && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>
                {/* Others Income */}
                <div className="self-end">
                  <label
                    htmlFor="otherIncome"
                    className="xs:text-lg md:text-xl font-medium"
                  >
                    Others Income
                  </label>
                  <input
                    id="otherIncome"
                    type="number"
                    {...register('otherIncome', { required: true })}
                    placeholder="Car parking"
                    className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
                  />
                  {errors.otherIncome && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>
              </div>
            ))}

          {/* Total Monthly Income */}
          <div className="self-end w-full col-span-2">
            <label className="xs:text-lg md:text-xl font-medium">
              Total Monthly Income
            </label>
            <input
              type="text"
              readOnly
              value={totalMonthlyIncome}
              {...register('totalMonthlyIncome', { required: true })}
              className="block mt-3  w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
            />
          </div>
        </div>
        <button
          onClick={addOtherIncome}
          className="block py-2 md:py-3 rounded-lg text-center font-medium w-full md:text-lg text-[#025397] border border-[#025397]"
        >
          Add Other Income
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

export default StepEight;
