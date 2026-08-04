import "./about.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const desktopCode = `const developer = {

  name: "Hardik Goel",

  role: "Full Stack Developer",

  experience: "2+ Years",

  techStack: ["React", "Node.js", "Express", "TypeScript", "Redis", "PostgreSQL", "Docker", "Prisma"],

  learning: ["System Design","Kubernetes","AWS"],

  interests: ["Competitive Programming","Table Tennis","Open Source"],

  contact: {
    email: "hardikgoel07@gmail.com",
  },

  availableForWork: true
};

export default developer;`;
const mobileCode = `const developer = {

  name: "Hardik Goel",

  role: "Full Stack Developer",

  experience: "2+ Years",

  techStack: [
    "React",
    "Node.js",
    "Express",
    "TypeScript",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Prisma"
  ],

  learning: [
    "System Design",
    "Kubernetes",
    "AWS"
  ],

  interests: [
    "Competitive Programming",
    "Table Tennis",
    "Open Source"
  ],

  contact: {
    email: "hardikgoel07@gmail.com",
  },

  availableForWork: true
};

export default developer;`;



export default function About() {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Ensure correct value on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="about-section">

      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-label">
            <span className="about-line"></span>
            <p>ABOUT</p>
          </div>

          <h2 className="about-title">
            About Me
          </h2>
        </motion.div>

        <div className="about-wrapper">

          <section className="about">

            <motion.div
              className="editor"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <div className="editor-top">
                <div className="dots">
                  <span className="red"></span>
                  <span className="yellow"></span>
                  <span className="green"></span>
                </div>

                <div className="tab">
                  <span>JS</span>
                  AboutMe.js
                </div>
              </div>


                <SyntaxHighlighter
                  language="javascript"
                  style={oneDark}
                  showLineNumbers={!isMobile}
                  wrapLongLines
                  customStyle={{
                    background: "#0d1117",
                    margin: 0,
                    padding: isMobile ? "18px 16px" : "32px 42px",
                    fontSize: isMobile ? "12px" : "18px",
                    lineHeight: isMobile ? "1.7" : "1.9",
                    borderRadius: "0 0 24px 24px",
                    fontFamily: '"JetBrains Mono", monospace',
                    overflowX: "auto",
                    whiteSpace: isMobile ? "pre-wrap" : "pre",
                  }}
                >
                  {isMobile ? mobileCode : desktopCode}
                </SyntaxHighlighter>

            </motion.div>

          </section>

        </div>

      </div>

    </section>
  );
}