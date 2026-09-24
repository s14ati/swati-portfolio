import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaBuilding,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "EasyQ Solutions and Technologies Private Limited",
      location: "Banglore, India / Remote",
      duration: "Nov 2025 - June 2026",
      type: "Full-time",
      category: "work",
      badgeColor: "from-indigo-500 to-purple-600",
      description:
        "Building and enhancing responsive frontend features for a healthcare quality management platform using Angular, TypeScript, and modern web technologies.",
      responsibilities: [
        "Developed and enhanced modules/features across the QMS platform using Angular and TypeScript.",
        "Integrated REST APIs and handled backend responses, payloads, validations, and UI states.",
        "Implemented responsive Figma-based interfaces for laptop, tablet, and large-screen layouts.",
        "Worked on modules including DHF, Deviation, and RNA etc. along with enhancements across other product modules.",
        "Fixed UI bugs, functional issues, and production issues while collaborating with backend developers.",
        "Implemented features such as global search, filters, approval workflows, document handling, and user deactivation.",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "RxJS",
        "Angular Material",
        "REST APIs",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Career Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base font-light">
            Hands-on frontend engineering experience building responsive,
            scalable, and user-centric web applications with modern technologies
            and frameworks.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line (hidden on small mobile, visible sm+) */}
          <div className="hidden sm:block absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500/40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#090d16] border-2 border-indigo-500/60 items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-pink-500 group-hover:text-pink-400 shadow-xl shadow-indigo-500/20 transition-all duration-300 z-10">
                    <FaBriefcase size={16} />
                  </div>

                  {/* Empty Spacer Column for Desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full sm:pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group-hover:shadow-indigo-500/10">
                      {/* Subtle Ambient Glow */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${exp.badgeColor} text-white shadow-md`}
                        >
                          {exp.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800">
                          <FaCalendarAlt className="text-indigo-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-300 font-medium mt-1 mb-4">
                        <div className="flex items-center gap-1.5 text-indigo-400">
                          <FaBuilding size={14} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <FaMapMarkerAlt size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light"
                          >
                            <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0 text-xs" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-4 border-t border-gray-800/80">
                        <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-400">
                          <FaCode className="text-indigo-400" />
                          <span>Core Technologies:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Looking for a dedicated Frontend & React Developer?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              I am actively open to full-time Frontend Developer opportunities
              where I can apply my experience with Angular, React, JavaScript,
              and modern frontend technologies. Let’s build something remarkable
              together!
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-600/30 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="/Swati_Gupta___Frontend developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-gray-300 glass-panel hover:text-white hover:border-gray-600 transition-all"
              >
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
