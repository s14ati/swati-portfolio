import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaDownload,
  FaRocket,
  FaAward,
  FaCheck,
} from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "My Story", icon: FaLaptopCode },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "strengths", label: "Core Principles", icon: FaRocket },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Bridging technical knowledge with creative UI design to build
            impactful digital web experiences.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="glass-panel p-6 rounded-2xl text-center border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold gradient-text">
              5+
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Projects Completed
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold gradient-text">
              MCA
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Master's Degree
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold gradient-text">
              10+
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Technologies & Tools
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold gradient-text">
              100%
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Responsive Design
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <Icon className="text-base" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow inside box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {activeTab === "story" && (
            <div className="space-y-6 text-gray-300 leading-relaxed animate-fadeIn">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  <FaLaptopCode size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Passionate Frontend Engineer & Web Artisan
                </h3>
              </div>
              <p className="text-base sm:text-lg font-light text-gray-300">
                Hello! I'm{" "}
                <strong className="text-white font-semibold">
                  Swati M Gupta
                </strong>
                , a dedicated Web Developer with a passion for turning ideas
                into modern, intuitive web experiences. I enjoy combining clean
                code with thoughtful UI design to build responsive and
                user-friendly applications.
              </p>
              <p className="text-base sm:text-lg font-light text-gray-300">
                I specialize in building modern, responsive, and user-friendly
                web applications using{" "}
                <strong className="text-pink-400 font-semibold">
                  {" "}
                  React and Angular,
                </strong>{" "}
                where I love creating engaging interfaces, integrating APIs, and
                turning designs into functional, maintainable web applications.
                I'm always curious to learn, explore new technologies, and
                improve the way I build digital experiences.
              </p>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <FaGraduationCap size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Academic Journey & Foundation
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-lg font-bold text-white">
                      Master of Computer Applications (MCA)
                    </h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 w-fit">
                      Post Graduation
                    </span>
                  </div>
                  <p className="text-sm font-medium text-purple-400 mt-1">
                    RBS Management Technical Campus, Agra
                  </p>
                  <p className="text-sm text-gray-400 mt-2 font-light">
                    Developed a strong foundation in software engineering,
                    algorithms, programming, and modern web application
                    development, with a focus on building practical technical
                    skills.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "strengths" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">
                  <FaAward size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Core Development Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Responsive & Mobile-First",
                    desc: "Creating fluid, responsive layouts that provide a consistent experience across phones, tablets, and desktop screens.",
                  },
                  {
                    title: "Clean & Maintainable Code",
                    desc: "Writing clean, reusable, and well-structured code with a focus on maintainability and scalability.",
                  },
                  {
                    title: "Performance & User Experience",
                    desc: "Building fast, intuitive interfaces with a strong focus on usability, accessibility, and smooth user experiences.",
                  },
                  {
                    title: "Continuous Learning",
                    desc: "Continuously learning modern web technologies, improving development practices, and exploring new tools and frameworks.",
                  },
                  {
                    title: "API Integration & Problem Solving",
                    desc: "Integrating APIs, handling data efficiently, and solving real-world frontend challenges to build reliable applications.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex items-start gap-3"
                  >
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                      <FaCheck size={12} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resume CTA */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base">
                Want to review my complete background?
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Download my updated CV with educational and project details.
              </p>
            </div>
            <a
              href="/Swati_Gupta___Frontend developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-600/20 flex items-center gap-2 text-sm transition-all"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
