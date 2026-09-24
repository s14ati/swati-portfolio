import React, { useState } from "react";
import todo from "../assets/todo_list.png";
import swiggy from "../assets/swiggy.png";
import crypto from "../assets/crypto.webp";
import youtube from "../assets/yt.avif";
import textToVoice from "../assets/ttovoice.png";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaTimes,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Swiggy Food Delivery",
      category: "react",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Swiggy API",
        "Routing",
      ],
      summary:
        "A food ordering platform featuring restaurant browsing, dynamic menu filtering, cart management, and seamless navigation.",
      image: swiggy,
      code: "https://github.com/s14ati/Swiggy-Clone",
      live: "https://swiggy-clone-taupe-tau.vercel.app",
      featured: true,
      features: [
        "Live Swiggy restaurant API integration",
        "Cart state management with custom store",
        "Responsive multi-device layout",
        "Search & filter dishes effortlessly",
      ],
    },
    {
      id: 2,
      name: "Crypto Currency Tracker",
      category: "react",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "CoinGecko API",
        "Real-time Data",
      ],
      summary:
        "A modern crypto dashboard providing live cryptocurrency market prices, percentage change indicators, comprehensive coin statistics, and currency conversion.",
      image: crypto,
      code: "https://github.com/s14ati/CryptoTrack",
      live: "https://crypto-track-lilac.vercel.app",
      featured: true,
      features: [
        "Real-time multi-currency price updates",
        "Market capitalization rankings",
        "Fast search and instant coin filtering",
        "Sleek dark-mode analytics view",
      ],
    },
    {
      id: 3,
      name: "YouTube Video Streaming",
      category: "react",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "YouTube v3 API",
        "Video Player",
      ],
      summary:
        "A video streaming web application replicating YouTube's core experience, featuring trending feeds, categorized channels, and responsive player controls.",
      image: youtube,
      code: "https://github.com/s14ati/YouTube",
      live: "https://you-tube-blush.vercel.app",
      featured: true,
      features: [
        "YouTube v3 API integration for video streams",
        "Category-based feeds (Music, Gaming, Tech)",
        "Embedded high-quality video playback",
        "Responsive sidebar navigation",
      ],
    },
    {
      id: 4,
      name: "Text-to-Voice Converter",
      category: "javascript",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
      summary:
        "A browser-based text-to-speech application that converts entered text into speech with selectable voices, languages, and pitch controls.",
      image: textToVoice,
      code: "https://github.com/s14ati/text2_voice_converter",
      live: "https://text2-voice-converter.vercel.app",
      featured: false,
      features: [
        "Utilizes browser Web Speech Synthesis API",
        "Dynamic pitch and voice selection controls",
        "Instant playback and pause controls",
        "Clean minimal UI for high accessibility",
      ],
    },
    {
      id: 5,
      name: "Smart Task & To-Do List",
      category: "javascript",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      summary:
        "A productivity task management tool designed to help users organize daily tasks with persistent local storage saving, completion toggling, and filtering.",
      image: todo,
      code: "https://github.com/s14ati/To-do-List",
      live: "https://to-do-list-rouge-iota-74.vercel.app",
      featured: false,
      features: [
        "Persistent task storage in browser LocalStorage",
        "Edit, delete, and mark complete workflows",
        "Keyboard shortcut support for quick additions",
        "Fluid animations for adding/removing items",
      ],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A collection of web applications, frontend projects, and
            API-integrated applications built using modern web technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "react", label: "React.js Apps" },
            { id: "javascript", label: "Vanilla JavaScript" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-600/30"
                  : "glass-panel text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay actions on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  {/* <button
                    onClick={() => setSelectedProject(proj)}
                    className="p-3 rounded-full bg-gray-900/90 text-white border border-white/20 hover:bg-indigo-600 hover:border-indigo-500 transition-colors shadow-lg cursor-pointer"
                    title="Quick Details Preview"
                  >
                    <FaEye size={16} />
                  </button> */}
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-gray-900/90 text-white border border-white/20 hover:bg-pink-600 hover:border-pink-500 transition-colors shadow-lg"
                    title="Open Live Website"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-gray-900/90 text-white border border-white/20 hover:bg-purple-600 hover:border-purple-500 transition-colors shadow-lg"
                    title="Inspect Source Code"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>

                {proj.featured && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-[11px] font-bold text-white shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                    {proj.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 font-light leading-relaxed mb-4">
                    {proj.summary}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-gray-800/80 text-indigo-300 border border-gray-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-center flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-300 hover:text-white glass-panel-hover flex items-center justify-center gap-1.5"
                  >
                    <FaGithub size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Preview Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition cursor-pointer"
            >
              <FaTimes size={18} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full aspect-video object-cover rounded-2xl mb-5 border border-white/10"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.name}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {selectedProject.summary}
            </p>

            <h4 className="text-sm font-bold text-indigo-400 mb-2">
              Key Highlights:
            </h4>
            <div className="space-y-1.5 mb-6">
              {selectedProject.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                >
                  <FaCheckCircle className="text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 text-center flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-600/30"
              >
                <FaExternalLinkAlt />
                <span>Visit Live Application</span>
              </a>

              <a
                href={selectedProject.code}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 rounded-xl font-semibold text-gray-200 glass-panel-hover flex items-center justify-center gap-2 text-sm hover:text-white"
              >
                <FaGithub />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
