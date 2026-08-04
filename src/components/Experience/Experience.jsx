import "./Experience.css";
import { motion } from "framer-motion";

import mercor from "../../assets/experience/mercor.png";
import cantilever from "../../assets/experience/cantilever.png";
import mait from "../../assets/experience/mait.png";
import airdawg from "../../assets/experience/airdawg.jpg";

const experiences = [
{
  logo: airdawg,
  date: "Jul 2026 – Present",
  role: "AI Systems Evaluation Intern",
  company: "AirDawg Labs",
  points: [
    "Designed and implemented complex AI evaluation tasks using Docker, Python, and Linux-based environments to benchmark autonomous coding agents.",
    "Built deterministic reference solutions and comprehensive automated test suites to validate agent behavior across diverse real-world scenarios.",
    "Collaborated with the AI evaluation team to improve task quality, reproducibility, and benchmarking accuracy for large language models.",
    "Worked extensively with Git, CI workflows, and containerized development while contributing to high-quality datasets for AI systems evaluation."
  ]
},
{
  logo: mercor,
  date: "May 2026 – Jul 2026",
  role: "Software Engineer Intern",
  company: "Mercor",
  points: [
    "Developed scalable backend services and REST APIs using Node.js and TypeScript, focusing on clean architecture and maintainable code.",
    "Designed internal developer tools and automation workflows that streamlined engineering processes and improved team productivity.",
    "Collaborated closely with cross-functional engineers to deliver production-ready features while following modern software development practices.",
    "Improved application performance by identifying bottlenecks, optimizing backend logic, and debugging complex production issues."
  ]
},
{
  logo: cantilever,
  date: "2025",
  role: "Full Stack Developer Intern",
  company: "Cantilever Labs",
  points: [
    "Built responsive and reusable user interfaces with React while maintaining a consistent and accessible user experience across devices.",
    "Developed backend services and RESTful APIs using Express.js and MongoDB to support scalable full-stack web applications.",
    "Implemented secure authentication, role-based access control, and efficient database operations for production-ready features.",
    "Collaborated in an Agile development environment, participating in feature planning, code reviews, debugging, and iterative product improvements."
  ]
}
  
];

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="experience-label">
            <span className="experience-line"></span>
            <p>CAREER</p>
          </div>

          <h2 className="experience-title">
            Professional
            <br />
            Experience
          </h2>
        </motion.div>

        <div className="experience-grid">

          <div className="experience-list">

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                className="experience-card"
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .8,
                  ease: [.22, .61, .36, 1]
                }}
              >

                {/* LEFT SECTION */}

                <div className="experience-left">

                  <div className="experience-logo">

                    <img
                      src={item.logo}
                      alt={item.company}
                      className={
                        item.company === "AirDawg Labs"
                          ? "black-logo"
                          : "white-logo"
                      }
                    />

                  </div>

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

                </div>

                {/* RIGHT SECTION */}

                <div className="experience-right">

                  <div className="experience-points">

                    <ul>

                      {item.points.map((point, i) => (

                        <li key={i}>
                          {point}
                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


// {
//     logo: mait,
//     date: "2023 – Present",
//     role: "B.Tech Electronics & Communication",
//     company: "MAIT",
//     points: [
//       "Built multiple production-grade full stack applications.",
//       "Solved 1000+ coding problems.",
//       "Strong foundation in DSA and System Design.",
//       "Actively exploring Distributed Systems and AI."
//     ]
//   }