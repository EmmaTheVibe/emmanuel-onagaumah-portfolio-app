import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { desk } from "../utils/data";
export default function HomeContent({ toggleDarkMode }) {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { threshold: 0.5, once: true });
  return (
    <div className="container">
      <motion.div
        className="home-content"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        ref={divRef}
      >
        <div className="herobox">
          <h1 className="hero-txt">
            Hi, I'm <span className="my-name">Emmanuel</span>
          </h1>
          <h1 className="desc">a front-end web developer.</h1>
        </div>
        <img src={desk} alt="desk" className="desk" />
      </motion.div>
    </div>
  );
}
