import { Link } from "react-router-dom";

const Struggling = () => {
    return (
        <div id="strugglingImg">
            <div className="container text-center py-20 sm:py-32 w-full">
                <h1 data-aos="fade-up" data-aos-duration="2000" className="text-[#F9F9F9] max-w-[600px] leading-tight mx-auto font-grotesk font-semibold text-2xl xs:text-3xl lg:text-4xl mb-6">
                    Struggling to Scale Your Real Estate Value?
                </h1>
                <p data-aos="fade-up" data-aos-duration="2000" className="text-[#FFF] max-w-[782px] mx-auto text-center xs:text-lg font-workSans mb-12">
                    Maximize the capabilities of your property management and accounting
                    systems with Assetti’s effortless integrations. Streamline your data
                    flow, save time, and prioritize informed decision-making.
                </p>
                <Link data-aos="zoom-in-up" data-aos-duration="2000" to='/contactUs' className="px-4 py-2 border hover:scale-110 hover:border-white hover:text-white hover:bg-transparent duration-500 md:px-8 md:py-4 rounded-lg font-workSans drop-shadow-lg text-[#025397] text-lg bg-[#E6EEF5] font-medium">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default Struggling;