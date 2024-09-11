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
              <input
                id="toggle"
                className="toggle"
                type="checkbox"
                defaultChecked={theme === "light"}
                onClick={toggleTheme}
              />

              <OpacityVector classname={"home-fill"} />
            </Section>
            <Section className={"skills-section"}>
              <Skills theme={theme} />
              <OpacityVector classname={"skills-fill"} />
            </Section>
            <Section
              className={"project-section"}
              sectionId={"projects"}
              bg={projectsBg}
            >
              {/* <svg
                id="visual"
                viewBox="0 0 900 675"
                width="900"
                height="675"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                className="blob"
              >
                <rect width="900" height="675" fill="#b4b4fa"></rect>
                <g>
                  <g transform="translate(550 463)">
                    <path
                      d="M89.8 -25.2C104.6 16.5 96.8 69.4 63.2 95.9C29.7 122.3 -29.5 122.3 -63.3 95.7C-97.1 69.1 -105.3 16.1 -90.5 -25.5C-75.7 -67.1 -37.9 -97.3 -0.2 -97.2C37.5 -97.2 75 -66.8 89.8 -25.2Z"
                      fill="#ebd3af"
                    ></path>
                  </g>
                  <g transform="translate(53 467)">
                    <path
                      d="M97.3 -29.7C110 7.4 93 56.1 61 77.9C29 99.7 -18.1 94.7 -49.5 71.1C-81 47.6 -96.9 5.5 -86 -29.2C-75.2 -63.8 -37.6 -90.9 2.4 -91.7C42.3 -92.5 84.6 -66.8 97.3 -29.7Z"
                      fill="#ebd3af"
                    ></path>
                  </g>
                  <g transform="translate(298 136)">
                    <path
                      d="M72.3 -22.6C82.5 8.1 72 46.4 47.1 64.4C22.2 82.4 -17.1 80 -41.9 61.2C-66.6 42.4 -76.8 7.1 -67.3 -22.4C-57.9 -51.9 -29 -75.5 1 -75.8C31 -76.2 62 -53.2 72.3 -22.6Z"
                      fill="#ebd3af"
                    ></path>
                  </g>
                </g>
              </svg> */}
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
