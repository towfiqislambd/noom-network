import p1 from '../../../assets/p1.png';
import p2 from '../../../assets/p2.png';
import p3 from '../../../assets/p3.png';
import uploadLogo from '../../../assets/icons/upload.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';

const StepThree = ({ step, setStep, allFormData, setAllFormData }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the file size exceeds 2MB (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error('File size must be less than 2MB');
        return; // Don't proceed with the file upload
      }

      setUploadedFile(file);

      // Create a preview URL
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      console.log(uploadedFile);
      if (uploadedFile) {
        setAllFormData({ ...allFormData, ...data, image: uploadedFile });
        setStep(step + 1);
      } else {
        toast.error('You must upload a photo !');
      }
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  return (
    <div className="bg-white rounded-xl shadow p-3 md:p-5 lg:px-[50px] 3xl:px-[100px] lg:py-[50px] 3xl:py-[82px]">
      <div className="grid 3xl:grid-cols-6 gap-10">
        <div className="3xl:col-span-3">
          <figure>
            {/* Show uploaded preview if exists */}
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full lg:h-[500px] rounded-lg"
              />
            ) : (
              <img src={p1} alt="p1" className="object-cover w-full h-full" />
            )}
          </figure>
          <div className="w-full flex items-center justify-center gap-5 mt-4">
            {/* Upload Property Photos */}
            <label htmlFor="fileUpload" className="object-cover w-full h-full">
              <div className="bg-[#E6ECFD] object-cover py-7 w-full !h-full lg:p-5 cursor-pointer rounded-lg flex flex-col gap-3 text-center items-center justify-center">
                <img src={uploadLogo} alt="uploadLogo" className="mx-auto" />
                <p className="font-medium hidden md:block text-headingTextColor">
                  Upload Property Photos
                </p>
              </div>
            </label>
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="3xl:col-span-3">
          <h2 className="md:text-2xl xs:text-xl font-semibold mb-5 xs:mb-7 text-headingTextColor">
            The first step is to add a new property, which will start building
            your portfolio to track and optimize it.
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-8"
          >
            {/* Property  Name */}
            <div className="">
              <label
                htmlFor="propertyName"
                className="xs:text-lg md:text-xl font-medium"
              >
                Property Name
              </label>
              <input
                id="property_name"
                type="text"
                {...register('property_name', { required: true })}
                placeholder="Enter your property name"
                className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              />
              {errors.property_name && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            {/* Property  Address */}
            <div className="">
              <label
                htmlFor="property_address"
                className="xs:text-lg md:text-xl font-medium"
              >
                Property Address
              </label>
              <input
                id="property_address"
                type="text"
                {...register('property_address', { required: true })}
                placeholder="Enter your property address"
                className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              />
              {errors.property_address && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            {/* Additional Info */}
            <div className="">
              <label
                htmlFor="editing_information"
                className="xs:text-lg md:text-xl font-medium"
              >
                Editing Information ( Optional)
              </label>
              <input
                id="editing_information"
                type="text"
                {...register('editing_information')}
                placeholder="Enter your property address"
                className="block mt-3 w-full px-2 xs:px-3 md:px-4 mb-2 py-1 xs:py-2 md:py-3 border rounded md:text-lg border-gray-300"
              />
            </div>
            {/* Next, Prev btn */}
            <div className="flex justify-center items-center gap-3 pt-2 md:mt-10">
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
      </div>
    </div>
  );
};

export default StepThree;
