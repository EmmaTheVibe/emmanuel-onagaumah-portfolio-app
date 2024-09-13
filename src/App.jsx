import { useState, createContext, useRef } from "react";
import { projectList } from "./data";
import { projectsBg } from "./data";
import Section from "./Section";
import ProjectsList from "./ProjectsList";
import ProjectItem from "./ProjectItem";
import Skills from "./Skills";
import HomeContent from "./HomeContent";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpacityVector from "./OpacityVector";
import Footer from "./Footer";
import PopUp from "./PopUp";
import Slide from "@mui/material/Slide";
import DrawerTab from "./DrawerTab";
import { togglers } from "./data";
import { clouds } from "./data";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export const ThemeContext = createContext(null);
function App() {
  const mb = useMediaQuery("(max-width: 980px)");
  const mb2 = useMediaQuery("(max-width: 720px)");
  const [projects, setProjects] = useState(projectList);
  const [showJumper, setShowJumper] = useState(true);
  const divRef = useRef(null);
  const isInView = useInView(divRef, { threshold: 0.5, once: true });
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  const [popUp, setPopUp] = useState({
    open: false,
    Transition: SlideTransition,
  });

  const [theme, setTheme] = useState("light");
  setTimeout(() => {
    setShowJumper(false);
  }, 1700);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

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

  const showPopUp = () => {
    setPopUp({
      ...popUp,
      open: true,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main" id={theme}>
        {showJumper ? (
          <div className="jump-container">
            <Jumper />
          </div>
        ) : (
          <div>
            <img
              src={togglers.hamburger}
              alt=""
              className="hamburger"
              onClick={() => setOpenDrawer(true)}
            />
            <DrawerTab
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleDrawer={toggleDrawer}
              theme={theme}
              toggleTheme={toggleTheme}
            />

            <Section className={"home-section"} sectionId={"home"}>
              {clouds.map((cloud, index) => (
                <img
                  src={theme === "dark" ? cloud.dark : cloud.light}
                  alt=""
                  id={cloud.className}
                  className="cloud"
                  key={index}
                />
              ))}
              <HomeContent toggleDarkMode={toggleTheme} />

              <OpacityVector classname={"home-fill"} />
            </Section>
            <Section className={"skills-section"} sectionId={"skills"}>
              <Skills theme={theme} />
              <OpacityVector classname={"skills-fill"} />
            </Section>
            <Section
              className={"project-section"}
              sectionId={"projects"}
              bg={projectsBg}
            >
              <div className="container">
                <motion.h2
                  variants={titleVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="section-title"
                >
                  Projects
                </motion.h2>
                <ProjectsList>
                  {projects.map((project, index) => (
                    <ProjectItem
                      mb={mb}
                      mb2={mb2}
                      theme={theme}
                      project={project}
                      direction={index % 2 !== 0 ? "reverse" : ""}
                      key={project.id}
                    />
                  ))}
                </ProjectsList>
              </div>
              <OpacityVector classname={"projects-fill"} />
            </Section>
            <Section className={"footer"} sectionId={"contact"}>
              <Footer showPopUp={showPopUp} />
            </Section>
            <PopUp popUp={popUp} setPopUp={setPopUp} />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

function Jumper() {
  return (
    <span className="jumper-span">
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="jumper-svg"
      >
        <path
          className="jumper"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
        />
        <g stroke="#edd9be" strokeWidth="1">
          <ellipse
            className="circleL"
            fill="none"
            strokeMiterlimit="10"
            cx="47.2"
            cy="95.6"
            rx="10.7"
            ry="2.7"
          />
          <ellipse
            className="circleR"
            fill="none"
            strokeMiterlimit="10"
            cx="136.2"
            cy="95.6"
            rx="10.7"
            ry="2.7"
          />
        </g>
        <path
          className="jumper clone"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
        />
      </svg>
    </span>
  );
}

export default App;
