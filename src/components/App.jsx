import { useState, createContext } from "react";
import { projectList } from "../utils/data";
import { projectsBg } from "../utils/data";
import Section from "./Section";
import ProjectsList from "./ProjectsList";
import ProjectItem from "./ProjectItem";
import Jumper from "./Jumper";
import Skills from "./Skills";
import HomeContent from "./HomeContent";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpacityVector from "./OpacityVector";
import Footer from "./Footer";
import PopUp from "./PopUp";
import Slide from "@mui/material/Slide";
import DrawerTab from "./DrawerTab";
import { togglers } from "../utils/data";
import { clouds } from "../utils/data";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export const ThemeContext = createContext(null);
function App() {
  const mb = useMediaQuery("(max-width: 980px)");
  const mb2 = useMediaQuery("(max-width: 720px)");

  const [showJumper, setShowJumper] = useState(true);

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

  const [theme, setTheme] = useState("dark");
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
      <main className="main" id={theme}>
        {showJumper ? (
          <div className="jump-container">
            <Jumper theme={theme} />
          </div>
        ) : (
          <article>
            <div>
              <img
                src={togglers.hamburger}
                alt="menu icon"
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
                    alt="cloud"
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
                    {projectList.map((project, index) => (
                      <ProjectItem
                        mb={mb}
                        mb2={mb2}
                        theme={theme}
                        project={project}
                        direction={index % 2 !== 0 ? "reverse" : ""}
                        key={index}
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
          </article>
        )}
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
