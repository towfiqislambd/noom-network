const HowItWorks = ({ data }) => {
    return (
        <section className="bg-[#F5FBFF] py-10 xs:py-20">
            <div className="container grid lg:grid-cols-2 items-center gap-7 xl:gap-10">
                <div className="h-[250px] lg:h-auto">
                    <img src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`} alt="work" className="object-cover mx-auto w-full xl:w-auto h-full" />
                </div>
                <div className="">
                    <h3 className="font-bold  text-2xl sm:text-3xl xl:text-4xl max-w-[380px] mb-3 xs:mb-5">{data?.title}</h3>
                    <p className="sm:text-lg text-primaryTextColor">{data?.description}</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;