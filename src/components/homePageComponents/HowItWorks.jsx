import workImg from "../../assets/work.png"
const HowItWorks = () => {
    return (
        <section className="bg-[#F5FBFF] py-10 xs:py-20">
            <div data-aos="zoom-up" data-aos-duration="2000" className="container grid lg:grid-cols-2 items-center gap-7 xl:gap-10">
                <div data-aos="zoom-in" data-aos-duration="3000" className="h-[250px] lg:h-auto">
                    <img src={workImg} alt="work" className="object-cover mx-auto w-full xl:w-auto h-full" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="">
                    <h3 className="font-bold  text-2xl sm:text-3xl xl:text-4xl max-w-[380px] mb-3 xs:mb-5">How It Works to Help Your Property e</h3>
                    <p className="sm:text-lg text-primaryTextColor">Utilize powerful analytics and reporting tools to uncover trends, identify opportunities, and make data-driven decisions. From tracking rental yields to forecasting future performance, our platform gives you the clarity you need. From tracking rental yields to forecasting future performance, our platform gives you the clarity you need.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;