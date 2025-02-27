import SectionTitle from "../common/SectionTitle";
import p1 from "../../assets/icons/p1.png"
import p2 from "../../assets/icons/p2.png"

const Pricing = () => {
    return (
        <section className="bg-[#F5FBFF] py-14 sm:py-20">
            <div className="container">
                <SectionTitle sectionDescClass='max-w-[614px]' sectionTitle='Get Started with Some Simple Steps' sectionDesc='Easily manage properties, track appreciation, and grow your portfolio with our smart tools' ></SectionTitle>
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                    <div data-aos="flip-left" data-aos-duration="3000" className="w-full xl:w-[450px] space-y-3 border rounded-xl p-4 sm:p-6 bg-white border-primaryBgColor">
                        <span className="font-medium text-xl">Starter Plan</span>
                        <p className="flex items-center pb-3">
                            <span className="text-3xl font-semibold">$5.00</span>
                            <span className="text-sm text-primaryTextColor">/monthly</span>
                        </p>
                        <button className="block hover:bg-primaryBgColor duration-300 hover:text-white border-gray-400 font-medium w-full py-2 md:py-3 border rounded-lg shadow-sm">Subscribe</button>
                        <ul className="space-y-4 pt-3">
                            <li className="flex items-center gap-2">
                                <img src={p1} alt="p1" />
                                <span className="text-primaryTextColor text-base">Limited Property Listings</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p1} alt="p1" />
                                <span className="text-primaryTextColor text-base">Basic Search Filters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p1} alt="p1" />
                                <span className="text-primaryTextColor text-base">View Property Insights</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p1} alt="p1" />
                                <span className="text-primaryTextColor text-base">Contact Support</span>
                            </li>
                        </ul>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="3000" className="w-full xl:w-[450px] space-y-3 border rounded-xl p-4 sm:p-6 bg-primaryBgColor text-white border-primaryBgColor">
                        <span className="font-medium text-xl">Standard Plan</span>
                        <p className="flex items-center pb-3">
                            <span className="text-3xl font-semibold">$50.00</span>
                            <span className="text-sm text-[#EBEBEB]">/yearly</span>
                        </p>
                        <button className="block border-gray-400 bg-white text-gray-800 font-semibold w-full py-2 md:py-3 border rounded-lg shadow-sm">Subscribe</button>
                        <ul className="space-y-4 pt-3">
                            <li className="flex items-center gap-2">
                                <img src={p2} alt="p1" />
                                <span className="text-[#EBEBEB] text-base">Limited Property Listings</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p2} alt="p1" />
                                <span className="text-[#EBEBEB] text-base">Basic Search Filters</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p2} alt="p1" />
                                <span className="text-[#EBEBEB] text-base">View Property Insights</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={p2} alt="p1" />
                                <span className="text-[#EBEBEB] text-base">Contact Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;