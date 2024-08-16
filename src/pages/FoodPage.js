import React, { useState, useEffect } from "react";
import "../App.css";
import Food from "../assets/images/foodPage.jpg";
import InfoCard from "../components/InfoCard";
import "../styles/AboutPage.css";

function FoodPage() {
  const [showScroll, setShowScroll] = useState(true);
  const diningParagraph =
    "Taniti’s five-star dining experiences are a feast for the senses, offering an extraordinary blend of local flavors and international culinary excellence. From elegant beachfront restaurants to sophisticated dining rooms with panoramic ocean views, the island’s top chefs craft menus that showcase the freshest local ingredients, including succulent seafood, tropical fruits, and regional specialties. Guests can indulge in gourmet meals paired with fine wines, all served with impeccable attention to detail. Whether you’re savoring a romantic dinner under the stars or enjoying a luxurious brunch with friends, dining in Taniti is more than just a meal—it’s an unforgettable experience that highlights the island’s vibrant culture and natural bounty.";

  const dishesParagraph =
    "Taniti’s culinary scene is enriched by the island’s exotic dishes, many of which feature fruits and vegetables native to its lush landscapes. The island’s fertile soil and tropical climate yield an abundance of unique produce, such as the vibrant tangy Tanitian pineapple, sweet breadfruit, and aromatic wild ginger. Local chefs skillfully incorporate these ingredients into their creations, offering dishes that are both flavorful and authentic. Guests might savor a freshly caught fish fillet grilled with a citrusy glaze made from native limes, or enjoy a refreshing salad bursting with island-grown mangoes and avocados. These distinctive flavors not only delight the palate but also provide an authentic taste of Taniti’s rich natural heritage, making each meal a true island experience.";

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
        <img src={Food} alt="Taniti Home" />
        <div className="image-overlay"></div>
      </div>
      <div className="message-container">
        <h1 className="banner">FOOD</h1>
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
          paradise for your taste buds
        </h1>
        <div className="card-organizer">
          <InfoCard
            className={"article"}
            paragraph={diningParagraph}
            text={"5 Star Dining"}
          />
          <InfoCard
            className={"article"}
            paragraph={dishesParagraph}
            text={"Exotic Dishes"}
          />
        </div>
      </div>
    </div>
  );
}

export default FoodPage;
