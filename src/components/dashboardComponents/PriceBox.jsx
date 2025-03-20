import { useSubscription } from '@/hooks/cms.queries';
import SubscriptionCard from '../Cards/SubscriptionCard';

const PriceBox = () => {
  const { data: subscriptionData } = useSubscription();
  return (
    <>
      <h3 className="text-2xl font-semibold mb-3">Billing & Subscription </h3>
      <p className="text-primaryTextColor">
        Keep track of your subscription details, update your billing information
        and control your account payment
      </p>
      <div className="flex flex-col lg:flex-row gap-5 mt-10 items-center justify-center mb-14">
        {subscriptionData?.map((item, index) => (
          <SubscriptionCard light={index == 1} key={item?.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default PriceBox;
