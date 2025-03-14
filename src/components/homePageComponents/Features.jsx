import { useOurFeathers } from '@/hooks/cms.queries';
import Feather from './Feather';

const Features = () => {
  const { data: ourFeathers } = useOurFeathers();
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-28">
      <div className="container">
        <div className="mb-10 sm:mb-16">
          <h2 className="max-w-[572px] text-2xl sm:text-3xl lg:text-4xl font-semibold text-headingTextColor mb-4 sm:mb-5 ${sectionTitleClass">
            Boost Your Real Estate Investment with Our Features
          </h2>
          <p className="max-w-[556px] text-lg text-[#101828] ${sectionDescClass}">
            Manage properties, track appreciation, and grow your portfolio with
            ease using our smart tools and insights
          </p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {ourFeathers?.map((feather) => (
            <Feather key={feather.id} feather={feather} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
