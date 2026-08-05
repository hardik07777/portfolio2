import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../../assets/images/profile.png";
import StaticBackground from "../staticbackground/StaticBackground";
import LeetCodeCard from "../LeetCodeCard";

export default function Hero() {

  const roles = [
    "FULL STACK ENGINEER",
    "SOFTWARE DEVELOPER",
    "BACKEND ENGINEER",
    "PROBLEM SOLVER"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      <StaticBackground />

      <div
  className="hero-center"
  >

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
          alt="Hardik Goel"
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8, duration: .8 }}
      >

       <AnimatePresence mode="wait">
  <motion.p
    key={roles[roleIndex]}
    initial={{
      y: 30,
      opacity: 0,
      filter: "blur(8px)"
    }}
    animate={{
      y: 0,
      opacity: 1,
      filter: "blur(0px)"
    }}
    exit={{
      y: -30,
      opacity: 0,
      filter: "blur(8px)"
    }}
    transition={{
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1]
    }}
  >
    {roles[roleIndex]}
  </motion.p>
</AnimatePresence>

        <h2>
          Building scalable backend platforms,
          <br />
          AI-powered products with
          <br />
          modern architecture, and crafting
          <br />
          delightful digital experiences.
        </h2>

      </motion.div>

      <motion.div
        className="hero-leetcode"
        initial={{ opacity: 0, x: 80, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          delay: 1.1,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <LeetCodeCard />
      </motion.div>

    </section>
  );
}