import { Link } from 'react-router-dom';

const Hero = ({ data }) => {
  return (
    <header className="text-center pt-14 xs:pt-20 text-white">
      <div className="space-y-5 xs:space-y-7 xl:space-y-10 container mb-16">
        <h1 className="text-[#F9F9F9] xl:!leading-[60px] 2xl:!leading-[76px] max-w-[1219px] mx-auto font-grotesk font-medium md:font-semibold text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
          {data?.title}
        </h1>
        <p className="sm:text-lg lg:text-xl max-w-[621px] mx-auto opacity-80">
          {data?.sub_title}
        </p>
        <Link
          to={'/aboutUs'}
          data-aos="zoom-in"
          className="shadow-lg hover:scale-110 hover:bg-transparent duration-500 border hover:border-white hover:text-white bg-white rounded text-sm sm:text-base inline-block px-3 sm:px-5 text-[#025397] py-2 sm:py-3 font-medium"
        >
          {data?.button_text}
        </Link>
        {/* Evaluate Properties */}
      </div>
      <div className="container">
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
          alt="hero"
          className="mx-auto object-cover"
        />
      </div>
    </header>
  );
};

export default Hero;
