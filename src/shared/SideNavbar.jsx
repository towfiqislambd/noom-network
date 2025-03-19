import { Link, NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import logo from '../assets/logo.png';
import { useLogOut } from '@/hooks/auth.hook';

const SideNavbar = ({ isOpen, setOpen, user }) => {
  const { mutate: logOutMutate } = useLogOut();

  const handleLogout = () => {
    setOpen(false);
    logOutMutate();
  };
  return (
    <>
      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } duration-500 transition-transform w-[280px] fixed top-0 z-[999] xl:hidden left-0 bg-white px-5 py-12 md:py-[70px] shadow-lg overflow-y-auto max-h-screen min-h-screen`}
      >
        {/* logo */}
        <Link onClick={() => setOpen(false)} to="/" className="">
          <img src={logo} alt="logo" className="mx-auto" />
        </Link>

        {/* NavLinks */}
        <ul
          id="sideNavbar"
          className="md:space-y-6 space-y-4 md:text-lg text-center mt-10 mb-5 font-medium"
        >
          <li>
            <NavLink
              className="block hover:bg-[#E6ECFD] hover:text-primaryBgColor duration-300 transition-all w-full py-2 rounded"
              onClick={() => setOpen(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block hover:bg-[#E6ECFD] hover:text-primaryBgColor duration-300 transition-all w-full py-2 rounded"
              onClick={() => setOpen(false)}
              to="/aboutUs"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block hover:bg-[#E6ECFD] hover:text-primaryBgColor duration-300 transition-all w-full py-2 rounded"
              onClick={() => setOpen(false)}
              to="/contactUs"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block hover:bg-[#E6ECFD] hover:text-primaryBgColor duration-300 transition-all w-full py-2 rounded"
              onClick={() => setOpen(false)}
              to="/dashboard/myPortfolio"
            >
              Dashboard
            </NavLink>
          </li>
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-center font-medium hover:text-primaryBgColor duration-300 text-lg text-primaryTextColorColor"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                className="block w-full text-center font-medium hover:text-primaryBgColor duration-300 text-lg text-primaryTextColorColor"
                to="/auth/login"
              >
                Log In
              </Link>
              <Link
                className="block w-11/12 mx-auto bg-primaryBgColor hover:bg-slate-100 hover:text-primaryBgColor border-2 border-primaryBgColor hover:scale-[1.02] text-center transition-all duration-500 md:text-lg text-white px-5 py-2 rounded-full shadow"
                to="/auth/signup"
              >
                Sign Up
              </Link>
            </>
          )}
        </ul>
        {/* cancel btn */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        >
          <RxCross2 className="text-2xl" />
        </button>
      </div>
    </>
  );
};

export default SideNavbar;
