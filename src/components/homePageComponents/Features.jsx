import Feather from "./Feather";

const Features = ({ data }) => {
    return (
        <section id="features" className="py-16 sm:py-20 lg:py-28">
            <div className="container">
                <div className='mb-10 sm:mb-16'>
                    <h2 className='max-w-[572px] text-2xl sm:text-3xl lg:text-4xl font-semibold text-headingTextColor mb-4 sm:mb-5 ${sectionTitleClass'>Boost Your Real Estate Investment with Our Features</h2>
                    <p className='max-w-[556px] text-lg text-[#101828] ${sectionDescClass}'>Manage properties, track appreciation, and grow your portfolio with ease using our smart tools and insights</p>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        data?.map(feather => <Feather key={feather.id} feather={feather} />)
                    }
                    {/* <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg group hover:bg-primaryBgColor border-[#DEF8F7] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#DEF8F7] group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f2} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Real Estate Asset Tracking</p>
                        <p className="sm:text-lg 2xl:px-10  group-hover:text-[#fff] text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg group hover:bg-primaryBgColor group hover:bg-primaryBgColor border-[#FFE9DC] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#FFE9DC] group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f1} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Secure User Authentication</p>
                        <p className="sm:text-lg 2xl:px-10 group-hover:text-[#fff] text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg transition-all duration-500 group hover:bg-primaryBgColor border-[#E3F2FF] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#E3F2FF] group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f3} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Property Management Features</p>
                        <p className="sm:text-lg2xl:px-10 group-hover:text-[#fff] text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg group hover:bg-primaryBgColor border-[#DEF8F7] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#DEF8F7] duration-500 transition-all group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f2} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Custom Data Input</p>
                        <p className="sm:text-lg 2xl:px-10 group-hover:text-[#fff] text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg group hover:bg-primaryBgColor border-[#FFE9DC] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#FFE9DC] group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f1} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Automated Financial Tools</p>
                        <p className="sm:text-lg 2xl:px-10 group-hover:text-[#fff]  text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="rounded-lg group hover:bg-primaryBgColor border-[#E3F2FF] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
                        <div className="bg-[#E3F2FF]  group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                            <img src={f3} alt="f1" />
                        </div>
                        <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">Data Visualization</p>
                        <p className="sm:text-lg 2xl:px-10 group-hover:text-[#fff] text-primaryTextColor">Effortlessly track and manage your real estate assets and their growth potential.</p>
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default Features;