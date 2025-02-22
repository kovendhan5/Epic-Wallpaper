import React, { useState } from "react";
import logo from "../assets/tlogo.png";
import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsActive(false); // Close menu on link click (for mobile)
  };

  return (
    <div className="navbar">
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="Epic Wallpaper Logo" />
        </div>
        <div className={`nav-links ${isActive ? "active" : ""}`}>
          <a
            href="#home"
            className={activeLink === "home" ? "active-link" : ""}
            onClick={() => handleLinkClick("home")}
          >
            HOME
          </a>
          <a
            href="#gallery"
            className={activeLink === "gallery" ? "active-link" : ""}
            onClick={() => handleLinkClick("gallery")}
          >
            GALLERY
          </a>

          {/* <Link to="./components/Gallery">
            <button> Page</button>
          </Link> */}

          <a
            href="#pricing"
            className={activeLink === "pricing" ? "active-link" : ""}
            onClick={() => handleLinkClick("pricing")}
          >
            PRICING
          </a>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active-link" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            CONTACT
          </a>
        </div>
        <div
          className={`menu-icon ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
