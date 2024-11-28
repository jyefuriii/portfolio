import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import footerLogo from "../Assets/footer_logo.png"

function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior

    const element = document.getElementById(targetId);
    const headerOffset = 100; // Adjust this to your desired offset

    // Get the position of the element relative to the top of the document
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    // Scroll to the adjusted position smoothly
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <div className="footer">
      <div className="footer_contacts">
        <div onClick={scrollToTop}>
          <img
            className="footer_logo"
            style={{ color: "black" }}
            src={footerLogo}
            alt="footer_logo"
          />
        </div>
        <div className="footer_contactDetails">
          <div className="footer_socials">
            <span>
              <a
                href="https://github.com/jyefuriii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className="footer_socialIcons"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/jeffrey-fabella" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  className="footer_socialIcons"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_content">
        <div className="footer_nav">
          <Link to="/" className="footer_option" onClick={scrollToTop}>
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

          <a
            href="#projects"
            className="footer_option"
            onClick={(e) => handleScrollTo(e, "projects")}
          >
            Projects
          </a>
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
