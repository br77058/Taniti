import React from "react";
import "../styles/InfoCard.css";

const InfoCard = ({ text, backgroundImage, className, paragraph }) => {
  return (
    <div className={`info-card-container ${className ? className : ""}`}>
      <div
        className="info-card-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="info-card-overlay"></div>
      <div className="info-card-content">{text}</div>
      {paragraph && <div className="paragraph">{paragraph}</div>}
    </div>
  );
};

export default InfoCard;
