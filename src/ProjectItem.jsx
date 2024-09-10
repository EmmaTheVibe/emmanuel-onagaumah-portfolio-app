import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectItem({ project, theme, mb }) {
  const tabVariants = {
    initial: {
      opacity: 0,
      y: mb ? 100 : 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  };

  const mobileVariants = {
    initial: {
      opacity: 0,
      y: mb ? 100 : 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  };

  const divRef = useRef(null);
  const isInView = useInView(divRef, { threshold: 0.5, once: true });

  return (
    <motion.li
      initial={{ y: 100 }}
      animate={isInView ? { y: 0 } : { y: 100 }}
      transition={{ duration: 0.3 }}
      className="project-item"
      ref={divRef}
    >
      <div className="screen">
        <div className="project-pic">
          <img src={project.pc} alt="" className="pc" />
          <motion.img
            variants={tabVariants}
            initial="initial"
            whileInView="animate"
            src={project.tab}
            alt=""
            className="tab"
          />
          <motion.img
            variants={mobileVariants}
            initial="initial"
            whileInView="animate"
            src={project.mobile}
            alt=""
            className="mobile"
          />
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-details">{project.details}</p>
        <div style={{ display: "flex" }} className="tech-list">
          {project.technologies.map((tech) => (
            <img
              src={theme === "dark" && tech.darkurl ? tech.darkurl : tech.url}
              style={{ width: "36px", height: "36px", marginRight: "12px" }}
              alt={tech.name}
              key={tech.id}
            />
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </motion.li>
  );
}
