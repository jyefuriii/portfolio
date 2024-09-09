import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the top of the view
    });
  };
  return (
    <div className="header">
      <div onClick={scrollToTop}>
        <img
          className="header_logo"
          src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/portfolio_logo.png")}
          alt="header_logo"
        />
      </div>
      <div className="header_nav">
        <Link to="/" className="header_option" onClick={scrollToTop}>
          Home
        </Link>
        <a
          href="#techstack"
          className="header_option"
          onClick={(e) => handleScrollTo(e, "techstack")}
        >
          Tech Stack
        </a>
        <a
          href="#experiences"
          className="header_option"
          onClick={(e) => handleScrollTo(e, "experiences")}
        >
          Experiences
        </a>
        {/*<div className="header_option">Projects</div>*/}
        <a
          href="#contact"
          className="footer_option"
          onClick={(e) => handleScrollTo(e, "contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
