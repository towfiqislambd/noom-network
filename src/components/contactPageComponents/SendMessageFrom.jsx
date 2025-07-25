import { useContactUs } from '@/hooks/cms.mutations';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImSpinner9 } from 'react-icons/im';

const SendMessageFrom = () => {
  const [loading, setLoading] = useState(false);

  //   mutation:
  const { mutateAsync: contactUsMutation } = useContactUs(setLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      await contactUsMutation(data);
      reset();
    }
  };
  return (
    <section className="">
      <div className="bg-white shadow border py-5 xs:py-7 md:py-10 xl:py-16 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[732px] px-5 xs:px-7 md:px-10 xl:px-0 mx-auto"
        >
          <p className="max-w-[403px] mb-7 font-medium  text-xl sm:text-2xl">
            For your any kind of queries Send us message
          </p>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="name" className="text-xl font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: true })}
              placeholder="Your full name"
              className="block mt-2 w-full px-4 mb-2 py-3 border rounded text-lg border-[#8BB0CF]"
            />
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="phone" className="text-xl font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              {...register('phone', { required: true })}
              placeholder="Your phone number"
              className="block mt-2 w-full px-4 mb-2 py-3 border rounded text-lg border-[#8BB0CF]"
            />
            {errors.phone && (
              <span className="text-red-400">Phone Number is required</span>
            )}
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              placeholder="Your email address"
              className="block mt-2 w-full px-4 py-3 border rounded text-lg border-[#8BB0CF] mb-2"
            />
            {errors.email && (
              <span className="text-red-400">Email is required</span>
            )}
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="company_name" className="text-xl font-medium">
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register('company', { required: true })}
              placeholder="Your company name"
              className="block mt-2 w-full px-4 py-3 mb-2 border rounded text-lg border-[#8BB0CF]"
            />
            {errors.company && (
              <span className="text-red-400">Company Name is required</span>
            )}
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="message" className="text-xl font-medium">
              Message
            </label>
            <textarea
              id="desc"
              {...register('message', { required: true })}
              placeholder="Write your any kind of queries..."
              className="block mt-2 w-full px-4 py-3 border  mb-2 rounded text-lg border-[#8BB0CF]"
              rows={6}
            ></textarea>
            {errors.message && (
              <span className="text-red-400">Message field is required</span>
            )}
          </div>
          <button
            disabled={loading}
            className="rounded-lg px-5 hover:scale-105 hover:shadow-lg duration-300 py-3 text-white bg-primaryBgColor shadow w-40 flex items-center justify-center"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin text-white text-lg" />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendMessageFrom;
