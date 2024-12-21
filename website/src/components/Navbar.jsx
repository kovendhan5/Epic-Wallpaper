import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <nav>
        <h1>Epic Wallpaper</h1>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
