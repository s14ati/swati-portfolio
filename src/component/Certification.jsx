import React, { useState } from "react";
import reactCert from "../assets/React Certificate.png";
import simplilearnCert from "../assets/simplilearn certificate.jpeg";
import codingNinjasCert from "../assets/coding ninjas.jpeg";
import { FaAward, FaSearchPlus, FaTimes, FaCheckCircle, FaCertificate } from "react-icons/fa";

function Certification() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "React JS Excellence",
      issuer: "Scaler",
      image: reactCert,
      skills: ["React js", "Components", "State & Hooks", "API Integration"],
      badgeColor: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "React JS Beginner",
      issuer: "Simplilearn SkillUp",
      image: simplilearnCert,
      skills: ["State Lifting", "Context API", "State & Props", "Hooks"],
      badgeColor: "from-blue-600 to-indigo-600",
    },
    {
      id: 3,
      title: "Basics Of React",
      issuer: "Coding Ninjas",
      image: codingNinjasCert,
      skills: ["Introduction to React", "Getting streted with React", "Coding", "Componets in React JS"],
      badgeColor: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Validated Competence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Certifications and courses reflecting my learning in frontend development, programming, and modern web technologies.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              {/* Image Preview */}
              <div
                onClick={() => setSelectedImage(cert)}
                className="relative aspect-[4/3] bg-gray-950 overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-gray-900/90 text-white text-xs font-semibold border border-white/20 flex items-center gap-2 shadow-lg">
                    <FaSearchPlus />
                    <span>View Certificate</span>
                  </span>
                </div>

                {/* Verified Pill */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 shadow-lg">
                  <FaCheckCircle size={12} />
                  <span>Verified</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-2">
                    <FaAward />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-4">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-800/80 text-gray-300 border border-gray-700/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(cert)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-gray-200 glass-panel-hover flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaCertificate className="text-indigo-400" />
                  <span>Inspect Full Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Zoom View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="glass-panel border border-white/20 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-indigo-400">{selectedImage.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition cursor-pointer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-gray-950">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certification;