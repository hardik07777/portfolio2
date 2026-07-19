import "./about.css";
import { motion } from "framer-motion";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `const developer = {

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

export default function About() {
  return (
  <section className="about-section">

    <div className="about-wrapper">

      <section className="about">

        <motion.div
          className="editor"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            showLineNumbers
            wrapLongLines
            customStyle={{
              background: "#0d1117",
              margin: 0,
              padding: "32px 42px",
              fontSize: "18px",
              lineHeight: "1.9",
              borderRadius: "0 0 24px 24px",
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {code}
          </SyntaxHighlighter>

        </motion.div>

      </section>

    </div>

  </section>
);
}