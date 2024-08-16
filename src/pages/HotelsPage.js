import React, { useState, useEffect } from "react";
import "../App.css";
import Hotels from "../assets/images/hotelsPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";

function HotelsPage() {
  const [showScroll, setShowScroll] = useState(true);
  const luxuryParagraph =
    "Taniti offers a selection of exquisite five-star hotels that provide the ultimate in luxury and comfort. Nestled along the island's pristine beaches and surrounded by lush tropical landscapes, these resorts are designed to offer guests an unparalleled experience of relaxation and indulgence. Each hotel boasts spacious suites with breathtaking ocean views, world-class dining options featuring local and international cuisine, and a variety of amenities including infinity pools, private beaches, and full-service spas. Whether you're seeking a romantic getaway, a family vacation, or a serene retreat, Taniti's luxury hotels ensure a stay that is as memorable as the island's natural beauty.";

  const cottageParagraph = `Taniti's charming cottages provide a distinctive way to experience the island, combining the comforts of home with the natural beauty of a tropical paradise. These cozy, individually styled cottages are nestled in serene locations, from secluded beachfronts to lush rainforest settings, offering privacy and tranquility. Perfect for couples seeking romance or families looking for a peaceful retreat, each cottage allows guests to immerse themselves in the island’s laid-back lifestyle. With features like private patios, hammocks, and direct access to nature, Taniti’s cottages offer a truly unique and intimate vacation experience that connects visitors with the island’s authentic charm.`;

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
        <img src={Hotels} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner">HOTELS</h1>
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
          The five star experience ★★★★★
        </h1>
        <div className="card-organizer">
          <InfoCard
            className={"article"}
            text={"luxury"}
            paragraph={luxuryParagraph}
          />
          <InfoCard
            className={"article"}
            text={"cottage"}
            paragraph={cottageParagraph}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
