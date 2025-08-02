import Assurance from "@/components/homePageComponents/Assurance";
import Features from "@/components/homePageComponents/Features";
import Hero from "@/components/homePageComponents/Hero";
import HowItWorks from "@/components/homePageComponents/HowItWorks";
import Pricing from "@/components/homePageComponents/Pricing";
import SimpleSteps from "@/components/homePageComponents/SimpleSteps";
import Struggling from "@/components/homePageComponents/Struggling";
import Testimonial from "@/components/homePageComponents/Testimonial";
import TrustedCompanies from "@/components/homePageComponents/TrustedCompanies";
import Loader from "@/components/Loader/Loader";
import {
  useHomepageData,
  useSubscription,
  useTestimonialData,
} from "@/hooks/cms.queries";

const Home = () => {
  const { data: homepageData, isLoading: homeDataLoading } = useHomepageData();
  const { data: testimonialData, isLoading: testimonialDataLoading } =
    useTestimonialData();
  const { data: subscriptionData, isLoading: subscriptionDataLoading } =
    useSubscription();

  const isLoading =
    homeDataLoading || testimonialDataLoading || subscriptionDataLoading;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero data={homepageData?.hero_section} />
      <TrustedCompanies />
      <Assurance
        data={homepageData?.investment_choices}
        data2={homepageData?.investment_plan}
      />
      <Features />
      <HowItWorks data={homepageData?.how_it_works} />
      <SimpleSteps data={homepageData?.get_started_steps} />
      <Testimonial data={testimonialData} />
      <Pricing data={subscriptionData} />
      <Struggling />
    </>
  );
};

export default Home;
