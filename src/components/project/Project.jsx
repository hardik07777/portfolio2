import "./Project.css";
import { motion } from "framer-motion";

import signaldock from "../../assets/projects/signaldock.png";
import armoriq from "../../assets/projects/armoriq.jpg";
import travelbuddy from "../../assets/projects/travelbuddy.jpg";
import newsapp from "../../assets/projects/newsapp.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";

const projects = [
  {
    number: "01",

    title: "SignalDock",

    subtitle: "Production-ready Webhook Infrastructure",

    image: signaldock,

    imageWidth: "94%",

    description:
      "SignalDock is a production-inspired webhook delivery platform designed to process asynchronous events reliably at scale. Incoming events are persisted, queued through BullMQ, retried using exponential backoff and monitored through a real-time dashboard.",

    details:
      "The platform includes dead-letter queues, replay functionality, delivery logs and Prometheus metrics, closely following the architecture used by modern webhook providers like Stripe and GitHub.",

    tech: [
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Prisma",
      "PostgreSQL",
      "Docker"
    ],

    github: "https://github.com/hardik07777",

    live: "#"
  },

  {
    number: "02",

    title: "ArmorIQ",

    subtitle: "Enterprise AI Agent Platform",

    image: armoriq,

    imageWidth: "82%",

    description:
      "ArmorIQ is a secure AI agent platform that combines Model Context Protocol (MCP) servers with policy-driven tool execution. Every tool invocation is validated before execution, making the system suitable for enterprise environments.",

    details:
      "It features approval workflows, audit logging, policy enforcement, custom MCP servers and an interactive dashboard for monitoring every AI action in real time.",

    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Gemini"
    ],

    github: "https://github.com/hardik07777",

    live: "#"
  },

  {
    number: "03",

    title: "TravelBuddy",

    subtitle: "Collaborative Trip Planner",

    image: travelbuddy,

    imageWidth: "72%",

    description:
      "TravelBuddy simplifies planning group trips through collaborative itineraries, authentication, live location support and interactive maps. The application combines a clean interface with a scalable backend.",

    details:
      "Users can organize destinations, coordinate with friends and manage complete travel plans while experiencing seamless real-time collaboration.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Google Maps",
      "Express"
    ],

    github: "https://github.com/hardik07777",

    live: "#"
  },

  {
    number: "04",

    title: "News Aggregator",

    subtitle: "Personalized News Platform",

    image: newsapp,

    imageWidth: "80%",

    description:
      "A responsive news platform delivering personalized content from multiple trusted sources. Users can browse categories, search trending topics and bookmark important articles.",

    details:
      "The project focuses on responsive design, clean user experience and efficient API integration while demonstrating modern frontend architecture.",

    tech: [
      "React",
      "Firebase",
      "News API",
      "Tailwind",
      "Authentication"
    ],

    github: "https://github.com/hardik07777",

    live: "#"
  },

  {
    number: "05",

    title: "Portfolio",

    subtitle: "Personal Brand Experience",

    image: portfolio,

    imageWidth: "90%",

    description:
      "This portfolio was handcrafted to showcase engineering rather than simply display projects. Every interaction is designed with smooth motion, thoughtful spacing and premium minimalism.",

    details:
      "Built completely with React, Framer Motion and custom CSS, the website emphasizes performance, animations and elegant storytelling throughout every section.",

    tech: [
      "React",
      "Framer Motion",
      "CSS",
      "Vite"
    ],

    github: "https://github.com/hardik07777",

    live: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects">

      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p>FEATURED WORK</p>

          <h2>
            Selected
            <br />
            Projects
          </h2>

          <span>
            Building products that combine engineering,
            scalability and thoughtful user experiences.
          </span>

        </motion.div>

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              className={`project ${index % 2 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: .15
              }}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    maxWidth: project.imageWidth
                  }}
                />

              </div>

              <div className="project-content">

                <span className="number">
                  {project.number}
                </span>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <p>{project.details}</p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}