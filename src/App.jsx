import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Experience from "./components/Experience/Experience";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Experience/>
      <Contact/>

    </>
  );
}

export default App;