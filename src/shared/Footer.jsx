import { Link } from "react-router-dom";
import footerLogo from "../assets/svg/footerLogo.svg"
import phoneIcon from "../assets/icons/phone.png"
import mailIcon from "../assets/icons/email.png"
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import x from "../assets/icons/x.png"
import tiktok from "../assets/icons/tiktok.png"

const Footer = () => {
    return (
        <footer>
            <div className="text-white py-12">
                <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 gap-8 2xl:gap-10 3xl:gap-16">
                    {/* Logo */}
                    <div className="3xl:col-span-2">
                        <img className="" src={footerLogo} alt="footerLogo" />
                        <p className="mt-5 2xl:w-4/5 opacity-[0.8]">Optimizing Real Estate Portfolios for Maximum Performance and Growth</p>
                    </div>
                    {/* Quick Links */}
                    <div className="">
                        <h3 className="text-xl opacity-90 font-medium mb-5">Quick Links</h3>
                        <ul className="space-y-3 opacity-85">
                            <li><Link to='/aboutUs'>About Us</Link></li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/contactUs'>Contact</Link></li>
                        </ul>
                    </div>
                    {/* Address */}
                    <div className="">
                        <h3 className="text-xl opacity-90 font-medium mb-5">Address</h3>
                        <p className="opacity-85">2801 Wade Hampton Blvd South Carolina</p>
                    </div>
                    {/* Contact */}
                    <div className="">
                        <h3 className="text-xl opacity-90 font-medium mb-5">Contacts</h3>
                        <p className="flex flex-wrap mb-3 gap-2 2xl:gap-3 items-center">
                            <img src={phoneIcon} alt="phone" />
                            <span className="opacity-85">+1 3300 220 1100</span>
                        </p>
                        <p className="flex mb-7 gap-2 2xl:gap-3 items-center">
                            <img src={mailIcon} alt="email" />
                            <span className="opacity-85">info@noomnetwork.com</span>
                        </p>
                        <div className="social_icons flex items-center gap-3">
                            <a className="hover:scale-125 duration-300" href="#"><img src={facebook} alt="facebook" /></a>
                            <a className="hover:scale-125 duration-300" href="#"><img src={instagram} alt="instagram" /></a>
                            <a className="hover:scale-125 duration-300" href="#"><img src={x} alt="x" /></a>
                            <a className="hover:scale-125 duration-300" href="#"><img src={tiktok} alt="tiktok" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright part */}
            <div className="text-center bg-copyrightBg py-5 text-primaryTextColor">
                <p className="container font-medium">Copyright@ Logipsum Limited. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;