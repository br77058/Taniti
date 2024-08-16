import React from "react";
import Taniti from "../assets/images/tanitiHome.jpg";
import Button from "@mui/material/Button";
import InfoCard from "../components/InfoCard";
import Food from "../assets/images/food.png";
import Hotels from "../assets/images/hotels.jpg";
import Entertainment from "../assets/images/entertainment.jpg";
import Transportation from "../assets/images/transportation.jpg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="image-container">
        <img src={Taniti} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner">WELCOME TO TANITI</h1>
        <Button
          variant="outlined"
          style={{
            color: "white",
            border: "1px solid white",
            marginTop: "5rem",
          }}
          onClick={() => navigate("/about")}
        >
          Learn More
        </Button>
      </div>
      <div className="content">
        <h1
          className="message"
          style={{ display: "flex", justifyContent: "center" }}
        >
          explore what taniti has to offer
        </h1>

        {/* Handle the info cards and use them as secondary navigation */}

        <div className="card-organizer">
          <InfoCard
            className="clickable"
            text={"food"}
            backgroundImage={Food}
            onClick={() => navigate("/food")}
          />
          <InfoCard
            className={"clickable"}
            text={"hotels"}
            backgroundImage={Hotels}
            onClick={() => navigate("/hotels")}
          />
          <InfoCard
            className={"clickable"}
            text={"entertainment"}
            backgroundImage={Entertainment}
            onClick={() => navigate("/entertainment")}
          />
          <InfoCard
            className={"clickable"}
            text={"transportation"}
            backgroundImage={Transportation}
            onClick={() => navigate("/transportation")}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
