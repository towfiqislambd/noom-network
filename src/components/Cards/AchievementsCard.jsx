const AchievementsCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[6px] w-full  p-[40px] bg-[#024C89] rounded-[8px]">
      <h1 className="text-white text-center font-workSans text-[32px] font-semibold leading-[48px]">
        {data?.title}
      </h1>
      <p className="text-white text-center font-workSans text-[16px] font-normal leading-[27px]">
        {data?.section_name}
      </p>
    </div>
  );
};

export default AchievementsCard;
