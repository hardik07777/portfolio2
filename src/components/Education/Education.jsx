import "./Education.css";
import { motion } from "framer-motion";

import mait from "../../assets/experience/mait.png";

export default function Education() {

  return (

    <section className="education" id="education">

      <div className="education-container">

        {/* =======================
            HEADING
        ======================== */}

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="education-label">

            <span className="education-line"></span>

            <p>Education</p>

          </div>

          <h2 className="education-title">

            Education
            <br />
            & Background

          </h2>

        </motion.div>

        {/* =======================
            EDUCATION CARD
        ======================== */}

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .9 }}
        >

          {/* LEFT */}

          <div className="education-left">

            <div className="education-logo">

              <img
                src={mait}
                alt="MAIT"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="education-right">

            <span className="education-date">

              2023 — 2027

            </span>

            <h3>

              Bachelor of Technology

            </h3>

            <h4>

              Electronics &
              <br />
              Communication Engineering

            </h4>

            <h5>

              Maharaja Agrasen Institute of Technology

            </h5>

            <p>

              Building a strong foundation in computer science,
              software engineering, algorithms, distributed systems,
              databases and modern full-stack development while
              actively applying concepts through production-grade
              projects and competitive programming.

            </p>

          </div>

        </motion.div>

        {/* =======================
    HIGHLIGHTS
======================== */}

<motion.div
  className="education-highlights"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: .2 }}
>

<div className="highlight-card">

  <span>Technical Focus</span>

  <ul>

    <li>Full Stack Development</li>
    <li>Backend Engineering</li>
    <li>AI Systems & LLM Evaluation</li>
    <li>Distributed Systems</li>
    <li>Cloud & DevOps</li>
    <li>Competitive Programming</li>

  </ul>

</div>

<div className="highlight-card">

  <span>Achievements</span>

  <ul>

    <li>1000+ Problems Solved Across Platforms</li>
    <li>Global Rank 294 - CodeChef Starters 225</li>
    <li>1760+ LeetCode Rating</li>
    <li>2★ CodeChef Rating</li>
    <li>Built 4+ Production grade Projects</li>
    <li>Strong Foundation in DSA & System Design</li>

  </ul>

</div>

</motion.div>
      </div>

    </section>

  );

}