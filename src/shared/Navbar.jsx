import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import useAuth from "@/hooks/useAuth";
import { useLogOut } from "@/hooks/auth.hook";
import { useFooterInfo } from "@/hooks/cms.queries";
import Loader from "@/components/Loader/Loader";

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const { mutate: logOutMutate } = useLogOut();
  const location = useLocation().pathname;
  const { data: siteData, isLoading } = useFooterInfo();

  if (isLoading) {
    return <Loader />;
  }

  // navLinks:
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/aboutUs",
      title: "About Us",
    },
    {
      path: "/contactUs",
      title: "Contact Us",
    },
    {
      path: "/dashboard/myPortfolio",
      title: "Dashboard",
    },
  ];

  const handleLogout = () => {
    logOutMutate();
  };
  return (
    <>
      <nav className="lg:py-4 py-2 z-50 border-b bg-white sticky top-0">
        <div className="container flex items-center justify-between">
          {/* Nav Logo */}
          <Link to="/">
            <img
              className="w-28 md:w-32 xl:w-auto"
              src={`${import.meta.env.VITE_SITE_URL}/${siteData?.logo}`}
              alt="logo"
            />
          </Link>

          {/* Nav Links */}
          <ul className="hidden xl:flex allLinks items-center gap-5 2xl:gap-7 text-xl font-medium">
            {navLinks?.map(item => (
              <li key={item?.title}>
                <NavLink
                  to={item?.path}
                  className={({ isActive }) =>
                    `group relative px-4 overflow-hidden pb-2 duration-300 ease-in-out ${
                      isActive ? "text-primaryBgColor" : "text-current"
                    }`
                  }
                >
                  <span className="relative z-10">{item?.title}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-btnBg transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out ${
                      location == item?.path ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* auth btn */}
          {user ? (
            <div className="hidden xl:flex items-center gap-5">
              <div className="font-medium hover:text-primaryBgColor duration-300 text-lg text-primaryTextColorColor">
                <Link
                  to="/dashboard/myPortfolio"
                  className="flex items-center gap-2"
                >
                  <FaCircleUser className="size-8 cursor-pointer" />
                  <span>{user?.name}</span>
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="bg-primaryBgColor hover:bg-slate-100 hover:text-primaryBgColor border-2 border-primaryBgColor transition-all duration-500 text-lg text-white px-5 py-2 rounded-[5px] shadow"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="hidden xl:flex items-center gap-5">
              <Link
                className="font-medium hover:text-primaryBgColor duration-300 text-lg text-primaryTextColorColor"
                to="/auth/login"
              >
                Log In
              </Link>
              <Link
                className="bg-primaryBgColor hover:bg-slate-100 hover:text-primaryBgColor border-2 border-primaryBgColor transition-all duration-500 text-lg text-white px-5 py-2 rounded-[5px] shadow"
                to="/auth/signup"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Hamburger btn */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="xl:hidden w-10 h-9 bg-primaryBgColor text-white rounded grid place-items-center"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </nav>
      {/* Side Navbar */}
      <SideNavbar user={user} isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
