import { useEffect } from "react";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Project from "./components/project/Project";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Project />
              <Contact/>
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;