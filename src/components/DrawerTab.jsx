import * as React from "react";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-scroll";
import { navLinks } from "../utils/data";

export default function DrawerTab({
  openDrawer,
  setOpenDrawer,
  toggleTheme,
  theme,
}) {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
    setOpenDrawer(false);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: theme === "light" ? "#ebcca3" : "#190d0c",
            padding: "80px 45px ",
            width: "250px",
          },
        }}
      >
        <div className="drawer" onKeyDown={() => setOpenDrawer(false)}>
          <div className="drawer-tabs">
            {navLinks.map((navLink, index) => (
              <Link to={navLink.to} smooth={true} duration={500} key={index}>
                <div className="link-bar" onClick={() => handleClick(index)}>
                  <div
                    className={`link-container ${
                      active === index ? "active" : ""
                    }`}
                  >
                    <img
                      src={navLink.image}
                      alt={navLink.name}
                      className="nav-img"
                      id={navLink.id}
                    />

                    <p
                      className="nav-link"
                      style={{
                        color: theme === "light" ? "#572c23" : "#f4eee4",
                      }}
                    >
                      {navLink.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="mode-bar" onClick={toggleTheme}>
              <input
                id="toggle"
                className="toggle"
                readOnly
                type="checkbox"
                checked={theme === "dark" ? true : false}
              />
              <p
                className="mode-txt"
                style={{
                  color: theme === "light" ? "#572c23" : "#f4eee4",
                }}
              >
                {theme === "light" ? "Dark" : "Light"} Mode
              </p>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
