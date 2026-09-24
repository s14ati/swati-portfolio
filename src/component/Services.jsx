import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.svg";
import js from "../assets/js.png";
import react from "../assets/React.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import media from "../assets/media.png";
import github from "../assets/github-logo.png";
import vs from "../assets/vs.png";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import python from "../assets/python.webp";
import vite from "../assets/vite.svg";
import gitlab from "../assets/gitlab.svg";
import antigravity from "../assets/antigravity.svg";
import angular from "../assets/angular.svg";
import reactRouter from "../assets/react-router.svg";
import contextApi from "../assets/context-api.svg";
import postman from "../assets/postman.svg";
import { FaCode, FaLayerGroup, FaTools, FaLaptopCode } from "react-icons/fa";

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: FaCode,
      description:
        "Building responsive, modern, dynamic web applications with clean architecture.",
      skills: [
        { name: "React.js", icon: react },
        { name: "Angular", icon: angular },
        { name: "JavaScript (ES6+)", icon: js },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "HTML5", icon: html },
        { name: "CSS3 / Responsive Design", icon: css },
        { name: "Redux Toolkit", icon: redux },
        { name: "React Router", icon: reactRouter },
        { name: "Context API", icon: contextApi },
      ],
    },
    {
      id: "programming",
      title: "Programming & Core",
      icon: FaLaptopCode,
      description:
        "Programming fundamentals, problem-solving, and object-oriented programming concepts.",
      skills: [
        { name: "C++", icon: cpp },
        { name: "C", icon: c },
        { name: "Python", icon: python },
      ],
    },
    {
      id: "tools",
      title: "Tools & Development",
      icon: FaTools,
      description:
        "Development workflows, version control, build tools, and modern AI-powered IDEs.",
      skills: [
        { name: "Git & GitHub", icon: github },
        { name: "GitLab", icon: gitlab },
        { name: "Postman", icon: postman },
        { name: "VS Code", icon: vs },
        { name: "Vite", icon: vite },
        { name: "Antigravity", icon: antigravity },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Technologies, frameworks, and developer tools I use to build
            responsive, scalable, and intuitive web experiences.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30"
                : "glass-panel text-gray-400 hover:text-white hover:border-gray-600"
            }`}
          >
            All Skills (
            {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30"
                    : "glass-panel text-gray-400 hover:text-white hover:border-gray-600"
                }`}
              >
                <Icon size={14} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            const isTools = category.id === "tools";
            const isSingle = filteredCategories.length === 1;

            return (
              <div
                key={category.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group ${
                  isSingle
                    ? "md:col-span-2 max-w-2xl mx-auto w-full"
                    : isTools
                      ? "md:col-span-2 max-w-2xl lg:max-w-3xl mx-auto w-full"
                      : "w-full"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <span className="text-xs text-indigo-400 font-medium">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mb-6 font-light">
                    {category.description}
                  </p>

                  {/* Skills Grid (2 or 3 items per line) */}
                  <div
                    className={`grid gap-3 ${
                      isTools || category.id === "programming"
                        ? "grid-cols-2 sm:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-gray-900/60 border border-gray-800/80 hover:border-gray-700 transition-all flex items-center gap-3"
                      >
                        <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Actively building & expanding</span>
                  {/* <span className="text-emerald-400 font-semibold">● In Use</span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
