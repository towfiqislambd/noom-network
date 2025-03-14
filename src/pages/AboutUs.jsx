import EveryCompany from '@/components/AboutPageComponents/EveryCompany';
import Frequently from '@/components/AboutPageComponents/Frequently';
import HouseHunterStory from '@/components/AboutPageComponents/HouseHunterStory';
import OurFounder from '@/components/AboutPageComponents/OurFounder';
import OurVision from '@/components/AboutPageComponents/OurVision';
import Struggling from '@/components/homePageComponents/Struggling';
import { useAboutUs } from '@/hooks/cms.queries';

const AboutUs = () => {
  const { data: aboutUsData } = useAboutUs();
  return (
    <>
      <HouseHunterStory data={aboutUsData?.content} />
      <EveryCompany data={aboutUsData?.our_story} />
      <OurVision />
      <OurFounder data={aboutUsData?.our_founders} />
      <Frequently />
      <Struggling />
    </>
  );
};

export default AboutUs;
