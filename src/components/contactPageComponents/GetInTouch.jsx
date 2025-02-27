import SectionTitle from "../common/SectionTitle";
import phoneIcon from "../../assets/icons/phoneIcon.png"
import emailIcon from "../../assets/icons/emailIcon.png"
import locationIcon from "../../assets/icons/locationIcon.png"

const GetInTouch = () => {
    return (
        <section className="pt-10 sm:pt-20 pb-10 sm:pb-16">
            <SectionTitle sectionDescClass='max-w-[492px]' sectionTitle='Get in Touch with Us' sectionDesc='If you have any questions or need expert advice, We are here to help you optimize real estate portfolio' ></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="border border-[#77CDCC] space-y-5 text-center shadow rounded-lg p-5">
                    <img src={phoneIcon} alt="phone" className="mx-auto" />
                    <p className="pb-2 font-medium text-xl xl:text-2xl">Phone Number</p>
                    <span className="xl:text-lg text-primaryTextColor">+1 3300 220 1100</span>
                </div>
                <div className="border border-[#77CDCC] space-y-5 text-center shadow rounded-lg p-5">
                    <img src={emailIcon} alt="phone" className="mx-auto" />
                    <p className="pb-2 font-medium text-xl xl:text-2xl">Email Address</p>
                    <span className="xl:text-lg text-primaryTextColor">info@noomnetwork.com</span>
                </div>
                <div className="border border-[#77CDCC] space-y-5 text-center shadow rounded-lg p-5">
                    <img src={locationIcon} alt="phone" className="mx-auto" />
                    <p className="pb-2 font-medium text-xl xl:text-2xl">Business Location</p>
                    <span className="xl:text-lg text-primaryTextColor">2801 Wade Hampton Blvd South Carolina</span>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;