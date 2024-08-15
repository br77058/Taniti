import React, { useState, useEffect } from "react";
import "../App.css";
import Transportation from "../assets/images/transportationPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";
import "../styles/Entertainment.css";

function TransportationPage() {
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
        <img src={Transportation} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner entertainment">TRANSPORTATION</h1>
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
          The greatest public transit system of it's kind
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

export default TransportationPage;
