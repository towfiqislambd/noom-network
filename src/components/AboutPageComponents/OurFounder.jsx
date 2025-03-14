import FounderOverlay from '../../assets/svg/OurFounderOverlay.png';
import parse from 'html-react-parser';

const OurFounder = ({ data }) => {
  const parsedData =
    typeof description === 'string'
      ? data?.description
      : String(data?.description);
  return (
    <div className="bg-gradient-to-r from-[#EFF6FD] to-[#EBF8F7] via-[#EFF6FD] pt-20 pb-10  2xl:pt-[120px] 2xl:pb-[168px]">
      <div className="container">
        <div className="grid xl:grid-cols-12 items-center gap-10">
          {/* Founder Image Section */}
          <div className="xl:col-span-5 w-full">
            <div className="relative w-full mx-auto">
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
                className="xl:max-w-[446px] w-full h-full object-cover relative z-10 rounded-xl"
                alt="Founder"
              />
              <img
                src={FounderOverlay}
                className="xl:max-w-[446px] absolute hidden xl:block top-6  h-full object-cover 3xl:top-12 left-6 3xl:left-12 -z-0 rounded-xl "
                alt="Overlay"
              />
            </div>
          </div>

          {/* Founder Description Section */}
          <div className="xl:col-span-7">
            <h1 className="text-[#101828] font-grotesk text-2xl xs:text-3xl 2xl:text-[36px] font-bold leading-[43.2px] mb-3 2xl:mb-8">
              About Our Founder
            </h1>
            <h2 className="text-[#101828] font-workSans text-xl sm:text-[28px] font-medium leading-[33.6px] w-full 2xl:mb-2">
              {data?.title}
            </h2>
            <h4 className="text-[#101828] font-workSans text-lg font-normal leading-[27px] mb-4">
              {data?.subtitle}
            </h4>

            <div className="text-[#101828] font-workSans 2xl:text-[18px] font-normal leading-[27px] text-justify">
              {parse(parsedData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
