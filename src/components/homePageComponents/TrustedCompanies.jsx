import SectionTitle from "../common/SectionTitle";

const TrustedCompanies = () => {
    return (
        <section className="py-16 bg-[#F5FBFF]">
            <div className="container">
                <SectionTitle sectionTitle='Trusted by 200+ Companies' sectionDesc='Access insights and data to guide investments, assess risks, and track performance smarter' ></SectionTitle>
                <div className="flex text-primaryTextColor font-medium font-roboto text-xl flex-wrap justify-center items-center gap-y-5 sm:gap-y-8 gap-x-10 sm:gap-x-16 lg:gap-x-20 xl:gap-x-28">
                    <span>SHOPBOT</span>
                    <span>SLACK</span>
                    <span>SPOTIFY</span>
                    <span>PAYPAL</span>
                    <span>PAYONEER</span>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;