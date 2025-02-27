import EveryCompany from "@/components/AboutPageComponents/EveryCompany";
import Frequently from "@/components/AboutPageComponents/Frequently";
import HouseHunterStory from "@/components/AboutPageComponents/HouseHunterStory";
import OurFounder from "@/components/AboutPageComponents/OurFounder";
import OurVision from "@/components/AboutPageComponents/OurVision";
import Struggling from "@/components/homePageComponents/Struggling";

const AboutUs = () => {
    return (
        <>
            <HouseHunterStory />
            <EveryCompany />
            <OurVision />
            <OurFounder />
            <Frequently />
            <Struggling />
        </>
    );
};

export default AboutUs;
