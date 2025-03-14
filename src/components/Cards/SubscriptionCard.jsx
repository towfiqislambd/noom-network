import {
  PricingCardTickLight,
  PricingCardTickSvg,
} from '../SvgContainer/SvgContainer';
const SubscriptionCard = ({ data, light }) => {
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
        className={`block duration-300  border-gray-400 font-medium w-full py-2 md:py-3 border rounded-lg shadow-sm ${
          light
            ? 'bg-white text-black'
            : 'hover:text-white hover:bg-primaryBgColor'
        }`}
      >
        Subscribe
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
