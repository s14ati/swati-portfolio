import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaArrowUp,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import gmail from "../assets/gamil.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-gray-800/80 bg-[#070a12] pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <FaCode />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Swati M Gupta
              </span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Frontend Developer & MCA Graduate focused on building intuitive,
              responsive, and performance-driven web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Certifications",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/swati-m-gupta-57b61a226"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition-all"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/s14ati"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-pink-500 hover:bg-pink-600/20 transition-all"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:swati14012000@gmail.com"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center p-2.5 hover:border-indigo-500 hover:bg-indigo-600/20 transition-all"
                title="Email"
              >
                <img
                  src={gmail}
                  alt="Gmail"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 pt-2 cursor-pointer transition"
            >
              <span>Back to top</span>
              <FaArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Swati M Gupta. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <FaHeart className="text-pink-500 inline" size={11} />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;