import search from '../assets/icons/search.png';
import notification from '../assets/icons/notification.png';
import profileImg from '../assets/JoshuaMeeks.png';
import logo from '../assets/logo.png';
import rightArrow from '../assets/icons/rightArrow.png';
import SideDashboard from '@/shared/SideDashboard';
import { useState } from 'react';
import { Tooltip } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RiGalleryView2 } from 'react-icons/ri';
import { LuSettings } from 'react-icons/lu';
import { FiLogOut } from 'react-icons/fi';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { FaBars, FaChartBar } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const notificationData = [
  {
    id: 1,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '2 second ago',
  },
  {
    id: 2,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '2 days ago',
  },
  {
    id: 3,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '1/11/2025',
  },
  {
    id: 4,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '5 second ago',
  },
  {
    id: 5,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '5 hours ago',
  },
  {
    id: 6,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '2 second ago',
  },
  {
    id: 7,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '3 days ago',
  },
  {
    id: 8,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '4 second ago',
  },
  {
    id: 9,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '2 minutes ago',
  },
  {
    id: 10,
    userProfile: 'https://i.ibb.co.com/BH922QRG/profile.jpg',
    title: 'New Property Alert!',
    duration: '8 second ago',
  },
];

const DashboardLayout = () => {
  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <div className="min-h-screen max-h-screen flex overflow-hidden">
        {/* Dashboard Sidebar Large */}
        <div
          className={`${
            !showSmallSidebar ? 'hidden 2xl:block' : 'hidden'
          } min-h-screen max-h-screen w-[280px] 3xl:w-[325px] py-10 px-5 border-r shadow bg-white`}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div id="dashboardSidebar" className="relative h-full">
            {/* Menu Links */}
            <ul className="mt-14 font-medium text-lg space-y-3">
              <li>
                <NavLink
                  className="flex hover:bg-[#E6ECFD] hover:text-[#025397] hover:scale-[1.02] transition-all duration-300 rounded-[7px] px-[20px] py-[10px] justify-between gap-3 items-center"
                  to="/dashboard/myPortfolio"
                >
                  <p className="flex gap-3 items-center">
                    <RiGalleryView2 className="text-2xl" />
                    <span>Create Property</span>
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center"
                  to="/dashboard/myProperty"
                >
                  <RiHomeOfficeLine className="text-2xl" />
                  <span>My Property</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center"
                  to="/dashboard/subscription"
                >
                  <RiMoneyPoundCircleLine className="text-2xl" />
                  <span>Subscription</span>
                </NavLink>
              </li>
            </ul>
            {/* Logout and setting btn */}
            <ul className="font-medium absolute bottom-[15%] w-full text-lg space-y-2">
              <li>
                <NavLink
                  className="flex hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center"
                  to="/dashboard/settings"
                >
                  <LuSettings className="text-2xl" />
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <button className="flex w-full hover:scale-[1.02] hover:bg-[#E6ECFD] hover:text-[#025397] transition-all duration-500 rounded-[7px] px-[20px] py-[10px] gap-3 items-center">
                  <FiLogOut className="text-2xl" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Dashboard Sidebar Small */}
        <div
          className={`${
            showSmallSidebar ? '' : '2xl:hidden'
          } hidden xl:block min-h-screen max-h-screen w-[80px] py-10 px-5 border-r shadow bg-white`}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="w-full object-cover" alt="logo" />
          </Link>
          <div id="dashboardSidebar" className="relative h-full">
            {/* Menu Links */}
            <div className="mt-14 font-medium text-lg space-y-10">
              <Tooltip placement="rightTop" title="My Portfolio">
                <NavLink
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="hover:text-[#025397] inline-block transition-all duration-300 pr-3"
                  to="/dashboard/myPortfolio"
                >
                  <RiGalleryView2 className="text-[26px]" />
                </NavLink>
              </Tooltip>
              <Tooltip placement="rightTop" title="Project Cash Flow">
                <NavLink
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="hover:text-[#025397] inline-block transition-all duration-300 pr-3"
                  to="/dashboard/myPortfolio/projectCashFlow"
                >
                  <FaChartBar className="text-[26px]" />
                </NavLink>
              </Tooltip>
              <Tooltip placement="rightTop" title="Portfolio Forecasting">
                <NavLink
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="hover:text-[#025397] inline-block transition-all duration-300 pr-3"
                  to="/dashboard/myPortfolio/portfolioForecasting"
                >
                  <FaRegUserCircle className="text-[26px]" />
                </NavLink>
              </Tooltip>
              <Tooltip placement="rightTop" title="My Property">
                <NavLink
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="hover:text-[#025397] inline-block transition-all duration-300 pr-3"
                  to="/dashboard/myProperty"
                >
                  <RiHomeOfficeLine className="text-[26px]" />
                </NavLink>
              </Tooltip>
              <Tooltip placement="rightTop" title="Subscription">
                <NavLink
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="hover:text-[#025397] inline-block transition-all duration-300 pr-3"
                  to="/dashboard/subscription"
                >
                  <RiMoneyPoundCircleLine className="text-[26px]" />
                </NavLink>
              </Tooltip>
            </div>
            {/* Logout and setting btn */}
            <div className="font-medium absolute bottom-[10%] w-full text-lg space-y-6">
              <Tooltip placement="rightTop" title="Settings">
                <NavLink
                  className="hover:text-[#025397] transition-all inline-block duration-300 pr-3"
                  to="/dashboard/settings"
                >
                  <LuSettings className="text-[26px]" />
                </NavLink>
              </Tooltip>
              <Tooltip placement="rightTop" title="Logout">
                <button className="hover:text-[#025397] transition-all inline-block duration-300 pr-3">
                  <FiLogOut className="text-[26px]" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div
          className={`${
            showSmallSidebar
              ? 'w-[calc(100%-80px)]'
              : 'w-full 2xl:w-[calc(100%-280px)] 3xl:w-[calc(100%-325px)]'
          } min-h- max-h-screen relative`}
        >
          {/* Dashboard Header */}
          <div className="grid p-3 md:py-5 md:px-5 xl:px-10 md:grid-cols-2 xl:grid-cols-1 md:gap-5 items-center">
            {/* <div className="hidden xl:block"></div> */}
            <div className="relative hidden   w-full xl:justify-self-end">
              <input
                type="text"
                placeholder="Search your property"
                className="py-2 w-full outline-none ps-3 pr-10 border rounded-lg bg-[#E6ECFD]"
              />
              <button className="absolute top-2 right-2">
                <img src={search} alt="search" />
              </button>
            </div>
            <div className="flex justify-between md:justify-self-end gap-2 md:gap-3 items-center">
              {/* notification icon */}
              <button
                onClick={() => setShowNotification(!showNotification)}
                className="hidden xl:block"
              >
                <img src={notification} alt="notification" />
              </button>
              {/* user profile image */}
              <div className="flex gap-2 items-center">
                <figure className="md:w-9 md:h-9 w-8 rounded-full">
                  <img
                    src={profileImg}
                    alt="profileImg"
                    className="w-full h-full object-cover rounded-full"
                  />
                </figure>
                <p className="font-roboto lg:hidden text-[#333] font-medium">
                  Mosharaf Hossain
                </p>
              </div>
              {/* user name */}
              <p className="font-roboto hidden lg:block text-[#333] font-medium">
                Mosharaf Hossain
              </p>
              <div className="flex gap-3 item-center">
                {/* notification trigger from here */}
                <button
                  onClick={() => setShowNotification(!showNotification)}
                  className="xl:hidden"
                >
                  <img src={notification} alt="notification" className="" />
                </button>
                <button
                  onClick={() => setOpen(!isOpen)}
                  className="xl:hidden w-8 h-8 md:w-10 md:h-9 bg-primaryBgColor text-white rounded grid place-items-center"
                >
                  <FaBars className="text-xl md:text-2xl" />
                </button>
              </div>
              {/* Hamburger btn for side Dashboard */}
            </div>
            {/* Sidebar toggle btn */}
            <div className="absolute hidden 2xl:block top-6 -left-[14px]">
              <button onClick={() => setShowSmallSidebar(!showSmallSidebar)}>
                <img src={rightArrow} alt="rightArrow" />
              </button>
            </div>
          </div>

          <div
            onClick={() => setShowNotification(false)}
            className="bg-[#F2F4F7] md:min-h-[calc(100%-80px)] md:max-h-[calc(100%-80px)] min-h-[calc(100%-60px)] max-h-[calc(100%-60px)] p-3 xs:p-5 lg:p-7 3xl:p-10 overflow-y-auto"
          >
            {/* Notification */}
            <div
              className={`${
                showNotification ? 'block' : 'hidden'
              } fixed bg-slate-50 top-14 md:top-20 right-3 md:right-5 xl:right-40 max-h-[420px] w-[280px] md:w-[320px] p-5 rounded-lg shadow-2xl overflow-y-scroll custom-scrollbar z-[999]`}
            >
              <div className="flex justify-between mb-5">
                <h3 className="text-xl font-semibold text-headingTextColor">
                  Notifications
                </h3>
                <button onClick={() => setShowNotification(!showNotification)}>
                  <RxCross2 className="text-2xl" />
                </button>
              </div>
              {notificationData.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center mb-5 gap-3"
                >
                  <figure className="w-9 h-9 rounded-full">
                    <img
                      src={notification.userProfile}
                      alt="profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </figure>
                  <div className="">
                    <p className="font-medium">{notification.title}</p>
                    <span className="text-gray-400 text-sm">
                      {notification.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Outlet */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <SideDashboard isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default DashboardLayout;
