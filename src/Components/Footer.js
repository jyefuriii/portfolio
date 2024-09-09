import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
<<<<<<< HEAD

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
=======
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the top of the view
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
    });
  };
  return (
    <div className="footer">
      <div className="footer_contacts">
<<<<<<< HEAD
        <div onClick={scrollToTop}>
=======
        <div>
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
<<<<<<< HEAD
              <a
                href="https://github.com/jyefuriii" // Replace with your GitHub URL
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
=======
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
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
            </span>
          </div>
        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_content">
        <div className="footer_nav">
<<<<<<< HEAD
          <Link to="/" className="footer_option" onClick={scrollToTop}>
=======
          <Link to="/" className="footer_option">
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
<<<<<<< HEAD
          {/*<div className="footer_option">Projects</div>*/}
=======
          <div className="footer_option">Projects</div>
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
