import "./Gallery.css";
import { motion } from "framer-motion";

import signaldock from "../../assets/projects/signaldock.png";
import armoriq from "../../assets/projects/armoriq.jpg";
import travelbuddy from "../../assets/projects/travelbuddy.jpg";
import newsapp from "../../assets/projects/newsapp.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";

const projects = [
  {
    title: "SignalDock",
    image: signaldock,
    link: "https://github.com/",
    className: "card card1",
  },
  {
    title: "ArmorIQ",
    image: armoriq,
    link: "https://github.com/",
    className: "card card2",
  },
  {
    title: "TravelBuddy",
    image: travelbuddy,
    link: "https://github.com/",
    className: "card card3",
  },
  {
    title: "News App",
    image: newsapp,
    link: "https://github.com/",
    className: "card card4",
  },
  {
    title: "Portfolio",
    image: portfolio,
    link: "https://github.com/",
    className: "card card5",
  },
];

export default function Gallery() {
  return (
    <section className="gallery">

      <motion.div
        className="gallery-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <motion.h2

          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}

        >
          Featured Projects

        </motion.h2>

        <motion.p

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .25 }}

        >
          Some of my favourite work.

        </motion.p>

        <motion.a

          href="https://github.com/hardik07777"
          className="gallery-btn"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: .96,
          }}

        >
          View All Projects →

        </motion.a>

        <div className="stack">

          {projects.map((project, index) => (

            <motion.a

              href={project.link}

              target="_blank"

              rel="noreferrer"

              key={index}

              className="card"

              initial={{
                opacity: 0,
                y: 180,
                rotate: 0,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: .18 * index,
                duration: .8,
              }}

              whileHover={{
  y: -40,
  scale: 1.03,
  rotate: index % 2 === 0 ? -2 : 2,
  zIndex: 100,
}}

            >

              <img src={project.image} alt={project.title} />

              <div className="overlay">

                <h3>{project.title}</h3>

                <span>View ↗</span>

              </div>

            </motion.a>

          ))}

        </div>

      </motion.div>

    </section>
  );
}