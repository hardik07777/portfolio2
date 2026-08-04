import "./Footer.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-content">

        {/* LEFT */}

        <div className="footer-left">

          <h2 className="signature">
            HG
          </h2>

          

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/hardikgoel07/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/hardik07777"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/Hardik_goel07/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://x.com/heyhardik_"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

          </div>

          <p className="footer-copy">
            © 2026 HARDIK GOEL
          </p>

        </div>

      </div>

    </footer>
  );
}