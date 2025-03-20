import useAuth from '@/hooks/useAuth';
import {
  PricingCardTickLight,
  PricingCardTickSvg,
} from '../SvgContainer/SvgContainer';
import toast from 'react-hot-toast';
import { useSubscriptionPlan } from '@/hooks/cms.mutations';
import { useState } from 'react';
import { ImSpinner6 } from 'react-icons/im';

const SubscriptionCard = ({ data, light }) => {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: subscriptionPlanMutation } =
    useSubscriptionPlan(setLoading);
  const { user } = useAuth();
  // console.log(data);

  const handleSubscription = async () => {
    // Add your subscription logic here
    if (!user) {
      toast.error('Please login to subscribe to a plan');
      return;
    } else {
      if (data?.price == 5) {
        const updatedData = {
          stripe_price_id: data?.stripe_price_id,
          success_url: 'http://localhost:5173/',
          cancel_url: 'http://localhost:5173/',
          type: data?.type,
        };
        if (user?.type == 'monthly') {
          toast.error('You are already subscribed to this plan');
          return;
        } else {
          await subscriptionPlanMutation(updatedData);
        }
      }
      if (data?.price == 50) {
        const updatedData = {
          stripe_price_id: data?.stripe_price_id,
          success_url: 'http://localhost:5173/',
          cancel_url: 'http://localhost:5173/',
          type: data?.type,
        };
        if (user?.type == 'yearly') {
          toast.error('You are already subscribed to this plan');
          return;
        } else {
          await subscriptionPlanMutation(updatedData);
        }
      }
    }
  };
  return (
    <div
      className={`w-full xl:w-[450px] space-y-3 border rounded-xl p-4 sm:p-6  border-primaryBgColor ${
        light ? 'bg-primaryBgColor text-white' : 'bg-white'
      }`}
    >
      <span className="font-medium text-xl">{data?.name}</span>
      <p className="flex items-center pb-3">
        <span className="text-3xl font-semibold">
          ${data?.price.toFixed(2)}
        </span>
        <span className={`text-sm ${light ? '' : 'text-primaryTextColor'}`}>
          /{data?.type}
        </span>
      </p>
      <button
        onClick={handleSubscription}
        className={`duration-300 flex items-center justify-center  border-gray-400 font-medium w-full py-2 md:py-3 border rounded-lg shadow-sm ${
          light
            ? 'bg-white text-black'
            : 'hover:text-white hover:bg-primaryBgColor'
        }`}
      >
        {loading ? (
          <ImSpinner6 className={`animate-spin text-2xl`} />
        ) : (
          'Subscribe'
        )}
      </button>
      <ul className="space-y-4 pt-3">
        <li className="flex items-center gap-2">
          {light ? <PricingCardTickLight /> : <PricingCardTickSvg />}
          <span
            className={`${
              light ? 'text-white' : 'text-primaryTextColor'
            } text-base`}
          >
            Limited Property Listings
          </span>
        </li>
        <li className="flex items-center gap-2">
          {light ? <PricingCardTickLight /> : <PricingCardTickSvg />}
          <span
            className={`${
              light ? 'text-white' : 'text-primaryTextColor'
            } text-base`}
          >
            Basic Search Filters
          </span>
        </li>
        <li className="flex items-center gap-2">
          {light ? <PricingCardTickLight /> : <PricingCardTickSvg />}
          <span
            className={`${
              light ? 'text-white' : 'text-primaryTextColor'
            } text-base`}
          >
            View Property Insights
          </span>
        </li>
        <li className="flex items-center gap-2">
          {light ? <PricingCardTickLight /> : <PricingCardTickSvg />}
          <span
            className={`${
              light ? 'text-white' : 'text-primaryTextColor'
            } text-base`}
          >
            Contact Support
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SubscriptionCard;
