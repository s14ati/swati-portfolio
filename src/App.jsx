import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Certification from "./component/Certification";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#090d16] min-h-screen text-gray-100 relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Ambient Mesh Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Main App Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Certification />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// =====================================================
// PREVIOUS / ORIGINAL CODE (FOR FUTURE REFERENCE):
// =====================================================
// import './App.css'
// import About from './component/About'
// import Certification from './component/Certification'
// import Contact from './component/Contact'
// import Footer from './component/Footer'
// import Hero from './component/Hero'
// import Navbar from './component/Navbar'
// import Projects from './component/Projects'
// import Services from './component/Services'
// 
// function App() {
//   return (
//     <div className='bg-[#0c0f1c]'>
//       {/* <Navbar/> */}
//       <Hero/>
//       <About/>
//       <Services/>
//       <Projects/>
//       <Certification/>
//       <Contact/>
//       <Footer/>
//     </div>
//   )
// }
// 
// export default App


