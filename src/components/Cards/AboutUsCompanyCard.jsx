const AboutUsCompanyCard = ({ data }) => {
  return (
    <div className="p-4 xs:p-5 lg:p-8 flex flex-col items-start gap-5">
      <div className="flex items-center gap-4">
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
          className="w-7"
          alt=""
        />
        <h1 className="text-[#025397] font-grotesk text-lg font-medium leading-[28.8px]">
          {data?.title}
        </h1>
      </div>
      <p className="text-[#101828] font-grotesk text-base font-normal leading-[20px]">
        {data?.description}
      </p>
    </div>
  );
};

export default AboutUsCompanyCard;
