import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="hidden xs:flex items-center order-1 md:order-2">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          <div className="md:hidden order-2">
            <span
              className="text-3xl cursor-pointer text-red-700 hover:text-red-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#9776;
            </span>
          </div>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 flex flex-col bg-white text-gray-700 hover:bg-red-50 hover:text-red-700 h-screen w-48 xs:w-1/2 sm:w-1/3 md:w-1/4 p-2.5 pl-4 transition-all duration-500 z-10 shadow-lg">
              <Link>
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  className="mt-0 mr-3 h-12"
                  alt="Logo"
                />
              </Link>
              <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                <div
                  role="button"
                  tabIndex="0"
                  className="flex xs:hidden items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/")}
                >
                  Login
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  className="flex xs:hidden items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/")}
                >
                  Get Started
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/")}
                >
                  Home
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/about")}
                >
                  About
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/contact")}
                >
                  Contact
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 focus:bg-red-50 hover:text-red-900 focus:text-red-900 outline-none"
                  onClick={() => handleMenuToggle("/github")}
                >
                  GitHub Followers
                </div>
              </nav>
            </div>
          )}

          {/* Desktop Menu */}
          <div
            className="hidden md:flex justify-between items-center w-auto order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-0 font-medium lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  GitHub Followers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
