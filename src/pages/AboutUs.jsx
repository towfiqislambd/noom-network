import EveryCompany from "@/components/AboutPageComponents/EveryCompany";
import Frequently from "@/components/AboutPageComponents/Frequently";
import HouseHunterStory from "@/components/AboutPageComponents/HouseHunterStory";
import OurFounder from "@/components/AboutPageComponents/OurFounder";
import OurVision from "@/components/AboutPageComponents/OurVision";
import Struggling from "@/components/homePageComponents/Struggling";
import Loader from "@/components/Loader/Loader";
import { useAboutUs, useAchievements, useFaqInfo } from "@/hooks/cms.queries";

const AboutUs = () => {
  const { data: aboutUsData, isLoading: aboutUsDataLoading } = useAboutUs();
  const { data: achievementsData, isLoading: achievementDataLoading } =
    useAchievements();
  const { data: faqData, isLoading: faqDataLoading } = useFaqInfo();

  const isLoading =
    aboutUsDataLoading || achievementDataLoading || faqDataLoading;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HouseHunterStory data={aboutUsData?.content} />
      <EveryCompany data={aboutUsData?.our_story} />
      <OurVision data={achievementsData} />
      <OurFounder data={aboutUsData?.our_founders} />
      <Frequently data={faqData} />
      <Struggling />
    </>
  );
};

export default AboutUs;
