import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import porfolioLogo from "../Assets/portfolio_logo.png"

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false); // Close menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false); // Close menu after scrolling to top
  };

  return (
<<<<<<< HEAD
    <header className="header">
      <div className="header_logo" onClick={scrollToTop}>
        <img src={porfolioLogo} alt="Portfolio Logo" />
=======
    <div className='header'>
      <img className='header_logo' src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/portfolio_logo.png')} alt='header_logo'/>
      <div className='header_nav'>
        <div className='header_option'>
          Home
        </div>
        <div className='header_option'>
          About
        </div> 
        <div className='header_option'>
          Tech Stack
        </div>
        <div className='header_option'>
          Projects
        </div>
        <div className='header_option'>
          Contact
        </div>
        <div className='header_option'>
        <LightMode/>
        </div>
>>>>>>> 9ee1d94 (Techstack and Experience portion)
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`header_nav ${isMenuOpen ? "open" : ""}`}>
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
        <a
          href="#projects"
          className="header_option"
          onClick={(e) => handleScrollTo(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="header_option"
          onClick={(e) => handleScrollTo(e, "contact")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
