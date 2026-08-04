import "./Project.css";
import { motion } from "framer-motion";

import CollabBoard from "../../assets/projects/CollaBoard.png";
import storybook from "../../assets/projects/storybook.png";
import armoriq from "../../assets/projects/armoriq.png";
import signaldock from "../../assets/projects/signaldock.png";

const projects = [
  {
    slug: "collabboard",
    category: "COLLABORATION",

    number: "01",

    title: "CollabBoard",

    subtitle: "Real-time Collaborative Workspace",

    image: CollabBoard,

    description:
      "CollabBoard is a real-time collaborative workspace that enables teams to organize projects using interactive boards, lists and cards. Built with live synchronization, it allows multiple users to collaborate seamlessly without refreshing the page.",

    details:
      "Features secure authentication, drag-and-drop workflows, file sharing and live updates powered by WebSockets.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "JWT",
      "CSS"
    ],

    github: "https://github.com/hardik07777/CollabBoard",

    live: "https://collab-board-tfch.vercel.app/"
  },

  {
    slug: "armoriq",
    category: "AI PLATFORM",

    number: "02",

    title: "ArmorIQ",

    subtitle: "Secure Enterprise AI Agent Platform",

    image: armoriq,

    description:
      "ArmorIQ is a secure AI agent platform that enables intelligent assistants to interact with external tools through the Model Context Protocol (MCP). Every action is validated by a policy engine, ensuring controlled, transparent and enterprise-ready AI automation.",

    details:
      "Supports custom MCP servers, approval workflows, audit logs, policy enforcement and real-time monitoring of every AI tool invocation.",

    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Gemini"
    ],

    github: "https://github.com/hardik07777/armoriq_assignment",

    live: "https://armoriq-assignment-frontend.vercel.app/"
  },

  {
    slug: "storybook",
    category: "DESIGN SYSTEM",

    number: "03",

    title: "Storybook",

    subtitle: "Reusable UI Component System",

    image: storybook,

    description:
      "A scalable Storybook-based component library built to accelerate frontend development through reusable, accessible and well-documented UI components. Designed with a developer-first approach for consistency across modern React applications.",

    details:
      "Includes interactive stories, configurable components, interaction testing and a modular architecture for rapid development and seamless maintenance.",

    tech: [
      "React",
      "TypeScript",
      "Storybook",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query"
    ],

    github: "https://github.com/hardik07777/flexprice-storybook-assignment",

    live: "https://flexprice-storybook-assignment-ljvo.vercel.app/"
  },

  {
    slug: "signaldock",
    category: "WEBHOOK PLATFORM",

    number: "04",

    title: "SignalDock",

    subtitle: "Production-Ready Webhook Infrastructure",

    image: signaldock,

    description:
      "SignalDock is a production-inspired webhook delivery platform engineered to process asynchronous events reliably at scale. Incoming webhooks are persisted, queued through BullMQ and delivered with intelligent retry mechanisms.",

    details:
      "Implements exponential backoff, dead-letter queues, replay functionality, delivery logs and Prometheus metrics for reliable event processing.",

    tech: [
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Prisma",
      "PostgreSQL",
      "Docker"
    ],

    github: "https://github.com/hardik07777/signaldock",

  }
];

export default function Projects() {
  return (
    <section className="projects">

      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="projects-label">
            <span className="projects-line"></span>
            <p>FEATURED WORK</p>
          </div>

          <h2 className="projects-title">
            Selected
            Projects
          </h2>

          
          <div className="projects-extra">

    <div className="projects-label">

        <span className="projects-line"></span>

        <p>
            Explore more open source work and experiments on GitHub.
        </p>

    </div>

    <div className="projects-socials">

        <motion.a
            href="https://github.com/hardik07777"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 5 }}
        >
            <i className="devicon-github-original"></i>

            <span>GitHub</span>

            ↗
        </motion.a>

        
    </div>

</div>

        </motion.div>

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              key={project.slug}
              className={`project ${index % 2 ? "reverse" : ""}`}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.97
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              viewport={{
                once: true,
                amount: 0.05
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
            >

              <div className={`project-image ${project.slug}`}>

    <div className="image-glow"></div>

    <div className="image-shine"></div>

    <div className={`image-wrapper ${project.slug}`}>

        <img
            src={project.image}
            alt={project.title}
        />

    </div>

</div>

              <div className="project-content">

                <div className="project-meta">

                  <span className="number">
                    {project.number}
                  </span>

                  <span className="category">
                    {project.category}
                  </span>

                </div>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <p>{project.details}</p>

                <div className="tech-stack">

                  {project.tech.map((tech, i) => (

                    <motion.span
                      key={tech}
                      initial={{
                        opacity: 0,
                        y: 10
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.05
                      }}
                      whileHover={{
                        y: -3
                      }}
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

                <div className="project-links">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    Source Code ↗
                  </motion.a>

                 {project.live && (
  <motion.a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    whileHover={{ x: 5 }}
  >
    View Project ↗
  </motion.a>
)}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}
