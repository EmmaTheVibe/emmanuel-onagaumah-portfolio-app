import { skillsList } from "./data";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills({ theme }) {
  const [showGrid, setShowGrid] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
    once: true,
  });

  return (
    <div className="container">
      <div className="skills" ref={ref}>
        <motion.div
          // initial={{ y: 100 }}
          animate={isInView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="section-title">Toolbox</h2>
          <h3>Skills and technologies i use</h3>
          <p>Tap to {showGrid ? "collapse" : "expand"}</p>
        </motion.div>

        <motion.div
          animate={isInView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`padder ${showGrid ? "expand" : "shrink"}`}
          onClick={() => setShowGrid((curr) => !curr)}
        >
          <div
            className={`showbox ${
              showGrid ? "skills-grid-container" : "slider"
            }`}
          >
            <div className={showGrid ? "skills-grid" : "list"}>
              {skillsList.map((skill) => (
                <div
                  className={showGrid ? "grid-item" : "item"}
                  key={skill.id}
                  style={{ "--position": `${skill.id}` }}
                >
                  <img
                    src={
                      theme === "dark" && skill.darkurl
                        ? skill.darkurl
                        : skill.url
                    }
                    alt={skill.name}
                    className="skill-img"
                    style={{ color: "red" }}
                  />
                  {showGrid && <p className="label">{skill.name}</p>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
