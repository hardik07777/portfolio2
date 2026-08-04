import "./Navbar.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone ,   FiFileText
 } from "react-icons/fi";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

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

    </nav>

  );

}