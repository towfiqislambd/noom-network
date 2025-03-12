import Assurance from '@/components/homePageComponents/Assurance';
import Features from '@/components/homePageComponents/Features';
import Hero from '@/components/homePageComponents/Hero';
import HowItWorks from '@/components/homePageComponents/HowItWorks';
import Pricing from '@/components/homePageComponents/Pricing';
import SimpleSteps from '@/components/homePageComponents/SimpleSteps';
import Struggling from '@/components/homePageComponents/Struggling';
import Testimonial from '@/components/homePageComponents/Testimonial';
import TrustedCompanies from '@/components/homePageComponents/TrustedCompanies';
import {
  useHomepageData,
  useOurFeathers,
  useTestimonialData,
} from '@/hooks/cms.queries';
import useAuth from '@/hooks/useAuth';

const Home = () => {
  const { data: homepageData } = useHomepageData();
  const { data: ourFeathers } = useOurFeathers();
  const { data: testimonialData } = useTestimonialData();

  const { user } = useAuth();
 

  return (
    <>
      <Hero data={homepageData?.hero_section} />
      <TrustedCompanies />
      <Assurance
        data={homepageData?.investment_choices}
        data2={homepageData?.investment_plan}
      />
      <Features data={ourFeathers} />
      <HowItWorks data={homepageData?.how_it_works} />
      <SimpleSteps data={homepageData?.get_started_steps} />
      <Testimonial data={testimonialData} />
      <Pricing />
      <Struggling />
    </>
  );
};

export default Home;
