import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function HomeContent({ toggleDarkMode }) {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { threshold: 0.5, once: false });
  return (
    <div className="container">
      {" "}
      <motion.div
        className="home-content"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        ref={divRef}
        onClick={toggleDarkMode}
      >
        <div className="avatar"></div>
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sit repellendus cum nobis aliquam! Nam quasi
            consequuntur hic molestiae omnis cum eos aperiam fuga, porro iusto
            explicabo, quo, natus error.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
