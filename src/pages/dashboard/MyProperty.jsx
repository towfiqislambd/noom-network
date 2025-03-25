import PropertyCard from '@/components/dashboardComponents/PropertyCard';
import { useGetAllProperties } from '@/hooks/cms.queries';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

const MyProperty = () => {
  const { setLoading } = useAuth();
  const { data: allProperties, isLoading } = useGetAllProperties();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    setLoading(false);
  }, [isLoading, setLoading]);
  return (
    <div className="bg-white rounded-xl p-5 md:px-[30px] md:3xl:px-[100px] md:py-[30px] 3xl:py-[50px]">
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-8 text-headingTextColor">
        Property Listing
      </h3>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {allProperties?.map((data) => (
          <PropertyCard key={data.id} data={data?.porperty[0]}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default MyProperty;
