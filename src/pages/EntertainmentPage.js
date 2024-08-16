import React, { useState, useEffect } from "react";
import "../App.css";
import Entertainment from "../assets/images/entertainmentPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";
import "../styles/Entertainment.css";

function EntertainmentPage() {
  const [showScroll, setShowScroll] = useState(true);
  const musicParagraph =
    "Attending concerts and music events in Taniti is a truly unique experience, blending world-class performances with the island’s stunning natural beauty. Artists from across the globe are drawn to Taniti’s vibrant music scene, performing in extraordinary venues that range from intimate beachfront stages to grand outdoor arenas nestled in the lush rainforest. Whether you’re swaying to the rhythms of a live band under a starlit sky or enjoying a classical concert with the sound of ocean waves in the background, each event offers a magical ambiance that only Taniti can provide. These music experiences not only showcase the talents of international artists but also highlight the island’s cultural fusion, creating unforgettable moments for music lovers.";
  const festivalsParagraph =
    "Taniti’s lively festivals are a vibrant celebration of the island’s rich culture and traditions, bringing together locals and visitors alike in a joyous display of music, dance, and art. These events are filled with colorful parades, traditional Tanitian dances, and live performances that echo the rhythms of the island’s ancestral heritage. Festivals such as the Harvest Moon Festival and the Ocean’s Blessing Ceremony showcase the deep connection between the people and their land, featuring rituals that honor the island’s natural bounty. Visitors can indulge in local delicacies, shop for handcrafted souvenirs, and experience the warmth and hospitality of the Tanitian people. These festivals are not just events; they are immersive experiences that offer a window into the heart and soul of Taniti’s beautiful culture.";
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
          <InfoCard
            className={"article"}
            paragraph={musicParagraph}
            text={"Music"}
          />
          <InfoCard
            className={"article"}
            paragraph={festivalsParagraph}
            text={"Festivals"}
          />
        </div>
      </div>
    </div>
  );
}

export default EntertainmentPage;
