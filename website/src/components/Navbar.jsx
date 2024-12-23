import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '/Asserts/wallpaperflare.com_wallpaper (2).jpg'; // Ensure you have a logo image

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="Epic Wallpaper Logo" />
        </div>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;