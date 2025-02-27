import homeBg from "../../assets/home.png"

const Hero = () => {
    return (
        <header className="text-center pt-14 xs:pt-20 text-white">
            <div className="space-y-5 xs:space-y-7 xl:space-y-10 container mb-16">
                <h1 data-aos="fade-up" data-aos-duration="2000" className="text-[#F9F9F9] xl:!leading-[60px] 2xl:!leading-[76px] max-w-[1219px] mx-auto font-grotesk font-medium md:font-semibold text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl">Empower Your Real Estate Investments with Data-Driven Insights</h1>
                <p data-aos="fade-up" data-aos-duration="2000" className="sm:text-lg lg:text-xl max-w-[621px] mx-auto opacity-80">Manage your portfolio, optimize performance, and stay ahead with cutting-edge analytics</p>
                <button data-aos="zoom-in" data-aos-duration="2000" className="shadow-lg hover:scale-110 hover:bg-transparent duration-500 border hover:border-white hover:text-white bg-white rounded text-sm sm:text-base px-3 sm:px-5 text-[#025397] py-2 sm:py-3 font-medium">Evaluate Properties</button>
            </div>
            <div className="container">
                <img data-aos="zoom-up" data-aos-duration="3000" src={homeBg} alt="hero" className="mx-auto object-cover" />
            </div>
        </header>
    );
};

export default Hero;