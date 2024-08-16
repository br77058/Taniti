import React, { useState, useEffect } from "react";
import "../App.css";
import Taniti from "../assets/images/taniti.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";

function AboutPage() {
  const [showScroll, setShowScroll] = useState(true);

  const aboutParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="image-container">
        <img src={Taniti} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner">ABOUT</h1>
        {showScroll ? (
          <div className="scroll"></div>
        ) : (
          <div className="scroll hide"></div>
        )}
      </div>
      <div className="content">
        <h1
          className="message"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Let's see what Taniti is all about
        </h1>
        <div className="card-organizer">
          <InfoCard
            className={"article"}
            text={"about"}
            paragraph={aboutParagraph}
          />
          <InfoCard
            className={"article"}
            text={"FAQ"}
            paragraph={aboutParagraph}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
