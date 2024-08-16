import React, { useState, useEffect } from "react";
import "../App.css";
import Transportation from "../assets/images/transportationPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";
import "../styles/Entertainment.css";

function TransportationPage() {
  const [showScroll, setShowScroll] = useState(true);
  const taxiParagraph = `Taniti offers a convenient network of private transportation options, including traditional cabs and ride-sharing services like Uber and Lyft, making it easy for visitors to explore the island. Whether you’re traveling from your hotel to one of the island’s scenic beaches or heading to a local restaurant for dinner, these services provide reliable and comfortable transportation. With drivers who are knowledgeable about the island’s attractions and hidden gems, getting around Taniti is both hassle-free and enjoyable, allowing you to make the most of your time on the island.`;
  const busParagraph = `Taniti’s reliable network of modern buses offers a convenient and comfortable way to explore the island. These buses, equipped with luxurious amenities like free Wi-Fi, ensure that you stay connected as you travel between the island’s attractions. Whether you’re heading to the vibrant markets of Taniti City or venturing out to the serene beaches and lush rainforests, the island’s bus system provides a stress-free transportation option. With regular routes and air-conditioned comfort, Taniti’s buses make it easy for visitors to experience all that the island has to offer without the need for a rental car.`;

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
          <InfoCard
            className={"article"}
            paragraph={taxiParagraph}
            text={"Taxis"}
          />
          <InfoCard
            className={"article"}
            paragraph={busParagraph}
            text={"Buses"}
          />
        </div>
      </div>
    </div>
  );
}

export default TransportationPage;
