import "./Experience.css";
import { motion } from "framer-motion";

import mercor from "../../assets/experience/mercor.png";
import cantilever from "../../assets/experience/cantilever.png";
import mait from "../../assets/experience/mait.png";

const experiences = [
  {
    logo: mercor,
    date: "May 2026 – Jul 2026",
    role: "Software Engineer Intern",
    company: "Mercor",
    points: [
      "Built scalable backend services using Node.js and TypeScript.",
      "Worked on production APIs and internal developer tooling.",
      "Collaborated with engineers on high-impact software features.",
      "Optimized performance and debugging workflows."
    ]
  },
  {
    logo: cantilever,
    date: "2025",
    role: "Full Stack Developer Intern",
    company: "Cantilever Labs",
    points: [
      "Developed responsive React applications.",
      "Built backend APIs with Express and MongoDB.",
      "Implemented authentication and REST services.",
      "Worked in an Agile product environment."
    ]
  },
  {
    logo: mait,
    date: "2023 – Present",
    role: "B.Tech Electronics & Communication",
    company: "MAIT",
    points: [
      "Built multiple production-grade full stack applications.",
      "Solved 1000+ coding problems.",
      "Strong foundation in DSA and System Design.",
      "Actively exploring Distributed Systems and AI."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        {/* Heading */}

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2
  className="experience-title"
  style={{ fontFamily: "Outfit, sans-serif" }}
>
    Professional
    <br />
    Experience
</h2>
        </motion.div>

        {/* Grid */}

        <div className="experience-grid">

          <div className="experience-list">

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                className="experience-card"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .8,
                  ease: [.22, .61, .36, 1]
                }}
              >

                {/* Logo */}

                <div className="experience-logo">

                  <img
                    src={item.logo}
                    alt={item.company}
                 className={item.company === "MAIT" ? "" : "white-logo"  }

                  />

                </div>

                {/* Info */}

                <div className="experience-info">

                  <span className="exp-date">
                    {item.date}
                  </span>

                  <h3>
                    {item.role}
                  </h3>

                  <h4>
                    {item.company}
                  </h4>

                </div>

                {/* Points */}

                <div className="experience-points">

                  <ul>

                    {item.points.map((point, i) => (

                      <li key={i}>
                        {point}
                      </li>

                    ))}

                  </ul>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}