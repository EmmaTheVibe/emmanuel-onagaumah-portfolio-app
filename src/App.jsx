import { useState, createContext, useRef } from "react";
import { projectList } from "./data";
import Section from "./Section";
import ProjectsList from "./ProjectsList";
import ProjectItem from "./ProjectItem";
import Skills from "./Skills";
import HomeContent from "./HomeContent";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpacityVector from "./OpacityVector";

export const ThemeContext = createContext(null);
function App() {
  const mb = useMediaQuery("(max-width: 980px)");
  const [projects, setProjects] = useState(projectList);
  const [showJumper, setShowJumper] = useState(true);
  const divRef = useRef(null);
  const isInView = useInView(divRef, { threshold: 0.5, once: true });

  const [theme, setTheme] = useState("light");
  setTimeout(() => {
    setShowJumper(false);
  }, 1700);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
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
            {/* <Navbar toggleDarkMode={toggleTheme} /> */}
            <Section className={"home-section"} sectionId={"home"}>
              <HomeContent toggleDarkMode={toggleTheme} />
              <OpacityVector classname={"home-fill"} />
            </Section>
            <Section className={"skills-section"}>
              <Skills theme={theme} />
              <OpacityVector classname={"skills-fill"} />
            </Section>
            <Section className={"project-section"} sectionId={"projects"}>
              <div className="container">
                <h2 className="section-title">Projects</h2>
                <ProjectsList>
                  {projects.map((project, index) => (
                    <ProjectItem
                      mb={mb}
                      theme={theme}
                      project={project}
                      direction={index % 2 !== 0 ? "reverse" : ""}
                      key={project.id}
                    />
                  ))}
                </ProjectsList>
              </div>
            </Section>
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

function Navbar({ toggleDarkMode }) {
  return (
    <nav id="nav">
      <ul className="container">
        <div>
          <h1 style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
            VIBE
          </h1>
        </div>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// #927fbf
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
        <g stroke="#ded0fb" strokeWidth="1">
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
