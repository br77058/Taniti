import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import { useNavigate } from "react-router-dom";
import "../styles/hamburgers.css";

const Nav = () => {
  const navigate = useNavigate();
  const [hamburgerCollapsed, setHamburgerCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <li className="navlink" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="navlink" onClick={() => navigate("/about")}>
              About
            </li>
            <li className="navlink" onClick={() => navigate("/hotels")}>
              Hotels
            </li>
            <li
              className="navlink"
              onClick={() => {
                navigate("/food");
              }}
            >
              Food
            </li>
            <li className="navlink" onClick={() => navigate("/entertainment")}>
              Entertainment
            </li>
            <li className="navlink" onClick={() => navigate("/transportation")}>
              Transportation
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
