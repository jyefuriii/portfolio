import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
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
    <div className="header">
<<<<<<< HEAD
      <div onClick={scrollToTop}>
        <img
          className="header_logo"
          src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/portfolio_logo.png")}
          alt="header_logo"
        />
      </div>
      <div className="header_nav">
        <Link to="/" className="header_option" onClick={scrollToTop}>
=======
      <img
        className="header_logo"
        src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/portfolio_logo.png")}
        alt="header_logo"
      />
      <div className="header_nav">
        <Link to="/" className="header_option">
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
<<<<<<< HEAD
        {/*<div className="header_option">Projects</div>*/}
=======
        <div className="header_option">Projects</div>
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
