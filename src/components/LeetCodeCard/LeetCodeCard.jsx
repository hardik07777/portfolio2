import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./LeetCodeCard.css";

import Heatmap from "./Heatmap";
import Stats from "./Stats";

export default function LeetCodeCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [8, -8]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-8, 8]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      href="https://leetcode.com/u/Hardik_goel07/"
      target="_blank"
      rel="noopener noreferrer"
      className="leetcode-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1400,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
      }}
    >
      <div className="floating-glow"></div>

      <div className="leetcode-header">
        <div className="leetcode-left">
        </div>

        <a
          href="https://leetcode.com/u/Hardik_goel07/"
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-profile"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Hardik_goel07</span>
          <span className="arrow">↗</span>
        </a>
      </div>

      <div className="heatmap-wrapper">
        <Heatmap />

        <div className="months">
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
        </div>
      </div>

      <div className="divider"></div>

      <Stats />
    </motion.div>
  );
}