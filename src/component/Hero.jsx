import React, { useState, useEffect } from "react";
// import heroImage from "../assets/image copy.png";
import heroImage from "../assets/image copy 3.png";
import gmail from "../assets/gamil.svg";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github_color.svg";
import { FaArrowRight, FaDownload, FaCode, FaGraduationCap, FaMagic, FaCheckCircle } from "react-icons/fa";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "MCA Graduate",
    "Responsive Websites",
  ];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setSpeed(1800); // pause on full text
        } else {
          setSpeed(100);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(150);
        } else {
          setSpeed(60);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Intro & Typewriter */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-indigo-300 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Open for Full-time Frontend Opportunities</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 tracking-wide">
              Hello there! 👋 I am
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Swati M <span className="gradient-text">Gupta</span>
            </h1>
          </div>

          {/* Animated Dynamic Role */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 flex items-center justify-center lg:justify-start gap-2 min-h-[48px]">
            <span className="text-gray-400 font-normal">I build modern</span>
            <span className="gradient-text-gold">
              {text}
              <span className="inline-block w-0.5 h-7 ml-1 bg-pink-500 animate-pulse align-middle" />
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
            Passionate Frontend Developer based in <span className="text-white font-medium">Agra, India</span>. 
            MCA Graduate specialized in building interactive, high-performance, and responsive web applications with React.js, Angular, and modern UI practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="/Swati_Gupta___Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-semibold text-gray-200 glass-panel-hover flex items-center gap-2 hover:text-white"
            >
              <FaDownload className="text-indigo-400 text-sm" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links & Connect */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
            <span className="font-medium text-gray-300">Connect with me:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/swati-m-gupta-57b61a226"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass-panel-hover flex items-center justify-center p-2.5 transition-all"
                title="LinkedIn Profile"
              >
                <img src={linkedIn} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>

              <a
                href="https://github.com/s14ati"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass-panel-hover flex items-center justify-center p-2.5 transition-all"
                title="GitHub Profile"
              >
                <img src={github} alt="GitHub" className="w-full h-full object-contain" />
              </a>

              <a
                href="mailto:swatimgupta@gmail.com"
                className="w-11 h-11 rounded-xl glass-panel-hover flex items-center justify-center p-2.5 transition-all"
                title="Send Email"
              >
                <img src={gmail} alt="Gmail" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Profile Visual Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Decorative Outer Glow Ring */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
            
            {/* Main Profile Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-square w-64 sm:w-80 md:w-96 max-w-full">
                <img
                  src={heroImage}
                  alt="Swati M Gupta"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient for aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent" />
                
                {/* Floating Experience / Education Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-gray-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <FaGraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">MCA Graduate</p>
                      <p className="text-[10px] text-gray-400">RBS Management Technical Campus, Agra</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                    <FaCheckCircle />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quick Stats Pills */}
            <div className="absolute -top-4 -right-4 glass-panel px-3.5 py-2 rounded-2xl border border-indigo-500/30 shadow-xl hidden sm:flex items-center gap-2 animate-float">
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <FaCode size={14} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">5+ Projects</p>
                <p className="text-[10px] text-gray-400">Frontend & UI</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 shadow-xl hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: "3s" }}>
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <FaMagic size={14} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Frontend Developer</p>
                <p className="text-[10px] text-gray-400">Clean & Fast Code</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;