import { Link, NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";
import { LuSettings } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { RiGalleryView2, RiHomeOfficeLine, RiMoneyPoundCircleLine } from "react-icons/ri";
import { useState } from "react";

const SideDashboard = ({ isOpen, setOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <>
            {/* Blur Overlay */}
            <div onClick={() => setOpen(false)} className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            </div>

            {/* Sidebar */}
            <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-500 transition-transform w-[280px] fixed top-0 z-[999] xl:hidden left-0 bg-white px-5 py-10 md:py-[70px] shadow-lg overflow-y-auto max-h-screen min-h-screen`}>

                {/* logo */}
                <Link onClick={() => setOpen(false)} to='/' className="">
                    <img src={logo} alt="logo" className="mx-auto" />
                </Link>

                {/* NavLinks */}
                <div id="dashboardSidebar" className="relative !h-full">
                    {/* Menu Links */}
                    <ul className="md:mt-14 mt-8 font-medium md:text-lg space-y-3">
                        <li>
                            <NavLink onClick={() => setOpenDropdown(!openDropdown)} className='flex hover:bg-[#E6ECFD] hover:text-[#025397] hover:scale-[1.02] transition-all duration-300 rounded-[7px] px-[20px] py-[10px] gap-3 items-center' to='/dashboard/myPortfolio'>
                                <RiGalleryView2 className="text-2xl" />
                                <span>My Portfolio</span>
                            </NavLink>
                            <div className={`${!openDropdown && 'hidden'} dropdown_menu rounded py-5 ps-8 3xl:ps-12 pe-5 bg-[#f3f5fa] mt-2 text-base`}>
                                <NavLink onClick={() => setOpen(false)} to='/dashboard/myPortfolio/projectCashFlow' className='inline-block mb-[14px] hover:text-[#025397] text-[#222] hover:scale-[1.02] transition-all duration-300'>- Project Cash Flow</NavLink>
                                <NavLink onClick={() => setOpen(false)} to='/dashboard/myPortfolio/portfolioForecasting' className='flex hover:text-[#025397] text-[#222] hover:scale-[1.02] transition-all duration-300 '>- Portfolio Forecasting</NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink onClick={() => setOpen(false)} className='flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center' to='/dashboard/myProperty'>
                                <RiHomeOfficeLine className="text-2xl" />
                                <span>My Property</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setOpen(false)} className='flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center' to='/dashboard/subscription'>
                                <RiMoneyPoundCircleLine className="text-2xl" />
                                <span>Subscription</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setOpen(false)} className='flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center' to='/dashboard/settings'>
                                <LuSettings className="text-2xl" />
                                <span>Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <button className='flex w-full hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center'>
                                <FiLogOut className="text-2xl" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* cancel btn */}
                <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
                    <RxCross2 className="text-2xl" />
                </button>
            </div>
        </>
    );
};

export default SideDashboard;