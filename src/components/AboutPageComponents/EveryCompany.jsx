import beginning from "../../assets/icons/beginning.png";
import growth from "../../assets/icons/growth.png";
import Expansion from "../../assets/icons/Expansion.png";

const EveryCompany = () => {
  return (
    <div className="">
      <div className="container flex flex-col items-center justify-center py-[60px]">
        <p className="text-[#101828] text-center max-w-[381px] font-grotesk text-2xl lg:text-[36px] font-bold lg:leading-[43.2px] mb-10 xl:mb-12">
          Every Company has a Story to Tell
        </p>

        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-10 2xl:gap-14 w-full">
          {/* card--1 */}
          <div className="p-4 xs:p-5 lg:p-8 flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <img src={beginning} className="w-7" alt="" />
              <h1 className="text-[#025397] font-grotesk text-lg font-medium leading-[28.8px]">
                In the beginning
              </h1>
            </div>
            <p className="text-[#101828] font-grotesk text-base font-normal leading-[20px]">
              Our company started with a vision to revolutionize real estate
              portfolio management through technology and insight.
            </p>
          </div>

          {/* card--2 */}
          <div className="p-4 xs:p-5 lg:py-8 lg:px-5 flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <img src={growth} className="w-7" alt="" />
              <h1 className="text-[#025397] font-grotesk text-lg font-medium leading-[28.8px]">
                Company & team growth
              </h1>
            </div>
            <p className="text-[#101828] font-grotesk text-base font-normal leading-[20px]">
              Our company started with a vision to revolutionize real estate
              portfolio management through technology and insight.
            </p>
          </div>

          {/* card--3 */}
          <div className="p-4 xs:p-5 lg:p-8 flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <img src={Expansion} className="w-7" alt="" />
              <h1 className="text-[#025397] font-grotesk text-lg font-medium leading-[28.8px]">
                Company Expansion
              </h1>
            </div>
            <p className="text-[#101828] font-grotesk text-base font-normal leading-[20px]">
              Our company started with a vision to revolutionize real estate
              portfolio management through technology and insight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryCompany;
