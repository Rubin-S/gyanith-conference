// src/components/layout/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn, MdSchool, MdCalendarToday } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

// Ensure logo path is correct
import logo from "../../assets/logo/NITPY.png"; 

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Committees", to: "/committees" },
  { label: "Call for Papers", to: "/call-for-papers" },
  { label: "Registration", to: "/registration" },
  { label: "Contact", to: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 font-sans">
      
      {/* ---------------------------------------------------------------------------
          MAIN GRID
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Organization Branding */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl w-fit">
              <img src={logo} alt="NITPY Logo" className="h-12 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-xl mb-2 tracking-wide">ICRAIT - 2026</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                International Conference on Recent Advances in <br/> Industry 4.0 Technologies.
              </p>
            </div>
            <div className="pt-4">
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">Organized By</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Depts. of Mechanical Engineering & <br/>
                Computer Science Engineering,<br/>
                NIT Puducherry
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-b border-slate-700 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => 
                      `hover:text-yellow-400 transition-colors flex items-center gap-2 ${isActive ? 'text-yellow-400 font-bold' : ''}`
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact / Location */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-b border-slate-700 pb-2 inline-block">
              Conference Venue
            </h4>
            <div className="space-y-6 text-sm">
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-yellow-500">
                   <MdLocationOn size={20} />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">National Institute of Technology Puducherry</h5>
                  <p className="text-slate-400 leading-relaxed">
                    Thiruvettakudy, Karaikal - 609609<br/>
                    Union Territory of Puducherry, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-yellow-500">
                   <MdCalendarToday size={20} />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Date</h5>
                  <p className="text-slate-400">
                    27th - 28th February, 2026
                  </p>
                </div>
              </div>

            </div>

             {/* Socials */}
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#4267B2] hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------------------------------
          BOTTOM BAR
      --------------------------------------------------------------------------- */}
      <div className="container mx-auto px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>
          &copy; 2026 NIT Puducherry. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Institute of National Importance</span>
        </div>
      </div>

    </footer>
  );
}