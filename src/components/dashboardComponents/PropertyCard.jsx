import { Link } from 'react-router-dom';
import location from '../../assets/icons/location.png';

const PropertyCard = ({ data }) => {
  console.log(data);
  return (
    <Link
      to={`/dashboard/property-details/${data?.id}`}
      className="p-4 rounded-lg overflow-hidden hover:scale-[1.05] transition-transform duration-500 bg-[#E6ECFD]"
    >
      <figure>
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${
            data?.porperty_image[0]?.image
          }`}
          alt="property"
          className="object-cover w-full h-full"
        />
      </figure>
      <span className="font-semibold text-xl pb-1 inline-block pt-5">
        {data?.property_name}
      </span>
      <p className="flex gap-3 3xl:text-lg items-center text-[#4F4F4F]">
        <img src={location} alt="location" className="object-cover" />
        <span>{data?.property_address}</span>
      </p>
    </Link>
  );
};

export default PropertyCard;
