import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("swati14012000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Interested in working together or have a frontend opportunity? Feel
            free to reach out via email or the contact form below.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Cards & Quick Connect */}
          <div className="w-full max-w-xl space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Feel free to reach out via email, connect with me on LinkedIn,
                or explore my projects on GitHub.
              </p>

              {/* Contact Item: Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-indigo-500/40 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email Address</p>
                    <a
                      href="mailto:swati14012000@gmail.com"
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      swati14012000@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <FaCheck className="text-emerald-400" size={14} />
                  ) : (
                    <FaCopy size={14} />
                  )}
                </button>
              </div>

              {/* Contact Item: Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gray-900/70 border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-semibold text-white">
                    Agra, Uttar Pradesh, India · Open to Relocation
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Professional Profiles
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/swati-m-gupta-57b61a226"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-600/10 transition flex items-center justify-center gap-2 text-sm font-semibold text-gray-200 hover:text-white"
                  >
                    <FaLinkedin className="text-indigo-400" size={18} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/s14ati"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-pink-500/50 hover:bg-pink-600/10 transition flex items-center justify-center gap-2 text-sm font-semibold text-gray-200 hover:text-white"
                  >
                    <FaGithub className="text-pink-400" size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
