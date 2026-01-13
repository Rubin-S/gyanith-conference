// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MdEmail, MdLocationOn, MdCalendarToday } from "react-icons/md";

import logo from "../../assets/logo/NITPY.png";

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about-us" },
  { title: "Committees", url: "/committees" },
  { title: "Call for Papers", url: "/call-for-papers" },
  { title: "Submission", url: "/submission" },
  { title: "Publications", url: "/publications" },
  { title: "Dates", url: "/important-dates" },
  { title: "Contact", url: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    mobileOpen ? disablePageScroll() : enablePageScroll();
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* WRAPPER: The entire header (Nav + Info Bar) is now fixed at the top.
      */}
      <header
        className={`
          fixed inset-x-0 top-0 z-40 transition-all duration-300
          ${scrolled || mobileOpen ? "shadow-md" : ""}
        `}
      >
        
        {/* ---------------------------------------------------------------------------
            SECTION 1: MAIN NAVIGATION (White Background)
            This is now visually FIRST.
        --------------------------------------------------------------------------- */}
        <div 
          className={`
            border-b transition-colors duration-300
            ${scrolled || mobileOpen ? "bg-white/95 backdrop-blur-md border-gray-200" : "bg-white border-gray-100"}
          `}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo Area */}
              <NavLink to="/" className="flex items-center gap-3 group">
                <img src={logo} alt="ICDTSES Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                <div className="hidden xl:block">
                  <span className="block font-heading font-bold text-primary-900 text-lg leading-none tracking-tight">ICDTSES</span>
                  <span className="block text-xs font-semibold text-secondary-600 tracking-wider">2026</span>
                </div>
              </NavLink>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.url}
                    to={item.url}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? "text-primary-700 bg-primary-50" 
                        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </nav>

              {/* CTA Button & Mobile Toggle */}
              <div className="flex items-center gap-4">
                <NavLink 
                  to="/registration" 
                  className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-secondary-500 rounded-lg hover:bg-secondary-600 shadow-md shadow-secondary-500/20"
                >
                  Register
                </NavLink>

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* ---------------------------------------------------------------------------
          MOBILE NAVIGATION DRAWER
      --------------------------------------------------------------------------- */}
      <div 
        className={`
          fixed inset-0 z-30 bg-white lg:hidden transition-transform duration-300 ease-in-out pt-24 px-6 pb-6
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full space-y-6 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-xl font-heading font-bold transition-colors block py-2
                ${isActive ? "text-primary-600" : "text-gray-900"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
          
          <div className="mt-auto pt-8 border-t border-gray-100 space-y-4">
            <NavLink 
              to="/registration" 
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-primary-600 rounded-xl shadow-lg"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}