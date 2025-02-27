import SectionTitle from "../common/SectionTitle";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";

const Assurance = () => {
    return (
        <section className="bg-[#E6EEF5] py-20">
            <div className="container">
                <SectionTitle sectionTitleClass='max-w-[600px]' sectionDescClass='max-w-[446px]' sectionTitle='Make Informed Investment Choices with Assurance' sectionDesc='Access real-time data and expert insights to guide smarter, more reliable investment decisions' ></SectionTitle>
                <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-wrap gap-7 justify-evenly items-center">
                    <div data-aos="zoom-in" data-aos-duration="2000" className="text-center flex flex-col items-center justify-center gap-3">
                        <img src={a1} alt="a1" />
                        <p className="md:text-lg font-medium text-primaryTextColor">Dependable Data</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="text-center flex flex-col items-center justify-center gap-3">
                        <img src={a2} alt="a2" />
                        <p className="md:text-lg font-medium text-primaryTextColor">Broad Insights</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="text-center flex flex-col items-center justify-center gap-3">
                        <img src={a3} alt="a3" />
                        <p className="md:text-lg font-medium text-primaryTextColor">Detailed Report</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assurance;