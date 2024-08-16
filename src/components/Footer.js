import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">T A N I T I</span>
          </div>
          <div className="media-icons">
            <div className="dummy-link">
              <i className="fab fa-facebook-f"></i>
            </div>

            <span className="dummy-link">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="dummy-link">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="dummy-link">
              <i className="fab fa-linkedin-in"></i>
            </span>
            <span className="dummy-link">
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024 <span className="dummy-link">Brandon Roque.</span>{" "}
            All rights reserved
          </span>
          <span className="policy_terms">
            <span className="dummy-link">Privacy policy</span>
            <span className="dummy-link">Terms & condition</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
