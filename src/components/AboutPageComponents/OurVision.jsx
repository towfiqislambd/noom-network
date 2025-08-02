import AchievementsCard from "../Cards/AchievementsCard";

const OurVision = ({ data }) => {
  return (
    <div id="OurVision">
      <div className="container grid grid-cols-1 xl:grid-cols-12 py-14 sm:py-20 gap-10 xl:py-32">
        <div className="xl:col-span-5 w-full flex flex-col  justify-center">
          <h2 className="text-[#E6EEF5] font-grotesk text-2xl text-center xs:text-3xl font-bold leading-[54px] sm:mb-8 mb-5">
            Our Vision & Mission
          </h2>
          <div className="flex items-baseline gap-2 mb-6">
            <h1 className="text-white font-workSans text-lg font-semibold leading-[36px]">
              Mission:
            </h1>
            <p className="text-white max-w-[586px] font-workSans leading-[20px]">
              Providing products and systems to simplify data, increase clarity
              and support communication within real estate
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-white font-workSans text-lg font-semibold leading-[36px]">
              Vision:
            </h1>
            <p className="text-white max-w-[586px] font-workSans leading-[20px]">
              Simply the understanding of building wealth in real estate.
            </p>
          </div>
        </div>
        <div className="hidden xl:block col-span-2"></div>
        {/* curd item */}
        <div className="xl:col-span-5 grid md:grid-cols-2 gap-3 sm:gap-5 w-full">
          {data?.map(item => (
            <AchievementsCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
