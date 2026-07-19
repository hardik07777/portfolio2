import "./Hero.css";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-center">

        <motion.h1
          className="hero-name left"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          HARDIK
        </motion.h1>

        <motion.img
          src={profile}
          alt="Hardik"
          className="hero-image"
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 40
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: .25,
            ease: [0.22, 1, 0.36, 1]
          }}
        />

        <motion.h1
          className="hero-name right"
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          GOEL
        </motion.h1>

      </div>

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: .8,
          duration: .8
        }}
      >
        <p>FULL STACK DEVELOPER</p>

          <h2>
          Building scalable
          <br />
          backend systems, AI
          <br />
          Agents & beautiful
          <br />
          experiences.
        </h2>
      </motion.div>

    </section>
  );
}