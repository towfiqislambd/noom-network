import { Link } from 'react-router-dom';
import phoneIcon from '../assets/icons/phone.png';
import mailIcon from '../assets/icons/email.png';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import x from '../assets/icons/x.png';
import tiktok from '../assets/icons/tiktok.png';
import { useFooterInfo, useSocialInfo } from '@/hooks/cms.queries';

const Footer = () => {
  const { data: footerInfoData } = useFooterInfo();
  const { data: socialInfo } = useSocialInfo();

  return (
    <footer>
      <div className="text-white py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 gap-8 2xl:gap-10 3xl:gap-16">
          {/* Logo */}
          <div className="3xl:col-span-2">
            <img
              className=""
              src={`${import.meta.env.VITE_SITE_URL}/${footerInfoData?.logo}`}
              alt="footerLogo"
            />
            <p className="mt-5 2xl:w-4/5 opacity-[0.8]">
              Optimizing Real Estate Portfolios for Maximum Performance and
              Growth
            </p>
          </div>
          {/* Quick Links */}
          <div className="">
            <h3 className="text-xl opacity-90 font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3 opacity-85">
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Address */}
          <div className="">
            <h3 className="text-xl opacity-90 font-medium mb-5">Address</h3>
            <p className="opacity-85">{footerInfoData?.address}</p>
          </div>
          {/* Contact */}
          <div className="">
            <h3 className="text-xl opacity-90 font-medium mb-5">Contacts</h3>
            <a
              href={`tel:${footerInfoData?.phone}`}
              className="flex flex-wrap mb-3 gap-2 2xl:gap-3 items-center"
            >
              <img src={phoneIcon} alt="phone" />
              <span className="opacity-85">{footerInfoData?.phone}</span>
            </a>

            <Link
              to={`mailto:${footerInfoData?.email}`}
              className="flex mb-7 gap-2 2xl:gap-3 items-center"
            >
              <img src={mailIcon} alt="email" />
              <span className="opacity-85">{footerInfoData?.email}</span>
            </Link>
            <div className="social_icons flex items-center gap-3">
              {socialInfo?.map((item) => (
                <a
                  target="_blank"
                  key={item?.id}
                  className="hover:scale-125 duration-300"
                  href={item?.profile_link}
                >
                  <img
                    src={
                      item?.social_media == 'facebook'
                        ? facebook
                        : item?.social_media == 'twitter'
                        ? x
                        : item?.social_media == 'linkedin'
                        ? tiktok
                        : instagram
                    }
                    alt="facebook"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* copyright part */}
      <div className="text-center bg-copyrightBg py-5 text-primaryTextColor">
        <p className="container font-medium">
          {footerInfoData?.copyright_text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
