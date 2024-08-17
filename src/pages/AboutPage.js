import React, { useState, useEffect } from "react";
import "../App.css";
import Taniti from "../assets/images/taniti.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";

function AboutPage() {
  const [showScroll, setShowScroll] = useState(true);

  const aboutParagraph =
    "Welcome to Taniti, a hidden gem in the heart of the Pacific where adventure and relaxation await. With its pristine beaches, lush rainforests, and breathtaking volcanic landscapes, Taniti is a paradise for nature lovers and thrill-seekers alike. Immerse yourself in the island’s rich culture, where vibrant festivals, exotic cuisine, and warm hospitality create an unforgettable experience. Whether you’re exploring the vibrant coral reefs, hiking through verdant trails, or simply unwinding at a luxury resort, Taniti offers something for every traveler. Discover the beauty, charm, and endless possibilities that make Taniti more than just a destination—it’s an experience you’ll treasure forever.";

  const faqText = `1. What is the best time to visit Taniti?
    The best time to visit Taniti is during the dry season, from May to October, when the weather is sunny and pleasant, perfect for outdoor activities and beach relaxation.
    
    2. How do I get to Taniti?
    Most visitors arrive by air via Taniti’s small airport, which accommodates both small jets and propeller planes. The island is also accessible by a cruise ship that docks once a week.
    
    3. What are the top attractions on the island?
    Taniti’s top attractions include its pristine beaches, lush rainforests, the active volcano, snorkeling spots, and cultural festivals that showcase the island’s rich heritage.
    `;

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
          <InfoCard className={"article"} text={"FAQ"} paragraph={faqText} />
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
