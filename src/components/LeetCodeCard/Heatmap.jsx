import { motion } from "framer-motion";
import heatmap from "./heatmapData";

export default function Heatmap() {

  // Week columns after which you want a larger gap
  const monthBreaks = [4, 9, 14, 19, 25, 31, 37];

  return (
    <div className="heatmap-wrapper">
      <div className="leetcode-heatmap">

        {heatmap.map((cell, index) => {

          const column = Math.floor(index / 7);

          return (
            <motion.div
              key={cell.id}
              className={`heat-cell level-${cell.level} ${
                monthBreaks.includes(column) ? "month-gap" : ""
              }`}
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.25,
                delay: index * 0.008,
              }}
            />
          );
        })}

      </div>
    </div>
  );
}