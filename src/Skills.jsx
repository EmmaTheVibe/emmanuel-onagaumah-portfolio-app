import { skillsList } from "./data";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills({ theme }) {
  const [showGrid, setShowGrid] = useState(false);

  const titleVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };
  const padderVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.3,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="container">
      <div className="skills">
        <div>
          <motion.h2
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title"
          >
            About me
          </motion.h2>
          <motion.h3
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="about"
          >
            <em className="strike">Hello world</em>...Hi, my name is Onagaumah
            Emmanuel. I spend my days writing code, and my nights stressing over
            bugs. I build clean, responsive, and user-friendly websites. I
            strive to deliver seamless digital experiences that prioritize
            performance and accessibility. <br />
            Below are some technologies I use to bring my projects to life:
          </motion.h3>
        </div>

        <motion.div
          className={`padder ${showGrid ? "expand" : "shrink"}`}
          onClick={() => setShowGrid((curr) => !curr)}
          variants={padderVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="grid-toggler">
            <em>{showGrid ? "Collapse" : "Expand"} toolbox</em>
          </p>
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
                  />
                  {showGrid && (
                    <p className="label">
                      <em>{skill.name}</em>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
