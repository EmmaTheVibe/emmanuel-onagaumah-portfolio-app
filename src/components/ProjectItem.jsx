import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { tools } from "../utils/data";

export default function ProjectItem({ project, theme, mb, direction }) {
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
      className={`project-item ${direction}`}
      ref={divRef}
    >
      <div className={`screen ${direction}`}>
        <div className="project-pic">
          <img
            src={project.pc}
            alt={`${project.name} pc view`}
            className="pc"
          />
          <img src={tools.spanner} alt="spanner icon" className="spanner" />
          <img src={tools.spanner} alt="spanner icon" className="spanner2" />
          <img src={tools.gear} alt="gear icon" className="gear" />
          <img src={tools.gear} alt="gear icon" className="gear2" />
          <motion.img
            variants={tabVariants}
            initial="initial"
            whileInView="animate"
            src={project.tab}
            alt={`${project.name} tab view`}
            className="tab"
          />
          <motion.img
            variants={mobileVariants}
            initial="initial"
            whileInView="animate"
            src={project.mobile}
            alt={`${project.name} mobile view`}
            className="mobile"
          />
        </div>
      </div>

      <div className="project-info">
        <div className="name-line">
          <div className="dash"></div>
          <h3 className="project-name">{project.name}</h3>
        </div>
        <p className="project-details">{project.details}</p>

        <div className="info-line">
          <div className="tech-line">
            <p className="with">
              <em>Built with:</em>
            </p>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <img
                  src={
                    theme === "dark" && tech.darkurl ? tech.darkurl : tech.url
                  }
                  className="tech-img"
                  alt={tech.name}
                  key={tech.id}
                />
              ))}
            </div>
          </div>
          <div className="project-link">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <p>
                <em>View site</em>
              </p>
            </a>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
