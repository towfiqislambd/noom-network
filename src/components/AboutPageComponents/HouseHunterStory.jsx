import Trophy from '../../assets/svg/famicons_trophy-sharp.svg';

const HouseHunterStory = ({ data }) => {
  return (
    <div className="border-b-[0.1px] border-[#A2DDDC] border-opacity-50 bg-gradient-to-b from-[#E6EEF5] to-white">
      <div className="container ">
        <div className="text-center lg:w-[728px] mx-auto flex flex-col items-center justify-center gap-[10px] py-16 md:py-[96px] ">
          <div className="flex items-start justify-center gap-2">
            <img src={Trophy} alt="Trophy Icon" />
            <h1 className="text-[#025397] font-workSans text-[20px] font-medium leading-[30px]">
              {data?.title}
            </h1>
          </div>
          <h1 className="text-[#101828] my-3 text-center font-grotesk text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-bold lg:leading-[57.6px]">
            {data?.sub_title}
          </h1>
          <p className="text-[#101828] text-center font-workSans text-lg font-normal leading-[27px]">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseHunterStory;
