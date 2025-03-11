import SectionTitle from "../common/SectionTitle";

const Assurance = ({ data, data2 }) => {
    return (
        <section className="bg-[#E6EEF5] py-20">
            <div className="container">
                <SectionTitle sectionTitleClass='max-w-[600px]' sectionDescClass='max-w-[446px]' sectionTitle={data?.title} sectionDesc={data?.sub_title} ></SectionTitle>
                <div className="flex flex-wrap gap-7 justify-evenly items-center">
                    <div className="text-center flex flex-col items-center justify-center gap-3">
                        <div className="w-[100px] outline outline-1 outline-offset-[10px] p-5 h-[100px] bg-[#013b6b] grid place-items-center border-gray-400 mb-3 rounded-bl-3xl">
                            <img src={`${import.meta.env.VITE_SITE_URL}/${data2?.[0].image_url}`} alt="a1" />
                        </div>
                        <p className="md:text-lg font-medium text-primaryTextColor">{data2?.[0].title}</p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center gap-3">
                        <div className="w-[100px] outline outline-1 outline-offset-[10px] p-5 h-[100px] bg-[#013b6b] grid place-items-center border-gray-400 mb-3 rounded-bl-3xl">
                            <img src={`${import.meta.env.VITE_SITE_URL}/${data2?.[1].image_url}`} alt="a1" />
                        </div>
                        <p className="md:text-lg font-medium text-primaryTextColor">{data2?.[1].title}</p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center gap-3">
                        <div className="w-[100px] outline outline-1 outline-offset-[10px] p-5 h-[100px] bg-[#013b6b] grid place-items-center border-gray-400 mb-3 rounded-bl-3xl">
                            <img src={`${import.meta.env.VITE_SITE_URL}/${data2?.[2].image_url}`} alt="a1" />
                        </div>
                        <p className="md:text-lg font-medium text-primaryTextColor">{data2?.[2].title}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assurance;