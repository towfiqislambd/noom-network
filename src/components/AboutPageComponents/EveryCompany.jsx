import AboutUsCompanyCard from '../Cards/AboutUsCompanyCard';

const EveryCompany = ({ data }) => {
  return (
    <div className="">
      <div className="container flex flex-col items-center justify-center py-[60px]">
        <p className="text-[#101828] text-center max-w-[381px] font-grotesk text-2xl lg:text-[36px] font-bold lg:leading-[43.2px] mb-10 xl:mb-12">
          Every Company has a Story to Tell
        </p>

        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-10 2xl:gap-14 w-full">
          {/* card--1 */}
          {data?.map((item) => (
            <AboutUsCompanyCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EveryCompany;
