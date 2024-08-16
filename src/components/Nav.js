import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import { useNavigate } from "react-router-dom";
import "../styles/hamburgers.css";

const Nav = () => {
  const navigate = useNavigate();
  const [hamburgerCollapsed, setHamburgerCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [activeLink, setActiveLink] = useState("/"); // New state for active link

  useEffect(() => {
    // Update isMobile automatically when window size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path) => {
    setActiveLink(path); // Set the clicked link as active
    navigate(path);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1 className="logo">T A N I T I</h1>
        {isMobile ? (
          <button
            className={`hamburger ${
              hamburgerCollapsed ? "" : "hamburger--collapse is-active"
            }`}
            type="button"
            onClick={() => setHamburgerCollapsed(!hamburgerCollapsed)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        ) : (
          <ul className="navlink-container">
            <li
              className={`navlink ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>
            <li
              className={`navlink ${activeLink === "/about" ? "active" : ""}`}
              onClick={() => handleNavigation("/about")}
            >
              About
            </li>
            <li
              className={`navlink ${activeLink === "/hotels" ? "active" : ""}`}
              onClick={() => handleNavigation("/hotels")}
            >
              Hotels
            </li>
            <li
              className={`navlink ${activeLink === "/food" ? "active" : ""}`}
              onClick={() => handleNavigation("/food")}
            >
              Food
            </li>
            <li
              className={`navlink ${
                activeLink === "/entertainment" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/entertainment")}
            >
              Entertainment
            </li>
            <li
              className={`navlink ${
                activeLink === "/transportation" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/transportation")}
            >
              Transportation
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
