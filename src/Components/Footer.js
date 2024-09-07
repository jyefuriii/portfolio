import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the top of the view
    });
  };
  return (
    <div className="footer">
      <div className="footer_contacts">
        <div>
          <img
            className="footer_logo"
            style={{ color: "black" }}
            src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/footer_logo.png")}
            alt="footer_logo"
          />
        </div>
        <div className="footer_contactDetails">
          <div className="footer_socials">
            <span>
              <GitHubIcon
                className="footer_socialIcons"
                style={{ width: "80px", height: "30px" }}
              />
            </span>
            <span>
              <LinkedInIcon
                className="footer_socialIcons"
                style={{ width: "30px", height: "30px" }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_content">
        <div className="footer_nav">
          <Link to="/" className="footer_option">
            Home
          </Link>
          <a
            href="#techstack"
            className="footer_option"
            onClick={(e) => handleScrollTo(e, "techstack")}
          >
            Tech Stack
          </a>
          <a
            href="#experiences"
            className="footer_option"
            onClick={(e) => handleScrollTo(e, "experiences")}
          >
            Experiences
          </a>
          <div className="footer_option">Projects</div>
          <a
            href="#contact"
            className="footer_option"
            onClick={(e) => handleScrollTo(e, "contact")}
          >
            Contact
          </a>
        </div>
        <div className="footer_subContent">
          <div className="footer_options">
            Designed and built by
            <span className="footer_subContentDesign">Jeffrey Fabella</span>
            with
            <span className="footer_subContentDesign">Love</span>&
            <span className="footer_subContentDesign">Coffee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
