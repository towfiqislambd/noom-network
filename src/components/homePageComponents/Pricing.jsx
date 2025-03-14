import SectionTitle from '../common/SectionTitle';
import { useSubscription } from '@/hooks/cms.queries';
import SubscriptionCard from '../Cards/SubscriptionCard';

const Pricing = () => {
  const { data: subscriptionData } = useSubscription();
  return (
    <section className="bg-[#F5FBFF] py-14 sm:py-20">
      <div className="container">
        <SectionTitle
          sectionDescClass="max-w-[614px]"
          sectionTitle="Get Started with Some Simple Steps"
          sectionDesc="Easily manage properties, track appreciation, and grow your portfolio with our smart tools"
        ></SectionTitle>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {subscriptionData?.map((item, index) => (
            <SubscriptionCard light={index == 1} key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
