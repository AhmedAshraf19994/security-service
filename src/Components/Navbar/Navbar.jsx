import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavItem from "../ui/NavItem";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/assets/images/WhatsApp Image 2024-04-11 at 3.04.29 PM.jpeg";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { scrollToTop } from "../../utils/scrollToTop";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //detect active link
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname === "contact"
      ? "hiring"
      : ""
  );

  // detect scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  //control the drop menu button
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // close hamburger items
  const handleClick = () => setIsMenuOpened(false);

  // handle navigate logic
  const handleNavigate = (ref) => {
    if (location?.pathname !== "/") {
      navigate("/");
    }
  };

  const handleClickToHome = (page) => {
    if (location.pathname === page) {
      scrollToTop();
    }
  };

  // track the page scroll
  window.onscroll = () => {
    window.pageYOffset == 0 ? setIsScrolled(false) : setIsScrolled(true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <header
        className={` fixed top-0 left-0 z-10 w-screen py-5  px-5 sm:px-8 flex flex-col items-center sm:h-[90px] bg-primary_bg justify-center ${
          !isMenuOpened && isScrolled ? "opacity-60" : " opacity-95"
        }
      `}
      >
        <nav className="w-full flex items-center justify-between xl:justify-around">
          {/* logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className=" w-[80px] h-[80px] cursor-pointer hover:scale-110 "
              />
              <span className="tracking-wide uppercase">mah-security</span>
            </div>
          </Link>

          {/* navbar links  */}
          <ul className=" hidden  sm:flex sm:gap-5  lg:gap-[40px] items-center   flex-shrink-0 text-lg  h-full ">
            <Link to="/" onClick={() => setActive("home")}>
              <li
                onClick={scrollToTop}
                className={`${
                  active === "home" ? "opacity-100 underline" : "opacity-70"
                }  hover:opacity-100`}
              >
                {" "}
                Home
              </li>{" "}
            </Link>

            {location.pathname === "/" && (
              <li
                className={`${
                  active === "services" ? "opacity-100 underline" : "opacity-70"
                } hover:opacity-100`}
              >
                <a
                  href="#services"
                  onClick={() => {
                    handleNavigate();
                    setActive("services");
                  }}
                >
                  Services
                </a>
              </li>
            )}

            {location.pathname === "/" && (
              <li
                className={`${
                  active === "about" ? "opacity-100 underline" : "opacity-70"
                } hover:opacity-100 `}
              >
                <a
                  href="#about"
                  onClick={() => {
                    handleNavigate();
                    setActive("about");
                  }}
                >
                  About Us
                </a>
              </li>
            )}
            {location.pathname === "/" && (
              <li
                className={`${
                  active === "contact" ? "opacity-100 underline" : "opacity-70"
                } hover:opacity-100`}
              >
                <a
                  href="#customization"
                  onClick={() => {
                    handleNavigate();
                    setActive("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            )}
            <li
              className={`${
                location.pathname === "/contact"
                  ? "opacity-100 underline "
                  : "opacity-70"
              } hover:opacity-100 `}
            >
              <Link
                to="/contact "
                onClick={() => {
                  setActive("hiring");
                }}
              >
                Looking for job
              </Link>
            </li>
          </ul>

          {/* hamburger icon */}
          <div
            className="  sm:hidden  cursor-pointer pr-6"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            {isMenuOpened ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </nav>

        {/* hamburger links */}
        {isMenuOpened && (
          <div
            id="menu-links"
            className="w-full  sm:hidden mt-2 flex  flex-col  items-start pl-4 text-l   "
          >
            <div
              className=" mb-1 hover:pl-4  transition-all duration-200 ease-in  shadow-lg "
              onClick={() => {
                handleClick();
                window.scrollTo(0, 0);
              }}
            >
              <Link to="/"> Home </Link>{" "}
            </div>
            <div
              className="mb-2 hover:pl-4  transition-all duration-200 ease-in  shadow-lg "
              onClick={handleClick}
            >
              <a href="#services" onClick={handleNavigate}>
                Services
              </a>
            </div>
            <div
              className="mb-2 hover:pl-4  transition-all duration-200 ease-in  shadow-lg"
              onClick={handleClick}
            >
              <a href="#about" onClick={handleNavigate}>
                About Us
              </a>
            </div>
            <div
              className="mb-2 hover:pl-4  transition-all duration-200 ease-in  shadow-lg"
              onClick={handleClick}
            >
              <a href="#customization" onClick={handleNavigate}>
                Contact
              </a>
            </div>
            <div
              className="mb-2 hover:pl-4  transition-all duration-200 ease-in  shadow-lg"
              onClick={handleClick}
            >
              <Link to="/contact "> Hiring </Link>
            </div>
          </div>
        )}

        {/*  */}
      </header>
    </>
  );
};

export default Navbar;
