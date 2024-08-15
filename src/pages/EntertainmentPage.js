import React, { useState, useEffect } from "react";
import "../App.css";
import Entertainment from "../assets/images/entertainmentPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";
import "../styles/Entertainment.css";

function EntertainmentPage() {
  const [showScroll, setShowScroll] = useState(true);

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
        <img src={Entertainment} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner entertainment">ENTERTAINMENT</h1>
        {showScroll ? (
          <div className="scroll"></div>
        ) : (
          <div className="scroll hide"></div>
        )}
      </div>
      <div className="content">
        <h1
          className="message "
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Shows like you've never seen before
        </h1>
        <div className="card-organizer">
          <InfoCard text={"food"} />
          <InfoCard text={"hotels"} />
          <InfoCard text={"entertainment"} />
          <InfoCard text={"transportation"} />
        </div>
      </div>
    </div>
  );
}

export default EntertainmentPage;
