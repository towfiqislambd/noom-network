import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <nav className="lg:py-4 py-2 z-50 border-b bg-white sticky top-0">
                <div className="container flex items-center justify-between">
                    {/* Nav Logo */}
                    <Link to="/">
                        <img className="w-28 md:w-32 xl:w-auto" src={logo} alt="logo" />
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden xl:flex allLinks items-center gap-5 2xl:gap-7 text-xl font-medium">
                        <li><NavLink className='px-4 hover:text-primaryBgColor border-transparent overflow-hidden border-b-2 hover:border-btnBg pb-2 duration-400' to='/'>Home</NavLink></li>
                        <li><NavLink className='px-4 hover:text-primaryBgColor border-transparent border-b-2 hover:border-btnBg pb-2 duration-400' to='/aboutUs'>About Us</NavLink></li>
                        <li><NavLink className='px-4 hover:text-primaryBgColor border-transparent border-b-2 hover:border-btnBg pb-2 duration-400' to='/contactUs'>Contact Us</NavLink></li>
                        <li><NavLink className='px-4 hover:text-primaryBgColor border-transparent border-b-2 hover:border-btnBg pb-2 duration-400' to='/dashboard/myPortfolio'>Dashboard</NavLink></li>
                    </ul>
                    {/* auth btn */}
                    <div className="hidden xl:flex items-center gap-5">
                        <Link className="font-medium hover:text-primaryBgColor duration-300 text-lg text-primaryTextColorColor" to='/auth/login'>Log In</Link>
                        <Link className="bg-primaryBgColor hover:bg-slate-100 hover:text-primaryBgColor border-2 border-primaryBgColor transition-all duration-500 text-lg text-white px-5 py-2 rounded-[5px] shadow" to='/auth/signup'>Sign Up</Link>
                    </div>
                    {/* Hamburger btn */}
                    <button onClick={() => setOpen(!isOpen)} className="xl:hidden w-10 h-9 bg-primaryBgColor text-white rounded grid place-items-center">
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </nav>
            {/* Side Navbar */}
            <SideNavbar isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};

export default Navbar;