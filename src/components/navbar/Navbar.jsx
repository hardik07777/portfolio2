import "./Navbar.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone ,   FiFileText
 } from "react-icons/fi";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  return (
    <>

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LEFT */}

      <div className="navbar-brand">

        <NavLink to="/" className="signature">
          HG
        </NavLink>

      </div>

      {/* CENTER */}

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>

        <li>
          <NavLink to="/education">Education</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

    {/* RIGHT */}

<div className="navbar-right">

  <a
    href="https://www.linkedin.com/in/hardikgoel07/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/hardik07777"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a href="mailto:hardikgoel07@gmail.com">
    <FiMail />
  </a>

  <a
    href="https://drive.google.com/file/d/1AW0jPGGWV3X4ETkGBy44q2cM0eMVC8fJ/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Resume"
  >
    <FiFileText />
  </a>

</div>

<div
  className="mobile-menu-button"
  onClick={() => setMenuOpen(true)}
>
  <HiOutlineMenuAlt3 />
</div>


    </nav>
    <AnimatePresence>
  {menuOpen && (
    <motion.div
      className="mobile-menu"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35 }}
    >
      <button
        className="mobile-close"
        onClick={() => setMenuOpen(false)}
      >
        <HiOutlineX />
      </button>

      <NavLink to="/" onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>

      <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
        Projects
      </NavLink>

      <NavLink to="/about" onClick={() => setMenuOpen(false)}>
        About
      </NavLink>

      <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
        Experience
      </NavLink>

      <NavLink to="/education" onClick={() => setMenuOpen(false)}>
        Education
      </NavLink>

      <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
        Contact
      </NavLink>

      <div className="mobile-socials">

        <a
          href="https://www.linkedin.com/in/hardikgoel07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/hardik07777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:hardikgoel07@gmail.com">
          <FiMail />
        </a>

        <a
          href="https://drive.google.com/file/d/1AW0jPGGWV3X4ETkGBy44q2cM0eMVC8fJ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFileText />
        </a>

      </div>

    </motion.div>
  )}
</AnimatePresence>
</>

  );

}