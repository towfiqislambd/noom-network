import Assurance from "@/components/homePageComponents/Assurance";
import Features from "@/components/homePageComponents/Features";
import Hero from "@/components/homePageComponents/Hero";
import HowItWorks from "@/components/homePageComponents/HowItWorks";
import Pricing from "@/components/homePageComponents/Pricing";
import SimpleSteps from "@/components/homePageComponents/SimpleSteps";
import Struggling from "@/components/homePageComponents/Struggling";
import Testimonial from "@/components/homePageComponents/Testimonial";
import TrustedCompanies from "@/components/homePageComponents/TrustedCompanies";

const Home = () => {
    return (
        <>
            <Hero />
            <TrustedCompanies />
            <Assurance />
            <Features />
            <HowItWorks />
            <SimpleSteps />
            <Testimonial />
            <Pricing />
            <Struggling />
        </>
    );
};

export default Home;