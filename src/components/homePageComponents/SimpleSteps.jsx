import SectionTitle from "../common/SectionTitle";

const SimpleSteps = ({ data }) => {
    return (
        <section id="simpleSteps" className="py-14 sm:py-20">
            <div className="container">
                <SectionTitle sectionTitle='Get Started with Some Simple Steps' sectionDesc='Easily manage properties, track appreciation, and grow your portfolio with our smart tools' ></SectionTitle>
                <div className="grid lg:grid-cols-2 gap-5 xl:gap-0 2xl:px-24 items-center">
                    <div className="max-w-[464px] mx-auto">
                        <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_SITE_URL}/${data?.[0].image_url}`} alt="s1" />
                    </div>
                    <div className="lg:max-w-[586px]">
                        <h3 className="font-grotesk lg:max-w-[250px] mb-5 text-headingTextColor font-semibold text-xl xs:text-2xl sm:text-3xl">Enter Your Data & Be Registered</h3>
                        <p className="text-primaryTextColor xs:text-lg">Add a new property to the database account. Enter your mortgage data. Enter the evaluator data and be the registered member. </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 my-5 gap-5 xl:gap-20 2xl:px-24 items-center">
                    <div className="lg:max-w-[586px] order-2 lg:order-1">
                        <h3 className="font-grotesk lg:max-w-[250px] mb-5 text-headingTextColor font-semibold text-xl xs:text-2xl sm:text-3xl">Track & Check</h3>
                        <p className="text-primaryTextColor xs:text-lg">Add a new property to the database account. Enter your mortgage data. Enter the evaluator data and be the registered member. Enter the evaluator data and be the registered member.</p>
                    </div>
                    <div className="max-w-[464px] mx-auto order-1 lg:order-2">
                        <img src={`${import.meta.env.VITE_SITE_URL}/${data?.[1].image_url}`} className="w-full h-full object-cover" alt="s2" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-5 xl:gap-0 2xl:px-24 items-center">
                    <div className="max-w-[464px] mx-auto">
                        <img src={`${import.meta.env.VITE_SITE_URL}/${data?.[2].image_url}`} className="w-full h-full object-cover" alt="s3" />
                    </div>
                    <div className="lg:max-w-[586px]">
                        <h3 className="font-grotesk lg:max-w-[350px] mb-5 text-headingTextColor font-semibold  text-xl xs:text-2xl sm:text-3xl">Analyze Performance</h3>
                        <p className="text-primaryTextColor xs:text-lg">Add a new property to the database account. Enter your mortgage data. Enter the evaluator data and be the registered member. Enter the evaluator data and be the registered member.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleSteps;