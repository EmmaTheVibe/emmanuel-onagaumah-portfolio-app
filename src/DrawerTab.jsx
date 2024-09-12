import * as React from "react";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-scroll";
import { navLinks } from "./data";

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
            padding: "30px 45px",
            width: "250px",
          },
        }}
      >
        <div className="drawer" onKeyDown={() => setOpenDrawer(false)}>
          <div className="drawer-tabs">
            {navLinks.map((navLink, index) => (
              <Link to={navLink.to} smooth={true} duration={500} key={index}>
                <p
                  className={`nav-link ${active === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                  style={{ color: theme === "light" ? "#572c23" : "#f4eee4" }}
                >
                  {navLink.name}
                </p>
              </Link>
            ))}
            <input
              id="toggle"
              className="toggle"
              type="checkbox"
              //   defaultChecked={theme === "light"}
              onClick={toggleTheme}
            />
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
