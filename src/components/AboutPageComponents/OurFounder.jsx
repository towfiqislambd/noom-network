import Founder from "../../assets/svg/Our Founder.png";
import FounderOverlay from "../../assets/svg/OurFounderOverlay.png";

const OurFounder = () => {
  return (
    <div className="bg-gradient-to-r from-[#EFF6FD] to-[#EBF8F7] via-[#EFF6FD] pt-20 pb-10  2xl:pt-[120px] 2xl:pb-[168px]">
      <div className="container">
        <div className="grid xl:grid-cols-12 items-center gap-10">
          {/* Founder Image Section */}
          <div className="xl:col-span-5 w-full">
            <div className="relative w-full mx-auto">
              <img
                src={Founder}
                className="xl:max-w-[446px] w-full h-full object-cover relative z-10"
                alt="Founder"
              />
              <img
                src={FounderOverlay}
                className="absolute hidden xl:block top-6  h-full object-cover 3xl:top-12 left-6 3xl:left-12 -z-0 "
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
              Joshua Meeks
            </h2>
            <h4 className="text-[#101828] font-workSans text-lg font-normal leading-[27px] mb-4">
              Founder & CEO
            </h4>
            <p className="text-[#101828] font-workSans 2xl:text-[18px] font-normal leading-[27px] mb-5 text-justify">
              Joshua Meeks has a passion to raise the standard in real estate
              service and real estate investing through transparency, clarity
              and collaboration. As someone who grew up well below the poverty
              line,
            </p>
            <p className="text-[#101828] font-workSans 2xl:text-[18px] font-normal leading-[27px] text-justify">
              And has seen transformation in his life through investing in real
              estate and helping others to do the same, his mission moves beyond
              profit into purpose. Asking questions like, &quot;What tools would make
              investing easier? and &quot;What understanding could have helped me to
              start earlier?&quot; established a company that provides that value to
              others. Josh spent over 10 years in commercial construction as a
              union carpenter, before pursuing a degree in business, and then a
              career in real estate. He has represented over 1,000 sales as a
              real estate agent since transitioning to real estate in 2013, and
              now leads a top producing real estate team, a small real estate
              brokerage, while growing his own investment portfolio, and working
              on products and services to make investing in real estate simpler
              and easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
