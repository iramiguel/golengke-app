// import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faSquareXTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-upper-part">
          <div className="footer-list-container">
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Order Tracker</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">Policies</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-container">
            <div className="footer-icons-link">
              <p>Follow us!</p>
            </div>
            <div className="footer-links-icons">
              <a
                href="https://www.facebook.com/hislifecitychurchph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  style={{ fontSize: "25px", color: "white" }}
                />
              </a>
              <a
                href="https://www.instagram.com/hislifecitychurch/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "25px", color: "white" }}
                />
              </a>
              <a
                href="https://x.com/hislifeofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  style={{ fontSize: "25px", color: "white" }}
                />
              </a>
              <a
                href="https://www.youtube.com/@HisLifeTVofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "25px", color: "white" }}
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{ fontSize: "25px", color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-form">
          <h2>Stay Connected</h2>
          <p>
            We’d love to keep in touch — sign up for news, <br />
            devotionals, and inspiration.
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="email-submit">
              Join Now!
            </button>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 GoLengke</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
